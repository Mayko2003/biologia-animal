import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'hemichordata',
  nombre: 'Hemichordata',
  nombreComun: 'Hemicordados',
  nivel: 'phylum',
  padre: 'deuterostomia',
  orden: 2,
  resumen: [
    {
      texto: 'Filo de animales deuteróstomos, de aspecto vermiforme, relacionado con los cordados: no presentan una auténtica notocorda sino una estomocorda (expansión del tubo digestivo), y una faringe con hendiduras (faringotremas) que usan para filtrar el alimento, como los cordados. En la actualidad se conocen solo unas 100 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [620, 632], cita: 'expansión del tubo digestivo' }],
    },
    {
      texto: 'Son animales exclusivamente marinos y bentónicos, divididos en dos clases: Enteropneustos y Pterobranquios. Fueron considerados cordados hasta comprobar que la estomocorda no era homóloga de la notocorda, por lo que se los clasificó como un nuevo filo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [638, 660], cita: 'un nuevo filo' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo blando en forma de gusano, no segmentado internamente, con simetría bilateral y dos ejes corporales definidos; coloraciones del blanco al violeta claro y tamaños desde unos pocos milímetros hasta 250 cm de largo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [642, 648], cita: 'un cuerpo blando en' }],
    },
    {
      texto: 'Organización característica en tres partes: prosoma (probóscide; en Pterobranchia en forma de escudo), mesosoma (collar donde se sitúa la boca) y metasoma (tronco largo); el celoma se divide en proceloma, mesoceloma y metaceloma.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [650, 657], cita: 'proceloma, mesoceloma y metaceloma' }],
    },
    {
      texto: 'El tronco, especialmente en los enteropneustos, incluye hasta cien hendiduras branquiales para respirar y dejar salir el agua absorbida con el alimento; en los pterobranquios solo hay un par de branquias o ninguna.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [662, 667], cita: 'cien hendiduras branquiales' }],
    },
  ],
  embriologia: {
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [644, 644], cita: 'una simetría bilateral' }],
    },
    cavidad: {
      valor: 'enterocelomado',
      nota: 'El celoma queda dividido en proceloma, mesoceloma y metaceloma, situados en la sección correspondiente del cuerpo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'radial',
      nota: 'División radial propia de los deuterostomados.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Deuterostome', titulo: 'Deuterostome - Wikipedia in English', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    circulatorio: [
      {
        texto: 'Sistema cardiovascular abierto de configuración primitiva: dos únicos vasos sanguíneos en el prosoma y el mesosoma, y un "corazón" rudimentario formado por un único vaso contráctil que bombea hacia el vaso ventral; el flujo es unidireccional.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [634, 687], cita: 'aparato circulatorio abierto muy' }],
      },
    ],
    excretor: [
      {
        texto: 'Poseen una estructura única llamada glomérulo para la excresión.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [634, 635], cita: 'para la excresión' }],
      },
    ],
    nervioso: [
      {
        texto: 'Presentan un cordón nervioso dorsal y hueco.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [635, 635], cita: 'cordón nervioso dorsal y' }],
      },
    ],
    tegumento: [
      {
        texto: 'Cuerpo blando en forma de gusano, con las tres regiones características (prosoma, mesosoma y metasoma).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto mineralizado.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'En los enteropneustos el prosoma excava galerías en el sedimento mediante movimientos peristálticos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Hendiduras faríngeas ciliadas en la primera parte del intestino («intestino branquial»); en los enteropneustos un divertículo bucal (estomocorda) se extiende en el protocele.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Las hendiduras branquiales de la faringe permiten la salida del agua y la respiración; los enteropneustos tienen hasta cien y los pterobranquios un par o ninguna.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Receptores sensoriales constituidos por células neurosensoriales en la epidermis y células fotorreceptoras.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Sexos separados; las gónadas se disponen en hileras dorsolaterales en la parte anterior del tronco.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Enteropneusta', titulo: 'Enteropneusta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Estomocorda',
      datos: [
        {
          texto: 'En los enteropneustos hay un divertículo del estómago que llega a la cavidad oral llamado estomocorda; se consideró un posible precursor de la notocorda, pero como no presenta parecido esencial ni funciona como esqueleto hidrostático, esa idea fue prácticamente abandonada.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [669, 674], cita: 'cavidad oral, llamada estomocorda' }],
        },
      ],
    },
    {
      titulo: 'Hendiduras faríngeas',
      datos: [
        {
          texto: 'Faringe con hendiduras (faringotremas) usadas para filtrar el alimento, compartida con los cordados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [630, 631], cita: 'hendiduras (faringotremas), que usan' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Exclusivamente marinos; todos son bentónicos cuando adultos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [636, 659], cita: 'cuando son adultos, son' }],
    },
    {
      texto: 'De los huevos fertilizados se desarrollan larvas ciliadas, parecidas a las de los equinodermos, de las que salen los adultos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'No presentan una auténtica notocorda sino una estomocorda (expansión del tubo digestivo); por eso dejaron de considerarse cordados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [620, 640], cita: 'no era homólogo de' }],
    },
    {
      tipo: 'aclaracion',
      texto: 'Los hemicordados son el grupo hermano de los equinodermos y con ellos conforman el clado Ambulacraria.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
