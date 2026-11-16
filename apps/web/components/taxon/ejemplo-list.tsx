'use client';

import { tieneApunte } from '@/lib/apuntes';
import type { Ejemplo } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { IconoTag } from '@/components/ui/iconos-sistemas';

export function EjemploList({ ejemplos, vacio = 'Sin ejemplos.' }: { ejemplos: Ejemplo[]; vacio?: string }) {
  const { modo } = useFiltroFuentes();
  const visibles = modo === 'apuntes' ? ejemplos.filter((e) => tieneApunte(e.fuentes)) : ejemplos;

  if (ejemplos.length === 0) {
    return <p className="text-sm text-zinc-500 italic dark:text-zinc-400">{vacio}</p>;
  }
  if (visibles.length === 0) {
    return <p className="text-sm text-zinc-500 italic dark:text-zinc-400">Solo hay ejemplos de fuentes externas (ocultos por el filtro).</p>;
  }
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {visibles.map((e, i) => (
        <li
          key={i}
          className="flex items-start gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm leading-relaxed transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">
            <IconoTag className="h-4 w-4" />
          </span>
          <span>
            <em className="font-medium">{e.nombre}</em>
            {e.descripcion ? ` — ${e.descripcion}` : ''}{' '}
            {e.fuentes.map((f, j) => (
              <FuenteBadge key={j} fuente={f} />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
