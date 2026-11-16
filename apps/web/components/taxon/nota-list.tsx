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
            className={`rounded-lg border p-3 text-sm ${
              esDiscrepancia
                ? 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40'
                : 'border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900'
            }`}
          >
            <p
              className={`flex items-center gap-1.5 font-medium ${
                esDiscrepancia ? 'text-amber-800 dark:text-amber-300' : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {esDiscrepancia ? <IconoAlerta className="h-4 w-4" /> : <IconoInfo className="h-4 w-4" />}
              {esDiscrepancia ? 'Discrepancia' : 'Aclaración'}
            </p>
            <div className="mt-1 leading-relaxed">
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
