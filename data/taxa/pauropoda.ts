import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'pauropoda',
  nombre: 'Pauropoda',
  nombreComun: 'Paurópodos',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 3,
  resumen: [
    {
      texto: 'Una de las cuatro clases de miriápodos. Respiran a través de la piel, que es en estos casos delgada y blanda.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [462, 489], cita: 'delgada y blanda (Paurópodos)' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Diminutos (0,5-2 mm), de cuerpo blando sin calcificar, con antenas ramificadas y entre 9 y 11 pares de patas; sin ojos pero con un par de órganos sensoriales parecidos a ojos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cutícula blanda, sin calcificar.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Cutícula blanda sin calcificar; sin esqueleto rígido.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos asociados a los apéndices y al cuerpo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Un par de mandíbulas y el primer par de maxilas fusionadas en un gnatoquilario; falta el segundo par de maxilas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin aparato respiratorio.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin aparato circulatorio.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Tubos de Malpighi, como en los demás miriápodos e insectos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso del plan artrópodo (cadena ventral).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sin ojos; un par de órganos sensoriales con aspecto de ojos y antenas con 4-6 artejos y dos ramas con flagelos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual del plan miriápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Del huevo sale un juvenil con menos pares de patas que va agregando con las mudas (anamorfosis).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Saprófagos; viven en el suelo, humus, bajo piedras y troncos en descomposición.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Pauropus',
      descripcion: 'género típico de paurópodos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Hexamerocerata y Tetramerocerata',
      descripcion: 'órdenes de la clase',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pauropoda', titulo: 'Pauropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
