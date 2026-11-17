# Diseño

La identidad sale del logo: un dibujo de línea con animales de varios phyla dentro de un círculo. La app es
**solo modo claro** (`color-scheme: light`, sin variantes `dark:`).

## Colores

Tokens en `apps/web/app/globals.css` (`@theme`), usables como clases de Tailwind (`bg-tinta`, `text-helecho`…).

| Token | Hex | Uso |
|---|---|---|
| `tinta` | `#162a38` | Títulos, botón principal, líneas del cladograma |
| `helecho` | `#3e684a` | Acento: enlaces, hover, íconos |
| `ocre` | `#c48c34` | Acento secundario |
| `oxido` | `#b0543a` | Acento secundario |
| `salvia` | `#eef3ec` | Fondos suaves (bloque de fuentes, footer, círculos de íconos) |

Las fichas y el comparador siguen con la paleta zinc y esmeralda de Tailwind. Los niveles
taxonómicos tienen color propio en `lib/etiquetas.ts` (`NIVEL_CLASES` y `NIVEL_COLOR_HEX`): zinc para los grupos
superiores, después esmeralda, teal, cian, cielo e índigo de phylum a subclase.

## Tipografía

| Familia | Variable | Uso |
|---|---|---|
| Bricolage Grotesque | `font-display` | Títulos y nombre de la app |
| Geist | `font-sans` | Texto |
| Geist Mono | `font-mono` | Reservada |

Se cargan con `next/font/google` en `app/layout.tsx`.

## Logo

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `public/brand/logo.svg` | Logo completo, vectorizado del original, fondo transparente, 4 tintas | Portada de la landing |
| `public/brand/isotipo.svg` | Versión simple (esponja tubular en el círculo) para tamaños chicos | Encabezado y footer |
| `app/icon.svg` | Copia del isotipo | Favicon |

## Animaciones

Siguen la filosofía de Emil Kowalski (skills `animate` y `choreograph`): **solo donde se ven pocas veces**.

| Regla | Detalle |
|---|---|
| Dónde | La landing, el vuelo de la cámara del explorador y el zoom de la ficha. Navegación y comparador no tienen entradas animadas (se usan muchas veces por sesión). |
| Curvas | `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` y `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`, también en `globals.css`. Nunca `ease-in`. |
| Propiedades | Solo `transform`, `opacity` y `clip-path`. |
| Portada | Título, frase, botones y números entran en cascada (0, 90, 160 y 220 ms); el logo se revela en círculo (800 ms). Solo CSS. |
| Al hacer scroll | `components/inicio/al-ver.tsx` marca `data-visto` una sola vez; las clases `landing-escalon`, `landing-trazo-x` y `landing-trazo-y` animan. Lo que queda por encima de la pantalla cuenta como visto. |
| Sin JavaScript | El contenido se oculta solo bajo `@media (scripting: enabled)`, así que sin JS se ve completo. |
| Movimiento reducido | Sin desplazamientos ni cascadas: solo un fundido, todo junto. |
| Presión | `landing-presion`: escala 0.97 (0.98 en filas grandes) al presionar, 160 ms. También en los botones del explorador. |
| Explorador | Al cambiar filtros o búsqueda, los nodos viajan a su nuevo lugar y los que salen se desvanecen (650 ms, ease-in-out fuerte, en `requestAnimationFrame`). La cámara vuela al nodo elegido (700 ms) y encuadra el resultado. Con movimiento reducido todo salta sin animar. |

| Ficha | El zoom entre vista general y diapositivas es una transición de `transform` (700 ms, `--ease-in-out`), y el resto del lienzo se atenúa. Cuando la cámara casi llegó, el círculo se abre en la hoja con un `clip-path` de círculo a rectángulo (420 ms, `--ease-out`, tras 500 ms) y después aparece el texto (220 ms). Con movimiento reducido no hay zoom y la hoja solo se funde. |

## Móvil

El corte es `lg` (1024 px):

| Debajo de `lg` | Desde `lg` |
|---|---|
| Barra de pestañas fija abajo (Inicio, Explorar, Comparar) | Navegación en el encabezado |
| Botón de búsqueda que lleva a `/buscar` | Caja de búsqueda en el encabezado |
| Explorador: menú como cajón superpuesto (abierto si se llega con una búsqueda de varios resultados) | Menú como columna fija, contraíble |
| Explorador: panel del nodo como hoja inferior; la cámara deja el nodo por encima | Panel flotante a la derecha; la cámara corre el nodo a la izquierda |
| Comparador por pestañas | Comparador en tabla |

`useEsEscritorio` (`components/ui/use-media.ts`) decide en el cliente con `matchMedia`.

## Explorador

La red tiene que parecer biología, no espacio: fondo claro de placa de Petri (`.explorar-fondo` en `globals.css`,
viñeta salvia y puntos tenues) y nodos como **células**.

| Elemento | Cómo se dibuja |
|---|---|
| Grupo | Citoplasma (halo translúcido), membrana (anillo fino), cuerpo del color del criterio y núcleo claro. El radio baja con el nivel: reino 13, phylum 8.5, subclase 4.4. |
| Rasgo embrionario | Vesícula: círculo punteado del color del valor, con tres gránulos adentro. Solo aparece como centro de un grupo al filtrar por ese criterio. |
| Ramas | Curvas radiales (como `linkRadial` de d3) entre padre e hijo; las que salen de un rasgo, punteadas en su color. |
| Grupos | Título arriba de cada árbol cuando no hay un rasgo en el centro (por ejemplo, al elegir varios linajes). |
| Etiquetas | Grupos superiores desde zoom 0.5, phyla desde 0.7, rasgos desde 1.4 y el resto desde 2.2. Siempre visibles en lo seleccionado, sus vecinos, lo que está bajo el puntero y los resultados de búsqueda. |
| Atenuado | 15 % de opacidad para lo que no cumple el filtro o no es vecino de la selección. |
| Colores | Linaje: Parazoos ocre, Radiados `#2f8f9d`, Lofotrocozoos óxido, Ecdisozoos `#7a5c99`, Deuterostomados helecho; grupos superiores en tinta. Nivel y criterios usan `NIVEL_COLOR_HEX` y `COLOR_VALOR`. |

## Ficha

| Elemento | Cómo se ve |
|---|---|
| Círculo central | Imagen del grupo a sangre con degradé en tinta, nivel, nombre (Bricolage) y nombre común; anillo blanco grueso y sombra. |
| Sistemas | Círculos blancos con el ícono del sistema en helecho, nombre y cantidad de datos. Sin datos: borde punteado gris. Ausente: borde punteado óxido. Unidos al centro por curvas suaves (punteadas si no hay datos). |
| Diapositiva abierta | Hoja blanca rectangular (no circular: el círculo desperdiciaba espacio y cortaba el texto). Hasta 800 px de ancho para sistemas y 1080 px para la principal; en móvil ocupa la pantalla. Encabezado con ícono, sistema, grupo y origen de los datos; mini anillo para saltar de diapositiva. |
| Lectura | Texto de 17 px, interlineado holgado y renglones de hasta 68 caracteres. Cada dato es un párrafo (sin tarjetas), con la fuente como insignia al final; "Ausente" como marca al inicio; los datos externos llevan una línea ocre a la izquierda. El mismo estilo se usa en la barra lateral, a 15 px. |
| Principal | Dos columnas cuando la hoja es ancha (container query `@3xl`): imagen y criterios embrionarios como lista con chips; resumen al lado. |
| Íconos | `components/ui/iconos-sistemas.tsx`: capas de piel con pelos (tegumento), hueso (esqueleto), fibra fusiforme (muscular), tubo (digestivo), pulmones (respiratorio), corazón (circulatorio), riñón con uréter (excretor), neurona con conexiones (nervioso), ojo (sentidos), óvulo y espermatozoide (reproductor). |

## Comparador

| Elemento | Cómo se ve |
|---|---|
| Círculo central | Las dos imágenes partidas al medio con una línea blanca, "A vs B" en Bricolage y el ancestro común. |
| Colores de A y B | A en helecho (`#3e684a`), B en óxido (`#b0543a`): puntos junto a cada nombre en columnas, barra lateral y rutas. |
| Sistemas que difieren | Punto ocre en el círculo y texto "Difieren" en ocre. |
| Tablas | Embriología como tabla real (criterio, A, B) con chips y la marca "Difiere"; el resto en dos columnas separadas por una línea fina (container query `@2xl`), apiladas en pantallas angostas. |

