import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'symphyla',
  nombre: 'Symphyla',
  nombreComun: 'Sínfilos',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 4,
  resumen: [
    {
      texto: 'Una de las cuatro clases de miriápodos junto a Chilopoda, Diplopoda y Pauropoda.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [462, 463], cita: 'Pauropoda y Simphyla' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Miriápodos pequeños (0,5-8 mm), blancos, de aspecto frágil; cuerpo en cabeza y tronco con 12 pares de patas; se diferencian por el segundo par de maxilas fusionadas en un labio complejo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cuerpo blando, sin pigmentación.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Cutícula delgada; sin esqueleto rígido.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Segundo par de maxilas fusionadas en un labio complejo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Un par de espiráculos en la cabeza abren a las tráqueas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto del plan miriápodo, con corazón tubular dorsal.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Myriapoda', titulo: 'Myriapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Cadena nerviosa ventral del plan artrópodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Un par de antenas moniliformes en la cabeza; sin ojos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; el juvenil agrega pares de patas con las mudas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Del huevo salen juveniles con menos pares de patas que se completan con las mudas (anamorfosis).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Unas 160-200 especies; habitan lugares húmedos: suelo, hojarasca, humus, musgo, bajo piedras y troncos podridos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Scutigerellidae',
      descripcion: 'familia de sínfilos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Scolopendrellidae',
      descripcion: 'familia de sínfilos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Symphyla', titulo: 'Symphyla - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
