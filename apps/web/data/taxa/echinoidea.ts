import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'echinoidea',
  nombre: 'Echinoidea',
  nombreComun: 'Erizos de mar y dólares de arena',
  nivel: 'clase',
  padre: 'echinodermata',
  orden: 4,
  resumen: [
    {
      texto: 'Equinodermos móviles llamados erizos de mar, erizos acorazonados, bizcochos de mar y dólares de arena; unas 950 especies descritas. El nombre alude a su parecido con el puercoespín por las espinas móviles (púas) que recubren el cuerpo; no tienen brazos sino una forma esférica u ovalada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [406, 413], cita: 'parecidos a un puercoespín' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Aunque algunos erizos poseen simetría radial, muchos miembros de la clase que viven en fondos blandos exhiben diferentes grados de simetría bilateral secundaria; en los irregulares el ano se desplazó desde el centro aboral hacia el margen o la lúnula posterior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [415, 502], cita: 'simetría bilateral secundaria' }],
    },
    {
      texto: 'En los erizos regulares los órganos internos están dentro de una concha de 10 series dobles de placas suturadas: 5 áreas o ambulacros (equivalentes a los brazos de las estrellas) perforadas por pies ambulacrales y 5 áreas interambulacrales más anchas sin pies; el ano está en el centro aboral rodeado de láminas con aberturas genitales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [428, 442], cita: 'áreas o ambulacros' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Peculiaridad de la clase: aplastamiento y fusión de los osículos esqueléticos que forman un esqueleto compacto, la testa o caparazón; sobre las placas hay tubérculos donde se articulan las espinas (de CaCO3, con base en copa y fibras musculares que las mueven).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [425, 435], cita: 'Testa o caparazón' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo largo en asas: esófago largo, estómago ancho en saco, intestino y recto al ano; existe un sifón alargado con cilios potentes desde el esófago al intestino, que probablemente lleva agua y contribuye a eliminar residuos indigeribles.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [448, 453], cita: 'un sifón alargado' }],
      },
    ],
    respiratorio: [
      {
        texto: 'De la membrana peristomática que rodea la boca salen 10 branquias que funcionan como órganos de intercambio gaseoso; en los irregulares el intercambio ocurre en los pies ambulacrales aborales (ambulacros petaloideos).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [455, 519], cita: 'órganos para el intercambio' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un anillo nervioso rodea la boca y los 5 nervios radiales acompañan a los conductos radiales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [463, 465], cita: 'nervios radiales acompañan' }],
      },
    ],
    reproductor: [
      {
        texto: 'Las gónadas (5, 4 o 2) están unidas por mesenterios a la superficie interna aboral y cada una tiene un fino conducto a la abertura genital; óvulos y espermatozoos se descargan al mar.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [467, 469], cita: 'a la abertura genital' }],
      },
    ],
    tegumento: [
      {
        texto: 'Esqueleto externo cubierto solo por la epidermis, constituido por numerosas placas calcáreas unidas rígidamente en un caparazón (testa), con púas móviles articuladas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Echinoidea', titulo: 'Echinoidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'La linterna de Aristóteles, estructura esquelética y muscular protráctil cerca de la boca, sostiene los cinco dientes; las púas y los pies ambulacrales también son móviles.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Echinoidea', titulo: 'Echinoidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de órganos excretores diferenciados.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [56, 56], cita: 'órganos excretores diferenciados' }],
      },
    ],
    sentidos: [
      {
        texto: 'Entre las espinas se ubican los pedicelarios sobre largos pedúnculos flexibles; la superficie lleva además espinas y pies ambulacrales sensitivos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [436, 437], cita: 'pedicelarios sobre largos pedúnculos' }],
      },
      {
        texto: 'Anillo nervioso alrededor de la boca con cinco nervios radiales (plan equinodermo); sin ojos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Asteroidea', titulo: 'Asteroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema hemal reducido del plan equinodermo; el fluido de la cavidad corporal distribuye el oxígeno y los nutrientes.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Asteroidea', titulo: 'Asteroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Linterna de Aristóteles',
      datos: [
        {
          texto: 'La boca grande, en la superficie oral, está rodeada por 5 dientes potentes y agudos sostenidos por una armazón compleja de cinco lados llamada linterna de Aristóteles; funciona como aparato raspador al alimentarse.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [444, 484], cita: 'linterna de Aristóteles' }],
        },
      ],
    },
    {
      titulo: 'Pedicelarios pedunculados',
      datos: [
        {
          texto: 'Entre las espinas se ubican pedicelarios sobre largos pedúnculos flexibles que mantienen el cuerpo limpio y capturan pequeñas presas; hay diversos tipos, algunos con glándulas venenosas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [436, 438], cita: 'incluso con glándulas venenosas' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Los pequeños huevos dan lugar a una larva pluteus que se metamorfosea pasadas unas 5-6 semanas; algunos equinoideos incuban sus huevos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [469, 471], cita: 'una larva pluteus que' }],
    },
    {
      texto: 'Pueden regenerar parte de la concha, espinas, pies ambulacrales y pedicelarios cuando se los daña.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [473, 475], cita: 'pueden regenerar parte' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los erizos regulares viven sobre sustratos duros y la mayoría se alimentan raspando algas, organismos incrustantes y detritos con la linterna de Aristóteles; se mueven con los pies ambulacrales y empujándose con las púas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [477, 484], cita: 'como aparato raspador la' }],
    },
    {
      texto: 'Los erizos irregulares (dólares de arena, bizcochos, erizos acorazonados) están adaptados a excavar sustratos blandos, con espinas pequeñas para locomoción y excavación; son consumidores de partículas sedimentadas que capturan con los pies ambulacrales orales (filodos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [486, 513], cita: 'excavar en sustratos blandos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'erizo de mar regular',
      descripcion: 'cuerpo globoso con largas púas, adaptado a sustratos duros',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [477, 478], cita: 'largas púas es primitivo' }],
    },
    {
      nombre: 'dólar de arena',
      descripcion: 'equinoideo irregular excavador de cuerpo aplanado',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [486, 490], cita: 'dólares de arena están' }],
    },
  ],
  notas: [],
};

export default taxon;
