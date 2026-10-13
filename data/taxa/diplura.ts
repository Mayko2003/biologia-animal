import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'diplura',
  nombre: 'Diplura',
  nombreComun: 'Dipluros',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 42], cita: 'escondido en un repliegue' }],
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
