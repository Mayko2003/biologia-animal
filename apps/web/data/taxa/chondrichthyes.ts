import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'chondrichthyes',
  nombre: 'Chondrichthyes',
  nombreComun: 'Peces cartilaginosos',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 1,
  resumen: [
    {
      texto: 'Los condrictios modernos comprenden dos grupos: los elasmobranquios (tiburones y rayas) y las quimeras (holocéfalos); en su conjunto se conocen como peces cartilaginosos, la mayoría de hábitat marino.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [16, 27], cita: 'se conocen comúnmente como peces' }],
    },
    {
      texto: 'Carecen por completo de huesos y el notocordio, aunque reducido, persiste durante todo el estado adulto; escamas placoideas, cola heterocerca, fosas nasales sin coanas, sin vejiga natatoria, sistema de línea lateral, sexos separados, fecundación interna y desarrollo directo; ovíparos, ovovivíparos o vivíparos, con pocas crías y huevos grandes cargados de vitelo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 32], cita: 'Con escamas placoideas; cola heterocerca' }],
    },
    {
      texto: 'No aparecieron antes que los peces óseos como se pensaba: constituyen un grupo muy especializado. Se divide en dos subclases: Selachii (elasmobranquios) y Holocephali.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 50], cita: 'constituyen un grupo muy' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Peces cartilaginosos, la mayoría de hábitat marino; carecen por completo de huesos y el notocordio, aunque reducido, persiste en el adulto; escamas placoideas, cola heterocerca, fosas nasales sin coanas, sin vejiga natatoria y con sistema de línea lateral.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [27, 30], cita: 'peces cartilaginosos. La mayoría de habitat' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
    {
      texto: 'La piel está cubierta por diminutas escamas placoideas, cada una con una espina puntiaguda dirigida hacia atrás, cubierta de esmalte y con placa basal de dentina en la dermis.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [96, 98], cita: 'escamas placoideas provistas cada' }],
    },
    ],
    esqueleto: [
    {
      texto: 'Esqueleto cartilaginoso reforzado por depósitos calcáreos; notocordio persistente entre los espacios intervertebrales; vértebras anficélicas con arco neural (y arco hemal en la cola); cráneo con caja encefálica y esqueleto visceral de mandíbulas, arco hioideo y arcos branquiales; cinturas pectoral y pélvica sostienen las aletas pares.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [100, 114], cita: 'Esqueleto: Es cartilaginoso y' }],
    },
    ],
    muscular: [
    {
      texto: 'Los músculos del cuerpo y de la cola son segmentarios y producen las ondulaciones laterales de la locomoción; en las aletas pares, la región branquial y la cabeza hay músculos más especializados.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [116, 119], cita: 'Músculos: Los músculos del cuerpo' }],
    },
    ],
    digestivo: [
    {
      texto: 'Boca con series transversales de dientes agudos reemplazables; esófago corto, estómago en J con válvula pilórica, intestino con válvula espiral y glándula rectal (secreta fluido rico en cloruro sódico); hígado grande de dos lóbulos, vesícula biliar y páncreas.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [121, 137], cita: 'sistema digestivo: comienza con' }],
    },
    ],
    respiratorio: [
    {
      texto: 'Al abrir y cerrar la boca el agua es forzada hacia las hendiduras branquiales y los espiráculos; las branquias están formadas por numerosos filamentos alargados y paralelos con capilares.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [160, 164], cita: 'Sistema respiratorio: mediante la' }],
    },
    ],
    circulatorio: [
    {
      texto: 'Corazón con seno venoso, aurícula, ventrículo de paredes gruesas y cono arterioso; la sangre pasa por el corazón una sola vez en cada circuito y toda la sangre del corazón es venosa.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [145, 156], cita: 'Sistema circulatorio: el corazón' }],
    },
    ],
    excretor: [
    {
      texto: 'Dos riñones alargados situados sobre el celoma a cada lado de la aorta dorsal; la orina se recoge por conductillos segmentarios en un uréter longitudinal que desemboca en la papila urogenital de la cloaca.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [166, 170], cita: 'Sistema excretor: los dos riñones' }],
    },
    ],
    nervioso: [
    {
      texto: 'Encéfalo más avanzado que el de las lampreas, con lóbulos olfatorios, hemisferios cerebrales, lóbulos ópticos y cerebelo; diez pares de nervios craneales y un par de nervios espinales por somita; el cordón está protegido por los arcos neurales de las vértebras.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [172, 184], cita: 'Sistema nervioso: El encéfalo' }],
    },
    ],
    sentidos: [
    {
      texto: 'Olfato muy desarrollado; oído interno con tres conductos semicirculares; línea lateral con células sensitivas ciliadas; ampollas de Lorenzini en la cabeza, que responden a estímulos eléctricos y de presión.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [186, 202], cita: 'Órganos de los sentidos: Para' }],
    },
    ],
    reproductor: [
    {
      texto: 'Sexos separados y fecundación interna: en el apareamiento el macho introduce el esperma en la cloaca de la hembra con la ayuda de los fórceps (pterigopodios); los oviductos poseen glándula de la concha y, en las ovovivíparas, un ensanchamiento en forma de útero.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [204, 218], cita: 'Sistema reproductor: Los sexos' }],
    },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los huevos son grandes, cargados de vitelo y de desarrollo lento (9-25 meses); las formas ovíparas depositan los huevos en una cápsula córnea llamada bolsa de sirena, la mayoría de tiburones y rayas son ovovivíparos y en Mustelus se forma una especie de placenta.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [220, 230], cita: 'Reproducción: Los huevos son' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Son más densos que el agua del mar y tienden a hundirse; los nadadores compensan con grandes hígados de aceites ligeros, aletas pectorales a modo de deslizadores y colas heterocercas cuyo lóbulo superior prolongado produce un empuje hacia arriba.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [38, 48], cita: 'Grandes hígados con aceites' }],
    },
    {
      texto: 'Son más densos que el agua de mar y, al carecer de vejiga natatoria, los nadadores de aguas abiertas obtienen sustentación de los grandes hígados con aceites ligeros, las aletas pectorales a modo de deslizadores y las colas heterocercas.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [38, 48], cita: 'más densos que el agua del mar' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Squalus / Mustelus',
      descripcion: 'tiburones; organización descrita en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [81, 81], cita: 'ORGANIZACIÓN DE SQUALUS O' }],
    },
    {
      nombre: 'Raja (raya común)',
      descripcion: 'batoideo de fondo de aguas costeras',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [64, 69], cita: 'Rayas. Cuerpo deprimido' }],
    },
  ],
  notas: [],
};

export default taxon;
