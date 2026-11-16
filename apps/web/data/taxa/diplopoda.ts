import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'diplopoda',
  nombre: 'Diplopoda',
  nombreComun: 'Diplópodos (milpiés)',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 2,
  resumen: [
    {
      texto: 'Comprende unas 10.000 especies de milpiés. Son animales de hábitos sigilosos que evitan la luz del sol, por lo que viven bajo rocas, hojas, cortezas, troncos y en el suelo; muchas especies son cavernícolas. Viven en todo el mundo, especialmente en los trópicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [577, 586], cita: 'unas 10.000 especies de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Miden entre 2 mm y 30 cm; de color negro, marrón oscuro, rojo, anaranjado o manchados o punteados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [584, 586], cita: 'entre 2 mm a' }],
    },
    {
      texto: 'El cuerpo es cilíndrico y presenta segmentos dobles (hasta 90) en el tronco, llamados diplosegmentos; cada uno lleva dos pares de patas, de allí el nombre de la clase. Internamente existen también dos pares de ganglios ventrales y dos pares de ostíolos cardíacos en cada segmento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [588, 594], cita: 'son llamados diplosegmentos' }],
    },
    {
      texto: 'La cabeza es convexa dorsalmente y aplanada ventralmente; los lados están cubiertos por las bases convexas de las enormes mandíbulas, cuyo borde mordedor lleva dientes y una superficie raspadora. El suelo de la cámara preoral está formado por un par de maxilas fusionadas que constituyen el gnatoquilario, una placa plana y ancha con 4 palpos sensoriales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [596, 602], cita: 'constituyen el Gnatoquilario' }],
    },
    {
      texto: 'El primer segmento o collum carece de patas y forma un gran collar por detrás de la cabeza; el 2°, 3° y 4° segmento llevan solamente un par de patas (el par anterior falta); ventralmente en el 3° segmento se abre el gonoporo; el cuerpo termina en el telson donde se abre ventralmente el ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [604, 608], cita: 'el primero o collum' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'El tegumento es duro y se encuentra impregnado por sales de calcio; a menudo su superficie es lisa pero en algunos grupos los tergos llevan espinas, tubérculos o cerdas aisladas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [610, 612], cita: 'sales de calcio' }],
      },
    ],
    nervioso: [
      {
        texto: 'Internamente existen dos pares de ganglios ventrales en cada segmento del tronco.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [592, 594], cita: 'pares de ganglios ventrales' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Existen dos pares de ostíolos cardíacos en cada segmento del tronco.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [592, 594], cita: 'pares de ostíolos cardíacos' }],
      },
    ],
    digestivo: [
      {
        texto: 'El borde mordedor de la mandíbula lleva dientes y una superficie raspadora; se alimentan principalmente de vegetación en descomposición, algunos son carnívoros u omnívoros.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [597, 615], cita: 'una superficie raspadora' }],
      },
    ],
    reproductor: [
      {
        texto: 'Presentan sexos separados e inseminación indirecta; por lo general los órganos copuladores son apéndices del tronco modificados (gonópodos).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [623, 624], cita: 'separados e inseminación indirecta' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso calcificado que mudan periódicamente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplopoda', titulo: 'Diplopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos segmentarios asociados a los numerosos apéndices locomotores.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Respiran a través de dos pares de espiráculos ubicados ventralmente en cada segmento, cerca de la base de las patas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplopoda', titulo: 'Diplopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Dos pares de tubos de Malpighi situados cerca de la mitad del intestino.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplopoda', titulo: 'Diplopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos con varios ocelos (ojos simples) de lente plana dispuestos en un campo ocelar a cada lado de la cabeza.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Diplopoda', titulo: 'Diplopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Diplosegmentos',
      datos: [
        {
          texto: 'Segmentos dobles del tronco (hasta 90), cada uno con dos pares de patas, dos pares de ganglios ventrales y dos pares de ostíolos cardíacos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [588, 594], cita: 'presenta segmentos dobles (hasta' }],
        },
      ],
    },
    {
      titulo: 'Glándulas repugnatorias',
      datos: [
        {
          texto: 'Se protegen de los enemigos naturales mediante una serie de glándulas malolientes que expulsan un líquido irritante en forma de chorros que llegan a producir quemaduras y ampolladuras en la piel o en los ojos del hombre; algunas especies pueden enroscarse en espiral cuando son molestados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [618, 621], cita: 'de glándulas malolientes que' }],
        },
      ],
    },
    {
      titulo: 'Gnatoquilario',
      datos: [
        {
          texto: 'El suelo de la cámara preoral está formado por un par de maxilas fusionadas que constituyen el gnatoquilario, placa plana y ancha fijada a la superficie ventral posterior de la cabeza con 4 palpos sensoriales.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [600, 602], cita: 'par de maxilas fusionadas' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Sexos separados e inseminación indirecta por gonópodos; muchos milpiés colocan sus huevos en nidos que construyen utilizando excrementos. El desarrollo es indirecto: de los huevos eclosionan jóvenes que solo tienen los tres primeros pares de patas y no más de siete anillos en el tronco; con cada muda se añaden nuevos segmentos y patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [623, 630], cita: 'desarrollo es indirecto' }],
    },
    {
      texto: 'Sufren sus mudas en el interior de cámaras especialmente construidas y por lo general se comen el pelecho o tegumento mudado (exubia) para reponer el calcio. Pueden vivir entre 1 a 10 años o más.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [632, 636], cita: 'tegumento mudado (exubia)' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Se alimentan principalmente de vegetación en descomposición; algunos son carnívoros u omnívoros, y los que se alimentan de plantas vivas pueden comportarse como plagas importantes para la agricultura.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [614, 616], cita: 'vegetación en descomposición' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
