'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { aplanar, esGrupoSuperior, rutaHasta } from '@/lib/arbol';
import { normalizar } from '@/lib/texto';
import type { NodoArbol } from '@/lib/types';
import { RankBadge } from '@/components/taxon/rank-badge';

function coincide(nodo: NodoArbol, filtro: string): boolean {
  return normalizar(`${nodo.nombre} ${nodo.nombreComun ?? ''} ${nodo.slug}`).includes(normalizar(filtro));
}

function resaltar(texto: string, filtro: string) {
  if (!filtro) return texto;
  const idx = normalizar(texto).indexOf(normalizar(filtro));
  if (idx === -1) return texto;
  return (
    <>
      {texto.slice(0, idx)}
      <mark>{texto.slice(idx, idx + filtro.length)}</mark>
      {texto.slice(idx + filtro.length)}
    </>
  );
}

export function ArbolLista({
  arbol,
  seleccionado,
  onSeleccionar,
}: {
  arbol: NodoArbol;
  seleccionado: string | null;
  onSeleccionar: (slug: string) => void;
}) {
  const [filtro, setFiltro] = useState('');
  const [previo, setPrevio] = useState(seleccionado);
  const [abiertos, setAbiertos] = useState<Set<string>>(() => {
    const iniciales = new Set(
      aplanar(arbol).filter((n) => esGrupoSuperior(n.nivel)).map((n) => n.slug),
    );
    if (seleccionado) rutaHasta(arbol, seleccionado).forEach((n) => iniciales.add(n.slug));
    return iniciales;
  });
  const filas = useRef(new Map<string, HTMLLIElement>());

  if (seleccionado !== previo) {
    setPrevio(seleccionado);
    if (seleccionado) {
      const nuevo = new Set(abiertos);
      rutaHasta(arbol, seleccionado).forEach((n) => nuevo.add(n.slug));
      setAbiertos(nuevo);
    }
  }

  useEffect(() => {
    if (!seleccionado) return;
    filas.current.get(seleccionado)?.scrollIntoView({ block: 'nearest' });
  }, [seleccionado]);

  const visibles = useMemo(() => {
    if (!filtro.trim()) return null;
    const set = new Set<string>();
    for (const n of aplanar(arbol)) {
      if (coincide(n, filtro)) rutaHasta(arbol, n.slug).forEach((a) => set.add(a.slug));
    }
    return set;
  }, [arbol, filtro]);

  function toggle(slug: string) {
    const nuevo = new Set(abiertos);
    if (nuevo.has(slug)) nuevo.delete(slug);
    else nuevo.add(slug);
    setAbiertos(nuevo);
  }

  function expandirTodo() {
    setAbiertos(new Set(aplanar(arbol).filter((n) => n.hijos.length > 0).map((n) => n.slug)));
  }

  function colapsarTodo() {
    setAbiertos(new Set([arbol.slug]));
  }

  function fila(nodo: NodoArbol): React.ReactNode {
    if (visibles && !visibles.has(nodo.slug)) return null;
    const tieneHijos = nodo.hijos.length > 0;
    const abierto = visibles ? true : abiertos.has(nodo.slug);
    const sel = seleccionado === nodo.slug;
    return (
      <li
        key={nodo.slug}
        role="treeitem"
        aria-expanded={tieneHijos ? abierto : undefined}
        aria-selected={sel}
        ref={(el) => {
          if (el) filas.current.set(nodo.slug, el);
          else filas.current.delete(nodo.slug);
        }}
      >
        <div className={`flex items-center gap-1.5 rounded px-1 py-0.5 ${sel ? 'bg-emerald-50 dark:bg-emerald-900/30' : ''}`}>
          {tieneHijos ? (
            <button
              type="button"
              aria-label={abierto ? `Colapsar ${nodo.nombre}` : `Expandir ${nodo.nombre}`}
              onClick={() => toggle(nodo.slug)}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              {abierto ? '▾' : '▸'}
            </button>
          ) : (
            <span className="w-10 shrink-0" aria-hidden />
          )}
          <RankBadge nivel={nodo.nivel} />
          <button
            type="button"
            onClick={() => onSeleccionar(nodo.slug)}
            className="min-h-[40px] text-sm font-medium hover:text-emerald-700 hover:underline dark:hover:text-emerald-400"
          >
            {resaltar(nodo.nombre, filtro)}
          </button>
          {nodo.nombreComun && (
            <span className="hidden text-xs text-zinc-500 sm:inline dark:text-zinc-400">{nodo.nombreComun}</span>
          )}
          {tieneHijos && <span className="text-xs text-zinc-400 dark:text-zinc-500">({nodo.hijos.length})</span>}
        </div>
        {tieneHijos && abierto && (
          <ul role="group" className="ml-2 border-l border-zinc-200 pl-2 dark:border-zinc-800">
            {nodo.hijos.map(fila)}
          </ul>
        )}
      </li>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="filtro-arbol">Filtrar grupos</label>
        <input
          id="filtro-arbol"
          type="search"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ej.: Insecta, anélidos, Myxini…"
          className="w-full sm:w-64 rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button type="button" onClick={expandirTodo} className="min-h-[40px] rounded-md border border-zinc-300 px-3 py-2 text-sm hover:border-emerald-400 dark:border-zinc-700">
          Expandir todo
        </button>
        <button type="button" onClick={colapsarTodo} className="min-h-[40px] rounded-md border border-zinc-300 px-3 py-2 text-sm hover:border-emerald-400 dark:border-zinc-700">
          Colapsar todo
        </button>
      </div>
      {visibles && visibles.size === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Sin coincidencias para «{filtro}».</p>
      ) : (
        <ul role="tree" aria-label="Árbol taxonómico" className="space-y-0.5">
          {fila(arbol)}
        </ul>
      )}
    </div>
  );
}
