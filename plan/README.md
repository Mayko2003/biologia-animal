# Plan de implementación — App de estudio de Biología Animal

Este directorio contiene el plan completo dividido en **tickets pequeños y autocontenidos**.
Cada ticket se implementa en orden, de a uno, y termina con un commit.

## 1. Qué es la app

Una app web (Next.js 16.4 + React 19.3 + Tailwind 4, ya inicializada en este repo) para estudiar
Biología Animal a partir de los apuntes de la cátedra (`animal-data/*.md`).

Funcionalidades:

1. **Mapa conceptual** (`/mapa`): clasificación según el desarrollo embrionario
   (Parazoa/Eumetazoa → Radiata/Bilateria → Protostomados (Lofotrocozoos/Ecdisozoos)/Deuterostomados → phyla),
   con "lentes" que colorean los phyla según un criterio (capas germinativas, simetría, cavidad corporal,
   destino del blastoporo, segmentación).
2. **Árbol filogenético/taxonómico** (`/arbol`): jerarquía Reino → Subreino → Rama → Clado → Phylum →
   Subphylum → Superclase → Clase → Subclase. Vista lista desplegable y vista gráfica.
3. Al seleccionar un grupo (en 1 o 2) se abre un **panel con las clases disponibles**.
4. **Ficha del grupo** (`/grupo/[slug]`): resumen, desarrollo embrionario, morfología externa, todos los
   sistemas (tegumento, esqueleto, muscular, digestivo, respiratorio, circulatorio, excretor, nervioso,
   sentidos, reproductor), estructuras especiales, reproducción y desarrollo, bioecología, ejemplos y notas.
5. **Comparador** (`/comparar?a=…&b=…`): cuadro comparativo de dos grupos o clases.
6. **Buscador global** (`/buscar?q=…`).

**Fuera de alcance por ahora**: dibujos/ilustraciones de los animales (2D o 3D). No crear nada relacionado.

## 2. Decisiones ya tomadas (no cambiar sin consultar)

| Tema | Decisión |
|---|---|
| Fuente principal | Los apuntes de `animal-data/`. Cada dato lleva su fuente (archivo + líneas + cita literal). |
| Fuentes externas | Permitidas **solo** en los tickets T41–T46, para completar huecos. Se marcan como "Externo". Nunca reemplazan ni editan datos de los apuntes. |
| Discrepancias | La clasificación que se muestra es **la de la cátedra**; si la bibliografía actual difiere se agrega una `Nota` de tipo `discrepancia`. |
| Mapa vs árbol | Mapa = criterios embrionarios (nodos conceptuales + phyla como hojas). Árbol = jerarquía taxonómica por `padre`. |
| Tetrápodos | Anfibios y reptiles llegaron con el apunte TP15 (`anfibios, reptiles.md`): se agregan en T50–T51. Aves y mamíferos siguen fuera de los apuntes: solo en el ticket **opcional** T46 (si el usuario lo pide). |
| Idioma | Toda la UI y el contenido en **español**. Identificadores de dominio en español (`Taxon`, `nivel`, `sistemas`…), exactamente como se definen en T03. |
| Renderizado | Todo el contenido es estático (datos en TypeScript dentro del repo). No hay base de datos, ni API, ni fetch en runtime. |

## 3. Reglas obligatorias para quien implementa

1. **Leé `AGENTS.md`**. Esta versión de Next.js tiene cambios importantes. Ante cualquier duda de API, leé
   la doc local en `node_modules/next/dist/docs/` (no uses tu memoria de versiones viejas).
2. Particularidades de **Next 16.4 con `cacheComponents: true`** (ya activado en `next.config.ts`):
   - `params` y `searchParams` de páginas son **Promise** → `const { slug } = await params`.
   - Tipá las páginas con los helpers globales `PageProps<'/ruta/[param]'>` y `LayoutProps<'/ruta'>`
     (se generan con `next typegen`; el script `pnpm typecheck` lo ejecuta).
   - **Prohibido** exportar `dynamic`, `dynamicParams`, `revalidate` o `fetchCache` (no existen con Cache Components).
   - Rutas dinámicas: exportar `generateStaticParams()` que devuelva **todos** los slugs (nunca un array vacío)
     y llamar `notFound()` si el slug no existe.
   - `useSearchParams()` solo en Client Components y **siempre** dentro de un `<Suspense>` puesto por la página.
     No leer la prop `searchParams` en las páginas: usar el hook en un componente cliente.
   - Para formularios GET que navegan usar `import Form from 'next/form'`.
3. **No agregar dependencias** que no estén indicadas en un ticket. Las versiones están fijadas en los tickets
   (todas publicadas hace más de 7 días). Usar `pnpm add` con la versión exacta.
4. **No modificar** `next.config.ts`, `pnpm-workspace.yaml`, `.npmrc` ni configuración de seguridad.
5. **No editar los archivos de `animal-data/`**. Son la fuente de verdad.
6. No agregar comentarios innecesarios en el código. Código compacto, sin abstracciones de más.
7. Estilos con clases de Tailwind (v4, ya configurado en `app/globals.css`). No instalar librerías de UI.
   Soportar modo oscuro con variantes `dark:` (el proyecto usa `prefers-color-scheme`).
8. Accesibilidad básica: botones reales (`<button>`), `aria-*` donde se indique, foco visible, contraste suficiente.
9. **Lint de React hooks** (`eslint-config-next` 16 incluye las reglas nuevas de `react-hooks`): no llamar `setState`
   de forma sincrónica dentro de `useEffect`. Alternativas: estado derivado calculado en el render, actualizar el estado
   en los manejadores de eventos, el patrón "ajustar estado durante el render cuando cambia una prop"
   (guardar el valor previo en estado y compararlo), o `useSyncExternalStore` para `localStorage`/`location.hash`.
10. **Client Components** nunca importan `lib/taxa.ts` ni nada de `data/` (meterían todos los datos en el bundle).
    Reciben lo que necesitan por props desde la página (Server Component).
11. Si algo del ticket es ambiguo o imposible, **no improvises una solución grande**: implementá lo mínimo
   razonable y dejá anotado en el mensaje de commit qué quedó pendiente.

## 4. Definición de terminado (aplica a TODOS los tickets)

Antes de cerrar un ticket ejecutar, en este orden, y que todo pase:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

Además, si el ticket toca algo dentro de `app/` o `components/`:

```bash
pnpm build
```

(Los scripts `typecheck` y `test` se crean en T02. Antes de T02 solo aplica `pnpm lint` y `pnpm build`.)

Luego hacer **un commit por ticket**:

```bash
git add -A
git commit -m "T0X: <título corto del ticket>"
```

No hacer push. No usar `--no-verify`.

## 5. Estructura final esperada

```
app/
  layout.tsx               # layout raíz (header, nav, buscador)
  page.tsx                 # inicio
  not-found.tsx
  mapa/page.tsx
  arbol/page.tsx
  grupo/[slug]/page.tsx
  comparar/page.tsx
  buscar/page.tsx
components/
  layout/…  taxon/…  fuentes/…  navegacion/…  arbol/…  mapa/…  busqueda/…  comparar/…
data/
  taxa/<slug>.ts           # un archivo por grupo
  taxa/index.ts            # registro de todos los grupos
  mapa-embrionario.ts      # estructura del mapa conceptual
lib/
  types.ts  apuntes.ts  etiquetas.ts  texto.ts          # puros (T03)
  consultas.ts  arbol.ts  recorrer.ts                   # puros (T05)
  taxa.ts                                               # CON datos: solo servidor/tests (T05)
  cobertura.ts  estadisticas.ts                         # puros (T06, T17)
  busqueda.ts  comparacion.ts                           # puros (T37, T39)
tests/
  unit/…                   # Vitest
  reportes/cobertura.test.ts
  e2e/…                    # Playwright
animal-data/               # apuntes (NO editar)
plan/                      # este plan
```

## 6. Orden de los tickets

| Épica | Tickets | Descripción |
|---|---|---|
| E0 Base | T01–T06 | Repo, herramientas, tipos, esqueleto de datos, consultas, tests de integridad |
| E1 Piloto | T07–T09 | Contenido de clados superiores y Porifera; datos del mapa |
| E2 UI | T10–T17 | Componentes, ficha, panel, árbol, mapa, inicio |
| E3 Contenido | T18–T36 | Pasar todos los apuntes a datos (un ticket por sección) |
| E4 Extras | T37–T40 | Buscador y comparador |
| E5 Web | T41–T46 | Completar huecos con fuentes externas (T46 opcional: tetrápodos) |
| E6 Cierre | T47–T49 | E2E, pulido, verificación final |
| E7 TP15 | T50–T51 | Contenido del apunte de anfibios y reptiles (TP15) |

Lista completa:

- [T01](tickets/T01-preparar-repo.md) Preparar repo y limpiar template
- [T02](tickets/T02-herramientas.md) Scripts de calidad y Vitest
- [T03](tickets/T03-tipos-dominio.md) Tipos del dominio, catálogo de apuntes y etiquetas
- [T04](tickets/T04-esqueleto-taxones.md) Esqueleto de los 89 taxones
- [T05](tickets/T05-consultas-taxa.md) Funciones de consulta del árbol
- [T06](tickets/T06-tests-integridad.md) Tests de integridad de datos y reporte de cobertura
- [T07](tickets/T07-contenido-clados.md) Contenido: clados superiores
- [T08](tickets/T08-contenido-porifera.md) Contenido: Porifera
- [T09](tickets/T09-datos-mapa.md) Datos del mapa conceptual
- [T10](tickets/T10-componentes-base.md) Componentes de UI base
- [T11](tickets/T11-ficha-grupo.md) Página de ficha de grupo
- [T12](tickets/T12-panel-seleccion.md) Panel de selección ("clases disponibles")
- [T13](tickets/T13-arbol-lista.md) Árbol: vista lista
- [T14](tickets/T14-arbol-grafico.md) Árbol: vista gráfica
- [T15](tickets/T15-mapa-render.md) Mapa conceptual: render e interacción
- [T16](tickets/T16-mapa-lentes.md) Mapa conceptual: lentes
- [T17](tickets/T17-inicio.md) Página de inicio
- [T18](tickets/T18-contenido-cnidaria.md) Contenido: Cnidaria y clases
- [T19](tickets/T19-contenido-ctenophora.md) Contenido: Ctenophora
- [T20](tickets/T20-contenido-platyhelminthes.md) Contenido: Platyhelminthes y clases
- [T21](tickets/T21-contenido-gastrotricha-rotifera.md) Contenido: Gastrotricha y Rotifera
- [T22](tickets/T22-contenido-annelida.md) Contenido: Annelida y clases
- [T23](tickets/T23-contenido-mollusca-1.md) Contenido: Mollusca I
- [T24](tickets/T24-contenido-mollusca-2.md) Contenido: Mollusca II
- [T25](tickets/T25-contenido-bryozoa-brachiopoda-chaetognatha.md) Contenido: Bryozoa, Brachiopoda, Chaetognatha
- [T26](tickets/T26-contenido-nemata.md) Contenido: Nemata y Nematomorpha
- [T27](tickets/T27-contenido-arthropoda-chelicerata.md) Contenido: Arthropoda y Chelicerata
- [T28](tickets/T28-contenido-myriapoda.md) Contenido: Myriapoda
- [T29](tickets/T29-contenido-crustacea.md) Contenido: Crustacea
- [T30](tickets/T30-contenido-hexapoda.md) Contenido: Hexapoda e Insecta
- [T31](tickets/T31-contenido-echinodermata-1.md) Contenido: Echinodermata y Asteroidea
- [T32](tickets/T32-contenido-echinodermata-2.md) Contenido: Ophiuroidea, Holothuroidea, Echinoidea, Crinoidea
- [T33](tickets/T33-contenido-hemichordata.md) Contenido: Hemichordata
- [T34](tickets/T34-contenido-chordata-protocordados.md) Contenido: Chordata y protocordados
- [T35](tickets/T35-contenido-vertebrata-agnatha.md) Contenido: Vertebrata y Agnatha
- [T36](tickets/T36-contenido-gnathostomata.md) Contenido: Gnathostomata (peces)
- [T37](tickets/T37-busqueda-indice.md) Buscador: índice y lógica
- [T38](tickets/T38-busqueda-ui.md) Buscador: página y caja en el encabezado
- [T39](tickets/T39-comparacion-logica.md) Comparador: lógica
- [T40](tickets/T40-comparacion-ui.md) Comparador: página
- [T41](tickets/T41-web-clados-radiata.md) Web: clados, Parazoa y Radiata
- [T42](tickets/T42-web-lofotrocozoos.md) Web: Lofotrocozoos
- [T43](tickets/T43-web-ecdisozoos.md) Web: Ecdisozoos
- [T44](tickets/T44-web-deuterostomados.md) Web: Deuterostomados invertebrados y protocordados
- [T45](tickets/T45-web-vertebrados.md) Web: Vertebrados (peces)
- [T46](tickets/T46-web-tetrapodos-opcional.md) (Opcional) Web: Tetrápodos — solo aves y mamíferos; anfibios y reptiles se cubrieron con el TP15 (T50–T51)
- [T47](tickets/T47-e2e.md) Pruebas E2E con Playwright
- [T48](tickets/T48-pulido.md) Pulido: 404, metadatos, responsive, accesibilidad
- [T49](tickets/T49-cierre.md) Cierre: verificación completa y documentación
- [T50](tickets/T50-contenido-amphibia.md) Contenido: Amphibia y sus órdenes (TP15)
- [T51](tickets/T51-contenido-reptilia.md) Contenido: Reptilia y sus grupos (TP15)

## 7. Guías compartidas

- [guia-contenido.md](guia-contenido.md): cómo pasar los apuntes a datos (obligatoria para T07, T08, T18–T36).
- [guia-fuentes-web.md](guia-fuentes-web.md): cómo completar huecos con internet (obligatoria para T41–T46).

## 8. Cómo usar este plan con un agente implementador

- Darle **un ticket por vez**, con este prompt base:
  > Implementá el ticket `plan/tickets/TNN-….md`. Antes de empezar leé `plan/README.md` (reglas globales y definición de
  > terminado) y, si el ticket lo indica, la guía correspondiente. No hagas nada fuera del alcance del ticket.
  > Al terminar, corré la verificación y hacé el commit.
- Revisar el resultado (o al menos `git show --stat`) antes de pasar al siguiente.
- Los tickets de contenido (T18–T36) son independientes entre sí: si uno falla, se puede seguir con el siguiente y volver después.
- Los tickets T41–T46 necesitan acceso a internet.

## 9. Plantilla de ticket

Todos los tickets siguen esta forma:

- **Objetivo**: qué se logra.
- **Depende de**: tickets previos necesarios.
- **Archivos**: qué crear o modificar.
- **Pasos**: instrucciones concretas.
- **Criterios de aceptación**: lista verificable.
- **Verificación**: comandos.
- **Fuera de alcance**: lo que NO hay que hacer.
