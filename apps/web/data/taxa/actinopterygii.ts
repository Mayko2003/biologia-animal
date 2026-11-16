import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'actinopterygii',
  nombre: 'Actinopterygii',
  nombreComun: 'Peces de aletas radiadas',
  nivel: 'subclase',
  padre: 'osteichthyes',
  orden: 1,
  resumen: [
    {
      texto: 'Son el grupo dominante de los vertebrados, con más de 27.000 especies actuales, y colonizaron toda clase de ambientes acuáticos marinos, de agua dulce y salobres; incluye truchas, salmones, sardinas, lucios, percas, arenques, atunes, cíclidos, peces planos, carpas y anguilas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [333, 338], cita: 'el grupo dominante de los vertebrados' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La característica principal es la posesión de un esqueleto de espinas óseas en sus aletas; cráneo cartilaginoso (en parte calcificado) recubierto por huesos dérmicos y un solo par de aberturas branquiales cubiertas por un opérculo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 342], cita: 'de espinas óseas en sus aletas' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Presentan escamas ganoideas (carácter exclusivo del grupo) con ganoína, tejido óseo esponjoso y laminar; en los peces actuales la escama ganoidea se reduce (leptoidea) en dos tipos: cicloideas y ctenoideas, solo con tejido óseo laminar.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [343, 346], cita: 'presentar escamas ganoideas' }],
      },
    ],
    esqueleto: [
    {
      texto: 'La característica principal es el esqueleto de espinas óseas en las aletas; cráneo cartilaginoso (en parte calcificado) recubierto por huesos dérmicos y un solo par de aberturas branquiales cubiertas por un opérculo.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [340, 342], cita: 'espinas óseas en sus aletas' }],
    },
    ],
    muscular: [
    {
      texto: 'Tronco y cola formados por músculos segmentarios (miomeros) en forma de M ensanchada, dispuestos en cuatro bandas y más potentes en el dorso.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [285, 288], cita: 'Músculos: el tronco y la cola' }],
    },
    ],
    digestivo: [
    {
      texto: 'Mandíbulas con dientes cónicos y dientes faríngeos; faringe con branquias, esófago corto, estómago curvo con válvula pilórica, tres ciegos pilóricos, hígado grande, vesícula biliar y páncreas.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [290, 296], cita: 'Sist. Digestivo: las mandíbulas' }],
    },
    ],
    respiratorio: [
    {
      texto: 'Cuatro pares de branquias soportadas por arcos branquiales; el opérculo participa en la ventilación y el flujo de agua contracorriente al sanguíneo maximiza el intercambio gaseoso.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [309, 315], cita: 'cuatro pares de branquias' }],
    },
    ],
    circulatorio: [
    {
      texto: 'Sistema circulatorio cerrado con corazón de dos cámaras (aurícula y ventrículo), seno venoso y cono arterioso; la sangre pasa una sola vez por el corazón en cada circuito; hay sistema linfático.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [298, 305], cita: 'Sistema circulatorio cerrado' }],
    },
    ],
    excretor: [
    {
      texto: 'Excreción por el aparato renal, como en los demás vertebrados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    nervioso: [
    {
      texto: 'Cerebro con dos lóbulos olfativos, dos hemisferios cerebrales, dos lóbulos ópticos y un cerebelo; 10 pares de nervios craneales y un par de nervios espinales por segmento.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [317, 319], cita: 'Sistema nervioso: Cerebro con' }],
    },
    ],
    sentidos: [
    {
      texto: 'Ojos que perciben el color, quimiorreceptores de gusto y olfato, oídos, y línea lateral que detecta corrientes, vibraciones y el movimiento de presas; algunos perciben o producen electricidad.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [321, 328], cita: 'Órganos sensoriales: Ojos bien' }],
    },
    ],
    reproductor: [
    {
      texto: 'Gónadas pares; ovíparos (algunos ovovivíparos o vivíparos) con fecundación externa salvo excepciones.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [330, 331], cita: 'Gónadas pares, son ovíparos' }],
    },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La mayoría de los teleósteos ovíparos no brindan cuidado parental; predominan la fecundación externa y puestas numerosas, aunque existen viviparidad, ovoviviparidad y cuidado parental por parte del macho o de la hembra.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Actinopterygii', titulo: 'Actinopterygii - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Grupo dominante de los vertebrados, con más de 27.000 especies actuales, que colonizaron toda clase de ambientes acuáticos, tanto marinos como de agua dulce y salobres.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [333, 336], cita: 'grupo dominante de los vertebrados' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'truchas y salmones',
      descripcion: 'actinopterigios conocidos citados por el apunte',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [336, 338], cita: 'truchas, salmones, sardinas' }],
    },
    {
      nombre: 'percas, carpas y anguilas',
      descripcion: 'actinopterigios citados por el apunte',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [336, 338], cita: 'percas, arenques, atunes, cíclidos' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte los menciona como clases que reemplazan a Osteichthyes, ya que este es un grupo parafilético.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [234, 236], cita: 'por las clases Actinopterygii y Sarcopterygii' }],
    },
  ],
};

export default taxon;
