import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'inarticulata',
  nombre: 'Inarticulata',
  nombreComun: 'Braquiópodos inarticulados',
  nivel: 'clase',
  padre: 'brachiopoda',
  orden: 2,
  resumen: [
    {
      texto: 'Los inarticulados poseen dos valvas iguales de naturaleza quitinoide y con espículas calcáreas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'naturaleza quitinoide y con' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'No tienen charnela y carecen también de pico y asa. El ano está presente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [423, 423], cita: 'El ano está presente' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Dos valvas iguales de naturaleza quitinoide con espículas calcáreas, sin charnela, pico ni asa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'y con espículas calcáreas' }],
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
