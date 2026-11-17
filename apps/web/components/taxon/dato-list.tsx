'use client';

import { tieneApunte } from '@/lib/apuntes';
import type { Dato } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { IconoAlerta } from '@/components/ui/iconos-sistemas';

export function DatoList({
  datos,
  vacio = 'Sin datos en los apuntes ni en las fuentes consultadas.',
}: {
  datos: Dato[];
  vacio?: string;
}) {
  const { modo } = useFiltroFuentes();
  const visibles = modo === 'apuntes' ? datos.filter((d) => tieneApunte(d.fuentes)) : datos;

  if (datos.length === 0) {
    return <p className="text-sm text-zinc-500 italic">{vacio}</p>;
  }
  if (visibles.length === 0) {
    return <p className="text-sm text-zinc-500 italic">Solo hay datos de fuentes externas (ocultos por el filtro).</p>;
  }
  return (
    <div className="space-y-4">
      {visibles.map((d, i) => (
        <div
          key={i}
          className={`leading-relaxed text-zinc-800 ${tieneApunte(d.fuentes) ? '' : 'border-l-2 border-ocre/60 pl-3'}`}
        >
          {d.ausente && (
            <span className="mr-1.5 inline-flex items-center gap-1 rounded-full bg-oxido/10 px-2 py-0.5 align-[1px] text-[11px] font-medium text-oxido">
              <IconoAlerta className="h-3 w-3" />
              Ausente
            </span>
          )}
          {d.texto}{' '}
          {d.fuentes.map((f, j) => (
            <FuenteBadge key={j} fuente={f} />
          ))}
        </div>
      ))}
    </div>
  );
}
