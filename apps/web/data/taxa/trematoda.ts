import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'trematoda',
  nombre: 'Trematoda',
  nombreComun: 'Trematodos',
  nivel: 'clase',
  padre: 'platyhelminthes',
  orden: 2,
  resumen: [
    {
      texto: 'Se han descripto aproximadamente unas 12.100 especies; son todos gusanos planos parásitos de vertebrados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [151, 152], cita: 'aproximadamente unas 12.100 especies' }],
    },
    {
      texto: 'El apunte desarrolla el Orden Digenea (del Gr. dis, doble y genos, raza), conocidos como duelas: endoparásitos con una serie de estados que deben vivir en órganos de dos o más especies de hospederos para completar su ciclo biológico — las larvas en un caracol u otro invertebrado y el adulto en un vertebrado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [160, 165], cita: 'Orden Digenea: (del Gr.' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El individuo adulto de una duela (Fasciola hepatica) tiene forma de hoja y alcanza unos 30 mm; es redondeada anteriormente y obtusamente puntiaguda por detrás, con una ventosa anterior terminal que rodea a la boca y, inmediatamente detrás, la ventosa ventral que sirve para adherirse al hospedero; entre ambas ventosas está el poro genital.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [187, 190], cita: 'forma de hoja y alcanza unos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'El cuerpo está cubierto por una cutícula carente de cilios, excepto en algunas fases larvarias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [152, 153], cita: 'cutícula carente de cilios' }],
      },
    ],
    muscular: [
      {
        texto: 'Como en los turbelarios existen complejas capas musculares; entre los órganos internos hay parénquima.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [156, 196], cita: 'complejas capas musculares' }],
      },
    ],
    digestivo: [
      {
        texto: 'El tubo digestivo es incompleto; se alimentan de tejidos o jugos del hospedador al que parasitan. En Fasciola el sistema digestivo tiene dos ramas que se extienden a lo largo del cuerpo y comprende boca, faringe muscular, un corto esófago y un estómago.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [155, 194], cita: 'El tubo digestivo es incompleto' }],
      },
    ],
    excretor: [
      {
        texto: 'En Fasciola consta de células flamíferas unidas a un conducto principal que se abre en un poro posterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [197, 199], cita: 'células flamíferas unidas a' }],
      },
    ],
    nervioso: [
      {
        texto: 'En Fasciola está formado por un ganglio doble cercano al esófago, dos conductos longitudinales y varios nervios.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [201, 203], cita: 'un ganglio doble cercano al' }],
      },
    ],
    sentidos: [
      {
        texto: 'En algunas larvas suelen encontrarse órganos de los sentidos, tales como manchas oculares, que pueden encontrarse también en formas ectoparásitas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 158], cita: 'órganos de los sentidos, tales' }],
      },
    ],
    reproductor: [
      {
        texto: 'En Fasciola los sexos son separados. Masculino: 2 testículos muy ramificados, vesícula seminal que comunica con el pene dentro del orificio genital y glándula prostática. Femenino: un ovario ramificado en el lado derecho, oviducto que comunica con el ootipo, al que continúa el útero que se abre en la abertura genital.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [205, 209], cita: '2 testículos muy ramificados' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto; el cuerpo es de tipo macizo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin aparato circulatorio ni respiratorio; estas funciones se realizan por absorción a través de la pared del cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Platyhelminthes/', titulo: 'Platyhelminthes - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin aparato circulatorio ni respiratorio; estas funciones se realizan por absorción a través de la pared del cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Platyhelminthes/', titulo: 'Platyhelminthes - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'En Fasciola la multiplicación es ovípara: los huevos salen por el poro genital, conservan la viabilidad por varios meses y en ambiente cálido y húmedo se desarrollan en 9 o más días; temperaturas inferiores a 10° impiden el desarrollo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [210, 212], cita: 'La multiplicación es ovípara' }],
    },
    {
      texto: 'Ciclo biológico (desarrollo indirecto con varias fases larvarias): de cada huevo nace un miracidio (larva microscópica ciliada, con rostro anterior puntiagudo y dos manchas oculares) que nada no más de 8 horas y muere si no encuentra el caracol Limnea viatrix; en el caracol pierde los cilios y se convierte en esporocisto, dentro del cual se producen partenogenéticamente las redias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [214, 222], cita: 'una larva microscópica pluricelular y ciliada' }],
    },
    {
      texto: 'Las redias emigran al hígado del caracol y pueden producirse más redias por partenogénesis; finalmente se producen las cercarias (cola larga y cuerpo en forma de disco con ventosa oral y ventral), que salen del caracol para nadar y luego se fijan sobre vegetales próximos al agua, pierden la cola y se convierten en metacercarias enquistadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [222, 227], cita: 'otras larvas denominadas cercarias' }],
    },
    {
      texto: 'Cuando el hombre u otro hospedero adecuado (cordero, etc.) come vegetales infestados, digiere la cubierta de los quistes y las larvas penetran a través de la pared intestinal hasta la cavidad del cuerpo en busca del hígado, donde minan el parénquima hepático antes de penetrar a los conductos biliares para madurar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [229, 232], cita: 'comen vegetales infestados' }],
    },
    {
      texto: 'Como compensación a las probabilidades desfavorables del ciclo, cada duela adulta puede producir hasta medio millón de huevos y la multiplicación partenogenética en el caracol puede producir hasta 300 larvas a partir de un solo huevo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [238, 240], cita: 'hasta medio millón de huevos' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Fasciola hepatica ("la duela del hígado del cordero") habita en los conductos biliares de vertebrados: lo más frecuente es encontrarla en el cordero, las cabras y el ganado vacuno, a veces en otros mamíferos y ocasionalmente en el hombre. Produce una enfermedad grave: las infecciones graves dan lugar a numerosas muertes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [167, 174], cita: 'habita en los conductos biliares' }],
    },
    {
      texto: 'Las duelas se hallan únicamente en las zonas o pastos donde hay áreas pantanosas en las que puedan desarrollarse los caracoles apropiados, generalmente de la especie Limnea viatrix.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [176, 178], cita: 'zonas o pastos donde hay' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Fasciola hepatica',
      descripcion: 'la duela del hígado del cordero; endoparásita de conductos biliares de vertebrados',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [167, 168], cita: 'Fasciola hepática “La duela' }],
    },
  ],
  notas: [],
};

export default taxon;
