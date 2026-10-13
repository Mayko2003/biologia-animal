import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'chordata',
  nombre: 'Chordata',
  nombreComun: 'Cordados',
  nivel: 'phylum',
  padre: 'deuterostomia',
  orden: 3,
  resumen: [
    {
      texto: 'Constituyen el mayor phylum de deuteróstomos, siendo el mayor de sus grupos el de los vertebrados. Poseen simetría bilateral, tres capas germinales, cuerpo segmentado, tubo digestivo completo y celoma bien desarrollado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [14, 18], cita: 'mayor Phylum de deuteróstomos' }],
    },
    {
      texto: 'Cinco caracteres sobresalientes los distinguen de los demás animales: un solo cordón nervioso dorsal y tubular, el notocordio, las hendiduras branquiales en la faringe, el endostilo y la cola postanal; se observan en todos los embriones de cordados y pueden desaparecer, cambiar o persistir en el adulto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [18, 22], cita: 'Cinco caracteres sobresalientes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Plan corporal con cinco sinapomorfías: notocorda, tubo neural hueco dorsal, hendiduras branquiales en la faringe, endostilo y cola postanal, presentes al menos en alguna fase del desarrollo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [17, 17], cita: 'Poseen simetría bilateral' }],
    },
    capas: {
      valor: 'triblastico',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [17, 17], cita: 'tres capas germinales' }],
    },
    cavidad: {
      valor: 'enterocelomado',
      nota: 'Celomados con celoma bien desarrollado, que se pierde en algunos grupos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'radial',
      nota: 'División radial propia de los deuterostomados; varía en los vertebrados según el tipo de huevo.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Deuterostome', titulo: 'Deuterostome - Wikipedia in English', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'Varía por grupo: túnica celulósica en los urocordados, epidermis simple en los anfioxos y piel con derivados (escamas, plumas, pelo) en los vertebrados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'La notocorda, varilla semirrígida de sostén dorsal al tubo digestivo, es el eje del plan cordado; en los vertebrados es reemplazada por la columna.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Cuerpo segmentado con musculatura en miómeros en el tronco y la cola.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo con faringe perforada por hendiduras branquiales y endostilo ventral que segrega mucílago para capturar alimento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Las hendiduras branquiales de la faringe intervienen en la respiración en los grupos acuáticos; en los anfioxos sirven solo para alimentarse y la respiración es cutánea.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://en.wikipedia.org/wiki/Lancelet', titulo: 'Lancelet - Wikipedia in English', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón ventral con vasos sanguíneos dorsales y ventrales.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Varía por grupo: nefridios metaméricos en los cefalocordados y riñones en los vertebrados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cephalochordata', titulo: 'Cephalochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un solo cordón nervioso dorsal y tubular (tubo neural hueco), rasgo definitorio del filo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Varía por grupo: mecanorreceptores y ocelos en los cefalocordados; órganos sensoriales complejos en los vertebrados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cephalochordata', titulo: 'Cephalochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; algunos tunicados además se reproducen asexualmente por gemación.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Notocordio',
      datos: [
        {
          texto: 'Principal eje de sostén corporal: se forma sobre el intestino primitivo como un bastón alargado de células con matriz gelatinosa revestido de tejido conjuntivo fibroso; en los tunicados existe solo en la cola de la fase larvaria, en anfioxos y lampreas persiste toda la vida, y de los peces a los mamíferos queda rodeado o sustituido por la columna vertebral, reducido al núcleo pulposo de los discos intervertebrales.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [24, 35], cita: 'principal eje de sostén' }],
        },
      ],
    },
    {
      titulo: 'Cordón nervioso dorsal',
      datos: [
        {
          texto: 'Se forma en la superficie dorsal del cuerpo a partir de una invaginación del ectodermo, quedando como un cordón tubular y hueco por encima del notocordio; su extremo anterior se ensancha formando el cerebro, que en los vertebrados queda protegido en el cráneo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 40], cita: 'cordón tubular y hueco' }],
        },
      ],
    },
    {
      titulo: 'Hendiduras branquiales',
      datos: [
        {
          texto: 'Se desarrollan a ambos lados de la faringe embrionaria por evaginaciones endodérmicas e invaginaciones ectodérmicas; en los cordados primitivos sirven para la alimentación. Se mantienen en los cordados acuáticos durante toda la vida o solo en sus larvas, mientras que en los terrestres solo aparecen en las primeras etapas embrionarias siendo luego reemplazadas por los pulmones.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 61], cita: 'lados de la faringe' }],
        },
      ],
    },
    {
      titulo: 'Cola postanal',
      datos: [
        {
          texto: 'Prolongación posterior del cuerpo que se extiende más allá del ano; proporciona movilidad a las larvas de tunicados y anfioxos para su vida libre nadadora y evoluciona para la propulsión acuática en los peces con la adición de aletas caudales; es vestigial en el hombre (cóccix).',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [64, 77], cita: 'más allá del ano' }],
        },
      ],
    },
    {
      titulo: 'Endostilo',
      datos: [
        {
          texto: 'Ubicado en el suelo de la faringe, segrega un moco que atrapa pequeñas partículas de alimento en los protocordados; algunas de sus células segregan proteínas yodadas y son homólogas de la glándula tiroides de las lampreas adultas y el resto de los vertebrados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [79, 83], cita: 'segrega un moco' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los cinco caracteres del filo (notocorda, tubo neural, hendiduras branquiales, endostilo y cola postanal) se observan en todos los embriones de los cordados y pueden desaparecer, cambiar o persistir en el adulto.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'El mayor phylum de deuteróstomos; incluye desde tunicados sésiles y anfioxos filtradores hasta los vertebrados en todos los ambientes.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Urochordata',
      descripcion: 'tunicados (ascidias, salpas, larváceos)',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Cephalochordata',
      descripcion: 'anfioxos o lancetas',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cephalochordata', titulo: 'Cephalochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Vertebrata',
      descripcion: 'el mayor grupo del filo',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'La literatura actual ubica a los urocordados como grupo hermano de los vertebrados (clado Olfactores), por delante de los cefalocordados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chordata', titulo: 'Chordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
