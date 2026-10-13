import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'cubozoa',
  nombre: 'Cubozoa',
  nombreComun: 'Cubozoos',
  nivel: 'clase',
  padre: 'cnidaria',
  orden: 3,
  resumen: [
    {
      texto: '15 especies descriptas, todas semitropicales o tropicales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [557, 558], cita: '15 especies descriptas para los Cubozoos' }],
    },
    {
      texto: 'Viven en aguas costeras y pueden ser peligrosas para los bañistas ("avispas de mar"); algunas son mortales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [560, 562], cita: 'pueden ser peligrosas para los bañistas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las cubomedusas tienen campana cuadrada, no poseen una estructura a modo de velo (velario), y llevan cuatro tentáculos o grupos de tentáculos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [576, 578], cita: 'no poseen una estructura a modo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    reproductor: [
      {
        texto: 'Son dioicos y las gónadas se ubican en la cavidad gastrovascular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 586], cita: 'son dioicos y las gónadas se ubican' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Viven en aguas costeras; algunas son mortales: la muerte puede producirse entre 3 y 20 minutos después de la picadura (Australia–Indopacífico).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [561, 562], cita: '3 a 20 minutos se produce la muerte' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
