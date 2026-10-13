'use client';

import type { NodoArbol } from '@/lib/types';
import { PanelSeleccion } from '@/components/navegacion/panel-seleccion';
import { useParametro, useSeleccion } from '@/components/navegacion/use-seleccion';
import { PILL_ACTIVO, PILL_BASE, PILL_INACTIVO_SUAVE } from '@/components/ui/clases';
import { ArbolGrafico } from './arbol-grafico';
import { ArbolLista } from './arbol-lista';

export function ExploradorArbol({ arbol }: { arbol: NodoArbol }) {
  const [sel, setSel] = useSeleccion();
  const [vista, setVista] = useParametro('vista');
  const vistaActual = vista === 'grafico' ? 'grafico' : 'lista';

  const botones = (
    <div className="mb-3 inline-flex rounded-md border border-zinc-300 p-0.5 text-sm dark:border-zinc-700" role="group" aria-label="Vista del árbol">
      <button
        type="button"
        aria-pressed={vistaActual === 'lista'}
        onClick={() => setVista(null)}
        className={`${PILL_BASE} ${vistaActual === 'lista' ? PILL_ACTIVO : PILL_INACTIVO_SUAVE}`}
      >
        Lista
      </button>
      <button
        type="button"
        aria-pressed={vistaActual === 'grafico'}
        onClick={() => setVista('grafico')}
        className={`${PILL_BASE} ${vistaActual === 'grafico' ? PILL_ACTIVO : PILL_INACTIVO_SUAVE}`}
      >
        Gráfico
      </button>
    </div>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="min-w-0">
        {botones}
        {vistaActual === 'lista' ? (
          <ArbolLista arbol={arbol} seleccionado={sel} onSeleccionar={setSel} />
        ) : (
          <ArbolGrafico arbol={arbol} seleccionado={sel} onSeleccionar={setSel} />
        )}
      </div>
      <PanelSeleccion arbol={arbol} slug={sel} onSeleccionar={setSel} />
    </div>
  );
}
