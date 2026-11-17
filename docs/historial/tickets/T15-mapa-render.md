# T15 — Mapa conceptual embrionario: render e interacción

**Épica**: E2 UI · **Depende de**: T14 (usa `d3-hierarchy`, ya instalado)

## Objetivo

Página `/mapa` que dibuja `MAPA_EMBRIONARIO` de izquierda a derecha: cada nodo muestra el **criterio** que lo separa
de su padre, el título y el subtítulo. Los phyla son las hojas. Clic en un nodo → panel de selección.

## Archivos

- Modificar: `app/mapa/page.tsx`
- Crear: `components/mapa/explorador-mapa.tsx`, `components/mapa/mapa-conceptual.tsx`

## Pasos

### 1. `app/mapa/page.tsx` (Server Component)

```tsx
export const metadata: Metadata = { title: 'Mapa conceptual' };

export default function Page() {
  const arbol = getArbol();
  return (
    <div className="space-y-6">
      <header>…h1 "Mapa conceptual embrionario" + párrafo…</header>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando mapa…</p>}>
        <ExploradorMapa mapa={MAPA_EMBRIONARIO} arbol={arbol} />
      </Suspense>
    </div>
  );
}
```

Párrafo sugerido: "Leé el mapa de izquierda a derecha: cada caja indica arriba el criterio del desarrollo embrionario que
define al grupo. Los phyla están a la derecha. Seleccioná cualquier caja para ver sus clases."

### 2. `explorador-mapa.tsx` (`'use client'`)

- `const [sel, setSel] = useSeleccion();`
- Layout `grid gap-6 lg:grid-cols-[1fr_380px]`: `MapaConceptual` + `PanelSeleccion` (`arbol`, `slug={sel}`, `onSeleccionar={setSel}`).

### 3. `mapa-conceptual.tsx` (`'use client'`)

Props: `{ mapa: NodoMapa; seleccionado: string | null; onSeleccionar: (slug: string) => void; estiloHoja?: (taxon: string) => { color?: string; etiqueta?: string } }`
(`estiloHoja` se usa en T16; en este ticket puede quedar sin usar).

Constantes: `ANCHO_NODO = 210`, `ALTO_NODO = 84`, `FILA = 100`, `COLUMNA = 260`, `MARGEN = 16`.

**Layout** (en `useMemo`):

```ts
const raiz = hierarchy(mapa, (d) => d.hijos);
tree<NodoMapa>().nodeSize([FILA, COLUMNA])(raiz);
// left = nodo.y + MARGEN ; top = nodo.x - minX + MARGEN
// ancho = (profundidadMaxima) * COLUMNA + ANCHO_NODO + 2 * MARGEN ; alto = maxX - minX + ALTO_NODO + 2 * MARGEN
```

**Render**

- Visor: `<div className="overflow-auto max-h-[75vh] rounded-lg border bg-zinc-50 dark:bg-zinc-950">`.
- Dentro, un contenedor de tamaño `ancho * escala` × `alto * escala`, y adentro otro `relative` de `ancho × alto` con
  `style={{ transform: `scale(${escala})`, transformOrigin: '0 0' }}`.
- Capa de aristas: `<svg className="absolute inset-0" width={ancho} height={alto} aria-hidden>`; cada arista va del borde
  derecho del padre (`left + ANCHO_NODO`, `top + ALTO_NODO / 2`) al borde izquierdo del hijo con una curva cúbica
  horizontal (igual que en T14). Trazo `stroke-zinc-300 dark:stroke-zinc-700`.
- Nodos: `<button>` con `position: absolute`, `left`, `top`, `width: ANCHO_NODO`, `height: ALTO_NODO`, `aria-pressed={seleccionado === nodo.taxon}`,
  `title={descripcion?.texto}`. Contenido apilado:
  - `criterio` (si hay) en `text-[11px] leading-tight text-zinc-500 line-clamp-2`;
  - `titulo` en `font-semibold text-sm`;
  - `subtitulo` (si hay) en `text-xs text-zinc-500 truncate`.
- Estilos: nodo conceptual `bg-white border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700`; hoja (sin hijos)
  `bg-emerald-50 border-emerald-300 dark:bg-emerald-950 dark:border-emerald-800`; seleccionado `ring-2 ring-emerald-500`.
- Clic → `onSeleccionar(nodo.taxon)` (todos los nodos del mapa tienen `taxon`).
- Zoom: `escala` en estado (0.6 a 1.4, paso 0.1). Botones "−", "+" y "100%" encima del visor, con `aria-label`.
- Al cambiar `seleccionado`, `useEffect` → `scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' })`
  del botón seleccionado (refs leídas solo en el efecto).
- Leyenda chica debajo: "Caja blanca = grupo definido por un criterio embrionario · Caja verde = phylum".

## Criterios de aceptación

- [ ] `/mapa` dibuja 26 cajas (9 conceptuales + 17 phyla) con aristas.
- [ ] Cada caja conceptual muestra su criterio arriba del título.
- [ ] Clic en "Protostomados" → URL `?sel=protostomia` y el panel muestra "Phyla incluidos (11)".
- [ ] Clic en "Mollusca" → panel con las 5 clases.
- [ ] `/mapa?sel=arthropoda` resalta Arthropoda al cargar y lo centra.
- [ ] Zoom funciona y el scroll del visor se ajusta al tamaño escalado.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Lentes de color (T16).
