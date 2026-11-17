# Estado actual

App web para estudiar Biología Animal con el material de la cátedra. Toda la UI y el contenido están en español.
El contenido es estático (datos en TypeScript dentro del repo): no hay base de datos, API ni backend todavía.

Última revisión: 2026-11-16.

## Funcionalidades

| Ruta | Qué hace |
|---|---|
| `/` | Landing: qué es la app y para qué sirve, accesos a las herramientas, phyla por linaje y cómo leer las fuentes. |
| `/grupo/[slug]` | **Ficha como presentación** (estilo Prezi), a pantalla completa con barra lateral (ver abajo). |
| `/comparar?a=…&b=…` | **Comparador como presentación**, igual que la ficha (ver abajo). |
| `/buscar` | **Explorador**: red interactiva a pantalla completa que une el antiguo mapa embrionario, el árbol taxonómico y el buscador (ver abajo). |

En todas las fichas, el filtro **"Solo apuntes"** oculta los datos de fuentes externas. Cada dato muestra una
insignia con su fuente (archivo, líneas y cita literal del apunte, o el enlace web).

### Ficha (`/grupo/[slug]`)

- **Vista general**: un círculo central (imagen, nombre y nivel) rodeado por los 10 sistemas (tegumento, esqueleto y
  sostén, muscular, digestivo, respiratorio, circulatorio, excretor, nervioso, órganos de los sentidos y reproductor),
  cada uno con su ícono y su cantidad de datos. Los sistemas sin datos o ausentes se ven punteados.
- **Diapositivas**: al tocar un círculo la cámara hace zoom y el círculo se abre en una hoja rectangular de lectura.
  La principal tiene, en dos columnas, la imagen con crédito y los criterios embrionarios a la izquierda y el resumen
  a la derecha. Cada sistema muestra sus datos como párrafos, con cuántos vienen de los apuntes y cuántos de fuentes
  externas; si no hay datos, lo dice. Se pasa de una a otra con las flechas (pantalla o teclado), con el mini anillo
  del encabezado o deslizando en el celular, y Escape vuelve a la vista general.
- **Barra lateral** (contraíble, como en el explorador): ruta taxonómica, nombre, accesos a "Ver en la red" y
  "Comparar con…", y secciones plegables con subgrupos, morfología externa, estructuras especiales, reproducción,
  bioecología, ejemplos y notas.
- **Grupos superiores** (reino a clado): no tienen sistemas; alrededor del círculo central aparecen sus phyla, que
  llevan a cada ficha.
- El filtro "Solo apuntes" queda arriba a la derecha.

### Comparador (`/comparar`)

- **Vista general**: el círculo central dice "Porifera vs Cnidaria", con las dos imágenes partidas al medio y el
  ancestro común. Alrededor, los 10 sistemas: cada uno indica "Difieren" (con un punto ocre), "Ambos con datos",
  "Ausente en ambos" o "Sin datos en ambos".
- **Diapositiva principal**: las dos imágenes, una tabla de desarrollo embrionario (criterio, A y B, con los criterios
  que difieren marcados) y el resumen, la morfología externa y las estructuras especiales en dos columnas.
- **Diapositiva de cada sistema**: tabla comparativa en dos columnas (A a la izquierda en verde, B a la derecha en
  óxido); en el celular se apilan.
- **Barra lateral**: selectores de A y B (buscables: se escribe parte del nombre y se elige con el mouse o con las flechas y Enter), intercambiar, ancestro común, ruta de cada grupo desde el ancestro, enlace a
  cada ficha, cuántos sistemas difieren y "Mostrar solo los sistemas que difieren".
- "Difieren" significa que cambia el estado (uno tiene datos y el otro no o está ausente), no el contenido.

### Evolución (`/evolucion`)

- Línea de tiempo horizontal con 20 grupos fijos: Porifera, Cnidaria, Platyhelminthes, Annelida, Mollusca, Nemata, artrópodos (Chelicerata, Myriapoda, Crustacea, Insecta), Echinodermata y cordados (Chondrichthyes, Osteichthyes, Amphibia, reptiles separados en Chelonia, Sauria, Serpentes y Crocodilia, Aves, Mammalia).
- Cada parada muestra la innovación del sistema en ese grupo; al elegirla se leen los datos que la respaldan, con fuente, y hay un enlace a la ficha. Se navega con las flechas.
- Solo está cargado el sistema digestivo. Los reptiles van por subclase porque los apuntes describen sus sistemas en organismos concretos (el cocodrilo, las serpientes) y no para la clase entera.
- Estado en la URL: `?sistema=digestivo&grupo=mollusca`.

### Explorador (`/buscar`)

- **Árbol radial ordenado.** Sin filtros, los 106 grupos forman un árbol radial fijo: Animalia en el centro y cada
  nivel en un anillo hacia afuera, con un sector por linaje. Siempre aparece igual.
- **Se reordena con los filtros.** Al filtrar, los grupos que cumplen se mueven (animado) a árboles propios, uno por
  valor: por ejemplo, filtrando cavidad corporal se arma un árbol de celomados alrededor del rasgo "Celomado
  (enterocelia)", otro de pseudocelomados, etc. Cada grupo cuelga de su ancestro más cercano que también cumple; el
  resto se oculta. Con varios linajes o niveles elegidos, se arma un árbol por linaje o por nivel.
- **Buscar** (menú lateral): si hay un solo grupo, la red vuela hasta él y lo selecciona; si hay varios, quedan solo
  ellos ordenados como árbol, y también se listan con enlaces a la sección de la ficha.
- **Filtrar** por linaje, nivel taxonómico y criterios embrionarios. Dentro de un filtro se combina con "o", entre
  filtros con "y". Tocar un rasgo en el panel de un grupo aplica ese filtro.
- **Colorear por** linaje, nivel o cualquier criterio embrionario, con leyenda.
- **Seleccionar un nodo** (estilo Qdrant): quedan resaltados él y sus vecinos, y se abre un panel con resumen,
  criterio embrionario, rasgos, grupo padre, subgrupos y accesos a la ficha y al comparador (en móvil, hoja inferior).
- El menú lateral se contrae; incluye la navegación del sitio, porque esta página no tiene encabezado ni footer.
- Todo el estado vive en la URL (`q`, `sel`, `f`, `color`): se puede compartir una vista.
- `/mapa` y `/arbol` ya no existen (dan 404).

## Contenido cargado

| Qué | Cantidad |
|---|---|
| Grupos taxonómicos | 106: 1 reino, 2 subreinos, 2 ramas, 4 clados, 17 phyla, 7 subphyla, 2 superclases, 49 clases, 22 subclases |
| Apuntes de la cátedra | 13 archivos, TP4 a TP16 (`apuntes-data/`) |
| Datos con fuente de apunte | 1407 |
| Datos con fuente externa | 618 |
| Imágenes de grupos | 106 (una por grupo, de Wikimedia Commons, con autor y licencia) |

Los números de datos salen de `calcularEstadisticas` (`apps/web/lib/estadisticas.ts`) y se ven en la landing.
`pnpm cobertura` muestra qué secciones tiene cada grupo.

## Identidad visual

- Logo en `apps/web/public/brand/logo.svg` e isotipo (esponja tubular) en `isotipo.svg`, usado en el
  encabezado, el footer y como favicon (`apps/web/app/icon.svg`).
- Solo modo claro.
- Animaciones únicamente en la landing (entrada de la portada y revelado al hacer scroll).
- Footer con el creador: Mayko Fernandez.

Detalle en [diseno.md](diseno.md).

## Recursos 3D

| Modelo | Archivo web | Fuentes | Uso en la app |
|---|---|---|---|
| Porifera (*Aplysina fistularis*, esponja tubular amarilla) | `porifera-corte.glb` (7,4 MB, con cortes) y `porifera.glb` (8 MB, entera) | `models/porifera/scripts/` (`corte.py` para los cortes) | Vista 3D de la ficha (`?vista=3d`) con 8 estructuras señaladas |

## Pendiente o en evaluación

- **Visor 3D** para mostrar el `.glb` en la ficha de Porifera. Hoy no hay dependencias de 3D (`three`,
  `@react-three/fiber` o `<model-viewer>`).
- **Backend o agente IA**: el monorepo ya está preparado para sumarlos como `apps/<nombre>/`.
