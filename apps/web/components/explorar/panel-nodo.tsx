'use client';

import Link from 'next/link';
import { RankBadge } from '@/components/taxon/rank-badge';
import { IconoCerrar } from '@/components/ui/iconos';
import { CRITERIO_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
import { colorNodo, LINAJE_LABEL, type NodoRed } from '@/lib/red';
import { CRITERIOS } from '@/lib/types';

const MAX_SUBGRUPOS = 12;

function Chip({ nodo, onSeleccionar }: { nodo: NodoRed; onSeleccionar: (id: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSeleccionar(nodo.id)}
      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 transition-colors hover:border-helecho hover:text-helecho"
    >
      <span aria-hidden="true" className="size-2 rounded-full" style={{ background: colorNodo(nodo, 'linaje') }} />
      {nodo.nombre}
    </button>
  );
}

export function PanelNodo({
  nodo,
  padre,
  hijos,
  rasgos,
  onSeleccionar,
  onCerrar,
}: {
  nodo: NodoRed;
  padre?: NodoRed;
  hijos: NodoRed[];
  rasgos: NodoRed[];
  onSeleccionar: (id: string) => void;
  onCerrar: () => void;
}) {
  const esRasgo = nodo.tipo === 'rasgo';
  return (
    <aside
      aria-labelledby="panel-nodo-titulo"
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-30 max-h-[55dvh] overflow-y-auto rounded-t-2xl border-t border-zinc-200 bg-white/95 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(22,42,56,0.12)] backdrop-blur lg:inset-x-auto lg:bottom-auto lg:right-4 lg:top-4 lg:max-h-[calc(100dvh-2rem)] lg:w-[22rem] lg:rounded-2xl lg:border lg:shadow-[0_8px_30px_rgba(22,42,56,0.12)]"
      onKeyDown={(e) => e.key === 'Escape' && onCerrar()}
    >
      <button
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar panel"
        className="absolute right-3 top-3 rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
      >
        <IconoCerrar className="size-4" />
      </button>

      <div className="space-y-1.5 pr-8">
        {esRasgo ? (
          <p className="text-xs font-medium text-zinc-500">
            Rasgo embrionario: {CRITERIO_LABEL[nodo.rasgo!.criterio].toLowerCase()}
          </p>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <RankBadge nivel={nodo.nivel!} />
            {nodo.linaje && <span className="text-xs text-zinc-500">{LINAJE_LABEL[nodo.linaje]}</span>}
          </div>
        )}
        <h2 id="panel-nodo-titulo" className="font-display text-2xl font-semibold leading-tight text-tinta">
          {nodo.nombre}
        </h2>
        {nodo.nombreComun && <p className="text-zinc-500">{nodo.nombreComun}</p>}
      </div>

      {nodo.criterio && (
        <p className="mt-4 border-l-2 border-helecho pl-3 text-sm text-zinc-700">
          <span className="block text-xs font-medium text-zinc-500">Criterio del mapa embrionario</span>
          {nodo.criterio}
        </p>
      )}

      {nodo.resumen && <p className="mt-4 text-sm leading-relaxed text-zinc-600">{nodo.resumen}</p>}

      {!esRasgo && Object.keys(nodo.rasgos).length > 0 && (
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {CRITERIOS.filter((c) => nodo.rasgos[c]).map((c) => (
            <div key={c}>
              <dt className="text-xs text-zinc-500">{CRITERIO_LABEL[c]}</dt>
              <dd className="text-zinc-800">{VALOR_LABEL[nodo.rasgos[c]!]}</dd>
            </div>
          ))}
        </dl>
      )}

      {padre && (
        <div className="mt-5">
          <h3 className="text-xs font-medium text-zinc-500">Pertenece a</h3>
          <div className="mt-1.5">
            <Chip nodo={padre} onSeleccionar={onSeleccionar} />
          </div>
        </div>
      )}

      {hijos.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-medium text-zinc-500">
            {esRasgo ? 'Phyla con este rasgo' : 'Subgrupos'} ({hijos.length})
          </h3>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {hijos.slice(0, MAX_SUBGRUPOS).map((h) => (
              <li key={h.id}>
                <Chip nodo={h} onSeleccionar={onSeleccionar} />
              </li>
            ))}
            {hijos.length > MAX_SUBGRUPOS && (
              <li className="self-center text-sm text-zinc-500">y {hijos.length - MAX_SUBGRUPOS} más</li>
            )}
          </ul>
        </div>
      )}

      {rasgos.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-medium text-zinc-500">Comparte rasgos con otros phyla</h3>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {rasgos.map((r) => (
              <li key={r.id}>
                <Chip nodo={r} onSeleccionar={onSeleccionar} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {!esRasgo && (
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href={`/grupo/${nodo.id}`}
            className="landing-presion inline-flex min-h-[44px] items-center rounded-full bg-tinta px-5 py-2.5 text-sm font-medium text-white hover:bg-helecho"
          >
            Abrir la ficha
          </Link>
          <Link
            href={`/comparar?a=${nodo.id}`}
            className="landing-presion inline-flex min-h-[44px] items-center rounded-full border border-tinta/30 px-5 py-2.5 text-sm font-medium text-tinta hover:border-helecho hover:text-helecho"
          >
            Comparar con…
          </Link>
        </div>
      )}
    </aside>
  );
}
