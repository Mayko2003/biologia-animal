# Correr después de geo/mat/reef/scene: crea versiones livianas, hornea color + normales y exporta el .glb.
import bpy, os
sc=bpy.context.scene
exp=bpy.data.collections.get('Export_GLB') or bpy.data.collections.new('Export_GLB')
if exp.name not in sc.collection.children: sc.collection.children.link(exp)
for o in list(exp.objects): bpy.data.objects.remove(o,do_unlink=True)
for blk in (bpy.data.meshes, bpy.data.materials):
    for d in [d for d in blk if d.users==0]: blk.remove(d)

def activate(o):
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active=o

def dup_join(names, newname):
    objs=[]
    for n in names:
        src=bpy.data.objects[n]; o=src.copy(); o.data=src.data.copy(); exp.objects.link(o); objs.append(o)
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.select_set(True)
    bpy.context.view_layer.objects.active=objs[0]
    if len(objs)>1: bpy.ops.object.join()
    o=bpy.context.view_layer.objects.active; o.name=newname
    return o

def low_copy(hi, name, ratio):
    lo=hi.copy(); lo.data=hi.data.copy(); lo.name=name; lo.data.name=name; exp.objects.link(lo)
    lo.modifiers.new('dec','DECIMATE').ratio=ratio
    activate(lo); bpy.ops.object.modifier_apply(modifier='dec')
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.uv.smart_project(angle_limit=1.15, island_margin=0.003)
    bpy.ops.object.mode_set(mode='OBJECT')
    return lo

def glb_mat(obj, name, res, rough):
    m=bpy.data.materials.new(name); m.use_nodes=True; nt=m.node_tree
    b=next(n for n in nt.nodes if n.type=='BSDF_PRINCIPLED')
    texs={}
    for kind in ('color','normal'):
        iname=f'{name}_{kind}'
        if bpy.data.images.get(iname): bpy.data.images.remove(bpy.data.images[iname])
        img=bpy.data.images.new(iname,res,res,alpha=False)
        if kind=='normal': img.colorspace_settings.name='Non-Color'
        t=nt.nodes.new('ShaderNodeTexImage'); t.image=img; texs[kind]=t
    nt.links.new(texs['color'].outputs['Color'], b.inputs['Base Color'])
    nm=nt.nodes.new('ShaderNodeNormalMap')
    nt.links.new(texs['normal'].outputs['Color'], nm.inputs['Color']); nt.links.new(nm.outputs['Normal'], b.inputs['Normal'])
    b.inputs['Roughness'].default_value=rough
    obj.data.materials.clear(); obj.data.materials.append(m)
    return nt, texs

def bake(hi, lo, nt, texs):
    bpy.ops.object.select_all(action='DESELECT'); hi.select_set(True); lo.select_set(True)
    bpy.context.view_layer.objects.active=lo
    bk=sc.render.bake; bk.use_selected_to_active=True; bk.cage_extrusion=0.008; bk.max_ray_distance=0.03; bk.margin=8
    for kind,t in texs.items():
        for n in nt.nodes: n.select=False
        nt.nodes.active=t; t.select=True
        if kind=='color': bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'})
        else: bpy.ops.object.bake(type='NORMAL', normal_space='TANGENT')
    t.image.pack(); texs['color'].image.pack()

prev=sc.render.engine; sc.render.engine='CYCLES'; sc.cycles.samples=4
TUBOS=globals().get('TUBOS',['Tubo_izq','Tubo_centro','Tubo_der','Tubo_frente','Base_esponja'])
SALIDA=globals().get('SALIDA','porifera.glb')
hi=dup_join(TUBOS,'Esponja_hi')
lo=low_copy(hi,'Esponja',0.22); bake(hi,lo,*glb_mat(lo,'Esponja_GLB',2048,0.75))
rh=dup_join(['Roca_base'],'Roca_hi')
rl=low_copy(rh,'Roca',0.12); bake(rh,rl,*glb_mat(rl,'Roca_GLB',1024,0.9))
sc.render.engine=prev
for o in (hi,rh): bpy.data.objects.remove(o,do_unlink=True)
for d in [d for d in bpy.data.meshes if d.users==0]: bpy.data.meshes.remove(d)

base=bpy.path.abspath('//') or '/home/mayko/orca/biologia-animal/models/porifera/'
out=os.path.join(base,'..','..','apps','web','public','models',SALIDA)
os.makedirs(os.path.dirname(out), exist_ok=True)
for o in bpy.context.view_layer.objects: o.select_set(False)
lo.select_set(True); rl.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.normpath(out), export_format='GLB', use_selection=True,
    export_cameras=False, export_lights=False, export_apply=True, export_image_format='JPEG', export_jpeg_quality=88)
print('exportado', os.path.normpath(out))
