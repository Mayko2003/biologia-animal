import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'collembola',
  nombre: 'Collembola',
  nombreComun: 'Colémbolos',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 4,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 44], cita: 'en un repliegue cefálico' }],
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
