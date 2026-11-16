import bpy, math
from mathutils import Vector
sc=bpy.context.scene
col=bpy.data.collections['Porifera']
# motor
try:
    sc.render.engine='BLENDER_EEVEE'
except TypeError as e:
    print('engine err', e)
print('engine', sc.render.engine)
sc.render.resolution_x=1080; sc.render.resolution_y=1350
# mundo: agua azul profunda con gradiente vertical
w=sc.world or bpy.data.worlds.new('Agua'); sc.world=w; w.use_nodes=True; nt=w.node_tree; L=nt.links
for n in list(nt.nodes):
    if n.type!='OUTPUT_WORLD': nt.nodes.remove(n)
out=next(n for n in nt.nodes if n.type=='OUTPUT_WORLD')
bg=nt.nodes.new('ShaderNodeBackground'); tc=nt.nodes.new('ShaderNodeTexCoord'); sep=nt.nodes.new('ShaderNodeSeparateXYZ')
rp=nt.nodes.new('ShaderNodeValToRGB')
L.new(tc.outputs['Generated'],sep.inputs[0]); L.new(sep.outputs['Z'],rp.inputs['Fac'])
el=rp.color_ramp.elements
el[0].position=0.3; el[0].color=(0.003,0.03,0.07,1)
el[1].position=0.8; el[1].color=(0.03,0.25,0.50,1)
L.new(rp.outputs['Color'],bg.inputs['Color']); bg.inputs['Strength'].default_value=1.3
L.new(bg.outputs['Background'],out.inputs['Surface'])
# luces
for nm in ['Sol_superficie','Flash_buzo','Contraluz']:
    o=bpy.data.objects.get(nm)
    if o: bpy.data.objects.remove(o,do_unlink=True)
def light(nm,typ,loc,energy,color,size=None,rot=None):
    ld=bpy.data.lights.new(nm,typ); ld.energy=energy; ld.color=color
    if size is not None:
        if typ=='AREA': ld.size=size
        else: ld.angle=size
    o=bpy.data.objects.new(nm,ld); col.objects.link(o); o.location=loc
    if rot: o.rotation_euler=rot
    return o
light('Sol_superficie','SUN',(0,0,3),2.5,(0.55,0.80,1.0),size=math.radians(8),rot=(math.radians(15),math.radians(-10),0))
flash=light('Flash_buzo','AREA',(-0.6,-1.3,0.9),45,(1.0,0.90,0.75),size=0.5)
light('Contraluz','AREA',(0.5,1.0,1.1),25,(0.4,0.7,1.0),size=0.6)
def aim(o,target):
    d=Vector(target)-o.location; o.rotation_euler=d.to_track_quat('-Z','Y').to_euler()
aim(flash,(0,0,0.3)); aim(bpy.data.objects['Contraluz'],(0,0,0.35))
old=bpy.data.objects.get('Light')
if old: old.hide_render=True; old.hide_viewport=True
# cámara
cam=bpy.data.objects.get('Camera')
cam.location=(0.15,-1.25,0.98); cam.data.lens=50
aim(cam,(0.0,0.02,0.26)); sc.camera=cam
vs=sc.view_settings
try: vs.look='AgX - Punchy'
except TypeError as e: print(e)
vs.exposure=-0.3
try: sc.eevee.taa_render_samples=96
except Exception as e: print(e)
sc.render.filepath='//porifera_render.png'
print('escena ok')
