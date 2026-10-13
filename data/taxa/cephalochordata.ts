import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'cephalochordata',
  nombre: 'Cephalochordata',
  nombreComun: 'Cefalocordados (anfioxos)',
  nivel: 'subphylum',
  padre: 'chordata',
  orden: 2,
  resumen: [
    {
      texto: 'Cordados en forma de pez llamados lancetas o anfioxos; unas 25 especies en los océanos tropicales y templados. Son animales bentónicos que excavan en arenas conchíferas barridas por las corrientes, con las cabezas asomando hacia el agua de la que filtran las partículas de alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [239, 245], cita: 'lancetas o anfioxos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo largo, delgado, comprimido lateralmente, puntiagudo en ambos extremos y sin cabeza distinta; aleta dorsal media baja a lo largo del cuerpo, aleta preanal desde el atrioporo hasta el ano, cola con aleta membranosa y pliegues metapleurales a cada lado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [260, 265], cita: 'puntiagudo en ambos extremos' }],
    },
    {
      texto: 'La boca es ventral en el extremo anterior, el ano se ubica en el lado izquierdo cerca de la base de la aleta caudal y el atrioporo es una abertura ventral adicional delante del ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [267, 269], cita: 'atrioporo es una abertura' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La cubierta corporal es una sola capa de epitelio blando con células con apéndices sensitivos, y debajo tejido conjuntivo blando.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [271, 273], cita: 'capa de epitelio blando' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El notocordio es un bastón alargado de células altas con sustancia gelatinosa rodeado de tejido conjuntivo, que llega hasta la parte anterior del cuerpo; otros órganos de sostén son el refuerzo parecido a cartílago del capuchón bucal, los radios de las aletas y bastones en las barras branquiales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [275, 280], cita: 'bastón alargado formado' }],
      },
    ],
    muscular: [
      {
        texto: 'A cada lado del cuerpo y la cola hay entre 50-85 músculos en forma de < o miómeros, de fibras longitudinales separadas por septos de tejido conjuntivo, que alternan en posición entre ambos lados (carácter único) y producen la curvatura lateral para nadar y minar.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [280, 285], cita: 'o miómeros, cada uno' }],
      },
    ],
    digestivo: [
      {
        texto: 'El tubo digestivo se inicia en el capuchón bucal rodeado de cirros bucales ciliados que forman el "órgano de la rueda"; la boca, protegida por doce tentáculos del velo, da a la faringe con numerosas hendiduras branquiales, luego al intestino y al ano; hay un hígado adherido a la parte anterior del intestino.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [289, 296], cita: 'órgano de la rueda' }],
      },
      {
        texto: 'La faringe contiene un surco hiperbranquial ciliado y un endostilo ventral con células ciliadas y glandulares; filtran el alimento como las ascidias mediante una red mucosa faríngea producida por el endostilo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [302, 306], cita: 'red mucosa faríngea' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio parecido al de los cordados superiores pero sin corazón; además de vasos sanguíneos hay espacios abiertos por donde circula la sangre incolora hacia los tejidos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [321, 323], cita: 'no hay corazón' }],
      },
    ],
    excretor: [
      {
        texto: 'Representado por nefridios ciliados y por los cuerpos pardos ubicados dorsalmente respecto al intestino.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [325, 327], cita: 'por nefridios ciliados y' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cordón nervioso dorsal hueco por encima de la notocorda, abierto al exterior por el neuroporo anterior; una vesícula cerebral media con fosa olfatoria, una pequeña mancha ocular de pigmento negro y dos pares de nervios craneales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [308, 312], cita: 'por el neuroporo anterior' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados con unos 25 pares de gónadas; óvulos y espermatozoides se liberan en la cavidad atrial y salen por el atrioporo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [329, 330], cita: '25 pares de gónadas' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Atrio y atrioporo',
      datos: [
        {
          texto: 'El atrio es una cavidad externa que comunica con el exterior a través del atrioporo, abertura ventral delante del ano.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [298, 300], cita: 'comunica con el exterior' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La fecundación es externa; los huevos se ponen durante el ocaso y por la mañana nace una larva ciliada libre que se alimenta y crece hasta los 3 meses, adquiriendo gradualmente la forma del adulto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [330, 333], cita: 'una larva ciliada libre' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Bentónicos, excavan en arenas conchíferas gruesas barridas por las corrientes en aguas superficiales próximas a la costa, y filtran partículas de alimento del agua. Son una fuente de alimento importante en algunas zonas de Asia.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [243, 256], cita: 'arenas conchíferas gruesas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'anfioxo (lanceta)',
      descripcion: 'cordado bentónico excavadores en arenas de aguas costeras',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [241, 245], cita: 'lancetas o anfioxos' }],
    },
  ],
  notas: [],
};

export default taxon;
