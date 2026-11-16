import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'amphisbaenia',
  nombre: 'Amphisbaenia',
  nombreComun: 'Anfisbenios (culebrillas ciegas)',
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 4,
  resumen: [
    {
      texto: 'Suborden del orden Escamoso, según el apunte: las culebrillas ciegas, de cuerpo alargado y cilíndrico con diámetro uniforme.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [486, 488], cita: 'SUBORDEN ANFISBENIOS (Culebrillas ciegas)' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La suave piel está dividida en anillos; no hay ojos ni oídos visibles, ya que se encuentran escondidos bajo la piel.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [490, 491], cita: 'suave piel esta dividida en anillos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    muscular: [
      {
        texto: 'Andan sobre ambos extremos (adelante y atrás), de donde proviene el nombre del suborden ("ambos extremos").',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [499, 500], cita: 'extremos (adelante y atrás)' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Hipógeos: viven debajo de la tierra y utilizan su cabeza como elemento cavador; son muy similares a las lombrices de tierra, salvando diferencias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [488, 490], cita: 'utilizan su cabeza como elemento cavador' }],
    },
    {
      texto: 'Amplia distribución en Sudamérica y África.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [499, 500], cita: 'distribución en Sudamérica y Africa' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
