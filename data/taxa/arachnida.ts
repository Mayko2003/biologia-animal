import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'arachnida',
  nombre: 'Arachnida',
  nombreComun: 'Arácnidos',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 3,
  resumen: [
    {
      texto: 'Constituye desde el punto de vista humano la mayor y más importante clase de quelicerados. Incluye diferentes órdenes en los que se ubican escorpiones o alacranes, palpígrados, esquizómidos, uropigios o vinagrillos, arañas, amblipigidos, ricinúlidos, pseudoescorpiones, solífugos o arañas sol, opiliónidos o papaitos piernas largas, ácaros y garrapatas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 162], cita: 'más importante clase de quelicerados' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Dos tagmas: prosoma y opistosoma (que puede estar segmentado o no). Apéndices: quelíceros, pedipalpos y cuatro pares de patas marchadoras; carecen de antenas.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Exoesqueleto quitinoso del plan artrópodo; muchas piezas bucales y patas llevan setas sensoriales.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso articulado que mudan periódicamente (ecdisis).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos asociados al exoesqueleto; en algunas articulaciones de las patas faltan músculos extensores, compensados por mecanismos elásticos cuticulares.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los quelíceros, junto a la boca, capturan o inyectan; muchos predigeren externamente la presa antes de succionarla.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Filotráqueas (pulmones en libro), tráqueas, o ambas a la vez; en muchos pequeños el intercambio es cutáneo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema abierto: en los arácnidos existen diez corazones, que aparecen como un tubo dorsal situado en una cámara pericárdica, en la mitad anterior del abdomen.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas coxales que desembocan en la base de las patas; además tubos de Malpighi.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso concentrado, con fusión de numerosos ganglios formando una masa cerebral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Suelen tener uno o más pares de ojos simples, en lugar de grandes ojos compuestos; carecen de antenas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; los pedipalpos masculinos se modifican como órganos copuladores en varios grupos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Ponen huevos; el desarrollo puede ser directo o indirecto según el grupo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Mayormente terrestres y en su gran mayoría depredadores (arañas, escorpiones); los ácaros incluyen formas fitófagas, saprófagas y parásitas.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Araneida',
      descripcion: 'arañas, la clase más importante de quelicerados',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arachnida/', titulo: 'Arachnida - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Scorpionida',
      descripcion: 'escorpiones',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Acari',
      descripcion: 'ácaros y garrapatas',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
