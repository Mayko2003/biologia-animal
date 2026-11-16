# Biología Animal

Aplicación de estudio de biología animal basada en los apuntes de la cátedra, complementada con fuentes externas verificadas. Cubre 89 grupos taxonómicos (clados, phyla, clases y subclases) con la clasificación de la cátedra.

## Funcionalidades

- **Mapa conceptual** (`/mapa`): árbol embrionario con lentes por criterio (segmentación, simetría, destino del blastoporo, capas germinales, cavidad corporal).
- **Árbol taxonómico** (`/arbol`): vista lista y vista gráfica (dendrograma) con filtro por nombre.
- **Fichas** (`/grupo/[slug]`): resumen, morfología, embriología (con herencia del phylum), sistemas, estructuras especiales, reproducción, bioecología, ejemplos y notas de discrepancia.
- **Buscador** (`/buscar`): búsqueda global por nombre, secciones y contenido (MiniSearch).
- **Comparador** (`/comparar?a=X&b=Y`): dos grupos lado a lado, con ancestro común.
- **Filtro de fuentes**: "Todas las fuentes" / "Solo apuntes", con insignias por dato (`A` apunte, `W` web).

## Requisitos

- Node 24, pnpm 12

## Comandos

Se corren desde la raíz del monorepo:

```bash
pnpm install      # instala todo el workspace
pnpm dev          # desarrollo
pnpm build        # build de producción
pnpm start        # servidor de producción
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm test         # tests unitarios (Vitest)
pnpm test:e2e     # build + tests E2E (Playwright, escritorio y móvil)
pnpm cobertura    # reporte de cobertura de contenido por taxón
```

## Estructura

Monorepo con pnpm workspaces. Cada app vive en `apps/` y el código compartido irá en `packages/`.

```
apps/
  web/                  # app Next.js (@biologia-animal/web)
    app/                # rutas: inicio, mapa, arbol, grupo/[slug], comparar, buscar, not-found
    components/         # layout/ taxon/ fuentes/ navegacion/ arbol/ mapa/ busqueda/ comparar/ inicio/
    data/
      taxa/<slug>.ts    # un archivo por grupo taxonómico
      taxa/index.ts     # registro de todos los grupos
      mapa-embrionario.ts
    lib/                # lógica pura (types, consultas, arbol, busqueda, comparacion, etiquetas…)
    public/             # imágenes de grupos, logo (brand/) y modelos 3D (models/*.glb)
    tests/
      unit/             # Vitest (incluye integridad de citas y del árbol)
      reportes/         # reporte de cobertura
      e2e/              # Playwright
apuntes-data/           # apuntes de la cátedra (NO editar)
models/                 # fuentes Blender de los modelos 3D y scripts de exportación
plan/                   # plan de tickets y guías de contenido
```

## Agregar o corregir contenido

1. Editar `apps/web/data/taxa/<slug>.ts` siguiendo `plan/guia-contenido.md`.
2. Cada dato lleva su fuente: los apuntes se citan con `archivo`, `lineas` y `cita` literal; las fuentes web con `tipo: 'web'` y URL.
3. `pnpm test` verifica que cada cita de apunte exista literalmente en las líneas indicadas — un dato sin respaldo hace fallar los tests.
4. Si una fuente externa contradice al apunte, no se reemplaza: se agrega una `nota` de discrepancia (ver `plan/guia-fuentes-web.md`).
