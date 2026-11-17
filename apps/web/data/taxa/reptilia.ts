import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;
const P = 'presentaciones/tp18-reptiles.md' as const;

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
    {
      texto: 'Dos pares de extremidades, ambas típicamente con cinco dedos que terminan en uñas córneas, adaptados a correr, arrastrarse o trepar.',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [18, 19], cita: 'ambas típicamente con cinco dedos que' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Piel córnea y seca con escamas, que resiste la pérdida de agua del cuerpo y facilita su vida en lugares secos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [319, 320], cita: 'Su piel córnea y seca y las escamas' }],
      },
      {
        texto: 'Cuerpo cubierto por una piel seca y córnea (no mucosa), generalmente con escamas o escudos y pocas glándulas superficiales.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [15, 17], cita: 'piel seca y cornea (no mucosa)' }],
      },
      {
        texto: 'La piel seca y escamosa se debe a un aumento de la queratinización de la epidermis, que evita la desecación y la deshidratación; es una de las adaptaciones de los reptiles a la vida en tierra.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [44, 47], cita: 'aumento de la queratinización de' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Esqueleto completamente osificado; cráneo con un cóndilo occipital.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [20, 20], cita: 'Esqueleto completamente osificado, cráneo con un cóndilo occipital' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Respiración por pulmones; la respiración exclusivamente pulmonar se cuenta entre las adaptaciones de los reptiles a la tierra.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [23, 23], cita: 'Respiración por pulmones' }, { tipo: 'apunte', archivo: P, lineas: [48, 49], cita: 'respiración exclusivamente pulmonar' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón incompletamente dividido en cuatro cámaras: dos aurículas y un ventrículo parcialmente dividido (dividido en los cocodrilos).',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [21, 22], cita: 'Corazón incompletamente dividido en cuatro cámaras' }],
      },
    ],
    nervioso: [
      {
        texto: '12 pares de nervios craneales; el sistema nervioso es más complejo, como parte de sus adaptaciones a la tierra.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [25, 25], cita: '12 pares de nervios craneales' }, { tipo: 'apunte', archivo: P, lineas: [53, 53], cita: 'Sistema nerviosos mas complejo' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Fecundación interna, generalmente por medio de órganos copuladores; huevos grandes con mucho vitelo, dentro de una cáscara coriácea o caliza; suelen ponerlos, pero en algunos lagartos y serpientes la hembra los retiene durante el desarrollo.',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [27, 30], cita: 'generalmente por medio de órganos copuladores' }],
    },
    {
      texto: 'Huevos amniotas con membranas extraembrionarias (amnios, corion, saco vitelino y alantoides) presentes durante el desarrollo; los jóvenes salen del huevo parecidos a los adultos, sin metamorfosis.',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [31, 33], cita: 'Huevos amniotas con membranas extraembrionarias' }],
    },
    {
      texto: 'El huevo amniota es una adaptación evolutiva que permitió la reproducción ovípara en un medio seco y terrestre, con fecundación interna y abandono de las fases larvarias y de la metamorfosis.',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [39, 43], cita: 'El huevo amniota es una adaptación' }, { tipo: 'apunte', archivo: P, lineas: [50, 52], cita: 'abandono de las fases larvarias' }],
    },
  ],
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
    {
      texto: 'Temperatura del cuerpo variable (poiquilotermos).',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [26, 26], cita: 'Temperatura del cuerpo variable (poiquilotermo)' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
