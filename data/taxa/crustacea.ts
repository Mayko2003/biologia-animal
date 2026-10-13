import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'crustacea',
  nombre: 'Crustacea',
  nombreComun: 'Crustáceos',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 3,
  resumen: [
    {
      texto: 'Comprende aproximadamente unas 42.000 especies conocidas comúnmente como cangrejos, gambas, langostas, langostinos, cochinillas de la humedad, etc.; existen además miles de crustáceos diminutos repartidos en mares, lagos y estanques, con una posición importante en las cadenas tróficas acuáticas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [15, 21], cita: 'aproximadamente unas 42.000 especies' }],
    },
    {
      texto: 'Es el único subphylum de artrópodos exclusivamente acuático: la mayoría son marinos, hay especies dulceacuícolas y también grupos terrestres o semiterrestres que nunca han experimentado una gran evolución adaptativa a la vida en la tierra.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [23, 30], cita: 'artrópodos exclusivamente acuático' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La cabeza es más o menos uniforme y lleva cinco pares de apéndices: un par de anténulas (homólogas a las de otros mandibulados) seguido de un segundo par de antenas —son los únicos artrópodos con dos pares de antenas—, luego las mandíbulas que flanquean la boca ventral, y detrás dos pares de apéndices alimentarios accesorios (primeras maxilas o maxílulas y segundas maxilas).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [36, 49], cita: 'dos pares de antenas' }],
    },
    {
      texto: 'El tronco, con un número variable de segmentos (16 a 20), comprende una serie de segmentos bien definidos y un telson terminal (=abanico caudal) en cuya base está el ano; en algunos grupos se divide en tórax y abdomen y los segmentos 1-3 pueden fusionarse con la cabeza formando un escudo cefálico, con apéndices modificados para la alimentación llamados maxilípedos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [51, 65], cita: 'se denominan maxilípedos' }],
    },
    {
      texto: 'En muchas especies el tórax o los segmentos anteriores del tronco están cubiertos por un caparazón dorsal o "costra", cuyos márgenes laterales suelen sobresalir de los bordes del cuerpo; en casos extremos envuelve todo el cuerpo como las valvas de las almejas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 75], cita: 'por un caparazón dorsal' }],
    },
    {
      texto: 'Los apéndices son típicamente birrámeos: existe un protopodio basal compuesto de coxopodio (coxa) y basipodio (base), y al basipodio se unen una rama interna (endopodio) y una externa (exopodio), cada una de uno o varios artejos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [77, 81], cita: 'el endopodio, y una' }],
    },
  ],
  embriologia: {},
  sistemas: {
    digestivo: [
      {
        texto: 'El aparato digestivo comienza con la boca ventral y es casi siempre recto; la región anterior puede estar ensanchada y funciona como estómago triturador, cuyas paredes tienen rebordes quitinosos, dentículos u osículos calcáreos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [125, 127], cita: 'modo de estómago triturador' }],
      },
      {
        texto: 'La parte central del tubo digestivo casi siempre presenta uno o varios pares de ciegos; por lo menos un par de ciegos mesointestinales se ha modificado para formar glándulas digestivas grandes y esponjosas (hepatopáncreas), fuente principal de enzimas; la absorción está confinada a las paredes de la parte media del tubo y a los túbulos del hepatopáncreas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [129, 143], cita: 'glándulas digestivas grandes y' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema semejante al de otros artrópodos, pero el corazón dorsal es una vesícula compacta; los crustáceos pequeños tienen vasos limitados y los grandes un sistema arterial extenso con grandes redes de capilares. La sangre incolora contiene amebocitos hialinos y granulares que intervienen en la coagulación; el pigmento respiratorio es la hemocianina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [155, 162], cita: 'pigmento respiratorio es la' }],
      },
      {
        texto: 'Es un sistema lagunar (sin venas), característico de los artrópodos, que contrasta con el sistema cerrado de anélidos y vertebrados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [174, 176], cita: 'sistema lagunar (sin venas)' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Las branquias son normalmente los órganos de intercambio gaseoso y están típicamente asociadas a los apéndices.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [178, 180], cita: 'órganos de intercambio gaseoso' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Apéndices birrámeos',
      datos: [
        {
          texto: 'En los crustáceos primitivos los apéndices son numerosos y similares entre sí y realizan en conjunto muchas funciones; la tendencia evolutiva fue hacia la reducción del número y la especialización regional: en cangrejos nadadores un par está modificado para la natación y otros para reptar, agarrar, transferir espermatozoides, incubar los huevos o manipular el alimento.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [83, 88], cita: 'una especialización regional de' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Los crustáceos son epibentónicos (con apéndices pesados adaptados para la reptación y excavación), además de nadadores y suspensívoros; existe el mayor número de artrópodos filtradores y suspensívoros, con alimentación filtradora mediante sedas en lugar de cilios y apéndices especiales que baten el agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [105, 119], cita: 'filtradores y suspensívoros' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
