import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'myxini',
  nombre: 'Myxini',
  nombreComun: 'Mixines',
  nivel: 'clase',
  padre: 'agnatha',
  orden: 1,
  resumen: [
    {
      texto: 'Peces carroñeros de cuerpo delgado y anguiliforme, de sección circular, piel desnuda con glándulas mucosas, sin apéndices pares ni aleta dorsal; esqueleto fibroso y cartilaginoso con notocorda persistente. Se alimentan del interior de peces o invertebrados muertos o moribundos, dejándolos como un saco de espinas y huesos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [575, 590], cita: 'cuerpo delgado, anguiliformes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Boca casi terminal con 4 pares de tentáculos en el borde, sin embudo bucal y con dos filas de dientes reversibles; la cavidad nasal comunica con la boca; un par de canales semicirculares y ojos debajo de la piel.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [579, 582], cita: 'filas de dientes reversibles' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Piel desnuda con glándulas mucosas; glándulas especiales debajo de la piel liberan moco por poros superficiales, útil para escurrirse de un depredador o para obstruir sus branquias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [577, 594], cita: 'liberan moco a través' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Esqueleto fibroso y cartilaginoso; notocorda persistente.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [579, 579], cita: 'fibroso y cartilaginoso' }],
      },
    ],
    digestivo: [
      {
        texto: 'Sistema digestivo sin estómago, sin válvula espiral y sin cilios en el intestino.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 586], cita: 'sin válvula espiral' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Poseen 5 a 16 pares de branquias con un número variable de aberturas branquiales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [582, 583], cita: 'variable de aberturas branquiales' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio a baja presión, con tres corazones accesorios además del corazón principal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [583, 584], cita: 'tres corazones accesorios' }],
      },
    ],
    excretor: [
      {
        texto: 'Riñón pronéfrico y mesonéfrico independientes.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [584, 585], cita: 'pronéfrico y mesonéfrico' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cordón nervioso dorsal con un cerebro diferenciado y 10 pares de nervios craneales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [586, 587], cita: 'pares de nervios craneales' }],
      },
    ],
    sentidos: [
      {
        texto: 'Cavidad nasal que comunica con la boca, un par de canales semicirculares y ojos debajo de la piel.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [581, 582], cita: 'ojos debajo de la' }],
      },
    ],
    reproductor: [
      {
        texto: 'Un mismo individuo presenta ovarios y testículos pero solo uno es funcional, por lo que en la práctica tienen sexos separados; fecundación externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [597, 599], cita: 'ovarios y testículos' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los huevos son grandes y con mucho vitelo, hasta 30 por individuo; nunca se encontró un estado larvario, por lo que se piensa que el desarrollo es directo y no hay metamorfosis.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [599, 601], cita: 'no hay metamorfosis' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Carroñeros que se alimentan del interior de peces o invertebrados muertos o moribundos; usan salientes de la lengua como dientes para raspar la carne, liberan moco defensivo por la piel y pueden hacer un nudo con el cuerpo para escapar o para desgarrar el alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [589, 595], cita: 'un nudo con su' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Myxine',
      descripcion: 'género de mixine citado en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [606, 606], cita: 'Ej. Myxine, Bdellostoma' }],
    },
    {
      nombre: 'Bdellostoma',
      descripcion: 'género de mixine citado en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [606, 606], cita: 'Ej. Myxine, Bdellostoma' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Como las lampreas carecen de huesos o escamas, pero la falta de huesos en las lampreas es una pérdida secundaria mientras que en los mixines puede representar una condición primitiva.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [601, 604], cita: 'una condición primitiva' }],
    },
  ],
};

export default taxon;
