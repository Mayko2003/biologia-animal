import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'pauropoda',
  nombre: 'Pauropoda',
  nombreComun: 'Paurópodos',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 3,
  resumen: [
    {
      texto: 'Una de las cuatro clases de miriápodos. Respiran a través de la piel, que es en estos casos delgada y blanda.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [462, 489], cita: 'delgada y blanda (Paurópodos)' }],
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
