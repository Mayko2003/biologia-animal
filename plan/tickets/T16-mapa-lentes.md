# T16 — Mapa conceptual: lentes por criterio embrionario

**Épica**: E2 UI · **Depende de**: T15

## Objetivo

Un selector de "lente" que colorea los phyla del mapa según un criterio (capas germinativas, simetría, cavidad corporal,
destino del blastoporo, segmentación), con leyenda y el valor escrito en cada hoja. Sirve para estudiar
transversalmente (ej. ver todos los pseudocelomados).

## Archivos

- Modificar: `lib/etiquetas.ts`, `app/mapa/page.tsx`, `components/mapa/explorador-mapa.tsx`, `components/mapa/mapa-conceptual.tsx`
- Crear: `components/mapa/selector-lente.tsx`, `components/mapa/leyenda-lente.tsx`

## Pasos

### 1. Colores en `lib/etiquetas.ts`

```ts
export const COLOR_VALOR: Record<ValorCriterio, string> = {
  'sin-tejidos': '#f59e0b', diblastico: '#06b6d4', triblastico: '#8b5cf6',
  asimetrico: '#f59e0b', radial: '#06b6d4', birradial: '#14b8a6', bilateral: '#8b5cf6', pentarradial: '#ec4899',
  'no-aplica': '#a1a1aa', acelomado: '#f59e0b', pseudocelomado: '#06b6d4', esquizocelomado: '#8b5cf6', enterocelomado: '#ec4899',
  boca: '#8b5cf6', ano: '#ec4899',
  espiral: '#8b5cf6', 'en-T': '#f59e0b', otra: '#14b8a6',
};
export const COLOR_SIN_DATO = '#d4d4d8';
```

### 2. Datos desde la página (`app/mapa/page.tsx`)

Calcular en el servidor y pasar a `ExploradorMapa` una prop nueva:

```ts
valores: Record<string, Partial<Record<CriterioId, ValorCriterio>>>
// para cada taxón que aparece como `taxon` en el mapa: getEmbriologiaEfectiva(slug)[c]?.valor
```

### 3. `selector-lente.tsx` (`'use client'`)

- `role="radiogroup"` con `aria-label="Lente"`; opciones: "Sin lente" + los 5 `CRITERIO_LABEL`. Cada opción es un
  `<button role="radio" aria-checked>`.
- Estado en la URL con `useParametro('lente')` (valor = `CriterioId` o `null`). Ignorar valores inválidos.

### 4. `leyenda-lente.tsx` (Server-safe)

Props: `{ criterio: CriterioId; conteo: Record<string, number> }` (clave = valor o `'sin-dato'`).
Muestra cada valor presente con un cuadrado de color (`COLOR_VALOR` / `COLOR_SIN_DATO`), `VALOR_LABEL` y la cantidad de
phyla. Orden: el de `VALORES_CRITERIO[criterio]`, y "Sin dato" al final.

### 5. Integración

- `ExploradorMapa`: lee la lente, arma `estiloHoja(taxon)`:
  - sin lente → `{}`;
  - con lente → `valor = valores[taxon]?.[lente]`; `{ color: valor ? COLOR_VALOR[valor] : COLOR_SIN_DATO, etiqueta: valor ? VALOR_LABEL[valor] : 'Sin dato' }`.
  - Calcula el `conteo` solo sobre las hojas (phyla) y muestra `LeyendaLente` debajo del selector.
- `MapaConceptual`: si `estiloHoja` devuelve `color` para una **hoja**, aplicar `style={{ borderColor: color, backgroundColor: color + '22' }}`
  y una barra izquierda de 6 px de ese color; reemplazar el `subtitulo` por la `etiqueta` en una pastilla chica.
  Los nodos conceptuales no se colorean.

## Criterios de aceptación

- [ ] `/mapa?lente=blastoporo` colorea los phyla; los que no tienen dato aparecen en gris con "Sin dato".
- [ ] La leyenda muestra los conteos correctos y se actualiza al cambiar de lente.
- [ ] Combinar `?lente=…&sel=…` funciona.
- [ ] `pnpm build` pasa.

> Es esperable que, antes de T41–T45, muchos phyla figuren "Sin dato": la embriología se completa con fuentes externas.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Colorear el árbol.
