'use client';

import { hierarchy, tree } from 'd3-hierarchy';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { NodoMapa } from '@/lib/types';

const ANCHO_NODO = 210;
const ALTO_NODO = 84;
const FILA = 100;
const COLUMNA = 260;
const MARGEN = 16;

export function MapaConceptual({
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
  const [escala, setEscala] = useState(1);
  const refs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    if (!seleccionado) return;
    refs.current.get(seleccionado)?.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
  }, [seleccionado]);

  const layout = useMemo(() => {
    const raiz = hierarchy(mapa, (d) => d.hijos);
    tree<NodoMapa>().nodeSize([FILA, COLUMNA])(raiz);
    const nodos = raiz.descendants();
    const xs = nodos.map((n) => n.x ?? 0);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const profundidad = Math.max(...nodos.map((n) => n.y ?? 0)) / COLUMNA;
    return {
      raiz,
      nodos,
      minX,
      ancho: profundidad * COLUMNA + ANCHO_NODO + 2 * MARGEN,
      alto: maxX - minX + ALTO_NODO + 2 * MARGEN,
    };
  }, [mapa]);

  const pos = (n: (typeof layout.nodos)[number]) => ({
    left: (n.y ?? 0) + MARGEN,
    top: (n.x ?? 0) - layout.minX + MARGEN,
  });

  return (
    <div className="space-y-3">
      <div className="flex gap-1" role="group" aria-label="Zoom del mapa">
        <button
          type="button"
          aria-label="Alejar"
          onClick={() => setEscala((e) => Math.max(0.6, Math.round((e - 0.1) * 10) / 10))}
          className="rounded-md border border-zinc-300 px-2 py-1 text-sm dark:border-zinc-700"
        >
          −
        </button>
        <button
          type="button"
          aria-label="Restablecer zoom"
          onClick={() => setEscala(1)}
          className="rounded-md border border-zinc-300 px-2 py-1 text-xs dark:border-zinc-700"
        >
          100%
        </button>
        <button
          type="button"
          aria-label="Acercar"
          onClick={() => setEscala((e) => Math.min(1.4, Math.round((e + 0.1) * 10) / 10))}
          className="rounded-md border border-zinc-300 px-2 py-1 text-sm dark:border-zinc-700"
        >
          +
        </button>
      </div>

      <div className="overflow-auto max-h-[75vh] rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div style={{ width: layout.ancho * escala, height: layout.alto * escala }}>
          <div className="relative" style={{ width: layout.ancho, height: layout.alto, transform: `scale(${escala})`, transformOrigin: '0 0' }}>
            <svg className="absolute inset-0" width={layout.ancho} height={layout.alto} aria-hidden>
              {layout.raiz.links().map((l) => {
                const p = pos(l.source);
                const h = pos(l.target);
                const x0 = p.left + ANCHO_NODO;
                const y0 = p.top + ALTO_NODO / 2;
                const x1 = h.left;
                const y1 = h.top + ALTO_NODO / 2;
                return (
                  <path
                    key={`${l.source.data.id}-${l.target.data.id}`}
                    d={`M${x0},${y0}C${(x0 + x1) / 2},${y0} ${(x0 + x1) / 2},${y1} ${x1},${y1}`}
                    fill="none"
                    className="stroke-zinc-300 dark:stroke-zinc-700"
                  />
                );
              })}
            </svg>
            {layout.nodos.map((n) => {
              const d = n.data;
              const { left, top } = pos(n);
              const esHoja = d.hijos.length === 0;
              const sel = d.taxon !== undefined && d.taxon === seleccionado;
              const estilo = esHoja && estiloHoja && d.taxon ? estiloHoja(d.taxon) : {};
              return (
                <button
                  key={d.id}
                  type="button"
                  ref={(el) => {
                    if (el && d.taxon) refs.current.set(d.taxon, el);
                  }}
                  aria-pressed={sel}
                  title={d.descripcion?.texto}
                  onClick={() => d.taxon && onSeleccionar(d.taxon)}
                  className={`absolute flex flex-col justify-center gap-0.5 rounded-lg px-3 py-2 text-left ${
                    esHoja
                      ? 'bg-emerald-50 border border-emerald-300 dark:bg-emerald-950 dark:border-emerald-800'
                      : 'bg-white border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700'
                  } ${sel ? 'ring-2 ring-emerald-500' : ''}`}
                  style={{
                    left,
                    top,
                    width: ANCHO_NODO,
                    height: ALTO_NODO,
                    ...(estilo.color
                      ? { borderColor: estilo.color, backgroundColor: `${estilo.color}22` }
                      : {}),
                  }}
                >
                  {estilo.color && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full rounded-l-lg"
                      style={{ width: 6, backgroundColor: estilo.color }}
                    />
                  )}
                  {d.criterio && (
                    <span className="text-[11px] leading-tight text-zinc-500 line-clamp-2 dark:text-zinc-400">
                      {d.criterio}
                    </span>
                  )}
                  <span className="font-semibold text-sm">{d.titulo}</span>
                  {estilo.etiqueta ? (
                    <span
                      className="w-fit rounded-full px-1.5 py-0.5 text-[10px] font-medium text-white"
                      style={{ backgroundColor: estilo.color }}
                    >
                      {estilo.etiqueta}
                    </span>
                  ) : (
                    d.subtitulo && (
                      <span className="text-xs text-zinc-500 truncate dark:text-zinc-400">{d.subtitulo}</span>
                    )
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Caja blanca = grupo definido por un criterio embrionario · Caja verde = phylum
      </p>
    </div>
  );
}
