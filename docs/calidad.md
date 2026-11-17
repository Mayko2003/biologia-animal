# Calidad y tests

Antes de cada commit, desde la raíz:

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm cobertura
```

| Comando | Qué corre |
|---|---|
| `pnpm lint` | ESLint (`eslint-config-next`) en cada app |
| `pnpm typecheck` | `next typegen && tsc --noEmit` (genera los tipos de rutas antes) |
| `pnpm test` | Vitest sobre `apps/web/tests/unit/**` |
| `pnpm test:e2e` | `next build` y Playwright contra el build de producción |
| `pnpm cobertura` | Tabla de qué secciones tiene cada grupo (`SLUGS=a,b pnpm cobertura` filtra) |

Para una sola app: `pnpm --filter @biologia-animal/web <script>`.

## Integridad de los datos (`tests/unit/integridad.test.ts`)

Es el contrato del contenido: si un dato no cumple, `pnpm test` falla indicando grupo y sección.

| # | Regla |
|---|---|
| 1 | Slugs únicos, con formato `/^[a-z0-9-]+$/` |
| 2 | Una sola raíz (`padre === null`), y es `animalia` |
| 3 | Todo `padre` existe |
| 4 | Sin ciclos: desde cualquier grupo se llega a `animalia` en menos de 15 pasos |
| 5 | El nivel del hijo es más bajo que el del padre (salvo clado dentro de clado) |
| 6 | Entre hermanos, `orden` no se repite |
| 7 | Cada dato tiene `texto` no vacío de hasta 600 caracteres y al menos una fuente |
| 8 | Cada valor de embriología pertenece a `VALORES_CRITERIO` |
| 9 | Fuentes de apunte: `archivo` registrado en `APUNTES`, rango de líneas válido (máximo 120), `cita` de 3 a 25 palabras y presente literalmente en esas líneas (normalizando espacios, con tildes) |
| 10 | Fuentes web: `https://`, dominio permitido, `titulo` y `sitio` no vacíos, `consultado` en formato `AAAA-MM-DD` |
| 11 | Un grupo sin `externo: true` con datos tiene al menos una fuente de apunte; uno con `externo: true` no tiene ninguna |
| 12 | Los ejemplos no empiezan con "Ej" ni terminan en punto |

`tests/unit/verificar-fuentes.ts` lee los apuntes desde `apuntes-data/`, resolviendo la ruta respecto del archivo
(no del directorio de trabajo).

## Otros tests unitarios

| Archivo | Verifica |
|---|---|
| `mapa.test.ts` | Ids únicos; todo taxón del mapa existe; las hojas son exactamente los 17 phyla; títulos iguales a los del taxón; nodos con hijos tienen descripción citada; criterios de hasta 60 caracteres |
| `imagenes-grupos.test.ts` | Cada grupo tiene imagen y no sobran; los archivos existen en `public/grupos` y son imágenes válidas; todas tienen texto alternativo y fuente `https` |
| `apuntes.test.ts` | Dominios permitidos, formato de etiquetas de fuente y que cada apunte registrado exista como archivo |
| `consultas`, `arbol`, `recorrer` | Navegación del árbol, herencia de embriología y recorrido de datos |
| `busqueda`, `comparacion` | Índice y agrupado del buscador; las 12 filas del comparador |
| `red.test.ts` | Un nodo por taxón y enlaces válidos; rasgos solo en phyla; linaje, criterio y herencia; filtros ("o"/"y", rasgos, ida y vuelta por URL); colores y leyenda; árbol radial (completo, determinista, hijos más afuera); agrupación por criterio con rasgo al centro, por nivel y por linaje; búsqueda como grupo |
| `texto`, `estadisticas`, `tiene-apunte` | Utilidades de texto, números de la landing y detección de fuentes de apunte |

## E2E (`tests/e2e/`)

Playwright con dos proyectos, escritorio (Desktop Chrome) y móvil (Pixel 7), contra `pnpm start` en el puerto
3100. Usan solo selectores accesibles (rol y nombre). La búsqueda desde el encabezado se saltea en móvil, porque ahí
no hay caja de búsqueda. El canvas de la red no se inspecciona: los tests actúan sobre el menú, el panel y la URL.

| Spec | Cubre |
|---|---|
| `explorar` | Inicio → red; búsqueda con un resultado (selecciona y abre el panel) y con varios (lista y "Ubicar"); filtro de linaje y embrionario por URL; colorear por; "Ver en la red" desde una ficha y navegar subgrupos; `/mapa` y `/arbol` dan 404 |
| `ficha` | Vista general con los 10 sistemas; diapositiva principal (resumen y embriología heredada); hash abre un sistema y el teclado navega; secciones laterales desde el hash; filtro "Solo apuntes"; insignia con cita; phyla enlazados en grupos superiores; ruta y accesos en la barra; 404 |
| `busqueda` | Búsqueda desde el encabezado; resultado que abre la pestaña del sistema; búsqueda aproximada ("anelidos" encuentra Annelida) |
| `comparador` | "A vs B" y sistemas que difieren en la vista general; tabla embrionaria en la principal; dos columnas por sistema; ancestro común; intercambiar; "solo los que difieren"; aviso sin selección; elegir un grupo escribiendo y con el mouse; abrir desde una ficha |

Los textos que buscan los E2E (por ejemplo "Explorar la red de grupos" en la landing o "Abrir el menú" en el explorador) y los ids `seccion-*` /
`sistema-*` son parte del contrato: si cambian, hay que actualizar los specs.
