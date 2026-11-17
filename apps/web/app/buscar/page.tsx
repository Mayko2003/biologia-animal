import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Explorador } from '@/components/explorar/explorador';
import { MAPA_EMBRIONARIO } from '@/data/mapa-embrionario';
import { construirDocumentos } from '@/lib/busqueda';
import { construirRed } from '@/lib/red';
import { getEmbriologiaEfectiva, todos } from '@/lib/taxa';

export const metadata: Metadata = {
  title: 'Explorar',
  description: 'Red interactiva de los grupos animales: buscá, filtrá por linaje, nivel o criterio embrionario y abrí su ficha.',
};

export default function Page() {
  const red = construirRed(todos, MAPA_EMBRIONARIO, getEmbriologiaEfectiva);
  const docs = construirDocumentos(todos);
  return (
    <Suspense fallback={<div className="explorar-fondo fixed inset-0" />}>
      <Explorador red={red} docs={docs} />
    </Suspense>
  );
}
