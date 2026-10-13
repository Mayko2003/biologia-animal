import type { ArchivoApunte } from './apuntes';

export type Nivel =
  | 'reino' | 'subreino' | 'rama' | 'clado'
  | 'phylum' | 'subphylum' | 'superclase' | 'clase' | 'subclase';

export type FuenteApunte = { tipo: 'apunte'; archivo: ArchivoApunte; lineas: [number, number]; cita: string };
export type FuenteWeb = { tipo: 'web'; url: string; titulo: string; sitio: string; consultado: string };
export type Fuente = FuenteApunte | FuenteWeb;

export type Dato = { texto: string; fuentes: Fuente[]; ausente?: boolean };
export type Ejemplo = { nombre: string; descripcion?: string; fuentes: Fuente[] };
export type Nota = { tipo: 'discrepancia' | 'aclaracion'; texto: string; fuentes: Fuente[] };
export type EstructuraEspecial = { titulo: string; datos: Dato[] };

export const SISTEMAS = [
  'tegumento', 'esqueleto', 'muscular', 'digestivo', 'respiratorio',
  'circulatorio', 'excretor', 'nervioso', 'sentidos', 'reproductor',
] as const;
export type SistemaId = (typeof SISTEMAS)[number];

export const VALORES_CRITERIO = {
  capas: ['sin-tejidos', 'diblastico', 'triblastico'],
  simetria: ['asimetrico', 'radial', 'birradial', 'bilateral', 'pentarradial'],
  cavidad: ['no-aplica', 'acelomado', 'pseudocelomado', 'esquizocelomado', 'enterocelomado'],
  blastoporo: ['no-aplica', 'boca', 'ano'],
  segmentacion: ['no-aplica', 'espiral', 'radial', 'en-T', 'otra'],
} as const;
export type CriterioId = keyof typeof VALORES_CRITERIO;
export const CRITERIOS = Object.keys(VALORES_CRITERIO) as CriterioId[];
export type ValorCriterio<C extends CriterioId = CriterioId> = (typeof VALORES_CRITERIO)[C][number];
export type RegistroEmbrionario<C extends CriterioId = CriterioId> = {
  valor: ValorCriterio<C>;
  fuentes: Fuente[];
  nota?: string;
};
export type Embriologia = { [C in CriterioId]?: RegistroEmbrionario<C> };
export type EmbriologiaEfectiva = { [C in CriterioId]?: RegistroEmbrionario<C> & { heredadoDe?: string } };

export type Taxon = {
  slug: string;
  nombre: string;
  nombreComun?: string;
  sinonimos?: string[];
  nivel: Nivel;
  padre: string | null;
  orden: number;
  externo?: boolean;
  resumen: Dato[];
  morfologiaExterna: Dato[];
  embriologia: Embriologia;
  sistemas: Partial<Record<SistemaId, Dato[]>>;
  estructurasEspeciales: EstructuraEspecial[];
  reproduccion: Dato[];
  bioecologia: Dato[];
  ejemplos: Ejemplo[];
  notas: Nota[];
};

export type NodoArbol = {
  slug: string;
  nombre: string;
  nombreComun?: string;
  nivel: Nivel;
  resumenCorto?: string;
  hijos: NodoArbol[];
};

export type NodoMapa = {
  id: string;
  titulo: string;
  subtitulo?: string;
  criterio?: string;
  taxon?: string;
  descripcion?: Dato;
  hijos: NodoMapa[];
};
