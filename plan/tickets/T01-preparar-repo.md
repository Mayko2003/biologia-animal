# T01 — Preparar repo y limpiar el template

**Épica**: E0 Base · **Depende de**: nada

## Objetivo

Dejar el proyecto listo para trabajar: apuntes y plan versionados, template de create-next-app eliminado,
layout raíz en español con encabezado de navegación y páginas provisorias para todas las rutas.

## Archivos

- Modificar: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.gitignore`
- Crear: `components/layout/site-header.tsx`, `app/mapa/page.tsx`, `app/arbol/page.tsx`,
  `app/comparar/page.tsx`, `app/buscar/page.tsx`
- Borrar: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

## Pasos

1. Leé `AGENTS.md` y `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`.
2. Commit inicial de los apuntes y el plan (todavía no están versionados):
   ```bash
   git add animal-data plan
   git commit -m "T01: agregar apuntes y plan"
   ```
3. Borrá los 5 SVG de `public/` listados arriba (son del template y no se usan).
4. `app/globals.css`: dejá el `@import "tailwindcss";`, las variables y el bloque `@theme inline`, y cambiá la
   regla de `body` para usar la fuente del tema:
   ```css
   body {
     background: var(--background);
     color: var(--foreground);
     font-family: var(--font-sans), system-ui, sans-serif;
   }
   ```
5. `components/layout/site-header.tsx` (Server Component, sin `'use client'`):
   - `<header>` con borde inferior, contenido centrado `max-w-6xl mx-auto px-4 h-14 flex items-center gap-6`.
   - A la izquierda, un `Link` a `/` con el texto **"Biología Animal"** (font-semibold).
   - Un `<nav aria-label="Principal">` con `Link`s: Inicio `/`, Mapa conceptual `/mapa`, Árbol `/arbol`,
     Comparar `/comparar`, Buscar `/buscar`. Estilo: `text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100`.
   - En pantallas chicas (`< sm`) la nav puede hacer scroll horizontal (`overflow-x-auto whitespace-nowrap`).
6. `app/layout.tsx`:
   - Mantener las fuentes Geist ya configuradas.
   - `lang="es"`.
   - `metadata`:
     ```ts
     export const metadata: Metadata = {
       title: { default: 'Biología Animal', template: '%s · Biología Animal' },
       description: 'Estudio de Biología Animal: mapa conceptual embrionario, árbol taxonómico, fichas, comparador y buscador.',
     };
     ```
   - `<body className="min-h-full flex flex-col">` con `<SiteHeader />` y luego
     `<main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">{children}</main>`.
7. `app/page.tsx`: reemplazar todo por un componente simple con `<h1>Biología Animal</h1>` y un párrafo
   "En construcción". (Se rehace en T17.)
8. Crear páginas provisorias `app/mapa/page.tsx`, `app/arbol/page.tsx`, `app/comparar/page.tsx`,
   `app/buscar/page.tsx`: cada una exporta `metadata = { title: '<Nombre>' }` y renderiza un `<h1>` con el nombre
   ("Mapa conceptual", "Árbol taxonómico", "Comparar grupos", "Buscar") y "En construcción".
9. `.gitignore`: agregar al final
   ```
   # playwright
   /test-results/
   /playwright-report/
   /blob-report/
   ```

## Criterios de aceptación

- [ ] `animal-data/` y `plan/` están commiteados.
- [ ] No queda ningún rastro del template (logos de Next/Vercel, textos "To get started…").
- [ ] `<html lang="es">` y título por defecto "Biología Animal".
- [ ] El encabezado aparece en todas las páginas y los 5 links navegan sin 404.
- [ ] `pnpm lint` y `pnpm build` pasan.

## Verificación

```bash
pnpm lint
pnpm build
```

## Fuera de alcance

- Caja de búsqueda en el encabezado (T38). Resaltado del link activo (T48).
