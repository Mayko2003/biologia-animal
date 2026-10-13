import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ExploradorArbol } from '@/components/arbol/explorador-arbol';
import { getArbol } from '@/lib/taxa';

export const metadata: Metadata = { title: 'Árbol taxonómico' };

export default function Page() {
  const arbol = getArbol();
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Árbol taxonómico</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Jerarquía de los grupos según la clasificación de la cátedra: Reino → Subreino → Rama →
          Clado → Phylum → Subphylum → Superclase → Clase → Subclase. Seleccioná un grupo para ver sus clases.
        </p>
      </header>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando árbol…</p>}>
        <ExploradorArbol arbol={arbol} />
      </Suspense>
    </div>
  );
}
