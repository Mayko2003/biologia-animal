# T54 — Mapa conceptual: vista lista nativa en móvil

**Épica**: E8 Móvil · **Depende de**: T53

## Objetivo

En `<lg` el mapa embrionario se muestra como **lista jerárquica vertical** en lugar del canvas SVG de ~1540 px
de ancho con scroll en dos ejes. Los lentes siguen coloreando los ítems. El canvas queda solo para escritorio
(decisión de diseño: no híbrido, no pinch-zoom).

## Archivos

- Crear: `components/mapa/mapa-lista.tsx`
- Modificar: `components/mapa/explorador-mapa.tsx`, `components/mapa/selector-lente.tsx`,
  `components/mapa/mapa-conceptual.tsx` (solo para ocultarlo en `<lg`)
- Posiblemente: `tests/e2e/navegacion.spec.ts` (aserciones del canvas en el proyecto móvil)

## Pasos

1. **`mapa-lista.tsx`** (`'use client'`). Props: la estructura del mapa y el estado que ya maneja
   `ExploradorMapa` (nodos con `slug`, `nombre`, `profundidad`, hijos/orden de columnas; `lente` activo;
   `onSeleccionar`; `seleccionado`). **No importar `data/` ni `lib/taxa.ts`** — todo por props.
   - Render: lista vertical plana ordenada por columnas del mapa (Metazoa → hojas), cada nodo con sangría
     según `profundidad` (`padding-left` calculado, ej. `pl = profundidad * 1.25rem`) y guía visual
     `border-l` en los niveles internos.
   - Cada nodo es `<button className="flex min-h-[44px] w-full items-center gap-2 rounded-md px-3 text-left">`
     que llama `onSeleccionar(slug)` — mismo nombre/etiqueta que tiene en el canvas para no romper los e2e
     (ej. "Protostomados"). Nodo seleccionado: `bg-emerald-50 dark:bg-emerald-950` + `aria-pressed`.
   - Coloreo por lente: mismo criterio que el canvas — dot o borde izquierdo con el hex del valor
     (`COLOR_VALOR`/`COLOR_SIN_DATO` de `lib/etiquetas.ts`, módulo puro, permitido en cliente) y la
     **leyenda existente se reutiliza tal cual** (mismos textos `Acelomado (n)`…).
   - Las hojas-phylum muestran además `RankBadge` si corresponde.
2. **`explorador-mapa.tsx`**: alternar con `useEsEscritorio()` de `components/ui/use-media.ts`
   (`useSyncExternalStore` + `matchMedia('(min-width: 1024px)')`, creado en T53): escritorio → canvas actual;
   móvil → `MapaLista`. No montar ambas por CSS: duplica el DOM y rompe el strict mode de Playwright. El
   toolbar de zoom (−/+/100%) solo en escritorio.
3. **`selector-lente.tsx`**: pills a `min-h-[40px] px-3 py-2 text-sm` y fila única con
   `overflow-x-auto whitespace-nowrap` (en vez de `flex-wrap`) — 6 lentes en una fila scrolleable.
4. La leyenda del lente debe aparecer en ambas vistas (hoy probablemente la renderiza el canvas: moverla o
   duplicarla en la vista lista, compartiendo el componente).
5. **e2e**: revisar `navegacion.spec.ts` en el proyecto `movil` — el botón "Protostomados" y los textos de
   leyenda deben seguir encontrándose (misma etiqueta). Si un test apunta específicamente al `svg`/canvas,
   skipearlo en móvil (`test.skip(isMobile, ...)`) o duplicar la aserción para la lista.

## Criterios de aceptación

- [ ] En 390 px: el mapa es una lista vertical de una columna, sin scroll horizontal; tocar un nodo abre el
      sheet (T53); cambiar de lente recolorea los ítems.
- [ ] Leyenda con los mismos textos que en escritorio.
- [ ] En 1280 px: canvas, zoom y leyenda exactamente como ahora.
- [ ] Ningún import de `data/` ni `lib/taxa.ts` en componentes cliente.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Pinch-zoom / fit-to-width del canvas (el canvas no existe en móvil).
- Animaciones de transición entre nodos.
