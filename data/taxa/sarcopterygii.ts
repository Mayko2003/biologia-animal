import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'sarcopterygii',
  nombre: 'Sarcopterygii',
  nombreComun: 'Peces de aletas lobuladas',
  nivel: 'subclase',
  padre: 'osteichthyes',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de vertebrados gnatóstomos conocidos como peces de aletas carnosas o lobuladas; en la clasificación clásica se compone de los peces pulmonados (dipnoos) y los celacantos, con aletas pares lobuladas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [348, 353], cita: 'peces de aletas carnosas' }],
    },
    {
      texto: 'La similitud de estas aletas con las extremidades de tipo quiridio de los primeros anfibios, entre otros caracteres, prueba que los vertebrados terrestres descienden de antiguos peces sarcopterigios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [353, 358], cita: 'los vertebrados terrestres descienden de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las aletas son pareadas, con un solo elemento esquelético basal y radios dermales cortos; en las especies actuales la aleta caudal es dificerca: la columna vertebral llega hasta el extremo y la membrana se desarrolla simétricamente hacia arriba y abajo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [362, 366], cita: 'la aleta caudal es dificerca' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Esqueleto óseo, con mandíbulas y dientes con esmalte; arcos óseos sostienen las branquias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [360, 367], cita: 'Poseen esqueleto óseo' }],
      },
    ],
    tegumento: [
      {
        texto: 'La piel está recubierta por escamas; en especies extintas poseen una capa de cosmina en su superficie.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [360, 361], cita: 'una capa de cosmina en' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los pulmones se utilizan para respirar en los dipnoos pero no en el celacanto, en el que se convirtieron en órganos de flotación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 370], cita: 'en órganos de flotación' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El corazón tiene seno venoso, cono arterioso, dos atrios y división parcial del ventrículo; la circulación tiene dos circuitos, pulmonar y sistémico, diferenciados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [367, 369], cita: 'circuitos, pulmonar y sistémico' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso tiene cerebro, cerebelo y lóbulos ópticos diferenciados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [371, 371], cita: 'cerebelo y lóbulos ópticos diferenciados' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'dipnoos',
      descripcion: 'peces pulmonados que respiran con pulmones',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 370], cita: 'para respirar en los dipnoos' }],
    },
    {
      nombre: 'celacanto',
      descripcion: 'pez de aletas lobuladas con pulmones convertidos en órganos de flotación',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [370, 370], cita: 'pero no en el celacanto' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte los menciona como clases que reemplazan a Osteichthyes, ya que este es un grupo parafilético.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [234, 236], cita: 'por las clases Actinopterygii y Sarcopterygii' }],
    },
  ],
};

export default taxon;
