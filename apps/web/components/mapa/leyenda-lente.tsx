import { COLOR_SIN_DATO, COLOR_VALOR, VALOR_LABEL } from '@/lib/etiquetas';
import { VALORES_CRITERIO, type CriterioId, type ValorCriterio } from '@/lib/types';

export function LeyendaLente({
  criterio,
  conteo,
}: {
  criterio: CriterioId;
  conteo: Record<string, number>;
}) {
  const orden = VALORES_CRITERIO[criterio] as readonly string[];
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
      {orden
        .filter((v) => conteo[v])
        .map((v) => (
          <li key={v} className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: COLOR_VALOR[v as ValorCriterio] }}
            />
            {VALOR_LABEL[v as ValorCriterio]} ({conteo[v]})
          </li>
        ))}
      {conteo['sin-dato'] ? (
        <li className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: COLOR_SIN_DATO }} />
          Sin dato ({conteo['sin-dato']})
        </li>
      ) : null}
    </ul>
  );
}
