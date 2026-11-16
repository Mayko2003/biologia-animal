import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'gnathostomata',
  nombre: 'Gnathostomata',
  nombreComun: 'Gnatóstomos (vertebrados con mandíbulas)',
  nivel: 'superclase',
  padre: 'vertebrata',
  orden: 2,
  resumen: [
    {
      texto: 'Superclase de los vertebrados con mandíbulas; en el apunte se ubica dentro de Phylum Chordata › Subphylum Vertebrata y agrupa a los peces: Chondrichthyes (peces cartilaginosos) y Osteichthyes (peces óseos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [9, 16], cita: 'Superclase GNATOSTOMATHA PECES' }],
    },
    {
      texto: 'Vertebrados caracterizados por poseer mandíbulas articuladas; otras características distintivas son los dientes verdaderos, los apéndices pares (aletas pectorales y pélvicas), las vainas de mielina y un sistema de inmunidad adquirida.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Mandíbulas articuladas con dientes verdaderos y apéndices pareados (aletas pectorales y pélvicas, y sus homólogos terrestres: brazos, piernas, alas).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
    {
      texto: 'Tegumento de tipo vertebrado (epidermis, dermis e hipodermis) con escamas en la mayoría de las formas acuáticas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    esqueleto: [
    {
      texto: 'Mandíbulas articuladas derivadas de arcos del esqueleto visceral; esqueleto óseo o cartilaginoso que sostiene los apéndices pares.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    muscular: [
    {
      texto: 'Apéndices pares con musculatura propia; el aparato locomotor deriva de la natación ancestral.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    digestivo: [
    {
      texto: 'Dientes verdaderos en los márgenes de las mandíbulas, la cavidad oral y la faringe; aparato digestivo completo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    respiratorio: [
    {
      texto: 'Respiración branquial en las formas acuáticas y pulmonar en las terrestres.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    circulatorio: [
    {
      texto: 'Sistema circulatorio cerrado con corazón en cámaras; circuito branquial en peces y circulación doble en muchos terrestres.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    excretor: [
    {
      texto: 'Aparato renal como órgano excretor principal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    nervioso: [
    {
      texto: 'Vainas de mielina alrededor de las neuronas; sistema nervioso central con encéfalo y médula espinal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    sentidos: [
    {
      texto: 'Órganos de los sentidos de tipo vertebrado: ojos, tangorreceptores, olfato, oído y línea lateral en las formas acuáticas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    reproductor: [
    {
      texto: 'Reproducción sexual con sexos generalmente separados y fecundación interna o externa.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Reproducción sexual; en los peces predominan la fecundación externa y la oviparidad, mientras que los condrictios y muchos vertebrados terrestres tienen fecundación interna.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Agrupa a la mayoría de los vertebrados actuales, con representantes en todos los ambientes acuáticos y terrestres.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Gnathostomata', titulo: 'Gnathostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Squalus',
      descripcion: 'tiburón, ejemplo de condrictio gnatóstomo en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [81, 81], cita: 'ORGANIZACIÓN DE SQUALUS O' }],
    },
    {
      nombre: 'perca',
      descripcion: 'pez óseo gnatóstomo, organismo tipo del apunte',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [238, 238], cita: 'Morfología de una perca:' }],
    },
  ],
  notas: [],
};

export default taxon;
