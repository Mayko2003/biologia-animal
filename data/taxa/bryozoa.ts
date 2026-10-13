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
