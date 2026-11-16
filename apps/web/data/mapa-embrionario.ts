import type { NodoMapa } from '@/lib/types';

const P = 'porifera y cnidarios.md' as const;
const PL = 'platelmintos.md' as const;
const N = 'nematodos.md' as const;

function hoja(id: string, titulo: string, subtitulo: string, criterio?: string): NodoMapa {
  return { id, titulo, subtitulo, criterio, taxon: id, hijos: [] };
}

export const MAPA_EMBRIONARIO: NodoMapa = {
  id: 'metazoa',
  titulo: 'Metazoa',
  subtitulo: 'Reino Animalia',
  taxon: 'animalia',
  descripcion: {
    texto: 'Organismos pluricelulares, móviles y heterótrofos que pasan por un estado de blástula durante su desarrollo embrionario.',
    fuentes: [{ tipo: 'apunte', archivo: P, lineas: [9, 10], cita: 'Organismos pluricelulares, móviles y heterótrofos' }],
  },
  hijos: [
    {
      id: 'parazoa',
      titulo: 'Parazoa',
      criterio: 'Sin tejidos verdaderos (organización celular)',
      taxon: 'parazoa',
      descripcion: {
        texto: 'Los únicos animales con organización a nivel celular integrado: no forman tejidos verdaderos ni órganos específicos.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [16, 18], cita: 'organización a nivel celular integrado' }],
      },
      hijos: [hoja('porifera', 'Porifera', 'Esponjas')],
    },
    {
      id: 'eumetazoa',
      titulo: 'Eumetazoa',
      criterio: 'Con tejidos verdaderos',
      taxon: 'eumetazoa',
      descripcion: {
        texto: 'Animales con verdaderos tejidos para cumplir variadas funciones.',
        fuentes: [{ tipo: 'apunte', archivo: P, lineas: [291, 293], cita: 'Con verdaderos tejidos para cumplir variadas funciones' }],
      },
      hijos: [
        {
          id: 'radiata',
          titulo: 'Radiata',
          criterio: 'Simetría radial, eje oral-aboral',
          taxon: 'radiata',
          descripcion: {
            texto: 'Animales con simetría radial octómera, hexámera, tetrámera o dímera (birradial) y eje principal oral-aboral.',
            fuentes: [{ tipo: 'apunte', archivo: P, lineas: [300, 301], cita: 'simetría radial octómera, hexámera, tetrámera o dimera' }],
          },
          hijos: [
            hoja('cnidaria', 'Cnidaria', 'Cnidarios', 'Diblásticos (según la mayoría de los autores)'),
            hoja('ctenophora', 'Ctenophora', 'Ctenóforos', 'Tripoblásticos según el apunte'),
          ],
        },
        {
          id: 'bilateria',
          titulo: 'Bilateria',
          criterio: 'Simetría bilateral, triblásticos',
          taxon: 'bilateria',
          descripcion: {
            texto: 'Animales de simetría bilateral que se dividen en dos grandes linajes: los protostomados y los deuterostomados.',
            fuentes: [{ tipo: 'apunte', archivo: PL, lineas: [10, 12], cita: 'los dos grandes linajes en que se dividen los animales de simetría bilateral' }],
          },
          hijos: [
            {
              id: 'protostomia',
              titulo: 'Protostomados',
              criterio: 'La boca deriva del blastoporo',
              taxon: 'protostomia',
              descripcion: {
                texto: 'En los protostomados la boca del adulto deriva del blastoporo embrionario.',
                fuentes: [{ tipo: 'apunte', archivo: PL, lineas: [12, 13], cita: 'la boca del adulto deriva del blastoporo' }],
              },
              hijos: [
                {
                  id: 'lophotrochozoa',
                  titulo: 'Lofotrocozoos',
                  criterio: 'Segmentación espiral; larva trocófora o lofóforo',
                  taxon: 'lophotrochozoa',
                  descripcion: {
                    texto: 'Protostomados con desarrollo en espiral: incluye a Trochozoa (larvas trocóforas) y Lophophorata (con lofóforos), ampliado luego a platelmintos, gastrotricos y mesozoos.',
                    fuentes: [{ tipo: 'apunte', archivo: PL, lineas: [23, 26], cita: 'protostomados con desarrollo en espiral' }],
                  },
                  hijos: [
                    hoja('platyhelminthes', 'Platyhelminthes', 'Gusanos planos'),
                    hoja('gastrotricha', 'Gastrotricha', 'Gastrotricos'),
                    hoja('rotifera', 'Rotifera', 'Rotíferos'),
                    hoja('annelida', 'Annelida', 'Anélidos'),
                    hoja('mollusca', 'Mollusca', 'Moluscos'),
                    hoja('bryozoa', 'Bryozoa', 'Briozoos'),
                    hoja('brachiopoda', 'Brachiopoda', 'Braquiópodos'),
                    hoja('chaetognatha', 'Chaetognatha', 'Quetognatos (gusanos flecha)', 'Ubicación según el TP7, ver notas'),
                  ],
                },
                {
                  id: 'ecdysozoa',
                  titulo: 'Ecdisozoos',
                  criterio: 'Muda (ecdisis) de la cutícula',
                  taxon: 'ecdysozoa',
                  descripcion: {
                    texto: 'Protostomados celomados o pseudocelomados que renuevan su exoesqueleto o cutícula mediante ecdisis para crecer.',
                    fuentes: [{ tipo: 'apunte', archivo: N, lineas: [12, 14], cita: 'el fenómeno de ecdisis o muda' }],
                  },
                  hijos: [
                    hoja('nemata', 'Nemata', 'Nematodos'),
                    hoja('nematomorpha', 'Nematomorpha', 'Nematomorfos'),
                    hoja('arthropoda', 'Arthropoda', 'Artrópodos'),
                  ],
                },
              ],
            },
            {
              id: 'deuterostomia',
              titulo: 'Deuterostomados',
              criterio: 'La boca es de neoformación',
              taxon: 'deuterostomia',
              descripcion: {
                texto: 'Linaje de bilaterales en el que la boca es de neoformación (no deriva del blastoporo).',
                fuentes: [{ tipo: 'apunte', archivo: PL, lineas: [13, 14], cita: 'en los deuterostomados es de neoformación' }],
              },
              hijos: [
                hoja('echinodermata', 'Echinodermata', 'Equinodermos'),
                hoja('hemichordata', 'Hemichordata', 'Hemicordados'),
                hoja('chordata', 'Chordata', 'Cordados'),
              ],
            },
          ],
        },
      ],
    },
  ],
};
