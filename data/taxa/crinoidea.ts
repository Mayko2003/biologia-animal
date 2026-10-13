import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'crinoidea',
  nombre: 'Crinoidea',
  nombreComun: 'Lirios de mar',
  nivel: 'clase',
  padre: 'echinodermata',
  orden: 5,
  resumen: [
    {
      texto: 'La clase más antigua y en algunos aspectos la más primitiva de los equinodermos; los lirios de mar tuvieron su máximo esplendor en el Paleozoico y hoy solo quedan unas 80 especies pedunculadas a 100 o más metros de profundidad, más unas 550 de plumas de mar (Orden Comatulida) de vida libre.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [523, 535], cita: 'la más primitiva Clase' }],
    },
    {
      texto: 'Son los únicos equinodermos actuales que viven con la superficie oral dirigida hacia arriba.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [537, 539], cita: 'superficie oral dirigida' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La corona, con o sin pedúnculo, está formada por brazos ramificados que salen de un cáliz central grueso cuya cara oral está recubierta por una membrana (tegmen) con la boca en el centro y el ano en un interambulacro; el número elevado de brazos proviene de la ramificación basal de una disposición originalmente pentámera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [541, 547], cita: 'un caliz central grueso' }],
    },
    {
      texto: 'Los brazos presentan gran cantidad de pequeñas ramas laterales (pínnulas); el pedúnculo, los cirros, los brazos y las pínnulas están ocupados por gruesos osículos esqueléticos también presentes en la pared aboral del cáliz.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [548, 554], cita: 'pequeñas rama laterales' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Cáliz central grueso con gruesos osículos esqueléticos en el pedúnculo, cirros, brazos, pínnulas y pared aboral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [552, 554], cita: 'gruesos osículos esqueléticos' }],
      },
    ],
    reproductor: [
      {
        texto: 'Son dioicos; los gametos se producen en los brazos, donde también se produce en algunos casos la incubación de los huevos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [576, 577], cita: 'producen en los brazos' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Pínnulas y cirros',
      datos: [
        {
          texto: 'Los brazos llevan muchas ramas laterales (pínnulas) recorridas por un surco ambulacral ciliado; las plumas de mar se sujetan al sustrato con los cirros y pueden reptar o nadar con los brazos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [548, 558], cita: 'sujetar al sustrato con' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'El desarrollo embrionario conduce a una larva vitelaria con aspecto de barril; la metamorfosis se produce tras el asentamiento y la fijación, y las plumas de mar pasan por un estado pedunculado (larva pentacrinoide) antes de que la corona se libere del sustrato.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [577, 581], cita: 'una larva vitelaria con' }],
    },
    {
      texto: 'Poseen también un marcado poder de regeneración.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [588, 588], cita: 'marcado poder de regeneración' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Son suspensívoros: los pies ambulacrales conducen el zooplancton y las partículas hacia los surcos ambulacrales, cuyos cilios transportan las partículas envueltas en moco hasta la boca; el animal dispone los brazos en forma de embudo o de abanico plano en una corriente de agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [560, 572], cita: 'los crinoideos son suspensívoros' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'plumas de mar (Comatulida)',
      descripcion: 'crinoideos nadadores de vida libre, abundantes en arrecifes de coral del Indopacífico',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [531, 533], cita: 'en el Orden Comatulida' }],
    },
  ],
  notas: [],
};

export default taxon;
