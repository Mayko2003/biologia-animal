import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'osteichthyes',
  nombre: 'Osteichthyes',
  nombreComun: 'Peces óseos',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de los peces óseos; el apunte usa la morfología de una perca como organismo tipo y divide el grupo en las clases Actinopterygii y Sarcopterygii.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 236], cita: 'CLASE OSTEICHTHYES “Peces Óseos”' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En la perca el cuerpo es fusiforme más alto que ancho; la gran boca es terminal con mandíbulas con finos dientes; en el hocico dos fosas olfatorias dobles; ojos laterales sin párpados y detrás de cada uno el opérculo; ano y abertura urogenital preceden a la aleta anal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [238, 245], cita: 'una perca: Cuerpo fusiforme' }],
    },
    {
      texto: 'En la perca hay dos aletas dorsales separadas, aleta caudal y aleta anal (todas medias) y las aletas pares pectorales y pélvicas; las aletas son extensiones membranosas sostenidas por radios calcificados, espinas rígidas no articuladas y radios blandos flexibles y ramificados, que contribuyen al equilibrio, la dirección y la locomoción.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [245, 252], cita: 'los radios blandos son flexibles' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'En la perca todo el cuerpo está cubierto por una epidermis blanda productora de mucus que facilita el movimiento y protege de la abrasión y patógenos; el tronco y la cola llevan escamas dérmicas redondeadas imbricadas como tejas, dentro de una bolsa dérmica, que crecen durante toda la vida.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [254, 262], cita: 'una epidermis blanda productoras' }],
      },
    ],
    esqueleto: [
      {
        texto: 'En la perca el endoesqueleto consta de cráneo, columna vertebral, costillas, cintura pectoral y pequeños huesos accesorios para los radios; las vértebras tienen centro cilíndrico cóncavo, arco neural dorsal con espina neural y parapófisis; la columna termina en un hueso en abanico para la cola y entre los centros hay restos de notocorda.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [267, 283], cita: 'Esqueleto: el endoesqueleto' }],
      },
    ],
    muscular: [
      {
        texto: 'En la perca el tronco y la cola están formados por músculos segmentarios (miomeros) en forma de M ensanchada, dispuestos en cuatro bandas y más potentes a lo largo del dorso, separados por septos de tejido conjuntivo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [285, 288], cita: 'músculos segmentarios (miomeros) en forma' }],
      },
    ],
    digestivo: [
      {
        texto: 'En la perca las mandíbulas tienen numerosos dientes pequeños y cónicos para agarrar el alimento, más dientes faríngeos y del rastrillo branquial para sostenerlo y triturarlo; lengua pequeña, faringe con branquias a ambos lados, corto esófago, estómago curvo con válvula pilórica e intestino con tres ciegos pilóricos tubulares; hígado grande, vesícula biliar y páncreas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [290, 296], cita: 'tres ciegos piloricos tubulares' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En la perca hay cuatro pares de branquias, cada una soportada por un arco branquial y ventilada con ayuda del opérculo; un flujo constante de agua rica en oxígeno fluye sobre los filamentos en sentido contrario al flujo sanguíneo (flujo contracorriente), maximizando el intercambio gaseoso.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 315], cita: 'se denomina flujo contracorriente' }],
      },
    ],
    circulatorio: [
      {
        texto: 'En la perca el sistema circulatorio es cerrado, con corazón de dos cámaras (aurícula y ventrículo), seno venoso y cono arterioso; la sangre va del corazón a las branquias, luego al cuerpo y vuelve, fluyendo una sola vez por el corazón en cada circulación; hay un bazo rojo cerca del estómago y un sistema linfático.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [298, 305], cita: 'corazón con dos cámaras' }],
      },
    ],
    nervioso: [
      {
        texto: 'En la perca el cerebro tiene dos lóbulos olfatorios, dos hemisferios cerebrales, dos lóbulos ópticos y un cerebelo; 10 pares de nervios craneales y un par de nervios espinales por segmento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [317, 319], cita: 'un cerebelo; 10 pares' }],
      },
    ],
    sentidos: [
      {
        texto: 'En la perca los ojos perciben el color; quimiorreceptores para el gusto y el olfato; oídos en la cabeza y receptores de la línea lateral que detectan corrientes suaves, vibraciones y el movimiento de presas; algunos perciben corriente eléctrica y la anguila eléctrica puede producirla.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [321, 328], cita: 'La línea lateral permite a' }],
      },
      {
        texto: 'En la perca la línea lateral es una serie de pequeños poros a lo largo de cada lado del cuerpo conectados con un conducto tubular longitudinal bajo las escamas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [264, 265], cita: 'con un conducto tubular longitudinal' }],
      },
    ],
    reproductor: [
      {
        texto: 'En la perca las gónadas son pares; son ovíparos (algunos ovovivíparos o vivíparos) con fecundación externa y algunas excepciones; la mayoría con desarrollo indirecto y una larva alevín.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [330, 331], cita: 'una larva Alevin' }],
      },
    ],
    excretor: [
    {
      texto: 'La excreción corre a cargo del aparato renal; el mucus de la piel regula la permeabilidad y contribuye a la defensa contra patógenos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Osteichthyes', titulo: 'Osteichthyes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Opérculo y branquias',
      datos: [
        {
          texto: 'Debajo de cada opérculo hay 4 branquias pectinadas; el opérculo está implicado en la ventilación.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [243, 310], cita: 'hay 4 branquias pectinadas' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Gónadas pares; son ovíparos (algunos ovovivíparos o vivíparos), con fecundación externa salvo excepciones; la mayoría con desarrollo indirecto, con larva alevín.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [330, 331], cita: 'Gónadas pares, son ovíparos' }],
    },
    {
      texto: 'La reproducción es generalmente ovípara, con puestas que pueden llegar a millones de huevos para compensar la alta mortalidad de las crías.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Osteichthyes', titulo: 'Osteichthyes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Peces óseos marinos y de agua dulce; la coloración suele ser mimética: oscura en el dorso sobre fondos marinos y plateada en el flanco (argenteum).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Osteichthyes', titulo: 'Osteichthyes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'perca',
      descripcion: 'organismo tipo para la morfología de los peces óseos en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [238, 238], cita: 'Morfología de una perca:' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El término Osteichthyes hace referencia a un grupo parafilético, por lo que no es una clasificación válida: hoy se sabe que está formado por las clases Actinopterygii y Sarcopterygii.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [234, 236], cita: 'a un grupo parafilético por' }],
    },
    {
      tipo: 'discrepancia',
      texto: 'Según la bibliografía actual, los tetrápodos evolucionaron de peces sarcopterigios, por lo que la sistemática cladística incluye a los vertebrados terrestres dentro de Osteichthyes/Sarcopterygii; el apunte ya advierte que Osteichthyes es parafilético y la aplicación conserva su esquema (clases Actinopterygii y Sarcopterygii).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Osteichthyes', titulo: 'Osteichthyes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
