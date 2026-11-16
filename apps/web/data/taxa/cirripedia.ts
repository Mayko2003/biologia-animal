import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'cirripedia',
  nombre: 'Cirripedia',
  nombreComun: 'Cirrípedos',
  nivel: 'subclase',
  padre: 'maxillopoda',
  orden: 2,
  resumen: [
    {
      texto: 'Los cirrípedos son denominados comúnmente percebes, incluyendo la bellota de mar; son uno de los grupos de crustáceos más modificados, y su peculiar morfología hizo que hace dos siglos se confundieran con moluscos hasta que el estudio de sus larvas (similares a las de los ostrácodos) mostró que se trataba de crustáceos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [356, 363], cita: 'denominados comúnmente percebes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Tienen dos tipos corporales básicos: con y sin pedúnculo; los que no tienen pedúnculo cubren normalmente todo el litoral rocoso, mientras que los pedunculados prefieren vivir mar adentro o sobre objetos flotantes; existe además un tercer tipo, los "amorfos" o Verrucomorfa, no simétricos, de aguas profundas sobre espinas de erizos o como comensales de ballenas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [366, 371], cita: 'tipos corporales básicos' }],
    },
    {
      texto: 'El cirrípedo juvenil posee una morfología consistente en seis placas a modo de armadura externa; completada la metamorfosis siguen creciendo, pero no sufren mudas o ecdisis: crecen por adición de material a su cubierta calcificada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 393], cita: 'seis placas a modo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Cubierta calcificada con seis placas a modo de armadura externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [387, 393], cita: 'a su cubierta calcificada' }],
      },
    ],
    reproductor: [
      {
        texto: 'Como muchos otros invertebrados, los cirrípedos son hermafroditas y alternan el estado masculino y femenino temporalmente (unisexual alterno): un individuo puede ser inicialmente macho y luego hembra, y viceversa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [395, 398], cita: 'estado unisexual alterno' }],
      },
    ],
    tegumento: [
      {
        texto: 'Cuerpo cubierto por placas externas calcificadas a modo de armadura; crecen por adición de material a la cubierta, sin mudas tras la metamorfosis.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos del apéndice pedunculado y de las ramas torácicas (cirros) filtradoras.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo; se alimentan filtrando plancton con los apéndices torácicos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Intercambio gaseoso asociado a los apéndices y a la superficie corporal (plan crustáceo).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto del plan crustáceo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas antenales y maxilares del plan crustáceo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cadena nerviosa ventral con ganglios; en el adulto sésil está concentrada.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'La larva nauplio lleva un ojo naupliano mediano característico; el adulto sésil carece de ojos compuestos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Crustacea', titulo: 'Crustacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Poseen dos estados larvarios: el primero de larva nauplius (parte del zooplancton, flotando a merced del viento, las olas y las corrientes; se alimentan activamente y tras dos semanas alcanzan el segundo estado) y el segundo de larva cipris o cíprida (ya no se alimentan, son nadadores activos y su presencia indica alta calidad de las aguas).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [373, 383], cita: 'larva cipris o cíprida' }],
    },
    {
      texto: 'Cuando una larva cipris encuentra un lugar adecuado para fijarse lo hace e inicia la metamorfosis, dando lugar a un cirrípedo juvenil; durante el resto de sus vidas son sésiles y se alimentan filtrando plancton con sus apéndices y liberando sus gametos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 389], cita: 'son sésiles y se' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Se les suele encontrar en la zona intermareal; entre los cirrípedos hay especies de interés comercial como el percebe (Pollicipes cornucopia) y el picoroco (Austromegabalanus psittacus).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [363, 389], cita: 'la zona intermareal' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Pollicipes cornucopia',
      descripcion: 'percebe de interés comercial',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [364, 364], cita: 'percebe (Pollicipes cornucopia)' }],
    },
    {
      nombre: 'Austromegabalanus psittacus',
      descripcion: 'picoroco, cirrípedo de interés comercial',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [364, 364], cita: 'picoroco (Austromegabalanus psittacus)' }],
    },
  ],
  notas: [],
};

export default taxon;
