import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'echinodermata',
  nombre: 'Echinodermata',
  nombreComun: 'Equinodermos',
  nivel: 'phylum',
  padre: 'deuterostomia',
  orden: 1,
  resumen: [
    {
      texto: 'El Phylum comprende actualmente unas 7000 especies conocidas, además de 20.000 especies fósiles que datan del Cámbrico; son animales deuterostomados y enterocelomados. Incluye estrellas de mar, erizos de mar, dólares de arena, lirios de mar, pepinos o cohombros de mar y serpientes de mar u ofiuros.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [7, 13], cita: 'Son animales deuterostomados' }],
    },
    {
      texto: 'Son organismos de vida libre, exclusivamente marinos y con amplia distribución geográfica —no se conoce ningún equinodermo parásito— desde mares tropicales hasta el Ártico y el Antártico. Sus larvas son planctónicas y los adultos bentónicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [15, 22], cita: 'vida libre, exclusivamente marinos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Aunque las larvas tienen simetría bilateral, los adultos muestran simetría radial pentámera. Tienen un esqueleto interno de osículos calcáreos articulados (estrellas, ofiuros) o fusionados en un caparazón rígido (erizos, dólares de arena), generalmente con espinas o tubérculos que les dan un aspecto rugoso o espinoso.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [32, 47], cita: 'serie de osículos calcáreos' }],
    },
  ],
  embriologia: {
    cavidad: {
      valor: 'enterocelomado',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [8, 9], cita: 'Son animales deuterostomados, enterocelomados' }],
    },
    simetria: {
      valor: 'pentarradial',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [32, 33], cita: 'simetría radial pentámera' }],
      nota: 'Las larvas tienen simetría bilateral; los adultos, radial pentámera.',
    },
    segmentacion: {
      valor: 'radial',
      nota: 'División radial propia de los deuterostomados: los cortes ocurren paralelos o perpendiculares al eje polar.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Deuterostome', titulo: 'Deuterostome - Wikipedia in English', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    esqueleto: [
      {
        texto: 'Esqueleto interno de osículos calcáreos que pueden articularse entre sí o fusionarse formando un caparazón esquelético rígido, dotado normalmente de espinas o tubérculos sobresalientes (de ahí "equinodermos": piel espinosa).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [41, 47], cita: 'caparazón esquelético rígido' }],
      },
    ],
    digestivo: [
      {
        texto: 'Celoma amplio en cuyo interior se halla el tubo digestivo bien desarrollado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [55, 56], cita: 'celoma amplio en cuyo' }],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de órganos excretores diferenciados.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [56, 56], cita: 'órganos excretores diferenciados' }],
      },
    ],
    respiratorio: [
      {
        texto: 'El intercambio gaseoso se realiza en estructuras que varían mucho de un grupo a otro y que parecen haberse desarrollado independientemente en las diferentes clases.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [57, 58], cita: 'intercambio gaseoso se realiza' }],
      },
    ],
    reproductor: [
      {
        texto: 'La mayor parte de los miembros son dioicos y los órganos genitales son sencillos: no hay cópula y normalmente la fecundación es externa, en el agua.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [59, 60], cita: 'la fecundación es externa' }],
      },
    ],
    tegumento: [
      {
        texto: 'Epidermis sobre una dermis que contiene los osículos esqueléticos; la superficie presenta espinas o tubérculos sobresalientes (piel espinosa).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [41, 47], cita: 'espinas o tubérculos que' }],
      },
      {
        texto: 'La pared corporal se compone de una epidermis exterior delgada, una dermis espesa de tejido conectivo y un peritoneo interior.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Asteroidea', titulo: 'Asteroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Bajo la dermis hay una capa de músculos circulares y otra más externa de músculos longitudinales; la musculatura bordea la cavidad celomática revestida por un peritoneo ciliado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [148, 152], cita: 'musculatura constituida por una capa' }],
      },
      {
        texto: 'Además de la musculatura de la pared, los pies ambulacrales se mueven por la presión del fluido del sistema vascular acuífero.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Echinodermata', titulo: 'Echinodermata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio sanguíneo está reducido y es difícil de ver: vasos que rodean a la boca y vasos radiales (uno en cada brazo en las estrellas), debajo del conducto radial del sistema vascular acuífero.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [241, 244], cita: 'sanguíneo está reducido y es' }],
      },
      {
        texto: 'El sistema hemal acompaña al vascular acuífero; el fluido de la cavidad corporal distribuye el oxígeno y los nutrientes.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Asteroidea', titulo: 'Asteroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sin cerebro: un nervio circumoral (anillo) con cordones nerviosos radiales en cada brazo, más un plexo nervioso subepidérmico.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [245, 249], cita: 'nervio circumoral con cordones' }],
      },
    ],
    sentidos: [
      {
        texto: 'Pies ambulacrales terminales en forma de tentáculo de función sensorial y un pequeño ocelo rojo en la punta de cada brazo (en las estrellas).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [108, 112], cita: 'de función sensorial, así' }],
      },
      {
        texto: 'Algunas ofiuras llevan microlentes de calcita en las placas dorsales que concentran la luz sobre nervios fotosensibles.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ophiuroidea', titulo: 'Ophiuroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Sistema ambulacral (vascular acuífero)',
      datos: [
        {
          texto: 'El carácter más exclusivo del phylum es un sistema de canales celomáticos y apéndices superficiales que constituyen el sistema vascular acuífero o ambulacral; primitivamente habría servido para recoger y transportar el alimento, pero en la mayoría asumió un papel locomotor.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [49, 53], cita: 'sistema vascular acuífero' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La mayoría son dioicos, con fecundación externa en el agua; las larvas son planctónicas y los adultos bentónicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [59, 60], cita: 'miembros son dioicos' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Exclusivamente marinos y bentónicos en sustratos duros o sedimentos móviles, con tendencia a esconderse en grietas o enterrarse en arena o fango; hay especies de hasta 1,8 m aunque la mayoría tiene tallas medianas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [15, 30], cita: 'esconderse en grietas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Pycnodia helianthoides',
      descripcion: 'estrella de mar del Pacífico que llega a 1 m de diámetro',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [25, 26], cita: 'estrella de mar Pycnodia' }],
    },
    {
      nombre: 'Synapta maculata',
      descripcion: 'pepino de mar de hasta 1,80 m de largo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [27, 27], cita: 'pepino de mar Synapta' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Del estudio de sus larvas se comprobó que están próximos al tronco ancestral de los animales que dieron origen a los cordados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 39], cita: 'próximos al tronco ancestral' }],
    },
  ],
};

export default taxon;
