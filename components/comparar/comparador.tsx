'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParametro } from '@/components/navegacion/use-seleccion';
import { RankBadge } from '@/components/taxon/rank-badge';
import { comparar } from '@/lib/comparacion';
import { crearConsultas } from '@/lib/consultas';
import { NIVEL_LABEL } from '@/lib/etiquetas';
import type { Taxon } from '@/lib/types';
import { CeldaView } from './celda';
import { SelectorTaxon, type GrupoOpciones } from './selector-taxon';

const GRUPOS_SOLO_DIFERENCIAS = new Set(['Desarrollo embrionario', 'Sistemas']);

function nombres(t: Taxon) {
  return t.nombre;
}

export function Comparador({ taxa, opciones }: { taxa: readonly Taxon[]; opciones: GrupoOpciones[] }) {
  const [a, setA] = useParametro('a');
  const [b, setB] = useParametro('b');
  const [soloDiferencias, setSoloDiferencias] = useState(false);
  const consultas = useMemo(() => crearConsultas(taxa), [taxa]);

  const taxonA = a ? consultas.getTaxon(a) : undefined;
  const taxonB = b ? consultas.getTaxon(b) : undefined;

  const c = useMemo(
    () => (taxonA && taxonB && a !== b ? comparar(a!, b!, consultas) : null),
    [taxonA, taxonB, a, b, consultas],
  );

  let aviso: string | null = null;
  if (!a || !b) aviso = 'Elegí dos grupos o clases para comparar.';
  else if (!taxonA || !taxonB) aviso = 'Grupo inexistente en la dirección de la página.';
  else if (a === b) aviso = 'Elegí dos grupos distintos.';

  const gruposOrdenados = c
    ? [...new Set(c.filas.map((f) => f.grupo))]
    : [];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <SelectorTaxon id="sel-a" label="Grupo A" valor={a} opciones={opciones} onCambiar={setA} />
        <button
          type="button"
          aria-label="Intercambiar A y B"
          onClick={() => {
            const na = b;
            const nb = a;
            setA(na);
            setB(nb);
          }}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm hover:border-emerald-400 hover:text-emerald-700 dark:border-zinc-700 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
        >
          ⇄ Intercambiar
        </button>
        <SelectorTaxon id="sel-b" label="Grupo B" valor={b} opciones={opciones} onCambiar={setB} />
      </div>

      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={soloDiferencias}
          onChange={(e) => setSoloDiferencias(e.target.checked)}
          className="accent-emerald-600"
        />
        Mostrar solo diferencias
      </label>

      {aviso && <p className="text-sm text-zinc-500">{aviso}</p>}

      {c && (
        <>
          <div className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
            <p>
              Ancestro común:{' '}
              <Link href={`/grupo/${c.ancestroComun.slug}`} className="font-semibold text-emerald-700 hover:underline dark:text-emerald-400">
                {c.ancestroComun.nombre}
              </Link>{' '}
              <span className="text-zinc-500">({NIVEL_LABEL[c.ancestroComun.nivel]})</span>
            </p>
            {c.rutaB.some((t) => t.slug === c.a.slug) ? (
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {c.a.nombre} incluye a {c.b.nombre} ({c.rutaB.map(nombres).join(' › ')})
              </p>
            ) : c.rutaA.some((t) => t.slug === c.b.slug) ? (
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {c.b.nombre} incluye a {c.a.nombre} ({c.rutaA.map(nombres).join(' › ')})
              </p>
            ) : (
              <>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">A: {c.rutaA.map(nombres).join(' › ') || '—'}</p>
                <p className="text-zinc-600 dark:text-zinc-400">B: {c.rutaB.map(nombres).join(' › ') || '—'}</p>
              </>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Cuadro comparativo entre {c.a.nombre} y {c.b.nombre}
              </caption>
              <thead className="sticky top-14 bg-white dark:bg-zinc-950">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="w-44 py-2 pr-3 text-sm font-semibold">Característica</th>
                  <th className="py-2 pr-3">
                    <div className="flex items-center gap-2">
                      <RankBadge nivel={c.a.nivel} />
                      <Link href={`/grupo/${c.a.slug}`} className="font-semibold hover:text-emerald-700 dark:hover:text-emerald-400">
                        {c.a.nombre}
                      </Link>
                    </div>
                  </th>
                  <th className="py-2">
                    <div className="flex items-center gap-2">
                      <RankBadge nivel={c.b.nivel} />
                      <Link href={`/grupo/${c.b.slug}`} className="font-semibold hover:text-emerald-700 dark:hover:text-emerald-400">
                        {c.b.nombre}
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {gruposOrdenados.map((g) => {
                  const filas = c.filas.filter(
                    (f) => f.grupo === g && !(soloDiferencias && GRUPOS_SOLO_DIFERENCIAS.has(g) && !f.distinto),
                  );
                  if (filas.length === 0) return null;
                  return [
                    <tr key={`g-${g}`} className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
                      <th colSpan={3} scope="colgroup" className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {g}
                      </th>
                    </tr>,
                    ...filas.map((f) => (
                      <tr
                        key={f.id}
                        className={`border-b border-zinc-100 align-top dark:border-zinc-800/60 ${
                          f.distinto ? 'bg-amber-50 dark:bg-amber-950/30' : ''
                        }`}
                      >
                        <th scope="row" className="py-2 pr-3 text-sm font-medium">
                          <span className="flex items-center gap-1.5">
                            {f.distinto && <span className="h-2 w-2 rounded-full bg-amber-500" aria-label="Difiere" role="img" />}
                            {f.etiqueta}
                          </span>
                        </th>
                        <td className="py-2 pr-3"><CeldaView celda={f.a} /></td>
                        <td className="py-2"><CeldaView celda={f.b} /></td>
                      </tr>
                    )),
                  ];
                })}
              </tbody>
            </table>
          </div>

          <p className="text-sm">
            <Link href={`/grupo/${c.a.slug}`} className="text-emerald-700 hover:underline dark:text-emerald-400">
              Ver ficha de {c.a.nombre}
            </Link>
            {' · '}
            <Link href={`/grupo/${c.b.slug}`} className="text-emerald-700 hover:underline dark:text-emerald-400">
              Ver ficha de {c.b.nombre}
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
