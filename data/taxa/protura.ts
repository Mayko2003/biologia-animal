import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'protura',
  nombre: 'Protura',
  nombreComun: 'Proturos',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 40], cita: 'Artrópodos primitivamente ápteros' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Hexápodos de ~1 mm (0,5-2,5 mm), inconspicuos habitantes del suelo; sin antenas (posible reducción secundaria) ni ojos; un par de «pseudóculos» cefálicos con función olfatoria o quimiosensorial.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cutícula fina, sin pigmentación (hábito subterráneo).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Músculos del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Piezas bucales entognatas (protegidas dentro de la cápsula cefálica).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La mayoría sin sistema traqueal; algunos (suborden Eosentomoidea) tienen espiráculos en el segundo y tercer segmento torácico.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Sin antenas ni ojos; pseudóculos con función olfatoria o quimiosensorial.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; desarrollo con anamorfosis (el juvenil agrega segmentos abdominales).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Anamorfosis: el juvenil nace con menos segmentos abdominales y los va agregando con las mudas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Unas 750 especies; ubicuos en suelos, sobre todo forestales y no muy ácidos, donde alcanzan densidades notables.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Acerentomon',
      descripcion: 'género típico de proturos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Eosentomidae',
      descripcion: 'familia de proturos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
