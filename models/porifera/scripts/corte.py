# Correr después de geo/mat/reef/scene: crea los cortes (longitudinal y transversal), calcula los puntos anatómicos
# y exporta apps/web/public/models/porifera-corte.glb con export_glb.py.
import bpy, json, math, os
from mathutils import Vector, Matrix

col = bpy.data.collections['Porifera']
for n in ['Tubo_frente_corte', 'Tubo_der_corte', 'Cortador_long', 'Cortador_trans']:
    o = bpy.data.objects.get(n)
    if o: bpy.data.objects.remove(o, do_unlink=True)

# material de las caras cortadas: mesohilo con cámaras flageladas
m = bpy.data.materials.get('Corte_tejido') or bpy.data.materials.new('Corte_tejido')
m.use_nodes = True; nt = m.node_tree
for n in [n for n in nt.nodes if n.type not in ('BSDF_PRINCIPLED', 'OUTPUT_MATERIAL')]: nt.nodes.remove(n)
b = next(n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED')
tc = nt.nodes.new('ShaderNodeTexCoord'); vor = nt.nodes.new('ShaderNodeTexVoronoi')
vor.inputs['Scale'].default_value = 260
nt.links.new(tc.outputs['Object'], vor.inputs['Vector'])
rampa = nt.nodes.new('ShaderNodeValToRGB'); el = rampa.color_ramp.elements
el[0].position, el[0].color = 0.0, (0.62, 0.30, 0.06, 1)
el[1].position, el[1].color = 0.28, (0.93, 0.80, 0.52, 1)
nt.links.new(vor.outputs['Distance'], rampa.inputs['Fac'])
nt.links.new(rampa.outputs['Color'], b.inputs['Base Color'])
b.inputs['Roughness'].default_value = 0.85

def cortador(nombre, centro, normal, tam=1.2):
    bpy.ops.mesh.primitive_cube_add(size=tam, location=centro)
    c = bpy.context.active_object; c.name = nombre
    c.rotation_euler = Vector((0, 0, 1)).rotation_difference(normal).to_euler()
    c.data.materials.append(m); c.hide_render = True; c.hide_viewport = True
    return c

def cortar(nombre_src, nombre, cort):
    src = bpy.data.objects[nombre_src]
    o = src.copy(); o.data = src.data.copy(); o.name = nombre; col.objects.link(o)
    o.hide_render = False
    o.data.materials.append(m)
    mod = o.modifiers.new('corte', 'BOOLEAN'); mod.operation = 'DIFFERENCE'; mod.object = cort; mod.solver = 'EXACT'; mod.use_self = True
    if hasattr(mod, 'material_mode'): mod.material_mode = 'TRANSFER'
    bpy.context.view_layer.objects.active = o
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True)
    bpy.ops.object.modifier_apply(modifier='corte')
    src.hide_set(True); src.hide_render = True
    return o

# longitudinal: plano que contiene el eje del tubo de adelante y mira a la cámara (-y)
raiz, tope = Vector((0.01, -0.01, 0.0)), Vector((0.03, -0.12, 0.40))
eje = (tope - raiz).normalized()
n_long = Vector((1, 0, 0)).cross(eje).normalized()  # hacia -y
medio = (raiz + tope) / 2
c_long = cortador('Cortador_long', medio + n_long * 0.6, n_long)
frente = cortar('Tubo_frente', 'Tubo_frente_corte', c_long)

# transversal: corta la parte de arriba del tubo derecho
z_corte = 0.37
c_trans = cortador('Cortador_trans', Vector((0.15, 0.06, z_corte + 0.6)), Vector((0, 0, 1)))
der = cortar('Tubo_der', 'Tubo_der_corte', c_trans)
bpy.context.view_layer.update()

# puntos anatómicos: rayos contra las piezas para caer en la superficie (Blender z-up -> glTF y-up)
deps = bpy.context.evaluated_depsgraph_get()
def rayo(origen, direccion):
    ok, loc, nor, *_ = bpy.context.scene.ray_cast(deps, Vector(origen), Vector(direccion).normalized())
    if not ok: raise RuntimeError(f'sin impacto {origen}')
    return loc, nor
gl = lambda v: [round(v.x, 4), round(v.z, 4), round(-v.y, 4)]
def en_eje(z):
    t = (z - raiz.z) / (tope.z - raiz.z); return raiz.lerp(tope, t)

puntos = {}
def poner(id, loc, nor): puntos[id] = {'posicion': gl(loc), 'normal': gl(nor.normalized())}
# ósculo: boca del tubo central
loc, nor = rayo((-0.01, 0.13, 0.9), (0, 0, -1)); poner('osculo', loc + Vector((0, 0, 0.005)), Vector((0, 0, 1)))
# espongocele: fondo de la cavidad del tubo cortado, visto desde adelante
p = en_eje(0.24); loc, nor = rayo(p + n_long * 0.4, -n_long); poner('espongocele', loc, nor)
# mesohilo: cara de corte de la pared (al costado del eje)
lado = Vector((1, 0, 0))
for d in [0.05, 0.055, 0.06, 0.065, 0.07]:
    try:
        loc, nor = rayo(en_eje(0.2) + lado * d + n_long * 0.4, -n_long)
        if nor.dot(n_long) > 0.9: break
    except RuntimeError: pass
poner('mesohilo', loc, nor)
# cámaras flageladas (coanocitos): anillo del corte transversal, mirando hacia arriba
loc, nor = rayo((0.15 + 0.06, 0.06, 0.8), (0, 0, -1)); poner('coanocitos', loc, nor)
# esqueleto de espongina: otro punto del anillo
loc, nor = rayo((0.15 - 0.065, 0.06, 0.8), (0, 0, -1)); poner('espongina', loc, nor)
# pinacodermo y ostíolos: superficie externa del tubo izquierdo, de frente
loc, nor = rayo((-0.12, -0.6, 0.30), (0, 1, 0)); poner('pinacodermo', loc, nor)
loc, nor = rayo((-0.08, -0.6, 0.18), (0, 1, 0)); poner('ostiolos', loc, nor)
# base de fijación
loc, nor = rayo((0.0, -0.6, 0.05), (0, 1, 0)); poner('base', loc, nor)

ruta = '/home/mayko/orca/biologia-animal/models/porifera/puntos-corte.json'
json.dump(puntos, open(ruta, 'w'), indent=1)
print('puntos', json.dumps(puntos))

TUBOS = ['Tubo_izq', 'Tubo_centro', 'Tubo_der_corte', 'Tubo_frente_corte', 'Base_esponja']
SALIDA = 'porifera-corte.glb'
exec(open('/home/mayko/orca/biologia-animal/models/porifera/scripts/export_glb.py').read())
