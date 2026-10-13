'use client';

import Link from 'next/link';
import { buscarNodo, esGrupoSuperior, phylaDe, rutaHasta } from '@/lib/arbol';
import type { NodoArbol } from '@/lib/types';
import { RankBadge } from '@/components/taxon/rank-badge';

function ItemSubgrupo({ nodo, onSeleccionar }: { nodo: NodoArbol; onSeleccionar: (slug: string) => void }) {
  return (
    <li>
      <div className="flex items-center gap-1.5">
        <RankBadge nivel={nodo.nivel} />
        <Link href={`/grupo/${nodo.slug}`} className="text-sm font-medium hover:text-emerald-700 hover:underline dark:hover:text-emerald-400">
          {nodo.nombre}
        </Link>
        {nodo.nombreComun && <span className="text-xs text-zinc-500 dark:text-zinc-400">{nodo.nombreComun}</span>}
        {nodo.hijos.length > 0 && (
          <button
            type="button"
            aria-label={`Ver clases de ${nodo.nombre}`}
            onClick={() => onSeleccionar(nodo.slug)}
            className="ml-auto rounded border border-zinc-300 px-1.5 py-0.5 text-[11px] text-zinc-600 hover:border-emerald-400 dark:border-zinc-700 dark:text-zinc-400"
          >
            Ver clases
          </button>
        )}
      </div>
      {nodo.hijos.length > 0 && (
        <ul className="mt-1 space-y-1 border-l pl-4">
          {nodo.hijos.map((h) => (
            <ItemSubgrupo key={h.slug} nodo={h} onSeleccionar={onSeleccionar} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function PanelSeleccion({
  arbol,
  slug,
  onSeleccionar,
}: {
  arbol: NodoArbol;
  slug: string | null;
  onSeleccionar: (slug: string) => void;
}) {
  const nodo = slug ? buscarNodo(arbol, slug) : undefined;

  return (
    <aside
      aria-label="Grupo seleccionado"
      className="rounded-lg border border-zinc-200 p-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto dark:border-zinc-800"
    >
      {!nodo ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Seleccioná un grupo para ver sus clases y acceder a su ficha.
        </p>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <RankBadge nivel={nodo.nivel} />
            <h2 className="text-xl font-semibold">{nodo.nombre}</h2>
          </div>
          {nodo.nombreComun && <p className="text-sm text-zinc-500 dark:text-zinc-400">{nodo.nombreComun}</p>}

          {(() => {
            const ruta = rutaHasta(arbol, nodo.slug).slice(0, -1);
            return ruta.length > 0 ? (
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {ruta.map((a, i) => (
                  <span key={a.slug}>
                    {i > 0 && ' › '}
                    <button type="button" onClick={() => onSeleccionar(a.slug)} className="hover:underline">
                      {a.nombre}
                    </button>
                  </span>
                ))}
              </p>
            ) : null;
          })()}

          {nodo.resumenCorto && <p className="text-sm text-zinc-600 dark:text-zinc-300">{nodo.resumenCorto}</p>}

          <Link
            href={`/grupo/${nodo.slug}`}
            className="inline-block rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Ver ficha completa
          </Link>

          {esGrupoSuperior(nodo.nivel) ? (
            <div>
              <p className="text-sm font-medium">Phyla incluidos ({phylaDe(nodo).length})</p>
              <ul className="mt-1 space-y-1">
                {phylaDe(nodo).map((p) => (
                  <ItemSubgrupo key={p.slug} nodo={p} onSeleccionar={onSeleccionar} />
                ))}
              </ul>
            </div>
          ) : nodo.hijos.length > 0 ? (
            <div>
              <p className="text-sm font-medium">
                {nodo.hijos.every((h) => h.nivel === 'clase') ? 'Clases disponibles' : 'Subgrupos disponibles'}
              </p>
              <ul className="mt-1 space-y-1">
                {nodo.hijos.map((h) => (
                  <ItemSubgrupo key={h.slug} nodo={h} onSeleccionar={onSeleccionar} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Este grupo no tiene clases en el material.</p>
              {(() => {
                const ruta = rutaHasta(arbol, nodo.slug);
                const padre = ruta[ruta.length - 2];
                return padre ? (
                  <button
                    type="button"
                    onClick={() => onSeleccionar(padre.slug)}
                    className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:border-emerald-400 dark:border-zinc-700"
                  >
                    Ver grupo superior
                  </button>
                ) : null;
              })()}
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
