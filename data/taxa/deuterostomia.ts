import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'deuterostomia',
  nombre: 'Deuterostomia',
  nombreComun: 'Deuterostomados',
  nivel: 'clado',
  padre: 'bilateria',
  orden: 2,
  resumen: [
    {
      texto: 'Linaje de animales de simetría bilateral en el que la boca es de neoformación (no deriva del blastoporo).',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [13, 14], cita: 'en los deuterostomados es de neoformación' }],
    },
    {
      texto: 'Chordata constituye el mayor phylum de deuteróstomos, y el mayor de sus grupos es el de los Vertebrados.',
      fuentes: [{ tipo: 'apunte', archivo: 'chordata.md', lineas: [14, 16], cita: 'Constituyen el mayor Phylum de deuteróstomos' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    blastoporo: {
      valor: 'ano',
      nota: 'El apunte indica que en los deuterostomados la boca es de neoformación (no deriva del blastoporo).',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [13, 14], cita: 'en los deuterostomados es de neoformación' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
