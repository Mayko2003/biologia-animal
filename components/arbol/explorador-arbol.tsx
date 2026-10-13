'use client';

import type { NodoArbol } from '@/lib/types';
import { PanelSeleccion } from '@/components/navegacion/panel-seleccion';
import { useSeleccion } from '@/components/navegacion/use-seleccion';
import { ArbolLista } from './arbol-lista';

export function ExploradorArbol({ arbol }: { arbol: NodoArbol }) {
  const [sel, setSel] = useSeleccion();
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <ArbolLista arbol={arbol} seleccionado={sel} onSeleccionar={setSel} />
      <PanelSeleccion arbol={arbol} slug={sel} onSeleccionar={setSel} />
    </div>
  );
}
