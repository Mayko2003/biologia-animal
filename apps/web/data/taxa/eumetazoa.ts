import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'eumetazoa',
  nombre: 'Eumetazoa',
  nombreComun: 'Eumetazoos',
  nivel: 'subreino',
  padre: 'animalia',
  orden: 2,
  resumen: [
    {
      texto: 'Animales con verdaderos tejidos para cumplir variadas funciones.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [291, 293], cita: 'Con verdaderos tejidos para cumplir variadas funciones' }],
    },
    {
      texto: 'Formas diploblásticas: el mesodermo no se diferencia y los esbozos orgánicos provienen del ectodermo o del endodermo.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [294, 295], cita: 'el mesodermo no se diferencia' }],
    },
    {
      texto: 'Formas tripoblásticas: el mesodermo evoluciona en un estrato celular intermedio o genera tejidos y órganos con distintas funciones.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [297, 298], cita: 'mesodermo evoluciona en un estrato intermedio celular' }],
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
