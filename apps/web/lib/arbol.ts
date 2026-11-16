import type { Nivel, NodoArbol } from './types';

export function aplanar(raiz: NodoArbol): NodoArbol[] {
  return [raiz, ...raiz.hijos.flatMap(aplanar)];
}

export function buscarNodo(raiz: NodoArbol, slug: string): NodoArbol | undefined {
  if (raiz.slug === slug) return raiz;
  for (const h of raiz.hijos) {
    const r = buscarNodo(h, slug);
    if (r) return r;
  }
  return undefined;
}

export function rutaHasta(raiz: NodoArbol, slug: string): NodoArbol[] {
  if (raiz.slug === slug) return [raiz];
  for (const h of raiz.hijos) {
    const sub = rutaHasta(h, slug);
    if (sub.length > 0) return [raiz, ...sub];
  }
  return [];
}

export function phylaDe(nodo: NodoArbol): NodoArbol[] {
  return [
    ...(nodo.nivel === 'phylum' ? [nodo] : []),
    ...nodo.hijos.flatMap(phylaDe),
  ];
}

export function esGrupoSuperior(nivel: Nivel): boolean {
  return nivel === 'reino' || nivel === 'subreino' || nivel === 'rama' || nivel === 'clado';
}
