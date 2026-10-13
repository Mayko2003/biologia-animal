# T13 — Árbol taxonómico: vista lista

**Épica**: E2 UI · **Depende de**: T12

## Objetivo

Página `/arbol` con un árbol desplegable (tipo explorador de archivos) de Reino a Subclase, con filtro de texto,
y el panel de selección al costado.

## Archivos

- Modificar: `app/arbol/page.tsx`
- Crear: `components/arbol/explorador-arbol.tsx`, `components/arbol/arbol-lista.tsx`

## Pasos

### 1. `app/arbol/page.tsx` (Server Component)

```tsx
export const metadata: Metadata = { title: 'Árbol taxonómico' };

export default function Page() {
  const arbol = getArbol();
  return (
    <div className="space-y-6">
      <header>…h1 "Árbol taxonómico" + párrafo explicativo…</header>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando árbol…</p>}>
        <ExploradorArbol arbol={arbol} />
      </Suspense>
    </div>
  );
}
```

Texto explicativo sugerido: "Jerarquía de los grupos según la clasificación de la cátedra: Reino → Subreino → Rama →
Clado → Phylum → Subphylum → Superclase → Clase → Subclase. Seleccioná un grupo para ver sus clases."

### 2. `explorador-arbol.tsx` (`'use client'`)

- `const [sel, setSel] = useSeleccion();`
- Layout: `grid gap-6 lg:grid-cols-[1fr_380px]`. Izquierda: `ArbolLista`. Derecha: `PanelSeleccion` con
  `arbol`, `slug={sel}`, `onSeleccionar={setSel}`.

### 3. `arbol-lista.tsx` (`'use client'`)

Props: `{ arbol: NodoArbol; seleccionado: string | null; onSeleccionar: (slug: string) => void }`.

**Estado**

- `abiertos: Set<string>`. Inicial (inicializador perezoso de `useState`): los slugs de los nodos de grupos superiores
  (`esGrupoSuperior`) + todos los de `rutaHasta(arbol, seleccionado)`.
- Si cambia `seleccionado` por fuera (por ejemplo desde el panel), abrir su ruta usando el patrón
  "ajustar estado durante el render": guardar `previo` en estado; si `seleccionado !== previo`, actualizar `previo`
  y agregar la ruta a `abiertos`. **No** usar `useEffect` + `setState`.
- `filtro: string` (input controlado).

**Filtro**

- `<input type="search">` con `<label>` "Filtrar grupos" y placeholder "Ej.: Insecta, anélidos, Myxini…".
- Coincidencia: `normalizar(nombre + ' ' + (nombreComun ?? '') + ' ' + slug).includes(normalizar(filtro))`.
- Con filtro no vacío: se muestran solo los nodos que coinciden **y** sus ancestros; todos los ancestros se muestran
  abiertos (ignorando `abiertos`); el nombre coincidente se resalta (`<mark>`).
- Sin coincidencias: "Sin coincidencias para «…»".

**Botones**: "Expandir todo" (abre todos los nodos con hijos) y "Colapsar todo" (deja abierta solo la raíz).

**Render**

- `<ul role="tree" aria-label="Árbol taxonómico">`; cada nodo `<li role="treeitem" aria-expanded={tieneHijos ? abierto : undefined} aria-selected={seleccionado === slug}>`.
- Fila: botón de despliegue (`▸`/`▾`, `aria-label` "Expandir X"/"Colapsar X"; un espacio del mismo ancho si no tiene hijos),
  `RankBadge`, botón con el nombre que llama `onSeleccionar(slug)`, nombreComun (muted, oculto en `< sm`) y la cantidad
  de hijos entre paréntesis si tiene.
- Fila seleccionada: `bg-emerald-50 dark:bg-emerald-900/30`.
- Hijos en `<ul role="group" className="ml-3 border-l pl-3">`.
- Al cambiar `seleccionado`, hacer `scrollIntoView({ block: 'nearest' })` de su fila en un `useEffect` (sin setState).
  Para eso, guardar las filas en un `Map` de refs (callback refs) y leer el ref **solo dentro del efecto**, nunca en el render.

## Criterios de aceptación

- [ ] `/arbol` muestra el árbol abierto hasta el nivel de phylum.
- [ ] Escribir "insecta" deja visible la ruta Animalia › … › Hexapoda › Insecta.
- [ ] Hacer clic en "Annelida" actualiza la URL a `/arbol?sel=annelida` y el panel muestra sus clases.
- [ ] Abrir `/arbol?sel=copepoda` directamente abre la ruta hasta Copepoda y la resalta.
- [ ] Navegación por teclado: Tab llega a los botones; Enter/Espacio despliegan y seleccionan.
- [ ] `pnpm lint` sin errores de `react-hooks`; `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Vista gráfica (T14).
