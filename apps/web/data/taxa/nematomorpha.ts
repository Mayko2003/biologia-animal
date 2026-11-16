import type { Taxon } from '@/lib/types';

const A = 'nematodos.md' as const;

const taxon: Taxon = {
  slug: 'nematomorpha',
  nombre: 'Nematomorpha',
  nombreComun: 'Nematomorfos',
  nivel: 'phylum',
  padre: 'ecdysozoa',
  orden: 2,
  resumen: [
    {
      texto: 'Animales semejantes a nematodos; se conocen aproximadamente unas 320 especies. Los adultos son gusanos largos conocidos vulgarmente como gusanos pelo o crines de caballo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [189, 196], cita: 'pelo o crines de caballo' }],
    },
    {
      texto: 'Los adultos son de vida libre y corta, pero los juveniles parasitan a los artrópodos (saltamontes) y rara vez al hombre. Los gordioideos viven en aguas dulces y suelos húmedos; Nectonema es pelágica en aguas marinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [198, 203], cita: 'vida libre y corta' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo es extremadamente largo (100 cm, aunque las formas más comunes miden entre 5-10 cm), en forma de filamento delgado sin una cabeza definida.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 206], cita: 'filamento delgado sin una' }],
    },
    {
      texto: 'El cuerpo cuenta con una gruesa cutícula externa iridiscente de color blanco a negro; bajo la cutícula están la epidermis y la musculatura longitudinal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [208, 210], cita: 'gruesa cutícula externa iridiscente' }],
    },
  ],
  embriologia: {
    cavidad: {
      valor: 'pseudocelomado',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 227], cita: 'cavidad es un pseudocele' }],
      nota: 'El apunte lo describe solo en adultos postreproductores.',
    },
    capas: {
      valor: 'triblastico',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'boca',
      nota: 'El clado se anida dentro de Ecdysozoa, un grupo de animales protóstomos.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Nematomorpha/', titulo: 'Nematomorpha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'no-aplica',
      nota: 'Carecen de segmentación corporal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'Gruesa cutícula externa iridiscente, de color blanco a negro; debajo están la epidermis y la musculatura longitudinal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [208, 210], cita: 'la epidermis y la musculatura' }],
      },
    ],
    muscular: [
      {
        texto: 'Musculatura longitudinal bajo la epidermis; los machos adultos nadan por medio de ondulaciones del cuerpo a modo de latigazos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [210, 216], cita: 'ondulaciones del cuerpo' }],
      },
    ],
    digestivo: [
      {
        texto: 'El tubo digestivo es vestigial y los adultos no se alimentan.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [228, 228], cita: 'tubo digestivo es vestigial' }],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de órganos excretores; el intestino vestigial puede funcionar como un riñón.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [230, 230], cita: 'Carecen de órganos excretores' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso consta de un anillo nervioso anterior y un ventral no ganglionado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [229, 229], cita: 'anillo nervioso anterior' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados; hay gónadas largas y cilíndricas que se extienden a lo largo del cuerpo, y los espermiductos o los oviductos llevan a la cloaca. Durante la cópula un macho forma bucles y se sujeta fuertemente alrededor del extremo posterior de la hembra.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [231, 233], cita: 'gónadas largas y cilíndricas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El pseudoceloma, cavidad corporal llena de líquido, actúa como hidroesqueleto.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Carecen de sistemas respiratorio y circulatorio.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Carecen de sistema circulatorio.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematomorpha', titulo: 'Nematomorpha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Algunas especies poseen cuatro «células gigantes» conectadas al sistema nervioso central, con microvellosidades, que se supone cumplen funciones sensoriales.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Nematomorpha/', titulo: 'Nematomorpha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Mesénquima',
      datos: [
        {
          texto: 'El mesénquima (tejido conjuntivo) es voluminoso y contiene células laxas en una matriz colágeno-fibrosa; es semejante al parénquima de los platelmintos, pero en los adultos postreproductores la cavidad es un pseudocele abierto y lleno de fluido.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 227], cita: 'mesénquima (tejido conjuntivo)' }],
        },
      ],
    },
    {
      titulo: 'Enrollamiento ("nudo gordiano")',
      datos: [
        {
          texto: 'Los adultos se enrollan fuertemente alrededor de la vegetación de la orilla de las corrientes y entre sí durante largos períodos; si se amontonan se enrollan formando masas que recuerdan al mítico nudo gordiano.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [212, 223], cita: 'al mítico nudo gordiano' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los huevos se depositan en el agua o en las raíces de las plantas de la orilla; al eclosionar la larva tiene una proboscis eversible con espinas para penetrar al hospedador. Las larvas son ingeridas por un hospedador artrópodo del agua o cercano a ella (escarabajos, grillos, cucarachas, saltamontes, ciempiés y milpiés) o por las sanguijuelas; las especies marinas parasitan a cangrejos y camarones. Los adultos dejan el hospedador y alcanzan la madurez sexual recién en el agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [242, 251], cita: 'proboscis eversible con espinas' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en las aguas dulces de regiones templadas y tropicales de todo el mundo; los juveniles parasitan artrópodos y los adultos son de vida libre y corta.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [198, 235], cita: 'aguas dulces de regiones' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Gordioideos',
      descripcion: 'nematomorfos de aguas dulces y suelos húmedos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [202, 202], cita: 'gordioideos viven en aguas' }],
    },
    {
      nombre: 'Nectonema',
      descripcion: 'género pelágico de aguas marinas',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [203, 203], cita: 'Nectonema es pelágica' }],
    },
  ],
  notas: [],
};

export default taxon;
