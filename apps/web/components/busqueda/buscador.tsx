'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { useParametro } from '@/components/navegacion/use-seleccion';
import { RankBadge } from '@/components/taxon/rank-badge';
import { buscar, crearIndice, fragmento, resaltar, type DocBusqueda } from '@/lib/busqueda';
import { normalizar } from '@/lib/texto';

const SUGERENCIAS = ['nefridios', 'notocorda', 'células flamígeras', 'trocófora', 'hemolinfa'];

export function Buscador({ docs }: { docs: DocBusqueda[] }) {
  const [q, setQ] = useParametro('q');
  const [texto, setTexto] = useState(q ?? '');
  const [qPrevio, setQPrevio] = useState(q);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (q !== qPrevio) {
    setQPrevio(q);
    setTexto(q ?? '');
  }

  const indice = useMemo(() => crearIndice(docs), [docs]);
  const resultados = useMemo(() => buscar(indice, q ?? ''), [indice, q]);
  const { modo } = useFiltroFuentes();

  const resultadosVisibles = useMemo(() => {
    if (modo !== 'apuntes') return resultados;
    const terminos = (q ?? '')
      .split(/\s+/)
      .map((t) => normalizar(t))
      .filter((t) => t.length >= 2);
    const nombreCoincide = (nombre: string) =>
      terminos.length > 0 && terminos.every((t) => normalizar(nombre).includes(t));
    return resultados
      .map((r) => ({ ...r, coincidencias: r.coincidencias.filter((c) => !c.soloExterno) }))
      .filter((r) => r.coincidencias.length > 0 || nombreCoincide(r.taxonNombre));
  }, [modo, resultados, q]);

  function programar(valor: string) {
    setTexto(valor);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setQ(valor.trim() || null), 250);
  }

  function aplicar(valor: string) {
    if (timer.current) clearTimeout(timer.current);
    setTexto(valor);
    setQ(valor.trim() || null);
  }

  return (
    <div className="space-y-5">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          aplicar(texto);
        }}
      >
        <label htmlFor="buscar-q" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Buscar en todos los grupos
        </label>
        <input
          id="buscar-q"
          type="search"
          ref={(el) => {
            if (el && window.matchMedia('(pointer: fine)').matches) el.focus();
          }}
          value={texto}
          onChange={(e) => programar(e.target.value)}
          placeholder="Ej.: nefridios, notocorda, larva trocófora…"
          className="w-full max-w-xl rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none dark:border-zinc-700"
        />
      </form>

      {(!q || q.trim() === '') && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <span>Sugerencias:</span>
          {SUGERENCIAS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => aplicar(s)}
              className="min-h-[40px] rounded-md border border-zinc-300 px-3 py-1.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-zinc-700 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {q && q.trim() !== '' && resultadosVisibles.length === 0 && (
        <p className="text-sm text-zinc-500">No se encontraron resultados para «{q}».</p>
      )}

      {resultadosVisibles.length > 0 && (
        <p className="text-sm text-zinc-500">{resultadosVisibles.length} grupos encontrados</p>
      )}

      <ul className="space-y-4">
        {resultadosVisibles.map((r) => (
          <li key={r.slug} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <RankBadge nivel={r.nivel} />
              <Link href={`/grupo/${r.slug}`} className="font-semibold hover:text-emerald-700 dark:hover:text-emerald-400">
                {r.taxonNombre}
              </Link>
            </div>
            <ul className="mt-3 space-y-2">
              {r.coincidencias.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/grupo/${r.slug}${c.ancla ? `#${c.ancla}` : ''}`}
                    className="block rounded px-2.5 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  >
                    <span className="font-semibold">{c.seccionLabel}</span>
                    {c.soloExterno && (
                      <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[11px] font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                        Externo
                      </span>
                    )}
                    <span className="mt-0.5 block text-zinc-600 dark:text-zinc-400">
                      {resaltar(fragmento(c.texto, q ?? ''), q ?? '').map((s, i) =>
                        s.marcado ? <mark key={i} className="bg-emerald-200/70 dark:bg-emerald-800/60">{s.texto}</mark> : s.texto,
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
