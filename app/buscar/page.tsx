import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Buscador } from '@/components/busqueda/buscador';
import { construirDocumentos } from '@/lib/busqueda';
import { todos } from '@/lib/taxa';

export const metadata: Metadata = { title: 'Buscar' };

export default function Page() {
  const docs = construirDocumentos(todos);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Buscar</h1>
      <Suspense fallback={<p className="text-sm text-zinc-500">Cargando buscador…</p>}>
        <Buscador docs={docs} />
      </Suspense>
    </div>
  );
}
