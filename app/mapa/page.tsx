import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ExploradorMapa } from '@/components/mapa/explorador-mapa';
import { MAPA_EMBRIONARIO } from '@/data/mapa-embrionario';
import { getArbol, getEmbriologiaEfectiva } from '@/lib/taxa';
import { CRITERIOS, type CriterioId, type NodoMapa, type ValorCriterio } from '@/lib/types';

export const metadata: Metadata = { title: 'Mapa conceptual' };

function slugsDelMapa(n: NodoMapa): string[] {
  return [...(n.taxon ? [n.taxon] : []), ...n.hijos.flatMap(slugsDelMapa)];
}

export default function Page() {
  const arbol = getArbol();
  const valores: Record<string, Partial<Record<CriterioId, ValorCriterio>>> = {};
  for (const slug of slugsDelMapa(MAPA_EMBRIONARIO)) {
    const ef = getEmbriologiaEfectiva(slug);
    valores[slug] = Object.fromEntries(
      CRITERIOS.flatMap((c) => (ef[c] ? [[c, ef[c]!.valor]] : [])),
    ) as Partial<Record<CriterioId, ValorCriterio>>;
  }
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Mapa conceptual embrionario</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Leé el mapa de izquierda a derecha: cada caja indica arriba el criterio del desarrollo embrionario que
          define al grupo. Los phyla están a la derecha. Seleccioná cualquier caja para ver sus clases.
        </p>
      </header>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando mapa…</p>}>
        <ExploradorMapa mapa={MAPA_EMBRIONARIO} arbol={arbol} valores={valores} />
      </Suspense>
    </div>
  );
}
