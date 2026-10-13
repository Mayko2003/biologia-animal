import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ExploradorMapa } from '@/components/mapa/explorador-mapa';
import { MAPA_EMBRIONARIO } from '@/data/mapa-embrionario';
import { getArbol } from '@/lib/taxa';

export const metadata: Metadata = { title: 'Mapa conceptual' };

export default function Page() {
  const arbol = getArbol();
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
        <ExploradorMapa mapa={MAPA_EMBRIONARIO} arbol={arbol} />
      </Suspense>
    </div>
  );
}
