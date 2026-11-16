import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'acari',
  nombre: 'Acari',
  nombreComun: 'Ácaros y garrapatas',
  nivel: 'subclase',
  padre: 'arachnida',
  orden: 3,
  resumen: [
    {
      texto: 'Subclase de arácnidos que incluye ácaros y garrapatas. Ocupan hábitats muy diversos y han colonizado casi todos los ambientes, tanto terrestres como dulceacuícolas y marinos (hasta 5.000 m), incluso polos, altas montañas, desiertos, el suelo hasta 10 m de profundidad y aguas termales superiores a 50 °C.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [367, 397], cita: 'hábitats muy diversos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo tiene forma de saco y está dividido básicamente en dos regiones. La anterior, gnatosoma o proterosoma, lleva los quelíceros y los pedipalpos; los quelíceros, importantes en la captura e ingestión del alimento, tienen la forma primitiva de quela dentada o pinza con un segmento distal móvil articulado con el dedo fijo (de ellos derivan tipos perforadores y chupadores); los pedipalpos constan de uno a seis segmentos y sirven para localizar y manipular el alimento, dotados de mecanorreceptores y quimiorreceptores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 385], cita: 'gnatosoma o proterosoma' }],
    },
    {
      texto: 'En la región posterior se distingue el propodosoma (primer y segundo par de patas), el metapodosoma (tercer y cuarto par) y el opistosoma, posterior al cuarto par de patas, que lleva el ano y la abertura genital. Las patas constan de siete artejos: coxa, trocánter, fémur, genu, tibia, tarso y pretarso.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [387, 391], cita: 'patas constan de siete' }],
    },
    {
      texto: 'De cuerpo blando y tamaño muy pequeño (de unos 0,5 mm a menos de 1 mm); a simple vista se detectan como "polvo que se mueve".',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [405, 407], cita: 'polvo que se mueve' }],
    },
  ],
  embriologia: {},
  sistemas: {
    digestivo: [
      {
        texto: 'Estomodeo formado por boca, faringe (bomba faríngea: órgano de succión), esófago y válvula esofágica; mesenterón en forma de saco con divertículos llamados "ciegos gástricos"; y proctodeo formado por colon, tubos de Malpighi, saco rectal, recto y ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 415], cita: 'Mesenterón: en forma de' }],
      },
      {
        texto: 'Los ácaros, a diferencia del resto de los arácnidos, pueden ingerir alimentos sólidos y son los únicos capaces de succionar los jugos de las células vegetales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [417, 419], cita: 'ingerir alimentos sólidos' }],
      },
    ],
    excretor: [
      {
        texto: 'El sistema excretor es sencillo, constituido generalmente por los tubos de Malpighi que desembocan en el saco rectal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'en el saco rectal' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso está formado por una masa compacta de tejido nervioso que es atravesada por el esófago.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [425, 427], cita: 'masa compacta de tejido' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio es simple: no se diferencia corazón ni aorta; la hemolinfa incolora circula por la cavidad corporal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [429, 431], cita: 'La hemolinfa incolora circula' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Formado por espiráculos y un canal respiratorio o "peritrema" que se continúa en troncos traqueales, tráqueas y traqueolas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [433, 435], cita: 'espiráculos y un canal' }],
      },
    ],
    sentidos: [
      {
        texto: 'Los pedipalpos están dotados de mecanorreceptores y quimiorreceptores para localizar y manipular el alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [378, 384], cita: 'mecanorreceptores y quimiorreceptores' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados; a menudo macho y hembra difieren ampliamente uno de otro y la presencia de machos heteromórficos (de formas distintas) crea más confusión en su clasificación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [445, 447], cita: 'los machos heteromórficos' }],
      },
    ],
    tegumento: [
      {
        texto: 'Exoesqueleto quitinoso del plan quelicerado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso; el cuerpo aparece poco segmentado por la fusión de los tagmas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Acari', titulo: 'Acari - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos del exoesqueleto asociados a las patas y piezas bucales.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Pueden tener reproducción sexual y asexual o partenogenética; la multiplicación puede ser ovípara, ovovivípara o vivípara. Pueden multiplicarse en forma explosiva y en pocas semanas alcanzar poblaciones enormes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [437, 443], cita: 'reproducción sexual y asexual' }],
    },
    {
      texto: 'El ciclo de vida normalmente es indirecto: una ninfa hexápoda emerge de un huevo y pasa por entre uno a tres períodos ninfales de ocho patas antes de llegar a adulto; cada período se separa por un estado de inmovilidad (hipopus) y los tres estados ninfales se conocen como protoninfa, deutoninfa y tritoninfa. La emergencia del huevo puede ocurrir dentro del cuerpo de la hembra y el nacimiento puede efectuarse en estados de larva, ninfa e incluso de adulto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [447, 458], cita: 'protoninfa, deutoninfa y tritoninfa' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Muchos ácaros se alimentan de plantas (musgo, helechos, hojas, tallos, flores y frutos), de líquenes y microorganismos, de otros artrópodos y de otros ácaros; muchos viven sobre los cultivos y son plagas o agentes biocontroladores; mamíferos y aves son hospedadores de innumerables especies, y también reptiles y algunos anfibios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [397, 403], cita: 'útiles agentes biocontroladores' }],
    },
    {
      texto: 'Infestan alimentos (cereales, queso, jamón, frutos secos) si tienen suficiente humedad, producen olores en los alimentos y dermatitis a las personas que los manipulan, así como trastornos digestivos a los animales que consumen los productos contaminados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [405, 410], cita: 'dermatitis a las personas' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
