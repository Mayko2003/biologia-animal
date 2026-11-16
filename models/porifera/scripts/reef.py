import bpy, bmesh, math, random
from mathutils import Vector, noise
col=bpy.data.collections['Porifera']
for nm in [o.name for o in col.objects if o.name.startswith('Roca')]:
    bpy.data.objects.remove(bpy.data.objects[nm], do_unlink=True)
def rock(name, center, size, seed, sub=6, amp=0.35):
    bm=bmesh.new(); bmesh.ops.create_icosphere(bm, subdivisions=sub, radius=1.0)
    sx,sy,sz=size
    for v in bm.verts:
        n=v.co.normalized()
        h=noise.fractal(n*1.3+Vector((seed,0,seed)),0.6,2.1,6)
        hh=noise.ridged_multi_fractal(n*4+Vector((0,seed,0)),0.9,2.0,4,1.0,2.0)
        v.co=Vector((n.x*sx,n.y*sy,n.z*sz))*(1+amp*h+0.06*hh)+Vector(center)
    me=bpy.data.meshes.new(name); bm.to_mesh(me); bm.free(); me.shade_smooth()
    o=bpy.data.objects.new(name,me); col.objects.link(o)
    o.data.materials.append(bpy.data.materials['Roca_arrecife'])
    return o
rock('Roca_base',(0.0,0.03,-0.16),(0.48,0.42,0.17),11)
print('roca ok')
