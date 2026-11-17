# Guía: sumar un apunte nuevo o un grupo nuevo

Para cuando la cátedra entrega un apunte nuevo (un TP) o hay que agregar grupos que no existen en el árbol. Para
cargar el contenido en sí, seguí después [contenido-apuntes.md](contenido-apuntes.md).

## 1. Registrar el apunte

1. Convertí el PDF a Markdown (los apuntes actuales se convirtieron con `markitdown`) y guardalo en
   `apuntes-data/<nombre>.md`. A partir de ahí **no se edita**: las citas apuntan a números de línea.
2. Agregalo al catálogo `APUNTES` en `apps/web/lib/apuntes.ts`, con su número de TP y título:
   `'aves, mamiferos.md': { tp: 16, titulo: 'Aves y Mamíferos' }`. Eso habilita el nombre del archivo en el tipo
   `ArchivoApunte`.
3. `pnpm test`: el test "cada clave de APUNTES existe como archivo" confirma que el archivo está.
4. Anotá qué líneas son ruido (encabezados de página repetidos, números de página sueltos, bibliografía) para no
   citarlas.

## 2. Crear los grupos nuevos

1. Definí cada grupo: `slug`, `nombre`, `nombreComun`, `nivel`, `padre` y `orden` (sin repetir el `orden` de sus
   hermanos). Respetá la clasificación del apunte; si difiere de la bibliografía actual, va una `Nota` de discrepancia.
2. Creá `apps/web/data/taxa/<slug>.ts` con la plantilla de [contenido-apuntes.md](contenido-apuntes.md) (§7).
3. Registralo en `apps/web/data/taxa/index.ts` (import al final y agregado a la lista).
4. Si el apunte describe rangos sin nivel propio en la app (por ejemplo, superórdenes), no crees un grupo: describilos
   como datos dentro del grupo que los contiene.
5. Un grupo con apunte propio **no** lleva `externo: true` (eso es para grupos que solo tienen fuentes web).
6. `embriologia: {}` si el apunte no la trata: la clase la hereda del phylum.

## 3. Imagen del grupo

Cada grupo necesita una imagen (lo exige `imagenes-grupos.test.ts`):

1. Elegí una foto con licencia libre en Wikimedia Commons.
2. Guardala como `apps/web/public/grupos/<slug>.webp`.
3. Agregá la entrada en `apps/web/data/imagenes-grupos.ts` con `src`, `alt`, `autor`, `licencia`, `licenciaUrl` y
   `fuente` (la página del archivo en Commons). La ficha muestra el crédito.

## 4. Si el grupo es un phylum

Los phyla son las hojas del mapa embrionario: agregá la hoja en `apps/web/data/mapa-embrionario.ts` (helper `hoja`)
con `titulo` y `subtitulo` iguales al `nombre` y `nombreComun` del taxón. `mapa.test.ts` verifica que las hojas sean exactamente los phyla.

## 5. Cerrar

1. `pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm cobertura`.
2. Actualizá los números y la lista de apuntes en [`docs/estado.md`](../estado.md) y agregá una entrada en
   [`docs/registro.md`](../registro.md).
