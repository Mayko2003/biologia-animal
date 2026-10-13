import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'brachiopoda',
  nombre: 'Brachiopoda',
  nombreComun: 'Braquiópodos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 7,
  resumen: [
    {
      texto: 'Se conocen unas 340 especies marinas; parecidos a moluscos bivalvos pues poseen una concha con dos valvas (dorsal y ventral). Habitan en el fondo del mar. Se reconocen dos Clases: Articulata e Inarticulata.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [395, 416], cita: 'unas 340 especies marinas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las valvas en forma de cuchara contienen las partes blandas del animal; son calcáreas y están cubiertas externamente por el perióstraco orgánico. La valva ventral, que es mayor, tiene un pico saliente perforado para permitir el paso de un pedúnculo de fijación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 402], cita: 'un pedúnculo de fijación' }],
    },
    {
      texto: 'El verdadero cuerpo solo ocupa la parte posterior de las valvas y la parte interior de las mismas está tapizada por el manto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [404, 406], cita: 'tapizada por el manto' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Concha con dos valvas calcáreas (dorsal y ventral) en forma de cuchara, cubiertas externamente por un perióstraco orgánico.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [397, 400], cita: 'valvas en forma de cuchara' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los tentáculos ciliados del lofóforo arrastran pequeños organismos que les sirven de alimento hacia el surco que conduce a la boca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 410], cita: 'que conduce a la boca' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los largos tentáculos ciliados del lofóforo determinan la circulación del agua por la cavidad del manto, para la respiración.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 409], cita: 'para la respiración' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados y la fecundación es externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 412], cita: 'la fecundación es externa' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Lofóforo',
      datos: [
        {
          texto: 'El lofóforo tiene forma de W y está bordeado por largos tentáculos ciliados que determinan la circulación del agua por la cavidad del manto, para la respiración, y arrastran pequeños organismos alimenticios hacia el surco que conduce a la boca.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 410], cita: 'una forma de W' }],
        },
      ],
    },
    {
      titulo: 'Pedúnculo',
      datos: [
        {
          texto: 'La valva ventral (la mayor) tiene un pico saliente perforado para permitir el paso de un pedúnculo de fijación.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [401, 402], cita: 'permitir el paso de' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Fecundación externa; durante el desarrollo puede observarse una larva nadadora.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 414], cita: 'una larva nadadora' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Marinos bentónicos: habitan en el fondo del mar y se fijan por un pedúnculo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 402], cita: 'el fondo del mar' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
