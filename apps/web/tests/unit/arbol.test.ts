import { describe, expect, it } from 'vitest';
import { aplanar, buscarNodo, esGrupoSuperior, phylaDe, rutaHasta } from '@/lib/arbol';
import type { NodoArbol } from '@/lib/types';

const arbol: NodoArbol = {
  slug: 'r', nombre: 'R', nivel: 'reino', hijos: [
    {
      slug: 'a', nombre: 'A', nivel: 'clado', hijos: [
        { slug: 'a1', nombre: 'A1', nivel: 'phylum', hijos: [] },
        { slug: 'a2', nombre: 'A2', nivel: 'phylum', hijos: [] },
      ],
    },
    { slug: 'b', nombre: 'B', nivel: 'clado', hijos: [{ slug: 'b1', nombre: 'B1', nivel: 'phylum', hijos: [] }] },
  ],
};

describe('arbol', () => {
  it('aplanar en preorden', () => {
    expect(aplanar(arbol).map((n) => n.slug)).toEqual(['r', 'a', 'a1', 'a2', 'b', 'b1']);
  });

  it('buscarNodo', () => {
    expect(buscarNodo(arbol, 'a2')?.nombre).toBe('A2');
    expect(buscarNodo(arbol, 'x')).toBeUndefined();
  });

  it('rutaHasta', () => {
    expect(rutaHasta(arbol, 'b1').map((n) => n.slug)).toEqual(['r', 'b', 'b1']);
    expect(rutaHasta(arbol, 'x')).toEqual([]);
  });

  it('phylaDe devuelve descendientes phylum', () => {
    expect(phylaDe(arbol).map((n) => n.slug)).toEqual(['a1', 'a2', 'b1']);
    expect(phylaDe(arbol.hijos[0]).map((n) => n.slug)).toEqual(['a1', 'a2']);
  });

  it('esGrupoSuperior', () => {
    expect(esGrupoSuperior('clado')).toBe(true);
    expect(esGrupoSuperior('phylum')).toBe(false);
  });
});
