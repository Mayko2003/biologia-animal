import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'sauria',
  nombre: 'Sauria',
  nombreComun: 'Saurios (lagartos)',
  sinonimos: ['Lacertilia'],
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 3,
  resumen: [
    {
      texto: 'Suborden del orden Escamoso (superorden Lepidosaurios), según el apunte: los lagartos, alargados y con patas más o menos largas, aunque algunos carecen de ellas (víboras de cristal).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [473, 478], cita: 'ORDEN ESCAMOSO (Lagartos, serpientes y culebrilla ciegas)' }],
    },
    {
      texto: 'Pueden perder la cola y regenerarla.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [478, 478], cita: 'Pueden perder la cola y regenerarla' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'A cada lado de la cabeza hay un tímpano externo; la lengua puede ser ligeramente móvil y extensible y las mandíbulas presentan dientes cortos e iguales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [482, 484], cita: 'un tímpano externo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La piel suele ser flexible y posee numerosas escamas dispuestas en hileras longitudinales, transversas o diagonales; en la mayor parte de los lagartos las escamas del dorso y de los lados están imbricadas, y pueden ser lisas, provistas de fosas o poseer una quilla longitudinal; la superficie ventral comúnmente lleva escamas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [478, 482], cita: 'las escamas del dorso y de los lados' }],
      },
    ],
    excretor: [
      {
        texto: 'La orina es semisólida como en las aves.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [484, 484], cita: 'La orina es semisólida' }],
      },
    ],
    reproductor: [
      {
        texto: 'El macho posee dos hemipenes.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [484, 484], cita: 'El macho posee dos hemipenes' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
