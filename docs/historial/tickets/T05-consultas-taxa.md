# T05 — Funciones de consulta del árbol

**Épica**: E0 Base · **Depende de**: T04

## Objetivo

Funciones puras para navegar la jerarquía (hijos, ancestros, descendientes, embriología heredada, ancestro
común, árbol serializable) y un recorrido genérico de todos los datos con fuente de un taxón.

## Regla importante de arquitectura

Hay **dos tipos** de módulos en `lib/`:

- **Puros** (no importan `data/`): `types.ts`, `apuntes.ts`, `etiquetas.ts`, `texto.ts`, `consultas.ts`,
  `arbol.ts`, `recorrer.ts`, `busqueda.ts`, `comparacion.ts`. Se pueden usar en Client Components.
- **Con datos**: `taxa.ts` (importa `data/taxa/index.ts`). **Solo** se usa en Server Components, páginas y tests.
  Un Client Component **nunca** debe importar `lib/taxa.ts` ni `data/` (metería todos los datos en el bundle).

## Archivos

- Crear: `lib/consultas.ts`, `lib/taxa.ts`, `lib/arbol.ts`, `lib/recorrer.ts`,
  `tests/unit/fixtures.ts`, `tests/unit/consultas.test.ts`, `tests/unit/arbol.test.ts`, `tests/unit/recorrer.test.ts`
- Borrar: `tests/unit/humo.test.ts`

## Pasos

### 1. `lib/consultas.ts` (puro)

```ts
export function crearConsultas(taxa: readonly Taxon[]) {
  // índices internos: Map slug→Taxon, Map slug→hijos ordenados por `orden`
  return {
    todos,                // readonly Taxon[] (el mismo array recibido)
    getTaxon,             // (slug: string) => Taxon | undefined
    requireTaxon,         // (slug: string) => Taxon   — lanza Error(`Taxón inexistente: ${slug}`)
    getHijos,             // (slug: string) => Taxon[]  ordenados por `orden`
    getAncestros,         // (slug: string) => Taxon[]  desde la raíz hasta el padre (sin incluir el propio)
    getRuta,              // (slug: string) => Taxon[]  ancestros + el propio
    getDescendientes,     // (slug: string) => Taxon[]  recorrido en preorden, sin incluir el propio
    getPhylumDe,          // (slug: string) => Taxon | undefined  el propio si es phylum, o el ancestro phylum
    getPhylaIncluidos,    // (slug: string) => Taxon[]  descendientes con nivel 'phylum' en preorden
    getEmbriologiaEfectiva, // (slug: string) => EmbriologiaEfectiva
    ancestroComun,        // (a: string, b: string) => Taxon
    getArbol,             // (raiz?: string) => NodoArbol   raiz por defecto = el taxón con padre null
  };
}
export type Consultas = ReturnType<typeof crearConsultas>;
```

Detalles:

- `getEmbriologiaEfectiva(slug)`: para cada criterio de `CRITERIOS`, recorrer `[propio, padre, abuelo, …]`
  y tomar el **primer** registro definido. Si viene de un ancestro, agregar `heredadoDe: <slug del ancestro>`.
  Si ninguno lo tiene, el criterio queda ausente en el objeto.
- `ancestroComun(a, b)`: el último taxón común entre `getRuta(a)` y `getRuta(b)`. Si `a === b` devuelve ese taxón.
- `getArbol(raiz)`: construye `NodoArbol` recursivo con `slug, nombre, nombreComun, nivel, hijos` y
  `resumenCorto = truncar(resumen[0].texto, 180)` si existe `resumen[0]` (usar `truncar` de `lib/texto.ts`).
  Omitir `nombreComun`/`resumenCorto` cuando son `undefined` (que el objeto sea serializable y limpio).

### 2. `lib/taxa.ts` (con datos)

```ts
import { TAXA } from '@/data/taxa';
import { crearConsultas } from './consultas';

export const consultas = crearConsultas(TAXA);
export const {
  todos, getTaxon, requireTaxon, getHijos, getAncestros, getRuta, getDescendientes,
  getPhylumDe, getPhylaIncluidos, getEmbriologiaEfectiva, ancestroComun, getArbol,
} = consultas;
```

### 3. `lib/arbol.ts` (puro, para Client Components que reciben un `NodoArbol`)

```ts
export function aplanar(raiz: NodoArbol): NodoArbol[]                       // preorden, incluye raíz
export function buscarNodo(raiz: NodoArbol, slug: string): NodoArbol | undefined
export function rutaHasta(raiz: NodoArbol, slug: string): NodoArbol[]       // raíz…nodo; [] si no existe
export function phylaDe(nodo: NodoArbol): NodoArbol[]                       // descendientes nivel 'phylum'
export function esGrupoSuperior(nivel: Nivel): boolean                      // reino|subreino|rama|clado
```

### 4. `lib/recorrer.ts` (puro)

```ts
export type ItemConFuentes = {
  seccion: string;      // ver tabla abajo
  etiqueta: string;     // texto legible para humanos
  texto: string;
  fuentes: Fuente[];
  ausente?: boolean;
};
export function recorrerItems(t: Taxon): ItemConFuentes[]
```

| Origen | `seccion` | `etiqueta` | `texto` |
|---|---|---|---|
| `resumen[i]` | `resumen` | `Resumen` | dato.texto |
| `morfologiaExterna[i]` | `morfologiaExterna` | `Morfología externa` | dato.texto |
| `embriologia[c]` | `embriologia:${c}` | `CRITERIO_LABEL[c]` | `VALOR_LABEL[valor]` + (nota ? `. ${nota}` : '') |
| `sistemas[s][i]` | `sistema:${s}` | `SISTEMA_LABEL[s]` | dato.texto |
| `estructurasEspeciales[k].datos[i]` | `especial:${k}` | `estructura.titulo` | dato.texto |
| `reproduccion[i]` | `reproduccion` | `Reproducción y desarrollo` | dato.texto |
| `bioecologia[i]` | `bioecologia` | `Bioecología` | dato.texto |
| `ejemplos[i]` | `ejemplos` | `Ejemplos` | `nombre` + (descripcion ? `: ${descripcion}` : '') |
| `notas[i]` | `notas` | `Notas` | nota.texto |

Orden de salida: el de la tabla; sistemas en el orden de `SISTEMAS`.

### 5. Tests

`tests/unit/fixtures.ts`:

```ts
export function taxonFalso(p: Pick<Taxon, 'slug' | 'nivel' | 'padre'> & Partial<Taxon>): Taxon
// completa nombre = slug, orden = 1 y todos los arrays/objetos vacíos
```

`tests/unit/consultas.test.ts` — con un fixture chico (raiz → a → a1, a2; raiz → b → b1) probar:
- `getHijos` respeta `orden`; `getAncestros`, `getRuta`, `getDescendientes` (preorden).
- `getEmbriologiaEfectiva`: hijo sin datos hereda del padre con `heredadoDe`; hijo con dato propio no lleva `heredadoDe`.
- `ancestroComun('a1','b1')` = raiz; `ancestroComun('a1','a2')` = a; `ancestroComun('a1','a1')` = a1.
- `requireTaxon('x')` lanza.
- `getArbol()` devuelve la raíz con la estructura correcta y `resumenCorto` truncado.

Con datos reales (`lib/taxa.ts`):
- `getHijos('arthropoda').map(t => t.slug)` = `['chelicerata','myriapoda','crustacea','hexapoda']`.
- `getAncestros('insecta').map(t => t.slug)` = `['animalia','eumetazoa','bilateria','protostomia','ecdysozoa','arthropoda','hexapoda']`.
- `ancestroComun('annelida','arthropoda').slug` = `'protostomia'`.
- `getPhylaIncluidos('deuterostomia').map(t => t.slug)` = `['echinodermata','hemichordata','chordata']`.
- `getPhylumDe('copepoda')?.slug` = `'arthropoda'`.

`tests/unit/arbol.test.ts`: `aplanar`, `buscarNodo`, `rutaHasta` (incluido el caso inexistente → `[]`), `phylaDe`.

`tests/unit/recorrer.test.ts`: un taxón falso con un dato en cada sección produce los `seccion`/`etiqueta` esperados y en orden.

## Criterios de aceptación

- [ ] Ningún módulo puro importa `@/data/...` ni `lib/taxa.ts`.
- [ ] Todos los tests pasan; `humo.test.ts` eliminado.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- Validaciones de integridad (T06).
