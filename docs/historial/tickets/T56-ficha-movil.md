# T56 — Ficha de grupo: índice móvil sticky y cabecera compacta

**Épica**: E8 Móvil · **Depende de**: T52

## Objetivo

La ficha tiene hasta 8 secciones largas y hoy en móvil no hay forma de saltar entre ellas: `IndiceSecciones` es
`hidden lg:block` y no hay colapsables. Agregar una **barra de índice sticky** bajo el header en `<lg`, hacer el
breadcrumb de una sola línea scrolleable y que los tabs de sistemas ocupen una fila.

## Archivos

- Modificar: `components/taxon/indice-secciones.tsx`, `app/grupo/[slug]/page.tsx`,
  `components/taxon/breadcrumb.tsx`, `components/taxon/sistemas-tabs.tsx`

## Pasos

1. **`indice-secciones.tsx`**: extraer la lista de secciones (las mismas anclas `#seccion-*` de hoy).
   - En `lg+`: el índice lateral actual, sin cambios.
   - En `<lg`: barra `sticky top-14 z-30 -mx-4 overflow-x-auto border-b border-zinc-200 bg-white/95 px-4 py-2
     backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95` con chips `Link` `whitespace-nowrap px-3 py-1.5
     text-sm` (min ~36 px de alto). Renderizar ambas variantes desde el mismo componente o la página; que se
     oculten mutuamente por breakpoint.
   - Las secciones ya tienen `scroll-mt-20`; verificar que la barra sticky no tape el título al saltar
     (si la barra mide ~52 px, subir `scroll-mt` a `scroll-mt-32` en `<lg` o globalmente — probar).
2. **`breadcrumb.tsx`**: en `<lg` una sola línea `flex-nowrap overflow-x-auto whitespace-nowrap` (los ~9 pasos
   scrollean horizontalmente); en `lg+` el `flex-wrap` actual.
3. **`app/grupo/[slug]/page.tsx`**: cabecera compacta en móvil —
   - `h1` `text-3xl` → `text-2xl sm:text-3xl`.
   - Los 3 botones de acción ("Ver en el árbol", "Ver en el mapa", "Comparar con…") con `min-h-[40px]`; en
     `<sm` pueden ocupar `grid grid-cols-2` o wrap, pero sin que `FiltroFuentesToggle` quede flotando solo a la
     derecha por el `ml-auto` dentro del wrap: darle `w-full sm:w-auto` o sacarlo de la fila de botones.
4. **`sistemas-tabs.tsx`**: la barra de tabs pasa de `flex-wrap` a `flex-nowrap overflow-x-auto` en `<lg`
   (una fila scrolleable en vez de 3-4 filas de pills); en `lg+` wrap como ahora. **Mantener** `role="tab"`,
   `aria-selected` y los hashes `#sistema-*` — los e2e los usan.
5. Revisar que `FuenteBadge` dentro del texto no quede afectado por la barra sticky (z-index: la barra `z-30`,
   el popover se arregla en T58).

## Criterios de aceptación

- [ ] En 390 px: barra de índice visible bajo el header que lleva a cada sección; breadcrumb en una línea con
      scroll; tabs de sistemas en una fila scrolleable.
- [ ] Saltar a una sección deja el título visible (no tapado por header + barra).
- [ ] En 1280 px: índice lateral, breadcrumb y tabs como ahora.
- [ ] `pnpm test:e2e` pasa (`ficha.spec.ts`: headings, `#seccion-embriologia`, `role=tab`).

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Secciones colapsables/acordeones en móvil (se evalúa después de T58 si la ficha sigue siendo muy larga).
- Scroll-spy (marcar la sección actual en la barra) — si es trivial con `IntersectionObserver` puede sumarse,
  pero no es requisito.
