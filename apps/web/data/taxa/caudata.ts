import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;
const P = 'presentaciones/tp17-anfibios.md' as const;

const taxon: Taxon = {
  slug: 'caudata',
  nombre: 'Caudata',
  nombreComun: 'Salamandras y tritones',
  sinonimos: ['Urodela'],
  nivel: 'subclase',
  padre: 'amphibia',
  orden: 2,
  resumen: [
    {
      texto: 'Orden de los anfibios con cola (Urodela): salamandras y tritones.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [251, 260], cita: 'ORDEN CAUDADOS (Urodela) (Salamandras, Tritones)' }],
    },
    {
      texto: 'Con extremidades primitivas, dispuestas en ángulos rectos con relación al cuerpo; las extremidades anteriores y posteriores son aproximadamente de igual tamaño, y en algunas especies acuáticas o excavadoras son rudimentarias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [262, 265], cita: 'extremidades primitivas, dispuestas en ángulos rectos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las salamandras llegan a medir 8–170 cm de longitud; las ranas y sapos, entre 1 cm y 30 cm, dependiendo de la especie.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [267, 269], cita: 'las salamandras llegan a medir 8-170' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'El esqueleto es semejante al de los vertebrados largos, ya que posee muchas vértebras —hasta cien en Amphiuma—; existen costillas (como en las cecilias y algunos sapos) y la cintura pélvica es corta.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [271, 273], cita: 'hasta cien en Amphiuma' }],
      },
      {
        texto: 'Las cinturas pélvicas son en su mayor parte cartilaginosas.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [72, 72], cita: 'Las cinturas pélvicas son en su mayor parte cartilaginosas' }],
      },
    ],
    digestivo: [
      {
        texto: 'La mayor parte de los anfibios poseen finos dientes en la mandíbula superior y en la bóveda de la boca; algunas salamandras poseen dientes en ambas maxilas, pero los sapos en general carecen de dientes; los dientes son algo cónicos, fijos sobre la superficie de los huesos y son reemplazados por un nuevo diente cuando se pierde el viejo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [275, 278], cita: 'los sapos en general carecen de dientes' }],
      },
      {
        texto: 'Las larvas se parecen a los adultos en la forma y tienen dientes en las dos mandíbulas.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [73, 74], cita: 'Las Larvas se parecen a los adultos en la forma' }],
      },
    ],
    muscular: [
      {
        texto: 'Los músculos segmentarios son aparentes en el tronco y en la cola de salamandras y cecilias; las especies que poseen branquias tienen músculos especiales para moverlas y para abrir o cerrar las hendiduras branquiales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [280, 282], cita: 'músculos segmentarios son aparentes' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En los embriones y en las larvas existen tres pares de branquias externas que solo persisten en los adultos de algunas salamandras exclusivamente acuáticas; en las salamandras terrestres americanas faltan los pulmones.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [284, 286], cita: 'tres pares de branquias externas' }],
      },
      {
        texto: 'Respiración por branquias, pulmones o piel.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [78, 78], cita: 'Respiración por branquias, pulmones o piel' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Las salamandras ambystómidas producen larvas perennes que alcanzan el tamaño adulto e incluso crían conservando las branquias y otros caracteres larvarios; este fenómeno se conoce como neotenia.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 290], cita: 'este fenómeno se conoce como neotenia' }],
    },
    {
      texto: 'Fecundación interna: el macho monta a la hembra o deja uno o más espermatóforos gelatinosos, que la hembra almacena en el receptáculo seminal para que los huevos sean fecundados internamente antes de la puesta.',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [79, 82], cita: 'almacena en el receptáculo seminal para ser fecundados' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Presentes en todas las regiones templadas y tropicales del mundo; la mayoría de las especies se hallan en Norteamérica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [260, 263], cita: 'regiones templadas y tropicales del mundo' }],
    },
    {
      texto: 'Carnívoros: depredan lombrices, artrópodos y moluscos pequeños.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [264, 265], cita: 'depredan lombrices, artrópodos y moluscos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Amphiuma',
      descripcion: 'salamandra cuyo esqueleto posee hasta cien vértebras',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [271, 272], cita: 'hasta cien en Amphiuma' }],
    },
  ],
  notas: [],
};

export default taxon;
