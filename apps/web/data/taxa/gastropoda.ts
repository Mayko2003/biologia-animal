import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'gastropoda',
  nombre: 'Gastropoda',
  nombreComun: 'Gasterópodos',
  nivel: 'clase',
  padre: 'mollusca',
  orden: 2,
  resumen: [
    {
      texto: 'Los llamados comúnmente caracoles presentan gran variedad de colores, ornamentos y tamaños. Se conocen unas 30000 especies de hábitat terrestre y acuático (mar y aguas dulces), con adaptaciones respiratorias: branquias en las formas acuáticas, reemplazadas por pulmones en las terrestres.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [127, 130], cita: 'unas 30000 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Un gasterópodo típico presenta una cabeza anterior bien desarrollada con 2 pares de tentáculos retráctiles, 1 par de ojos en el 2° par de tentáculos, y la boca; la cabeza se une al pie ventral musculoso sobre el que se ubica la masa visceral dentro de una concha espiral dorsal de carbonato cálcico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 155], cita: '2 pares de tentáculos retráctiles' }],
    },
    {
      texto: 'Un epitelio mucoso y ciliado cubre las partes carnosas descubiertas; en el lado derecho se abre el poro genital cerca de la cabeza, y el ano y el poro respiratorio (mayor que el ano) están en el borde del manto, en el borde de la concha.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [175, 177], cita: 'el poro genital cerca de' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'El manto es una membrana delgada que segrega y tapiza la concha y rodea a las vísceras; todas las partes blandas pueden retraerse dentro de la concha.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [179, 181], cita: 'membrana delgada que segrega y' }],
      },
    ],
    esqueleto: [
      {
        texto: 'La concha es de una sola pieza o univalva y no posee cámaras, cubierta exteriormente por un perióstraco córneo (partes: ápice, espira, columela, abertura, canal sifonal, labio externo e interno, opérculo). La mayoría de los gasterópodos actuales poseen conchas asimétricas; si son simétricas lo son secundariamente.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 168], cita: 'una sola pieza o univalva' }],
      },
      {
        texto: 'En las babosas la concha puede o no existir y cuando se presenta se encuentra reducida y completamente cubierta por el manto; en las orejas de mar (Haliothis) la concha es espiralada en los juveniles y la espiralización disminuye hasta que el adulto tiene una concha de una sola vuelta.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 173], cita: 'puede o no existir y cuando' }],
      },
    ],
    digestivo: [
      {
        texto: 'Internamente el tubo digestivo está girado en forma de U por la torsión.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [139, 140], cita: 'tubo digestivo está girado en' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Branquias en las formas acuáticas, reemplazadas por pulmones en las terrestres.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [129, 130], cita: 'reemplazadas por pulmones en las' }],
      },
    ],
    nervioso: [
      {
        texto: 'Por la torsión, el sistema nervioso está retorcido adoptando forma de un ocho.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [140, 140], cita: 'retorcido adoptando forma de un' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los individuos son monoicos (hermafroditas) y la fecundación es interna ya que los machos poseen un pene.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [183, 185], cita: 'son monoicos (hermafroditas) y' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón dentro de la cavidad pericárdica, como en el plan general de los moluscos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Metanefridios comunicados con la cavidad pericárdica, como en el plan general de los moluscos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Cabeza bien desarrollada con ojos y 1-2 pares de tentáculos, más una concentración de tejido nervioso (ganglio).',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Gastropoda/', titulo: 'Gastropoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Pie muscular ventral característico para la reptación.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Mollusca', titulo: 'Mollusca - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Torsión',
      datos: [
        {
          texto: 'La mayor parte del cuerpo por detrás de la cabeza (masa visceral, manto y cavidad paleal) está girada 180° en sentido contrario a las agujas del reloj: la cavidad paleal, las branquias, el ano y los dos poros excretores se localizan en la región anterior, detrás de la cabeza. La cabeza y el pie mantienen su posición y la simetría bilateral, y la concha sigue siendo una espiral simétrica.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [132, 142], cita: 'girados 180° en sentido' }],
        },
        {
          texto: 'La torsión y la espiralización de la concha ocurrieron como procesos evolutivos independientes: la concha planoespiral original evolucionó antes que la torsión. Varios autores sugieren que la torsión es una adaptación larvaria para proteger la cabeza; otros sostienen que fue una adaptación del adulto.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [132, 147], cita: 'procesos evolutivos independientes' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La larva al principio tiene simetría bilateral, pero pronto empieza a retorcerse como consecuencia de contracciones musculares y un crecimiento diferencial. Los huevos son colocados en el exterior y el desarrollo es directo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [142, 185], cita: 'empieza a retorcerse' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Existen especies herbívoras y carnívoras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [186, 186], cita: 'especies herbívoras y carnívoras' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Haliothis',
      descripcion: 'oreja de mar; concha espiralada en juveniles y de una sola vuelta en el adulto',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [170, 173], cita: 'orejas de mar (Haliothis)' }],
    },
  ],
  notas: [],
};

export default taxon;
