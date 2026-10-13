'use client';

import Link from 'next/link';
import { CRITERIO_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
import { CRITERIOS, type CriterioId, type EmbriologiaEfectiva } from '@/lib/types';
import type { Fuente } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { useEsEscritorio } from '@/components/ui/use-media';

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

export function EmbriologiaTabla({
  embriologia,
  nombres,
}: {
  embriologia: EmbriologiaEfectiva;
  nombres: Record<string, string>;
}) {
  const { modo } = useFiltroFuentes();
  const escritorio = useEsEscritorio();
  const fuentesDe = (reg: Reg): Fuente[] =>
    (modo === 'apuntes' ? reg?.fuentes.filter((f) => f.tipo === 'apunte') : reg?.fuentes) ?? [];

  if (!escritorio) {
    return (
      <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 text-sm dark:divide-zinc-800 dark:border-zinc-800">
        {CRITERIOS.map((c) => {
          const reg = embriologia[c];
          const fuentes = fuentesDe(reg);
          const tieneDetalle = Boolean(reg?.nota || reg?.heredadoDe || fuentes.length > 0);
          return (
            <div key={c} className="px-3 py-2.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium">{CRITERIO_LABEL[c]}</span>
                {reg ? (
                  <span className="text-right">{VALOR_LABEL[reg.valor]}</span>
                ) : (
                  <span className="text-zinc-400 dark:text-zinc-500">Sin datos</span>
                )}
              </div>
              {tieneDetalle && (
                <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                  <Detalle reg={reg} nombres={nombres} fuentes={fuentes} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50 text-left dark:border-zinc-800 dark:bg-zinc-900">
            <th className="px-3 py-2 font-medium">Criterio</th>
            <th className="px-3 py-2 font-medium">Valor</th>
            <th className="px-3 py-2 font-medium">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {CRITERIOS.map((c) => {
            const reg = embriologia[c];
            return (
              <tr key={c} className="border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                <td className="px-3 py-2 font-medium">{CRITERIO_LABEL[c]}</td>
                <td className="px-3 py-2">
                  {reg ? VALOR_LABEL[reg.valor] : <span className="text-zinc-400 dark:text-zinc-500">Sin datos</span>}
                </td>
                <td className="px-3 py-2 text-zinc-600 dark:text-zinc-300">
                  <Detalle reg={reg} nombres={nombres} fuentes={fuentesDe(reg)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
