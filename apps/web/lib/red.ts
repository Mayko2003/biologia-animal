import {
  COLOR_SIN_DATO,
  COLOR_VALOR,
  CRITERIO_LABEL,
  NIVEL_COLOR_HEX,
  NIVEL_LABEL,
  NIVEL_ORDEN,
  VALOR_LABEL,
} from './etiquetas';
import { truncar } from './texto';
import {
  CRITERIOS,
  VALORES_CRITERIO,
  type CriterioId,
  type EmbriologiaEfectiva,
  type Nivel,
  type NodoMapa,
  type Taxon,
  type ValorCriterio,
} from './types';

export const LINAJES = ['parazoa', 'radiata', 'lophotrochozoa', 'ecdysozoa', 'deuterostomia'] as const;
export type Linaje = (typeof LINAJES)[number];

export const LINAJE_LABEL: Record<Linaje, string> = {
  parazoa: 'Parazoos',
  radiata: 'Radiados',
  lophotrochozoa: 'Lofotrocozoos',
  ecdysozoa: 'Ecdisozoos',
  deuterostomia: 'Deuterostomados',
};

export const LINAJE_COLOR: Record<Linaje, string> = {
  parazoa: '#c48c34',
  radiata: '#2f8f9d',
  lophotrochozoa: '#b0543a',
  ecdysozoa: '#7a5c99',
  deuterostomia: '#3e684a',
};
export const COLOR_SUPERIOR = '#162a38';

export type NodoRed = {
  id: string;
  tipo: 'taxon' | 'rasgo';
  nombre: string;
  nombreComun?: string;
  nivel?: Nivel;
  orden: number;
  linaje?: Linaje;
  rasgos: Partial<Record<CriterioId, ValorCriterio>>;
  criterio?: string;
  resumen?: string;
  rasgo?: { criterio: CriterioId; valor: ValorCriterio };
};

export type EnlaceRed = { source: string; target: string; tipo: 'taxonomia' | 'rasgo' };
export type Red = { nodos: NodoRed[]; enlaces: EnlaceRed[] };

export const idRasgo = (c: CriterioId, v: ValorCriterio) => `rasgo:${c}:${v}`;

export function construirRed(
  taxa: readonly Taxon[],
  mapa: NodoMapa,
  embriologia: (slug: string) => EmbriologiaEfectiva,
): Red {
  const porSlug = new Map(taxa.map((t) => [t.slug, t]));
  const criterioMapa = new Map<string, string>();
  const recorrer = (n: NodoMapa) => {
    if (n.taxon && n.criterio) criterioMapa.set(n.taxon, n.criterio);
    n.hijos.forEach(recorrer);
  };
  recorrer(mapa);

  const linajeDe = (t: Taxon): Linaje | undefined => {
    for (let a: Taxon | undefined = t; a; a = a.padre ? porSlug.get(a.padre) : undefined) {
      if ((LINAJES as readonly string[]).includes(a.slug)) return a.slug as Linaje;
    }
  };

  const nodos: NodoRed[] = [];
  const enlaces: EnlaceRed[] = [];
  const rasgosUsados = new Map<string, { criterio: CriterioId; valor: ValorCriterio }>();

  for (const t of taxa) {
    const ef = embriologia(t.slug);
    const rasgos: NodoRed['rasgos'] = {};
    for (const c of CRITERIOS) if (ef[c]) rasgos[c] = ef[c]!.valor;
    const n: NodoRed = { id: t.slug, tipo: 'taxon', nombre: t.nombre, nivel: t.nivel, orden: t.orden, rasgos };
    if (t.nombreComun) n.nombreComun = t.nombreComun;
    const linaje = linajeDe(t);
    if (linaje) n.linaje = linaje;
    const criterio = criterioMapa.get(t.slug);
    if (criterio) n.criterio = criterio;
    if (t.resumen[0]) n.resumen = truncar(t.resumen[0].texto, 240);
    nodos.push(n);
    if (t.padre) enlaces.push({ source: t.padre, target: t.slug, tipo: 'taxonomia' });
    if (t.nivel === 'phylum') {
      for (const c of CRITERIOS) {
        const v = rasgos[c];
        if (!v || v === 'no-aplica') continue;
        rasgosUsados.set(idRasgo(c, v), { criterio: c, valor: v });
        enlaces.push({ source: idRasgo(c, v), target: t.slug, tipo: 'rasgo' });
      }
    }
  }

  for (const [id, r] of rasgosUsados) {
    nodos.push({
      id,
      tipo: 'rasgo',
      nombre: VALOR_LABEL[r.valor],
      orden: 0,
      rasgos: { [r.criterio]: r.valor },
      rasgo: r,
    });
  }
  return { nodos, enlaces };
}

export type Filtros = {
  linajes: Linaje[];
  niveles: Nivel[];
  rasgos: Partial<Record<CriterioId, ValorCriterio[]>>;
};

export const SIN_FILTROS: Filtros = { linajes: [], niveles: [], rasgos: {} };

export function hayFiltros(f: Filtros): boolean {
  return f.linajes.length > 0 || f.niveles.length > 0 || Object.values(f.rasgos).some((v) => v && v.length > 0);
}

export function cumpleFiltros(n: NodoRed, f: Filtros): boolean {
  const rasgosActivos = CRITERIOS.filter((c) => (f.rasgos[c]?.length ?? 0) > 0);
  if (n.tipo === 'rasgo') {
    if (f.linajes.length > 0 || f.niveles.length > 0 || rasgosActivos.length === 0) return false;
    return rasgosActivos.every((c) => c !== n.rasgo!.criterio || f.rasgos[c]!.includes(n.rasgo!.valor));
  }
  if (f.linajes.length > 0 && (!n.linaje || !f.linajes.includes(n.linaje))) return false;
  if (f.niveles.length > 0 && (!n.nivel || !f.niveles.includes(n.nivel))) return false;
  return rasgosActivos.every((c) => {
    const v = n.rasgos[c];
    return v !== undefined && f.rasgos[c]!.includes(v);
  });
}

export function alternarFiltro(f: Filtros, clave: 'linaje' | 'nivel' | CriterioId, valor: string): Filtros {
  const alternar = <T extends string>(lista: readonly T[], v: T) =>
    lista.includes(v) ? lista.filter((x) => x !== v) : [...lista, v];
  if (clave === 'linaje') return { ...f, linajes: alternar(f.linajes, valor as Linaje) };
  if (clave === 'nivel') return { ...f, niveles: alternar(f.niveles, valor as Nivel) };
  const nuevos = alternar(f.rasgos[clave] ?? [], valor as ValorCriterio);
  const rasgos = { ...f.rasgos, [clave]: nuevos };
  if (nuevos.length === 0) delete rasgos[clave];
  return { ...f, rasgos };
}

export function filtrosAParam(f: Filtros): string | null {
  const partes = [
    ...f.linajes.map((v) => `linaje.${v}`),
    ...f.niveles.map((v) => `nivel.${v}`),
    ...CRITERIOS.flatMap((c) => (f.rasgos[c] ?? []).map((v) => `${c}.${v}`)),
  ];
  return partes.length ? partes.join(',') : null;
}

export function filtrosDesdeParam(param: string | null): Filtros {
  let f: Filtros = SIN_FILTROS;
  for (const parte of param?.split(',') ?? []) {
    const [clave, valor] = parte.split('.');
    if (!valor) continue;
    const valido =
      (clave === 'linaje' && (LINAJES as readonly string[]).includes(valor)) ||
      (clave === 'nivel' && valor in NIVEL_ORDEN) ||
      (CRITERIOS.includes(clave as CriterioId) &&
        (VALORES_CRITERIO[clave as CriterioId] as readonly string[]).includes(valor));
    if (valido) f = alternarFiltro(f, clave as 'linaje' | 'nivel' | CriterioId, valor);
  }
  return f;
}

export type ColorPor = 'linaje' | 'nivel' | CriterioId;
export const OPCIONES_COLOR: { valor: ColorPor; label: string }[] = [
  { valor: 'linaje', label: 'Linaje' },
  { valor: 'nivel', label: 'Nivel taxonómico' },
  ...CRITERIOS.map((c) => ({ valor: c as ColorPor, label: CRITERIO_LABEL[c] })),
];

export function colorPorDesdeParam(param: string | null): ColorPor {
  return OPCIONES_COLOR.some((o) => o.valor === param) ? (param as ColorPor) : 'linaje';
}

export function colorNodo(n: NodoRed, por: ColorPor): string {
  if (n.tipo === 'rasgo') return COLOR_VALOR[n.rasgo!.valor];
  if (por === 'linaje') return n.linaje ? LINAJE_COLOR[n.linaje] : COLOR_SUPERIOR;
  if (por === 'nivel') return NIVEL_COLOR_HEX[n.nivel!];
  const v = n.rasgos[por];
  return v ? COLOR_VALOR[v] : COLOR_SIN_DATO;
}

export function leyenda(por: ColorPor): { color: string; label: string }[] {
  if (por === 'linaje')
    return [
      ...LINAJES.map((l) => ({ color: LINAJE_COLOR[l], label: LINAJE_LABEL[l] })),
      { color: COLOR_SUPERIOR, label: 'Grupos superiores' },
    ];
  if (por === 'nivel') {
    const vistos = new Set<string>();
    return (Object.keys(NIVEL_LABEL) as Nivel[]).flatMap((n) => {
      const color = NIVEL_COLOR_HEX[n];
      if (vistos.has(color)) return [];
      vistos.add(color);
      return [{ color, label: color === NIVEL_COLOR_HEX.reino ? 'Reino a clado' : NIVEL_LABEL[n] }];
    });
  }
  return [
    ...VALORES_CRITERIO[por].map((v) => ({ color: COLOR_VALOR[v], label: VALOR_LABEL[v] })),
    { color: COLOR_SIN_DATO, label: 'Sin dato' },
  ];
}

export function vecinos(red: Red, id: string): string[] {
  const ids = new Set<string>();
  for (const e of red.enlaces) {
    if (e.source === id) ids.add(e.target);
    if (e.target === id) ids.add(e.source);
  }
  return [...ids];
}

export type Punto = { x: number; y: number };

export type GrupoRed = { clave: string; titulo?: string; hub?: string; miembros: string[] };

export type Disposicion = {
  pos: Map<string, Punto>;
  padre: Map<string, string>;
  centro: Map<string, Punto>;
  grupos: { titulo?: string; x: number; y: number; r: number }[];
};

const PASO_ARBOL = 80;
const PASO_GRUPO = 56;
const SEPARACION_GRUPOS = 90;

function padresTaxonomicos(red: Red): Map<string, string> {
  return new Map(red.enlaces.filter((e) => e.tipo === 'taxonomia').map((e) => [e.target, e.source]));
}

function ordenarHijos(red: Red, padres: Map<string, string>): Map<string, string[]> {
  const orden = new Map(red.nodos.map((n) => [n.id, n.orden]));
  const hijos = new Map<string, string[]>();
  for (const [h, p] of padres) hijos.set(p, [...(hijos.get(p) ?? []), h]);
  for (const lista of hijos.values()) lista.sort((a, b) => orden.get(a)! - orden.get(b)!);
  return hijos;
}

function radial(
  raices: string[],
  hijos: (id: string) => string[],
  paso: number,
  centro: Punto,
  d: Disposicion,
  hub?: string,
): number {
  const enCentro = hub ?? (raices.length === 1 ? raices[0] : undefined);
  const primerNivel = hub ? raices : enCentro ? hijos(enCentro) : raices;
  if (enCentro) {
    d.pos.set(enCentro, centro);
    d.centro.set(enCentro, centro);
  }
  const peso = new Map<string, number>();
  const contar = (id: string): number => {
    const h = hijos(id);
    const hojas = h.length ? h.reduce((suma, x) => suma + contar(x), 0) : 1;
    peso.set(id, hojas ** 0.7);
    return hojas;
  };
  primerNivel.forEach(contar);
  const radio = (nivel: number) => (hub || !enCentro ? paso * (nivel + 0.7) : paso * nivel);
  let profundidad = 0;
  const repartir = (ids: string[], nivel: number, desde: number, ancho: number, padre?: string) => {
    const total = ids.reduce((suma, x) => suma + peso.get(x)!, 0);
    let cursor = desde;
    for (const id of ids) {
      const a = (ancho * peso.get(id)!) / total;
      const angulo = -Math.PI / 2 + cursor + a / 2;
      const r = radio(nivel);
      d.pos.set(id, { x: centro.x + r * Math.cos(angulo), y: centro.y + r * Math.sin(angulo) });
      d.centro.set(id, centro);
      if (padre) d.padre.set(id, padre);
      profundidad = Math.max(profundidad, r);
      repartir(hijos(id), nivel + 1, cursor, a, id);
      cursor += a;
    }
  };
  repartir(primerNivel, 1, 0, 2 * Math.PI, enCentro);
  return profundidad;
}

export function disponerArbol(red: Red): Disposicion {
  const padres = padresTaxonomicos(red);
  const hijos = ordenarHijos(red, padres);
  const raiz = red.nodos.find((n) => n.tipo === 'taxon' && !padres.has(n.id))!.id;
  const d: Disposicion = { pos: new Map(), padre: new Map(), centro: new Map(), grupos: [] };
  radial([raiz], (id) => hijos.get(id) ?? [], PASO_ARBOL, { x: 0, y: 0 }, d);
  return d;
}

export function disponerGrupos(red: Red, grupos: GrupoRed[]): Disposicion {
  const padres = padresTaxonomicos(red);
  const ordenArbol = new Map([...disponerArbol(red).pos.keys()].map((id, i) => [id, i]));
  const parciales = grupos.map((g) => {
    const miembros = new Set(g.miembros);
    const hijos = new Map<string, string[]>();
    const raices: string[] = [];
    for (const id of [...g.miembros].sort((a, b) => ordenArbol.get(a)! - ordenArbol.get(b)!)) {
      let p = padres.get(id);
      while (p && !miembros.has(p)) p = padres.get(p);
      if (p) hijos.set(p, [...(hijos.get(p) ?? []), id]);
      else raices.push(id);
    }
    const d: Disposicion = { pos: new Map(), padre: new Map(), centro: new Map(), grupos: [] };
    const r = radial(raices, (id) => hijos.get(id) ?? [], PASO_GRUPO, { x: 0, y: 0 }, d, g.hub) + 30;
    return { g, d, r };
  });

  const resultado: Disposicion = { pos: new Map(), padre: new Map(), centro: new Map(), grupos: [] };
  const porFila = Math.max(1, Math.ceil(Math.sqrt(parciales.length)));
  const filas: (typeof parciales)[] = [];
  for (let i = 0; i < parciales.length; i += porFila) filas.push(parciales.slice(i, i + porFila));
  const altoFila = filas.map((f) => Math.max(...f.map((p) => p.r)));
  let y = -(altoFila.reduce((s, h) => s + 2 * h, 0) + SEPARACION_GRUPOS * (filas.length - 1)) / 2;
  filas.forEach((fila, i) => {
    y += altoFila[i];
    let x = -(fila.reduce((s, p) => s + 2 * p.r, 0) + SEPARACION_GRUPOS * (fila.length - 1)) / 2;
    for (const { g, d, r } of fila) {
      x += r;
      const mover = (p: Punto) => ({ x: p.x + x, y: p.y + y });
      for (const [id, p] of d.pos) resultado.pos.set(id, mover(p));
      for (const [id, c] of d.centro) resultado.centro.set(id, mover(c));
      for (const [id, p] of d.padre) resultado.padre.set(id, p);
      resultado.grupos.push({ titulo: g.hub ? undefined : g.titulo, x, y, r });
      x += r + SEPARACION_GRUPOS;
    }
    y += altoFila[i] + SEPARACION_GRUPOS;
  });
  return resultado;
}

export function agrupar(red: Red, filtros: Filtros, restringir: Set<string> | null): GrupoRed[] {
  const miembros = red.nodos.filter(
    (n) => n.tipo === 'taxon' && cumpleFiltros(n, filtros) && (!restringir || restringir.has(n.id)),
  );
  const ids = new Set(red.nodos.map((n) => n.id));
  const activos = CRITERIOS.filter((c) => (filtros.rasgos[c]?.length ?? 0) > 0);
  let clave: (n: NodoRed) => string = () => 'todos';
  let titulo: (k: string) => string | undefined = () => undefined;
  let hub: (k: string) => string | undefined = () => undefined;
  let orden: string[] = ['todos'];

  if (activos.length > 0) {
    clave = (n) => activos.map((c) => n.rasgos[c]).join('|');
    titulo = (k) =>
      k
        .split('|')
        .map((v) => VALOR_LABEL[v as ValorCriterio])
        .join(' / ');
    hub = (k) =>
      activos.length === 1 && ids.has(idRasgo(activos[0], k as ValorCriterio))
        ? idRasgo(activos[0], k as ValorCriterio)
        : undefined;
    const valores = activos.map((c) => VALORES_CRITERIO[c] as readonly string[]);
    orden = [...new Set(miembros.map(clave))].sort((a, b) => {
      const [pa, pb] = [a.split('|'), b.split('|')];
      for (let i = 0; i < valores.length; i++) {
        const dif = valores[i].indexOf(pa[i]) - valores[i].indexOf(pb[i]);
        if (dif) return dif;
      }
      return 0;
    });
  } else if (filtros.linajes.length > 1) {
    clave = (n) => n.linaje!;
    titulo = (k) => LINAJE_LABEL[k as Linaje];
    orden = LINAJES.filter((l) => filtros.linajes.includes(l));
  } else if (filtros.niveles.length > 1) {
    clave = (n) => n.nivel!;
    titulo = (k) => NIVEL_LABEL[k as Nivel];
    orden = [...filtros.niveles].sort((a, b) => NIVEL_ORDEN[a] - NIVEL_ORDEN[b]);
  }

  return orden
    .map((k) => ({
      clave: k,
      titulo: titulo(k),
      hub: hub(k),
      miembros: miembros.filter((n) => clave(n) === k).map((n) => n.id),
    }))
    .filter((g) => g.miembros.length > 0);
}
