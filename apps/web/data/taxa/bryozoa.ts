import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;
const P = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'bryozoa',
  nombre: 'Bryozoa',
  nombreComun: 'Briozoos',
  sinonimos: ['Ectoprocta'],
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 6,
  resumen: [
    {
      texto: 'Comprende unas 4000 especies marinas o de ambientes salobres, algunas dulceacuícolas. Se parecen a los hidroideos coloniales y corales por su aspecto pero su estructura interna es superior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [358, 370], cita: 'unas 4000 especies marinas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Forman colonias por brotación a partir de un individuo; las colonias son de regular tamaño y diferentes formas: placas incrustantes o agregaciones cupuliformes, tubuliformes, arborescentes, en penachos, etc.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [364, 366], cita: 'colonias por brotación' }],
    },
    {
      texto: 'Cada individuo se halla dentro de una cámara o zooecio y cada individuo es un zooide.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [372, 372], cita: 'una cámara o zooecio' }],
    },
  ],
  embriologia: {
    segmentacion: {
      valor: 'radial',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [17, 19], cita: 'radial (como en Ectoprocta)' }],
    },
    cavidad: {
      valor: 'enterocelomado',
      nota: 'Celoma tripartito formado por enterocelia, como en otros lofoforados.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'ano',
      nota: 'Desarrollo de tipo deuterostomado: segmentación radial y celoma por enterocelia, pese a estar en Lophotrochozoa.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    digestivo: [
      {
        texto: 'El tubo digestivo es completo y en forma de U. La boca está rodeada por un lofóforo retráctil provisto de tentáculos que arrastran partículas de alimento microscópicas hacia la boca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [373, 375], cita: 'completo y en forma de' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los tentáculos del lofóforo también contribuyen a la respiración.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [373, 375], cita: 'contribuyen a la respiración' }],
      },
    ],
    muscular: [
      {
        texto: 'El introvertio puede retraerse totalmente por la acción de músculos retractores.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [382, 383], cita: 'acción de músculos retractores' }],
      },
    ],
    reproductor: [
      {
        texto: 'Son monoicos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 385], cita: 'Son monoicos y el' }],
      },
    ],
    tegumento: [
      {
        texto: 'Cada zoide consta de un cistidio (pared del cuerpo con su envoltura: zoecio quitinoso, calcificado o gelatinoso) y un polipídoo.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Bryozoa/', titulo: 'Bryozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El cistidio secreta una envoltura (zoecio) quitinosa, calcificada o gelatinosa que sostiene a la colonia; hay especies incrustantes con exoesqueleto mineralizado.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Bryozoa/', titulo: 'Bryozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin corazón ni vasos sanguíneos; los nutrientes se reparten entre zoides por el líquido celómico y los funículos.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin nefridios ni otros órganos excretores; se cree que el amoníaco difunde a través de la pared del cuerpo y del lofóforo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un anillo nervioso rodea la faringe con un ganglio a un lado; los nervios van a los tentáculos y, en colonias, coordinan a los zoides.',
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sin órganos sensoriales especializados, salvo un órgano similar a un estatocisto descrito en Monobryozoon.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Bryozoa', titulo: 'Bryozoa - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Lofóforo',
      datos: [
        {
          texto: 'El extremo anterior del polípodo vivo o zooide (el introvertio) forma una saliente redondeada: el lofóforo provisto de tentáculos que rodean la boca, capturan partículas microscópicas y contribuyen a la respiración; puede retraerse totalmente por músculos retractores.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [373, 383], cita: 'el introvertio forma una' }],
        },
      ],
    },
    {
      titulo: 'Aviculario',
      datos: [
        {
          texto: 'En la parte externa de la mayor parte de los zooides existe un aviculario con forma de cabeza de ave, con mandíbulas que se abren y se cierran para impedir que pequeños animales se fijen encima de ellos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [377, 379], cita: 'existe un aviculario' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Monoicos; el desarrollo es indirecto con una larva trocósfera ciliada que es expulsada al mar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 387], cita: 'una larva trocósfera ciliada' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Especies marinas o de ambientes salobres, algunas dulceacuícolas; coloniales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [360, 362], cita: 'especies marinas o de' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
