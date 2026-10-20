import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'sauriuria',
  nombre: 'Sauriuria',
  nombreComun: 'Aves primitivas (Archaeopteryx)',
  nivel: 'subclase',
  padre: 'aves',
  orden: 1,
  resumen: [
    {
      texto: 'Primera de las dos subclases de aves que reconoce el apunte; en ella se ubica Archaeopteryx (infraclase Archaeornithes).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [371, 373], cita: 'reconoce dos subclases' }, { tipo: 'apunte', archivo: A, lineas: [375, 375], cita: 'En la primera de ellas se ubica Archaeopteryx' }],
    },
    {
      texto: 'Archaeopteryx es la primera ave fósil registrada, cuyos orígenes se remontan a hace unos 150 millones de años.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [376, 376], cita: 'primera ave fósil registrada' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Archaeopteryx poseía dientes en sus mandíbulas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [377, 377], cita: 'poseía dientes en sus mandíbulas' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'Archaeopteryx',
      descripcion: 'primera ave fósil registrada (hace unos 150 millones de años), con dientes en las mandíbulas',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [375, 377], cita: 'se ubica Archaeopteryx' }],
    },
  ],
  notas: [],
};

export default taxon;
