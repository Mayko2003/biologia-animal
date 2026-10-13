'use client';

import { hierarchy, tree } from 'd3-hierarchy';
import { useEffect, useMemo, useRef, useState } from 'react';
import { aplanar, rutaHasta } from '@/lib/arbol';
import { NIVEL_COLOR_HEX, NIVEL_LABEL } from '@/lib/etiquetas';
import type { NodoArbol } from '@/lib/types';

const FILA = 30;
const COLUMNA = 200;
const MARGEN = 24;
const RADIO = 6;

export function ArbolGrafico({
  arbol,
  seleccionado,
  onSeleccionar,
}: {
  arbol: NodoArbol;
  seleccionado: string | null;
  onSeleccionar: (slug: string) => void;
}) {
  const colapsoInicial = () => {
    const set = new Set(
      aplanar(arbol)
        .filter((n) => n.nivel === 'phylum' && n.hijos.length > 0)
        .map((n) => n.slug),
    );
    if (seleccionado) rutaHasta(arbol, seleccionado).forEach((n) => set.delete(n.slug));
    return set;
  };
  const [previo, setPrevio] = useState(seleccionado);
  const [colapsados, setColapsados] = useState<Set<string>>(colapsoInicial);
  const refs = useRef(new Map<string, SVGGElement>());

  if (seleccionado !== previo) {
    setPrevio(seleccionado);
    if (seleccionado) {
      const nuevo = new Set(colapsados);
      rutaHasta(arbol, seleccionado).forEach((n) => nuevo.delete(n.slug));
      setColapsados(nuevo);
    }
  }

  useEffect(() => {
    if (!seleccionado) return;
    refs.current.get(seleccionado)?.scrollIntoView({ block: 'center', inline: 'center' });
  }, [seleccionado]);

  const layout = useMemo(() => {
    const raiz = hierarchy(arbol, (d) => (colapsados.has(d.slug) ? null : d.hijos));
    tree<NodoArbol>().nodeSize([FILA, COLUMNA])(raiz);
    const nodos = raiz.descendants();
    const xs = nodos.map((n) => n.x ?? 0);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const profundidad = Math.max(...nodos.map((n) => n.y ?? 0)) / COLUMNA;
    return {
      raiz,
      nodos,
      ancho: (profundidad + 1) * COLUMNA + 160,
      alto: maxX - minX + 2 * MARGEN,
      minX,
    };
  }, [arbol, colapsados]);

  const rutaSeleccionado = useMemo(
    () => new Set(seleccionado ? rutaHasta(arbol, seleccionado).map((n) => n.slug) : []),
    [arbol, seleccionado],
  );

  function toggle(slug: string) {
    const nuevo = new Set(colapsados);
    if (nuevo.has(slug)) nuevo.delete(slug);
    else nuevo.add(slug);
    setColapsados(nuevo);
  }

  const nivelesPresentes = [...new Set(aplanar(arbol).map((n) => n.nivel))];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setColapsados(new Set())}
          className="rounded-md border border-zinc-300 px-2 py-1.5 text-xs hover:border-emerald-400 dark:border-zinc-700"
        >
          Expandir todo
        </button>
        <button
          type="button"
          onClick={() => setColapsados(colapsoInicial())}
          className="rounded-md border border-zinc-300 px-2 py-1.5 text-xs hover:border-emerald-400 dark:border-zinc-700"
        >
          Colapsar a phyla
        </button>
      </div>
      <div className="overflow-auto max-h-[75vh] rounded-lg border border-zinc-200 dark:border-zinc-800">
        <svg width={layout.ancho} height={layout.alto} role="img" aria-label="Dendrograma taxonómico">
          {layout.raiz.links().map((l) => {
            const x0 = (l.source.y ?? 0) + MARGEN;
            const y0 = (l.source.x ?? 0) - layout.minX + MARGEN;
            const x1 = (l.target.y ?? 0) + MARGEN;
            const y1 = (l.target.x ?? 0) - layout.minX + MARGEN;
            const enRuta = rutaSeleccionado.has(l.source.data.slug) && rutaSeleccionado.has(l.target.data.slug);
            return (
              <path
                key={`${l.source.data.slug}-${l.target.data.slug}`}
                d={`M${x0},${y0}C${(x0 + x1) / 2},${y0} ${(x0 + x1) / 2},${y1} ${x1},${y1}`}
                fill="none"
                className={enRuta ? 'stroke-emerald-500' : 'stroke-zinc-300 dark:stroke-zinc-700'}
                strokeWidth={enRuta ? 2 : 1}
              />
            );
          })}
          {layout.nodos.map((n) => {
            const d = n.data;
            const x = (n.y ?? 0) + MARGEN;
            const y = (n.x ?? 0) - layout.minX + MARGEN;
            const colapsado = colapsados.has(d.slug);
            const sel = seleccionado === d.slug;
            return (
              <g
                key={d.slug}
                transform={`translate(${x},${y})`}
                ref={(el) => {
                  if (el) refs.current.set(d.slug, el);
                  else refs.current.delete(d.slug);
                }}
              >
                {d.hijos.length > 0 ? (
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label={colapsado ? `Expandir ${d.nombre}` : `Colapsar ${d.nombre}`}
                    onClick={() => toggle(d.slug)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggle(d.slug);
                      }
                    }}
                    className="cursor-pointer"
                  >
                    <circle
                      r={RADIO}
                      fill={colapsado ? '#fff' : NIVEL_COLOR_HEX[d.nivel]}
                      stroke={NIVEL_COLOR_HEX[d.nivel]}
                      strokeWidth={colapsado ? 2 : 0}
                    />
                    {colapsado && (
                      <text x={-RADIO - 4} dy="0.32em" textAnchor="end" className="fill-zinc-500 text-[10px]">
                        +{d.hijos.length}
                      </text>
                    )}
                  </g>
                ) : (
                  <circle r={RADIO} fill={NIVEL_COLOR_HEX[d.nivel]} />
                )}
                <text
                  x={RADIO + 6}
                  dy="0.32em"
                  className={`fill-zinc-800 dark:fill-zinc-100 text-[12px] cursor-pointer ${sel ? 'font-semibold' : ''}`}
                  onClick={() => onSeleccionar(d.slug)}
                >
                  <title>{`${NIVEL_LABEL[d.nivel]} · ${d.nombreComun ?? ''}`}</title>
                  {d.nombre}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <ul className="flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400">
        {nivelesPresentes.map((n) => (
          <li key={n} className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: NIVEL_COLOR_HEX[n] }} />
            {NIVEL_LABEL[n]}
          </li>
        ))}
      </ul>
    </div>
  );
}
