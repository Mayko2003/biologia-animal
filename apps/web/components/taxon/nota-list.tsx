'use client';

import type { Nota } from '@/lib/types';
import { tieneApunte } from '@/lib/apuntes';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { IconoAlerta, IconoInfo } from '@/components/ui/iconos-sistemas';

export function NotaList({ notas }: { notas: Nota[] }) {
  const { modo } = useFiltroFuentes();
  const visibles = modo === 'apuntes' ? notas.filter((n) => tieneApunte(n.fuentes)) : notas;
  return (
    <div className="space-y-3">
      {visibles.map((n, i) => {
        const esDiscrepancia = n.tipo === 'discrepancia';
        return (
          <div
            key={i}
            className={`rounded-r-lg border-l-2 py-2 pl-3 pr-2 ${esDiscrepancia ? 'border-ocre bg-ocre/10' : 'border-zinc-300 bg-zinc-50'}`}
          >
            <p
              className={`flex items-center gap-1.5 text-sm font-medium ${esDiscrepancia ? 'text-amber-900' : 'text-zinc-700'}`}
            >
              {esDiscrepancia ? <IconoAlerta className="h-4 w-4" /> : <IconoInfo className="h-4 w-4" />}
              {esDiscrepancia ? 'Discrepancia' : 'Aclaración'}
            </p>
            <div className="mt-1 leading-relaxed text-zinc-800">
              {n.texto}{' '}
              {n.fuentes.map((f, j) => (
                <FuenteBadge key={j} fuente={f} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
