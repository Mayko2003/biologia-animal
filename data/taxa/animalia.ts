import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'animalia',
  nombre: 'Animalia',
  nombreComun: 'Reino Animal (Metazoa)',
  sinonimos: ['Metazoa'],
  nivel: 'reino',
  padre: null,
  orden: 1,
  resumen: [
    {
      texto: 'Organismos pluricelulares, móviles y heterótrofos que pasan por un estado de blástula durante su desarrollo embrionario.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [9, 10], cita: 'Organismos pluricelulares, móviles y heterótrofos' }],
    },
    {
      texto: 'Algunos pasaron a ser sésiles (esponjas, corales) pero conservan en su ciclo biológico una larva móvil.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [10, 11], cita: 'conservan en su ciclo biológico una larva móvil' }],
    },
    {
      texto: 'Su diversidad es enorme y existen diferentes modelos corporales: 29 phyla, de los cuales solo los Cordados no son invertebrados.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [11, 12], cita: 'Con 29 Phyla de los cuales solo uno' }],
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
