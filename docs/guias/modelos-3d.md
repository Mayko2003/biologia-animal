# Guía: modelos 3D

Los modelos se generan por código en Blender y se exportan a `.glb` para la web. En el repo se guardan los scripts y
el `.glb`; el `.blend` y los renders quedan fuera (`.gitignore`) porque se regeneran.

## Dónde está cada cosa

| Qué | Ruta |
|---|---|
| Scripts de un modelo | `models/<grupo>/scripts/` |
| Archivo para la web | `apps/web/public/models/<grupo>.glb` (se sirve en `/models/<grupo>.glb`) |
| Fuente editable (local) | `models/<grupo>/<grupo>.blend` |

## Regenerar Porifera

En Blender 5.x, partí de la escena por defecto y borrá el cubo (`scene.py` reutiliza la cámara `Camera` y oculta
la luz `Light`). Ejecutá los scripts **en este orden** (editor de texto de Blender, o el MCP de
Blender con `exec(open(ruta).read())`):

| Script | Hace |
|---|---|
| `geo.py` | Cuatro tubos con cavidad atrial (espongocele), ósculos, pared gruesa y relieve conuloso, más la base |
| `mat.py` | Materiales procedurales: exterior amarillo, interior pálido y ostíolos; roca de arrecife |
| `reef.py` | La roca de sustrato |
| `scene.py` | Agua, luces, cámara y salida del render (`//porifera_render.png`) |
| `export_glb.py` | Versión liviana (~116 000 triángulos), horneado de color y normales, y exportación a `apps/web/public/models/porifera.glb` |

`export_glb.py` usa Cycles para hornear. Guardá el `.blend` en `models/porifera/` antes de exportar, así la ruta de
salida se resuelve relativa al archivo.

## Al exportar para la web

- Lo procedural de Blender no viaja en glTF: color, poros y relieve fino se hornean en texturas (2048 px para el
  modelo principal, JPEG).
- Se pierde la translucidez (subsurface); la luz y el fondo los pone el visor de la página.
- Apuntá a menos de 10 MB por modelo. Si hace falta achicar, la opción es Draco, pero el visor necesita su decodificador.

## Anatomía de referencia (Porifera)

El modelo representa *Aplysina fistularis* (esponja tubular amarilla del Caribe, demosponja leuconoide):

- Tubos que nacen de una base común, sin ramificarse, con ósculos amplios arriba.
- Pared gruesa (pinacodermo y mesohilo) y espongocele interior más claro y liso.
- Superficie conulosa (cónulos unidos por crestas) con ostíolos.
- Esqueleto de espongina, sin espículas silíceas.

Para cada modelo nuevo, dejá en esta sección qué especie representa y qué rasgos anatómicos muestra.
