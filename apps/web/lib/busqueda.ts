import MiniSearch from 'minisearch';
import { tieneApunte } from './apuntes';
import { recorrerItems } from './recorrer';
import { normalizar } from './texto';
import type { Nivel, Taxon } from './types';

export type DocBusqueda = {
  id: string;
  slug: string;
  taxonNombre: string;
  nivel: Nivel;
  seccion: string;
  seccionLabel: string;
  ancla: string;
  texto: string;
  soloExterno: boolean;
};

function anclaDe(seccion: string): string {
  if (seccion === 'resumen') return 'seccion-resumen';
  if (seccion === 'morfologiaExterna') return 'seccion-morfologia';
  if (seccion.startsWith('embriologia:')) return 'seccion-embriologia';
  if (seccion.startsWith('sistema:')) return 'sistema-' + seccion.slice(8);
  if (seccion.startsWith('especial:')) return 'especial-' + seccion.slice(9);
  if (seccion === 'reproduccion') return 'seccion-reproduccion';
  if (seccion === 'bioecologia') return 'seccion-bioecologia';
  if (seccion === 'ejemplos') return 'seccion-ejemplos';
  if (seccion === 'notas') return 'seccion-notas';
  return '';
}

export function construirDocumentos(taxa: readonly Taxon[]): DocBusqueda[] {
  const docs: DocBusqueda[] = [];
  for (const t of taxa) {
    const taxonNombre = t.nombre + (t.nombreComun ? ` (${t.nombreComun})` : '');
    let n = 0;
    docs.push({
      id: `${t.slug}:${n++}`,
      slug: t.slug,
      taxonNombre,
      nivel: t.nivel,
      seccion: 'nombre',
      seccionLabel: 'Nombre',
      ancla: '',
      texto: [t.nombre, t.nombreComun, ...(t.sinonimos ?? [])].filter(Boolean).join(' '),
      soloExterno: false,
    });
    for (const item of recorrerItems(t)) {
      docs.push({
        id: `${t.slug}:${n++}`,
        slug: t.slug,
        taxonNombre,
        nivel: t.nivel,
        seccion: item.seccion,
        seccionLabel: item.etiqueta,
        ancla: anclaDe(item.seccion),
        texto: item.texto,
        soloExterno: !tieneApunte(item.fuentes),
      });
    }
  }
  return docs;
}

export function crearIndice(docs: DocBusqueda[]): MiniSearch<DocBusqueda> {
  const indice = new MiniSearch<DocBusqueda>({
    fields: ['texto', 'taxonNombre'],
    storeFields: ['slug', 'taxonNombre', 'nivel', 'seccion', 'seccionLabel', 'ancla', 'texto', 'soloExterno'],
    processTerm: (t) => normalizar(t) || null,
    searchOptions: { prefix: true, fuzzy: 0.2, boost: { taxonNombre: 3 }, combineWith: 'AND' },
  });
  indice.addAll(docs);
  return indice;
}

export type Coincidencia = {
  id: string;
  seccionLabel: string;
  ancla: string;
  texto: string;
  soloExterno: boolean;
};

export type ResultadoTaxon = {
  slug: string;
  taxonNombre: string;
  nivel: Nivel;
  puntaje: number;
  coincidencias: Coincidencia[];
};

export function buscar(
  indice: MiniSearch<DocBusqueda>,
  consulta: string,
  limite = 30,
): ResultadoTaxon[] {
  if (consulta.trim().length < 2) return [];
  const crudos = indice.search(consulta);
  const grupos = new Map<string, ResultadoTaxon>();
  for (const r of crudos) {
    const doc = r as unknown as DocBusqueda & { score: number };
    let g = grupos.get(doc.slug);
    if (!g) {
      g = { slug: doc.slug, taxonNombre: doc.taxonNombre, nivel: doc.nivel, puntaje: 0, coincidencias: [] };
      grupos.set(doc.slug, g);
    }
    g.puntaje += r.score;
    if (doc.seccion !== 'nombre') {
      g.coincidencias.push({
        id: doc.id,
        seccionLabel: doc.seccionLabel,
        ancla: doc.ancla,
        texto: doc.texto,
        soloExterno: doc.soloExterno,
      });
    }
  }
  const out = [...grupos.values()];
  out.sort((a, b) => b.puntaje - a.puntaje);
  for (const g of out) g.coincidencias = g.coincidencias.slice(0, 5);
  return out.slice(0, limite);
}

export type Segmento = { texto: string; marcado: boolean };

export function resaltar(texto: string, consulta: string): Segmento[] {
  const terminos = consulta
    .split(/\s+/)
    .map((t) => normalizar(t))
    .filter((t) => t.length >= 2);
  const segs: Segmento[] = [];
  let buffer = '';
  let marcando = false;
  const cerrar = () => {
    if (buffer) segs.push({ texto: buffer, marcado: marcando });
    buffer = '';
  };
  for (const palabra of texto.split(/(\s+)/)) {
    const norm = normalizar(palabra);
    const marca = norm.length >= 2 && terminos.some((t) => norm.startsWith(t));
    if (marca !== marcando) {
      cerrar();
      marcando = marca;
    }
    buffer += palabra;
  }
  cerrar();
  return segs.filter((s) => s.texto.length > 0);
}

export function fragmento(texto: string, consulta: string, max = 220): string {
  if (texto.length <= max) return texto;
  const segs = resaltar(texto, consulta);
  const i = texto.indexOf(segs.find((s) => s.marcado)?.texto ?? '');
  const inicio = i > 0 ? Math.max(0, i - (max - (segs.find((s) => s.marcado)?.texto.length ?? 0)) / 2) : 0;
  const ini = Math.floor(inicio);
  let out = texto.slice(ini, ini + max);
  if (ini > 0) out = '…' + out;
  if (ini + max < texto.length) out += '…';
  return out;
}
