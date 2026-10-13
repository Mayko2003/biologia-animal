'use client';

import type { NodoMapa } from '@/lib/types';

function ItemMapa({
  nodo,
  seleccionado,
  onSeleccionar,
  estiloHoja,
}: {
  nodo: NodoMapa;
  seleccionado: string | null;
  onSeleccionar: (slug: string) => void;
  estiloHoja?: (taxon: string) => { color?: string; etiqueta?: string };
}) {
  const esHoja = nodo.hijos.length === 0;
  const sel = nodo.taxon !== undefined && nodo.taxon === seleccionado;
  const estilo = esHoja && estiloHoja && nodo.taxon ? estiloHoja(nodo.taxon) : {};

  return (
    <li>
      <button
        type="button"
        aria-pressed={sel}
        title={nodo.descripcion?.texto}
        onClick={() => nodo.taxon && onSeleccionar(nodo.taxon)}
        className={`relative flex min-h-[44px] w-full items-center rounded-lg border px-3 py-2 text-left ${
          esHoja
            ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950 dark:border-emerald-800'
            : 'bg-white border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700'
        } ${sel ? 'ring-2 ring-emerald-500' : ''}`}
        style={
          estilo.color ? { borderColor: estilo.color, backgroundColor: `${estilo.color}22` } : undefined
        }
      >
        {estilo.color && (
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg"
            style={{ backgroundColor: estilo.color }}
          />
        )}
        <span className="min-w-0">
          {nodo.criterio && (
            <span className="block text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
              {nodo.criterio}
            </span>
          )}
          <span className="block font-semibold text-sm">{nodo.titulo}</span>
          {estilo.etiqueta ? (
            <span
              className="mt-0.5 inline-block w-fit rounded-full px-1.5 py-0.5 text-[10px] font-medium text-white"
              style={{ backgroundColor: estilo.color }}
            >
              {estilo.etiqueta}
            </span>
          ) : (
            nodo.subtitulo && (
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">{nodo.subtitulo}</span>
            )
          )}
        </span>
      </button>
      {nodo.hijos.length > 0 && (
        <ul className="ml-4 mt-1 space-y-1 border-l border-zinc-200 pl-3 dark:border-zinc-800">
          {nodo.hijos.map((h) => (
            <ItemMapa
              key={h.id}
              nodo={h}
              seleccionado={seleccionado}
              onSeleccionar={onSeleccionar}
              estiloHoja={estiloHoja}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function MapaLista({
  mapa,
  seleccionado,
  onSeleccionar,
  estiloHoja,
}: {
  mapa: NodoMapa;
  seleccionado: string | null;
  onSeleccionar: (slug: string) => void;
  estiloHoja?: (taxon: string) => { color?: string; etiqueta?: string };
}) {
  return (
    <div className="space-y-3">
      <ul className="space-y-1">
        <ItemMapa
          nodo={mapa}
          seleccionado={seleccionado}
          onSeleccionar={onSeleccionar}
          estiloHoja={estiloHoja}
        />
      </ul>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Caja blanca = grupo definido por un criterio embrionario · Caja verde = phylum
      </p>
    </div>
  );
}
