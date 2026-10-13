import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'holothuroidea',
  nombre: 'Holothuroidea',
  nombreComun: 'Holoturias, pepinos de mar',
  nivel: 'clase',
  padre: 'echinodermata',
  orden: 3,
  resumen: [
    {
      texto: 'Unas 900 especies conocidas como holoturias, cohombros o pepinos de mar; cuerpo cilíndrico con el eje oral-aboral muy alargado, esqueleto de osículos microscópicos dispersos y pies ambulacrales bucales en forma de tentáculos retráctiles en número de 10 a 30.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [327, 336], cita: 'cuerpo de forma cilíndrica' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Por su alargamiento yacen sobre un lado, sobre los tres ambulacros ventrales o trivios (suela), lo que condujo a un cierto grado de simetría bilateral secundaria; en esas especies los ambulacros ventrales tienen pies ambulacrales con ventosas para la locomoción y los dorsales, reducidos, solo sirven como táctiles y respiratorios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [338, 345], cita: 'simetría bilateral secundaria' }],
    },
    {
      texto: 'La mayoría son negras, marrones o verde aceituna; hay especies de menos de 3 cm y otras como Stichopus de Filipinas que alcanzan 1 m de longitud.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 402], cita: 'negras, marrones o de' }],
    },
  ],
  embriologia: {
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [341, 341], cita: 'de simetría bilateral secundaria' }],
      nota: 'Simetría bilateral secundaria sobre un plan pentarradial.',
    },
  },
  sistemas: {
    esqueleto: [
      {
        texto: 'Esqueleto formado por osículos microscópicos dispersos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [334, 334], cita: 'osículos microscópicos dispersos' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo alargado que forma asas dentro del celoma: esófago corto desde la boca a un estómago grande, intestino largo sostenido por mesenterios y una cloaca muscular que termina en el ano posterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [368, 371], cita: 'forma asas dentro' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Desde la cloaca se dirigen hacia el interior del celoma dos tubos muy ramificados, los árboles respiratorios; el agua impulsada dentro o fuera de ellos por la cloaca sirve para la respiración y la excreción, y mantiene el celoma turgente.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [371, 375], cita: 'los árboles respiratorios' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema hemático es más evidente que en otros equinodermos, con vasos a lo largo del intestino.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [389, 391], cita: 'más evidente que en' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un anillo nervioso circunda el esófago y a lo largo de los radios hay cordones nerviosos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 387], cita: 'anillo nervioso circunda' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados; la gónada única en forma de pincel está formada por finos túbulos unidos a un conducto que se abre en la región dorsal cerca de los tentáculos, con un gonoporo intertentacular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [393, 396], cita: 'un gonoporo intertentacular' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Órganos de Cuvier',
      datos: [
        {
          texto: 'Algunas holoturias poseen un racimo de tubos viscosos, blancuzcos y alargados unidos a la cloaca (órganos de Cuvier) que salen para envolver al enemigo que las molesta.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [377, 379], cita: 'órganos de Cuvier' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los gametos salen al exterior por el gonoporo intertentacular; el desarrollo conduce a la formación de una larva auricularia y la metamorfosis se produce antes del establecimiento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [395, 397], cita: 'una larva auricularia' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven sobre el fondo, debajo de piedras o en grietas; algunos excavan y pocos son pelágicos; se mueven con contracciones vermiformes y, si se las irrita, fragmentan el cuerpo o eyectan órganos internos. Son detritívoros o filtradores: los tentáculos cubiertos de moco retienen las partículas que la faringe succiona.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [347, 366], cita: 'detritívoros o filtradores' }],
    },
    {
      texto: 'Ciertas especies orientales son utilizadas por el hombre para su alimentación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [361, 361], cita: 'por el hombre para' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Stichopus',
      descripcion: 'holoturia de Filipinas de hasta 1 m de longitud',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [401, 402], cita: 'Stichopus de Filipinas' }],
    },
    {
      nombre: 'Cucumaria',
      descripcion: 'forma norteamericana y europea común, de 10-30 cm',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [402, 404], cita: 'como Cucumaria, Holothuria, Thyone' }],
    },
  ],
  notas: [],
};

export default taxon;
