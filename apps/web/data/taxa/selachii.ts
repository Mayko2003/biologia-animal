import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'selachii',
  nombre: 'Selachii',
  nombreComun: 'Elasmobranquios (tiburones y rayas)',
  nivel: 'subclase',
  padre: 'chondrichthyes',
  orden: 1,
  resumen: [
    {
      texto: 'Subclase con espiráculos, de 5 a 7 pares de branquias no protegidas por un opérculo, numerosos dientes, mandíbula superior no fusionada con el suelo del cráneo y aleta dorsal no eréctil.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [52, 54], cita: 'SUBCLASE SELACHII : con' }],
    },
    {
      texto: 'Orden Squali (=Pleurotremata, tiburones): cuerpo fusiforme, hendiduras branquiales laterales, aletas pectorales libres, natación por ondulaciones de la cola heterocerca y machos con apéndices copuladores en las aletas pélvicas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [58, 60], cita: 'Orden Squali (= Pleurotremata)' }],
    },
    {
      texto: 'Orden Raji (Batoidea, Hypotremata, rayas): cuerpo deprimido, aletas pectorales ensanchadas unidas a la cabeza, 5 pares de hendiduras branquiales ventrales, boca ventral y un par de espiráculos dorsales por donde penetra el agua; nadan con las aletas pectorales, sobre todo en el fondo de aguas costeras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [64, 69], cita: 'aletas pectorales ensanchadas y unidas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Squalus la cabeza es obtusamente puntiaguda y el tronco fusiforme; dos aletas dorsales medias precedidas por espina en algunos, una aleta caudal media y dos pares de aletas laterales; los machos tienen un par de fórceps alargados para el acoplamiento; la cola es heterocerca con la columna prolongada en el lóbulo superior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [83, 89], cita: 'La cola es heterocerca' }],
    },
    {
      texto: 'En Squalus hay dos aberturas nasales y una ancha boca transversa en la parte ventral de la cabeza, ojos laterales sin párpados, cinco pares de hendiduras branquiales ovales delante de cada aleta pectoral, un espiráculo detrás de cada ojo y el ano entre las aletas pélvicas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [91, 94], cita: 'una ancha boca transversa' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'En Squalus la piel gris está cubierta por diminutas escamas placoideas, cada una con una espina puntiaguda dirigida hacia atrás, cubierta de esmalte y con una placa basal de dentina en la dermis.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [96, 98], cita: 'diminutas escamas placoideas provistas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'En Squalus el esqueleto es cartilaginoso reforzado por depósitos calcáreos; el notocordio persiste entre los espacios intervertebrales; cada vértebra tiene un centro anficélico en forma de carrete con arco neural (y hemal en la cola); cráneo con caja encefálica, cápsulas sensoriales y esqueleto visceral (mandíbulas, arco hioideo, 5 pares de arcos branquiales); cinturas pectoral en U y pélvica, y cartílagos en las aletas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [100, 114], cita: 'un centro en forma de carrete' }],
      },
    ],
    muscular: [
      {
        texto: 'En Squalus los músculos del cuerpo y la cola son segmentarios y producen las ondulaciones laterales de la locomoción; en las aletas pares, la región branquial y la cabeza hay músculos más especializados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [116, 119], cita: 'producir ondulaciones laterales del tronco' }],
      },
    ],
    digestivo: [
      {
        texto: 'En Squalus la boca tiene series transversales de dientes agudos renovables; corto esófago a un estómago en J con válvula pilórica; el intestino comunica con la cloaca y posee una válvula espiral que enlentece el paso del alimento y aumenta la superficie de absorción; hígado de 2 lóbulos, vesícula biliar, páncreas y una glándula rectal que secreta un fluido con cloruro sódico que ayuda al riñón a concentrar sal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [121, 137], cita: 'hay una válvula espiral' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En Squalus el tiburón traga agua por la boca y la fuerza hacia las aberturas branquiales y los espiráculos; las branquias tienen filamentos alargados con capilares donde la sangre descarga anhídrido carbónico y absorbe oxígeno.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [160, 164], cita: 'numerosos filamentos alargados y paralelos' }],
      },
    ],
    circulatorio: [
      {
        texto: 'En Squalus el corazón tiene seno venoso, aurícula, ventrículo de paredes gruesas y cono arterioso; la sangre pasa a la aorta ventral, por 5 pares de arterias aferentes a las branquias y luego por 4 pares de eferentes a la aorta dorsal; la sangre pasa por el corazón una sola vez por circuito y toda la sangre del corazón es venosa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [145, 156], cita: 'ventrículo de paredes gruesas y' }],
      },
    ],
    excretor: [
      {
        texto: 'En Squalus los dos riñones alargados están encima del celoma a cada lado de la aorta dorsal; conductillos segmentarios llevan la orina al uréter que desemboca por la papila urogenital única en la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [166, 170], cita: 'un conducto longitudinal, el uréter' }],
      },
    ],
    nervioso: [
      {
        texto: 'En Squalus el encéfalo es más avanzado que en las lampreas: lóbulos olfatorios, hemisferios cerebrales, diencéfalo con pedúnculo pineal e infundíbulum con hipófisis, lóbulos ópticos, gran cerebelo y médula oblongada; diez pares de nervios craneales y cordón espinal protegido por arcos neurales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [172, 184], cita: 'dos pares de lóbulos ópticos' }],
      },
    ],
    sentidos: [
      {
        texto: 'En Squalus el olfato es muy importante; los oídos internos tienen tres conductos semicirculares; la línea lateral es un surco con un canal de células sensitivas ciliadas; en la cabeza hay conductos con neuromastos y las ampollas de Lorenzini que responden a estímulos de presión de las olas y corrientes.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [186, 202], cita: 'las ampollas de Lorenzini' }],
      },
    ],
    reproductor: [
      {
        texto: 'En Squalus los sexos están separados: el macho tiene dos testículos con vasos eferentes a un vaso deferente contorneado que desemboca en la papila urogenital; en el apareamiento el esperma pasa a la cloaca de la hembra con ayuda de los fórceps (pterigopodios); la hembra tiene un solo ovario grande y dos oviductos con glándula de la concha y "útero" en las ovovivíparas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 218], cita: 'fórceps (pterigopodios). El sistema' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los huevos son grandes y se desarrollan lentamente (9-25 meses); las formas primitivas son ovíparas y depositan los huevos en una cápsula córnea ("bolsa de sirena") a veces con zarcillos; la mayor parte son ovovivíparos que retienen los huevos y dan luz a prole viva; en Mustelus se forma una "placenta" cuando el vitelo se agota.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [220, 230], cita: 'una cápsula córnea (bolsa de' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Las rayas viven principalmente en el fondo de las aguas costeras (algunas hasta 2700 m de profundidad) y penetran el agua por los espiráculos dorsales ya que la boca suele estar enterrada en la arena.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [64, 69], cita: 'el fondo de las aguas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Squalus',
      descripcion: 'organismo tipo de la anatomía del tiburón en el apunte; ovovivíparo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [81, 81], cita: 'ORGANIZACIÓN DE SQUALUS O MUSTELUS' }],
    },
    {
      nombre: 'Mustelus',
      descripcion: 'tiburón con aleta anal ventral y placenta en la gestación',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [81, 81], cita: 'ORGANIZACIÓN DE SQUALUS O MUSTELUS' }],
    },
    {
      nombre: 'Raja',
      descripcion: 'raya común, ejemplo del orden Raji',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [69, 69], cita: 'Ej.: Raja raya común' }],
    },
  ],
  notas: [],
};

export default taxon;
