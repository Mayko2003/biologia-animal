'use client';

import { DatoList } from '@/components/taxon/dato-list';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import type { Celda } from '@/lib/comparacion';

export function CeldaView({ celda }: { celda: Celda }) {
  if (celda.estado === 'vacio') {
    return <span className="text-sm italic text-zinc-400 dark:text-zinc-500">Sin datos</span>;
  }
  if (celda.estado === 'datos') {
    return <DatoList datos={celda.datos} />;
  }
  if (celda.estado === 'ausente') {
    return (
      <div className="space-y-1">
        <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200">
          Ausente
        </span>
        <DatoList datos={celda.datos} />
      </div>
    );
  }
  return (
    <div className="text-sm">
      {celda.texto}{' '}
      {celda.fuentes.map((f, i) => (
        <FuenteBadge key={i} fuente={f} />
      ))}
      {celda.detalle && <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{celda.detalle}</p>}
    </div>
  );
}
