import type { Taxon } from '@/lib/types';

const A = 'annelidos.md' as const;

const taxon: Taxon = {
  slug: 'oligochaeta',
  nombre: 'Oligochaeta',
  nombreComun: 'Oligoquetos',
  nivel: 'clase',
  padre: 'annelida',
  orden: 2,
  resumen: [
    {
      texto: 'Son las lombrices de tierra y de agua dulce, de las cuales se conocen cerca de 3100 especies. Excavan galerías en las que habitan tanto en la tierra como en el fango.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [55, 66], cita: 'cerca de 3100 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo cilíndrico y alargado, algo afilado hacia ambos extremos; la superficie ventral es aplanada y más clara. El gusano adulto tiene unos 115-200 segmentos; la boca está en el primer somito o prostoma y el ano, oval y vertical, en el último.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [67, 72], cita: 'tiene unos 115-200 segmentos' }],
    },
    {
      texto: 'Entre los somitos 32 y 37 existe un abultamiento glandular más claro, el clitelo, encargado de segregar una sustancia que forma la cápsula que aloja a los huevos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 75], cita: 'abultamiento glandular más claro' }],
    },
    {
      texto: 'En cada segmento, excepto el primero y el último, hay cuatro pares de quetas diminutas quitinosas en forma de bastón que sobresalen en la superficie ventral y lateral; sirven de punto de apoyo y contribuyen al movimiento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [77, 81], cita: 'cuatro pares de quetas diminutas' }],
    },
    {
      texto: 'Otras aberturas exteriores: un poro dorsal en el borde anterior de cada somito desde el 8°–9° hasta el extremo anal; un nefridioporo lateroventral en cada somito excepto 1°–3° y el último; aberturas de los receptáculos seminales entre los segmentos 9–10 y 10–11; aberturas de los oviductos ventralmente en el 14; y aberturas de los conductos espermáticos en el 15.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [83, 90], cita: 'un poro dorsal que comunica' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La pared del cuerpo posee una cutícula transparente con finas estrías transversales que producen una ligera irisación; glándulas unicelulares de la epidermis secretan mucus que mantiene húmeda y flexible a la cutícula; también hay células sensitivas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [92, 95], cita: 'cutícula transparente con finas estrías' }],
      },
    ],
    digestivo: [
      {
        texto: 'Boca, faringe con glándulas que lubrican el alimento, esófago con glándulas calcíferas (que secretan carbonato cálcico para eliminar el calcio ingerido), buche o proventrículo para el almacenamiento, molleja con paredes musculares, intestino y ano. El intestino lleva un surco o tiflosol que aumenta la superficie para la digestión y absorción.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [97, 102], cita: 'esófago con glándulas calcíferas' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La respiración se realiza por simple intercambio gaseoso por difusión a través de la pared del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [114, 116], cita: 'intercambio gaseoso por difusión' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Tiene las características del phylum; hay además 5 vasos periesofágicos (corazones) entre los somitos 7–11.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [110, 112], cita: '5 vasos periesofágicos' }],
      },
    ],
    excretor: [
      {
        texto: 'Un par de nefridios en todos los somitos excepto los tres primeros y el último; cada nefridio empieza en un embudo ciliado, el nefrostoma, situado en la base anterior de cada septo, y comunica por un pequeño tubo ciliado con la parte principal en el somito posterior, con asas de diámetro creciente y una amplia ampolla que abre al exterior por el nefridioporo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [118, 128], cita: 'un embudo ciliado, el nefrostoma' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un par de ganglios suprafaríngeos y un par de ganglios subfaríngeos conectados por conectivos que rodean la faringe; del último parte un cordón nervioso ventral hasta el somito anal, con un ganglio ensanchado por somito y tres pares de nervios laterales; fibras sensitivas y motoras.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [130, 135], cita: 'un par de ganglios suprafaríngeos' }],
      },
    ],
    sentidos: [
      {
        texto: 'Células sensitivas y células fotorreceptoras, especialmente en el prostoma y el somito anal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [136, 137], cita: 'células sensitivas y células fotorreceptoras' }],
      },
    ],
    reproductor: [
      {
        texto: 'Macho: dos pares de diminutos testículos (somitos 10–11), cada uno con embudo espermático que comunica con un conducto espermático abierto en el poro masculino (segmento 15); dos pares de vesículas seminales. Hembra: un par de ovarios, dos embudos del oviducto con sacos ovígeros que comunican con oviductos abiertos en el segmento 14; dos pares de receptáculos seminales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [139, 146], cita: 'dos pares de diminutos testículos' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin estructuras esqueléticas; el celoma presurizado funciona como esqueleto hidrostático (los músculos longitudinales están reforzados por laminillas de colágeno).',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Annelida', titulo: 'Annelida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Capas de músculos circulares (externa) y longitudinales (interna); los músculos longitudinales están reforzados por laminillas de colágeno.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Annelida', titulo: 'Annelida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Clitelo',
      datos: [
        {
          texto: 'Abultamiento glandular entre los somitos 32 y 37 que segrega la sustancia que forma la cápsula (ooteca) que aloja a los huevos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 75], cita: 'se llama clitelo' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Son hermafroditas (monoicos) y la reproducción se verifica durante todo el año, principalmente con tiempo cálido y húmedo. El apareamiento ocurre de noche: dos gusanos juntan sus superficies ventrales con los extremos anteriores en sentidos opuestos; cada uno forma un tubo viscoso (originado por el clitelo) por donde se desplazan las células sexuales — fecundación cruzada y recíproca.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [148, 153], cita: 'fecundación cruzada y recíproca' }],
    },
    {
      texto: 'Cada gusano produce ootecas en forma de limón que contienen óvulos que se fecundan con el esperma al pasar frente a los receptáculos seminales del otro individuo; el huevo se desplaza por el tubo para salir al exterior. El desarrollo es directo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [154, 157], cita: 'ootecas, en forma de limón' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Son carroñeros: cuando salen de sus galerías a la noche se alimentan de hojas muertas, hierbas y materia orgánica obtenida del lodo o el suelo mientras excavan; sus heces constituyen el lombricompuesto, rico en materia orgánica, usado como abono.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [104, 108], cita: 'Los oligoquetos son carroñeros' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
