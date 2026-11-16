import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'scyphozoa',
  nombre: 'Scyphozoa',
  nombreComun: 'Escifozoos',
  nivel: 'clase',
  padre: 'cnidaria',
  orden: 2,
  resumen: [
    {
      texto: 'Se conocen como medusas: la forma de medusa es la más frecuente en su ciclo vital y la forma polipoide está restringida a un pequeño estado sésil.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [547, 549], cita: 'la forma polipoide está restringida a un pequeño estado sésil' }],
    },
    {
      texto: '200 especies descriptas que viven tanto en mares fríos como tropicales, algunas a gran profundidad.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [556, 557], cita: '200 especies descriptas de Scifozoos' }],
    },
    {
      texto: 'Generalmente mayores que las hidromedusas: diámetro de campana de 2 a 40 cm y algunas especies aún mayores (2 m).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [549, 550], cita: 'diámetro de campana de 2 a 40 cm' }],
    },
    {
      texto: 'Unas 200 especies organizadas en cuatro órdenes; viven en todos los océanos, la mayoría cerca de las costas.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Campana con márgenes festoneados o con lóbulos provistos de tentáculos pequeños en número variable, sin velo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [564, 565], cita: 'Campana con márgenes festoneados' }],
    },
    {
      texto: 'Poseen ropalios (en múltiplo de 4), que constan de una capucha, dos fosas sensoriales, un ocelo y estatocistos, y contribuyen a controlar la natación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [565, 567], cita: 'ropalios, en múltiplo de 4' }],
    },
    {
      texto: 'Tienen 4–8 brazos orales (corresponden al manubrio de las hidromedusas) con cnidocitos que ayudan a capturar e ingerir presas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [567, 569], cita: '4-8 brazos orales' }],
    },
    {
      texto: 'La coloración es frecuentemente sorprendente: las gónadas y otras estructuras internas (rojas, rosas u otros colores) se ven por transparencia a través de la campana incolora o ligeramente coloreada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [552, 554], cita: 'coloración es frecuentemente sorprendente' }],
    },
  ],
  embriologia: {
    capas: {
      valor: 'triblastico',
      nota: 'Según el apunte, por su mesoglea gruesa con células ameboidales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [543, 543], cita: 'Los Sciphozoos son Tripoblásticos' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'Mesoglea gruesa, gelatinosa y fibrosa que contiene células ameboidales originadas en la epidermis.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [543, 545], cita: 'mesoglea gruesa, gelatinosa y fibrosa' }],
      },
    ],
    digestivo: [
      {
        texto: 'Los adultos se alimentan de todo tipo de pequeños animales, especialmente crustáceos, y algunos de pescado; capturan la presa con los tentáculos y la acercan al manubrio. En Aurelia atrapa plancton con el moco de la superficie subumbelar ciliada.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [580, 584], cita: 'se alimentan de todo tipo de pequeños animales' }],
      },
      {
        texto: 'Las gónadas se ubican en la cavidad gastrovascular; existen 4 sacos gástricos separados por tabiques que pueden o no confluir en un canal anular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 587], cita: 'existen 4 sacos gástricos' }],
      },
    ],
    reproductor: [
      {
        texto: 'Son dioicos y las gónadas se ubican en la cavidad gastrovascular, no epiteliales como en las hidromedusas; existen 4 gónadas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 589], cita: 'Scifozoos como Cubozoos son dioicos' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios; el intercambio gaseoso se produce por difusión a través de la superficie del cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin aparato circulatorio; la cavidad gastrovascular distribuye el alimento.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Cuerpo gelatinoso compuesto mayormente de agua, sin partes duras.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Nadan por contracción y relajación de los músculos de la campana, que expulsan agua a modo de chorro.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores; los desechos salen por la única abertura de la cavidad gastrovascular.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sin cefalización ni cerebro; una red nerviosa difusa controla la natación.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'En algunas especies hay ocelos sensibles a la luz en el margen de la campana.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los gametos salen por la boca y los huevos se ubican en los brazos orales, que asemejan cámaras de incubación; la larva plánula es libre y nadadora.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [589, 591], cita: 'la larva plánula es libre y nadadora' }],
    },
    {
      texto: 'La plánula se fija y se convierte en un pequeño polipoide llamado escifistoma (parecido a una hidra), que se alimenta y por gemación produce otros escifistomas; en ciertas épocas, por condiciones ambientales y hormonales, produce jóvenes medusas por gemación transversal (estrobilación).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [591, 594], cita: 'un pequeño polipoide el escifistoma' }],
    },
    {
      texto: 'La medusa joven se llama éfira y luego de unos meses (2 a 4) se transforma en adulta.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [594, 595], cita: 'La medusa joven se llama éfira' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en aguas costeras y pueden ser peligrosas para los bañistas; se llaman ortigas de mar o avispas de mar, y algunas son mortales (la muerte a los 3–20 minutos de la picadura; Australia–Indopacífico).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [560, 562], cita: 'ortigas de mar o avispas de mar' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Aurelia',
      descripcion: 'la medusa luna, una de las escifomedusas más conocidas',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Cyanea',
      descripcion: 'la medusa melena de león',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Scyphozoa/', titulo: 'Scyphozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Aurelia',
      descripcion: 'se alimenta atrapando plancton con el moco de la superficie subumbelar ciliada',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [584, 584], cita: 'Aurelia se alimenta atrapando plancton' }],
    },
  ],
  notas: [],
};

export default taxon;
