import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'theria',
  nombre: 'Theria',
  nombreComun: 'Marsupiales y placentarios',
  nivel: 'subclase',
  padre: 'mammalia',
  orden: 2,
  resumen: [
    {
      texto: 'Segunda de las dos subclases de mamíferos que reconoce el apunte; comprende las infraclases Metatheria y Eutheria.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 779], cita: 'Subclase Prototheria  (Gr. protos=primero' }, { tipo: 'apunte', archivo: A, lineas: [792, 792], cita: 'Infraclase Eutheria  (Placentarios), con los restantes órdenes de mamíferos' }],
    },
    {
      texto: 'Infraclase Metatheria (gr. meta = después, theria = animal silvestre): mamíferos primitivos dotados de una bolsa abdominal o marsupio donde crían a sus jóvenes (zarigüeyas, comadrejas, canguros, koalas, lobo de Tasmania).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [780, 791], cita: 'Infraclase  Metatheria  (Gr.  Meta=después' }],
    },
    {
      texto: 'Infraclase Eutheria (placentarios; gr. eu = auténtico): incluye los restantes órdenes de mamíferos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [792, 792], cita: 'Infraclase Eutheria  (Placentarios), con los restantes órdenes de mamíferos' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'En los Metatheria las crías se alimentan en el útero durante un corto tiempo y raramente existe placenta; luego se crían en el marsupio.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [789, 790], cita: 'Aunque las crías son alimentadas en el útero' }, { tipo: 'apunte', archivo: A, lineas: [781, 781], cita: 'bolsa abdominal  o  marsupio' }],
    },
  ],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'canguros',
      descripcion: 'Metatheria: marsupiales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [780, 791], cita: 'Infraclase  Metatheria  (Gr.  Meta=después' }],
    },
    {
      nombre: 'koalas',
      descripcion: 'Metatheria: marsupiales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [780, 791], cita: 'Infraclase  Metatheria  (Gr.  Meta=después' }],
    },
    {
      nombre: 'zarigüeyas',
      descripcion: 'Metatheria: marsupiales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [780, 791], cita: 'Infraclase  Metatheria  (Gr.  Meta=después' }],
    },
    {
      nombre: 'lobo de Tasmania',
      descripcion: 'Metatheria: marsupiales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [780, 791], cita: 'Infraclase  Metatheria  (Gr.  Meta=después' }],
    },
  ],
  notas: [],
};

export default taxon;
