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
        <p className="text-sm text-zinc-600">
          Jerarquía de los grupos según la clasificación de la cátedra: Reino → Subreino → Rama →
          Clado → Phylum → Subphylum → Superclase → Clase → Subclase. Seleccioná un grupo para ver sus clases.
        </p>
      </header>
      <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-zinc-100" />}>
        <ExploradorArbol arbol={arbol} />
      </Suspense>
    </div>
  );
}
