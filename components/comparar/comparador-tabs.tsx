'use client';

import { useState, useSyncExternalStore } from 'react';
import { IconoEspecial, IconoSistema } from '@/components/ui/iconos-sistemas';
import type { Comparacion, FilaComparacion } from '@/lib/comparacion';
import type { SistemaId } from '@/lib/types';
import { CeldaView } from './celda';

function subscribeHash(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

type Pestana = { id: string; label: string; filas: FilaComparacion[]; icono: React.ReactNode };

export function ComparadorTabs({
  c,
  filasVisibles,
}: {
  c: Comparacion;
  filasVisibles: (grupo: string) => FilaComparacion[];
}) {
  const pestanas: Pestana[] = [
    {
      id: 'anatomia',
      label: 'Anatomía',
      filas: filasVisibles('Anatomía'),
      icono: <IconoEspecial className="h-4 w-4 shrink-0" />,
    },
    ...filasVisibles('Sistemas').map((f) => ({
      id: f.id,
      label: f.etiqueta,
      filas: [f],
      icono: <IconoSistema id={f.id.replace('sistema-', '') as SistemaId} className="h-4 w-4 shrink-0" />,
    })),
  ].filter((p) => p.filas.length > 0);

  const hash = useSyncExternalStore(
    subscribeHash,
    () => window.location.hash.slice(1),
    () => '',
  );
  const [manual, setManual] = useState<string | null>(null);

  const idsValidos = new Set(pestanas.map((p) => p.id));
  const activa =
    manual && idsValidos.has(manual)
      ? manual
      : idsValidos.has(hash)
        ? hash
        : (pestanas[0]?.id ?? '');
  const pestanaActiva = pestanas.find((p) => p.id === activa) ?? pestanas[0];

  function activar(id: string) {
    setManual(id);
    history.replaceState(null, '', `#${id}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const idx = pestanas.findIndex((p) => p.id === activa);
    let siguiente: Pestana | undefined;
    if (e.key === 'ArrowRight') siguiente = pestanas[(idx + 1) % pestanas.length];
    else if (e.key === 'ArrowLeft') siguiente = pestanas[(idx - 1 + pestanas.length) % pestanas.length];
    else if (e.key === 'Home') siguiente = pestanas[0];
    else if (e.key === 'End') siguiente = pestanas[pestanas.length - 1];
    if (!siguiente) return;
    e.preventDefault();
    activar(siguiente.id);
    document.getElementById(siguiente.id)?.focus();
  }

  if (!pestanaActiva) return null;

  const difiere = (p: Pestana) => p.filas.some((f) => f.distinto);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Características comparadas"
        className="flex gap-1 overflow-x-auto whitespace-nowrap pb-1 [-webkit-mask-image:linear-gradient(to_right,black_85%,transparent)] [mask-image:linear-gradient(to_right,black_85%,transparent)]"
        onKeyDown={onKeyDown}
      >
        {pestanas.map((p) => (
          <button
            key={p.id}
            id={p.id}
            type="button"
            role="tab"
            aria-selected={activa === p.id}
            aria-controls={`panel-${p.id}`}
            tabIndex={activa === p.id ? 0 : -1}
            onClick={(e) => {
              activar(p.id);
              e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest' });
            }}
            className={`inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activa === p.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
            }`}
          >
            {p.icono}
            {p.label}
            {difiere(p) && (
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-label="Difiere" role="img" />
            )}
          </button>
        ))}
      </div>

      <div
        key={pestanaActiva.id}
        id={`panel-${pestanaActiva.id}`}
        role="tabpanel"
        aria-labelledby={pestanaActiva.id}
        className="motion-reduce:animate-none animate-fade-up mt-3 space-y-3"
      >
        {pestanaActiva.filas.map((f) => (
          <section
            key={f.id}
            className={`overflow-hidden rounded-lg border ${
              f.distinto
                ? 'border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30'
                : 'border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <p className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2 text-sm font-medium dark:border-zinc-800/60">
              {f.distinto && (
                <span className="h-2 w-2 rounded-full bg-amber-500" aria-label="Difiere" role="img" />
              )}
              {f.etiqueta}
            </p>
            <div className="border-l-2 border-emerald-500 px-3 py-2">
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                A: {c.a.nombre}
              </p>
              <CeldaView celda={f.a} />
            </div>
            <div className="border-l-2 border-sky-500 px-3 py-2">
              <p className="text-xs font-medium text-sky-700 dark:text-sky-400">B: {c.b.nombre}</p>
              <CeldaView celda={f.b} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
