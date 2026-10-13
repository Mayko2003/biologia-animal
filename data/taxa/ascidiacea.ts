import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'ascidiacea',
  nombre: 'Ascidiacea',
  nombreComun: 'Ascidias',
  nivel: 'clase',
  padre: 'urochordata',
  orden: 1,
  resumen: [
    {
      texto: 'Las ascidias se conocen como jeringuillas de mar: marinas y sésiles, comunes en todo el mundo; aunque algunas especies son grandes y solitarias, la mayoría son coloniales, con colonias de unos pocos a cientos de zooides.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [100, 105], cita: 'jeringuillas de mar' }],
    },
    {
      texto: 'Se encuentran sobre todo en aguas someras fijas a rocas, conchas, pilotes y fondos de embarcaciones, e incluso al lodo y arena por filamentos o pedúnculos; también hay más de 119 especies a profundidades mayores de 200 m y unas pocas intersticiales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [105, 113], cita: 'encuentran en aguas someras' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La forma del cuerpo varía de esférica o cilíndrica a totalmente irregular; un extremo se fija al sustrato y el opuesto tiene dos aberturas: los sifones bucal y atrial. El tamaño va desde el de una semilla (~1 mm) hasta el de una gran papa (Cnemidocarpa verrucosa antártica alcanza 18 cm).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [115, 132], cita: 'sifones bucal y atrial' }],
    },
    {
      texto: 'El adulto está cubierto por una gruesa capa elástica, la túnica, de celulosa (rara en los animales), tapizada por el manto membranoso con fibras musculares y vasos sanguíneos; las dos aberturas externas son el sifón inhalante (branquial) y el sifón exhalante (atrial).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 175], cita: 'capa elástica, la túnica' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Túnica gruesa y elástica de celulosa (sustancia rara en animales) tapizada por el manto con fibras musculares y vasos sanguíneos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 172], cita: 'la túnica, de celulosa' }],
      },
    ],
    digestivo: [
      {
        texto: 'Comienza en el sifón inhalante con un círculo de tentáculos sensitivos piliformes en la entrada del saco branquial; el endostilo, surco vertical de células mucosas y ciliadas, conduce el alimento; un corto esófago lleva al estómago dilatado que comunica con el intestino curvado que termina en el ano bajo el sifón exhalante; hay un hígado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [180, 195], cita: 'surco vertical tapizado' }],
      },
    ],
    respiratorio: [
      {
        texto: 'El agua con oxígeno y plancton entra por el sifón inhalante; la pared del saco branquial tiene numerosos poros rodeados de células ciliadas que mueven el agua hacia la cavidad atrial y de allí al sifón exhalante; una serie de pequeños vasos rodea los poros y constituye el mecanismo respiratorio.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [173, 205], cita: 'constituyen el mecanismo respiratorio' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón tubular en la cavidad visceral con una aorta en cada extremo (una irriga el estómago, la túnica y un lado del saco branquial; la otra el otro lado). La corriente sanguínea cambia de sentido a cortos intervalos y no hay válvulas; la sangre puede ser incolora, roja o azul, y algunas ascidias tienen vanadocitos con altas concentraciones de vanadio.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [201, 211], cita: 'un corazón tubular dentro' }],
      },
    ],
    excretor: [
      {
        texto: 'Cerca del intestino hay un órgano sin conducto de probable función excretora; las ascidias son amoniotélicas, con órganos excretores inusuales, y el pericardio, epicardio y sacos renales pueden tener un papel excretor por acumulación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [213, 217], cita: 'ascidias son amoniotélicas' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso está representado por un largo ganglio del tronco entre los dos sifones, del que parten nervios a las regiones corporales; la glándula neural próxima tiene estructura semejante a la pituitaria y posible función endocrina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [219, 222], cita: 'ganglio del tronco' }],
      },
    ],
    reproductor: [
      {
        texto: 'Son hermafroditas pero autoestériles: ovario sobre el asa del intestino con oviducto que se abre en la cavidad atrial cerca del ano, y testículos de conductillos ramificados sobre el ovario y el intestino que descargan en un vaso deferente paralelo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [224, 228], cita: 'hermafroditas pero autoestériles' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Del pequeño huevo emerge una larva nadadora y transparente tipo renacuajo: cola con notocordio, cordón nervioso tubular y músculos segmentarios, 3 glándulas adherentes, tubo digestivo completo con hendiduras branquiales y endostilo, y órganos sensitivos (ojo medio y otolito).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [144, 153], cita: 'larva nadadora y transparente' }],
    },
    {
      texto: 'La larva se adhiere y sufre una metamorfosis retrógada: la cola se reabsorbe o se desprende con el notocordio, el cordón nervioso y los músculos (solo persiste el ganglio del tronco), el cuerpo rota casi 180° dejando la boca arriba, se forman las gónadas y la túnica encierra todo el animal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [155, 167], cita: '(metamorfosis retrógada) en la' }],
    },
    {
      texto: 'Algunos tunicados pueden reproducirse asexualmente por gemación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [230, 230], cita: 'asexualmente por gemación' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Se alimentan solo de plancton, por lo que no necesitan apéndices largos para manipular el alimento; las especies de aguas profundas habitan fondos blandos como zooides esféricos anclados por fibrillas o formas pedunculadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [138, 184], cita: 'sólo de plancton' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Cnemidocarpa verrucosa',
      descripcion: 'ascidia antártica que alcanza los 18 cm',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [132, 132], cita: 'Cnemidocarpa verrucosa es' }],
    },
    {
      nombre: 'Halocynthia pyriformis',
      descripcion: 'ascidia del Atlántico de EEUU conocida como melocotón de mar',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [132, 134], cita: 'se encuentra en la' }],
    },
  ],
  notas: [],
};

export default taxon;
