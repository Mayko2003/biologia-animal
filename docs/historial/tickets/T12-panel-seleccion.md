# T12 — Panel de selección ("clases disponibles") y estado de selección en la URL

**Épica**: E2 UI · **Depende de**: T11

## Objetivo

Componente compartido por el mapa y el árbol: al seleccionar un grupo muestra su resumen, el link a la ficha y
**las clases/subgrupos disponibles** (o los phyla incluidos si es un grupo superior). La selección vive en la URL
(`?sel=<slug>`) para poder compartirla y para que los links "Ver en el árbol/mapa" funcionen.

## Archivos

- Crear: `components/navegacion/use-seleccion.ts`, `components/navegacion/panel-seleccion.tsx`

## Pasos

### 1. `use-seleccion.ts` (`'use client'`)

```ts
export function useParametro(nombre: string): [string | null, (valor: string | null) => void]
export function useSeleccion(): [string | null, (slug: string | null) => void]   // = useParametro('sel')
```

- Usa `useSearchParams`, `usePathname` y `useRouter` de `next/navigation`.
- El setter arma un `URLSearchParams` a partir de los actuales, setea o borra la clave y llama
  `router.replace(`${pathname}?${params}`, { scroll: false })` (sin `?` si quedan vacíos).
- **Importante**: cualquier componente que use este hook debe renderizarse dentro de un `<Suspense>` que pone la
  página (ver `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-search-params.md`).

### 2. `panel-seleccion.tsx` (`'use client'`)

Props:

```ts
{
  arbol: NodoArbol;                       // árbol completo (desde la página)
  slug: string | null;                    // seleccionado
  onSeleccionar: (slug: string) => void;  // para navegar a otro grupo dentro del panel
}
```

Render (`<aside aria-label="Grupo seleccionado" className="rounded-lg border p-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">`):

- **Sin selección** (o slug inexistente): texto de ayuda "Seleccioná un grupo para ver sus clases y acceder a su ficha."
- **Con selección** (`nodo = buscarNodo(arbol, slug)`):
  1. `RankBadge`, nombre (`text-xl font-semibold`), nombreComun (muted).
  2. Ruta en texto chico: nombres de `rutaHasta(arbol, slug)` sin el último, unidos con ` › `; cada uno es un botón
     que llama `onSeleccionar(slugAncestro)`.
  3. `resumenCorto` (si hay).
  4. Botón primario (Link) **"Ver ficha completa"** → `/grupo/${slug}`.
  5. Lista de subgrupos:
     - Si `esGrupoSuperior(nodo.nivel)`: título `Phyla incluidos (${n})`; lista de `phylaDe(nodo)`.
     - Si no y `nodo.hijos.length > 0`: título "Clases disponibles" si **todos** los descendientes directos son de nivel
       `clase`; si no, "Subgrupos disponibles". Lista **anidada recursiva** de todos los descendientes.
     - Si no tiene hijos: "Este grupo no tiene clases en el material." y un botón "Ver grupo superior" que selecciona al padre.
  6. Cada ítem de las listas: `RankBadge` + `Link` con el nombre a `/grupo/${slug}` + nombreComun (muted) +, si el ítem
     tiene hijos, un botón chico "Ver clases" (`aria-label="Ver clases de X"`) que llama `onSeleccionar(item.slug)`.
     Sangría de las listas anidadas: `pl-4 border-l`.

## Criterios de aceptación

- [ ] Ningún import de `lib/taxa.ts` ni `data/`.
- [ ] Con `slug = 'arthropoda'`: muestra "Subgrupos disponibles" con Chelicerata (Merostomata, Pycnogonida, Arachnida (Araneida, Scorpionida, Acari)), Myriapoda, Crustacea, Hexapoda anidados.
- [ ] Con `slug = 'annelida'`: "Clases disponibles" con Polychaeta, Oligochaeta, Hirudinea.
- [ ] Con `slug = 'deuterostomia'`: "Phyla incluidos (3)".
- [ ] Con `slug = 'porifera'`: mensaje "no tiene clases".
- [ ] `pnpm build` pasa. (El panel se integra visualmente en T13 y T15.)

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Páginas del árbol y del mapa (T13, T15).
