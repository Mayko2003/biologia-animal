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
    return <p className="text-sm text-zinc-500 italic">{vacio}</p>;
  }
  if (visibles.length === 0) {
    return (
      <p className="text-sm text-zinc-500 italic">Solo hay ejemplos de fuentes externas (ocultos por el filtro).</p>
    );
  }
  return (
    <ul className="space-y-2.5">
      {visibles.map((e, i) => (
        <li key={i} className="flex items-start gap-2 leading-relaxed text-zinc-800">
          <span className="mt-1 shrink-0 text-helecho">
            <IconoTag className="h-3.5 w-3.5" />
          </span>
          <span>
            <em className="font-medium">{e.nombre}</em>
            {e.descripcion ? `: ${e.descripcion}` : ''}{' '}
            {e.fuentes.map((f, j) => (
              <FuenteBadge key={j} fuente={f} />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
