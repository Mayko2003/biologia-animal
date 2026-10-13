import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'merostomata',
  nombre: 'Merostomata',
  nombreComun: 'Merostomados (cangrejos cacerola)',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 1,
  resumen: [
    {
      texto: 'Clase de quelicerados que incluye a los cangrejos cacerola, marinos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [153, 155], cita: 'Merostomata (cangrejos cacerola' }],
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
