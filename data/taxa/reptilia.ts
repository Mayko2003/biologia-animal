import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'reptilia',
  nombre: 'Reptilia',
  nombreComun: 'Reptiles',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 4,
  resumen: [
    {
      texto: 'Clase de gnatóstomos (rep=arrastrarse) que comprende a los lagartos, serpientes, tortugas, cocodrilos y caimanes, y el tuátara; florecieron todos ellos durante el Mesozoico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 318], cita: 'lagartos, serpientes, tortugas, cocodrilos y caimanes' }],
    },
    {
      texto: 'Constituyen el primer grupo de vertebrados adaptado a la vida en la tierra en los lugares secos: su piel córnea y seca y las escamas resisten la pérdida de agua del cuerpo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [318, 320], cita: 'el primer grupo de vertebrados' }],
    },
    {
      texto: 'Son más evolucionados que los anfibios por las características de su piel, por presentar extremidades adaptadas para una locomoción rápida, por tener una mayor separación de la sangre oxigenada de la venosa en el corazón, por la osificación completa de su esqueleto, por colocar sus huevos en la tierra cubiertos de una cáscara calcárea resistente y porque tienen membranas extraembrionarias que permiten la protección y nutrición del embrión; a pesar de todo ello aún son incapaces de regular su temperatura corporal (poiquilotermos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [322, 328], cita: 'membranas extraembrionarias que permiten' }],
    },
    {
      texto: 'Según el apunte, se clasifican en la subclase Arcosaurios (orden Cocodrilos), la subclase Anapsidos (orden Quelonios), el superorden Lepidosaurios (orden Escamoso, con los subórdenes Saurios, Anfisbenios y Serpientes) y la subclase Diapsida (orden Sphenodonta).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [351, 352], cita: 'SUBCLASE ARCOSAURIOS ORDEN COCODRILOS' }, { tipo: 'apunte', archivo: A, lineas: [444, 445], cita: 'SUBCLASE ANAPSIDOS ORDEN QUELONIOS' }, { tipo: 'apunte', archivo: A, lineas: [473, 475], cita: 'SUPERORDEN LEPIDOSAURIOS ORDEN ESCAMOSO' }, { tipo: 'apunte', archivo: A, lineas: [563, 564], cita: 'SUBCLASE DIAPSIDA ORDEN SPHENODONTA' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Si bien las formas fósiles alcanzaron tamaños extraordinarios, las formas hoy vivientes oscilan entre tamaños muy pequeños a muy grandes (5 cm–7 m de longitud).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [330, 332], cita: 'han alcanzado tamaños extraordinarios' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Piel córnea y seca con escamas, que resiste la pérdida de agua del cuerpo y facilita su vida en lugares secos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [319, 320], cita: 'Su piel córnea y seca y las escamas' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'La mayor parte de los reptiles se halla en regiones tropicales y subtropicales; su número declina hacia los polos y en las grandes alturas; habitan en la tierra —tanto en el suelo como entre rocas y en los árboles— y en el agua dulce o salada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [334, 336], cita: 'declina hacia los polos' }],
    },
    {
      texto: 'A pesar de ser animales de sangre fría, se encuentran activos durante todo el día y el año, aunque pueden pasar períodos de letargo cuando las condiciones climáticas no son favorables; varias especies poseen hábitos nocturnos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [338, 340], cita: 'períodos de letargo' }],
    },
    {
      texto: 'Se alimentan principalmente de otros animales de todo tipo, aunque un escaso número de lagartos y las tortugas comen vegetales; otros reptiles, aves y mamíferos predadores los hacen su presa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [342, 346], cita: 'Se alimentan principalmente de otros animales' }],
    },
    {
      texto: 'Muchas clases de lagartos y serpientes predadoras son beneficiosas para el hombre porque se alimentan de insectos y roedores perjudiciales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [347, 349], cita: 'beneficiosas para el hombre' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
