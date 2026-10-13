# T14 — Árbol taxonómico: vista gráfica (dendrograma)

**Épica**: E2 UI · **Depende de**: T13

## Objetivo

Agregar a `/arbol` una vista gráfica horizontal (raíz a la izquierda) con nodos colapsables, coloreados por nivel,
y un selector "Lista | Gráfico".

## Dependencias nuevas

```bash
pnpm add d3-hierarchy@3.1.2
pnpm add -D @types/d3-hierarchy@3.1.7
```

## Archivos

- Crear: `components/arbol/arbol-grafico.tsx`
- Modificar: `components/arbol/explorador-arbol.tsx`

## Pasos

### 1. Selector de vista en `explorador-arbol.tsx`

- `const [vista, setVista] = useParametro('vista')` → `'grafico'` o, si es `null` o cualquier otro valor, `'lista'`.
- Dos botones ("Lista" / "Gráfico") con `aria-pressed`, arriba del árbol. "Lista" llama `setVista(null)`.
- Renderiza `ArbolLista` o `ArbolGrafico` con las mismas props.

### 2. `arbol-grafico.tsx` (`'use client'`)

Props: `{ arbol: NodoArbol; seleccionado: string | null; onSeleccionar: (slug: string) => void }`.

Constantes: `FILA = 30` (separación vertical), `COLUMNA = 200` (separación horizontal), `MARGEN = 24`, `RADIO = 6`.

**Estado de colapso**

- `colapsados: Set<string>`. Inicial (perezoso): todos los nodos de nivel `phylum` que tienen hijos, **excepto** los que
  están en `rutaHasta(arbol, seleccionado)`. Así se ve de entrada hasta los phyla.
- Si `seleccionado` cambia por fuera: patrón "ajustar estado durante el render" para quitar de `colapsados` los nodos de su ruta.
- Botones: "Expandir todo" (vacía el set) y "Colapsar a phyla" (vuelve al estado inicial sin selección).

**Layout con d3-hierarchy** (en `useMemo` según `arbol` y `colapsados`)

```ts
import { hierarchy, tree } from 'd3-hierarchy';
const raiz = hierarchy(arbol, (d) => (colapsados.has(d.slug) ? null : d.hijos));
tree<NodoArbol>().nodeSize([FILA, COLUMNA])(raiz);
// coordenadas en pantalla: x = nodo.y + MARGEN ; y = nodo.x - minX + MARGEN
```

- `minX`/`maxX` sobre todos los nodos; `alto = maxX - minX + 2 * MARGEN`; `ancho = (profundidadMaxima + 1) * COLUMNA + 160`.

**SVG**

- Contenedor: `<div className="overflow-auto max-h-[75vh] rounded-lg border">` con `<svg width={ancho} height={alto} role="img" aria-label="Dendrograma taxonómico">`.
- Enlaces: `<path d={`M${x0},${y0}C${(x0 + x1) / 2},${y0} ${(x0 + x1) / 2},${y1} ${x1},${y1}`} fill="none">` con trazo
  `stroke-zinc-300 dark:stroke-zinc-700`; los enlaces de la ruta raíz→seleccionado van en `stroke-emerald-500` y más gruesos.
- Nodo: `<g transform={`translate(${x},${y})`}>`
  - Círculo `r={RADIO}` relleno `NIVEL_COLOR_HEX[nivel]`. Si tiene hijos ocultos (colapsado): relleno blanco con borde del
    color del nivel y un texto `+${n}` chico a la izquierda.
  - El círculo está dentro de un `<g role="button" tabIndex={0} aria-label="Expandir X|Colapsar X">` que alterna el colapso
    con clic y con Enter/Espacio. Solo si el nodo tiene hijos.
  - Etiqueta `<text x={RADIO + 6} dy="0.32em" className="fill-zinc-800 dark:fill-zinc-100 text-[12px] cursor-pointer">`
    con el nombre; `font-semibold` si está seleccionado; clic → `onSeleccionar(slug)`; dentro un `<title>` con
    `${NIVEL_LABEL[nivel]} · ${nombreComun ?? ''}`.
- Al cambiar `seleccionado`, en un `useEffect` hacer `scrollIntoView({ block: 'center', inline: 'center' })` del `<g>` seleccionado (ref leída solo en el efecto).
- Leyenda debajo: un punto de color por nivel (solo los niveles presentes) con `NIVEL_LABEL`.

## Criterios de aceptación

- [ ] `/arbol?vista=grafico` muestra el dendrograma hasta los phyla.
- [ ] Clic en el círculo de "Arthropoda" despliega sus subphyla; otro clic los oculta.
- [ ] Clic en el nombre selecciona y actualiza el panel; la ruta queda resaltada.
- [ ] `/arbol?vista=grafico&sel=insecta` abre la ruta hasta Insecta.
- [ ] Cambiar entre Lista y Gráfico conserva la selección.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Zoom con gestos o arrastre del lienzo (no hace falta; el contenedor tiene scroll).
