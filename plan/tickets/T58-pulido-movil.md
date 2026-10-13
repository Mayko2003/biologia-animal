# T58 — Pulido móvil: targets táctiles, popover de fuentes y clases compartidas

**Épica**: E8 Móvil · **Depende de**: T53, T54, T55, T56, T57

## Objetivo

Última pasada de calidad móvil: ningún control interactivo por debajo de ~40 px en el flujo principal, el
popover de `FuenteBadge` que nunca se corte de pantalla, el buscador sin autofocus agresivo en táctil, y
consolidar las clases de botón/pill repetidas en un módulo compartido.

## Archivos

- Crear: `components/ui/clases.ts`
- Modificar: `components/fuentes/fuente-badge.tsx`, `components/fuentes/filtro-fuentes.tsx`,
  `components/busqueda/buscador.tsx`, `components/mapa/mapa-conceptual.tsx`,
  `components/navegacion/panel-seleccion.tsx`, `app/page.tsx` (chips de phyla),
  `app/grupo/[slug]/page.tsx` (`BOTON`), `components/layout/nav-links.tsx` (si adopta las clases)

## Pasos

1. **`components/ui/clases.ts`**: exportar las constantes de clases que hoy están duplicadas como strings
   ad-hoc: `BOTON` (de `grupo/[slug]/page.tsx`), `BASE`/`ACTIVO` de pills (nav-links, filtro-fuentes,
   explorador-arbol, selector-lente) y el summary de fuente-badge. Consolidar en `BOTON`, `BOTON_PRIMARIO`,
   `PILL`, `PILL_ACTIVO`, `CHIP` y reemplazar los usos. Sin valores nuevos: mismas clases que hoy, solo
   centralizadas (más el bump de tamaño del paso 3 donde aplique).
2. **`fuente-badge.tsx`**: el popover `absolute w-72` se corta en el borde derecho en pantallas <400 px.
   En `<sm` posicionarlo como mini-sheet: `max-sm:fixed max-sm:inset-x-3 max-sm:bottom-3 max-sm:z-50
   max-sm:w-auto max-sm:max-h-[60dvh] max-sm:overflow-auto` (con `<details>` sigue abierto hasta tocar afuera —
   mantener el comportamiento actual de cierre). En `sm+` el popover absoluto de siempre. **Mantener**
   `details`/`[open]`: `ficha.spec.ts` lo aserte.
3. **Targets ≥40 px** en el flujo principal:
   - Chips de phyla de inicio (`px-2.5 py-1 text-xs` → `px-3 py-2 text-sm`, o `min-h-[40px] inline-flex
     items-center`).
   - Sugerencias del buscador y links de coincidencia.
   - Botones de zoom del mapa (−/+/100%: `px-2 py-1` → `h-9 min-w-9 px-2`).
   - Botón "Ver clases" del panel (`px-1.5 py-0.5 text-[11px]` → `min-h-[40px] px-3 py-2 text-xs` o texto).
   - Toggle "Solo apuntes" (`filtro-fuentes.tsx`).
4. **`buscador.tsx`**: quitar `autoFocus` del input o limitarlo a puntero fino — en táctil abre el teclado ni
   bien carga la página. Sin `setState` en `useEffect`: callback ref
   `ref={(el) => { if (el && window.matchMedia('(pointer: fine)').matches) el.focus() }}`.
5. **Revisión final** en 360 / 768 / 1280 px de: inicio, mapa, árbol (lista y gráfico), ficha, buscar,
   comparar — en modo claro **y** oscuro. Corregir desbordes horizontales no intencionales, foco visible en
   tab bar / sheet / barra de índice, y contraste de las insignias.
6. `pnpm build` sin warnings nuevos; `pnpm test:e2e` verde en escritorio y móvil.

## Criterios de aceptación

- [ ] En 390 px ningún control del flujo principal mide menos de ~40 px de alto (chips, pills, botones, carets).
- [ ] El popover de fuente nunca se renderiza fuera de pantalla en 360 px.
- [ ] `/buscar` no abre el teclado automáticamente en táctil; en escritorio sí enfoca.
- [ ] Sin clases de botón/pill duplicadas: todas salen de `components/ui/clases.ts`.
- [ ] `pnpm test:e2e` pasa en ambos proyectos.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm build
```

## Fuera de alcance

- Rediseño visual general de escritorio, modo oscuro con toggle manual (sigue `prefers-color-scheme`),
  ilustraciones de animales (fuera de alcance del proyecto).
