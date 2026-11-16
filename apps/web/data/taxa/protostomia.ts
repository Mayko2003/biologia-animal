import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'protostomia',
  nombre: 'Protostomia',
  nombreComun: 'Protostomados',
  nivel: 'clado',
  padre: 'bilateria',
  orden: 1,
  resumen: [
    {
      texto: 'Protostomia (del griego prōto "primero" y stoma "boca") agrupa phyla que junto con los deuterostomados forman los dos grandes linajes de los animales de simetría bilateral.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [10, 12], cita: 'son una agrupación de phyla del reino animal' }],
    },
    {
      texto: 'En los protostomados la boca del adulto deriva del blastoporo embrionario, de donde proviene el nombre del grupo.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [12, 14], cita: 'la boca del adulto deriva del blastoporo embrionario' }],
    },
    {
      texto: 'Tienen desarrollo embrionario determinado en mosaico; la segmentación del huevo puede ser en T (Nematoda, Rotifera), radial (Ectoprocta) o en espiral (Platyhelminthes, Annelida, Nemertea, Mollusca).',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [17, 19], cita: 'desarrollo embrionario determinado en mosaico' }],
    },
    {
      texto: 'En el estadio embrionario de 4 células, una de ellas (célula D) se diferencia y da origen al endomesodermo y a las células germinales.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [19, 21], cita: 'célula D) se diferencia del resto' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    blastoporo: {
      valor: 'boca',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [12, 13], cita: 'la boca del adulto deriva del blastoporo' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El destino del blastoporo y el origen del ano es más complejo y variable entre los grupos de protostomados de lo que indica la definición clásica.',
      fuentes: [{ tipo: 'apunte', archivo: 'platelmintos.md', lineas: [14, 15], cita: 'mucho más complejo y variable entre los grupos' }],
    },
  ],
};

export default taxon;
