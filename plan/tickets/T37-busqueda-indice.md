# T37 — Buscador: índice y lógica

**Épica**: E4 Extras · **Depende de**: T36

## Objetivo

Lógica pura de búsqueda de texto completo sobre todos los datos: insensible a tildes y mayúsculas, con prefijos y
tolerancia a errores leves, resultados agrupados por taxón y fragmentos resaltables.

## Dependencia nueva

```bash
pnpm add minisearch@7.2.0
```

## Archivos

- Crear: `lib/busqueda.ts`, `tests/unit/busqueda.test.ts`

## Pasos

### 1. Tipos y documentos

```ts
export type DocBusqueda = {
  id: string;            // `${slug}:${n}` (n = índice incremental dentro del taxón)
  slug: string;
  taxonNombre: string;   // nombre + (nombreComun ? ` (${nombreComun})` : '')
  nivel: Nivel;
  seccion: string;       // igual a ItemConFuentes.seccion, o 'nombre'
  seccionLabel: string;  // igual a ItemConFuentes.etiqueta, o 'Nombre'
  ancla: string;         // id de destino en la ficha (ver tabla)
  texto: string;
  soloExterno: boolean;  // !tieneApunte(fuentes)
};

export function construirDocumentos(taxa: readonly Taxon[]): DocBusqueda[]
```

- Por cada taxón: un documento `seccion: 'nombre'` con `texto` = nombre + nombreComun + sinónimos (separados por espacio),
  `ancla: ''`, `soloExterno: false`.
- Luego un documento por cada item de `recorrerItems(t)`.
- `ancla` según la sección:

| seccion | ancla |
|---|---|
| `resumen` | `seccion-resumen` |
| `morfologiaExterna` | `seccion-morfologia` |
| `embriologia:*` | `seccion-embriologia` |
| `sistema:<id>` | `sistema-<id>` |
| `especial:<k>` | `especial-<k>` |
| `reproduccion` | `seccion-reproduccion` |
| `bioecologia` | `seccion-bioecologia` |
| `ejemplos` | `seccion-ejemplos` |
| `notas` | `seccion-notas` |

### 2. Índice

```ts
export function crearIndice(docs: DocBusqueda[]): MiniSearch<DocBusqueda>
```

- `fields: ['texto', 'taxonNombre']`, `storeFields`: todos los campos de `DocBusqueda`.
- `processTerm: (t) => normalizar(t) || null` (usar `normalizar` de `lib/texto.ts`).
- `searchOptions: { prefix: true, fuzzy: 0.2, boost: { taxonNombre: 3 }, combineWith: 'AND' }`.
- Documentar en el test que `normalizar` hace que "anelidos" encuentre "Anélidos".

### 3. Búsqueda agrupada

```ts
export type ResultadoTaxon = {
  slug: string; taxonNombre: string; nivel: Nivel; puntaje: number;
  coincidencias: { id: string; seccionLabel: string; ancla: string; texto: string; soloExterno: boolean }[];
};
export function buscar(indice: MiniSearch<DocBusqueda>, consulta: string, limite = 30): ResultadoTaxon[]
```

- Consulta con menos de 2 caracteres (después de `trim`) → `[]`.
- Agrupar por `slug`; `puntaje` = suma de los scores; ordenar por puntaje descendente; máximo `limite` taxones y
  máximo 5 coincidencias por taxón (las de mayor score). Excluir de `coincidencias` el documento `nombre`
  (pero su score sí suma).

### 4. Resaltado

```ts
export type Segmento = { texto: string; marcado: boolean };
export function resaltar(texto: string, consulta: string): Segmento[]
```

- Separar la consulta en términos (por espacios, ignorar términos de < 2 caracteres).
- Marcar en `texto` cada palabra cuyo `normalizar(palabra)` **empieza con** el `normalizar(término)`.
- Conservar el texto original (con tildes) en los segmentos. Unir los segmentos consecutivos con la misma marca.

### 5. Recorte de fragmento

```ts
export function fragmento(texto: string, consulta: string, max = 220): string
```

Si el texto es más largo que `max`, devolver una ventana centrada en la primera coincidencia, con "…" a los lados.

### 6. Tests (`tests/unit/busqueda.test.ts`) — con fixtures (no con datos reales)

- Un taxón con el dato "Excreción mediante nefridios" → `buscar(indice, 'nefridio')` lo encuentra con `ancla` `sistema-excretor`.
- "anelidos" encuentra el taxón cuyo nombreComun es "Anélidos".
- Prefijo: "nefri" encuentra "nefridios". Error leve (una letra cambiada): "nefridyos" encuentra "nefridios".
- `combineWith: 'AND'`: "celoma ausente" no devuelve un taxón que solo tiene "celoma".
- `resaltar('Los Nefridios excretores', 'nefridio')` → `[{ 'Los ', false }, { 'Nefridios', true }, { ' excretores', false }]`.
- `fragmento` recorta y agrega "…".
- Consulta de 1 carácter → `[]`.

## Criterios de aceptación

- [ ] `lib/busqueda.ts` es puro (no importa `data/` ni `lib/taxa.ts`).
- [ ] Tests pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- UI (T38).
