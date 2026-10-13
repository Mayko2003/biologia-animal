# T11 — Página de ficha de grupo `/grupo/[slug]`

**Épica**: E2 UI · **Depende de**: T10

## Objetivo

La página principal de estudio: todo lo que se sabe de un grupo, organizado en secciones, con la fuente de
cada dato y la embriología heredada del phylum.

## Archivos

- Crear: `app/grupo/[slug]/page.tsx`, `components/taxon/embriologia-tabla.tsx`, `components/taxon/sistemas-tabs.tsx`,
  `components/taxon/nota-list.tsx`, `components/taxon/subgrupos.tsx`, `components/taxon/indice-secciones.tsx`

## Pasos

### 1. Leer documentación

`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md` (sección *With Cache Components*)
y `…/04-functions/generate-static-params.md`.

### 2. `app/grupo/[slug]/page.tsx` (Server Component)

```tsx
export function generateStaticParams() {
  return todos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<'/grupo/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const t = getTaxon(slug);
  return t ? { title: t.nombre, description: t.resumen[0]?.texto } : {};
}

export default async function Page({ params }: PageProps<'/grupo/[slug]'>) {
  const { slug } = await params;
  const taxon = getTaxon(slug);
  if (!taxon) notFound();
  // …
}
```

Importar de `@/lib/taxa`: `todos, getTaxon, getAncestros, getHijos, getPhylumDe, getPhylaIncluidos, getEmbriologiaEfectiva, getArbol`.
**No** exportar `dynamicParams` ni `dynamic` (prohibido con Cache Components).

### 3. Estructura de la página

Layout: en `lg`, dos columnas `grid lg:grid-cols-[1fr_220px] gap-10`; a la derecha `IndiceSecciones` (sticky).

**Encabezado**

- `Breadcrumb` con `getAncestros(slug)`.
- `RankBadge` + `<h1 className="text-3xl font-bold">{nombre}</h1>` + `nombreComun` debajo (muted).
- Si hay `sinonimos`: `También: A, B`.
- Si `externo`: insignia amber "Grupo no incluido en los apuntes".
- Fila de acciones (links con estilo de botón secundario):
  - "Ver en el árbol" → `/arbol?sel=${slug}`
  - "Ver en el mapa" → `/mapa?sel=${x}` donde `x = slug` si el nivel es reino/subreino/rama/clado/phylum; si no, `getPhylumDe(slug)!.slug`.
  - "Comparar con…" → `/comparar?a=${slug}`
  - `FiltroFuentesToggle` a la derecha.

**Secciones** (cada una con `Seccion`; `id` exacto entre paréntesis):

1. Subgrupos (`seccion-subgrupos`) — componente `Subgrupos`:
   - Si el nivel es reino/subreino/rama/clado: título "Phyla incluidos" y una grilla de `TaxonCard` con `getPhylaIncluidos(slug)`.
   - Si no y tiene hijos: título "Subgrupos" ("Clases" si todos los hijos son de nivel clase); grilla de `TaxonCard`
     de cada hijo y, debajo de cada tarjeta, links pequeños a sus propios hijos (nietos), si los tiene.
   - Si no tiene hijos: no se muestra la sección.
   - Para construir las tarjetas usar `getArbol(slug).hijos` (ya trae `resumenCorto`).
2. Resumen (`seccion-resumen`) — `DatoList`.
3. Desarrollo embrionario (`seccion-embriologia`) — `EmbriologiaTabla` con `getEmbriologiaEfectiva(slug)`.
4. Morfología externa (`seccion-morfologia`) — `DatoList`.
5. Sistemas (`seccion-sistemas`) — `SistemasTabs`.
6. Reproducción y desarrollo (`seccion-reproduccion`) — `DatoList`.
7. Bioecología (`seccion-bioecologia`) — `DatoList`.
8. Ejemplos (`seccion-ejemplos`) — `EjemploList`.
9. Notas (`seccion-notas`) — `NotaList`. Solo si hay notas.

Regla para grupos superiores (reino/subreino/rama/clado): mostrar **solo** las secciones con contenido
(normalmente Subgrupos, Resumen, Embriología y Notas).

### 4. `EmbriologiaTabla` (Server-safe)

Props: `{ embriologia: EmbriologiaEfectiva; nombres: Record<string, string> }` (`nombres` = slug→nombre de los ancestros,
para mostrar "heredado de").

Tabla de 5 filas, una por `CRITERIOS`, columnas: Criterio (`CRITERIO_LABEL`) · Valor (`VALOR_LABEL`) · Detalle.
En Detalle: `nota` (si hay), "Heredado de <Link href=/grupo/{heredadoDe}>{nombre}</Link>" (si hay) y los `FuenteBadge`.
Si el criterio no tiene registro: Valor = "Sin datos" (muted).

### 5. `SistemasTabs` (`'use client'`)

Props: `{ sistemas: Partial<Record<SistemaId, Dato[]>>; especiales: EstructuraEspecial[] }`.

- Pestañas: una por cada `SISTEMAS` (siempre, en ese orden) y luego una por cada estructura especial.
- `id` de pestaña: `sistema-${id}` o `especial-${indice}`; el panel: `panel-${idPestaña}`.
- Cada pestaña muestra la etiqueta y un contador (`(n)`); si está vacía, estilo atenuado.
- Patrón ARIA de tabs: `role="tablist"` con `aria-label="Sistemas"`, `role="tab"` con `aria-selected` y `aria-controls`,
  `role="tabpanel"` con `aria-labelledby`. Flechas izquierda/derecha cambian de pestaña.
- En móvil, la lista de pestañas hace wrap (`flex flex-wrap gap-1`).
- Pestaña activa **derivada** (sin `setState` dentro de `useEffect`):
  - `hash` = `useSyncExternalStore(subscribe a 'hashchange', () => location.hash.slice(1), () => '')`.
  - `manual` = `useState<string | null>(null)` que solo cambia en el `onClick`/teclado de una pestaña.
  - `activa = manual ?? (hash es un id de pestaña válido ? hash : primeraConDatos ?? 'sistema-tegumento')`.
  - Al hacer clic: `setManual(id)` y `history.replaceState(null, '', '#' + id)`.
  - Un `useEffect` que dependa de `hash` puede hacer `scrollIntoView` del panel cuando el hash es válido (sin setState).
- Contenido del panel: `DatoList` con los datos (vacío → mensaje por defecto).

### 6. `NotaList` (Server-safe)

Cada nota en una caja: `discrepancia` → borde y fondo amber con título "Discrepancia"; `aclaracion` → zinc con
título "Aclaración". Texto + `FuenteBadge`s. (Las notas se muestran siempre, sin aplicar el filtro.)

### 7. `IndiceSecciones` (Server-safe)

Lista de links `#seccion-…` de las secciones que se renderizaron (recibe `[{ id, titulo }]`). `sticky top-20`, oculto en `< lg`.

## Criterios de aceptación

- [ ] `/grupo/porifera` muestra resumen, embriología (con "Sin tejidos verdaderos" heredado de Parazoa), sistemas y reproducción.
- [ ] `/grupo/insecta` muestra breadcrumb Animalia › … › Hexapoda y sistemas vacíos con el mensaje por defecto.
- [ ] `/grupo/protostomia` muestra "Phyla incluidos" y oculta secciones vacías.
- [ ] `/grupo/no-existe` devuelve 404.
- [ ] `/grupo/porifera#sistema-esqueleto` abre directamente la pestaña Esqueleto.
- [ ] El filtro "Solo apuntes" oculta los datos que solo tienen fuentes web.
- [ ] `pnpm build` genera las 89 páginas estáticas.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
pnpm start   # y revisar a mano /grupo/porifera, /grupo/insecta, /grupo/protostomia, /grupo/no-existe
```

## Fuera de alcance

- Dibujos del animal (excluidos del proyecto por ahora).
