import type { Taxon } from '@/lib/types';

const A = 'annelidos.md' as const;
const P = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'annelida',
  nombre: 'Annelida',
  nombreComun: 'Anélidos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 4,
  resumen: [
    {
      texto: '(Annelus = anillos.) Unas 12000 especies conocidas de animales con verdadera segmentación, llamados comúnmente lombrices de tierra, sanguijuelas, gusanos marinos, gusanos tubícolas, etc.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [12, 16], cita: 'unas 12000 especies conocidas' }],
    },
    {
      texto: 'Existen especies que viven en agua dulce, en el mar, en la tierra y hasta especies hematófagas de vertebrados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [18, 20], cita: 'en agua dulce, en el' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo está compuesto por numerosos segmentos semejantes entre sí en forma de anillo, llamados somitos o metámeros; la segmentación se manifiesta tanto en la morfología externa como en la organización interna. Cada somito está separado del otro por un septo transversal atravesado por el tubo digestivo, el cordón nervioso, vasos sanguíneos y el sistema excretor.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 28], cita: 'somitos o metámeros' }],
    },
    {
      texto: 'Existen quetas (apéndices quitinosos diminutos en forma de bastón) en cada uno de los somitos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [30, 32], cita: 'quetas (apéndices quitinosos diminutos' }],
    },
  ],
  embriologia: {
    segmentacion: {
      valor: 'espiral',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [17, 19], cita: 'espiral (Platyhelminthes, Annelida, Nemertea' }],
    },
    cavidad: {
      valor: 'esquizocelomado',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Annelida/', titulo: 'Annelida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'La pared del cuerpo consta de una epidermis, músculos circulares y longitudinales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 34], cita: 'La pared el cuerpo consta' }],
      },
    ],
    digestivo: [
      {
        texto: 'El tubo digestivo es completo, tubular, y se extiende a lo largo de todo el cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [35, 35], cita: 'El tubo digestivo es completo' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La respiración es cutánea, pero en algunos gusanos tubícolas es por branquias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [40, 40], cita: 'La respiración es cutánea' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio cerrado con vasos longitudinales (vaso dorsal y vaso ventral) con ramas laterales en cada somito; el plasma sanguíneo contiene hemoglobina disuelta y amebocitos libres.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [36, 38], cita: 'sistema circulatorio es cerrado' }],
      },
    ],
    excretor: [
      {
        texto: 'Un par de nefridios por somito que eliminan los productos de desecho directamente del celoma y el torrente circulatorio hacia el exterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [41, 43], cita: 'un par de nefridios por' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un par de ganglios cerebrales con conectivos que conectan con un cordón nervioso macizo y doble ventral que se extiende a lo largo de todo el cuerpo, con un ganglio y un par de nervios laterales en cada segmento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 47], cita: 'cordón nervioso macizo y doble' }],
      },
    ],
    sentidos: [
      {
        texto: 'Células sensitivas, órganos para el tacto, el gusto y la percepción de la luz.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [48, 49], cita: 'órganos para el tacto, el' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos son unidos (monoicos) o separados según el grupo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [51, 52], cita: 'Los sexos son unidos' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Esqueleto hidrostático: la presión del líquido celómico, dividido en metámeros, permite los movimientos peristálticos de la locomoción.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Annelida', titulo: 'Annelida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'La pared del cuerpo tiene una capa de músculos circulares externa y una de músculos longitudinales interna.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Annelida/', titulo: 'Annelida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Annelida', titulo: 'Annelida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Segmentación metamerica (somitos)',
      datos: [
        {
          texto: 'Verdadera segmentación: segmentos en forma de anillo (somitos o metámeros) separados por septos transversales, reflejada en la morfología externa y la organización interna.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 28], cita: 'separado del otro por un' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Desarrollo directo en hirudíneos y oligoquetos, o con una fase larvaria llamada trocósfera en poliquetos; puede existir reproducción asexual por gemación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [51, 53], cita: 'fase larvaria llamada trocósfera' }],
    },
  ],
  bioecologia: [
      {
        texto: 'Se encuentran en la mayoría de los ambientes húmedos, sobre todo en el mar, pero también en agua dulce; hay especies terrestres.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Annelida', titulo: 'Annelida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
