'use client';

import type { NodoArbol, NodoMapa } from '@/lib/types';
import { PanelSeleccion } from '@/components/navegacion/panel-seleccion';
import { useSeleccion } from '@/components/navegacion/use-seleccion';
import { MapaConceptual } from './mapa-conceptual';

export function ExploradorMapa({ mapa, arbol }: { mapa: NodoMapa; arbol: NodoArbol }) {
  const [sel, setSel] = useSeleccion();
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <MapaConceptual mapa={mapa} seleccionado={sel} onSeleccionar={setSel} />
      <PanelSeleccion arbol={arbol} slug={sel} onSeleccionar={setSel} />
    </div>
  );
}
