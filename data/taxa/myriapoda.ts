import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'myriapoda',
  nombre: 'Myriapoda',
  nombreComun: 'Miriápodos',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 2,
  resumen: [
    {
      texto: 'Se incluyen aquí cuatro clases de artrópodos que comprenden unas 10.500 especies: Chilopoda (ciempiés), Diplopoda (milpiés), Pauropoda y Simphyla. Tienen un cuerpo compuesto por una cabeza y un tronco alargado con muchos segmentos provistos de patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [462, 467], cita: 'unas 10.500 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La cabeza lleva un par de antenas y por lo general ocelos pero, excepto en algunos ciempiés, nunca hay ojos compuestos verdaderos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [478, 480], cita: 'un par de antenas' }],
    },
    {
      texto: 'Las piezas bucales se localizan en el lado ventral de la cabeza y se dirigen hacia delante: un epistoma y un labro forman el labio superior y el techo de la cavidad preoral; el labio inferior está formado por un primer o segundo par de maxilas y, encerradas dentro de la cavidad preoral, están el par de mandíbulas y una hipofaringe.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [482, 485], cita: 'la cavidad preoral' }],
    },
  ],
  embriologia: {},
  sistemas: {
    respiratorio: [
      {
        texto: 'El intercambio gaseoso se realiza típicamente por un sistema traqueal en el que los espiráculos no pueden cerrarse; algunos miriápodos (paurópodos) respiran a través de la piel, que en estos casos es delgada y blanda.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [487, 489], cita: 'un sistema traqueal en' }],
      },
    ],
    digestivo: [
      {
        texto: 'El sistema digestivo es simple: comienza en la boca, continúa con un delgado y corto esófago que conduce a un amplio intestino medio, separado del recto muscular y corto por una constricción valvular; en el esófago se abren de uno a tres pares de glándulas salivales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [491, 494], cita: 'una constricción valvular' }],
      },
    ],
    excretor: [
      {
        texto: 'La excreción se realiza a través de dos a cuatro tubos de Malpighio, localizados en la unión del intestino medio con el posterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [496, 498], cita: 'tubos de Malpighio' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio es básicamente lagunar (hemocele) siendo rara la presencia de un sistema ramificado de arterias; el corazón es un tubo dorsal muy largo que se extiende a través de toda la longitud del tronco y posee un par de ostíolos en cada segmento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [500, 503], cita: 'básicamente lagunar (hemocele) siendo' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso no está concentrado y el cordón nervioso ventral contiene un ganglio en cada segmento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [505, 507], cita: 'un ganglio en cada' }],
      },
    ],
    sentidos: [
      {
        texto: 'La cabeza lleva antenas y por lo general ocelos; nunca hay ojos compuestos verdaderos salvo en algunos ciempiés.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [478, 480], cita: 'ojos compuestos verdaderos' }],
      },
    ],
    reproductor: [
      {
        texto: 'Poseen un sistema reproductor relativamente sencillo: las gónadas son dorsales e impares y comunican con conductos pares que pasan al segmento genital abriéndose al exterior a través de gonoporos. El sistema femenino incluye receptáculos seminales donde se almacena el esperma obtenido en la cópula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [509, 520], cita: 'gónadas son dorsales e' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Gonópodos',
      datos: [
        {
          texto: 'Para la cópula los machos poseen apéndices modificados (gonópodos) que se emplean como pinzas para sostener a la hembra o bien sirven para transferir el esperma.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [520, 522], cita: 'apéndices modificados (=gonopodos)' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La reproducción es sexual y está muy desarrollada la inseminación indirecta mediante espermatóforos, aunque también es frecuente que los machos almacenen el esperma en grandes vesículas seminales asociadas con los conductos espermáticos. La multiplicación es a través de huevos provistos de cáscara depositados en el suelo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [511, 523], cita: 'inseminación indirecta mediante espermatóforos' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven generalmente bajo rocas, piedras, maderas, suelos y humus y se distribuyen ampliamente tanto en regiones tropicales como en las templadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [474, 476], cita: 'bajo rocas, piedras, maderas' }],
    },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El cuerpo con cabeza y tronco alargado de muchos segmentos con patas fue en otro tiempo considerado suficiente para reunir a los cuatro grupos en una sola Clase Myriapoda (=muchas patas), pero al existir diferencias fundamentales entre ellos se abandonó este taxón, que quedó solo como un nombre colectivo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [469, 472], cita: 'se abandonó este taxón' }],
    },
  ],
};

export default taxon;
