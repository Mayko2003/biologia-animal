# Guía: cómo pasar los apuntes a datos

Obligatoria para los tickets **T07, T08 y T18–T36**. Leela completa antes de cada ticket de contenido.

## 1. Regla de oro

> **Solo se escribe lo que dicen las líneas indicadas del apunte.** Nada de memoria, nada de internet.
> Si un sistema no aparece en el apunte, **se deja vacío**. Los huecos se completan después, en T41–T46.

## 2. Cómo son los apuntes

- Son texto extraído de PDF. Cada página repite un encabezado que hay que **ignorar**:
  - `APUNTES-Trabajo Práctico N°X` / `Apuntes Trabajo Práctico N°X` / `Trabajo Práctico N°14`
  - la línea de título que le sigue (ej. `PORÍFEROS Y CNIDARIOS`, `Phylum Chordata`, `PROTOSTOMOS LOFOTROCOZOOS II`)
  - `Cátedra de Biología Animal…`, `Biología Animal`, `Licenciatura en Ciencias Biológicas.`, `Universidad Nacional de Jujuy.`
  - números de página sueltos (`7`, `10`…).
- Hay espacios dobles entre palabras y palabras cortadas entre líneas. No importa: escribí el texto limpio.
- En algunos lugares el PDF mezcló columnas (ej. `chordata.md` líneas 64–72). Si el orden correcto es
  evidente, reconstruilo; si no, **omití ese fragmento**.
- La sección `BIBLIOGRAFÍA` del final de cada archivo **no se usa**.

## 3. Dónde va cada cosa (mapeo a campos del `Taxon`)

El tipo `Taxon` está en `lib/types.ts` (T03). Cada dato es un `Dato` = `{ texto, fuentes, ausente? }`.

| Campo | Qué poner |
|---|---|
| `resumen` | Diagnosis, características generales, número de especies, nombres comunes, etimología. 2–6 datos. |
| `morfologiaExterna` | Forma del cuerpo, tamaño, regiones (cabeza/tórax…), apéndices, aberturas, coloración externa. |
| `sistemas.tegumento` | Epidermis, cutícula, pared del cuerpo, glándulas de la piel, escamas, manto. |
| `sistemas.esqueleto` | Espículas, espongina, exoesqueleto, concha, endoesqueleto, osículos, notocorda, columna, cráneo, esqueleto hidrostático. |
| `sistemas.muscular` | Capas musculares, músculos, mecanismo de locomoción muscular. |
| `sistemas.digestivo` | Boca, faringe, tubo digestivo, glándulas digestivas, mecanismo de alimentación y digestión. |
| `sistemas.respiratorio` | Branquias, pulmones, tráqueas, filotráqueas, respiración cutánea, árboles respiratorios. |
| `sistemas.circulatorio` | Corazón, vasos, sangre/hemolinfa, pigmentos, sistema abierto/cerrado. |
| `sistemas.excretor` | Nefridios, protonefridios, células flamígeras, túbulos de Malpighi, glándulas antenales/coxales, riñones. |
| `sistemas.nervioso` | Ganglios, cordones, cerebro, anillo nervioso, red nerviosa. |
| `sistemas.sentidos` | Ojos, ocelos, estatocistos, antenas (función sensorial), línea lateral, quimiorreceptores. |
| `sistemas.reproductor` | **Anatomía**: gónadas, conductos, órganos copuladores, hermafroditismo/dioecia. |
| `estructurasEspeciales` | Sistemas exclusivos del grupo que no entran en los anteriores. Ej.: sistema acuífero (Porifera), cnidocitos (Cnidaria), coloblastos (Ctenophora), sistema ambulacral (Echinodermata), lofóforo (Bryozoa/Brachiopoda), endostilo. Formato `{ titulo, datos }`. |
| `reproduccion` | **Proceso**: reproducción sexual/asexual, fecundación, desarrollo directo/indirecto, larvas, ciclos de vida, metamorfosis, regeneración. |
| `bioecologia` | Hábitat, distribución, hábitos alimentarios, parasitismo, comportamiento, importancia sanitaria o económica. |
| `ejemplos` | Géneros o especies mencionados. `{ nombre: 'Hydra', descripcion?: 'pólipo solitario de agua dulce', fuentes }`. `nombre` solo el nombre científico (sin "Ej."). |
| `notas` | Aclaraciones de la cátedra sobre la clasificación (`tipo: 'aclaracion'`). Ej.: "Osteichthyes es un grupo parafilético". |
| `embriologia` | **Solo** si el apunte lo dice explícitamente para ese grupo (ej. "deuterostomados, enterocelomados"). Ver §6. |

Reglas de asignación:

- Lo **general del phylum** va en el archivo del phylum; lo **específico de una clase** va en el archivo de la clase.
  Cada ticket dice qué rango de líneas corresponde a cada slug.
- Cuando el apunte describe un **organismo tipo** (ej. *Ascaris lumbricoides*, *Lumbricus*, *Hydra*, la perca),
  esos datos van al taxón que indica el ticket y el texto empieza aclarándolo: `"En Ascaris lumbricoides, …"`.
- Si el apunte dice que el grupo **carece** de un sistema ("carecen de sistema respiratorio"), creá un `Dato`
  con `ausente: true` en ese sistema. Ej.: `{ texto: 'Carecen de sistema respiratorio.', ausente: true, fuentes: [...] }`.
- Un mismo fragmento puede generar datos en varias secciones (ej. "respiración cutánea" → `respiratorio`).

## 4. Cómo escribir cada `Dato`

- Español claro, oraciones completas, **fiel al apunte**. Podés reordenar y resumir; no podés agregar información.
- **Una idea por dato.** 1 a 3 oraciones. Máximo 400 caracteres.
- Corregí errores de tipeo evidentes (`tordos los colores` → `todos los colores`, `enrrollado` → `enrollado`).
- Conservá los términos técnicos del apunte (ej. "mesohilo", "nefridios", "trocófora").
- No uses markdown dentro de `texto`.
- Orden de los datos dentro de cada sección: el mismo orden en que aparecen en el apunte.

## 5. Cómo citar la fuente (obligatorio, lo verifica un test)

Cada `Dato`, `Ejemplo`, `Nota` y registro de `embriologia` lleva al menos una fuente:

```ts
{ tipo: 'apunte', archivo: 'annelidos.md', lineas: [36, 38], cita: 'El sistema circulatorio es cerrado' }
```

- `archivo`: nombre exacto del archivo en `animal-data/` (el tipo `ArchivoApunte` lo autocompleta).
- `lineas`: `[inicio, fin]`, 1-based e inclusivo, tal como las muestra la herramienta de lectura. Rango **ajustado**
  al fragmento usado (ideal ≤ 15 líneas; el test rechaza rangos de más de 120).
- `cita`: un fragmento **literal** de 3 a 25 palabras copiado de esas líneas. El test une las líneas del rango,
  pasa todo a minúsculas, colapsa espacios y verifica que la cita esté contenida. Por eso:
  - copiá las palabras exactamente (con tildes y signos tal cual);
  - los espacios dobles y los saltos de línea no importan;
  - **no** cruces un encabezado de página dentro de la cita;
  - no corrijas la ortografía dentro de la cita (la corrección va en `texto`).
- Si un dato combina dos fragmentos alejados, poné **dos fuentes**.

## 6. Embriología (cuándo y cómo)

Los criterios y valores válidos están en `VALORES_CRITERIO` (`lib/types.ts`):

| Criterio | Valores |
|---|---|
| `capas` | `sin-tejidos`, `diblastico`, `triblastico` |
| `simetria` | `asimetrico`, `radial`, `birradial`, `bilateral`, `pentarradial` |
| `cavidad` | `no-aplica`, `acelomado`, `pseudocelomado`, `esquizocelomado`, `enterocelomado` |
| `blastoporo` | `no-aplica`, `boca`, `ano` |
| `segmentacion` | `no-aplica`, `espiral`, `radial`, `en-T`, `otra` |

Ejemplo:

```ts
embriologia: {
  cavidad: {
    valor: 'enterocelomado',
    fuentes: [{ tipo: 'apunte', archivo: 'equidodermos.md', lineas: [8, 9], cita: 'Son  animales  deuterostomados, enterocelomados' }],
  },
},
```

- Solo completá un criterio si el apunte lo afirma para ese grupo o para un grupo que lo contiene y el ticket lo indica.
- Las clases **heredan** la embriología del phylum automáticamente (lo resuelve `getEmbriologiaEfectiva`, T05).
  No copies los criterios del phylum en las clases.
- Si hay matices (ej. "para algunos autores…"), usá el campo `nota` del registro.

## 7. Plantilla del archivo de un taxón

Los archivos ya existen desde T04 (esqueleto). Solo hay que **completar** los arrays. No cambies `slug`,
`nivel`, `padre` ni `orden` salvo que el ticket lo pida.

```ts
import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'ctenophora',
  nombre: 'Ctenophora',
  nombreComun: 'Ctenóforos',
  nivel: 'phylum',
  padre: 'radiata',
  orden: 2,
  resumen: [
    {
      texto: 'Pequeño filo de animales marinos planctónicos casi transparentes, conocidos como "nueces de mar" o "medusas con peine". Existen aproximadamente 50 especies.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [599, 601], cita: 'animales marinos planctónicos casi transparentes' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    capas: {
      valor: 'triblastico',
      nota: 'El apunte los considera tripoblásticos aunque los ubica en Radiata.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [597, 597], cita: 'PHYLUM CTENOPHORA (TRIPOBLÁSTICOS)' }],
    },
  },
  sistemas: {
    excretor: [
      {
        texto: 'No tienen aparato excretor.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [611, 612], cita: 'No tienen aparatos excretor, respiratorio ni circulatorio' }],
      },
    ],
    sentidos: [
      {
        texto: 'En el polo aboral tienen un órgano sensorial característico que incluye un estatocisto.',
        fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [626, 633], cita: 'un órgano sensorial característico que incluye un estatocisto' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Coloblastos',
      datos: [
        {
          texto: 'En lugar de cnidocitos poseen coloblastos, células exclusivas del grupo que usan para atrapar el alimento (zooplancton).',
          fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [603, 605], cita: 'los  ctenóforos  poseen  coloblastos' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
```

(Este ejemplo es parcial. El contenido completo de Ctenophora se hace en T19.)

## 8. Procedimiento para cada ticket de contenido

1. Leé esta guía y el ticket.
2. Leé **todas** las líneas indicadas en el ticket con la herramienta de lectura (en bloques de ~150 líneas).
3. Para cada slug del ticket, abrí `data/taxa/<slug>.ts` y completá los campos.
4. Ejecutá `pnpm test`. Si falla una cita, corregí `cita` o `lineas` (no el `texto`).
5. Ejecutá `pnpm cobertura` y revisá la fila de cada slug del ticket: que tenga `resumen` y la mayor cantidad
   posible de sistemas **que el apunte describe**. No es un error que queden sistemas vacíos.
6. `pnpm lint && pnpm typecheck`.
7. Commit: `git commit -m "T<NN>: contenido <grupo>"`.

## 9. Checklist de calidad (revisar antes del commit)

- [ ] Ningún dato inventado o traído de memoria.
- [ ] Todos los fragmentos relevantes del rango de líneas fueron usados (releer el rango al final).
- [ ] Nada del encabezado de página ni de la bibliografía quedó en los textos.
- [ ] Cada clase tiene sus propios datos; el phylum solo tiene lo general.
- [ ] Los organismos tipo están aclarados en el texto ("En *X*, …").
- [ ] Los `ausente: true` están donde el apunte dice "carecen de…".
- [ ] Los ejemplos tienen el nombre científico limpio.
