import type { CriterioId, Nivel, SistemaId, ValorCriterio } from './types';

export const NIVEL_ORDEN: Record<Nivel, number> = {
  reino: 0,
  subreino: 1,
  rama: 2,
  clado: 3,
  phylum: 4,
  subphylum: 5,
  superclase: 6,
  clase: 7,
  subclase: 8,
};

export const NIVEL_LABEL: Record<Nivel, string> = {
  reino: 'Reino',
  subreino: 'Subreino',
  rama: 'Rama',
  clado: 'Clado',
  phylum: 'Phylum',
  subphylum: 'Subphylum',
  superclase: 'Superclase',
  clase: 'Clase',
  subclase: 'Subclase',
};

export const NIVEL_CLASES: Record<Nivel, string> = {
  reino: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200',
  subreino: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200',
  rama: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200',
  clado: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200',
  phylum: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  subphylum: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200',
  superclase: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200',
  clase: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200',
  subclase: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
};

export const NIVEL_COLOR_HEX: Record<Nivel, string> = {
  reino: '#71717a',
  subreino: '#71717a',
  rama: '#71717a',
  clado: '#71717a',
  phylum: '#059669',
  subphylum: '#0d9488',
  superclase: '#0891b2',
  clase: '#0284c7',
  subclase: '#4f46e5',
};

export const SISTEMA_LABEL: Record<SistemaId, string> = {
  tegumento: 'Tegumento y pared del cuerpo',
  esqueleto: 'Esqueleto y sostén',
  muscular: 'Muscular',
  digestivo: 'Digestivo',
  respiratorio: 'Respiratorio',
  circulatorio: 'Circulatorio',
  excretor: 'Excretor',
  nervioso: 'Nervioso',
  sentidos: 'Órganos de los sentidos',
  reproductor: 'Reproductor',
};

export const CRITERIO_LABEL: Record<CriterioId, string> = {
  capas: 'Capas germinativas',
  simetria: 'Simetría',
  cavidad: 'Cavidad corporal',
  blastoporo: 'Destino del blastoporo',
  segmentacion: 'Segmentación del huevo',
};

export const VALOR_LABEL: Record<ValorCriterio, string> = {
  'sin-tejidos': 'Sin tejidos verdaderos',
  diblastico: 'Diblástico',
  triblastico: 'Triblástico',
  asimetrico: 'Asimétrico',
  radial: 'Radial',
  birradial: 'Birradial',
  bilateral: 'Bilateral',
  pentarradial: 'Pentarradial (adulto)',
  'no-aplica': 'No aplica',
  acelomado: 'Acelomado',
  pseudocelomado: 'Pseudocelomado',
  esquizocelomado: 'Celomado (esquizocelia)',
  enterocelomado: 'Celomado (enterocelia)',
  boca: 'Origina la boca (protostomía)',
  ano: 'Origina el ano (deuterostomía)',
  espiral: 'Espiral',
  'en-T': 'En T',
  otra: 'Otra',
};

export const SECCION_LABEL = {
  resumen: 'Resumen',
  embriologia: 'Desarrollo embrionario',
  morfologiaExterna: 'Morfología externa',
  sistemas: 'Sistemas',
  estructurasEspeciales: 'Estructuras especiales',
  reproduccion: 'Reproducción y desarrollo',
  bioecologia: 'Bioecología',
  ejemplos: 'Ejemplos',
  notas: 'Notas',
} as const;
