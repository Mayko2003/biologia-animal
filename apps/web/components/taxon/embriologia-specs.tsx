'use client';

import Link from 'next/link';
import { COLOR_SIN_DATO, COLOR_VALOR, CRITERIO_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
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
          <Link href={`/grupo/${reg.heredadoDe}`} className="text-helecho underline">
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
    <dl className="divide-y divide-zinc-100">
      {CRITERIOS.map((c) => {
        const reg = embriologia[c];
        const fuentes = fuentesDe(reg);
        const tieneDetalle = Boolean(reg?.nota || reg?.heredadoDe || fuentes.length > 0);
        const color = reg ? COLOR_VALOR[reg.valor] : COLOR_SIN_DATO;
        return (
          <div key={c} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 py-2.5">
            <dt className="flex items-center gap-2 text-sm text-zinc-600">
              <span className="text-helecho">
                <IconoCriterio id={c} className="h-4 w-4" />
              </span>
              {CRITERIO_LABEL[c]}
            </dt>
            <dd
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm ${
                reg ? 'bg-salvia font-medium text-tinta' : 'bg-zinc-100 text-zinc-400'
              }`}
            >
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              {reg ? VALOR_LABEL[reg.valor] : 'Sin datos'}
            </dd>
            {tieneDetalle && (
              <dd className="w-full text-xs leading-relaxed text-zinc-500">
                <Detalle reg={reg} nombres={nombres} fuentes={fuentes} />
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
