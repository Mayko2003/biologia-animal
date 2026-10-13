import Link from 'next/link';
import { CRITERIO_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
import { CRITERIOS, type EmbriologiaEfectiva } from '@/lib/types';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';

export function EmbriologiaTabla({
  embriologia,
  nombres,
}: {
  embriologia: EmbriologiaEfectiva;
  nombres: Record<string, string>;
}) {
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
                  {reg?.nota && <span>{reg.nota} </span>}
                  {reg?.heredadoDe && (
                    <span>
                      Heredado de{' '}
                      <Link href={`/grupo/${reg.heredadoDe}`} className="text-emerald-700 underline dark:text-emerald-400">
                        {nombres[reg.heredadoDe] ?? reg.heredadoDe}
                      </Link>{' '}
                    </span>
                  )}
                  {reg?.fuentes.map((f, i) => <FuenteBadge key={i} fuente={f} />)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
