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

```bash
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

```
app/                  # rutas: inicio, mapa, arbol, grupo/[slug], comparar, buscar, not-found
components/           # layout/ taxon/ fuentes/ navegacion/ arbol/ mapa/ busqueda/ comparar/
data/
  taxa/<slug>.ts      # un archivo por grupo taxonómico
  taxa/index.ts       # registro de todos los grupos
  mapa-embrionario.ts # estructura del mapa conceptual
lib/                  # lógica pura (types, consultas, arbol, busqueda, comparacion, etiquetas…)
tests/
  unit/               # Vitest (incluye integridad de citas y del árbol)
  reportes/           # reporte de cobertura
  e2e/                # Playwright
animal-data/          # apuntes de la cátedra (NO editar)
plan/                 # plan de tickets y guías de contenido
```

## Agregar o corregir contenido

1. Editar `data/taxa/<slug>.ts` siguiendo `plan/guia-contenido.md`.
2. Cada dato lleva su fuente: los apuntes se citan con `archivo`, `lineas` y `cita` literal; las fuentes web con `tipo: 'web'` y URL.
3. `pnpm test` verifica que cada cita de apunte exista literalmente en las líneas indicadas — un dato sin respaldo hace fallar los tests.
4. Si una fuente externa contradice al apunte, no se reemplaza: se agrega una `nota` de discrepancia (ver `plan/guia-fuentes-web.md`).
