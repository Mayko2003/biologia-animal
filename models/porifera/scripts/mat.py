import bpy, bmesh, math
from mathutils import Vector, noise

col=bpy.data.collections['Porifera']

def node(nt, typ, loc, **kw):
    n=nt.nodes.new(typ); n.location=loc
    for k,v in kw.items(): setattr(n,k,v)
    return n

def inp(n, *names):
    for nm in names:
        if nm in n.inputs: return n.inputs[nm]
    raise KeyError(names)

def sid(socks, ident):
    return next(x for x in socks if x.identifier==ident)

def principled(nt):
    return next(n for n in nt.nodes if n.type=='BSDF_PRINCIPLED')

def ramp(nt, loc, stops):
    r=node(nt,'ShaderNodeValToRGB',loc)
    el=r.color_ramp.elements
    el[0].position,el[0].color=stops[0]
    el[1].position,el[1].color=stops[-1]
    for p,c in stops[1:-1]:
        e=el.new(p); e.color=c
    return r

# ---------- Esponja ----------
m=bpy.data.materials.get('Esponja_Aplysina') or bpy.data.materials.new('Esponja_Aplysina')
m.use_nodes=True; nt=m.node_tree; L=nt.links
for n in [n for n in nt.nodes if n.type not in ('BSDF_PRINCIPLED','OUTPUT_MATERIAL')]: nt.nodes.remove(n)
bsdf=principled(nt); bsdf.location=(600,0)
out=next(n for n in nt.nodes if n.type=='OUTPUT_MATERIAL'); out.location=(900,0)
tc=node(nt,'ShaderNodeTexCoord',(-1400,0))
a_kind=node(nt,'ShaderNodeAttribute',(-1400,300),attribute_name='kind')
a_rel=node(nt,'ShaderNodeAttribute',(-1400,500),attribute_name='relieve')
inner=node(nt,'ShaderNodeMath',(-1150,300),operation='GREATER_THAN'); inner.inputs[1].default_value=1.5
L.new(a_kind.outputs['Fac'],inner.inputs[0])
# variación de color macro
nz=node(nt,'ShaderNodeTexNoise',(-1150,-100)); inp(nz,'Scale').default_value=9; inp(nz,'Detail').default_value=4
L.new(tc.outputs['Object'],nz.inputs['Vector'])
rel_mix=node(nt,'ShaderNodeMath',(-950,500),operation='MULTIPLY_ADD')
rel_mix.inputs[1].default_value=0.8
L.new(a_rel.outputs['Fac'],rel_mix.inputs[0]); L.new(nz.outputs['Fac'],rel_mix.inputs[2])
# en la base del MULTIPLY_ADD: relieve*0.8 + noise  -> rango ~0.4..1.6 ; normalizar
rel_n=node(nt,'ShaderNodeMapRange',(-750,500))
inp(rel_n,'From Min').default_value=0.35; inp(rel_n,'From Max').default_value=1.25
L.new(rel_mix.outputs[0],inp(rel_n,'Value'))
outer_col=ramp(nt,(-500,500),[(0.0,(0.25,0.09,0.003,1)),(0.3,(0.62,0.30,0.01,1)),(0.65,(0.88,0.52,0.02,1)),(1.0,(1.0,0.72,0.06,1))])
L.new(rel_n.outputs[0],outer_col.inputs['Fac'])
inner_col=ramp(nt,(-500,250),[(0.0,(0.70,0.52,0.05,1)),(1.0,(0.95,0.82,0.18,1))])
L.new(nz.outputs['Fac'],inner_col.inputs['Fac'])
# ostíolos (poros inhalantes): puntos oscuros pequeños sobre la superficie externa
vor=node(nt,'ShaderNodeTexVoronoi',(-1150,-400)); inp(vor,'Scale').default_value=520; inp(vor,'Randomness').default_value=1.0
L.new(tc.outputs['Object'],vor.inputs['Vector'])
pore=node(nt,'ShaderNodeMapRange',(-900,-400))
inp(pore,'From Min').default_value=0.08; inp(pore,'From Max').default_value=0.22
L.new(vor.outputs['Distance'],inp(pore,'Value'))   # 0 en el centro del poro -> 1 fuera
pore_mask=node(nt,'ShaderNodeMath',(-700,-400),operation='MAXIMUM')
L.new(pore.outputs[0],pore_mask.inputs[0]); L.new(inner.outputs[0],pore_mask.inputs[1])  # sin poros dentro
mix_io=node(nt,'ShaderNodeMix',(-200,400),data_type='RGBA')
L.new(inner.outputs[0],sid(mix_io.inputs,'Factor_Float')); L.new(outer_col.outputs['Color'],sid(mix_io.inputs,'A_Color')); L.new(inner_col.outputs['Color'],sid(mix_io.inputs,'B_Color'))
mix_pore=node(nt,'ShaderNodeMix',(100,300),data_type='RGBA',blend_type='MULTIPLY')
sid(mix_pore.inputs,'Factor_Float').default_value=1.0
L.new(sid(mix_io.outputs,'Result_Color'),sid(mix_pore.inputs,'A_Color'))
pc=node(nt,'ShaderNodeMapRange',(-500,-400)); inp(pc,'To Min').default_value=0.25
L.new(pore_mask.outputs[0],inp(pc,'Value'))
L.new(pc.outputs[0],sid(mix_pore.inputs,'B_Color'))
L.new(sid(mix_pore.outputs,'Result_Color'),bsdf.inputs['Base Color'])
# bump fino: grano + poros
nzf=node(nt,'ShaderNodeTexNoise',(-900,-700)); inp(nzf,'Scale').default_value=260; inp(nzf,'Detail').default_value=6
L.new(tc.outputs['Object'],nzf.inputs['Vector'])
bh=node(nt,'ShaderNodeMath',(-500,-650),operation='MULTIPLY_ADD')
L.new(pore_mask.outputs[0],bh.inputs[0]); bh.inputs[1].default_value=0.6; L.new(nzf.outputs['Fac'],bh.inputs[2])
bump=node(nt,'ShaderNodeBump',(300,-400)); inp(bump,'Strength').default_value=0.35; inp(bump,'Distance').default_value=0.002
L.new(bh.outputs[0],inp(bump,'Height')); L.new(bump.outputs['Normal'],bsdf.inputs['Normal'])
inp(bsdf,'Roughness').default_value=0.72
inp(bsdf,'Subsurface Weight').default_value=0.3
inp(bsdf,'Subsurface Radius').default_value=(1.0,0.55,0.15)
inp(bsdf,'Subsurface Scale').default_value=0.006
for o in col.objects:
    if o.name.startswith(('Tubo','Base_esponja')):
        o.data.materials.clear(); o.data.materials.append(m)

# ---------- Roca arrecifal ----------
r=bpy.data.materials.get('Roca_arrecife') or bpy.data.materials.new('Roca_arrecife')
r.use_nodes=True; nt=r.node_tree; L=nt.links
for n in [n for n in nt.nodes if n.type not in ('BSDF_PRINCIPLED','OUTPUT_MATERIAL')]: nt.nodes.remove(n)
b=principled(nt)
tc=node(nt,'ShaderNodeTexCoord',(-1000,0))
n1=node(nt,'ShaderNodeTexNoise',(-800,200)); inp(n1,'Scale').default_value=14; inp(n1,'Detail').default_value=8; inp(n1,'Roughness').default_value=0.65
L.new(tc.outputs['Object'],n1.inputs['Vector'])
c1=ramp(nt,(-550,200),[(0.3,(0.015,0.02,0.015,1)),(0.45,(0.06,0.065,0.045,1)),(0.53,(0.04,0.09,0.03,1)),(0.6,(0.10,0.04,0.07,1)),(0.7,(0.12,0.11,0.08,1))])
L.new(n1.outputs['Fac'],c1.inputs['Fac'])
L.new(c1.outputs['Color'],b.inputs['Base Color'])
n2=node(nt,'ShaderNodeTexNoise',(-800,-200)); inp(n2,'Scale').default_value=120; inp(n2,'Detail').default_value=8
L.new(tc.outputs['Object'],n2.inputs['Vector'])
bp=node(nt,'ShaderNodeBump',(-300,-200)); inp(bp,'Strength').default_value=0.6; inp(bp,'Distance').default_value=0.004
L.new(n2.outputs['Fac'],inp(bp,'Height')); L.new(bp.outputs['Normal'],b.inputs['Normal'])
inp(b,'Roughness').default_value=0.9
print('materiales ok')
