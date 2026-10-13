import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'brachiopoda',
  nombre: 'Brachiopoda',
  nombreComun: 'Braquiópodos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 7,
  resumen: [
    {
      texto: 'Se conocen unas 340 especies marinas; parecidos a moluscos bivalvos pues poseen una concha con dos valvas (dorsal y ventral). Habitan en el fondo del mar. Se reconocen dos Clases: Articulata e Inarticulata.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [395, 416], cita: 'unas 340 especies marinas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las valvas en forma de cuchara contienen las partes blandas del animal; son calcáreas y están cubiertas externamente por el perióstraco orgánico. La valva ventral, que es mayor, tiene un pico saliente perforado para permitir el paso de un pedúnculo de fijación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 402], cita: 'un pedúnculo de fijación' }],
    },
    {
      texto: 'El verdadero cuerpo solo ocupa la parte posterior de las valvas y la parte interior de las mismas está tapizada por el manto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [404, 406], cita: 'tapizada por el manto' }],
    },
  ],
  embriologia: {
    cavidad: {
      valor: 'enterocelomado',
      nota: 'Celomados; no siempre se forma el celoma por procesos de enterocelia.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'ano',
      nota: 'Desarrollo típicamente deuteróstomo, pese a estar en Lophotrochozoa; los lofoforados fueron considerados deuterostomados clásicamente.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'radial',
      nota: 'Segmentación típicamente deuteróstoma.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    esqueleto: [
      {
        texto: 'Concha con dos valvas calcáreas (dorsal y ventral) en forma de cuchara, cubiertas externamente por un perióstraco orgánico.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [397, 400], cita: 'valvas en forma de cuchara' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los tentáculos ciliados del lofóforo arrastran pequeños organismos que les sirven de alimento hacia el surco que conduce a la boca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 410], cita: 'que conduce a la boca' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los largos tentáculos ciliados del lofóforo determinan la circulación del agua por la cavidad del manto, para la respiración.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 409], cita: 'para la respiración' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados y la fecundación es externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 412], cita: 'la fecundación es externa' }],
      },
    ],
    tegumento: [
      {
        texto: 'Dos valvas (braquial y pedicular) secretadas por repliegues del manto, que son extensiones del metasoma.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos aductores cierran las valvas y abductores las abren; en los inarticulados la presión celómica ayuda a abrirlas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Aparato circulatorio abierto, con un pequeño corazón suspendido en el metacele sobre el estómago.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Tienen dos nefridios con un nefrostoma ciliado y un tubo que desemboca en un nefridioporo lateral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso poco evolucionado: un par de ganglios, uno dorsal y otro ventral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sin órganos sensoriales salvo excepciones: en una especie de Lingula se describe un par de estatocistos.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Lofóforo',
      datos: [
        {
          texto: 'El lofóforo tiene forma de W y está bordeado por largos tentáculos ciliados que determinan la circulación del agua por la cavidad del manto, para la respiración, y arrastran pequeños organismos alimenticios hacia el surco que conduce a la boca.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 410], cita: 'una forma de W' }],
        },
      ],
    },
    {
      titulo: 'Pedúnculo',
      datos: [
        {
          texto: 'La valva ventral (la mayor) tiene un pico saliente perforado para permitir el paso de un pedúnculo de fijación.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [401, 402], cita: 'permitir el paso de' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Fecundación externa; durante el desarrollo puede observarse una larva nadadora.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 414], cita: 'una larva nadadora' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Marinos bentónicos: habitan en el fondo del mar y se fijan por un pedúnculo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 402], cita: 'el fondo del mar' }],
    },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'discrepancia',
      texto: 'Los braquiópodos fueron considerados deuterostomados por su desarrollo (segmentación típicamente deuteróstoma, celoma por enterocelia); los datos moleculares los ubican en Lophotrochozoa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [8, 8], cita: 'Brachiopoda y Chaetognatha. Caracteres generales' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
