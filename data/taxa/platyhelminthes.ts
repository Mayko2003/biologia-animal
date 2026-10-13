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
    tegumento: [
      {
        texto: 'El tegumento es delgado y a través de él pasa el oxígeno que necesitan para su metabolismo; carecen de aparato respiratorio.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto; el cuerpo es de tipo macizo, con el parénquima llenando el espacio entre los órganos.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Capas de músculos longitudinales, circulares y oblicuas bajo la pared del cuerpo controlan el movimiento.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Platyhelminthes/', titulo: 'Platyhelminthes - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'En las formas de vida libre hay células pigmentarias y fotorreceptores concentrados en ocelos; no forman imágenes.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Turbellaria/', titulo: 'Turbellaria - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'La mayoría son hermafroditas, con fecundación siempre interna y órganos copuladores.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
  bioecologia: [
      {
        texto: 'Unas 20 000 especies; de vida libre en medios acuáticos y húmedos, o parásitos de vertebrados y otros animales.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Pertenecen al Grado Acoelomata: carecen de cavidad perivisceral, sea celómica o no.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 41], cita: 'Carecen de cavidad perivisceral' }],
    },
    {
      tipo: 'discrepancia',
      texto: 'El propio apunte menciona que muchos científicos separan a los platelmintos (con gastrotricos y rotíferos) en Platyzoa; los análisis moleculares los agrupaban en ese taxón, interpretación hoy atribuida a la atracción de ramas largas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [29, 34], cita: 'muchos científicos separan a los platelmintos' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Platyhelminthes', titulo: 'Platyhelminthes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
