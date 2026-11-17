# T52 — Navegación móvil: tab bar inferior y header adaptado

**Épica**: E8 Móvil · **Depende de**: T51 (plan actual completo)

## Objetivo

Reemplazar la navegación de escritorio comprimida por un patrón de app: **tab bar fija inferior** con los 5
destinos en pantallas `<lg`, y un header limpio con logo + acceso rápido a búsqueda. Hoy los 5 links quedan en
`overflow-x-auto` sin indicación y la caja de búsqueda desaparece (`hidden sm:block`).

## Archivos

- Crear: `components/ui/iconos.tsx`, `components/layout/tab-bar.tsx`
- Modificar: `app/layout.tsx`, `components/layout/site-header.tsx`, `components/layout/nav-links.tsx`,
  `components/busqueda/caja-busqueda.tsx`

## Pasos

1. **`components/ui/iconos.tsx`**: componentes de icono SVG inline (sin dependencias):
   `IconoInicio`, `IconoMapa`, `IconoArbol`, `IconoComparar`, `IconoBuscar`, `IconoCerrar`, `IconoMenu`.
   Firma común `({ className }: { className?: string })`, default `className="h-5 w-5"`, `aria-hidden="true"`,
   `fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"`. Trazos simples estilo outline
   (casa, mapa/brújula, árbol/jerarquía, flechas ⇄, lupa, X, ☰).
2. **`components/layout/tab-bar.tsx`** (`'use client'`):
   - `<nav aria-label="Navegación principal" class="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 lg:hidden">`.
   - `grid grid-cols-5` de `Link`s: Inicio `/`, Mapa `/mapa`, Árbol `/arbol`, Comparar `/comparar`, Buscar `/buscar`.
     Cada uno `flex flex-col items-center gap-0.5 py-2 text-[11px]` con icono arriba y etiqueta abajo.
   - Activo con `usePathname()` (misma regla que `nav-links.tsx`: `/` exacto, resto por prefijo):
     `text-emerald-600 dark:text-emerald-400` + `aria-current="page"`; inactivo `text-zinc-500`.
   - Padding inferior `pb-[env(safe-area-inset-bottom)]` para iPhone.
   - Como usa `usePathname`, montarlo dentro de `<Suspense>` desde el layout con un fallback estático
     (los mismos links sin estado activo), siguiendo el patrón de T48.
3. **`app/layout.tsx`**:
   - Renderizar `<TabBar />` (dentro de `<Suspense>`) al final del body.
   - `<main>`: agregar `pb-24 lg:pb-8` para que la tab bar no tape el final del contenido.
   - Exportar `export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }`
     (necesario para que `env(safe-area-inset-bottom)` tenga valor). Verificar la API en
     `node_modules/next/dist/docs/` — buscar el doc de `viewport`.
4. **`components/layout/site-header.tsx`**:
   - El `<nav>` de links pasa a `hidden lg:flex` (modificar `nav-links.tsx` o el wrapper).
   - `CajaBusqueda`: cambiar `hidden sm:block` por `hidden lg:block` (en tablets chicas también libera el header).
   - En `<lg` agregar a la derecha un `Link` a `/buscar` con `IconoBuscar` y `aria-label="Buscar"` (acceso rápido
     además del tab). Header móvil final: logo + lupa.
5. Ajustar `scroll-mt` de secciones (`scroll-mt-20`) si la barra sticky de T56 lo requiere — dejarlo anotado, no
   cambiar acá.

## Criterios de aceptación

- [ ] En 390 px: tab bar visible con 5 destinos, el activo marcado con `aria-current`; header = logo + lupa.
- [ ] Ningún contenido queda tapado por la tab bar (padding de `main`).
- [ ] En 1280 px: header idéntico al actual (links inline + caja de búsqueda), sin tab bar.
- [ ] `pnpm test:e2e` pasa en escritorio **y** móvil (los links conservan nombre y rol; la búsqueda del header
      ya no se testea en móvil, pero `/buscar` sí — ver `busqueda.spec.ts`).

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Bottom sheet del panel de selección (T53), vistas móviles de mapa/árbol/comparador (T54, T55, T57),
  menú hamburguesa (decidido: tab bar).
