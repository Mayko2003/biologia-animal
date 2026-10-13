import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'cephalopoda',
  nombre: 'Cephalopoda',
  nombreComun: 'Cefalópodos',
  nivel: 'clase',
  padre: 'mollusca',
  orden: 5,
  resumen: [
    {
      texto: '(O Siphonopoda.) Unas 600 especies actuales conocidas comúnmente como nautilos, calamares, pulpos, sepias y jibias; aunque algunos han adoptado secundariamente hábitos bentónicos, la clase está adaptada para la vida nadadora (pelágica) e incluye a los moluscos más especializados y activos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 294], cita: 'unas 600 especies actuales' }],
    },
    {
      texto: 'Algunas especies alcanzan proporciones gigantescas, habiéndose citado ejemplares de unos 16 metros de largo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [296, 298], cita: 'unos 16 metros de largo' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cabeza ventral y grande con dos conspicuos ojos y una boca central rodeada por brazos carnosos (10 en el calamar y 8 en el pulpo) que llevan ventosas; el 4° par son tentáculos largos y retráctiles. Tanto tentáculos como brazos representan el pie de otros moluscos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [300, 303], cita: 'rodeada por brazos carnosos' }],
    },
    {
      texto: 'El cuerpo largo y cónico posee una aleta triangular carnosa a cada lado del extremo posterior; la cabeza y el cuerpo se unen por un cuello alrededor del cual el borde libre del manto forma un collar laxo; debajo del cuello hay un sifón.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 315], cita: 'una aleta triangular carnosa' }],
    },
    {
      texto: 'La piel contiene cromatóforos con pigmento amarillo o pardo dentro de una cápsula elástica rodeada de células musculares que se contraen y dilatan rítmicamente, determinando que el animal adquiera un tono claro u oscuro.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [317, 319], cita: 'cromatóforos con pigmento amarillo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'En la pared superior (anterior) del cuerpo hay una pluma córnea (la concha, ausente en los pulpos) que da rigidez al cuerpo; una caja cartilaginosa rodea al cerebro, hay un cartílago nucal y un soporte semejante para el sifón y las aletas. Las conchas divididas en cámaras llenas de gas de algunos nautilos y sepias facilitan la flotación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [321, 327], cita: 'una pluma córnea' }],
      },
    ],
    muscular: [
      {
        texto: 'El manto, el sifón, las aletas y los brazos son musculares; mediante contracción y dilatación del manto entra y sale agua de la cavidad del manto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [329, 330], cita: 'aletas y los brazos son' }],
      },
    ],
    digestivo: [
      {
        texto: 'A continuación de la boca nace una faringe provista de 1 par de maxilas córneas semejantes a un pico de loro invertido, y una rádula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [305, 307], cita: 'un pico de loro invertido' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Para la respiración el agua entra y sale por el espacio existente entre el cuello y el collar.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [331, 333], cita: 'entre el cuello y el collar' }],
      },
    ],
    reproductor: [
      {
        texto: 'Sexos separados; el espermodáctilo (4° brazo alargado del macho) transfiere un espermatóforo a la cavidad del manto de la hembra, donde se desprende dicho extremo quedándose allí.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [335, 342], cita: 'espermodáctilo (4° brazo alargado' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Sifón (sistema cohete)',
      datos: [
        {
          texto: 'La locomoción se realiza por el sifón, en forma de sistema cohete.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [335, 335], cita: 'locomoción (sistema cohete)' }],
        },
      ],
    },
    {
      titulo: 'Cromatóforos',
      datos: [
        {
          texto: 'Células pigmentarias de la piel con cápsula elástica rodeada de células musculares que se contraen y dilatan rítmicamente, cambiando el tono del animal.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [317, 319], cita: 'una cápsula elástica rodeada' }],
        },
      ],
    },
    {
      titulo: 'Glándula de la tinta',
      datos: [
        {
          texto: 'Excepto en Nautilus y algunos cefalópodos de aguas profundas, poseen una glándula de la tinta o bolsa de la tinta que desemboca en el recto por detrás del ano; produce un líquido marrón o negro con alta concentración de melanina que almacenan en un reservorio. Ante el peligro expulsan tinta a través del ano formando un "doble" que confunde al enemigo; su naturaleza alcaloide puede ser repulsiva para los depredadores y bloquea sus órganos quimiorreceptores.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [349, 356], cita: 'una glándula de la tinta' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los huevos son grandes, puestos en masas gelatinosas grandes y alargadas; no existen larvas, desarrollo directo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [344, 346], cita: 'masas gelatinosas grandes y alargadas' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Todas las especies se comportan como depredadoras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [348, 348], cita: 'se comportan como depredadoras' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Nautilus',
      descripcion: 'cefalópodo con concha dividida en cámaras llenas de gas que facilitan la flotación; sin glándula de la tinta',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [325, 349], cita: 'Excepto en Nautilus' }],
    },
  ],
  notas: [],
};

export default taxon;
