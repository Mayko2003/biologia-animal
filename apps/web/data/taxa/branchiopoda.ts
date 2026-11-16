import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'branchiopoda',
  nombre: 'Branchiopoda',
  nombreComun: 'Branquiópodos',
  nivel: 'clase',
  padre: 'crustacea',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de crustáceos que incluye, en el Orden Diplostraca, a Daphnia (pulgas de agua): crustáceo planctónico del suborden de los cladóceros que de adulto mide hasta 5 o 6 mm, se alimenta de fitoplancton y habita una gran variedad de aguas continentales, desde cenagales hasta aguas de deshielo o salobres, preferiblemente en masas de agua pequeñas sin peces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [298, 308], cita: 'Daphnia, pulgas de agua' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Daphnia las hembras alcanzan hasta 5 o 6 mm y los machos son más pequeños, de tan sólo 2 mm; el cuerpo está protegido por un caparazón traslúcido de quitina, con una abertura central y cinco pares de extremidades torácicas que sirven para el filtrado; la cabeza tiene dos antenas y un gran ojo compuesto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [312, 316], cita: 'caparazón traslúcido de quitina' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'En Daphnia el cuerpo está protegido por un caparazón traslúcido de quitina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [313, 314], cita: 'un caparazón traslúcido' }],
      },
    ],
    digestivo: [
      {
        texto: 'En Daphnia el intestino tiene forma de gancho y cuenta con dos ciegos; cinco pares de extremidades torácicas sirven para el proceso de filtrado del alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 315], cita: 'forma de gancho' }],
      },
    ],
    sentidos: [
      {
        texto: 'En Daphnia la cabeza tiene dos antenas y un gran ojo compuesto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [316, 316], cita: 'gran ojo compuesto' }],
      },
    ],
    tegumento: [
      {
        texto: 'Cutícula quitinosa; en varios grupos forma un caparazón traslúcido que envuelve el cuerpo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Crustacea', titulo: 'Crustacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos asociados a los apéndices en forma de lámina (filopodios) usados para nadar y filtrar.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Branchiopoda', titulo: 'Branchiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los apéndices troncales llevan una pequeña lámina branquial en la parte externa que interviene en la respiración.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Branchiopoda', titulo: 'Branchiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto del plan crustáceo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Crustacea', titulo: 'Crustacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas antenales y maxilares del plan crustáceo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cadena nerviosa ventral con ganglios por segmento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Al desovar, los huevos quedan en el lodo del fondo (huevos de resistencia en varias especies).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Branchiopoda', titulo: 'Branchiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'El desarrollo se inicia con una larva nauplio y llega al adulto a través de varios cambios.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Branchiopoda', titulo: 'Branchiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Daphnia se usa en estudios sobre ecología y limnología, evolución y ecotoxicología, y es muy popular en acuicultura y acuariofilia como alimento para peces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 310], cita: 'ecología y limnología' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Daphnia',
      descripcion: 'pulga de agua cladócera planctónica de aguas continentales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 301], cita: 'Diplostraca (Daphnia, pulgas de' }],
    },
  ],
  notas: [],
};

export default taxon;
