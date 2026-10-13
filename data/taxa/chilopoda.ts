import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'chilopoda',
  nombre: 'Chilopoda',
  nombreComun: 'Quilópodos (ciempiés)',
  nivel: 'clase',
  padre: 'myriapoda',
  orden: 1,
  resumen: [
    {
      texto: 'Comprende aproximadamente unas 2.500 especies de ciempiés características de regiones tropicales y templadas de todo el mundo; existen formas largas y filiformes (en el suelo), planas y robustas (en grietas, debajo de corteza, bajo piedras) y formas con largas patas, algunas en viviendas humanas como Scutigera coleoptrata.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [527, 531], cita: 'unas 2.500 especies de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Miden entre 3-30 cm de longitud, pudiendo tener entre 15 a 173 somitos; de color generalmente marrón rojizo, aunque las formas tropicales son rojas, verdes, amarillas, azules o combinadas. La cabeza puede ser convexa o aplanada con las antenas dispuestas en el margen frontal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [533, 539], cita: '15 a 173 somitos' }],
    },
    {
      texto: 'Poseen un par de mandíbulas y un par de maxilas; cada mandíbula lleva dientes y un grueso borde de sedas, localizada por debajo de la superficie ventrolateral de la cabeza; por debajo de estas se hallan las maxilas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [541, 543], cita: 'un par de mandíbulas' }],
    },
    {
      texto: 'Por detrás del primer segmento del tronco hay 15 o más segmentos que llevan las patas (un par por segmento); el último par de patas es sensorial o defensivo y no locomotor, y puede ser más largo, usado como un pincho para la defensa; el último segmento del tronco carece de patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [552, 555], cita: 'sensorial o defensivo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    digestivo: [
      {
        texto: 'Mandíbulas provistas de dientes y un grueso borde de sedas; las presas son desgarradas por las forcípulas al mismo tiempo que inyectan el veneno, que actúa como una enzima proteolítica.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [541, 563], cita: 'como una enzima proteolítica' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos son separados; el gonoporo se abre en el último segmento del tronco cerca del ano. En el segmento genital, en ambos sexos, se encuentran un par de pequeños apéndices llamados gonópodos usados en la reproducción.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [555, 569], cita: 'el gonoporo se abre' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Forcípulas (uñas venenosas)',
      datos: [
        {
          texto: 'Cubriendo los apéndices bucales se hallan las gruesas forcípulas, comúnmente llamadas uñas venenosas, que representan a los apéndices del primer segmento del tronco; cada forcípula está curvada hacia la línea media ventral y lleva una uña puntiaguda y terminal que da salida al conducto de la glándula venenosa.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [545, 548], cita: 'llamadas uñas venenosas' }],
        },
      ],
    },
    {
      titulo: 'Gonópodos',
      datos: [
        {
          texto: 'En el segmento genital, en ambos sexos, hay un par de pequeños apéndices llamados gonópodos usados en la reproducción.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [555, 556], cita: 'apéndices llamados gonopodos' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Sexos separados; algunos ponen huevos y otros son vivíparos; los jóvenes se parecen a los adultos y poseen el mismo número o menos segmentos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [568, 570], cita: 'otros son vivíparos' }],
    },
  ],
  bioecologia: [
    {
      texto: 'La mayoría de los quilópodos son depredadores nocturnos que permanecen escondidos durante el día; cazan lombrices de tierra, nematodos, caracoles, artrópodos, ranas, sapos, serpientes, aves y hasta ratones. No son predadores muy activos porque la mayoría tiene mala visión.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [558, 562], cita: 'de hábitos nocturnos permaneciendo' }],
    },
    {
      texto: 'En general la toxicidad del veneno es baja y solo Scolopendra gigantea puede causar la muerte del hombre; las demás especies solo provocan molestias locales más o menos serias y dolorosas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [564, 566], cita: 'Scolopendra gigantea puede causar' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Scutigera coleoptrata',
      descripcion: 'ciempiés de largas patas que aparece a menudo en tuberías de baños y lavabos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [531, 531], cita: 'Scutigera coleoptrata que aparece' }],
    },
    {
      nombre: 'Scolopendra gigantea',
      descripcion: 'la única especie cuyo veneno puede causar la muerte del hombre',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [564, 564], cita: 'gigantea puede causar la' }],
    },
  ],
  notas: [],
};

export default taxon;
