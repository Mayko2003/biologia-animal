import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'prototheria',
  nombre: 'Prototheria',
  nombreComun: 'Mamíferos ovíparos (monotremas)',
  nivel: 'subclase',
  padre: 'mammalia',
  orden: 1,
  resumen: [
    {
      texto: 'Primera de las dos subclases de mamíferos que reconoce el apunte (gr. protos = primero, theria = animal silvestre): mamíferos ovíparos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 779], cita: 'Subclase Prototheria  (Gr. protos=primero' }, { tipo: 'apunte', archivo: A, lineas: [774, 775], cita: 'Subclase Prototheria  (Gr. protos=primero' }],
    },
    {
      texto: 'Incluye la infraclase Monotremata (gr. monos = uno, trema = abertura): ornitorrincos y equidna.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 777], cita: 'Subclase Prototheria  (Gr. protos=primero' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Son mamíferos ovíparos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 775], cita: 'theria=animal silvestre). Mamíferos ovíparos.' }],
    },
  ],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'ornitorrincos',
      descripcion: 'Monotremata: mamíferos ovíparos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 777], cita: 'Subclase Prototheria  (Gr. protos=primero' }],
    },
    {
      nombre: 'equidna',
      descripcion: 'Monotremata: mamíferos ovíparos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 777], cita: 'Subclase Prototheria  (Gr. protos=primero' }],
    },
  ],
  notas: [],
};

export default taxon;
