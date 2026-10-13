import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'araneida',
  nombre: 'Araneida',
  nombreComun: 'Arañas',
  nivel: 'subclase',
  padre: 'arachnida',
  orden: 1,
  resumen: [
    {
      texto: 'Incluye unas 32.000 especies de arañas cuyas poblaciones también son muy grandes; de tamaño entre 0,5 mm y 9 cm de longitud en las tarántulas, arañas mono o arañas pollito.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [164, 167], cita: 'unas 32.000 especies de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cefalotórax o prosoma bien diferenciado y convexo, lleva los ocho ojos en la parte anterior; en la parte ventral hay un esternón frente al cual existe una placa mediana conocida como labio.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 171], cita: 'los ocho ojos' }],
    },
    {
      texto: 'Cada quelícero consta de una uña y una pieza basal con un surco en el que se pliega la uña; los pedipalpos de la hembra son cortos como patas, pero los del macho se han modificado en órganos copuladores con el artejo distal engrosado en forma de maza. Las cuatro patas (cuatro pares) son de longitud y grosor variable según el hábito.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [173, 183], cita: 'modificado en órganos copuladores' }],
    },
    {
      texto: 'El abdomen es alargado o globoso y solo se presenta segmentado en especies muy primitivas; está unido al cefalotórax por una porción corta y estrecha denominada pedicelo. En el lado ventral anterior existe un surco transversal (surco epigástrico) donde se localizan las aberturas genitales y los espiráculos de los pulmones.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [185, 191], cita: 'y estrecha denominada pedicelo' }],
    },
    {
      texto: 'El extremo posterior del abdomen lleva un grupo de apéndices modificados, los órganos de la seda, llamados hileras; en las formas primitivas hay cuatro pares y en la mayoría el número se reduce a tres, uno muy pequeño.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [193, 197], cita: 'de la seda, llamados hileras' }],
    },
  ],
  embriologia: {},
  sistemas: {
    digestivo: [
      {
        texto: 'Boca, esófago largo y estrecho, estómago chupador operado por músculos, estómago principal en el cefalotórax con 5 pares de ciegos o bolsas (una dorsal y una hacia cada pata), intestino dentro del abdomen donde desembocan los conductos del hígado, y recto con una ancha bolsa estercoral que comunica con el ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 257], cita: 'estómago chupador operado por' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El corazón es un tubo alargado, estrecho, muscular y contráctil situado dorsalmente en el abdomen, con tres pares de ostíolos y rodeado por un pericardio tubular; sale una aorta caudal hacia atrás y una aorta anterior con arterias pares a estómago, patas, ojos y glándula del veneno. La sangre incolora contiene corpúsculos incoloros y hemocianina; el corazón la impele a los senos entre los tejidos, pasa a los sacos pulmonares donde se oxigena y vuelve por venas pulmonares a la cavidad pericárdica.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [259, 266], cita: 'tres pares de aberturas' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La respiración se verifica en los sacos pulmonares en forma de libro (filotráqueas) con unas 15 láminas foliáceas que contienen finos capilares sanguíneos; en el extremo del abdomen existen también tráqueas que se abren por sus espiráculos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [273, 275], cita: 'sacos pulmonares en forma' }],
      },
    ],
    excretor: [
      {
        texto: 'La excreción la realizan tubos de Malpighio que se comunican con el intestino y una o dos glándulas coxales situadas en el suelo del cefalotórax que descargan sus productos entre las patas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [277, 279], cita: 'tubos de Malpighio' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un ganglio bilobulado sobre el esófago comunica mediante dos gruesos conectivos con una gran masa nerviosa ventral de donde irradian nervios a todos los órganos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [281, 283], cita: 'un ganglio bilobulado sobre' }],
      },
    ],
    sentidos: [
      {
        texto: 'Los órganos de los sentidos son los ojos, cerdas sensitivas para el tacto ubicadas en los pedipalpos, estructuras productoras de sonidos solo presentes en algunas arañas, y el olfato bien desarrollado que parece residir en diminutos órganos sobre el cuerpo y los apéndices.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [283, 286], cita: 'cerdas sensitivas para el' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados y las hembras son mayores que los machos. El reproductor masculino está formado por dos testículos con vasos eferentes y una vesícula seminal única; en las hembras hay dos ovarios grandes y huecos, cada uno con un oviducto que comunica con la vagina, y dos receptáculos seminales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 295], cita: 'una vesícula seminal única' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Hileras y seda',
      datos: [
        {
          texto: 'En las hileras desembocan las glándulas de la seda, grandes y localizadas en la parte posterior del abdomen; la seda es de constitución proteica, sale como un líquido que se endurece por el estiramiento (que cambia su configuración molecular), con consistencia semejante al nylon pero mucho más elástica.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 212], cita: 'glándulas de la seda' }],
        },
        {
          texto: 'La seda juega un papel preponderante: atrapan presas, forran los huevos en un forro sedoso, el macho la usa en la transferencia del esperma a los órganos copuladores, y forman una línea de seguridad continua; las crías usan un hilo de seda para ser transportadas por el aire (aerostación).',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [213, 230], cita: 'línea de seguridad' }],
        },
      ],
    },
    {
      titulo: 'Glándula del veneno',
      datos: [
        {
          texto: 'Las arañas muerden a sus presas con los quelíceros, en cada uno de los cuales se encuentra la glándula del veneno que se abre en el extremo de la uña.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [245, 247], cita: 'la glándula del veneno' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los sexos están separados; la multiplicación es ovípara y el desarrollo directo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 297], cita: 'multiplicación es ovípara' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Las arañas son depredadoras, principalmente de insectos; muchas capturan presas con telarañas (reemplazadas a diario porque la seda fresca pierde adherencia; unos 30 m de seda en 20 minutos) y otras activas, corredoras o deambulantes, saltan sobre sus presas. Las tejedoras no poseen buena vista: la vibración de la telaraña les sirve para localizar la presa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 243], cita: 'depredadoras, principalmente de insectos' }],
    },
    {
      texto: 'Muchas arañas construyen nidos debajo de cortezas o piedras que les sirven de refugio o para invernar, y pueden evitar la inundación colocando una burbuja de aire en el interior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [224, 226], cita: 'nidos debajo de cortezas' }],
    },
    {
      texto: 'Algunas especies son venenosas para el hombre: Latrodectus mactans (viuda negra, veneno neurotóxico) y Loxoceles sp. (veneno hemolítico que produce necrosis local difícil de cicatrizar).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 251], cita: 'Latrodectus mactans (Viuda negra' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Latrodectus mactans',
      descripcion: 'viuda negra; veneno con acción neurotóxica',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 250], cita: 'Viuda negra, cuyo' }],
    },
    {
      nombre: 'Loxoceles',
      descripcion: 'veneno hemolítico que produce necrosis local difícil de cicatrizar',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [250, 251], cita: 'veneno hemolítico que produce' }],
    },
  ],
  notas: [],
};

export default taxon;
