import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'enteropneusta',
  nombre: 'Enteropneusta',
  nombreComun: 'Enteropneustos, gusanos bellota',
  nivel: 'clase',
  padre: 'hemichordata',
  orden: 1,
  resumen: [
    {
      texto: 'Gusanos con probóscide en forma de bellota (gusanos bellota) que utilizan para excavar en el sedimento; es la clase más conocida del filo. Son vermiformes solitarios que viven en galerías, con numerosos poros branquiales en la parte anterior del tronco y una faringe con hendiduras branquiales implicada también en la recolección del alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [689, 695], cita: 'forma de bellota (gusanos' }],
    },
    {
      texto: 'Tubo digestivo rectilíneo, a diferencia de los pterobranquios; suelen medir entre 2 y 2,5 cm, viven en el litoral e incluyen unas 70 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [695, 697], cita: 'tubo digestivo rectilíneo' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Gusanos bellota: probóscide en forma de bellota (prosoma) para excavar, collar (mesosoma) y tronco (metasoma) vermiforme; suelen medir entre 2 y 2,5 cm.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cuerpo blando; la epidermis lleva células neurosensoriales y fotorreceptoras.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto mineralizado.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'El prosoma excava galerías en el sedimento mediante movimientos peristálticos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo rectilíneo (a diferencia de los pterobranquios); la faringe con hendiduras branquiales recolecta el alimento; un divertículo bucal (estomocorda) se extiende en el protocele.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Numerosos poros branquiales en la parte anterior del tronco (hasta unas cien hendiduras).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Aparato circulatorio abierto: un vaso dorsal (sangre postero-anterior), un vaso ventral (antero-posterior) y un corazón dorsal sobre la estomocorda.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glomérulo: una red de senos sanguíneos alrededor de la estomocorda, de probable función excretora.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Plexo nervioso subepidérmico (similar al de los equinodermos) con dos engrosamientos que forman cordones dorsal y ventral, unidos por un anillo en el collar.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Células neurosensoriales en la epidermis y células fotorreceptoras.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Sexos separados; gónadas en hileras dorsolaterales en la parte anterior del tronco.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'De los huevos fertilizados se desarrollan larvas ciliadas, parecidas a las de los equinodermos, de las que salen los adultos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Solitarios, viven en galerías que excavan en el sedimento del litoral.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [692, 696], cita: 'galerías que excavan' }],
    },
    {
      texto: 'Solitarios; viven en galerías que excavan en el sedimento del litoral.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Balanoglossus',
      descripcion: 'género típico de gusanos bellota',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Saccoglossus',
      descripcion: 'género de enteropneustos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
