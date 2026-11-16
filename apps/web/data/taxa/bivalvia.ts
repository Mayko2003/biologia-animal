import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'bivalvia',
  nombre: 'Bivalvia',
  nombreComun: 'Bivalvos',
  nivel: 'clase',
  padre: 'mollusca',
  orden: 3,
  resumen: [
    {
      texto: '(Pelecypoda o Lamellibranchia.) Contiene a los mejillones, almejas y ostras. Sus características generales —concha bivalva y cabeza reducida— reflejan la adaptación del grupo para la excavación en sustratos blandos, aunque muchas especies han colonizado secundariamente hábitats epibentónicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [188, 194], cita: 'los mejillones, almejas y ostras' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Comprimidos lateralmente, con un cuerpo blando dentro de una concha formada por dos valvas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [196, 198], cita: 'formada por dos valvas' }],
    },
    {
      texto: 'En la región dorsal de la concha están los dientes de la charnela, un ligamento de la charnela que junta las partes dorsales y separa las ventrales, y un umbo anterior rodeado de líneas de crecimiento concéntricas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 206], cita: 'los dientes de la charnela' }],
    },
    {
      texto: 'Por detrás, los bordes del manto forman dos sifones: el branquial (ventral) y el anal (dorsal); el agua entra y sale por estas aberturas por acción de cilios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [212, 214], cita: 'el branquial, ventral y el' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'La concha es algo ovalada y constituye un sólido esqueleto externo que protege al cuerpo; en ella se insertan músculos que permiten abrirla o cerrarla. Está formada por tres capas: un perióstraco externo delgado, de color y córneo; una capa prismática media de carbonato cálcico cristalizado; y el nácar interior o madreperla.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [200, 210], cita: 'el nácar interior o madreperla' }],
      },
    ],
    muscular: [
      {
        texto: 'En las valvas se insertan músculos que permiten que la concha se abra o se cierre; en las formas fijadas al sustrato es frecuente la reducción o pérdida del pie y del músculo aductor anterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [200, 240], cita: 'el músculo aductor anterior' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los bivalvos primitivos (protobranquios) son detritívoros selectivos que usan un par de tentáculos palpales para obtener y transportar las partículas alimenticias; el estómago está dotado de un protostilo y de una región de selección.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 231], cita: 'un par de tentáculos palpales' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La gran mayoría son lamelibranquios filtradores que utilizan sus branquias para la filtración del alimento, ya que además de su forma alargada y plegada poseen surcos alimentarios para el transporte horizontal de partículas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [233, 235], cita: 'son lamelibranquios filtradores y' }],
      },
      {
        texto: 'Los protobranquios poseen branquias bipectinadas con una corriente de ventilación que entra y sale por el extremo posterior del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 228], cita: 'branquias bipectinadas y generalmente' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos son separados y la fecundación es externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [221, 221], cita: 'Los sexos son separados' }],
      },
    ],
    tegumento: [
      {
        texto: 'El manto secreta las dos valvas de la concha; en el borde del manto puede haber tentáculos sensoriales y fotorreceptores.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Bivalvia/', titulo: 'Bivalvia - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón dentro de la cavidad pericárdica, como en el plan general de los moluscos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Metanefridios comunicados con la cavidad pericárdica, como en el plan general de los moluscos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso ganglionar, como en el plan general de los moluscos; la cabeza está reducida.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Las únicas estructuras externas son los palpos labiales; en algunos grupos hay tentáculos sensoriales y fotorreceptores en el borde del manto.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Bivalvia/', titulo: 'Bivalvia - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Sifones',
      datos: [
        {
          texto: 'Los bordes del manto forman dos sifones: el branquial ventral y el anal dorsal.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [212, 214], cita: 'forman dos sifones' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Desarrollo indirecto con larva trocósfera y veliger; en los mejillones de agua dulce (Anodonta) el desarrollo es directo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [221, 223], cita: 'larva trocósfera y veliger' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Muchos lamelibranquios viven sobre sustratos duros y se sujetan por filamentos del biso o por cementación de una valva; otros grupos perforan sustratos duros (rocas, conchas, corales, maderas) en forma mecánica usando los bordes anteriores de las valvas; unos cuantos viven libres desplazándose sobre el pie, minan en la arena o el barro, y otros son capaces de nadar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [237, 249], cita: 'los filamentos del biso' }],
    },
    {
      texto: 'Muchas especies integran la dieta del hombre; el nácar de las conchas se usa en la industria (botones, por ejemplo) y es conocido el uso de las perlas en joyería.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [251, 253], cita: 'el uso de las perlas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Anodonta',
      descripcion: 'mejillón de agua dulce con desarrollo directo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [222, 223], cita: 'mejillones de agua dulce (Anodonta)' }],
    },
    {
      nombre: 'Tridacna',
      descripcion: 'género del Indo Pacífico notorio por su tamaño gigante, llegando a medir 1,40 m',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [255, 257], cita: 'El género Tridacna' }],
    },
  ],
  notas: [],
};

export default taxon;
