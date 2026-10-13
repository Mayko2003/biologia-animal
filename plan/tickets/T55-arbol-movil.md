# T55 — Árbol: vista lista por defecto en móvil y targets táctiles

**Épica**: E8 Móvil · **Depende de**: T53

## Objetivo

Que en `<lg` el árbol abra siempre en **vista lista** (el gráfico SVG de ~2000 px queda accesible vía toggle,
pero no es la entrada) y que expandir/colapsar sea cómodo: carets y filas con targets ≥40 px, indentación
compacta.

## Archivos

- Modificar: `components/arbol/explorador-arbol.tsx`, `components/arbol/arbol-lista.tsx`,
  `components/arbol/arbol-grafico.tsx`

## Pasos

1. **Vista inicial en móvil**: si el estado `vista` vive en la URL o en `useState`, forzar el default a
   `'lista'` en `<lg`. Opción simple: inicializar con
   `useState(() => (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
     ? valorDesktop : 'lista'))` dentro del Client Component (ya es `'use client'` y vive bajo `<Suspense>`);
   si el default actual ya es `'lista'`, solo verificarlo. El toggle lista/gráfico sigue disponible en móvil.
2. **`arbol-lista.tsx`**:
   - Caret: de `w-4` (16 px) a botón `flex h-10 w-10 items-center justify-center -ml-2` con el triángulo dentro
     y `aria-label="Expandir X" / "Colapsar X"` según estado (`aria-expanded` si ya existe, mantenerlo).
   - Fila del taxón: `min-h-[40px] items-center py-1`; el nombre sigue siendo botón/`Link` con el mismo texto
     (los e2e buscan `Insecta` por nombre).
   - Indentación por nivel: de `ml-3 pl-3` a `ml-2 pl-2 border-l` para ganar ancho en 360 px (9 niveles).
   - Input "Filtrar grupos": `w-full max-w-64` (hoy `w-64` fijo).
   - Botones "Expandir todo" / "Colapsar a phyla": `min-h-[40px] px-3 py-2 text-sm`.
3. **`arbol-grafico.tsx`** (mejora barata, sin rediseño): círculos de toggle `r=6` → `r=9` con un círculo
   transparente `r=14` superpuesto como área de toque (`fill="transparent"` encima del visible); textos sin
   cambio. El gráfico no es la vista default en móvil, pero debe ser usable si se abre.
4. `scrollIntoView` al seleccionar se mantiene; el panel abre como sheet (T53).

## Criterios de aceptación

- [ ] En 390 px: vista inicial = lista; se expande/colapsa tocando sin precisión quirúrgica; filas ≥40 px.
- [ ] Toggle a vista gráfica funciona y los toggles SVG son tocables (área ≥28 px).
- [ ] En 1280 px sin cambios visibles de comportamiento (el default de escritorio se conserva).
- [ ] `pnpm test:e2e` pasa en ambos proyectos (labels y nombres sin cambio).

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Zoom del dendrograma, layout alternativo del gráfico, vista "horizontal scrollable" mejorada.
