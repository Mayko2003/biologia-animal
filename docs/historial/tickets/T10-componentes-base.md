# T10 — Componentes de UI base

**Épica**: E2 UI · **Depende de**: T09

## Objetivo

Construir los componentes reutilizables que usan la ficha, el panel, el comparador y el buscador:
insignias de nivel y de fuente, filtro "solo apuntes", listas de datos, migas de pan, tarjetas y secciones.

## Archivos

- Modificar: `lib/apuntes.ts` (agregar `tieneApunte`), `app/layout.tsx` (agregar el provider del filtro)
- Crear:
  - `components/taxon/rank-badge.tsx`
  - `components/fuentes/fuente-badge.tsx`
  - `components/fuentes/filtro-fuentes.tsx`
  - `components/taxon/dato-list.tsx`
  - `components/taxon/ejemplo-list.tsx`
  - `components/taxon/breadcrumb.tsx`
  - `components/taxon/taxon-card.tsx`
  - `components/ui/seccion.tsx`
  - `tests/unit/tiene-apunte.test.ts`

## Pasos

### 1. `lib/apuntes.ts`

```ts
export function tieneApunte(fuentes: Fuente[]): boolean   // true si alguna fuente es tipo 'apunte'
```

Test en `tests/unit/tiene-apunte.test.ts` (3 casos: solo apunte, solo web, mixto).

### 2. `RankBadge` (Server-safe, sin hooks)

`({ nivel }: { nivel: Nivel })` → `<span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium ${NIVEL_CLASES[nivel]}`}>{NIVEL_LABEL[nivel]}</span>`

### 3. `FuenteBadge` (Server-safe, sin hooks, sin `'use client'`)

`({ fuente }: { fuente: Fuente })`. Usar `<details>`/`<summary>` para el popover (sin JavaScript):

- `<details className="relative inline-block align-middle">`
- `<summary>` con estilo de píldora pequeña (`text-[11px] rounded-full px-2 py-0.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden`):
  - apunte: fondo `sky` → texto `Apunte · ${etiquetaFuente(f)}`
  - web: fondo `amber` → texto `Externo · ${f.sitio}`
- Panel (`absolute z-20 mt-1 w-72 rounded-md border bg-white p-3 text-xs shadow-lg dark:bg-zinc-900`):
  - apunte: `TP{tp} — {titulo}`, `Archivo: {archivo}`, `Líneas {ini}–{fin}`, la `cita` entre comillas en itálica.
  - web: `titulo`, `sitio`, link "Abrir fuente" (`target="_blank" rel="noopener noreferrer"`), `Consultado: {consultado}`.

### 4. Filtro de fuentes (`'use client'`)

`components/fuentes/filtro-fuentes.tsx` exporta:

```ts
type ModoFiltro = 'todas' | 'apuntes';
export function FiltroFuentesProvider({ children }: { children: React.ReactNode })
export function useFiltroFuentes(): { modo: ModoFiltro; setModo: (m: ModoFiltro) => void }
export function FiltroFuentesToggle()
```

(No anotes el tipo de retorno de los componentes: en React 19 no existe el namespace global `JSX`; si hace falta usá `React.JSX.Element`.)

- Implementar el estado con **`useSyncExternalStore`** sobre `localStorage` (clave `'ba:filtro-fuentes'`):
  - `subscribe(cb)`: escuchar el evento `storage` de `window` y un evento propio `'ba:filtro-fuentes'`; devolver la función que remueve ambos listeners.
  - `getSnapshot()`: `localStorage.getItem('ba:filtro-fuentes') === 'apuntes' ? 'apuntes' : 'todas'`.
  - `getServerSnapshot()`: `'todas'` (así no hay diferencias de hidratación).
  - `setModo(m)`: `localStorage.setItem(...)` + `window.dispatchEvent(new Event('ba:filtro-fuentes'))`.
  - **No** usar `useEffect` + `setState` (la regla de lint `react-hooks` lo marca como error).
  - El provider puede ser innecesario con este enfoque; si es así, exportalo igual como un fragmento que solo
    renderiza `children`, para mantener la API.
- `FiltroFuentesToggle`: control segmentado de 2 botones "Todas las fuentes" / "Solo apuntes" con `aria-pressed`.
- En `app/layout.tsx`, envolver `<SiteHeader />` y `<main>` con `<FiltroFuentesProvider>`.

### 5. `DatoList` (`'use client'`)

`({ datos, vacio = 'Sin datos en los apuntes ni en las fuentes consultadas.' }: { datos: Dato[]; vacio?: string })`

- `const visibles = modo === 'apuntes' ? datos.filter(d => tieneApunte(d.fuentes)) : datos`.
- Si `datos.length === 0` → `<p className="text-sm text-zinc-500 italic">{vacio}</p>`.
- Si `datos.length > 0` y `visibles.length === 0` → `<p …>Solo hay datos de fuentes externas (ocultos por el filtro).</p>`.
- Si no: `<ul className="space-y-2">`; cada `<li className="text-sm leading-relaxed">`:
  - si `ausente`: insignia `Ausente` (rose) antes del texto;
  - el `texto`;
  - las fuentes con `FuenteBadge`, separadas por un espacio, en línea después del texto.

### 6. `EjemploList` (`'use client'`)

Igual que `DatoList` pero para `Ejemplo[]`: `<em>{nombre}</em>` + (descripcion ? ` — ${descripcion}` : '') + badges.
Mensaje vacío: `'Sin ejemplos.'`.

### 7. `Breadcrumb` (Server-safe)

`({ ruta }: { ruta: { slug: string; nombre: string }[] })` → `<nav aria-label="Ubicación taxonómica">` con `<ol>` en línea,
separador `›`; cada elemento es un `Link` a `/grupo/${slug}` excepto el último, que es texto con `aria-current="page"`.

### 8. `TaxonCard` (Server-safe)

`({ nodo }: { nodo: Pick<NodoArbol, 'slug' | 'nombre' | 'nombreComun' | 'nivel' | 'resumenCorto'> })` → `Link` a
`/grupo/${slug}` con borde, padding, hover; contenido: `RankBadge`, nombre (semibold), nombreComun (muted),
resumenCorto (`line-clamp-3 text-sm`).

### 9. `Seccion` (Server-safe)

`({ id, titulo, children, acciones }: { id: string; titulo: string; children: React.ReactNode; acciones?: React.ReactNode })`
→ `<section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-20 space-y-3">` con un encabezado
`<h2 id={`${id}-titulo`} className="text-lg font-semibold">` y `acciones` alineadas a la derecha.

## Criterios de aceptación

- [ ] Ningún componente importa `lib/taxa.ts` ni `data/`.
- [ ] `FuenteBadge` funciona sin JavaScript (details/summary).
- [ ] El filtro persiste entre recargas y no produce warnings de hidratación.
- [ ] Todos los componentes tienen variantes `dark:`.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Usar los componentes en páginas (T11 en adelante).
