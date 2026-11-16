import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'ornituria',
  nombre: 'Ornituria',
  nombreComun: 'Aves modernas',
  nivel: 'subclase',
  padre: 'aves',
  orden: 2,
  resumen: [
    {
      texto: 'Segunda de las dos subclases de aves que reconoce el apunte; comprende la infraclase Neornithes (gr. neos = nuevo, ornis = ave), donde se ubican las aves modernas en dos superórdenes: Paleognatha y Neognatha.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [371, 373], cita: 'reconoce dos subclases' }, { tipo: 'apunte', archivo: A, lineas: [386, 387], cita: 'tenemos la infraclase: Neornithes' }],
    },
    {
      texto: 'Superorden Paleognatha: aves corredoras, con alas reducidas, generalmente incapaces de volar o de vuelos pesados y ruidosos (tinamúes, perdices, avestruces, ñandúes, emúes y casuarios).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [388, 390], cita: 'Paleognatha, aves corredoras, con alas reducidas' }],
    },
    {
      texto: 'Superorden Neognatha: aves modernas y voladoras, con alas bien desarrolladas; incluye los restantes órdenes de aves (cucos, halcones, faisanes, palomas, loros, pingüinos, patos, flamencos, garzas, gaviotas, búhos, colibríes, carpinteros, tucanes, aves canoras, etc.).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [390, 391], cita: 'Neognatha, aves modernas, con esternón en quilla' }, { tipo: 'apunte', archivo: A, lineas: [393, 397], cita: 'restantes órdenes de aves: cucos, halcones, faisanes, palomas' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'En las Paleognatha las vértebras de la cola son libres.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [389, 389], cita: 'vértebras de la cola libres' }],
      },
      {
        texto: 'Las Neognatha tienen esternón en quilla y pigostilo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [391, 391], cita: 'con esternón en quilla, alas bien desarrolladas, con pigostilo' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'ñandúes',
      descripcion: 'Paleognatha: aves corredoras de alas reducidas',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [388, 390], cita: 'Paleognatha, aves corredoras, con alas reducidas' }],
    },
    {
      nombre: 'avestruces',
      descripcion: 'Paleognatha: aves corredoras de alas reducidas',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [388, 390], cita: 'Paleognatha, aves corredoras, con alas reducidas' }],
    },
    {
      nombre: 'tinamúes',
      descripcion: 'Paleognatha',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [388, 390], cita: 'Paleognatha, aves corredoras, con alas reducidas' }],
    },
    {
      nombre: 'pingüinos',
      descripcion: 'Neognatha',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [393, 397], cita: 'restantes órdenes de aves: cucos, halcones, faisanes, palomas' }],
    },
    {
      nombre: 'loros',
      descripcion: 'Neognatha',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [390, 391], cita: 'Neognatha, aves modernas, con esternón en quilla' }],
    },
    {
      nombre: 'carpinteros',
      descripcion: 'Neognatha',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [393, 397], cita: 'restantes órdenes de aves: cucos, halcones, faisanes, palomas' }],
    },
  ],
  notas: [],
};

export default taxon;
