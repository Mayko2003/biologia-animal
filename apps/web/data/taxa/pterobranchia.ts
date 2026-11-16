import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'pterobranchia',
  nombre: 'Pterobranchia',
  nombreComun: 'Pterobranquios',
  nivel: 'clase',
  padre: 'hemichordata',
  orden: 2,
  resumen: [
    {
      texto: 'Más pequeños que los enteropneustos; sésiles y coloniales o pseudocoloniales (género Rhabdopleura), viven en tubos que ellos mismos fabrican y se alimentan con brazos provistos de tentáculos ciliados situados en la base del collar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [699, 703], cita: 'brazos provistos de tentáculos' }],
    },
    {
      texto: 'No tienen una probóscide alargada como los enteropneustos sino modificada en forma de escudo para adherirse al sustrato; con un par o sin poros branquiales y un tubo digestivo en forma de "U". Se han recogido en dragados profundos en la Antártida y las Bermudas; se conocen 3 géneros y 17 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [703, 707], cita: 'forma de escudo' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Tres secciones: prosoma en forma de trompa ancha y aplanada (con glándulas que segregan el tubo protector), mesosoma discoidal con tentáculos ciliados que filtran el alimento, y metasoma con tronco en saco y pedúnculo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La trompa contiene glándulas que segregan un tubo de material orgánico en el que el animal pasa su vida adulta.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto mineralizado; viven dentro de un tubo orgánico que ellos mismos fabrican.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Musculatura de la pared corporal y del pedúnculo, propia de un animal sésil.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tentáculos ciliados del mesosoma filtran el alimento del agua; el tronco incluye un intestino tubular simple en forma de «U».',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Cephalodiscus y Atubaria tienen un solo par de hendiduras branquiales en la faringe; Rhabdopleura no posee ninguna.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Aparato circulatorio abierto del plan hemicordado (vasos dorsal y ventral, corazón rudimentario).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glomérulo, estructura excretora característica de los hemicordados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Plexo nervioso subepidérmico con cordón dorsal hueco (plan hemicordado).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Células neurosensoriales epidérmicas (plan hemicordado); los tentáculos captan el alimento del agua.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hemichordata', titulo: 'Hemichordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Forman colonias o pseudocolonias (Rhabdopleura); el zoide sale del tubo para alimentarse.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Reproducción sexual del plan hemicordado, además de propagación colonial por brotes en los géneros coloniales.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Sésiles, coloniales o pseudocoloniales; viven en tubos que fabrican y se han recogido en dragados profundos (Antártida, Bermudas).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Rhabdopleura',
      descripcion: 'género pseudocolonial citado en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [701, 701], cita: 'del género Rhabdopleura' }],
    },
    {
      nombre: 'Rhabdopleura',
      descripcion: 'género colonial o pseudocolonial',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Cephalodiscus',
      descripcion: 'género con un par de hendiduras branquiales',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Atubaria',
      descripcion: 'género que no fabrica tubo',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pterobranchia', titulo: 'Pterobranchia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
