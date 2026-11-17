import { describe, expect, it } from 'vitest';
import { MAPA_EMBRIONARIO } from '@/data/mapa-embrionario';
import {
  agrupar,
  alternarFiltro,
  disponerArbol,
  disponerGrupos,
  colorNodo,
  colorPorDesdeParam,
  construirRed,
  cumpleFiltros,
  filtrosAParam,
  filtrosDesdeParam,
  hayFiltros,
  idRasgo,
  leyenda,
  SIN_FILTROS,
  vecinos,
} from '@/lib/red';
import { getEmbriologiaEfectiva, todos } from '@/lib/taxa';

const red = construirRed(todos, MAPA_EMBRIONARIO, getEmbriologiaEfectiva);
const nodo = (id: string) => red.nodos.find((n) => n.id === id)!;

describe('red de grupos', () => {
  it('tiene un nodo por taxón y enlaces padre-hijo para todos menos la raíz', () => {
    const taxones = red.nodos.filter((n) => n.tipo === 'taxon');
    expect(taxones).toHaveLength(todos.length);
    expect(red.enlaces.filter((e) => e.tipo === 'taxonomia')).toHaveLength(todos.length - 1);
  });

  it('los ids son únicos y todo enlace apunta a nodos existentes', () => {
    const ids = new Set(red.nodos.map((n) => n.id));
    expect(ids.size).toBe(red.nodos.length);
    for (const e of red.enlaces) {
      expect(ids.has(e.source), e.source).toBe(true);
      expect(ids.has(e.target), e.target).toBe(true);
    }
  });

  it('los rasgos embrionarios conectan solo phyla y no incluyen "no aplica"', () => {
    for (const e of red.enlaces.filter((x) => x.tipo === 'rasgo')) {
      expect(nodo(e.target).nivel).toBe('phylum');
      expect(e.source).not.toContain('no-aplica');
    }
    expect(vecinos(red, idRasgo('cavidad', 'enterocelomado'))).toEqual(
      expect.arrayContaining(['echinodermata', 'chordata']),
    );
  });

  it('asigna linaje, criterio del mapa y embriología heredada', () => {
    expect(nodo('insecta').linaje).toBe('ecdysozoa');
    expect(nodo('bilateria').linaje).toBeUndefined();
    expect(nodo('radiata').criterio).toBe('Simetría radial, eje oral-aboral');
    expect(nodo('oligochaeta').rasgos.blastoporo).toBe(nodo('annelida').rasgos.blastoporo);
  });
});

describe('filtros', () => {
  const ecdisozoos = alternarFiltro(SIN_FILTROS, 'linaje', 'ecdysozoa');

  it('combina con O dentro de un filtro y con Y entre filtros', () => {
    expect(cumpleFiltros(nodo('insecta'), ecdisozoos)).toBe(true);
    expect(cumpleFiltros(nodo('annelida'), ecdisozoos)).toBe(false);
    const ambos = alternarFiltro(ecdisozoos, 'linaje', 'lophotrochozoa');
    expect(cumpleFiltros(nodo('annelida'), ambos)).toBe(true);
    const soloPhyla = alternarFiltro(ambos, 'nivel', 'phylum');
    expect(cumpleFiltros(nodo('annelida'), soloPhyla)).toBe(true);
    expect(cumpleFiltros(nodo('insecta'), soloPhyla)).toBe(false);
  });

  it('un filtro de rasgo incluye su nodo de rasgo y a los grupos que lo tienen', () => {
    const f = alternarFiltro(SIN_FILTROS, 'cavidad', 'enterocelomado');
    expect(cumpleFiltros(nodo('chordata'), f)).toBe(true);
    expect(cumpleFiltros(nodo('annelida'), f)).toBe(false);
    expect(cumpleFiltros(nodo(idRasgo('cavidad', 'enterocelomado')), f)).toBe(true);
    expect(cumpleFiltros(nodo(idRasgo('cavidad', 'pseudocelomado')), f)).toBe(false);
  });

  it('alternar dos veces quita el filtro', () => {
    const f = alternarFiltro(alternarFiltro(SIN_FILTROS, 'cavidad', 'acelomado'), 'cavidad', 'acelomado');
    expect(hayFiltros(f)).toBe(false);
  });

  it('se serializa y se lee desde la URL, ignorando valores inválidos', () => {
    const f = alternarFiltro(alternarFiltro(ecdisozoos, 'nivel', 'clase'), 'simetria', 'bilateral');
    const param = filtrosAParam(f);
    expect(param).toBe('linaje.ecdysozoa,nivel.clase,simetria.bilateral');
    expect(filtrosDesdeParam(param)).toEqual(f);
    expect(filtrosDesdeParam('linaje.marte,nivel.x,cavidad.nada,basura')).toEqual(SIN_FILTROS);
    expect(filtrosAParam(SIN_FILTROS)).toBeNull();
  });
});

describe('colores', () => {
  it('usa el color del rasgo, del linaje o el de sin dato', () => {
    expect(colorPorDesdeParam('inventado')).toBe('linaje');
    expect(colorNodo(nodo('insecta'), 'linaje')).not.toBe(colorNodo(nodo('annelida'), 'linaje'));
    const leyendaCavidad = leyenda('cavidad');
    expect(leyendaCavidad.at(-1)!.label).toBe('Sin dato');
    expect(leyendaCavidad.map((l) => l.color)).toContain(colorNodo(nodo('chordata'), 'cavidad'));
  });
});

describe('disposición', () => {
  const dist = (p: { x: number; y: number }) => Math.hypot(p.x, p.y);

  it('el árbol radial ubica a todos los taxones, con la raíz al centro y cada hijo más afuera que su padre', () => {
    const d = disponerArbol(red);
    const taxones = red.nodos.filter((n) => n.tipo === 'taxon');
    expect(d.pos.size).toBe(taxones.length);
    expect(d.pos.get('animalia')).toEqual({ x: 0, y: 0 });
    for (const [hijo, padre] of d.padre) expect(dist(d.pos.get(hijo)!)).toBeGreaterThan(dist(d.pos.get(padre)!));
    const claves = new Set([...d.pos.values()].map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`));
    expect(claves.size).toBe(taxones.length);
  });

  it('el árbol es siempre igual', () => {
    expect([...disponerArbol(red).pos.entries()]).toEqual([...disponerArbol(red).pos.entries()]);
  });

  it('agrupa por valor del criterio filtrado, con el rasgo como centro de cada grupo', () => {
    let f = alternarFiltro(SIN_FILTROS, 'cavidad', 'pseudocelomado');
    f = alternarFiltro(f, 'cavidad', 'enterocelomado');
    const grupos = agrupar(red, f, null);
    expect(grupos.map((g) => g.clave)).toEqual(['pseudocelomado', 'enterocelomado']);
    expect(grupos[1].hub).toBe(idRasgo('cavidad', 'enterocelomado'));
    expect(grupos[1].miembros).toContain('chordata');
    const d = disponerGrupos(red, grupos);
    expect(d.grupos).toHaveLength(2);
    expect(d.pos.has(idRasgo('cavidad', 'enterocelomado'))).toBe(true);
    expect(d.pos.has('arthropoda')).toBe(false);
    expect(d.padre.get('chordata')).toBe(idRasgo('cavidad', 'enterocelomado'));
  });

  it('dentro de un grupo, cada miembro cuelga de su ancestro más cercano que también cumple', () => {
    const f = alternarFiltro(alternarFiltro(SIN_FILTROS, 'nivel', 'phylum'), 'nivel', 'clase');
    const grupos = agrupar(red, f, null);
    expect(grupos.map((g) => g.clave)).toEqual(['phylum', 'clase']);
    const solo = agrupar(red, alternarFiltro(SIN_FILTROS, 'linaje', 'ecdysozoa'), null);
    expect(solo).toHaveLength(1);
    const d = disponerGrupos(red, solo);
    expect(d.pos.get('ecdysozoa')).toEqual({ x: d.grupos[0].x, y: d.grupos[0].y });
    expect(d.padre.get('insecta')).toBe('hexapoda');
  });

  it('una búsqueda restringe los miembros', () => {
    const grupos = agrupar(red, SIN_FILTROS, new Set(['annelida', 'oligochaeta', 'mollusca']));
    expect(grupos).toHaveLength(1);
    const d = disponerGrupos(red, grupos);
    expect(d.padre.get('oligochaeta')).toBe('annelida');
    expect(d.pos.size).toBe(3);
  });
});
