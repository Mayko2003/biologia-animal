import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'anthozoa',
  nombre: 'Anthozoa',
  nombreComun: 'Antozoos',
  nivel: 'clase',
  padre: 'cnidaria',
  orden: 4,
  resumen: [
    {
      texto: 'Pólipos coloniales marinos sin fase de medusa, en aguas profundas o costeras de todo el mundo; fijos sobre rocas, maderas y conchas (comensales).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 495], cita: 'pólipos coloniales marinos sin fase de medusa' }],
    },
    {
      texto: 'Comprende corales pétreos (esqueleto de carbonato de calcio), corales córneos, abanicos de mar y pensamientos de mar; se citan 6000 especies de colores vivos, y algunas especies solitarias como Fungia.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [495, 498], cita: 'se citan 6000 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Metridium (anémona de mar común): pólipo solitario de 1–10 cm de alto por 1–5 cm de ancho, de colores muy vivos; cuerpo en forma de columna fijado por un disco pedal; en la superficie oral un disco con varios cientos de tentáculos huecos y lobulados, entre los que está la boca.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [445, 449], cita: 'pólipo solitario de unos 1-10 cm de alto' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Como en todos los cnidarios, la pared del cuerpo consta de epidermis, gastrodermis (que recubre la cavidad gastrovascular) y entre ambas la mesoglea; en los antozoos la mesoglea es una gruesa capa de tejido conjuntivo fibroso con aspecto de gelatina, con o sin células mesenquimáticas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [325, 330], cita: 'en Scyphozoos y Anthozoos' }],
      },
    ],
    esqueleto: [
      {
        texto: 'En los corales pétreos el esqueleto es de CaCO3 (excepto en algunos corales córneos como Gorgonia), segregado por la epidermis de la mitad inferior de la columna y la placa basal. El cáliz aloja al pólipo; la placa basal origina escleroseptos calcáreos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [500, 504], cita: 'Su esqueleto pétreo es de CaCO3' }],
      },
      {
        texto: 'Los distintos zooides contactan entre sí por prolongaciones de las superficies corporales a la altura de las cavidades gastrovasculares; las configuraciones esqueléticas dependen del patrón de crecimiento de la colonia.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [504, 507], cita: 'contactan entre sí por prolongaciones' }],
      },
    ],
    digestivo: [
      {
        texto: 'En Metridium la boca se continúa con la faringe tubular, a lo largo de la cual corre el sifonoglifo, un surco por el que circula agua hasta el interior de la cavidad gastrovascular. La cavidad está dividida por septos o mesenterios en número de 12 o múltiplo (completos si llegan a la faringe), provistos de cnidocitos en los extremos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [449, 452], cita: 'el sifonoglifo, especie de surco' }],
      },
    ],
    reproductor: [
      {
        texto: 'La mayoría de las anémonas son hermafroditas pero producen un único tipo de gameto durante su período reproductor; las gónadas son gastrodérmicas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [455, 456], cita: 'Las gónadas son gastrodérmicas' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'En algunas especies hay reproducción asexual por fisión longitudinal y pocos casos por fisión transversal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [454, 455], cita: 'reproducción asexual por fisión longitudinal' }],
    },
    {
      texto: 'Los óvulos pueden ser fecundados en la cavidad gastrovascular (el desarrollo ocurre en las cámaras septales) o la fecundación ocurre en el agua; de la larva plánula (que se alimenta de vitelo o plancton) emerge una anémona juvenil ciliada que nada, y pronto el pólipo se fija y forma los tentáculos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [456, 467], cita: 'De la larva plánula emerge una anémona juvenil' }],
    },
    {
      texto: 'En algunos corales pétreos se forma un individuo nuevo por levantamiento del cáliz sobre el preexistente; en los madreporarios hay gemación intratentacular y extratentacular.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [509, 511], cita: 'gemación intratentacular y extratentacular' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Pólipos coloniales marinos de aguas profundas o costeras en todo el mundo, fijos sobre rocas, maderas y conchas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 495], cita: 'en aguas profundas o costeras en todo el mundo' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Metridium',
      descripcion: 'anémona de mar común, pólipo solitario',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [445, 446], cita: 'Metridium (Anémona de mar común' }],
    },
    { nombre: 'Gorgonia', descripcion: 'coral córneo', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 493], cita: 'Tubipora, Gorgonia, Corallium, Renilla' }] },
    { nombre: 'Corallium', descripcion: 'coral', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 493], cita: 'Tubipora, Gorgonia, Corallium, Renilla' }] },
    { nombre: 'Tubipora', descripcion: 'coral pétreo colonial', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 493], cita: 'Tubipora, Gorgonia, Corallium, Renilla' }] },
    { nombre: 'Renilla', descripcion: 'pensamiento de mar', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 493], cita: 'Tubipora, Gorgonia, Corallium, Renilla' }] },
    {
      nombre: 'Fungia',
      descripcion: 'coral solitario',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [498, 498], cita: 'algunas especies solitarias como Fungia' }],
    },
  ],
  notas: [],
};

export default taxon;
