'use client';

import { CRITERIO_LABEL } from '@/lib/etiquetas';
import { CRITERIOS, type CriterioId } from '@/lib/types';
import { useParametro } from '@/components/navegacion/use-seleccion';

export function useLente(): CriterioId | null {
  const [lente] = useParametro('lente');
  return CRITERIOS.includes(lente as CriterioId) ? (lente as CriterioId) : null;
}

export function SelectorLente() {
  const [lente, setLente] = useParametro('lente');
  const actual = CRITERIOS.includes(lente as CriterioId) ? lente : null;
  return (
    <div
      role="radiogroup"
      aria-label="Lente"
      className="flex gap-1.5 overflow-x-auto whitespace-nowrap pb-1 lg:flex-wrap lg:overflow-visible"
    >
      <button
        type="button"
        role="radio"
        aria-checked={actual === null}
        onClick={() => setLente(null)}
        className={`inline-flex min-h-[40px] shrink-0 items-center rounded-md px-3 py-2 text-sm font-medium ${
          actual === null
            ? 'bg-emerald-600 text-white'
            : 'border border-zinc-300 text-zinc-600 hover:border-emerald-400 dark:border-zinc-700 dark:text-zinc-300'
        }`}
      >
        Sin lente
      </button>
      {CRITERIOS.map((c) => (
        <button
          key={c}
          type="button"
          role="radio"
          aria-checked={actual === c}
          onClick={() => setLente(c)}
          className={`inline-flex min-h-[40px] shrink-0 items-center rounded-md px-3 py-2 text-sm font-medium ${
            actual === c
              ? 'bg-emerald-600 text-white'
              : 'border border-zinc-300 text-zinc-600 hover:border-emerald-400 dark:border-zinc-700 dark:text-zinc-300'
          }`}
        >
          {CRITERIO_LABEL[c]}
        </button>
      ))}
    </div>
  );
}
