'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { RankBadge } from '@/components/taxon/rank-badge';
import { BarraLateral, BOTON_RIEL } from '@/components/layout/barra-lateral';
import { IconoBuscar } from '@/components/ui/iconos';
import { fragmento, resaltar, type ResultadoTaxon } from '@/lib/busqueda';
import { COLOR_VALOR, CRITERIO_LABEL, NIVEL_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
import { LINAJE_COLOR, LINAJE_LABEL, LINAJES, leyenda, OPCIONES_COLOR, type ColorPor, type Filtros } from '@/lib/red';
import { CRITERIOS, type CriterioId, type Nivel, type ValorCriterio } from '@/lib/types';

const SUGERENCIAS = ['nefridios', 'notocorda', 'trocófora', 'hemolinfa'];

export type OpcionesFiltro = {
  niveles: { valor: Nivel; n: number }[];
  linajes: Record<string, number>;
  rasgos: Record<CriterioId, { valor: ValorCriterio; n: number }[]>;
};

function Opcion({
  activo,
  onClick,
  color,
  children,
  n,
}: {
  activo: boolean;
  onClick: () => void;
  color?: string;
  children: React.ReactNode;
  n: number;
}) {
  return (
    <button
      type="button"
      aria-pressed={activo}
      onClick={onClick}
      className={`landing-presion inline-flex min-h-[36px] items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${
        activo
          ? 'border-tinta bg-tinta text-white'
          : 'border-zinc-200 bg-white text-zinc-700 hover:border-helecho hover:text-helecho'
      }`}
    >
      {color && <span aria-hidden="true" className="size-2 rounded-full" style={{ background: color }} />}
      {children}
      <span className={`text-xs ${activo ? 'text-white/70' : 'text-zinc-400'}`}>{n}</span>
    </button>
  );
}

export function MenuLateral({
  abierto,
  onAlternar,
  texto,
  onTexto,
  onBuscar,
  q,
  resultados,
  onUbicar,
  filtros,
  opciones,
  onFiltro,
  onLimpiar,
  cumplen,
  total,
  colorPor,
  onColorPor,
}: {
  abierto: boolean;
  onAlternar: (abrir: boolean) => void;
  texto: string;
  onTexto: (v: string) => void;
  onBuscar: (v: string) => void;
  q: string | null;
  resultados: ResultadoTaxon[];
  onUbicar: (slug: string) => void;
  filtros: Filtros;
  opciones: OpcionesFiltro;
  onFiltro: (clave: 'linaje' | 'nivel' | CriterioId, valor: string) => void;
  onLimpiar: () => void;
  cumplen: number | null;
  total: number;
  colorPor: ColorPor;
  onColorPor: (c: ColorPor) => void;
}) {
  const entrada = useRef<HTMLInputElement>(null);
  const hayBusqueda = !!q && q.trim() !== '';

  function abrirYEnfocar() {
    onAlternar(true);
    requestAnimationFrame(() => entrada.current?.focus());
  }

  return (
    <BarraLateral
      id="menu-explorar"
      abierto={abierto}
      onAlternar={onAlternar}
      actual="explorar"
      riel={
        <button type="button" onClick={abrirYEnfocar} aria-label="Buscar" className={BOTON_RIEL}>
          <IconoBuscar className="size-5" />
        </button>
      }
    >
      <div className="space-y-6">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onBuscar(texto);
          }}
        >
          <label htmlFor="buscar-q" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Buscar en todos los grupos
          </label>
          <input
            id="buscar-q"
            ref={entrada}
            type="search"
            value={texto}
            onChange={(e) => onTexto(e.target.value)}
            placeholder="Nombre o término: nefridios, Annelida…"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-helecho focus:outline-none"
          />
        </form>

        {!hayBusqueda && (
          <div className="space-y-2 text-sm text-zinc-500">
            <p>
              Si hay un solo resultado, la red te lleva a ese grupo. Si hay varios, se ocultan los que no coinciden.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SUGERENCIAS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onBuscar(s)}
                  className="min-h-[36px] rounded-full border border-zinc-200 px-3 py-1 text-zinc-600 hover:border-helecho hover:text-helecho"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {hayBusqueda && (
          <section aria-label="Resultados" className="space-y-3">
            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-zinc-600">
                {resultados.length === 0
                  ? `Sin resultados para «${q}».`
                  : `${resultados.length} ${resultados.length === 1 ? 'grupo encontrado' : 'grupos encontrados'}`}
              </p>
              <button type="button" onClick={() => onBuscar('')} className="text-helecho hover:underline">
                Ver todos
              </button>
            </div>
            <ul className="space-y-2">
              {resultados.map((r) => (
                <li key={r.slug} className="rounded-xl border border-zinc-200 bg-white p-3">
                  <div className="flex items-center gap-2">
                    <RankBadge nivel={r.nivel} />
                    <Link href={`/grupo/${r.slug}`} className="font-semibold text-tinta hover:text-helecho">
                      {r.taxonNombre}
                    </Link>
                    <button
                      type="button"
                      onClick={() => onUbicar(r.slug)}
                      aria-label={`Ubicar ${r.taxonNombre} en la red`}
                      className="ml-auto rounded-full px-2.5 py-1 text-xs font-medium text-helecho hover:bg-salvia"
                    >
                      Ubicar
                    </button>
                  </div>
                  {r.coincidencias.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {r.coincidencias.map((c) => (
                        <li key={c.id}>
                          <Link
                            href={`/grupo/${r.slug}${c.ancla ? `#${c.ancla}` : ''}`}
                            className="block rounded-md px-2 py-1.5 text-sm hover:bg-zinc-50"
                          >
                            <span className="font-medium text-zinc-800">{c.seccionLabel}</span>
                            {c.soloExterno && (
                              <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[11px] font-medium text-amber-800">
                                Externo
                              </span>
                            )}
                            <span className="mt-0.5 block text-zinc-600">
                              {resaltar(fragmento(c.texto, q ?? '', 140), q ?? '').map((s, i) =>
                                s.marcado ? (
                                  <mark key={i} className="bg-ocre/25">
                                    {s.texto}
                                  </mark>
                                ) : (
                                  s.texto
                                ),
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="titulo-filtros" className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 id="titulo-filtros" className="font-display text-lg font-semibold text-tinta">
              Filtros
            </h2>
            {cumplen !== null && (
              <button type="button" onClick={onLimpiar} className="text-sm text-helecho hover:underline">
                Quitar filtros
              </button>
            )}
          </div>
          <p className="text-sm text-zinc-500">
            {cumplen === null
              ? 'Al filtrar, la red se reordena en un árbol por cada valor elegido.'
              : `${cumplen} de ${total} grupos cumplen los filtros.`}
          </p>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-zinc-700">Linaje</legend>
            <div className="flex flex-wrap gap-1.5">
              {LINAJES.map((l) => (
                <Opcion
                  key={l}
                  activo={filtros.linajes.includes(l)}
                  onClick={() => onFiltro('linaje', l)}
                  color={LINAJE_COLOR[l]}
                  n={opciones.linajes[l] ?? 0}
                >
                  {LINAJE_LABEL[l]}
                </Opcion>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-zinc-700">Nivel taxonómico</legend>
            <div className="flex flex-wrap gap-1.5">
              {opciones.niveles.map(({ valor, n }) => (
                <Opcion
                  key={valor}
                  activo={filtros.niveles.includes(valor)}
                  onClick={() => onFiltro('nivel', valor)}
                  n={n}
                >
                  {NIVEL_LABEL[valor]}
                </Opcion>
              ))}
            </div>
          </fieldset>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-zinc-700">Criterios embrionarios</h3>
            {CRITERIOS.map((c) => {
              const activos = filtros.rasgos[c]?.length ?? 0;
              return (
                <details key={c} open={activos > 0} className="group rounded-lg border border-zinc-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm text-zinc-700 [&::-webkit-details-marker]:hidden">
                    {CRITERIO_LABEL[c]}
                    <span className="text-xs text-zinc-400">
                      {activos > 0 ? `${activos} elegido${activos > 1 ? 's' : ''}` : ''}
                      <span aria-hidden="true" className="ml-2 inline-block transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </span>
                  </summary>
                  <div className="flex flex-wrap gap-1.5 px-3 pb-3">
                    {opciones.rasgos[c].map(({ valor, n }) => (
                      <Opcion
                        key={valor}
                        activo={filtros.rasgos[c]?.includes(valor) ?? false}
                        onClick={() => onFiltro(c, valor)}
                        color={COLOR_VALOR[valor]}
                        n={n}
                      >
                        {VALOR_LABEL[valor]}
                      </Opcion>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section className="space-y-3 pb-2">
          <label htmlFor="color-por" className="block font-display text-lg font-semibold text-tinta">
            Colorear por
          </label>
          <select
            id="color-por"
            value={colorPor}
            onChange={(e) => onColorPor(e.target.value as ColorPor)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-helecho focus:outline-none"
          >
            {OPCIONES_COLOR.map((o) => (
              <option key={o.valor} value={o.valor}>
                {o.label}
              </option>
            ))}
          </select>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-zinc-600">
            {leyenda(colorPor).map((l) => (
              <li key={l.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-3 shrink-0 rounded-full" style={{ background: l.color }} />
                {l.label}
              </li>
            ))}
            <li className="col-span-2 mt-1 flex items-center gap-2 text-zinc-500">
              <span aria-hidden="true" className="size-3 shrink-0 rounded-full border border-dashed border-zinc-500" />
              Rasgo embrionario compartido por phyla
            </li>
          </ul>
        </section>
      </div>
    </BarraLateral>
  );
}
