import type { Taxon } from '@/lib/types';

export function taxonFalso(p: Pick<Taxon, 'slug' | 'nivel' | 'padre'> & Partial<Taxon>): Taxon {
  return {
    nombre: p.slug,
    orden: 1,
    resumen: [],
    morfologiaExterna: [],
    embriologia: {},
    sistemas: {},
    estructurasEspeciales: [],
    reproduccion: [],
    bioecologia: [],
    ejemplos: [],
    notas: [],
    ...p,
  };
}
