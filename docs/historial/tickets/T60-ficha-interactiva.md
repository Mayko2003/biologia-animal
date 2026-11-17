# T60 — Ficha de grupo: diseño interactivo y objetos visuales

**Épica**: E9 Diseño visual · **Depende de**: T59 (deja la ficha completa en escritorio y móvil)

## Objetivo

La ficha `/grupo/[slug]` funciona pero es plana: texto en listas, una tabla gris y tabs sin identidad visual.
Rediseñarla para que sea un objeto de estudio rico: cabecera tipo "héroe", embriología como tarjetas con
iconos y valores codificados por color, icono por sistema en los tabs, aparición animada de secciones al
hacer scroll y micro-interacciones en datos, ejemplos y notas.

Restricciones duras:

- **Sin dependencias nuevas**: todo con Tailwind v4, transiciones/keyframes CSS y `IntersectionObserver`
  (patrón ya usado en `indice-secciones.tsx`).
- **Movimiento opcional**: toda animación detrás de `motion-safe:` (o `motion-reduce:transition-none
  motion-reduce:animate-none`); con `prefers-reduced-motion` la página se ve idéntica pero estática.
- **No tocar datos ni fuentes**: mismos `Dato`, `FuenteBadge`, filtro "Solo apuntes", ids `seccion-*`,
  hashes `#sistema-*`, roles ARIA de tabs y textos que usan los e2e (`Heredado de`, "Origina la boca…").
- Client Components siguen sin importar `data/` ni `lib/taxa.ts` (todo por props).

## Archivos

- Crear: `components/ui/reveal.tsx`, `components/ui/iconos-sistemas.tsx`,
  `components/taxon/ficha-hero.tsx`, `components/taxon/embriologia-specs.tsx`
- Modificar: `app/grupo/[slug]/page.tsx`, `app/globals.css`,
  `components/taxon/sistemas-tabs.tsx`, `components/taxon/dato-list.tsx`,
  `components/taxon/ejemplo-list.tsx`, `components/taxon/nota-list.tsx`,
  `components/taxon/indice-secciones.tsx`

## Pasos

1. **`app/globals.css`**: declarar los keyframes del proyecto dentro de `@theme` para obtener utilidades
   `animate-*` — p.ej. `--animate-fade-up`, `--animate-pop` (fade + translate-y de ~8px, ~400ms ease-out) —
   y un patrón decorativo reutilizable si hace falta. Nada global que afecte otras páginas.
2. **`components/ui/reveal.tsx`** (`'use client'`): wrapper que observa a su hijo con
   `IntersectionObserver` (una sola vez, `threshold` bajo) y aplica `animate-fade-up` al hacerse visible.
   Con `motion-reduce` o sin JS el contenido se ve directo: la clase de "oculto" solo se pone cuando el
   observer está activo, nunca en el primer render (evita contenido invisible si falla el observer).
3. **`components/ui/iconos-sistemas.tsx`**: icono SVG (mismo estilo `Base` de `iconos.tsx`, stroke 1.8,
   `aria-hidden`) para cada `SistemaId` de `SISTEMAS` — tegumento, esqueleto, muscular, digestivo,
   respiratorio, circulatorio, excretor, nervioso, sentidos, reproductor — más un genérico para
   estructuras especiales. Exportar `IconoSistema({ id, className })` y `IconoEspecial`.
   Agregar también en `iconos.tsx` (o aquí mismo) los que falten para criterios embrionarios, alerta e info.
4. **`components/taxon/ficha-hero.tsx`**: reemplaza el bloque actual de `RankBadge`+`h1`+acciones por una
   tarjeta con jerarquía visual:
   - Fondo con gradiente sutil `from-emerald-50 to-transparent` (dark: `from-emerald-950/40`) y un motivo
     SVG decorativo (círculos orgánicos) posicionado a la derecha, con animación de "respiración" lenta
     solo `motion-safe`.
   - `RankBadge`, `h1`, nombre común, sinónimos e insignia `externo` igual que ahora.
   - **Stats strip**: chips pequeños con icono + número — nº de datos totales, sistemas documentados
     (`x/10`), ejemplos — calculados en la página y pasados por props (componente server-safe que recibe
     números/strings, no el taxón entero).
   - Botones de acción dentro de la tarjeta, conservando `FiltroFuentesToggle`.
5. **`components/taxon/embriologia-specs.tsx`**: sustituye la presentación de `EmbriologiaTabla` por una
   grilla `sm:grid-cols-2 lg:grid-cols-3` de tarjetas (una por `CRITERIOS`): icono del criterio, etiqueta,
   **valor como badge de color** (`VALOR_LABEL` agrupados por paleta — p.ej. positivos emerald, variantes
   sky/violet, `ausente` rose, sin datos zinc atenuado) y debajo el detalle actual (`nota`, "Heredado de",
   `FuenteBadge`). Mantener el filtro de fuentes (`useFiltroFuentes`) y el comportamiento móvil (en `<sm`
   una sola columna; puede reutilizarse la misma grilla, la tabla ya no es necesaria).
   `embriologia-tabla.tsx` puede renombrarse/reemplazarse por este componente o quedar como wrapper.
6. **`components/taxon/sistemas-tabs.tsx`**:
   - Cada tab con su `IconoSistema` a la izquierda del label y el contador como pill.
   - Indicador animado: el tab activo mantiene `bg-emerald-600` (o variante con subrayado animado
     `transition`/`scale` — elegir una, sin librerías).
   - El `tabpanel` entra con `animate-fade-up` al cambiar de pestaña (re-key por pestaña activa).
   - Barra de cobertura arriba de los tabs: "8/10 sistemas con datos" con una pista `bg-zinc-200` y relleno
     `bg-emerald-500` con `transition-[width]`.
   - Conservar `role`, `aria-*`, ids `#sistema-*`/`panel-*`, teclado y la lógica hash/manual actual.
7. **`dato-list.tsx` / `ejemplo-list.tsx` / `nota-list.tsx`**: objetos visuales sin cambiar el modelo:
   - `DatoList`: cada dato en tarjeta `rounded-lg border border-zinc-200 p-3` (dark `zinc-800`) con borde
     izquierdo de acento `border-l-2 border-l-emerald-500` y `hover` que levanta sombra/translada leve
     (`hover:-translate-y-0.5 hover:shadow-sm transition`). El badge "Ausente" gana un icono.
   - `EjemploList`: grilla `sm:grid-cols-2` de tarjetas con el nombre en `<em>` destacado.
   - `NotaList`: icono de alerta (discrepancia) / info (aclaración) junto al título.
8. **`components/taxon/indice-secciones.tsx`**: el índice lateral gana una línea guía a la izquierda
   (`border-l`) con un marcador que se traslada a la sección activa (`transition-transform` sobre un
   `::before` o elemento absoluto con `top` calculado por índice). En la barra móvil, la misma marca como
   subrayado animado bajo el chip activo.
9. **`app/grupo/[slug]/page.tsx`**: usar `FichaHero`, `EmbriologiaSpecs`, envolver cada `Seccion` en
   `Reveal` y pasar los stats calculados (los datos salen de `lib/taxa.ts`, que la página sí puede
   importar). Mantener intactos los `id` `seccion-*` y el orden de secciones.

## Criterios de aceptación

- [ ] `/grupo/annelida` muestra cabecera-hero con stats, embriología como tarjetas con badges de color,
      tabs de sistemas con iconos y barra de cobertura, y las secciones aparecen animadas al scrollear.
- [ ] Con `prefers-reduced-motion` forzado no hay animación y todo el contenido es visible.
- [ ] El filtro "Solo apuntes" sigue ocultando datos externos en resumen, embriología y sistemas.
- [ ] `#sistema-excretor` sigue abriendo esa pestaña; "Heredado de" y los links a ancestros siguen
      visibles dentro de `#seccion-embriologia`.
- [ ] Modo oscuro coherente en todos los componentes nuevos.
- [ ] `pnpm test:e2e` pasa (`ficha.spec.ts` sin tocar) y `pnpm build` genera las 89 páginas estáticas.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
# Revisión manual: /grupo/annelida, /grupo/porifera, /grupo/protostomia en claro/oscuro y 390px/1280px
```

## Fuera de alcance

- Ilustraciones/dibujos de animales (siguen excluidos del proyecto).
- Librerías de animación (GSAP, Framer Motion) — si el CSS se queda corto se evalúa en otro ticket.
- Animar el mapa conceptual, el árbol ni el comparador (solo la ficha).
- Cambios de contenido o de fuentes.
