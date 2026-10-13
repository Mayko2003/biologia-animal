import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'gnathostomata',
  nombre: 'Gnathostomata',
  nombreComun: 'Gnatóstomos (vertebrados con mandíbulas)',
  nivel: 'superclase',
  padre: 'vertebrata',
  orden: 2,
  resumen: [
    {
      texto: 'Superclase de los vertebrados con mandíbulas; en el apunte se ubica dentro de Phylum Chordata › Subphylum Vertebrata y agrupa a los peces: Chondrichthyes (peces cartilaginosos) y Osteichthyes (peces óseos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [9, 16], cita: 'Superclase GNATOSTOMATHA PECES' }],
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
