import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'lophotrochozoa',
  nombre: 'Lophotrochozoa',
  nombreComun: 'Lofotrocozoos',
  nivel: 'clado',
  padre: 'protostomia',
  orden: 1,
  resumen: [
    {
      texto: 'Los lofotrocozoos (Lophotrochozoa sensu stricto) son protostomados con desarrollo en espiral.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [23, 24], cita: 'protostomados con desarrollo en espiral' }],
    },
    {
      texto: 'Inicialmente incluía dos grupos: Trochozoa, de animales con larvas trocóforas como los moluscos, y Lophophorata, mayormente sésiles con lofóforos (pequeños tentáculos).',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [24, 26], cita: 'Trochozoa, de los animales con larvas trocóforas' }],
    },
    {
      texto: 'Posteriormente se amplió al concluir que los platelmintos y los gastrotricos también pertenecen a este clado; recientemente se incluyó a los mesozoos (Orthonectida y Rhombozoa).',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [26, 28], cita: 'platelmintos y gastrotricos también pertenecen a este clado' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    segmentacion: {
      valor: 'espiral',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [23, 24], cita: 'protostomados con desarrollo en espiral' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Muchos científicos separan a los platelmintos en un grupo aparte dentro de los protostomados, Platyzoa ("animales planos"), por la ausencia de celoma o su reducción a un pseudocele. En promedio Platyzoa es el grupo más simple de los protostomados.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [30, 35], cita: 'separan a los platelmintos en un grupo aparte' }],
    },
  ],
};

export default taxon;
