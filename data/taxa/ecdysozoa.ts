import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'ecdysozoa',
  nombre: 'Ecdysozoa',
  nombreComun: 'Ecdisozoos',
  nivel: 'clado',
  padre: 'protostomia',
  orden: 2,
  resumen: [
    {
      texto: 'Los ecdisozoos pueden ser celomados o pseudocelomados; entre ellos se encuentran los artrópodos y los nematodos.',
      fuentes: [{ tipo: 'apunte', archivo: 'nematodos.md', lineas: [11, 12], cita: 'pueden ser celomados o pseudocelomados' }],
    },
    {
      texto: 'Se diferencian de los lofotrocozoos por presentar ecdisis o muda, fenómeno por el cual cambian o renuevan su exoesqueleto o cutícula para poder crecer.',
      fuentes: [{ tipo: 'apunte', archivo: 'nematodos.md', lineas: [12, 14], cita: 'el fenómeno de ecdisis o muda' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
