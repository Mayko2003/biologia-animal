import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'rotifera',
  nombre: 'Rotifera',
  nombreComun: 'Rotíferos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 3,
  resumen: [
    {
      texto: '(Del L. rota, rueda y fera, los que llevan.) Conocidos vulgarmente como animales rueda; se conocen unas 1500 especies microscópicas, de 0,1 a 1 mm de longitud. La mayoría son dulceacuícolas e importantes en el reciclado de nutrientes en los sistemas acuáticos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [448, 452], cita: 'vulgarmente como animales rueda' }],
    },
    {
      texto: 'Solitarios, libres, nadadores o reptores; algunas especies son sésiles o coloniales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [453, 454], cita: 'Solitarios, libres, nadadores o' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo generalmente transparente (algunas formas verdes, anaranjadas, rojas o pardas por la coloración del aparato digestivo), alargado o sacciforme, dividido en una región anterior corta, un gran tronco y un pie terminal; casi siempre anillado u ornamentado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [456, 459], cita: 'alargado o sacciforme' }],
    },
    {
      texto: 'El extremo anterior lleva un órgano ciliado denominado corona (campo bucal) que se emplea para la natación y la alimentación. En el tronco la epidermis suele estar engrosada y forma la loriga. El pie es estrecho, puede tener cuatro proyecciones llamadas dedos, es un órgano de fijación y contiene glándulas pédicas que producen sustancias adhesivas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [459, 463], cita: 'órgano ciliado denominado corona' }],
    },
  ],
  embriologia: {
    segmentacion: {
      valor: 'en-T',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [17, 18], cita: 'segmentación del huevo en T' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'La pared del cuerpo generalmente carece de cutícula; la epidermis es delgada y sincitial y posee un número característico de núcleos para cada especie.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [464, 465], cita: 'epidermis es delgada y sincitial' }],
      },
    ],
    muscular: [
      {
        texto: 'Debajo de la epidermis están los músculos circulares y longitudinales (retractores).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [465, 466], cita: 'músculos circulares y longitudinales' }],
      },
    ],
    digestivo: [
      {
        texto: 'Boca, faringe o mastax (oval o alargada, bien muscularizada, sirve para capturar y triturar el alimento, con glándulas salivales), esófago tubular, estómago y ano dorsal cerca del extremo del tronco; un par de glándulas gástricas en la unión esófago-estómago secretan enzimas digestivas. Los órganos excretores y el oviducto desembocan en el extremo terminal del intestino, que funciona como cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [472, 478], cita: 'faringe o mastax' }],
      },
    ],
    excretor: [
      {
        texto: 'Protonefridios, uno a cada lado del cuerpo, que comunican con un tubo colector que lleva a la vejiga urinaria, que se abre en el lado ventral de la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [480, 482], cita: 'protonefridios, uno a cada lado' }],
      },
    ],
    nervioso: [
      {
        texto: 'El encéfalo consta de una masa ganglionar dorsal sobre el mastax, de la que surge un número variable de nervios hacia los órganos sensoriales anteriores y otras partes del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [491, 493], cita: 'una masa ganglionar dorsal' }],
      },
    ],
    sentidos: [
      {
        texto: 'Cerdas en diferentes partes del cuerpo, una antena dorsal y uno o dos ocelos cerebrales de función fotorreceptora.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [495, 497], cita: 'una antena dorsal y uno' }],
      },
    ],
    reproductor: [
      {
        texto: 'Dioicos, o existen hembras partenogenéticas. El aparato femenino tiene uno o dos ovarios con oviductos que desembocan en la cloaca; el macho es efímero, con aparato digestivo vestigial o ausente, un testículo y un espermiducto que comunica por un gonoporo con la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [499, 503], cita: 'los individuos son dioicos' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La reproducción es sexual y los individuos son dioicos, o bien existen hembras partenogenéticas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [499, 500], cita: 'La reproducción es sexual' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los rotíferos se mueven por reptación, natación o propulsión; algunos son sésiles sobre plantas o algas. Algunas especies son marinas y algunas viven entre los musgos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [452, 470], cita: 'se mueven por reptación' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
