import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'scorpionida',
  nombre: 'Scorpionida',
  nombreComun: 'Escorpiones',
  nivel: 'subclase',
  padre: 'arachnida',
  orden: 2,
  resumen: [
    {
      texto: 'Subclase de arácnidos que incluye a los escorpiones o alacranes. Habitan preferentemente en terrenos arenosos o rocosos, en superficies tropicales y desérticas; una minoría son arborícolas trepadores, erráticos o cavernícolas, y mantienen relaciones comensalistas o sinantrópicas cerca de moradas humanas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 323], cita: 'terrenos arenosos o rocosos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Prosoma o cefalotórax corto, con un par de ojos en el medio de su superficie dorsal y de dos a cinco pares en ambas esquinas delanteras; sostiene las extremidades: quelíceros, pedipalpos en forma de pinzas y patas. Los cuatro pares de patas ambulatorias están compuestos de ocho segmentos (artejos) y terminan en dos pares de uñas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [301, 305], cita: 'pedipalpos en formas de' }],
    },
    {
      texto: 'El abdomen se compone de trece segmentos divididos en mesosoma y metasoma. Los ocho primeros forman el mesosoma: en el 1° están las aberturas genitales cubiertas por un opérculo, en el 2° los peines, y luego los espiráculos pulmonares (segmentos 10 al 13). Los cinco últimos se estrechan y forman el metasoma que termina en un telson con glándulas venenosas y aguijón.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [307, 315], cita: 'compone de trece segmentos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    muscular: [
      {
        texto: 'Como todos los artrópodos, sus músculos se insertan en el interior en apodemas (como horquilla) del exoesqueleto de quitina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [335, 336], cita: 'en apodemas (como horquilla)' }],
      },
    ],
    digestivo: [
      {
        texto: 'El aparato digestivo comienza con una boca provista de una faringe musculosa que bombea la comida predigerida y la redirige a los intestinos anterior y medio, que desembocan en glándulas anexas secretoras de amilasas, proteasas y lipasas. Como órgano de almacenamiento funciona un gran hepatopáncreas que puede representar hasta un quinto del peso total del animal; pueden engordar hasta un tercio de su peso con una sola comida y ayunar hasta doce meses.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 348], cita: 'un gran hepatopáncreas' }],
      },
    ],
    excretor: [
      {
        texto: 'La excreción sucede por los tubos de Malpighi que finalizan en la unión entre los intestinos medio y posterior, emiten compuestos nitrogenados con muy poca pérdida de agua; los residuos se depositan como ácido úrico con las heces.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [349, 352], cita: 'tubos de Malpighi' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio es abierto, con excepción del tubo cardíaco dorsal; la sangre o hemolinfa flota libremente en los senos sanguíneos de los tejidos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [353, 354], cita: 'circulatorio es abierto' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Respiran mediante pulmones en libro o filotráqueas, situados en la parte inferior del cuerpo; en ellos se deposita el oxígeno en la hemolinfa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [355, 356], cita: 'pulmones en libro o' }],
      },
    ],
    nervioso: [
      {
        texto: 'Fibras nerviosas que nacen de un ganglio ventral central con siete nudos nervales; hay además un cerebro con dos grandes ganglios, situados en la zona anterior, que rodean el esófago.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [336, 339], cita: 'siete nudos nervales' }],
      },
    ],
    sentidos: [
      {
        texto: 'Los peines, órganos sensoriales quimiorreceptores exclusivos de los escorpiones, detectan vibraciones; al desplazarse apoyan los peines en el sustrato y obtienen información sobre su entorno.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 311], cita: 'órganos sensoriales quimiorreceptores' }],
      },
    ],
    reproductor: [
      {
        texto: 'Las gónadas, en ambos sexos, están dispuestas en pares como una red de mangueritas. Los machos producen esperma que se almacena en espermatóforos; las hembras producen huevos con o sin vitelo según la especie.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [357, 360], cita: 'red de mangueritas' }],
      },
    ],
    tegumento: [
      {
        texto: 'Exoesqueleto quitinoso del plan quelicerado, con placas dorsales (terguitos) y ventrales (esternitos).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso articulado que mudan periódicamente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Telson y aguijón',
      datos: [
        {
          texto: 'El metasoma termina en un telson con glándulas venenosas y aguijón; la inoculación del veneno se realiza en forma mecánica por acción de fuertes músculos compresores que rodean un par de cuerpos glandulares con plegamientos epiteliales muy desarrollados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 318], cita: 'glándulas venenosas y aguijón' }],
        },
      ],
    },
    {
      titulo: 'Peines',
      datos: [
        {
          texto: 'Órganos sensoriales quimiorreceptores exclusivos de los escorpiones, en el segundo segmento del mesosoma; detectan vibraciones y al apoyarlos en el sustrato obtienen información del entorno.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 311], cita: 'vibraciones y al desplazarse' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los huevos apoicogénicos (con yema) producen embriones que aprovechan el vitelo (multiplicación ovovivípara); en los huevos catocoigénicos (sin yema) las crías nacidas se nutren directamente de la madre con sus quelíceros a divertículos alimenticios (multiplicación vivípara). Desarrollo directo. Existen especies que se reproducen por partenogénesis.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [360, 365], cita: 'catocoigénicos (sin yema) las' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Las especies peligrosas para el humano por la toxicidad de su veneno pertenecen a la familia Buthidae, el género Tityus en Argentina, donde Tityus trivitattus y Tityus serrulatus han ampliado enormemente su distribución; solo una insignificante cantidad de especies puede resultar mortífera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [320, 333], cita: 'a la familia Buthidae' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Tityus trivitattus',
      descripcion: 'escorpión peligroso de Argentina que amplió enormemente su distribución',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [332, 333], cita: 'Tityus trivitattus y Tityus' }],
    },
    {
      nombre: 'Tityus serrulatus',
      descripcion: 'escorpión peligroso de la familia Buthidae',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [332, 333], cita: 'serrulatus han ampliado' }],
    },
  ],
  notas: [],
};

export default taxon;
