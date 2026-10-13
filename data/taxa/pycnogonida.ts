import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'pycnogonida',
  nombre: 'Pycnogonida',
  nombreComun: 'Picnogónidos (arañas de mar)',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de quelicerados conocidos como arañas de mar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [153, 155], cita: 'Pygnogonida (arañas de mar)' }],
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
