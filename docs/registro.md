# Registro de cambios

Lo más reciente primero. Cada entrada: fecha, qué cambió y por qué, y qué documentos se tocaron.

## 2026-11-16

- **Líneas evolutivas completas**: se sumaron nervioso (de sin sistema nervioso a cerebro con circunvoluciones), órganos de los sentidos (de estatocistos y ocelos a pabellón auricular y vibrisas) y reproductor (de gemación y gémulas a placenta y glándulas mamarias). Ya están los 10 sistemas. Docs: estado.
- **Presentaciones de la cátedra como fuente**: 14 presentaciones (TP4 a TP18) pasadas a texto en `apuntes-data/presentaciones/` (un archivo por PDF, con marcas de diapositiva) y registradas en `lib/apuntes.ts` con `presentacion: true`; la insignia dice "Presentación · TP…". Se agregaron 49 datos citados en 12 fichas (anfibios, reptiles, Osteichthyes con la vejiga natatoria, equinodermos y holoturias) y se actualizaron las líneas evolutivas afectadas (circulatorio, respiratorio, excretor y esqueleto). Docs: estado y guía de apuntes.
- **Línea evolutiva del sistema excretor**: 13 innovaciones citadas (de difusión a vejiga urinaria y uretra); Cnidaria, Myriapoda, Insecta, Osteichthyes, Chelonia y Crocodilia como "Sin innovación nueva" con sus datos, y Amphibia sin datos excretores. Docs: estado.
- **Línea evolutiva del sistema circulatorio**: 11 innovaciones citadas (de transporte por la corriente de agua a doble circulación completa); el resto como "Sin innovación nueva" con sus datos, y Chelonia, Sauria y Serpentes sin datos circulatorios. Docs: estado.
- **Línea evolutiva del sistema respiratorio**: 13 innovaciones citadas (de difusión simple a respiración exclusivamente pulmonar); Cnidaria, Platyhelminthes, Nemata, Myriapoda y Echinodermata como "Sin innovación nueva" con sus datos; Sauria y Serpentes sin datos respiratorios. Docs: estado.
- **Línea evolutiva del sistema muscular**: 17 innovaciones citadas (de células contráctiles a diafragma); Myriapoda y Chelonia como "Sin innovación nueva" con sus datos, Sauria sin datos musculares. Docs: estado.
- **"Sin innovación nueva"**: revisión de los 3 sistemas. Llevan esa etiqueta (y conservan sus datos) las paradas sin cambios relevantes: digestivo (Echinodermata, Sauria, Crocodilia), tegumento (Myriapoda, Insecta, Serpentes) y esqueleto (Myriapoda), además de las que no tienen datos (Sauria en esqueleto). Docs: estado.
- **Línea evolutiva de esqueleto y sostén**: 18 innovaciones citadas (de espículas y espongina a huesos sesamoideos); Myriapoda queda como "sin innovación nueva" (repite el exoesqueleto de Chelicerata) y Sauria sin datos. `Innovacion.titulo` admite `null` para ese caso. Docs: estado.
- **Línea evolutiva del tegumento**: los 20 grupos con su innovación del tegumento y la pared del cuerpo (de pinacodermo a pelo y glándulas), con datos citados de las fichas. Docs: estado.
- **Línea evolutiva por sistema** (`/evolucion`): 20 grupos fijos (los reptiles separados en Chelonia, Sauria, Serpentes y Crocodilia, porque Reptilia como clase no tiene datos de sistemas) (de Porifera a Mammalia, con artrópodos, cordados y reptiles agrupados) y, por cada uno, la innovación del sistema con sus datos citados. Por ahora solo el sistema digestivo; los otros 9 figuran como "Próximamente". Contenido en `data/evolucion.ts`, que reutiliza datos de las fichas (`data/buscar-dato.ts`). Se suma "Evolución" a la navegación. Docs: estado y arquitectura.
- **Vista 3D sin WebGL**: si el navegador tiene WebGL desactivado (por ejemplo, Chrome sin aceleración por hardware), la vista 3D muestra una imagen del modelo con los cortes (`porifera-corte.webp`) y cómo activarlo, en lugar del error de three.js. La misma imagen es la portada mientras carga el modelo.
- **Vista 3D en la ficha**: selector Esquema/3D (solo en grupos con modelo; hoy Porifera). Mitad izquierda: lista de estructuras agrupadas por sistema, conectada con el modelo; mitad derecha: `<model-viewer>` (dependencia nueva, con `three`) con puntos sobre el modelo. Modelo `porifera-corte.glb` con corte longitudinal y transversal (`models/porifera/scripts/corte.py`); puntos y textos en `data/modelos-3d.ts`, que reutiliza datos citados de la ficha. Docs: estado.
- **Deploy en Vercel**: el build fallaba con `NEXT_NO_VERSION` desde el paso a monorepo porque el proyecto construía desde la raíz. Se configuró el Root Directory en `apps/web`. Docs: arquitectura.
- **Filtro de fuentes más chico**: "Todas las fuentes / Solo apuntes" pasó a píldoras compactas (texto de 12 px, 30 px de alto) con el activo en tinta. Se borró `components/ui/clases.ts`, que quedó sin uso.
- **Selectores del comparador**: el desplegable nativo de "Grupo B" se abría y se cerraba solo, eligiendo el grupo que
  quedaba bajo el mouse. Se reemplazó por un combobox propio (`components/comparar/selector-taxon.tsx`) con búsqueda,
  teclado y la lista siempre debajo del campo. Docs: estado y calidad.
- **Comparador como presentación**: igual que la ficha, a pantalla completa con barra lateral. El centro dice "A vs B"
  con las dos imágenes y el ancestro común; cada sistema abre una tabla comparativa en dos columnas y marca si
  difieren. La principal compara el desarrollo embrionario en una tabla y el resumen, la morfología y las estructuras
  especiales lado a lado. `Presentacion` pasó a ser genérica para servir a los dos. Se borraron las pestañas móviles del
  comparador anterior. Docs: estado, arquitectura, calidad y diseño.
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
