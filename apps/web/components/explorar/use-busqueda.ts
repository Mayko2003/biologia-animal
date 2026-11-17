'use client';

import { useMemo } from 'react';
import { useFiltroFuentes } from '@/components/fuentes/filtro-fuentes';
import { buscar, crearIndice, type DocBusqueda, type ResultadoTaxon } from '@/lib/busqueda';
import { normalizar } from '@/lib/texto';

export function useBusqueda(docs: DocBusqueda[], q: string | null): ResultadoTaxon[] {
  const indice = useMemo(() => crearIndice(docs), [docs]);
  const resultados = useMemo(() => buscar(indice, q ?? ''), [indice, q]);
  const { modo } = useFiltroFuentes();

  return useMemo(() => {
    if (modo !== 'apuntes') return resultados;
    const terminos = (q ?? '')
      .split(/\s+/)
      .map((t) => normalizar(t))
      .filter((t) => t.length >= 2);
    const nombreCoincide = (nombre: string) =>
      terminos.length > 0 && terminos.every((t) => normalizar(nombre).includes(t));
    return resultados
      .map((r) => ({ ...r, coincidencias: r.coincidencias.filter((c) => !c.soloExterno) }))
      .filter((r) => r.coincidencias.length > 0 || nombreCoincide(r.taxonNombre));
  }, [modo, resultados, q]);
}
