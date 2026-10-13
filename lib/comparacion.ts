import { CRITERIO_LABEL, NIVEL_LABEL, SISTEMA_LABEL, VALOR_LABEL } from './etiquetas';
import type { Consultas } from './consultas';
import { CRITERIOS, SISTEMAS, type Dato, type Fuente, type Taxon } from './types';

export type Celda =
  | { estado: 'datos'; datos: Dato[] }
  | { estado: 'ausente'; datos: Dato[] }
  | { estado: 'texto'; texto: string; detalle?: string; fuentes: Fuente[] }
  | { estado: 'vacio' };

export type GrupoFila =
  | 'Ubicación'
  | 'Desarrollo embrionario'
  | 'Morfología'
  | 'Sistemas'
  | 'Estructuras especiales'
  | 'Reproducción y ecología';

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

function textoDe(c: Celda): string | null {
  return c.estado === 'texto' ? c.texto : c.estado === 'vacio' ? null : c.estado;
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

  const distintoTexto = (ca: Celda, cb: Celda) => textoDe(ca) !== textoDe(cb);

  fila(
    'nivel',
    'Ubicación',
    'Nivel',
    { estado: 'texto', texto: NIVEL_LABEL[a.nivel], fuentes: [] },
    { estado: 'texto', texto: NIVEL_LABEL[b.nivel], fuentes: [] },
    a.nivel !== b.nivel,
  );
  const rutaTxt = (t: Taxon) =>
    consultas
      .getRuta(t.slug)
      .slice(1)
      .map((x) => x.nombre)
      .join(' › ');
  fila(
    'ruta',
    'Ubicación',
    'Clasificación',
    { estado: 'texto', texto: rutaTxt(a), fuentes: [] },
    { estado: 'texto', texto: rutaTxt(b), fuentes: [] },
    false,
  );
  const phylumA = consultas.getPhylumDe(slugA);
  const phylumB = consultas.getPhylumDe(slugB);
  fila(
    'phylum',
    'Ubicación',
    'Phylum',
    { estado: 'texto', texto: phylumA?.nombre ?? '—', fuentes: [] },
    { estado: 'texto', texto: phylumB?.nombre ?? '—', fuentes: [] },
    (phylumA?.slug ?? null) !== (phylumB?.slug ?? null),
  );

  const embA = consultas.getEmbriologiaEfectiva(slugA);
  const embB = consultas.getEmbriologiaEfectiva(slugB);
  for (const c of CRITERIOS) {
    const celdaEmb = (emb: typeof embA): Celda => {
      const reg = emb[c];
      if (!reg) return { estado: 'vacio' };
      const detalles: string[] = [];
      if (reg.nota) detalles.push(reg.nota);
      if (reg.heredadoDe) detalles.push(`heredado de ${reg.heredadoDe}`);
      return {
        estado: 'texto',
        texto: VALOR_LABEL[reg.valor],
        detalle: detalles.join('. ') || undefined,
        fuentes: reg.fuentes,
      };
    };
    const ca = celdaEmb(embA);
    const cb = celdaEmb(embB);
    fila(`emb-${c}`, 'Desarrollo embrionario', CRITERIO_LABEL[c], ca, cb, distintoTexto(ca, cb));
  }

  fila('morfologia', 'Morfología', 'Morfología externa', celdaDatos(a.morfologiaExterna), celdaDatos(b.morfologiaExterna), false);

  for (const s of SISTEMAS) {
    const ca = celdaDatos(a.sistemas[s] ?? []);
    const cb = celdaDatos(b.sistemas[s] ?? []);
    fila(`sistema-${s}`, 'Sistemas', SISTEMA_LABEL[s], ca, cb, ca.estado !== cb.estado);
  }

  const celdaEspeciales = (t: Taxon): Celda => {
    if (t.estructurasEspeciales.length === 0) return { estado: 'vacio' };
    return {
      estado: 'texto',
      texto: t.estructurasEspeciales.map((e) => e.titulo).join(', '),
      fuentes: t.estructurasEspeciales.flatMap((e) => e.datos[0]?.fuentes ?? []),
    };
  };
  fila('especiales', 'Estructuras especiales', 'Estructuras especiales', celdaEspeciales(a), celdaEspeciales(b), false);

  fila('reproduccion', 'Reproducción y ecología', 'Reproducción y desarrollo', celdaDatos(a.reproduccion), celdaDatos(b.reproduccion), false);
  fila('bioecologia', 'Reproducción y ecología', 'Bioecología', celdaDatos(a.bioecologia), celdaDatos(b.bioecologia), false);
  const celdaEjemplos = (t: Taxon): Celda =>
    t.ejemplos.length === 0
      ? { estado: 'vacio' }
      : { estado: 'texto', texto: t.ejemplos.map((e) => e.nombre).join(', '), fuentes: t.ejemplos.flatMap((e) => e.fuentes) };
  fila('ejemplos', 'Reproducción y ecología', 'Ejemplos', celdaEjemplos(a), celdaEjemplos(b), false);

  return { a, b, ancestroComun: comun, rutaA, rutaB, filas };
}
