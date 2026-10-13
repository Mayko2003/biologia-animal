import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'articulata',
  nombre: 'Articulata',
  nombreComun: 'Braquiópodos articulados',
  nivel: 'clase',
  padre: 'brachiopoda',
  orden: 1,
  resumen: [
    {
      texto: 'Los articulados tienen las valvas calcáreas dorsal y ventral diferentes entre sí.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [417, 417], cita: 'Los articulados tienen las' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Presentan charnela y un pico para el pedúnculo y asa para el lofóforo; carecen de ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [419, 419], cita: 'presentan charnela y un pico' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Valvas calcáreas dorsal y ventral diferentes entre sí, con charnela, pico para el pedúnculo y asa para el lofóforo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [417, 419], cita: 'asa para el lofóforo' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
