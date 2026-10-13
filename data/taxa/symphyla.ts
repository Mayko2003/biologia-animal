import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'symphyla',
  nombre: 'Symphyla',
  nombreComun: 'Sínfilos',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 4,
  resumen: [
    {
      texto: 'Una de las cuatro clases de miriápodos junto a Chilopoda, Diplopoda y Pauropoda.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [462, 463], cita: 'Pauropoda y Simphyla' }],
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
