import bpy, bmesh, math, random
from mathutils import Vector, noise

col = bpy.data.collections.get('Porifera') or bpy.data.collections.new('Porifera')
if col.name not in bpy.context.scene.collection.children:
    bpy.context.scene.collection.children.link(col)

def cubic(p0,p1,p2,p3,t):
    m=1-t
    return m**3*p0+3*m*m*t*p1+3*m*t*t*p2+t**3*p3

def make_axis(root, top, n=400):
    root=Vector(root); top=Vector(top)
    h=top.z-root.z
    lean=Vector((top.x-root.x, top.y-root.y, 0))
    p1=root+lean*0.55+Vector((0,0,h*0.25))
    p2=top-Vector((0,0,h*0.45))
    pts=[cubic(root,p1,p2,top,i/(n-1)) for i in range(n)]
    L=[0.0]
    for i in range(1,n): L.append(L[-1]+(pts[i]-pts[i-1]).length)
    tans=[(pts[min(i+1,n-1)]-pts[max(i-1,0)]).normalized() for i in range(n)]
    N=[]; nrm=Vector((1,0,0))
    for t in tans:
        nrm=(nrm-t*nrm.dot(t)).normalized(); N.append(nrm.copy())
    B=[tans[i].cross(N[i]) for i in range(n)]
    return pts,tans,N,B,L

def frame_at(ax, s):
    pts,tans,N,B,L=ax
    d=s*L[-1]; lo,hi=0,len(L)-1
    while hi-lo>1:
        mid=(lo+hi)//2
        if L[mid]<d: lo=mid
        else: hi=mid
    f=(d-L[lo])/max(L[hi]-L[lo],1e-9)
    return (pts[lo].lerp(pts[hi],f), tans[lo].lerp(tans[hi],f).normalized(),
            N[lo].lerp(N[hi],f).normalized(), B[lo].lerp(B[hi],f).normalized())

def surface_height(p, seed):
    """Relieve conuloso: cónulos (picos en centros de celdas) unidos por crestas."""
    q=p*1.0+Vector((seed*3.1,seed*1.7,seed*2.3))
    w=noise.noise_vector(q*16.0)*0.007          # deformación de dominio -> irregular
    dists,_=noise.voronoi((q+w)*48.0, distance_metric='DISTANCE')
    f1,f2=dists[0],dists[1]
    cone=max(0.0,1.0-f1/0.9)**1.4               # cónulos
    ridge=max(0.0,1.0-(f2-f1)/0.30)**2           # crestas entre cónulos
    lump=noise.fractal(q*14.0,0.8,2.0,3)         # ondulación grande
    return 0.7*cone+0.3*ridge, lump

def make_tube(name, root, top, r0, r1, wall, seed, ntheta=144, nout=210, ninner=150, nrim=14, ucav=0.12,
              amp=0.015, amp_lump=0.005):
    ax=make_axis(root, top)
    def ro(u):
        return (r0+(r1-r0)*(u**0.8))*(1+noise.noise(Vector((u*3.0, seed*7.3, 0.5)))*0.08)
    prof=[]
    for k in range(6,0,-1):
        ps=k/6*math.pi/2
        prof.append((0.0, ro(0)*math.sin(ps), -ro(0)*0.5*math.cos(ps), 0))
    for i in range(nout+1):
        u=i/nout; prof.append((u, ro(u), 0.0, 0))
    rc=ro(1)-wall/2
    for k in range(1,nrim):
        ph=k/nrim*math.pi
        prof.append((1.0, rc+wall/2*math.cos(ph)+wall*0.12*math.sin(ph), wall*0.55*math.sin(ph), 1))
    for i in range(ninner+1):
        u=1-(1-ucav)*i/ninner
        prof.append((u, ro(u)-wall*(1+0.15*(1-u)), 0.0, 2))
    ri=ro(ucav)-wall*1.13
    for k in range(1,7):
        ps=k/6*math.pi/2
        prof.append((ucav, ri*math.cos(ps), -ri*0.7*math.sin(ps), 2))
    bm=bmesh.new()
    kl=bm.verts.layers.float.new('kind')
    rings=[]
    for (u,s,a,kind) in prof:
        P,T,n_,b_=frame_at(ax,u)
        ring=[]
        for j in range(ntheta):
            th=2*math.pi*j/ntheta
            v=bm.verts.new(P+T*a+(n_*math.cos(th)+b_*math.sin(th))*s)
            v[kl]=kind; ring.append(v)
        rings.append(ring)
    for r in range(len(rings)-1):
        A=rings[r]; Bq=rings[r+1]
        for j in range(ntheta):
            j2=(j+1)%ntheta
            bm.faces.new((A[j],A[j2],Bq[j2],Bq[j]))
    P,T,_,_=frame_at(ax,0.0); p0=bm.verts.new(P-T*ro(0)*0.5); p0[kl]=0
    P,T,_,_=frame_at(ax,ucav); p1=bm.verts.new(P-T*ri*0.7); p1[kl]=2
    for j in range(ntheta):
        j2=(j+1)%ntheta
        bm.faces.new((p0,rings[0][j2],rings[0][j]))
        bm.faces.new((p1,rings[-1][j],rings[-1][j2]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.normal_update()
    # desplazamiento
    cav=bm.verts.layers.float.new('relieve')
    disp=[]
    for v in bm.verts:
        k=v[kl]
        h,lump=surface_height(v.co, seed)
        if k==0:   d=amp*h+amp_lump*lump
        elif k==1: d=amp*0.35*h+amp_lump*0.3*lump
        else:      d=amp*0.18*h+0.0008*lump
        v[cav]=h if k<2 else 0.5+0.3*h
        disp.append((v, v.normal*d))
    for v,dv in disp: v.co+=dv
    me=bpy.data.meshes.new(name)
    bm.to_mesh(me); bm.free()
    me.shade_smooth() if hasattr(me,'shade_smooth') else None
    ob=bpy.data.objects.new(name, me)
    col.objects.link(ob)
    return ob

def make_blob(name, center, size, seed, amp=0.25, subdiv=6, kind=0.0, relief=True):
    bm=bmesh.new()
    bmesh.ops.create_icosphere(bm, subdivisions=subdiv, radius=1.0)
    kl=bm.verts.layers.float.new('kind'); cav=bm.verts.layers.float.new('relieve')
    sx,sy,sz=size
    for v in bm.verts:
        n=v.co.normalized()
        big=noise.fractal(n*1.6+Vector((seed,seed*2,0)),0.7,2.0,4)
        v.co=Vector((n.x*sx,n.y*sy,n.z*sz))*(1+amp*big)+Vector(center)
        v[kl]=kind
    bm.normal_update()
    if relief:
        disp=[]
        for v in bm.verts:
            h,l=surface_height(v.co,seed)
            v[cav]=h; disp.append((v,v.normal*(0.011*h+0.004*l)))
        for v,d in disp: v.co+=d
    me=bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    me.shade_smooth()
    ob=bpy.data.objects.new(name, me); col.objects.link(ob)
    return ob

for o in [o for o in col.objects if o.name.startswith(('Tubo','Base_esponja'))]: bpy.data.objects.remove(o, do_unlink=True)

SPECS=[
 ('Tubo_izq',   (-0.02, 0.02, 0.03), (-0.18, 0.07, 0.50), 0.056, 0.070, 0.017, 1),
 ('Tubo_centro',( 0.00, 0.04, 0.02), (-0.01, 0.13, 0.60), 0.060, 0.076, 0.018, 2),
 ('Tubo_der',   ( 0.02, 0.02, 0.03), ( 0.17, 0.07, 0.57), 0.060, 0.075, 0.018, 3),
 ('Tubo_frente',( 0.01,-0.01, 0.00), ( 0.03,-0.12, 0.40), 0.064, 0.082, 0.019, 4),
]
tubes=[make_tube(*s) for s in SPECS]
base=make_blob('Base_esponja',(0.0,0.015,0.05),(0.10,0.085,0.10),7,amp=0.18,subdiv=7)
for o in tubes+[base]:
    print(o.name, len(o.data.vertices), tuple(round(x,3) for x in o.dimensions))
