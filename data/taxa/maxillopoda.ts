import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'maxillopoda',
  nombre: 'Maxillopoda',
  nombreComun: 'Maxilópodos',
  nivel: 'clase',
  padre: 'crustacea',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de crustáceos que incluye las subclases Copepoda (copépodos) y Cirripedia (cirrípedos o percebes).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [318, 356], cita: 'CLASE MAXILLOPODA SUBCLASE' }],
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
