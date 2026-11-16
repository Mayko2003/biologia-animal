'use client';

import Link from 'next/link';
import {
  COLOR_SIN_DATO,
  COLOR_VALOR,
  CRITERIO_LABEL,
  VALOR_LABEL,
} from '@/lib/etiquetas';
import { CRITERIOS, type CriterioId, type EmbriologiaEfectiva } from '@/lib/types';
import type { Fuente } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { IconoCriterio } from '@/components/ui/iconos-sistemas';

type Reg = EmbriologiaEfectiva[CriterioId];

function Detalle({ reg, nombres, fuentes }: { reg: Reg; nombres: Record<string, string>; fuentes: Fuente[] }) {
  return (
    <>
      {reg?.nota && <span>{reg.nota} </span>}
      {reg?.heredadoDe && (
        <span>
          Heredado de{' '}
          <Link href={`/grupo/${reg.heredadoDe}`} className="text-emerald-700 underline dark:text-emerald-400">
            {nombres[reg.heredadoDe] ?? reg.heredadoDe}
          </Link>{' '}
        </span>
      )}
      {fuentes.map((f, i) => (
        <FuenteBadge key={i} fuente={f} />
      ))}
    </>
  );
}

export function EmbriologiaSpecs({
  embriologia,
  nombres,
}: {
  embriologia: EmbriologiaEfectiva;
  nombres: Record<string, string>;
}) {
  const { modo } = useFiltroFuentes();
  const fuentesDe = (reg: Reg): Fuente[] =>
    (modo === 'apuntes' ? reg?.fuentes.filter((f) => f.tipo === 'apunte') : reg?.fuentes) ?? [];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {CRITERIOS.map((c) => {
        const reg = embriologia[c];
        const fuentes = fuentesDe(reg);
        const tieneDetalle = Boolean(reg?.nota || reg?.heredadoDe || fuentes.length > 0);
        const color = reg ? COLOR_VALOR[reg.valor] : COLOR_SIN_DATO;
        return (
          <div
            key={c}
            className="rounded-lg border border-zinc-200 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              <span className="text-emerald-600 dark:text-emerald-400">
                <IconoCriterio id={c} className="h-4 w-4" />
              </span>
              {CRITERIO_LABEL[c]}
            </div>
            <div className="mt-2">
              {reg ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                  {VALOR_LABEL[reg.valor]}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                  Sin datos
                </span>
              )}
            </div>
            {tieneDetalle && (
              <div className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                <Detalle reg={reg} nombres={nombres} fuentes={fuentes} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
