'use client';

import { tieneApunte } from '@/lib/apuntes';
import type { Dato } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';

export function DatoList({ datos, vacio = 'Sin datos en los apuntes ni en las fuentes consultadas.' }: { datos: Dato[]; vacio?: string }) {
  const { modo } = useFiltroFuentes();
  const visibles = modo === 'apuntes' ? datos.filter((d) => tieneApunte(d.fuentes)) : datos;

  if (datos.length === 0) {
    return <p className="text-sm text-zinc-500 italic dark:text-zinc-400">{vacio}</p>;
  }
  if (visibles.length === 0) {
    return <p className="text-sm text-zinc-500 italic dark:text-zinc-400">Solo hay datos de fuentes externas (ocultos por el filtro).</p>;
  }
  return (
    <ul className="space-y-2">
      {visibles.map((d, i) => (
        <li key={i} className="text-sm leading-relaxed">
          {d.ausente && (
            <span className="mr-1 inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200">
              Ausente
            </span>
          )}
          {d.texto}{' '}
          {d.fuentes.map((f, j) => (
            <FuenteBadge key={j} fuente={f} />
          ))}
        </li>
      ))}
    </ul>
  );
}
