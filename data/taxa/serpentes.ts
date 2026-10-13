import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'serpentes',
  nombre: 'Serpentes',
  nombreComun: 'Serpientes (víboras y culebras)',
  sinonimos: ['Ophidia'],
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 5,
  resumen: [
    {
      texto: 'Suborden del orden Escamoso, según el apunte: víboras y culebras; faltan los apéndices y carecen de cinturas, esternón, párpados, aberturas externas de los oídos y vejiga de la orina.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [502, 505], cita: 'SUBORDEN SERPIENTES (víboras y culebras)' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La superficie ventral del cuerpo posee una serie de anchas escamas transversas (ventrales o gastrotegos) desde la barbilla al ano, y una o dos series (caudales o urostegos) en la cola; los ojos están cubiertos por una cutícula transparente que se muda igual que toda la piel.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [506, 509], cita: 'ventrales o gastrotegos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La piel lleva escamas lisas o con quilla, resistente e impermeable.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [505, 506], cita: 'escamas lisas o con quilla' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El cráneo es delicado y algunos de los huesos pueden moverse, para permitir una mayor apertura mandibular y digerir presas más grandes que su cuerpo; las costillas son libres.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [509, 511], cita: 'una mayor apertura mandibular' }],
      },
    ],
    muscular: [
      {
        texto: 'Método acordeón: las serpientes se acordonan y luego utilizan su energía para moverse hacia adelante; lo usan como elemento sorpresa cuando se encuentran cerca de una presa y también para asustar a los depredadores.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [527, 531], cita: 'El método acordeón' }],
      },
      {
        texto: 'Método ondulado: movimiento lado a lado en forma ondulatoria, el que hace la mayoría de las especies; es un movimiento lento que les ayuda a conservar energía, con el que la mayoría de las veces no son detectadas, y que utilizan en el agua para impulsarse conjuntamente con las olas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [533, 538], cita: 'El método ondulado' }],
      },
      {
        texto: 'Enrollado de lado: movimiento muy similar al lateral, en el que levantan una parte del cuerpo y usan la otra parte para arrastrarse; en barro o zonas resbalosas se empujan con la parte de arrastre, lo que evita que se deslicen.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [540, 543], cita: 'se enrollan de lado' }],
      },
      {
        texto: 'Movimiento rectilíneo: la forma más lenta de locomoción; mueven los músculos que están alrededor del estómago creando ondulaciones en la piel, conservan energía y no hacen ruido cuando están buscando una presa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [545, 549], cita: 'especie de serpientes es el movimiento' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los dientes están inclinados hacia atrás y existen diferentes tipos de dentición; las serpientes venenosas poseen un par de dientes especializados o colmillos que se conectan con la glándula del veneno, que es inyectado a las presas, a las cuales paralizan antes de engullirlas enteras.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [511, 514], cita: 'colmillos que se conectan con' }],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de vejiga de la orina.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [504, 505], cita: 'vejiga de la orina' }],
      },
    ],
    sentidos: [
      {
        texto: 'La lengua es cintiforme y con el extremo bífido: recoge partículas odoríferas en el aire que luego, al ser introducidas en la boca, son captadas por los órganos de Jacobson, fosetas que se encuentran en el cielo de la boca con un epitelio olfativo ricamente inervado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [514, 517], cita: 'órganos de Jacobson' }],
      },
      {
        texto: 'Algunas serpientes presentan fosetas loreales termosensitivas, ubicadas en la cabeza entre las narinas y los ojos —la mayoría de las especies venenosas las presentan—; están inervadas por un gran paquete de terminaciones nerviosas libres del quinto nervio craneal; responden a la energía radiante del infrarrojo y son sensitivas al calor emitido por los cuerpos calientes de los mamíferos y aves, que son sus principales presas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [519, 523], cita: 'fosetas loreal, termosensitivas' }],
      },
    ],
    reproductor: [
      {
        texto: 'En el macho hay dos hemipenes, como en los lagartos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [550, 550], cita: 'hay dos hemipenes como' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La mayoría son ovíparas y ponen sus huevos elípticos y coriáceos bajo troncos en putrefacción, bajo rocas o en agujeros de la tierra u hormigueros; existen especies ovovivíparas y vivíparas, donde se forma una placenta primitiva.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [550, 553], cita: 'huevos elípticos y coriáceos' }],
    },
    {
      texto: 'Las serpientes pueden almacenar esperma y poner varias series de huevos fértiles a diferentes intervalos, mucho después de haber copulado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [560, 561], cita: 'pueden almacenar esperma' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Sus principales presas son los mamíferos y las aves, cuyo calor corporal detectan con las fosetas loreales termosensitivas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [522, 523], cita: 'que son sus principales presas' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
