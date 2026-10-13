'use client';

import { tieneApunte } from '@/lib/apuntes';
import type { Ejemplo } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';

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
    <ul className="space-y-2">
      {visibles.map((e, i) => (
        <li key={i} className="text-sm leading-relaxed">
          <em>{e.nombre}</em>
          {e.descripcion ? ` — ${e.descripcion}` : ''}{' '}
          {e.fuentes.map((f, j) => (
            <FuenteBadge key={j} fuente={f} />
          ))}
        </li>
      ))}
    </ul>
  );
}
