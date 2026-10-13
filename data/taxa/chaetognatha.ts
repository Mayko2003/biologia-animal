import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;
const E = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'chaetognatha',
  nombre: 'Chaetognatha',
  nombreComun: 'Quetognatos (gusanos flecha)',
  sinonimos: ['Quetognathos'],
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 8,
  resumen: [
    {
      texto: 'También conocidos como gusanos flecha, son un filo de animales depredadores marinos que forman parte del plancton oceánico en todo el globo, con preferencia por aguas más bien cálidas. Casi transparentes y con forma de torpedo; miden entre 2 mm y 12 cm. Se han descrito unas 121 especies agrupadas en 20 géneros.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [425, 431], cita: 'conocidos como gusanos flecha' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Transparentes o translúcidos, recubiertos de una cutícula. Presentan aletas impares horizontales en lados opuestos del cuerpo. Tienen una cabeza, un tronco y una cola diferenciados.',
      fuentes: [
        { tipo: 'apunte', archivo: A, lineas: [433, 436], cita: 'aletas impares horizontales' },
        { tipo: 'apunte', archivo: E, lineas: [598, 602], cita: 'recubiertos de una cutícula' },
      ],
    },
    {
      texto: 'Varias espinas queratinosas ganchudas a cada lado de la cabeza, destinadas a la caza, que guardan en una capucha cuando nadan (rasgo que les da el nombre). En el TP12 se describen 4-14 garfios quitinosos a cada lado de la cabeza y varias filas de espinas cortas (dientes anteriores y posteriores) que se curvan alrededor de la parte frontal y pueden ayudar a capturar presas o inyectar veneno.',
      fuentes: [
        { tipo: 'apunte', archivo: A, lineas: [434, 436], cita: 'espinas queratinosas ganchudas' },
        { tipo: 'apunte', archivo: E, lineas: [599, 602], cita: '4-14 garfios quitinosos' },
      ],
    },
    {
      texto: 'Boca con una o dos hileras de dientes y ojos compuestos; en el TP12 se menciona además un órgano olfatorio longitudinal entre los ojos.',
      fuentes: [
        { tipo: 'apunte', archivo: A, lineas: [440, 441], cita: 'hileras de dientes' },
        { tipo: 'apunte', archivo: E, lineas: [606, 607], cita: 'un órgano olfatorio longitudinal' },
      ],
    },
  ],
  embriologia: {
    capas: {
      valor: 'triblastico',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    cavidad: {
      valor: 'enterocelomado',
      nota: 'El mesodermo y el celoma se forman por enterocelia, con arreglo tripartito (protocoel, mesocoel, metacoel).',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'ano',
      nota: 'Desarrollo de tipo deuterostomado; fueron considerados deuterostomados por sus caracteres embrionarios.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chaetognatha', titulo: 'Chaetognatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'radial',
      nota: 'Segmentación radial, holoblástica e igual, que da una celoblastula.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'Recubiertos de una cutícula; la excreción la realizan a través de la piel.',
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [433, 442], cita: 'a través de la piel' },
          { tipo: 'apunte', archivo: E, lineas: [598, 599], cita: 'translúcidos y están recubiertos' },
        ],
      },
    ],
    digestivo: [
      {
        texto: 'Boca con una o dos hileras de dientes.',
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [440, 441], cita: 'una boca con una' },
        ],
      },
    ],
    respiratorio: [
      {
        texto: 'Carecen de sistema respiratorio.',
        ausente: true,
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [441, 441], cita: 'carecen de sistema respiratorio' },
          { tipo: 'apunte', archivo: E, lineas: [607, 608], cita: 'carecen de sistema respiratorio' },
        ],
      },
    ],
    circulatorio: [
      {
        texto: 'Carecen de sistema circulatorio.',
        ausente: true,
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [441, 442], cita: 'circulatorio o excretor' },
        ],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de sistema excretor; la excreción la realizan a través de la piel.',
        ausente: true,
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [441, 442], cita: 'la excreción la realizan' },
          { tipo: 'apunte', archivo: E, lineas: [607, 609], cita: 'sistema respiratorio, circulatorio' },
        ],
      },
    ],
    nervioso: [
      {
        texto: 'Poseen sistema nervioso, con ojos compuestos (y un órgano olfatorio longitudinal entre los ojos, según el TP12).',
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [440, 441], cita: 'ojos compuestos y sistema' },
          { tipo: 'apunte', archivo: E, lineas: [606, 607], cita: 'ojos compuestos, un órgano' },
        ],
      },
    ],
    reproductor: [
      {
        texto: 'Son hermafroditas; en el TP12 se detalla que las hembras tienen 1 ovario y los machos 2 testículos con sus respectivos conductos que se abren a ambos lados de la cola.',
        fuentes: [
          { tipo: 'apunte', archivo: A, lineas: [437, 437], cita: 'son hermafroditas y se' },
          { tipo: 'apunte', archivo: E, lineas: [610, 612], cita: 'hembras con 1 ovario' },
        ],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto; la cutícula, la membrana basal, la pared del cuerpo y los celomas llenos de líquido le dan soporte.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'La pared del cuerpo está formada por cuatro cuadrantes de músculos longitudinales dorsolaterales y ventrolaterales.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Un par de ojos compuestos bajo la epidermis, sin lentes: sirven para recibir luz y orientar el cuerpo, no para formar imágenes.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Garfios y capucha',
      datos: [
        {
          texto: 'Espinas queratinosas ganchudas a cada lado de la cabeza, destinadas a la caza, que guardan en una capucha cuando nadan.',
          fuentes: [
            { tipo: 'apunte', archivo: A, lineas: [434, 436], cita: 'guardan en una capucha' },
          ],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Hermafroditas; en algunas especies ocurre autofecundación. Fecundación interna por medio de espermatóforos y desarrollo directo: la progenie joven se asemeja a adultos en miniatura y, sin pasar por un estado larval diferente, comienzan con rapidez una vida de depredación activa.',
      fuentes: [{ tipo: 'apunte', archivo: E, lineas: [610, 616], cita: 'Fecundación interna por medio' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Depredadores marinos del plancton oceánico; prefieren aguas más bien cálidas, por encima de los 900 m; las que viven cerca de los 30 m se aproximan a la superficie durante la aurora y el ocaso. Nadan propulsándose con la cola y estabilizándose con las aletas. Se han descrito especies productoras de neurotoxinas que usan para atrapar presas.',
      fuentes: [
        { tipo: 'apunte', archivo: A, lineas: [427, 438], cita: 'propulsándose con la cola' },
        { tipo: 'apunte', archivo: E, lineas: [592, 595], cita: 'la aurora y el ocaso' },
      ],
    },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'La cátedra describe este phylum en el TP7 (Lofotrocozoos III) y también en el TP12 (junto a equinodermos y hemicordados).',
      fuentes: [
        { tipo: 'apunte', archivo: A, lineas: [425, 427], cita: 'PHYLUM QUETOGNATHOS También conocidos' },
        { tipo: 'apunte', archivo: E, lineas: [590, 592], cita: 'PHYLUM CHAETOGNATHA Son un' },
      ],
    },
    {
      tipo: 'discrepancia',
      texto: 'El apunte (TP7) los estudia entre los lofotrocozoos, pero su desarrollo es de tipo deuterostomado (segmentación radial, enterocelia); los análisis moleculares los ubican entre los protostomados, cerca de Gnathifera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [425, 427], cita: 'También conocidos como gusanos flecha' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Chaetognatha/', titulo: 'Chaetognatha - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chaetognatha', titulo: 'Chaetognatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
