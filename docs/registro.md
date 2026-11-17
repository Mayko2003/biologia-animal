# Registro de cambios

Lo más reciente primero. Cada entrada: fecha, qué cambió y por qué, y qué documentos se tocaron.

## 2026-11-16

- **Diapositivas cómodas para leer**: las diapositivas circulares desperdiciaban espacio y las tarjetas cortaban la
  lectura. Ahora el círculo se abre en una hoja rectangular con texto corrido (17 px, renglones de hasta 68
  caracteres), encabezado con el origen de los datos, mini anillo para saltar entre sistemas, deslizar en el celular y
  un mensaje claro cuando un sistema no tiene datos. La principal va en dos columnas. Datos, ejemplos, notas y
  embriología dejaron de usar tarjetas también en la barra lateral. Docs: estado y diseño.
- **Ficha como presentación estilo Prezi**: la ficha pasó a ser una pantalla completa con barra lateral. Un círculo
  central (imagen, resumen y desarrollo embrionario) rodeado por los 10 sistemas, con íconos nuevos para tegumento,
  esqueleto, muscular, excretor y reproductor; al tocar uno, zoom a su diapositiva. El resto de la información
  (morfología, estructuras especiales, reproducción, bioecología, ejemplos, notas, subgrupos) quedó en la barra
  lateral. La barra se extrajo a un componente compartido con el explorador. Se borraron la cabecera, el índice y las
  pestañas de sistemas anteriores. Docs: estado, arquitectura, calidad y diseño.
- **Explorador ordenado**: la red con simulación de fuerzas se sentía desorganizada. Ahora parte de un árbol radial fijo
  y, al filtrar o buscar, se reordena con una transición en un árbol por valor del filtro (los rasgos embrionarios
  quedan como centro de su grupo). Sin fuerzas ni arrastre de nodos. El explorador actualiza la URL con
  `history.replaceState` para no volver a pedir la página al servidor. Docs: estado, arquitectura, calidad y diseño.
- **Explorador unificado en `/buscar`**: el mapa conceptual, el árbol taxonómico y el buscador pasaron a ser una sola
  red interactiva a pantalla completa (`force-graph`, canvas 2D, estilo de la vista Graph de Qdrant con nodos como
  células). Suma nodos de rasgo embrionario que conectan a los phyla que los comparten; los filtros por linaje, nivel y
  criterio agrupan los nodos; la búsqueda vuela a un resultado único u oculta lo que no coincide. Menú lateral
  contraíble con la navegación (la página no tiene encabezado). Se borraron `/mapa`, `/arbol` y sus componentes, y la
  dependencia `d3-hierarchy`. Las demás páginas quedaron en el grupo de rutas `(sitio)`. Docs: estado, arquitectura,
  calidad y diseño.
- **Documentación del estado actual** (`docs/`). Reemplaza al plan por tickets, que dejó de usarse por agilidad. Las
  guías de contenido y de fuentes web se movieron a `docs/guias/` (sin referencias a tickets); el plan y los tickets
  quedaron archivados en `docs/historial/`.
- **Monorepo**: la app pasó a `apps/web` (pnpm workspaces `apps/*` y `packages/*`) para poder sumar un backend o un
  agente IA. `animal-data/` se renombró a `apuntes-data/` para dejar claro que son los apuntes de la cátedra.
- **Landing** de inicio que explica qué hace la app y para qué sirve, con logo vectorizado, isotipo (favicon y
  encabezado), footer con el creador y animaciones solo en la landing.
- **Solo modo claro**: se quitaron las variantes `dark:`.
- **Modelo 3D de Porifera** (*Aplysina fistularis*) en `apps/web/public/models/porifera.glb`, generado con scripts de
  Blender en `models/porifera/scripts/`. Todavía no se muestra en la app.

## 2026-11-05

- Imagen ilustrativa (Wikimedia Commons, con autor y licencia) en la cabecera de cada ficha.
- Next.js 16.4.0 → 16.4.5 por un aviso de seguridad.

## 2026-10-13 a 2026-10-22: construcción por tickets (T01–T63)

La app se construyó con un plan de 63 tickets, archivado en
[historial/plan-original.md](historial/plan-original.md).

| Etapa | Tickets | Resultado |
|---|---|---|
| Base | T01–T06 | Repo, herramientas, tipos, esqueleto de datos, consultas, tests de integridad |
| Piloto | T07–T09 | Clados superiores, Porifera y datos del mapa |
| UI | T10–T17 | Componentes, ficha, panel, árbol, mapa e inicio |
| Contenido | T18–T36 | Todos los apuntes (TP4–TP14) pasados a datos |
| Buscador y comparador | T37–T40 | Búsqueda global y primer comparador |
| Fuentes externas | T41–T46 | Huecos completados con fuentes web y notas de discrepancia |
| Cierre | T47–T49 | E2E, pulido y verificación |
| TP15 | T50–T51 | Anfibios y reptiles |
| Móvil | T52–T59 | Barra de pestañas, hoja inferior, vistas en lista, comparador apilado |
| Diseño visual | T60–T61 | Ficha interactiva y comparador anatómico (12 filas) |
| TP16 | T62–T63 | Aves y mamíferos |
