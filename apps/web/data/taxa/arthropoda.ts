import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'arthropoda',
  nombre: 'Arthropoda',
  nombreComun: 'Artrópodos',
  nivel: 'phylum',
  padre: 'ecdysozoa',
  orden: 3,
  resumen: [
    {
      texto: 'Constituyen el mayor conjunto de especies dentro del Reino Animal. Es probable que hayan evolucionado a partir de los Anélidos: su ascendencia anelidiana se refleja en su metamería, en el modelo de sistema nervioso y en su segmentación determinada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [14, 16], cita: 'el mayor conjunto de especies' }],
    },
    {
      texto: 'Se encuentran en hábitats sumamente variados: agua dulce, mar hasta profundidades de más de 5000 m, en la tierra incluidas la nieve y alturas superiores a los 6000 m; hay especies parásitas (ecto y endoparásitas) de animales, del hombre y de plantas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 28], cita: 'hábitats sumamente variados' }],
    },
    {
      texto: 'Muchas especies son gregarias y han evolucionado hacia hábitos sociales (insectos con sociedades con castas y división del trabajo: abejas, hormigas, termites).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [30, 32], cita: 'evolucionado hacia hábitos sociales' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Poseen simetría bilateral, tres capas germinales y el cuerpo dividido en segmentos o somitos articulados exteriormente. Presentan cabeza, tórax y abdomen diferenciados o fusionados entre sí formando unidades diferentes. Llevan normalmente un par de apéndices por somita, también constituidos por artejos articulados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 52], cita: 'segmentos o somitos articulados' }],
    },
    {
      texto: 'El color se debe a pigmentos melánicos marrones, amarillos, naranjas y rojos depositados en la cutícula; los verdes iridiscentes y púrpuras resultan de finas estriaciones que producen refracción de la luz, y a menudo la coloración procede de pigmentos subcuticulares (cromatóforos) o pigmentos sanguíneos y tisulares visibles a través de la cutícula fina y transparente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [128, 144], cita: 'pigmentos melánicos marrones' }],
    },
  ],
  embriologia: {
    cavidad: {
      valor: 'esquizocelomado',
      nota: 'El celoma se forma por esquizocelia pero queda muy reducido (zonas de los sistemas reproductor y excretor); la mayor parte de la cavidad corporal es un hemocele abierto.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arthropoda/', titulo: 'Arthropoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    capas: {
      valor: 'triblastico',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 44], cita: 'tres capas germinales' }],
    },
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 43], cita: 'Poseen simetría bilateral' }],
    },
    blastoporo: {
      valor: 'boca',
      nota: 'Protóstomos: el blastoporo origina la boca.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Arthropoda/', titulo: 'Arthropoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'otra',
      nota: 'Cuerpo dividido en segmentos o somitos articulados exteriormente; los embriones de todos los artrópodos están segmentados, con regionalización (tagmatización).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 44], cita: 'segmentos o somitos articulados' }, { tipo: 'web', url: 'https://en.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia in English', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'El exoesqueleto quitinoso o cutícula cubre por completo el cuerpo; conformada por varias capas y atravesada por poros, es producida por la epidermis uniestratificada situada inmediatamente debajo (hipodermis).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [54, 56], cita: 'exoesqueleto quitinoso o cutícula' }],
      },
      {
        texto: 'La quitina es un polisacárido nitrogenado insoluble en alcohol, álcalis, ácidos diluidos y jugos digestivos; la rigidez no viene de la quitina sino de la proteína de la cutícula externa (la interna, más blanda, tiene hasta 60% de quitina).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [58, 70], cita: 'un polisacárido nitrogenado insoluble' }],
      },
      {
        texto: 'La cutícula tapiza el extremo anterior y posterior del tubo digestivo, los órganos respiratorios y los conductos de las glándulas superficiales; su textura varía entre lisa y rugosa con esculturas, depresiones, crestas, espinas y perforaciones para cerdas sensitivas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 78], cita: 'esculturas, depresiones, crestas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El exoesqueleto protege a los órganos internos y suministra puntos de inserción (apodemas) a los músculos, actuando como un endoesqueleto, y forma palancas y puntos de apoyo entre las partes móviles; en los terrestres impide la pérdida de agua. Limita el crecimiento, por lo que son necesarias las mudas o ecdisis periódicas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 98], cita: 'puntos de inserción' }],
      },
    ],
    muscular: [
      {
        texto: 'Los músculos se insertan en apodemas del exoesqueleto, que actúa como endoesqueleto formando palancas y puntos de apoyo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 90], cita: 'palancas y puntos de' }],
      },
    ],
    digestivo: [
      {
        texto: 'La cutícula tapiza el extremo anterior y posterior del tubo digestivo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 73], cita: 'del tubo digestivo' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En los tubos traqueales y en las branquias la cutícula es muy delgada y permeable.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [80, 81], cita: 'tubos traqueales y en las' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Durante la muda el animal se extiende ingiriendo agua o aire y ejerciendo presión sobre la cutícula vieja a través de su sistema vascular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [104, 107], cita: 'su sistema vascular' }],
      },
    ],
    nervioso: [
      {
        texto: 'Su ascendencia anelidiana se refleja en el modelo de sistema nervioso, además de la metamería y la segmentación determinada.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [15, 16], cita: 'modelo de sistema nervioso' }],
      },
    ],
    sentidos: [
      {
        texto: 'La cutícula presenta perforaciones que dejan pasar cerdas sensitivas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'dejan pasar cerdas sensitivas' }],
      },
    ],
    excretor: [
      {
        texto: 'Variable según el grupo: glándulas antenales y maxilares en crustáceos, glándulas coxales en arácnidos, y tubos de Malpighi en insectos y miriápodos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual: las hembras, fecundadas por los machos, ponen huevos; el desarrollo puede ser directo o indirecto.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Muda (ecdisis)',
      datos: [
        {
          texto: 'La mayor parte de los artrópodos poseen 4-7 mudas; antes de mudar se forma bajo la cutícula vieja un nuevo exoesqueleto blando. La vieja se abre dorsalmente por una línea de debilidad y el animal se desprende, se extiende ingiriendo agua o aire y ejerce presión a través de su sistema vascular estirando la cutícula blanda; luego se endurece por procesos químicos. La piel mudada se denomina exubia y las etapas entre mudas, estadios.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [100, 117], cita: 'poseen 4-7 mudas' }],
        },
        {
          texto: 'La muda es controlada por la hormona ecdisina, secretada por glándulas endocrinas, que circula por el torrente sanguíneo y actúa directamente sobre las células epidérmicas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [119, 121], cita: 'hormona: la ecdisina secretada' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Reproducción sexual con puesta de huevos; el desarrollo puede ser directo o indirecto.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      texto: 'Los apéndices abdominales cumplen funciones reproductoras: retener los huevos o aferrarse a la pareja durante la cópula.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Debido al exoesqueleto no existen artrópodos de gran tamaño (un cangrejo japonés llega a 3,50 m con las patas extendidas; ningún insecto viviente sobrepasa los 27 cm; los menores rondan 1 mm).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [123, 126], cita: 'un cangrejo japonés que' }],
    },
    {
      texto: 'Muchos aportan a la economía del hombre (alimento) pero también son competidores: destruyen cosechas, alimentos almacenados y ropa, y transmiten enfermedades al hombre, a animales domésticos y a plantas cultivadas como vectores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 40], cita: 'transmiten enfermedades al hombre' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
