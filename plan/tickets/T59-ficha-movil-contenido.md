# T59 — Ficha de grupo/clase: contenido adaptado a móvil

**Épica**: E8 Móvil · **Depende de**: T56, T58

## Objetivo

T56 dejó la cabecera e índice móviles, pero el **contenido** de la ficha sigue pensado para escritorio: la tabla
de desarrollo embrionario scrollea en horizontal, los links de subgrupos son `text-xs`, el índice sticky no
indica en qué sección estás y las secciones no se pueden plegar. Adaptar el cuerpo de la ficha a lectura móvil.

## Archivos

- Modificar: `components/taxon/embriologia-tabla.tsx`, `components/taxon/indice-secciones.tsx`,
  `components/taxon/subgrupos.tsx`, `components/ui/seccion.tsx`, `components/taxon/sistemas-tabs.tsx`,
  `app/grupo/[slug]/page.tsx`
- Posiblemente crear: `components/taxon/use-scrollspy.ts` (si no cabe inline en `indice-secciones.tsx`)

## Pasos

1. **`embriologia-tabla.tsx`**: usar `useEsEscritorio()` (ya existe, ver `comparador.tsx`). En `<lg` cada
   criterio se renderiza como una fila/tarjeta apilada dentro del mismo contenedor bordeado:
   - Línea 1: `CRITERIO_LABEL` + valor (`VALOR_LABEL` o "Sin datos") con el valor alineado a la derecha o en
     color destacado.
   - Línea 2 (si hay): nota, "Heredado de X" y badges — el mismo contenido actual, mismo texto (los e2e
     buscan "Heredado de").
   - En `lg+`: la tabla actual sin cambios.
2. **`indice-secciones.tsx`** — scroll-spy en la barra móvil:
   - `useScrollSpy(ids)`: `IntersectionObserver` con `rootMargin` tipo `-20% 0px -70% 0px` devolviendo el id
     de la sección visible. Hook `'use client'`; el componente móvil pasa a ser Client Component
     (la página le pasa los datos por props, como ya hace — no importa `lib/taxa`).
   - Chip activo: `bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200` (o similar)
     y `aria-current="true"`.
   - Al cambiar el activo, `scrollIntoView({ inline: 'nearest', block: 'nearest' })` sobre el chip para que
     la barra siga la posición. Ojo con el lint de react-hooks: el estado del spy se actualiza dentro del
     callback del observer (está permitido — no es `setState` sincrónico en el cuerpo del effect).
   - Subir los chips a `min-h-[40px]`.
   - El índice lateral de escritorio puede quedar sin spy (fuera de alcance) — pero si el mismo componente lo
     comparte gratis, aplicarlo también.
3. **`seccion.tsx`** — secciones plegables en móvil: con `useEsEscritorio()` (o prop `plegable`), en `<lg`
   renderizar `<details open>` con `<summary>` conteniendo el `<h2>` y el `acciones` (caret visual con CSS
   `details[open] .caret { rotate }` o un `▾`/`▸` propio); en `lg+` el `<section>` actual. **Abiertas por
   defecto** (`open`) para que el contenido siga visible y los anclas funcionen. Mantener `id`, `scroll-mt`
   y `aria-labelledby` equivalentes (en `<details>` el summary lleva el id del título o se usa
   `aria-labelledby` igual).
   - Revisar que los `id="seccion-*"` sigan en el DOM y que `#seccion-embriologia` ancle bien.
4. **`subgrupos.tsx`**: los links anidados de nietos (`text-xs` inline en `flex-wrap`) pasan a chips con
   `min-h-[36px] inline-flex items-center px-2 py-1 text-sm` — o mantener `text-xs` pero con
   `inline-flex min-h-[32px] items-center px-2` si el grid queda muy denso. Elegir la variante que no rompa
   el layout a 390px (los nombres de subclases son largos).
5. **`sistemas-tabs.tsx`**: indicación de scroll en el tablist — `mask-image` con fade en el borde derecho
   (`[mask-image:linear-gradient(to_right,black_85%,transparent)]` en `<lg`) o `scroll-snap`. Además, al
   montar o al activar por hash, que el tab activo quede visible (`scrollIntoView({ inline: 'nearest' })`
   cuando `activa` cambia, no solo en click).
6. **`app/grupo/[slug]/page.tsx`**: sin cambios de estructura salvo lo necesario para pasar `plegable`/props a
   `Seccion`. Verificar que `IndiceSeccionesMovil` reciba los ids correctos tras el cambio de componente.

## Criterios de aceptación

- [ ] En 390 px: la sección "Desarrollo embrionario" no tiene scroll horizontal; cada criterio se lee en una
      línea etiqueta + valor y su detalle debajo.
- [ ] El índice sticky marca la sección visible al hacer scroll y el chip activo se ve en la barra.
- [ ] Las secciones se pueden plegar/desplegar en móvil tocando el título; vienen abiertas por defecto.
- [ ] Links de subgrupos con target ≥ 32–40 px; tablist de sistemas muestra que hay más pestañas.
- [ ] En 1280 px todo igual que ahora (tabla, `<section>`, índice lateral).
- [ ] `pnpm test:e2e` pasa — ojo: `ficha.spec.ts` verifica secciones visibles y "Heredado de"; los
      `details open` mantienen el contenido visible, no cerrarlos por defecto.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Rediseñar `DatoList`/`EjemploList`/`NotaList` (ya son texto + badges, legibles en móvil).
- Menú de "volver arriba" flotante o botón de scroll-to-top.
- Índice lateral de escritorio con estilos nuevos (solo si el spy se comparte sin costo).
- Cambiar el orden o el contenido de las secciones.
