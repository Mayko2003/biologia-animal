import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'diplura',
  nombre: 'Diplura',
  nombreComun: 'Dipluros',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 42], cita: 'escondido en un repliegue' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Hexápodos alargados, sin pigmentación ni ojos ni alas; el nombre viene de los dos cercos laterales al final del cuerpo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cutícula fina sin pigmentación (fauna intersticial del suelo).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Piezas bucales entognatas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sistema traqueal con espiráculos, del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Sin ojos; cercos sensoriales en el extremo del abdomen.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual del plan hexápodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Ponen huevos; el desarrollo es directo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Miembros abundantes del edafón (la biota del suelo); fauna intersticial sin pigmentación.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Campodea',
      descripcion: 'género de dipluros',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Japygidae',
      descripcion: 'familia de dipluros con cercos en pinza',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplura', titulo: 'Diplura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
