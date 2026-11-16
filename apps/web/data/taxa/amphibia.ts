import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'amphibia',
  nombre: 'Amphibia',
  nombreComun: 'Anfibios',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de gnatóstomos (Gr. amphi=doble, bios=vida) dentro de Phylum Chordata › Subphylum Vertebrata › Superclase Gnatostomatha; comprende las salamandras, sapos, ranas y cecilias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [4, 11], cita: 'Comprende las salamandras, sapos, ranas y cecilias' }],
    },
    {
      texto: 'Constituyen el primer grupo de cordados que vive fuera del agua y, tanto en su estructura como en las funciones, son intermedios entre los peces y los reptiles.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [11, 13], cita: 'intermedios entre los peces y los reptiles' }],
    },
    {
      texto: 'Son los tetrápodos (tetra=cuatro, podos=patas) o vertebrados terrestres inferiores y más primitivos; derivan de algún antepasado perteneciente a los peces, posiblemente del Devónico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [15, 17], cita: 'los Tetrápodos (tetra=cuatro, podos=patas)' }],
    },
    {
      texto: 'La transición del agua a la tierra requirió: modificación del cuerpo para desplazarse por tierra conservando la capacidad de nadar, desarrollo de patas en reemplazo de las aletas pares, cambios en la piel para permitir la exposición al aire, reemplazo de las branquias por pulmones, cambios en el sistema circulatorio para la respiración pulmonar y cutánea, y órganos de los sentidos que funcionen en el agua y en el aire.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [17, 22], cita: 'La transición del agua a la tierra requirió' }],
    },
    {
      texto: 'Los anfibios vivientes pertenecen a la clase de los Lisamphibia, donde se hallan tres órdenes: Gymnophiona (Apoda), Urodela (Caudata) y Anura (Salientia).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [84, 86], cita: 'pertenecen a la clase de los Lisamphibia' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Formas corporales variables: desde un tronco alargado con cabeza, cuello y cola bien diferenciados hasta un cuerpo compacto, deprimido, con cabeza y tronco fusionados sin cuello diferenciado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [24, 26], cita: 'un tronco alargado con una cabeza, cuello y' }],
    },
    {
      texto: 'Dos pares de extremidades (tetrápodos) para andar o nadar, con 4 o 5 dedos o menos, con tubérculos cornificados, placas cortantes o discos ensanchados para la locomoción; carecen de auténticas garras y uñas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [26, 28], cita: 'Dos pares de extremidades(tetrápodos)' }],
    },
    {
      texto: 'Las palmas y las plantas de los pies poseen pequeños tubérculos cornificados; en las patas posteriores de algunos sapos el tubérculo más interno se convierte en una placa córnea cortante que se emplea para cavar en el suelo en busca de protección.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 31], cita: 'se convierte en una placa córnea cortante' }],
    },
    {
      texto: 'Algunos son ápodos (cecilias); en otros las extremidades anteriores son más pequeñas que las posteriores, o son pequeñas y no funcionales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [31, 32], cita: 'Algunos son apodos (cecilias)' }],
    },
    {
      texto: 'Dos fosas nasales en comunicación con la boca, provistas de válvulas para impedir la entrada del agua y contribuir a la respiración pulmonar; los ojos frecuentemente con párpados móviles; tímpano externo en las ranas y sapos; la boca suele poseer finos dientes y la lengua es a menudo protráctil.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [41, 44], cita: 'Dos fosas nasales en comunicación con la boca' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Piel lisa y húmeda, con muchas glándulas —algunas de las cuales pueden ser venenosas— y sin escamas externas; en los tritones es rugosa y en los sapos contiene numerosas glándulas venenosas en verrugas del dorso, los lados y las patas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 38], cita: 'Piel lisa y húmeda, con muchas glándulas' }],
      },
      {
        texto: 'La coloración de muchas salamandras y sapos es brillante y variada —verde, amarilla, roja, parda o negra—; en la mayor parte de las especies los dibujos son constantes, pero los sapos arborícolas experimentan grandes cambios de color según las condiciones ambientales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [38, 40], cita: 'experimentan grandes cambios de color' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Respiración por branquias, pulmones, cutánea o por la mucosa de la boca, separadamente o en combinación; en algunas fases de la vida existen branquias, y en los sapos y las ranas hay cuerdas vocales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [46, 48], cita: 'Respiración por branquias, pulmones, cutánea' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Fecundación externa o interna; en su mayor parte ovíparos, con huevos con algo de vitelo envueltos en una cubierta gelatinosa; en general colocan sus huevos en el agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [50, 54], cita: 'Fecundación externa o interna, en su mayor parte' }],
    },
    {
      texto: 'Suelen tener una fase larvaria acuática con metamorfosis a la forma adulta, pero algunas salamandras y ranas dan a luz crías vivas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [51, 52], cita: 'una fase larvaria acuática con metamorfosis' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven principalmente relacionados con las aguas dulces y ninguno en las aguas saladas; abundan en regiones templadas, aunque algunos pocos se han encontrado en regiones cercanas a los polos y otros cerca de los 3600 m de altura.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [56, 56], cita: 'viven principalmente relacionados con las aguas' }, { tipo: 'apunte', archivo: A, lineas: [64, 65], cita: 'Abundan en regiones templadas' }],
    },
    {
      texto: 'Algunos sapos e hílidos habitan en desiertos, donde se esconden en galerías subterráneas durante el día y solamente entran en actividad por la noche.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [65, 67], cita: 'se esconden en galerías subterráneas durante' }],
    },
    {
      texto: 'Algunos son estrictamente acuáticos, otros viven cerca de aguas permanentes, otros en bosques húmedos; las salamandras se esconden debajo de troncos, piedras o en el musgo, algunos hílidos son arborícolas y las especies tropicales minan en el suelo húmedo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [69, 71], cita: 'las salamandras se esconden debajo de troncos' }],
    },
    {
      texto: 'Son poiquilotermos y pueden perder fácilmente agua por su delgada piel, por lo que evitan temperaturas extremas: permanecen escondidos durante gran parte del día y solo salen de noche para alimentarse y reproducirse; algunas salamandras acuáticas invernan bajando a las profundidades de lagos o ríos y muchas especies se resguardan del frío enterradas en la tierra.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 78], cita: 'ningún anfibio regular la temperatura corporal' }],
    },
    {
      texto: 'Su alimentación consiste en insectos, crustáceos, gusanos y pequeños moluscos; algunas especies acuáticas mayores pueden comer peces pequeños y otras pueden comer pequeñas aves y mamíferos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [80, 82], cita: 'Su alimentación consiste en insectos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Gastrotheca',
      descripcion: 'rana que lleva sus huevos en la espalda',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [53, 54], cita: 'huevos en la espalda (Gastrotheca)' }],
    },
  ],
  notas: [],
};

export default taxon;
