import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'collembola',
  nombre: 'Collembola',
  nombreComun: 'Colémbolos',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 4,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 44], cita: 'en un repliegue cefálico' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Hexápodos diminutos (≤5-6 mm), ubicuos en todos los continentes; fúrcula retráctil con la que se propulsan, retenida por el tenáculo; ojos simples variables (1-8 por lado) detrás de las antenas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Tegumento que puede transportar esporas; algunas especies liberan fluidos repelentes por pseudocelos ante un ataque.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto delgado del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos del plan hexápodo; la fúrcula permite saltar muchas veces la longitud del cuerpo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Piezas bucales entognatas; se alimentan de materia orgánica en descomposición y esporas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin sistema traqueal desarrollado en la mayoría; respiración a través del tegumento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón dorsal tubular del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Tubos de Malpighi, como en insectos y miriápodos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cadena nerviosa ventral del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos simples de número variable (1-8 por lado) y un órgano postantenal detrás de las antenas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; el desarrollo es directo y los juveniles se parecen a los adultos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Desarrollo directo; los juveniles son similares a los adultos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Ubicuos y muy numerosos en el suelo (los hexápodos más abundantes de la Tierra); favorecen la simbiosis planta-hongo al transportar esporas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Isotoma',
      descripcion: 'género de colémbolos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Poduromorpha y Entomobryomorpha',
      descripcion: 'órdenes de la clase',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Collembola', titulo: 'Collembola - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
