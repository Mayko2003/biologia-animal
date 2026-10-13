import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'protura',
  nombre: 'Protura',
  nombreComun: 'Proturos',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de hexápodos entognatos: artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 40], cita: 'Artrópodos primitivamente ápteros' }],
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
