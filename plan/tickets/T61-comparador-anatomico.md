# T61 — Comparador: enfoque anatómico y tabs en móvil

**Épica**: E9 Diseño visual · **Depende de**: T57

## Objetivo

Reenfocar `/comparar` en lo anatómico: el cuadro compara **morfología externa, estructuras
especiales y los sistemas** — nada más. Se eliminan las filas de ubicación taxonómica,
desarrollo embrionario y reproducción/ecología (el panel de "Ancestro común" queda, porque
ubicación ≠ comparación anatómica). En móvil la pila de tarjetas de T57 se reemplaza por
**tabs horizontales**: un tab "Anatomía" y un tab por sistema; el panel activo muestra los
bloques A/B de esa característica.

## Archivos

- Modificar: `lib/comparacion.ts`, `components/comparar/comparador.tsx`,
  `tests/unit/comparacion.test.ts`
- Reemplazar: `components/comparar/comparador-tarjetas.tsx` → `components/comparar/comparador-tabs.tsx`
- Posiblemente tocar: `tests/e2e/comparador.spec.ts`

## Pasos

1. `comparar()`: `GrupoFila` pasa a `'Anatomía' | 'Sistemas'`.
   - `Anatomía`: fila `morfologia` (Morfología externa, `celdaDatos`, `distinto` por set de
     textos) y fila `especiales` (títulos unidos; `distinto` por set de títulos).
   - `Sistemas`: las 10 filas `sistema-*` de siempre (`distinto` = estado distinto).
   - Eliminar filas `nivel`, `ruta`, `phylum`, `emb-*`, `reproduccion`, `bioecologia`,
     `ejemplos`. Resultado: 12 filas.
   - `GRUPOS_SOLO_DIFERENCIAS` queda `{'Sistemas'}`.
2. `comparador-tabs.tsx` (`'use client'`): recibe las filas agrupadas.
   - Strip: `<div role="tablist">` horizontal con scroll (`overflow-x-auto`), chips
     `rounded-full border` como los de la ficha; activo = `bg-emerald-600 text-white`.
   - Tabs: `anatomia` primero, luego un tab por sistema presente; cada chip muestra un
     punto `bg-amber-500` (`aria-label="Difiere"`) cuando esa fila difiere.
   - Con "solo diferencias" los tabs de sistemas sin diferencia no se muestran; si el tab
     activo desaparece, cae al primero disponible (estado derivado, nada de setState en
     `useEffect`).
   - Panel: `role="tabpanel"` con el/los ítems del tab como tarjetas: título + bloque A
     (`border-l-2 border-emerald-500`, rótulo `A: {nombre}`) + bloque B (`border-sky-500`).
     Misma celda que hoy (`CeldaView`).
   - ARIA: `role="tab"` con `aria-selected`/`aria-controls`, `tabIndex` 0 solo en el activo;
     flechas ←/→ navegan, Home/End al principio/final (mismo patrón que `sistemas-tabs.tsx`).
   - Hash opcional `#cmp-<id>` con `useSyncExternalStore` como en la ficha — permite
     linkear un sistema concreto.
3. `comparador.tsx`: en `!escritorio` montar `ComparadorTabs` en lugar de
   `ComparadorTarjetas` (borrar el archivo viejo). La barra sticky A/B y el botón
   Intercambiar se quedan igual. Escritorio: misma tabla, solo con los grupos nuevos.
4. Tests: `comparacion.test.ts` — quitar el caso `emb-blastoporo`, actualizar el conteo a
   12 filas y cubrir `especiales`/`morfologia` con `distinto`. E2E: agregar caso móvil que
   cambie de tab en `/comparar` si hay proyecto móvil en Playwright.

## Criterios de aceptación

- [ ] El cuadro solo compara anatomía y sistemas (12 filas: 2 anatómicas + 10 sistemas).
- [ ] En 390 px: chips de tabs con scroll horizontal; el panel muestra A/B rotulado; punto
      ámbar en tabs que difieren; "solo diferencias" oculta tabs de sistemas iguales.
- [ ] Flechas ←/→ y Home/End navegan tabs; `aria-selected`/`tabpanel` correctos.
- [ ] En 1280 px: tabla con encabezados de grupo "Anatomía" y "Sistemas" solamente.
- [ ] `Ancestro común`, Intercambiar y los selectores siguen igual; e2e en verde.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e && pnpm cobertura
```

## Fuera de alcance

- Comparar más de dos grupos; exportar imagen; comparación lado a lado en móvil.
