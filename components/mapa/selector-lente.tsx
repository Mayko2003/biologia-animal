'use client';

import { CRITERIO_LABEL } from '@/lib/etiquetas';
import { CRITERIOS, type CriterioId } from '@/lib/types';
import { useParametro } from '@/components/navegacion/use-seleccion';
import { PILL_ACTIVO, PILL_BASE, PILL_INACTIVO } from '@/components/ui/clases';

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
        className={`${PILL_BASE} shrink-0 ${actual === null ? PILL_ACTIVO : PILL_INACTIVO}`}
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
          className={`${PILL_BASE} shrink-0 ${actual === c ? PILL_ACTIVO : PILL_INACTIVO}`}
        >
          {CRITERIO_LABEL[c]}
        </button>
      ))}
    </div>
  );
}
