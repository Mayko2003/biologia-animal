# T09 — Datos del mapa conceptual embrionario

**Épica**: E1 Piloto · **Depende de**: T07 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md) (§5 citas)

## Objetivo

Definir la estructura del mapa conceptual: nodos conceptuales (Metazoa, Parazoa, Eumetazoa, Radiata, Bilateria,
Protostomados, Lofotrocozoos, Ecdisozoos, Deuterostomados) y los 17 phyla como hojas. Cada arista lleva el
**criterio embrionario** que separa al grupo.

## Archivos

- Crear: `data/mapa-embrionario.ts`, `tests/unit/mapa.test.ts`, `tests/unit/verificar-fuentes.ts`
- Modificar: `tests/unit/integridad.test.ts` (usar el helper compartido)

## Pasos

### 1. Helper compartido de verificación

Mover la lógica de verificación de fuentes de `integridad.test.ts` (reglas 9 y 10) a
`tests/unit/verificar-fuentes.ts`:

```ts
export function erroresDeFuente(f: Fuente): string[]   // [] si es válida; si no, mensajes de error
```

y usarla desde `integridad.test.ts` y `mapa.test.ts`.

### 2. `data/mapa-embrionario.ts`

```ts
import type { NodoMapa } from '@/lib/types';
export const MAPA_EMBRIONARIO: NodoMapa = { /* … */ };
```

Estructura exacta (id · titulo · subtitulo · criterio · taxon):

```
metazoa · "Metazoa" · "Reino Animalia" · — · animalia
├─ parazoa · "Parazoa" · — · "Sin tejidos verdaderos (organización celular)" · parazoa
│  └─ porifera (hoja)
└─ eumetazoa · "Eumetazoa" · — · "Con tejidos verdaderos" · eumetazoa
   ├─ radiata · "Radiata" · — · "Simetría radial, eje oral-aboral" · radiata
   │  ├─ cnidaria (hoja) · criterio "Diblásticos (según la mayoría de los autores)"
   │  └─ ctenophora (hoja) · criterio "Tripoblásticos según el apunte"
   └─ bilateria · "Bilateria" · — · "Simetría bilateral, triblásticos" · bilateria
      ├─ protostomia · "Protostomados" · — · "La boca deriva del blastoporo" · protostomia
      │  ├─ lophotrochozoa · "Lofotrocozoos" · — · "Segmentación espiral; larva trocófora o lofóforo" · lophotrochozoa
      │  │  └─ hojas: platyhelminthes, gastrotricha, rotifera, annelida, mollusca, bryozoa, brachiopoda,
      │  │            chaetognatha (criterio "Ubicación según el TP7, ver notas")
      │  └─ ecdysozoa · "Ecdisozoos" · — · "Muda (ecdisis) de la cutícula" · ecdysozoa
      │     └─ hojas: nemata, nematomorpha, arthropoda
      └─ deuterostomia · "Deuterostomados" · — · "La boca es de neoformación" · deuterostomia
         └─ hojas: echinodermata, hemichordata, chordata
```

Reglas:

- **Hojas**: `{ id: <slug>, titulo: <nombre del taxón>, subtitulo: <nombreComun del taxón>, taxon: <slug>, hijos: [] }`.
  `titulo`/`subtitulo` deben coincidir con los de `data/taxa/<slug>.ts`. Solo cnidaria, ctenophora y chaetognatha llevan `criterio`.
- **Nodos conceptuales**: llevan `descripcion` (un `Dato`) con fuente de apunte. Usá las mismas líneas que en T07:

| id | Líneas sugeridas para `descripcion` |
|---|---|
| metazoa | porifera 9–10 |
| parazoa | porifera 16–18 |
| eumetazoa | porifera 293 |
| radiata | porifera 300–301 |
| bilateria | platelmintos 10–12 |
| protostomia | platelmintos 12–13 |
| lophotrochozoa | platelmintos 23–26 |
| ecdysozoa | nematodos 12–14 |
| deuterostomia | platelmintos 13–14 |

- Los textos de `criterio` son etiquetas cortas (≤ 60 caracteres) y **no** llevan fuente (la fuente está en `descripcion`).

### 3. `tests/unit/mapa.test.ts`

- Los `id` son únicos en todo el mapa.
- Todo `taxon` existe en `TAXA`.
- Las hojas (nodos sin hijos) son **exactamente** los 17 taxones de nivel `phylum`, cada uno una sola vez.
- `titulo`/`subtitulo` de cada hoja coinciden con `nombre`/`nombreComun` del taxón.
- Todo nodo con hijos tiene `descripcion` y `erroresDeFuente` devuelve `[]` para cada fuente.
- Todo `criterio` tiene como máximo 60 caracteres.

## Criterios de aceptación

- [ ] Estructura idéntica a la especificada.
- [ ] Tests nuevos e integridad pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- Renderizado del mapa (T15) y lentes (T16).
