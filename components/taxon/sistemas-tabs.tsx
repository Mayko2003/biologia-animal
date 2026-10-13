'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { SISTEMA_LABEL } from '@/lib/etiquetas';
import { SISTEMAS, type Dato, type EstructuraEspecial, type SistemaId } from '@/lib/types';
import { DatoList } from './dato-list';

function subscribeHash(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

type Pestana = { id: string; label: string; datos: Dato[] };

export function SistemasTabs({
  sistemas,
  especiales,
}: {
  sistemas: Partial<Record<SistemaId, Dato[]>>;
  especiales: EstructuraEspecial[];
}) {
  const pestanas: Pestana[] = [
    ...SISTEMAS.map((s) => ({ id: `sistema-${s}`, label: SISTEMA_LABEL[s], datos: sistemas[s] ?? [] })),
    ...especiales.map((e, i) => ({ id: `especial-${i}`, label: e.titulo, datos: e.datos })),
  ];

  const hash = useSyncExternalStore(
    subscribeHash,
    () => window.location.hash.slice(1),
    () => '',
  );
  const [manual, setManual] = useState<string | null>(null);

  const primeraConDatos = pestanas.find((p) => p.datos.length > 0)?.id;
  const idsValidos = new Set(pestanas.map((p) => p.id));
  const activa = manual ?? (idsValidos.has(hash) ? hash : primeraConDatos ?? 'sistema-tegumento');

  useEffect(() => {
    if (!idsValidos.has(hash)) return;
    document.getElementById(`panel-${hash}`)?.scrollIntoView({ block: 'nearest' });
    document.getElementById(hash)?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  function activar(id: string) {
    setManual(id);
    history.replaceState(null, '', `#${id}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const idx = pestanas.findIndex((p) => p.id === activa);
    const siguiente = e.key === 'ArrowRight'
      ? pestanas[(idx + 1) % pestanas.length]
      : pestanas[(idx - 1 + pestanas.length) % pestanas.length];
    activar(siguiente.id);
  }

  const pestanaActiva = pestanas.find((p) => p.id === activa) ?? pestanas[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sistemas"
        className="flex gap-1 overflow-x-auto whitespace-nowrap pb-1 [-webkit-mask-image:linear-gradient(to_right,black_85%,transparent)] [mask-image:linear-gradient(to_right,black_85%,transparent)] lg:flex-wrap lg:overflow-visible lg:[-webkit-mask-image:none] lg:[mask-image:none]"
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
            onClick={(e) => {
              activar(p.id);
              e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest' });
            }}
            className={`min-h-[40px] shrink-0 rounded-md px-3 py-1.5 text-sm font-medium ${
              activa === p.id
                ? 'bg-emerald-600 text-white'
                : p.datos.length === 0
                  ? 'text-zinc-400 hover:bg-zinc-100 dark:text-zinc-500 dark:hover:bg-zinc-800'
                  : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
            }`}
          >
            {p.label} ({p.datos.length})
          </button>
        ))}
      </div>
      <div
        id={`panel-${pestanaActiva.id}`}
        role="tabpanel"
        aria-labelledby={pestanaActiva.id}
        className="mt-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
      >
        <DatoList datos={pestanaActiva.datos} />
      </div>
    </div>
  );
}
