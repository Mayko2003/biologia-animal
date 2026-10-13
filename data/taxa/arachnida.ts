import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'arachnida',
  nombre: 'Arachnida',
  nombreComun: 'Arácnidos',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 3,
  resumen: [
    {
      texto: 'Constituye desde el punto de vista humano la mayor y más importante clase de quelicerados. Incluye diferentes órdenes en los que se ubican escorpiones o alacranes, palpígrados, esquizómidos, uropigios o vinagrillos, arañas, amblipigidos, ricinúlidos, pseudoescorpiones, solífugos o arañas sol, opiliónidos o papaitos piernas largas, ácaros y garrapatas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 162], cita: 'más importante clase de quelicerados' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
