'use client';

import { DatoList } from '@/components/taxon/dato-list';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import type { Celda } from '@/lib/comparacion';

export function CeldaView({ celda }: { celda: Celda }) {
  if (celda.estado === 'vacio') {
    return <p className="italic text-zinc-400">Sin datos en los apuntes ni en las fuentes consultadas.</p>;
  }
  if (celda.estado === 'datos' || celda.estado === 'ausente') {
    return <DatoList datos={celda.datos} />;
  }
  return (
    <div className="leading-relaxed text-zinc-800">
      {celda.texto}{' '}
      {celda.fuentes.map((f, i) => (
        <FuenteBadge key={i} fuente={f} />
      ))}
      {celda.detalle && <p className="mt-1 text-sm text-zinc-500">{celda.detalle}</p>}
    </div>
  );
}

export const COLOR_A = '#3e684a';
export const COLOR_B = '#b0543a';

export function TablaComparativa({
  a,
  b,
}: {
  a: { nombre: string; celda: Celda };
  b: { nombre: string; celda: Celda };
}) {
  return (
    <div className="grid gap-x-10 gap-y-8 @2xl:grid-cols-2">
      {[
        { ...a, color: COLOR_A, letra: 'A' },
        { ...b, color: COLOR_B, letra: 'B' },
      ].map((col, i) => (
        <section
          key={col.letra}
          aria-label={`${col.letra}: ${col.nombre}`}
          className={`space-y-3 ${i === 1 ? '@2xl:border-l @2xl:border-zinc-100 @2xl:pl-10' : ''}`}
        >
          <h3 className="flex items-center gap-2 border-b border-zinc-100 pb-2 font-display text-lg font-semibold text-tinta">
            <span aria-hidden="true" className="size-2.5 rounded-full" style={{ background: col.color }} />
            {col.nombre}
          </h3>
          <CeldaView celda={col.celda} />
        </section>
      ))}
    </div>
  );
}
