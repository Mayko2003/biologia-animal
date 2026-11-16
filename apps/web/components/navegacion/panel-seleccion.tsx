'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { buscarNodo, esGrupoSuperior, phylaDe, rutaHasta } from '@/lib/arbol';
import type { NodoArbol } from '@/lib/types';
import { RankBadge } from '@/components/taxon/rank-badge';
import { BOTON, BOTON_PRIMARIO } from '@/components/ui/clases';
import { IconoCerrar } from '@/components/ui/iconos';
import { useEsEscritorio } from '@/components/ui/use-media';

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
            className="ml-auto min-h-[40px] rounded border border-zinc-300 px-3 py-1 text-xs text-zinc-600 hover:border-emerald-400 dark:border-zinc-700 dark:text-zinc-400"
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

function ContenidoPanel({
  arbol,
  nodo,
  onSeleccionar,
}: {
  arbol: NodoArbol;
  nodo: NodoArbol;
  onSeleccionar: (slug: string) => void;
}) {
  return (
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

      <Link href={`/grupo/${nodo.slug}`} className={BOTON_PRIMARIO}>
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
              <button type="button" onClick={() => onSeleccionar(padre.slug)} className={BOTON}>
                Ver grupo superior
              </button>
            ) : null;
          })()}
        </div>
      )}
    </div>
  );
}

function SheetMovil({ onCerrar, children }: { onCerrar: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onCerrar]);

  return (
    <>
      <div aria-hidden="true" onClick={onCerrar} className="fixed inset-0 z-40 bg-black/40" />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Grupo seleccionado"
        tabIndex={-1}
        className="fixed inset-x-0 bottom-0 z-50 max-h-[75dvh] overflow-auto rounded-t-2xl border-t border-zinc-200 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div aria-hidden="true" className="mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <button
          type="button"
          aria-label="Cerrar panel"
          onClick={onCerrar}
          className="absolute right-3 top-3 rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          <IconoCerrar />
        </button>
        {children}
      </div>
    </>
  );
}

export function PanelSeleccion({
  arbol,
  slug,
  onSeleccionar,
}: {
  arbol: NodoArbol;
  slug: string | null;
  onSeleccionar: (slug: string | null) => void;
}) {
  const escritorio = useEsEscritorio();
  const nodo = slug ? buscarNodo(arbol, slug) : undefined;

  if (!nodo) {
    return (
      <aside
        aria-label="Grupo seleccionado"
        className="rounded-lg border border-zinc-200 p-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto dark:border-zinc-800"
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Seleccioná un grupo para ver sus clases y acceder a su ficha.
        </p>
      </aside>
    );
  }

  if (escritorio) {
    return (
      <aside
        aria-label="Grupo seleccionado"
        className="rounded-lg border border-zinc-200 p-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto dark:border-zinc-800"
      >
        <ContenidoPanel arbol={arbol} nodo={nodo} onSeleccionar={onSeleccionar} />
      </aside>
    );
  }

  return (
    <SheetMovil onCerrar={() => onSeleccionar(null)}>
      <div className="pr-10">
        <ContenidoPanel arbol={arbol} nodo={nodo} onSeleccionar={onSeleccionar} />
      </div>
    </SheetMovil>
  );
}
