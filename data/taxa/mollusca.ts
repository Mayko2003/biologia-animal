import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;
const P = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'mollusca',
  nombre: 'Mollusca',
  nombreComun: 'Moluscos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 5,
  resumen: [
    {
      texto: '(Lat. Mollis = blando.) De hábitat marino, dulceacuícola y terrestre, pero siempre en lugares húmedos. Es uno de los phyla más grandes del Reino Animal, ubicándose por su número después de los artrópodos: almejas, mejillones, ostras, abalones u orejas de mar, calamares, sepias, pulpos, dientes o colmillos marinos y una enorme variedad de caracoles.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [11, 17], cita: 'habitat marino, dulceacuícola y terrestre' }],
    },
    {
      texto: 'Se han descrito más de 50000 especies vivientes a las que deben sumarse unas 38000 especies de fósiles; las conchas calcáreas tienen altas probabilidades de fosilización y su registro data del Cámbrico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [19, 21], cita: '50000 especies vivientes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Un molusco generalizado posee un pie musculoso y aplanado adaptado para reptar, una concha calcárea dorsal en forma de escudo oval y convexo que protege los órganos internos y es secretada por el manto, y una cabeza poco diferenciada provista de una rádula con función alimentaria.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [23, 26], cita: 'pie musculoso y aplanado' }],
    },
    {
      texto: 'El margen de la concha y el borde del manto rebasan un poco el tamaño del cuerpo y en la extremidad posterior forman la cavidad del manto o cavidad paleal, donde hay varios pares de branquias y un par de nefridioporos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [33, 36], cita: 'cavidad del manto o cavidad' }],
    },
  ],
  embriologia: {
    segmentacion: {
      valor: 'espiral',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [17, 19], cita: 'espiral (Platyhelminthes, Annelida, Nemertea' }],
    },
    cavidad: {
      valor: 'esquizocelomado',
      nota: 'Celomados, pero el celoma queda reducido en el adulto a vestigios alrededor de nefridios, gónadas, corazón e intestino.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'El manto secreta la concha; una serie de músculos retractores del pie permiten que el animal se retraiga hasta que la concha entra en contacto con el sustrato.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 31], cita: 'músculos retractores del pie' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Concha calcárea dorsal en forma de escudo oval y convexo, que protege a los órganos internos y es secretada por el manto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [24, 26], cita: 'concha calcárea dorsal' }],
      },
    ],
    digestivo: [
      {
        texto: 'La rádula es una cinta de dientes quitinosos curvos situada sobre un cojín cartilaginoso (el odontóforo) y actúa como órgano o lengua raspadora durante la toma del alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [46, 48], cita: 'La rádula es una cinta' }],
      },
      {
        texto: 'El tubo digestivo es completo y en forma de U, con el ano en la cavidad del manto y un hígado o hepatopáncreas; el estómago primitivo en forma de cucurucho procesa partículas finas (algas) raspadas por la rádula, con un saco del estilo donde gira una masa de moco, una región separadora y digestión intracelular en las glándulas digestivas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [55, 64], cita: 'en forma de una U' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Las branquias o ctenidios están formados por numerosos filamentos aplanados a ambos lados de un eje central; cilios laterales crean la corriente de agua hacia la cavidad paleal y cada branquia posee vasos sanguíneos para el intercambio gaseoso. La respiración también puede realizarse por un pulmón, por el manto o por la epidermis.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [38, 44], cita: 'branquias o ctenidios' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Básicamente un hemocele: la sangre pasa de las branquias a una o más pares de aurículas, de ahí a un ventrículo ventral que la bombea a una aorta que la distribuye a senos sanguíneos; el corazón está rodeado por la cavidad pericárdica (cámara celomática) que recibe un ultrafiltrado de sangre; la sangre contiene amebocitos y hemocianina como pigmento respiratorio.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [66, 70], cita: 'básicamente un hemocele' }],
      },
    ],
    excretor: [
      {
        texto: 'Los metanefridios tubulares denominados riñones drenan la cavidad pericárdica, modifican el ultrafiltrado y desembocan en la cavidad paleal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 74], cita: 'metanefridios tubulares denominados riñones' }],
      },
    ],
    nervioso: [
      {
        texto: 'El modelo general consiste en un anillo periesofágico del que salen un par de cordones nerviosos pedios que inervan el pie y otro par de cordones nerviosos viscerales que inervan el manto y la masa visceral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'un anillo periesofágico del que' }],
      },
    ],
    sentidos: [
      {
        texto: 'Los órganos sensoriales más típicos son los tentáculos, los ojos, los estatocistos y uno o dos ofradios situados en la cavidad paleal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [79, 80], cita: 'ofradios situados en la' }],
      },
    ],
    reproductor: [
      {
        texto: 'El molusco generalizado es dioico, con un par de gónadas dentro de la masa visceral junto al pericardio; los gametos maduran en la cavidad celomática pericárdica y los nefridios actúan como gonoductos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [82, 84], cita: 'los nefridios actúan como gonoductos' }],
      },
    ],
    muscular: [
      {
        texto: 'El cuerpo se divide en cabeza, masa visceral y un pie muscular característico; la rádula (cuando existe) está provista de potentes músculos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Rádula',
      datos: [
        {
          texto: 'Cinta de dientes quitinosos curvos sobre el odontóforo (cojín cartilaginoso); órgano raspador para la toma del alimento.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [46, 48], cita: 'dientes quitinosos curvos' }],
        },
      ],
    },
    {
      titulo: 'Cavidad paleal',
      datos: [
        {
          texto: 'Cavidad del manto en la extremidad posterior; contiene varios pares de branquias y un par de nefridioporos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [33, 36], cita: 'varios pares de branquias' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En los moluscos primitivos la fecundación es externa y el desarrollo es indirecto planctónico con dos formas larvales sucesivas: la trocósfera y la véliger.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [86, 88], cita: 'la trocósfera y la veliger' }],
    },
  ],
  bioecologia: [
      {
        texto: 'La gástrula se desarrolla en una larva trocófora planctónica, que en la mayoría pasa a larva velígera antes de la metamorfosis al hábito bentónico del adulto.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
