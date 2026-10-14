import { SISTEMA_LABEL } from './etiquetas';
import type { Consultas } from './consultas';
import { SISTEMAS, type Dato, type Fuente, type Taxon } from './types';

export type Celda =
  | { estado: 'datos'; datos: Dato[] }
  | { estado: 'ausente'; datos: Dato[] }
  | { estado: 'texto'; texto: string; detalle?: string; fuentes: Fuente[] }
  | { estado: 'vacio' };

export type GrupoFila = 'Anatomía' | 'Sistemas';

export type FilaComparacion = {
  id: string;
  grupo: GrupoFila;
  etiqueta: string;
  a: Celda;
  b: Celda;
  distinto: boolean;
};

export type Comparacion = {
  a: Taxon;
  b: Taxon;
  ancestroComun: Taxon;
  rutaA: Taxon[];
  rutaB: Taxon[];
  filas: FilaComparacion[];
};

function celdaDatos(datos: Dato[]): Celda {
  if (datos.length === 0) return { estado: 'vacio' };
  if (datos.every((d) => d.ausente)) return { estado: 'ausente', datos };
  return { estado: 'datos', datos };
}

export function comparar(slugA: string, slugB: string, consultas: Consultas): Comparacion {
  const a = consultas.requireTaxon(slugA);
  const b = consultas.requireTaxon(slugB);
  const comun = consultas.ancestroComun(slugA, slugB);
  const rutaCompletaA = consultas.getRuta(slugA);
  const rutaCompletaB = consultas.getRuta(slugB);
  const iComun = rutaCompletaA.findIndex((t) => t.slug === comun.slug);
  const rutaA = rutaCompletaA.slice(iComun + 1);
  const rutaB = rutaCompletaB.slice(iComun + 1);

  const filas: FilaComparacion[] = [];
  const fila = (id: string, grupo: GrupoFila, etiqueta: string, ca: Celda, cb: Celda, distinto: boolean) =>
    filas.push({ id, grupo, etiqueta, a: ca, b: cb, distinto });

  const morfA = celdaDatos(a.morfologiaExterna);
  const morfB = celdaDatos(b.morfologiaExterna);
  fila('morfologia', 'Anatomía', 'Morfología externa', morfA, morfB, morfA.estado !== morfB.estado);

  const titulosEspeciales = (t: Taxon) =>
    t.estructurasEspeciales.map((e) => e.titulo).sort().join('|');
  const celdaEspeciales = (t: Taxon): Celda => {
    if (t.estructurasEspeciales.length === 0) return { estado: 'vacio' };
    return {
      estado: 'texto',
      texto: t.estructurasEspeciales.map((e) => e.titulo).join(', '),
      fuentes: t.estructurasEspeciales.flatMap((e) => e.datos[0]?.fuentes ?? []),
    };
  };
  fila(
    'especiales',
    'Anatomía',
    'Estructuras especiales',
    celdaEspeciales(a),
    celdaEspeciales(b),
    titulosEspeciales(a) !== titulosEspeciales(b),
  );

  for (const s of SISTEMAS) {
    const ca = celdaDatos(a.sistemas[s] ?? []);
    const cb = celdaDatos(b.sistemas[s] ?? []);
    fila(`sistema-${s}`, 'Sistemas', SISTEMA_LABEL[s], ca, cb, ca.estado !== cb.estado);
  }

  return { a, b, ancestroComun: comun, rutaA, rutaB, filas };
}
