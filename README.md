# Biología Animal

Aplicación de estudio de biología animal basada en los apuntes de la cátedra, complementada con fuentes externas verificadas. Cubre 106 grupos taxonómicos (clados, phyla, clases y subclases) con la clasificación de la cátedra.

## Funcionalidades

- **Explorador** (`/buscar`): red interactiva a pantalla completa con todos los grupos y sus rasgos embrionarios. Búsqueda (un resultado: vuela al grupo; varios: oculta el resto), filtros por linaje, nivel y criterio embrionario que agrupan los nodos, y panel de cada grupo. Reemplaza al mapa conceptual, al árbol y al buscador anteriores.
- **Fichas** (`/grupo/[slug]`): presentación estilo Prezi a pantalla completa. Diapositiva principal (imagen, resumen y desarrollo embrionario con herencia del phylum) rodeada por una diapositiva por sistema; barra lateral con morfología, estructuras especiales, reproducción, bioecología, ejemplos y notas.
- **Comparador** (`/comparar?a=X&b=Y`): presentación como la ficha. Centro "A vs B" con el ancestro común, tabla de desarrollo embrionario y una tabla comparativa en dos columnas por sistema.
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
    app/                # (sitio)/: inicio; buscar/: explorador; grupo/[slug]/: ficha; comparar/: comparador; not-found
    components/         # layout/ taxon/ fuentes/ navegacion/ explorar/ busqueda/ comparar/ inicio/
    data/
      taxa/<slug>.ts    # un archivo por grupo taxonómico
      taxa/index.ts     # registro de todos los grupos
      mapa-embrionario.ts
    lib/                # lógica pura (types, consultas, red, busqueda, comparacion, etiquetas…)
    public/             # imágenes de grupos, logo (brand/) y modelos 3D (models/*.glb)
    tests/
      unit/             # Vitest (incluye integridad de citas y del árbol)
      reportes/         # reporte de cobertura
      e2e/              # Playwright
apuntes-data/           # apuntes de la cátedra (NO editar)
models/                 # fuentes Blender de los modelos 3D y scripts de exportación
docs/                   # documentación del estado actual y guías
```

## Agregar o corregir contenido

1. Editar `apps/web/data/taxa/<slug>.ts` siguiendo [`docs/guias/contenido-apuntes.md`](docs/guias/contenido-apuntes.md).
2. Cada dato lleva su fuente: los apuntes se citan con `archivo`, `lineas` y `cita` literal; las fuentes web con `tipo: 'web'` y URL.
3. `pnpm test` verifica que cada cita de apunte exista literalmente en las líneas indicadas — un dato sin respaldo hace fallar los tests.
4. Si una fuente externa contradice al apunte, no se reemplaza: se agrega una `nota` de discrepancia (ver [`docs/guias/fuentes-web.md`](docs/guias/fuentes-web.md)).

## Documentación

El estado actual del proyecto (funcionalidades, arquitectura, tests, diseño y registro de cambios) está en
[`docs/`](docs/README.md).
