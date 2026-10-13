'use client';

import { useMemo } from 'react';
import { COLOR_SIN_DATO, COLOR_VALOR, VALOR_LABEL } from '@/lib/etiquetas';
import type { CriterioId, NodoArbol, NodoMapa, ValorCriterio } from '@/lib/types';
import { PanelSeleccion } from '@/components/navegacion/panel-seleccion';
import { useSeleccion } from '@/components/navegacion/use-seleccion';
import { LeyendaLente } from './leyenda-lente';
import { MapaConceptual } from './mapa-conceptual';
import { SelectorLente, useLente } from './selector-lente';

function hojasDel(n: NodoMapa): NodoMapa[] {
  return n.hijos.length === 0 ? [n] : n.hijos.flatMap(hojasDel);
}

export function ExploradorMapa({
  mapa,
  arbol,
  valores,
}: {
  mapa: NodoMapa;
  arbol: NodoArbol;
  valores: Record<string, Partial<Record<CriterioId, ValorCriterio>>>;
}) {
  const [sel, setSel] = useSeleccion();
  const lente = useLente();

  const hojas = useMemo(() => hojasDel(mapa), [mapa]);

  const estiloHoja = useMemo(() => {
    if (!lente) return undefined;
    return (taxon: string) => {
      const valor = valores[taxon]?.[lente];
      return valor
        ? { color: COLOR_VALOR[valor], etiqueta: VALOR_LABEL[valor] }
        : { color: COLOR_SIN_DATO, etiqueta: 'Sin dato' };
    };
  }, [lente, valores]);

  const conteo = useMemo(() => {
    if (!lente) return {};
    const c: Record<string, number> = {};
    for (const h of hojas) {
      const v = h.taxon ? valores[h.taxon]?.[lente] : undefined;
      const clave = v ?? 'sin-dato';
      c[clave] = (c[clave] ?? 0) + 1;
    }
    return c;
  }, [hojas, lente, valores]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="space-y-3">
        <SelectorLente />
        {lente && <LeyendaLente criterio={lente} conteo={conteo} />}
        <MapaConceptual mapa={mapa} seleccionado={sel} onSeleccionar={setSel} estiloHoja={estiloHoja} />
      </div>
      <PanelSeleccion arbol={arbol} slug={sel} onSeleccionar={setSel} />
    </div>
  );
}
