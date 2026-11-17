# T48 — Pulido: 404, metadatos, responsive y accesibilidad

**Épica**: E6 Cierre · **Depende de**: T47

## Objetivo

Terminar detalles de calidad que no entraron en los tickets anteriores.

## Archivos

- Crear: `app/not-found.tsx`, `components/layout/nav-links.tsx`
- Modificar: `components/layout/site-header.tsx`, componentes que lo necesiten según la revisión

## Pasos

1. **404** (`app/not-found.tsx`): título "No encontramos esa página", texto breve y links a Inicio, Árbol y Buscar.
   Leer antes `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md`.
2. **Link activo en la nav**: mover los links a `nav-links.tsx` (`'use client'`) que use `usePathname()` y marque con
   `aria-current="page"` y estilo (`font-medium text-zinc-900 dark:text-zinc-100`) el link cuya ruta coincide
   (`/` exacto; el resto por prefijo). Si `usePathname` obliga a envolver en `<Suspense>` durante el build, envolver
   `NavLinks` en `<Suspense fallback={<NavLinksEstaticos />}>` donde el fallback son los mismos links sin estado activo.
3. **Metadatos**: cada página tiene `title` propio; la ficha además `description`. Verificar en el HTML generado.
4. **Revisión responsive** en 375 px, 768 px y 1280 px de: inicio, mapa, árbol (ambas vistas), ficha, buscar y comparar.
   Corregir desbordes horizontales que no sean de los visores con scroll intencional (mapa, dendrograma, tabla del comparador).
5. **Accesibilidad**:
   - Foco visible en todos los elementos interactivos (`focus-visible:outline` o `ring`).
   - Un solo `h1` por página; jerarquía de encabezados sin saltos.
   - Imágenes/SVG decorativos con `aria-hidden`; el dendrograma con `role="img"` y `aria-label`.
   - Contraste de las insignias en modo claro y oscuro.
6. **Estados de carga**: los `fallback` de `Suspense` usan un bloque gris animado (`animate-pulse`) con la altura aproximada
   del contenido, en vez de solo texto.
7. Correr `pnpm build` y revisar que no haya warnings nuevos de Next (en especial de Cache Components / prerender).

## Criterios de aceptación

- [ ] `/cualquier-cosa` muestra la 404 propia.
- [ ] El link de la sección actual queda marcado en la nav.
- [ ] Sin desbordes horizontales no intencionales en 375 px.
- [ ] `pnpm build` sin warnings nuevos; `pnpm test:e2e` sigue pasando.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e
```
