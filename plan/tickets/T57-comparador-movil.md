# T57 — Comparador: tarjetas apiladas en móvil

**Épica**: E8 Móvil · **Depende de**: T52

## Objetivo

Que `/comparar` se lea en vertical en pantallas angostas. Hoy es una tabla `min-w-[720px]` con scroll
horizontal permanente y la columna "Característica" no es sticky: al scrollear se pierde el rótulo de cada
fila. En `<lg` pasa a **tarjetas apiladas por característica** con los valores de A y B rotulados.

## Archivos

- Modificar: `components/comparar/comparador.tsx`
- Posiblemente crear: `components/comparar/comparador-tarjetas.tsx`

## Pasos

1. Reusar el array de filas que produce la lógica de T39 (característica + valor A + valor B) — el markup de la
   tabla ya itera sobre eso; extraerlo si hace falta.
2. **`comparador-tarjetas.tsx`** (`'use client'` o server-safe, según lo que ya sea `comparador.tsx`): por cada
   fila, una tarjeta `rounded-lg border border-zinc-200 p-4 dark:border-zinc-800` con:
   - Título: nombre de la característica (`font-medium`).
   - Bloque A: etiqueta `A — {nombreA}` chica en `text-emerald-600 dark:text-emerald-400`, contenido con
     `border-l-2 border-emerald-500 pl-3` y el mismo componente de la celda (`DatoList`, listas de sistemas…).
   - Bloque B: igual con `text-sky-600`/`border-sky-500`.
   - Si un valor es vacío/sin datos: el mismo guion o texto "—" que usa la tabla.
3. **Barra sticky de contexto** en `<lg`: `sticky top-14 z-30` con `A: {nombreA}` y `B: {nombreB}` truncados
   (`truncate`) + el botón Intercambiar (`aria-label="Intercambiar A y B"`, target ≥40 px) — que siempre se
   sepa qué es A y qué es B al scrollear.
4. Montaje: como en T54, ambas variantes montadas y alternadas por CSS (`lg:hidden` / `hidden lg:block`) —
   la tabla completa queda para `lg+`.
5. Los selectores (`<select>` con `optgroup`) ya funcionan en móvil; solo darles `min-h-[44px]`
   (`h-11` o `py-2.5`) si hoy son más bajos.
6. Verificar que `Ancestro común:` y el link al taxón común (hoy fuera de la tabla) sigan visibles en móvil.

## Criterios de aceptación

- [ ] En 390 px: cero scroll horizontal en `/comparar`; cada característica se lee en vertical con A/B
      rotulados y coloreados; la barra sticky identifica A y B.
- [ ] Intercambiar funciona desde la barra sticky (mismo `aria-label`, mismos params en URL).
- [ ] En 1280 px: la tabla `min-w-[720px]` actual sin cambios.
- [ ] `pnpm test:e2e` pasa en ambos proyectos.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Comparar más de dos grupos, exportar/compartir imagen del cuadro.
