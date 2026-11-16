import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'urochordata',
  nombre: 'Urochordata',
  nombreComun: 'Urocordados (tunicados)',
  nivel: 'subphylum',
  padre: 'chordata',
  orden: 1,
  resumen: [
    {
      texto: 'Los urocordados adultos se conocen como tunicados: animales marinos frecuentes que se parecen poco a los cordados; la mayoría son sésiles y el cuerpo está recubierto por una compleja túnica exoesquelética.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [85, 89], cita: 'conocen como tunicados' }],
    },
    {
      texto: 'Presentan una faringe perforada desarrollada, pero en el adulto la notocorda y el cordón nervioso desaparecen; solamente los estadios larvarios, que se parecen a renacuajos, poseen las características distintivas de los cordados. Se han descrito 1250 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [89, 98], cita: 'se parecen a renacuajos' }],
    },
    {
      texto: 'Incluyen tres clases: Ascidiacea, Thaliacea y Larvacea; las ascidias reúnen la mayor parte de las especies y son los tunicados más comunes, mientras que las otras dos clases están adaptadas a la existencia planctónica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [96, 98], cita: 'adaptadas a la existencia' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo adulto recubierto por una túnica celulósica (tunicina) con dos sifones (inhalante y exhalante); la larva natante, parecida a un renacuajo, lleva notocorda caudal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'El cuerpo está recubierto por una compleja túnica exoesquelética.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 89], cita: 'una compleja túnica exoesquelética' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Túnica exoesquelética de celulosa (tunicina) que encierra al adulto; la notocorda larvaria se reabsorbe en la metamorfosis.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Bandas musculares longitudinales en el manto, que retraen los sifones; músculos segmentarios en la cola de la larva.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Faringe perforada por hendiduras branquiales con endostilo ventral que segrega mucílago; los nutrientes aglutinados recorren el tubo digestivo por acción de flagelos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La faringe perforada sirve para la captura de alimento y la respiración; también participan las paredes de la cavidad atrial.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio poco desarrollado: un corazón tubular que late peristálticamente y dos vasos, uno anterior y otro posterior; la corriente cambia de sentido periódicamente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores definidos en la fuente consultada; eliminan los desechos por el sifón exhalante.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso muy reducido en el adulto (un ganglio del tronco), reflejo de un ciclo de vida relativamente inactivo; la larva tiene un cordón nervioso dorsal desarrollado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Receptores sensoriales poco desarrollados en el adulto; la larva posee un ojo medio y un otolito.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Hermafroditas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los urocordados son hermafroditas; la larva natante sufre una metamorfosis retrógrada que reabsorbe la cola, la notocorda y el cordón nervioso.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Marinos; las ascidias son sésiles y los taliáceos y larváceos, planctónicos de vida libre.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Ascidiacea',
      descripcion: 'ascidias o chorros de mar',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ascidiacea', titulo: 'Ascidiacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Thaliacea',
      descripcion: 'salpas y doliólidos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Larvacea',
      descripcion: 'apendicularios',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
