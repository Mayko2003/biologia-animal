# Arquitectura

Monorepo con pnpm workspaces. Hoy hay una sola app, la web en Next.js, que lee datos estáticos en TypeScript;
no hay base de datos ni API.

## Monorepo

```
apps/
  web/              # @biologia-animal/web: app Next.js
packages/           # (vacío) código compartido entre apps
apuntes-data/       # apuntes originales de la cátedra en Markdown (NO editar)
models/             # scripts de Blender que generan los modelos 3D
docs/               # esta documentación
```

| Tema | Cómo funciona |
|---|---|
| Workspaces | `pnpm-workspace.yaml` incluye `apps/*` y `packages/*`. Un solo `pnpm-lock.yaml` en la raíz. |
| Scripts de raíz | `lint`, `typecheck`, `test` y `build` recorren el workspace (`pnpm -r run …`). `dev`, `start`, `test:e2e` y `cobertura` delegan en la web (`pnpm --filter @biologia-animal/web …`). |
| App nueva (backend, agente IA) | Carpeta `apps/<nombre>/` con su `package.json` (nombre `@biologia-animal/<nombre>`). Si implementa `lint`, `typecheck` o `test`, la verificación de la raíz la incluye sola. |
| Código compartido | `packages/<nombre>/`, consumido con `"@biologia-animal/<nombre>": "workspace:*"`. Candidato natural: los tipos de `apps/web/lib/types.ts`. |
| Raíz de Turbopack | Next la detecta por el `pnpm-lock.yaml` de la raíz; no hace falta `turbopack.root`. |
| Deploy (Vercel) | Proyecto `biologia-animal` con **Root Directory `apps/web`**: Vercel busca `next` en el `package.json` de esa carpeta (en la raíz no está y el build falla con `NEXT_NO_VERSION`). Instala con pnpm desde la raíz del workspace. Producción: https://biologia-animal.vercel.app |
| `AGENTS.md` | El de la raíz tiene las reglas del proyecto. `apps/web/AGENTS.md` lo escribe `next dev` (bloques administrados por Next). |

## La app web (`apps/web`)

Next.js 16.4 (App Router, Turbopack, `cacheComponents: true`), React 19.3 y Tailwind 4. Dependencias de runtime:
`minisearch` (buscador) y `force-graph` (red del explorador, canvas 2D; la misma librería que usa la vista Graph de
Qdrant).

```
app/
  (sitio)/      # inicio: con encabezado, footer y barra móvil (layout del grupo)
  comparar/     # comparador a pantalla completa (presentación), sin el marco del sitio
  buscar/       # explorador a pantalla completa, sin el marco del sitio
  grupo/[slug]/ # ficha a pantalla completa (presentación), sin el marco del sitio
  not-found.tsx # 404 (dibuja el marco del sitio por su cuenta)
components/     # busqueda/ comparar/ explorar/ ficha/ fuentes/ inicio/ layout/ navegacion/ taxon/ ui/
data/
  taxa/<slug>.ts        # un archivo por grupo; taxa/index.ts los registra
  mapa-embrionario.ts   # criterios embrionarios por clado (los usa la red)
  imagenes-grupos.ts    # imagen, autor y licencia de cada grupo
lib/            # lógica (ver abajo)
public/         # grupos/*.webp, brand/ (logo), models/*.glb
tests/          # unit/, reportes/, e2e/ (ver calidad.md)
```

### Dos capas en `lib/`

La regla más importante del código: **los Client Components nunca importan `data/` ni `lib/taxa.ts`**. Los datos
viajan por props desde Server Components; así no se manda todo el contenido al navegador.

| Capa | Módulos | Quién puede usarlos |
|---|---|---|
| Pura (sin datos) | `types`, `apuntes`, `etiquetas`, `texto`, `consultas` (`crearConsultas`), `arbol`, `recorrer`, `cobertura`, `estadisticas`, `busqueda`, `comparacion`, `red` | Cualquiera, incluso Client Components |
| Con datos | `taxa.ts` (`consultas = crearConsultas(TAXA)`) | Solo Server Components y tests |

`recorrerItems` (`lib/recorrer.ts`) es el recorrido canónico de todos los datos de un grupo. Lo usan el buscador, los
tests de integridad y el reporte de cobertura, así que una sección nueva del `Taxon` tiene que agregarse ahí.

## Modelo de datos

Definido en `apps/web/lib/types.ts`.

| Tipo | Qué es |
|---|---|
| `Taxon` | Un grupo: `slug`, `nombre`, `nombreComun`, `sinonimos`, `nivel`, `padre`, `orden` y las secciones (`resumen`, `morfologiaExterna`, `embriologia`, `sistemas`, `estructurasEspeciales`, `reproduccion`, `bioecologia`, `ejemplos`, `notas`). |
| `Dato` | `{ texto, fuentes, ausente? }`. Cada dato lleva al menos una fuente. |
| `Fuente` | `apunte` (`archivo`, `lineas`, `cita` literal) o `web` (`url`, `titulo`, `sitio`, `consultado`). |
| `Nota` | Aclaración o `discrepancia` entre el apunte y la bibliografía actual. |
| Embriología | Un registro por criterio, con valores cerrados en `VALORES_CRITERIO`. `getEmbriologiaEfectiva` sube por los ancestros y marca `heredadoDe` cuando la clase no define el criterio. |

El árbol se arma con `padre`; `orden` ordena a los hermanos. El catálogo de apuntes (`APUNTES`) y los dominios web
permitidos (`DOMINIOS_PERMITIDOS`) están en `lib/apuntes.ts`.

### Mapa embrionario

`data/mapa-embrionario.ts` es una estructura aparte del árbol: nodos conceptuales (con `descripcion` citada) y, como
hojas, exactamente los 17 phyla. Cada nodo corresponde a un taxón y su `criterio` (máximo 60 caracteres) explica qué
lo define. Ya no se dibuja como diagrama: la red toma ese `criterio` y lo muestra en el panel de cada grupo.

### Red del explorador

`lib/red.ts` (pura, con tests en `red.test.ts`) arma la red que se dibuja en `/buscar`; `app/buscar/page.tsx` la
construye en el servidor y la pasa por props.

| Pieza | Cómo funciona |
|---|---|
| Nodos | Uno por taxón (con nivel, linaje, rasgos embrionarios efectivos, criterio del mapa y resumen) y uno por cada valor de criterio que tenga algún phylum (`rasgo:<criterio>:<valor>`). |
| Enlaces | `taxonomia` (padre → hijo) y `rasgo` (rasgo → phylum; se omite "no aplica"). Las clases no se enlazan a rasgos para no saturar la red: heredan los del phylum. |
| Linaje | Primer ancestro (o el mismo grupo) entre Parazoa, Radiata, Lofotrocozoos, Ecdisozoos y Deuterostomados; los grupos superiores no tienen. |
| Filtros | `Filtros` = linajes, niveles y valores por criterio. `cumpleFiltros`: "o" dentro de cada filtro, "y" entre filtros. En la URL: `f=linaje.ecdysozoa,nivel.clase,cavidad.enterocelomado` (se ignora lo inválido). |
| Disposición | Posiciones fijas, sin simulación de fuerzas. `disponerArbol`: árbol radial (ángulo proporcional a hojas^0.7, radio por profundidad). `agrupar` + `disponerGrupos`: un árbol radial por valor del filtro (o por linaje o nivel si se eligen varios), con el rasgo como centro cuando corresponde, cada miembro colgado de su ancestro más cercano que también cumple, y los grupos en grilla. |
| Dibujo | `force-graph` solo como lienzo (zoom, paneo, clic y hover). Sin fuerzas ni arrastre de nodos; las ramas y los títulos se dibujan a mano (`onRenderFramePre/Post`). El estado visual vive en un "pintor" fuera de React que anima las posiciones entre disposiciones. |

### Ficha

`app/grupo/[slug]/page.tsx` (Server Component) arma todo el contenido y lo pasa como JSX a dos componentes cliente:

| Pieza | Cómo funciona |
|---|---|
| `components/ficha/pantalla-ficha.tsx` | Pantalla completa con `BarraLateral` (compartida con el explorador, en `components/layout/barra-lateral.tsx`). Si el hash apunta a una sección lateral, abre la barra y despliega esa sección. |
| `components/ficha/presentacion.tsx` | Lienzo Prezi hecho con HTML y CSS (sin canvas): un "mundo" con los círculos posicionados y una cámara que es un `transform` (traslación y escala). La diapositiva abierta sale del hash; cambiar de diapositiva usa `history.replaceState` y emite `hashchange`. El contenido se muestra en una capa encima del círculo agrandado, a tamaño normal, para que el texto sea nítido y se pueda desplazar. En pantallas verticales los círculos se ordenan en dos columnas. |
| `components/ficha/seccion-lateral.tsx` | Secciones plegables con `<details>`. |
| `components/ficha/centro.tsx` | Contenido del círculo central: `CentroGrupo` (ficha) y `CentroComparacion` (comparador). |

`Presentacion` es genérica: recibe el contenido del círculo central, los textos y el contenido de la diapositiva principal, y por cada sistema su detalle, resumen, estado, si está destacado y el texto para cuando no hay datos. La usan la ficha y el comparador.

### Evolución

`data/evolucion.ts` define las etapas fijas (`ETAPAS_EVOLUCION`) y, por sistema, la innovación de cada grupo (`INNOVACIONES`): un título corto y los datos que la respaldan, tomados de las fichas con `dato(taxon, fragmento)` de `data/buscar-dato.ts` (falla al cargar si el fragmento no existe). `app/evolucion/page.tsx` arma las paradas y las pasa a `components/evolucion/linea-evolutiva.tsx`. Cada etapa puede tener `bloque` (Artrópodos, Cordados) y `subbloque` (Reptiles, dentro de Cordados). Para sumar un sistema: agregar su clave en `INNOVACIONES` con todas las etapas (un test lo exige).

### Comparador

`components/comparar/comparador.tsx` es un Client Component (lee `a` y `b` con `useSearchParams`, como pide la regla de no leer `searchParams` en las páginas). Recibe todos los taxones e imágenes por props y arma la comparación con `lib/comparacion.ts`; la tabla embrionaria usa `getEmbriologiaEfectiva` de `crearConsultas`. Cambiar A o B usa `useActualizarParametros` (sin pedir la página al servidor).

Las coordenadas de los círculos se redondean a dos decimales: si no, `Math.cos` da distinto en el servidor y en el
navegador y la hidratación falla.

## Estado en la URL

La selección y las vistas viven en la URL (`useParametro` en `components/navegacion/use-seleccion.ts`, con
`router.replace` sin scroll). El explorador usa `useActualizarParametros`, que cambia varios a la vez con
`window.history.replaceState`: así no vuelve a pedir la página al servidor (con `router.replace` llegaba una red nueva
y el lienzo se reconstruía sin transición), así se pueden compartir y las páginas no dependen de estado global.

| Parámetro | Dónde | Para qué |
|---|---|---|
| `q` | explorador | Búsqueda |
| `sel` | explorador | Nodo seleccionado (abre el panel) |
| `f` | explorador | Filtros activos |
| `color` | explorador | Criterio de color (`linaje` por defecto, se omite) |
| `a`, `b` | comparador | Los dos grupos comparados |
| `#sistema-*`, `#seccion-resumen`, `#seccion-embriologia` | ficha | Diapositiva abierta (sistema o principal); sin hash, vista general |
| `#seccion-*`, `#especial-*` | ficha | Sección de la barra lateral: la abre y la despliega. Los ids son contrato con el buscador y los E2E |

Otros estados del navegador usan `useSyncExternalStore` (sin `setState` en efectos): el filtro de fuentes
(`localStorage` con la clave `ba:filtro-fuentes`), el hash de la ficha y el ancho de pantalla (`useEsEscritorio`,
`min-width: 1024px`).

### Buscador

`lib/busqueda.ts`: índice MiniSearch sobre `texto` y `taxonNombre` (peso ×3), con prefijo, `fuzzy: 0.2` y `AND`.
Hay un documento por grupo (nombre, nombre común y sinónimos) y uno por cada dato de `recorrerItems`. Los resultados
se agrupan por grupo (hasta 5 coincidencias) y consultas de menos de 2 caracteres no devuelven nada.

### Comparador

`lib/comparacion.ts`: 12 filas en dos grupos (`Anatomía`: morfología y estructuras especiales; `Sistemas`: los 10
sistemas). Una fila es "distinta" si cambia el estado de la celda (`datos`, `ausente`, `texto` o `vacio`) o, en estructuras especiales,
el conjunto de títulos. "Solo diferencias" filtra únicamente las filas de Sistemas.

## Decisiones vigentes

| Tema | Decisión |
|---|---|
| Fuente principal | Los apuntes de `apuntes-data/`. Cada dato lleva su fuente (archivo, líneas y cita literal). |
| Fuentes externas | Solo para completar huecos, de dominios permitidos; se marcan como externas y nunca reemplazan ni editan datos de los apuntes. |
| Discrepancias | Se muestra la clasificación de la cátedra; si la bibliografía difiere, se agrega una `Nota` de tipo `discrepancia`. |
| Una sola vista | Mapa, árbol y buscador se unificaron en `/buscar`: árbol radial fijo que se reordena por filtros y búsqueda. |
| Idioma | UI, contenido e identificadores de dominio en español (`Taxon`, `nivel`, `sistemas`…). |
| Renderizado | Contenido estático; todas las fichas se generan con `generateStaticParams`. |
| Ilustraciones | Permitidas: hay imágenes por grupo y modelos 3D (ver [estado.md](estado.md)). |

## Reglas de Next 16 en este proyecto

Esta versión cambia APIs respecto de versiones anteriores. Ante dudas, la referencia es
`apps/web/node_modules/next/dist/docs/`.

- Con Cache Components no existen `dynamic`, `dynamicParams`, `revalidate` ni `fetchCache`.
- `params` y `searchParams` son `Promise`; las páginas se tipan con `PageProps<'/ruta'>` y `LayoutProps<'/ruta'>`
  (los genera `next typegen`, que corre dentro de `pnpm typecheck`).
- Las rutas dinámicas exportan `generateStaticParams()` con todos los slugs y llaman a `notFound()` si no existe.
- `useSearchParams()` y `usePathname()` van en Client Components y siempre dentro de un `<Suspense>`.
- Los formularios GET que navegan usan `next/form`.
