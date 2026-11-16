import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'cubozoa',
  nombre: 'Cubozoa',
  nombreComun: 'Cubozoos',
  nivel: 'clase',
  padre: 'cnidaria',
  orden: 3,
  resumen: [
    {
      texto: '15 especies descriptas, todas semitropicales o tropicales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [557, 558], cita: '15 especies descriptas para los Cubozoos' }],
    },
    {
      texto: 'Viven en aguas costeras y pueden ser peligrosas para los bañistas ("avispas de mar"); algunas son mortales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [560, 562], cita: 'pueden ser peligrosas para los bañistas' }],
    },
    {
      texto: 'Unas 51 especies conocidas hasta 2018, agrupadas en dos órdenes (Carybdeida y Chirodropida); fueron consideradas un orden de Scyphozoa hasta 1973.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las cubomedusas tienen campana cuadrada, no poseen una estructura a modo de velo (velario), y llevan cuatro tentáculos o grupos de tentáculos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [576, 578], cita: 'no poseen una estructura a modo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Epidermis y gastrodermis separadas por la mesoglea, como en todos los cnidarios.',
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Cuerpo gelatinoso sin esqueleto.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Fuertes nadadores que se impulsan por las contracciones de la campana.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Cubozoa/', titulo: 'Cubozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'La cavidad gastrovascular está dividida por cuatro septos en un estómago central y cuatro bolsas gástricas; los septos llevan filamentos gástricos con nematocistos y glándulas digestivas.',
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios; intercambio por la superficie corporal.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin aparato circulatorio; la cavidad gastrovascular distribuye el alimento.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores; los desechos salen por la única abertura de la cavidad gastrovascular.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Anillo nervioso en la base de la campana que coordina los movimientos pulsátiles; más desarrollado que en otras medusas.',
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Cuatro ropalios con seis ojos cada uno (24 en total), incluidos ojos verdaderos con retina, córnea y lente; además un estatolito que mantiene orientados los ojos.',
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Son dioicos y las gónadas se ubican en la cavidad gastrovascular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 586], cita: 'son dioicos y las gónadas se ubican' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Fecundación externa en Chirodropida e interna en Carybdeida (ovovivíparos, con transferencia de espermatóforos); el pólipo se transforma por completo en medusa, sin estrobilación.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en aguas costeras; algunas son mortales: la muerte puede producirse entre 3 y 20 minutos después de la picadura (Australia–Indopacífico).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [561, 562], cita: '3 a 20 minutos se produce la muerte' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Chironex fleckeri',
      descripcion: 'avispa de mar, con un veneno que puede ser mortal para el ser humano',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Carybdea murrayana',
      descripcion: 'cubomedusa de picadura dolorosa pero no mortal',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'discrepancia',
      texto: 'El apunte dice que las cubomedusas no poseen velario; la literatura describe en cambio que el borde de la campana se pliega hacia adentro formando un velario que restringe la abertura y potencia el nado a chorro.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [576, 577], cita: 'no poseen una estructura a modo de velo' }, { tipo: 'web', url: 'https://en.wikipedia.org/wiki/Box_jellyfish', titulo: 'Box jellyfish - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Cubozoa/', titulo: 'Cubozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
