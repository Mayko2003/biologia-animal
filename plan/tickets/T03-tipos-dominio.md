# T03 — Tipos del dominio, catálogo de apuntes y etiquetas

**Épica**: E0 Base · **Depende de**: T02

## Objetivo

Definir el modelo de datos tipado que usa toda la app, el catálogo de archivos de apuntes, las etiquetas en
español y una función de normalización de texto.

## Archivos

- Crear: `lib/types.ts`, `lib/apuntes.ts`, `lib/etiquetas.ts`, `lib/texto.ts`, `tests/unit/texto.test.ts`, `tests/unit/apuntes.test.ts`

## Pasos

### 1. `lib/apuntes.ts`

```ts
export type InfoApunte = { tp: number; titulo: string };

export const APUNTES = {
  'porifera y cnidarios.md': { tp: 4, titulo: 'Poríferos y Cnidarios' },
  'platelmintos.md': { tp: 5, titulo: 'Protostomos Lofotrocozoos I' },
  'annelidos.md': { tp: 6, titulo: 'Protostomos Lofotrocozoos II' },
  'mollusca, briozoos, brachiopoda, chaetognatha.md': { tp: 7, titulo: 'Protostomos Lofotrocozoos III' },
  'nematodos.md': { tp: 8, titulo: 'Protostomos Ecdisozoos' },
  'quilicerados y miriapodos.md': { tp: 9, titulo: 'Artrópodos I: Quelicerados y Miriápodos' },
  'chrustacea.md': { tp: 10, titulo: 'Artrópodos II: Crustacea' },
  'insecta.md': { tp: 12, titulo: 'Hexapoda: Insecta' },
  'equidodermos.md': { tp: 12, titulo: 'Equinodermos y Hemicordados' },
  'chordata.md': { tp: 13, titulo: 'Phylum Chordata' },
  'gnatostomatha.md': { tp: 14, titulo: 'Osteichthyes y Chondrichthyes' },
} as const satisfies Record<string, InfoApunte>;

export type ArchivoApunte = keyof typeof APUNTES;

export const DOMINIOS_PERMITIDOS = [
  'nature.com', 'cell.com', 'academic.oup.com', 'link.springer.com', 'royalsocietypublishing.org',
  'sciencedirect.com', 'ncbi.nlm.nih.gov', 'pnas.org', 'onlinelibrary.wiley.com', 'biologists.com',
  'animaldiversity.org', 'tolweb.org', 'ucmp.berkeley.edu', 'biodiversitylibrary.org', 'britannica.com',
  'es.wikipedia.org', 'en.wikipedia.org',
] as const;

export function dominioPermitido(url: string): boolean
// true si el hostname de la URL es igual a un dominio de la lista o termina en "." + dominio.

export function etiquetaFuente(f: Fuente): string
// apunte → `TP${tp} · L${ini}–${fin}`  (ej. "TP6 · L36–38")
// web    → f.sitio
```

(Importá `Fuente` como `import type` desde `./types`.)

### 2. `lib/types.ts`

Copiar **exactamente**:

```ts
import type { ArchivoApunte } from './apuntes';

export type Nivel =
  | 'reino' | 'subreino' | 'rama' | 'clado'
  | 'phylum' | 'subphylum' | 'superclase' | 'clase' | 'subclase';

export type FuenteApunte = { tipo: 'apunte'; archivo: ArchivoApunte; lineas: [number, number]; cita: string };
export type FuenteWeb = { tipo: 'web'; url: string; titulo: string; sitio: string; consultado: string };
export type Fuente = FuenteApunte | FuenteWeb;

export type Dato = { texto: string; fuentes: Fuente[]; ausente?: boolean };
export type Ejemplo = { nombre: string; descripcion?: string; fuentes: Fuente[] };
export type Nota = { tipo: 'discrepancia' | 'aclaracion'; texto: string; fuentes: Fuente[] };
export type EstructuraEspecial = { titulo: string; datos: Dato[] };

export const SISTEMAS = [
  'tegumento', 'esqueleto', 'muscular', 'digestivo', 'respiratorio',
  'circulatorio', 'excretor', 'nervioso', 'sentidos', 'reproductor',
] as const;
export type SistemaId = (typeof SISTEMAS)[number];

export const VALORES_CRITERIO = {
  capas: ['sin-tejidos', 'diblastico', 'triblastico'],
  simetria: ['asimetrico', 'radial', 'birradial', 'bilateral', 'pentarradial'],
  cavidad: ['no-aplica', 'acelomado', 'pseudocelomado', 'esquizocelomado', 'enterocelomado'],
  blastoporo: ['no-aplica', 'boca', 'ano'],
  segmentacion: ['no-aplica', 'espiral', 'radial', 'en-T', 'otra'],
} as const;
export type CriterioId = keyof typeof VALORES_CRITERIO;
export const CRITERIOS = Object.keys(VALORES_CRITERIO) as CriterioId[];
export type ValorCriterio<C extends CriterioId = CriterioId> = (typeof VALORES_CRITERIO)[C][number];
export type RegistroEmbrionario<C extends CriterioId = CriterioId> = {
  valor: ValorCriterio<C>;
  fuentes: Fuente[];
  nota?: string;
};
export type Embriologia = { [C in CriterioId]?: RegistroEmbrionario<C> };
export type EmbriologiaEfectiva = { [C in CriterioId]?: RegistroEmbrionario<C> & { heredadoDe?: string } };

export type Taxon = {
  slug: string;
  nombre: string;
  nombreComun?: string;
  sinonimos?: string[];
  nivel: Nivel;
  padre: string | null;
  orden: number;
  externo?: boolean;
  resumen: Dato[];
  morfologiaExterna: Dato[];
  embriologia: Embriologia;
  sistemas: Partial<Record<SistemaId, Dato[]>>;
  estructurasEspeciales: EstructuraEspecial[];
  reproduccion: Dato[];
  bioecologia: Dato[];
  ejemplos: Ejemplo[];
  notas: Nota[];
};

export type NodoArbol = {
  slug: string;
  nombre: string;
  nombreComun?: string;
  nivel: Nivel;
  resumenCorto?: string;
  hijos: NodoArbol[];
};

export type NodoMapa = {
  id: string;
  titulo: string;
  subtitulo?: string;
  criterio?: string;
  taxon?: string;
  descripcion?: Dato;
  hijos: NodoMapa[];
};
```

### 3. `lib/etiquetas.ts`

Exportar (todas con tipos estrictos, `as const` o `Record<…>`):

- `NIVEL_ORDEN: Record<Nivel, number>` → reino 0, subreino 1, rama 2, clado 3, phylum 4, subphylum 5, superclase 6, clase 7, subclase 8.
- `NIVEL_LABEL: Record<Nivel, string>` → 'Reino', 'Subreino', 'Rama', 'Clado', 'Phylum', 'Subphylum', 'Superclase', 'Clase', 'Subclase'.
- `NIVEL_CLASES: Record<Nivel, string>` → clases Tailwind de la insignia de nivel (fondo + texto, con `dark:`). Paleta:
  reino/subreino/rama/clado = `zinc`; phylum = `emerald`; subphylum = `teal`; superclase = `cyan`; clase = `sky`; subclase = `indigo`.
  Ej.: `'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'`.
- `NIVEL_COLOR_HEX: Record<Nivel, string>` → color sólido para SVG (zinc-500 `#71717a`, emerald-600 `#059669`,
  teal-600 `#0d9488`, cyan-600 `#0891b2`, sky-600 `#0284c7`, indigo-600 `#4f46e5`).
- `SISTEMA_LABEL: Record<SistemaId, string>` → 'Tegumento y pared del cuerpo', 'Esqueleto y sostén', 'Muscular',
  'Digestivo', 'Respiratorio', 'Circulatorio', 'Excretor', 'Nervioso', 'Órganos de los sentidos', 'Reproductor'.
- `CRITERIO_LABEL: Record<CriterioId, string>` → 'Capas germinativas', 'Simetría', 'Cavidad corporal',
  'Destino del blastoporo', 'Segmentación del huevo'.
- `VALOR_LABEL: Record<ValorCriterio, string>` →
  `sin-tejidos` 'Sin tejidos verdaderos', `diblastico` 'Diblástico', `triblastico` 'Triblástico',
  `asimetrico` 'Asimétrico', `radial` 'Radial', `birradial` 'Birradial', `bilateral` 'Bilateral',
  `pentarradial` 'Pentarradial (adulto)', `no-aplica` 'No aplica', `acelomado` 'Acelomado',
  `pseudocelomado` 'Pseudocelomado', `esquizocelomado` 'Celomado (esquizocelia)',
  `enterocelomado` 'Celomado (enterocelia)', `boca` 'Origina la boca (protostomía)',
  `ano` 'Origina el ano (deuterostomía)', `espiral` 'Espiral', `en-T` 'En T', `otra` 'Otra'.
- `SECCION_LABEL` → `{ resumen: 'Resumen', embriologia: 'Desarrollo embrionario', morfologiaExterna: 'Morfología externa',
  sistemas: 'Sistemas', estructurasEspeciales: 'Estructuras especiales', reproduccion: 'Reproducción y desarrollo',
  bioecologia: 'Bioecología', ejemplos: 'Ejemplos', notas: 'Notas' } as const`.

### 4. `lib/texto.ts`

```ts
export function normalizar(s: string): string
// minúsculas, NFD + quitar diacríticos (/\p{Diacritic}/gu), colapsar espacios en blanco a uno, trim.

export function normalizarEspacios(s: string): string
// minúsculas, colapsar espacios a uno, trim. CONSERVA tildes. (Lo usa el test de citas.)

export function truncar(s: string, max: number): string
// si s.length <= max devuelve s; si no, corta en el último espacio antes de max y agrega "…".
```

### 5. Tests

- `tests/unit/texto.test.ts`: `normalizar('  Árbol   Filogenético ')` → `'arbol filogenetico'`;
  `normalizarEspacios('Los  Cnidarios\n son')` → `'los cnidarios son'`; `truncar` con texto corto y largo.
- `tests/unit/apuntes.test.ts`:
  - `dominioPermitido('https://animaldiversity.org/x')` → true; `'https://es.wikipedia.org/wiki/X'` → true;
    `'https://evil-animaldiversity.org'` → false; `'https://example.com'` → false.
  - `etiquetaFuente` para una fuente apunte de `annelidos.md` líneas [36, 38] → `'TP6 · L36–38'`.
  - Cada clave de `APUNTES` existe como archivo en `animal-data/` (usar `node:fs` `existsSync` + `path.join(process.cwd(), 'animal-data', archivo)`).

## Criterios de aceptación

- [ ] Los tipos compilan y coinciden exactamente con lo especificado.
- [ ] `VALOR_LABEL` cubre todos los valores (si falta uno, TypeScript debe fallar).
- [ ] Tests pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- Datos de taxones (T04). Funciones de consulta (T05).
