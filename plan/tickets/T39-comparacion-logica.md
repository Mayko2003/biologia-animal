# T39 — Comparador: lógica

**Épica**: E4 Extras · **Depende de**: T38

## Objetivo

Función pura que, dados dos taxones, arma las filas de un cuadro comparativo (ubicación, embriología, morfología, cada
sistema, estructuras especiales, reproducción, bioecología y ejemplos) e indica dónde difieren.

## Archivos

- Crear: `lib/comparacion.ts`, `tests/unit/comparacion.test.ts`

## Pasos

### 1. Tipos

```ts
export type Celda =
  | { estado: 'datos'; datos: Dato[] }
  | { estado: 'ausente'; datos: Dato[] }       // todos los datos tienen ausente: true
  | { estado: 'texto'; texto: string; detalle?: string; fuentes: Fuente[] }
  | { estado: 'vacio' };

export type GrupoFila = 'Ubicación' | 'Desarrollo embrionario' | 'Morfología' | 'Sistemas' | 'Estructuras especiales' | 'Reproducción y ecología';

export type FilaComparacion = {
  id: string;            // ej. 'nivel', 'emb-capas', 'sistema-digestivo', 'especiales', 'reproduccion'
  grupo: GrupoFila;
  etiqueta: string;
  a: Celda;
  b: Celda;
  distinto: boolean;
};

export type Comparacion = {
  a: Taxon;
  b: Taxon;
  ancestroComun: Taxon;
  rutaA: Taxon[];        // desde el hijo del ancestro común hasta a (inclusive)
  rutaB: Taxon[];
  filas: FilaComparacion[];
};

export function comparar(slugA: string, slugB: string, consultas: Consultas): Comparacion
```

### 2. Filas, en este orden

| id | grupo | etiqueta | Celda |
|---|---|---|---|
| `nivel` | Ubicación | Nivel | `texto`: `NIVEL_LABEL[nivel]` |
| `ruta` | Ubicación | Clasificación | `texto`: nombres de `getRuta` sin la raíz, unidos con " › " |
| `phylum` | Ubicación | Phylum | `texto`: nombre de `getPhylumDe` o "—" |
| `emb-<criterio>` (×5) | Desarrollo embrionario | `CRITERIO_LABEL` | `texto`: `VALOR_LABEL[valor]`, `detalle`: `nota` y/o "heredado de X", `fuentes`; sin dato → `vacio` |
| `morfologia` | Morfología | Morfología externa | `datos` / `vacio` |
| `sistema-<id>` (×10) | Sistemas | `SISTEMA_LABEL` | `datos`, `ausente` o `vacio` |
| `especiales` | Estructuras especiales | Estructuras especiales | `texto` con los títulos unidos por ", " (fuentes = las del primer dato de cada estructura) o `vacio` |
| `reproduccion` | Reproducción y ecología | Reproducción y desarrollo | `datos` / `vacio` |
| `bioecologia` | Reproducción y ecología | Bioecología | `datos` / `vacio` |
| `ejemplos` | Reproducción y ecología | Ejemplos | `texto` con los nombres unidos por ", " o `vacio` |

### 3. Regla de `distinto`

- Filas `emb-*`, `nivel`, `phylum`: `distinto` si el texto difiere (vacío cuenta como distinto de un valor).
- Filas `sistema-*`: `distinto` si los **estados** difieren (ej. `ausente` vs `datos`, o `vacio` vs `datos`).
- Resto de las filas: `distinto = false` (comparar textos libres no tiene sentido).

### 4. Tests (con `crearConsultas(fixture)`)

- Fixture: raiz → p1 (phylum, embriología `blastoporo: boca`) → c1 (clase); raiz → p2 (phylum, `blastoporo: ano`).
  c1 con `sistemas.respiratorio` = un dato `ausente: true`; p2 con un dato normal en `respiratorio`.
- `comparar('c1', 'p2', …)`:
  - `ancestroComun.slug === 'raiz'`; `rutaA` = [p1, c1]; `rutaB` = [p2].
  - fila `emb-blastoporo`: a = "Origina la boca…" con `detalle` que incluye "heredado de p1"; b = "Origina el ano…"; `distinto: true`.
  - fila `sistema-respiratorio`: a `ausente`, b `datos`, `distinto: true`.
  - fila `sistema-digestivo`: ambas `vacio`, `distinto: false`.
- `comparar('c1', 'c1', …)` no lanza y todas las filas tienen `distinto: false`.
- La cantidad total de filas es 3 + 5 + 1 + 10 + 1 + 3 = **23**.

## Criterios de aceptación

- [ ] `lib/comparacion.ts` es puro (recibe `consultas` como parámetro).
- [ ] Tests pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- UI (T40).
