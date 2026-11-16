import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'bilateria',
  nombre: 'Bilateralia',
  nombreComun: 'Bilaterales',
  sinonimos: ['Bilateria'],
  nivel: 'rama',
  padre: 'eumetazoa',
  orden: 2,
  resumen: [
    {
      texto: 'Animales de simetría bilateral que se dividen en dos grandes linajes: los protostomados y los deuterostomados.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [10, 12], cita: 'los dos grandes linajes en que se dividen los animales de simetría bilateral' }],
    },
    {
      texto: 'El mesodermo secundario se encontrará recién en los bilaterios.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [334, 335], cita: 'El mesodermo secundario se encontrará recién en los bilaterios' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [11, 12], cita: 'animales de simetría bilateral (Bilateria)' }],
    },
    capas: {
      valor: 'triblastico',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [334, 335], cita: 'El mesodermo secundario se encontrará recién en los bilaterios' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
