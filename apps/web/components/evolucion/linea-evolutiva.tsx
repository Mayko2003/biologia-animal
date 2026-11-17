'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PantallaFicha } from '@/components/ficha/pantalla-ficha';
import { FiltroFuentesToggle } from '@/components/fuentes/filtro-fuentes';
import { useActualizarParametros, useParametro } from '@/components/navegacion/use-seleccion';
import { DatoList } from '@/components/taxon/dato-list';
import { IconoSistema } from '@/components/ui/iconos-sistemas';
import type { Innovacion } from '@/data/evolucion';
import { SISTEMA_LABEL } from '@/lib/etiquetas';
import { SISTEMAS, type SistemaId } from '@/lib/types';

export type Parada = {
  slug: string;
  nombre: string;
  nombreComun?: string;
  nivel: string;
  bloque?: string;
  subbloque?: string;
  imagen?: string;
  innovacion: Innovacion | null;
};

export function LineaEvolutiva({ lineas }: { lineas: Record<string, Parada[]> }) {
  const [sistemaParam] = useParametro('sistema');
  const [grupoParam] = useParametro('grupo');
  const actualizar = useActualizarParametros();
  const sistema = (sistemaParam && lineas[sistemaParam] ? sistemaParam : 'digestivo') as SistemaId;
  const paradas = lineas[sistema];
  const indice = Math.max(
    0,
    paradas.findIndex((p) => p.slug === grupoParam),
  );
  const parada = paradas[indice];
  const pista = useRef<HTMLOListElement>(null);

  const ir = (i: number) => actualizar({ grupo: paradas[Math.min(paradas.length - 1, Math.max(0, i))].slug });

  useEffect(() => {
    document
      .getElementById(`parada-${parada.slug}`)
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [parada.slug]);

  useEffect(() => {
    const alPresionar = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('input, textarea, select, details')) return;
      if (e.key === 'ArrowRight') ir(indice + 1);
      else if (e.key === 'ArrowLeft') ir(indice - 1);
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  });

  const lateral = (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="font-display text-3xl font-semibold leading-tight text-tinta">Evolución por sistema</h1>
        <p className="text-sm text-zinc-500">
          Cómo cambia un sistema a lo largo de los grupos: cada parada muestra la innovación que aparece en ese grupo.
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-sm font-medium text-zinc-500">Sistema</h2>
        <ul className="space-y-1">
          {SISTEMAS.map((s) => {
            const disponible = Boolean(lineas[s]);
            return (
              <li key={s}>
                <button
                  type="button"
                  disabled={!disponible}
                  aria-pressed={s === sistema}
                  onClick={() => actualizar({ sistema: s, grupo: null })}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[15px] ${
                    s === sistema
                      ? 'bg-tinta font-medium text-white'
                      : disponible
                        ? 'text-tinta hover:bg-salvia'
                        : 'cursor-not-allowed text-zinc-400'
                  }`}
                >
                  <IconoSistema id={s} className="size-4 shrink-0" />
                  <span className="flex-1">{SISTEMA_LABEL[s]}</span>
                  {!disponible && <span className="text-xs">Próximamente</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-sm text-zinc-500">
        El orden de los grupos es fijo y sigue el recorrido de la materia. Cada innovación se apoya en un dato citado de
        los apuntes.
      </p>
    </div>
  );

  const subgrupos = (items: { p: Parada; i: number }[]) => {
    const out: { subbloque?: string; items: { p: Parada; i: number }[] }[] = [];
    for (const it of items) {
      const ultimo = out.at(-1);
      if (ultimo && it.p.subbloque && ultimo.subbloque === it.p.subbloque) ultimo.items.push(it);
      else out.push({ subbloque: it.p.subbloque, items: [it] });
    }
    return out;
  };

  const paradaVista = (p: Parada, i: number) => {
    const activa = i === indice;
    return (
      <li key={p.slug} id={`parada-${p.slug}`} className="relative w-40 shrink-0 px-2">
        <span aria-hidden="true" className="absolute left-0 right-0 top-9 h-0.5 bg-helecho/30" />
        <button
          type="button"
          onClick={() => ir(i)}
          aria-current={activa ? 'step' : undefined}
          className="group relative flex w-full flex-col items-center text-center"
        >
          <span
            className={`relative size-[72px] overflow-hidden rounded-full bg-tinta ring-4 transition-[box-shadow] duration-200 ${
              activa ? 'ring-tinta' : 'ring-white group-hover:ring-helecho/50'
            }`}
          >
            {p.imagen && <Image src={p.imagen} alt="" fill sizes="72px" className="object-cover" />}
          </span>
          <span className="mt-2 font-display text-[15px] font-semibold text-tinta">{p.nombre}</span>
          <span
            className={`mt-1 line-clamp-2 min-h-[2.5em] text-xs leading-tight ${
              p.innovacion?.titulo ? (activa ? 'font-medium text-helecho' : 'text-zinc-600') : 'italic text-zinc-400'
            }`}
          >
            {p.innovacion?.titulo ?? 'Sin innovación nueva'}
          </span>
        </button>
      </li>
    );
  };

  const bloques: { bloque?: string; items: { p: Parada; i: number }[] }[] = [];
  paradas.forEach((p, i) => {
    const ultimo = bloques.at(-1);
    if (ultimo && p.bloque && ultimo.bloque === p.bloque) ultimo.items.push({ p, i });
    else bloques.push({ bloque: p.bloque, items: [{ p, i }] });
  });

  return (
    <PantallaFicha lateral={lateral} arriba={<FiltroFuentesToggle />} actual="evolucion">
      <div className="explorar-fondo flex h-full flex-col overflow-hidden">
        <header className="flex items-center gap-3 px-5 pb-2 pt-16 lg:px-10 lg:pt-8">
          <span className="flex size-11 items-center justify-center rounded-full bg-salvia text-helecho">
            <IconoSistema id={sistema} className="size-6" />
          </span>
          <div>
            <p className="text-sm text-zinc-500">Línea evolutiva</p>
            <h2 className="font-display text-2xl font-semibold text-tinta">
              Sistema {SISTEMA_LABEL[sistema].toLowerCase()}
            </h2>
          </div>
        </header>

        <ol
          ref={pista}
          aria-label={`Grupos de la línea del sistema ${SISTEMA_LABEL[sistema].toLowerCase()}`}
          className="flex shrink-0 items-end gap-0 overflow-x-auto px-5 pb-4 pt-6 [scrollbar-width:thin] lg:px-10"
        >
          {bloques.map((b, k) => (
            <li key={k} className="shrink-0">
              {b.bloque ? (
                <p className="mx-3 mb-2 border-b-2 border-helecho/30 pb-1 text-center text-xs font-medium text-helecho">
                  {b.bloque}
                </p>
              ) : (
                <p aria-hidden="true" className="mb-2 pb-1 text-xs">
                  &nbsp;
                </p>
              )}
              <ol className="flex items-end">
                {subgrupos(b.items).map((sg, m) =>
                  sg.subbloque ? (
                    <li key={m} className="shrink-0">
                      <p className="mx-3 mb-2 border-b border-dashed border-helecho/40 pb-1 text-center text-[11px] font-medium text-helecho/80">
                        {sg.subbloque}
                      </p>
                      <ol className="flex">{sg.items.map(({ p, i }) => paradaVista(p, i))}</ol>
                    </li>
                  ) : (
                    sg.items.map(({ p, i }) => paradaVista(p, i))
                  ),
                )}
              </ol>
            </li>
          ))}
        </ol>

        <section
          aria-labelledby="innovacion-titulo"
          className="mx-3 mb-20 mt-2 min-h-0 flex-1 overflow-y-auto rounded-3xl bg-white px-5 py-6 shadow-[0_20px_60px_rgba(22,42,56,0.12)] ring-1 ring-zinc-200 sm:mx-auto sm:w-[min(52rem,calc(100%-3rem))] sm:px-8"
        >
          <p className="text-sm text-zinc-500">
            {parada.nivel}, parada {indice + 1} de {paradas.length}
          </p>
          <h3 id="innovacion-titulo" className="font-display text-2xl font-semibold text-tinta">
            {parada.nombre}
            {parada.nombreComun && (
              <span className="ml-2 text-base font-normal text-zinc-500">{parada.nombreComun}</span>
            )}
          </h3>
          <p
            className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              parada.innovacion?.titulo ? 'bg-salvia text-helecho' : 'bg-zinc-100 text-zinc-600'
            }`}
          >
            {parada.innovacion?.titulo ? `Innovación: ${parada.innovacion.titulo}` : 'Sin innovación nueva'}
          </p>
          {parada.innovacion ? (
            <div className="mt-5 max-w-[68ch] text-[17px]">
              <DatoList datos={parada.innovacion.datos} />
            </div>
          ) : (
            <p className="mt-4 text-[17px] text-zinc-600">
              Los apuntes no describen el sistema {SISTEMA_LABEL[sistema].toLowerCase()} de {parada.nombre}.
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => ir(indice - 1)}
              disabled={indice === 0}
              aria-label="Grupo anterior"
              className="landing-presion flex size-10 items-center justify-center rounded-full ring-1 ring-zinc-200 hover:text-helecho disabled:opacity-40"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => ir(indice + 1)}
              disabled={indice === paradas.length - 1}
              aria-label="Grupo siguiente"
              className="landing-presion flex size-10 items-center justify-center rounded-full ring-1 ring-zinc-200 hover:text-helecho disabled:opacity-40"
            >
              →
            </button>
            <Link
              href={`/grupo/${parada.slug}#sistema-${sistema}`}
              className="ml-auto text-sm font-medium text-helecho hover:underline"
            >
              Ver en la ficha de {parada.nombre}
            </Link>
          </div>
        </section>
      </div>
    </PantallaFicha>
  );
}
