# T17 — Página de inicio

**Épica**: E2 UI · **Depende de**: T16

## Objetivo

Reemplazar la página provisoria de `/` por una portada que explique la app y lleve a las dos formas de exploración,
al buscador y al comparador.

## Archivos

- Modificar: `app/page.tsx`
- Crear: `components/inicio/tarjeta-acceso.tsx`, `lib/estadisticas.ts`, `tests/unit/estadisticas.test.ts`

## Pasos

### 1. `lib/estadisticas.ts` (puro)

```ts
export type Estadisticas = { phyla: number; clases: number; datosApunte: number; datosExternos: number };
export function calcularEstadisticas(taxa: readonly Taxon[]): Estadisticas
```

- `phyla`: cantidad de nivel `phylum`. `clases`: niveles `clase` + `subclase`.
- `datosApunte`: items de `recorrerItems` con al menos una fuente de apunte; `datosExternos`: items sin fuente de apunte.

Test con un fixture de 3 taxones.

### 2. `TarjetaAcceso` (Server-safe)

`({ href, titulo, descripcion, children? })` → `Link` grande con borde, padding, hover; `children` opcional para una vista previa.

### 3. `app/page.tsx` (Server Component)

Secciones en orden:

1. **Encabezado**: h1 "Biología Animal" y subtítulo "Estudiá la diversidad animal según el desarrollo embrionario y la
   clasificación taxonómica, con los apuntes de la cátedra."
2. **Dos accesos principales** (grilla `md:grid-cols-2`):
   - "Mapa conceptual embrionario" → `/mapa`. Descripción: "Recorré la clasificación según capas germinativas, simetría,
     cavidad corporal y destino del blastoporo." Vista previa: lista corta en texto
     `Parazoa · Eumetazoa → Radiata · Bilateria → Protostomados · Deuterostomados`.
   - "Árbol taxonómico" → `/arbol`. Descripción: "Navegá de Reino a Subclase y encontrá las clases de cada phylum."
3. **Accesos secundarios** (grilla `md:grid-cols-2`): "Buscar" → `/buscar` y "Comparar grupos" → `/comparar`.
4. **Phyla por linaje**: para cada uno de `parazoa`, `radiata`, `lophotrochozoa`, `ecdysozoa`, `deuterostomia`, un título
   con el nombre común del clado y chips (`Link` a `/grupo/<slug>`) con los nombres de `getPhylaIncluidos(slug)`.
5. **Estadísticas**: 4 números de `calcularEstadisticas(todos)` con sus etiquetas.
6. **"Cómo leer las fuentes"**: explicación breve + dos `FuenteBadge` de ejemplo armados a mano (uno de apunte, con
   `annelidos.md` [36, 38] y la cita 'El sistema circulatorio es cerrado', y uno web con un ejemplo de Animal Diversity Web)
   + mención del filtro "Solo apuntes".

## Criterios de aceptación

- [ ] La portada no tiene restos del template.
- [ ] Todos los links funcionan.
- [ ] Los chips de phyla salen de los datos (no están escritos a mano).
- [ ] Se ve bien en 375 px de ancho y en escritorio.
- [ ] `pnpm build` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Fuera de alcance

- Ilustraciones.
