# T40 — Comparador: página `/comparar`

**Épica**: E4 Extras · **Depende de**: T39

## Objetivo

Elegir dos grupos o clases y ver un cuadro comparativo lado a lado, con las diferencias resaltadas y el ancestro común.

## Archivos

- Modificar: `app/comparar/page.tsx`
- Crear: `components/comparar/comparador.tsx`, `components/comparar/selector-taxon.tsx`, `components/comparar/celda.tsx`

## Pasos

### 1. `app/comparar/page.tsx` (Server Component)

```tsx
export const metadata: Metadata = { title: 'Comparar grupos' };

export default function Page() {
  return (
    <div className="space-y-6">
      <header>…h1 "Comparar grupos" + "Elegí dos grupos o clases para ver un cuadro comparativo."</header>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando comparador…</p>}>
        <Comparador taxa={todos} opciones={opciones} />
      </Suspense>
    </div>
  );
}
```

- `opciones`: lista para los selectores, calculada en el servidor:
  `{ grupo: string; items: { slug: string; etiqueta: string }[] }[]`
  - Primer grupo "Grupos superiores": los taxones de nivel reino/subreino/rama/clado.
  - Luego un grupo por phylum (nombre del phylum): el phylum y todos sus descendientes en preorden.
  - `etiqueta` = `'— '.repeat(profundidadDentroDelPhylum) + nombre + (nombreComun ? ` (${nombreComun})` : '')`.
- Se pasa `taxa={todos}` completo porque la comparación se calcula en el cliente. Es aceptable (son datos de texto).

### 2. `selector-taxon.tsx` (`'use client'`)

`({ id, label, valor, opciones, onCambiar })` → `<label>` + `<select>` nativo con `<optgroup label={grupo}>` y
`<option value={slug}>{etiqueta}</option>`. Primera opción vacía: "Elegí un grupo…".

### 3. `comparador.tsx` (`'use client'`)

- `const [a, setA] = useParametro('a'); const [b, setB] = useParametro('b');`
- `const consultas = useMemo(() => crearConsultas(taxa), [taxa]);`
- Controles: dos `SelectorTaxon` ("Grupo A", "Grupo B"), un botón "Intercambiar" (`aria-label="Intercambiar A y B"`) y
  un interruptor "Mostrar solo diferencias".
- Validaciones: si falta alguno → texto de ayuda; si un slug no existe → "Grupo inexistente"; si `a === b` → aviso
  "Elegí dos grupos distintos" (y no mostrar la tabla).
- Con los dos válidos: `const c = useMemo(() => comparar(a, b, consultas), …)`.
- **Resumen** arriba de la tabla: "Ancestro común: <Link>{ancestroComun.nombre}</Link> ({NIVEL_LABEL})" y debajo las dos rutas
  desde el ancestro (`rutaA`, `rutaB`) como breadcrumbs simples. Si uno contiene al otro, decirlo: "X incluye a Y".
- **Tabla** (`<table>` con `<caption className="sr-only">`):
  - Encabezado `sticky top-14` con: columna "Característica", columna A (`RankBadge` + nombre con link) y columna B.
  - Filas agrupadas por `grupo` con una fila de subtítulo (`<th colSpan={3} scope="colgroup">`).
  - Fila con `distinto: true`: fondo `amber-50 dark:amber-950/30` y un punto ámbar en la etiqueta (`aria-label="Difiere"`).
  - "Mostrar solo diferencias": oculta las filas con `distinto: false` de los grupos "Desarrollo embrionario" y "Sistemas"
    (las demás se mantienen).
  - En pantallas `< md` la tabla hace scroll horizontal (`overflow-x-auto`), con ancho mínimo de 720 px.
- Links "Ver ficha de A/B" al final.

### 4. `celda.tsx` (`'use client'`)

Renderiza una `Celda`:
- `datos` → `DatoList` (respeta el filtro de fuentes).
- `ausente` → insignia "Ausente" + `DatoList`.
- `texto` → el texto, `detalle` en muted, `FuenteBadge`s.
- `vacio` → "Sin datos" en muted.

### 5. Integración

El botón "Comparar con…" de la ficha (T11) ya apunta a `/comparar?a=<slug>`: verificá que el selector A quede preseleccionado.

## Criterios de aceptación

- [ ] `/comparar?a=annelida&b=arthropoda` muestra "Ancestro común: Protostomia" y la tabla con las 23 filas.
- [ ] `/comparar?a=arthropoda&b=insecta` indica que Arthropoda incluye a Insecta.
- [ ] "Intercambiar" invierte A y B en la URL.
- [ ] "Mostrar solo diferencias" oculta las filas iguales de embriología y sistemas.
- [ ] Desde `/grupo/mollusca` → "Comparar con…" llega con A = Mollusca.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Comparar más de dos grupos. Exportar a PDF.
