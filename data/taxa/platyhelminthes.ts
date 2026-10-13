import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'platyhelminthes',
  nombre: 'Platyhelminthes',
  nombreComun: 'Gusanos planos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 1,
  resumen: [
    {
      texto: 'Vermes aplanados (gusanos planos), con o sin tubo digestivo. Carecen de sistema respiratorio y de sistema circulatorio.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 46], cita: 'Vermes aplanados (gusanos planos)' }],
    },
    {
      texto: 'Hermafroditas o con sexos separados (la minoría); reproducción sexual o asexual; desarrollo directo o a través de larvas nadadoras; muchas veces con ciclos de vida muy complejos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [49, 51], cita: 'ciclos de vida muy complejos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Aplanados dorsoventralmente; reptan sobre su superficie ventral y se mueven por acción ciliar y/o muscular.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 49], cita: 'Reptan sobre su superficie ventral' }],
    },
  ],
  embriologia: {
    cavidad: {
      valor: 'acelomado',
      nota: 'Grado Acoelomata: alrededor de las vísceras existe un tejido de relleno o parénquima de origen mesodérmico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 41], cita: 'parénquima de origen mesodérmico' }],
    },
    segmentacion: {
      valor: 'espiral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [17, 19], cita: 'espiral (Platyhelminthes, Annelida, Nemertea' }],
    },
  },
  sistemas: {
    digestivo: [
      {
        texto: 'Con o sin tubo digestivo (los cestodos carecen de él).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 45], cita: 'Con o sin tubo digestivo' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Carecen de sistema respiratorio.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 46], cita: 'Carecen además de sistema respiratorio' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Carecen de sistema circulatorio.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [45, 46], cita: 'y de sistema circulatorio' }],
      },
    ],
    excretor: [
      {
        texto: 'Conformado por células flamígeras y tubos colectores con poros que abren hacia el exterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [46, 47], cita: 'células flamígeras y tubos colectores' }],
      },
    ],
    nervioso: [
      {
        texto: 'Consta de una concentración ganglionar anterior y filetes nerviosos longitudinales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [47, 48], cita: 'concentración ganglionar anterior' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Parénquima',
      datos: [
        {
          texto: 'Carecen de cavidad perivisceral: alrededor de las vísceras existe un tejido circundante o relleno (parénquima) de origen mesodérmico.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [39, 41], cita: 'tejido circundante o relleno' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Reproducción sexual o asexual; desarrollo directo o a través de larvas nadadoras; muchas veces con ciclos de vida muy complejos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [50, 51], cita: 'Desarrollo directo o a través de' }],
    },
  ],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Pertenecen al Grado Acoelomata: carecen de cavidad perivisceral, sea celómica o no.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 41], cita: 'Carecen de cavidad perivisceral' }],
    },
  ],
};

export default taxon;
