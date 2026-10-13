# T38 — Buscador: página `/buscar` y caja en el encabezado

**Épica**: E4 Extras · **Depende de**: T37

## Objetivo

Página de búsqueda global con resultados agrupados por grupo, fragmentos resaltados y links directos a la sección de la
ficha; y una caja de búsqueda en el encabezado disponible en todas las páginas.

## Archivos

- Modificar: `app/buscar/page.tsx`, `components/layout/site-header.tsx`
- Crear: `components/busqueda/buscador.tsx`, `components/busqueda/caja-busqueda.tsx`

## Pasos

### 1. `app/buscar/page.tsx` (Server Component)

```tsx
export const metadata: Metadata = { title: 'Buscar' };

export default function Page() {
  const docs = construirDocumentos(todos);
  return (
    <div className="space-y-6">
      <h1 …>Buscar</h1>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando buscador…</p>}>
        <Buscador docs={docs} />
      </Suspense>
    </div>
  );
}
```

### 2. `buscador.tsx` (`'use client'`)

- `const [q, setQ] = useParametro('q')`. Estado local `texto` del input, inicializado con `q ?? ''`.
- El índice se crea una sola vez: `const indice = useMemo(() => crearIndice(docs), [docs])`.
- Al escribir: actualizar `texto` y, con un debounce de 250 ms (implementado con `setTimeout` en el handler, guardando el id
  en un `useRef`), llamar `setQ(texto.trim() || null)`. Al enviar el formulario (Enter) aplicar sin esperar.
- Si `q` cambia por fuera (por ejemplo desde la caja del encabezado), sincronizar `texto` con el patrón "ajustar estado
  durante el render" (guardar `qPrevio` en estado). **No** usar `useEffect` + `setState`.
- `resultados = useMemo(() => buscar(indice, q ?? ''), [indice, q])`.
- Render:
  - `<input type="search" autoFocus>` con `<label>` "Buscar en todos los grupos", placeholder "Ej.: nefridios, notocorda, larva trocófora…".
  - Si `q` vacío: sugerencias clicables ("nefridios", "notocorda", "células flamígeras", "trocófora", "hemolinfa") que setean la búsqueda.
  - Si no hay resultados: "No se encontraron resultados para «q»."
  - Contador: "N grupos encontrados".
  - Por cada `ResultadoTaxon`: tarjeta con `RankBadge` + `Link` al nombre (`/grupo/${slug}`) y la lista de coincidencias:
    cada una es un `Link` a `/grupo/${slug}#${ancla}` (sin `#` si `ancla` está vacía) con la etiqueta de sección en negrita
    y `fragmento(texto, q)` renderizado con `resaltar` (`<mark>` para los segmentos marcados). Si `soloExterno`, agregar una
    pastilla "Externo".
- Respetar el filtro global: si el modo es `'apuntes'`, ocultar las coincidencias `soloExterno` (y los taxones que queden sin coincidencias y sin match de nombre).

### 3. `caja-busqueda.tsx` (Server-safe)

```tsx
import Form from 'next/form';
// <Form action="/buscar" role="search"> <label className="sr-only">Buscar</label> <input name="q" type="search" placeholder="Buscar…" /> </Form>
```

Ancho `w-40 md:w-56`, a la derecha del encabezado (`ml-auto`). Oculta en `< sm` (en móvil queda el link "Buscar" de la nav).

## Criterios de aceptación

- [ ] `/buscar?q=nefridio` muestra al menos Annelida con un link a `/grupo/annelida#sistema-excretor`.
- [ ] Ese link abre la ficha en la pestaña Excretor (funcionalidad de T11).
- [ ] La búsqueda "anelidos" (sin tilde) encuentra Annelida.
- [ ] Escribir en la caja del encabezado y Enter lleva a `/buscar?q=…` con los resultados.
- [ ] Con el filtro "Solo apuntes", las coincidencias externas desaparecen.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Búsqueda en el servidor o con API.
