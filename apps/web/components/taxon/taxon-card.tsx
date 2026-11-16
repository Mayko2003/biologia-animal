import Link from 'next/link';
import type { NodoArbol } from '@/lib/types';
import { RankBadge } from './rank-badge';

export function TaxonCard({
  nodo,
}: {
  nodo: Pick<NodoArbol, 'slug' | 'nombre' | 'nombreComun' | 'nivel' | 'resumenCorto'>;
}) {
  return (
    <Link
      href={`/grupo/${nodo.slug}`}
      className="block rounded-lg border border-zinc-200 p-3 transition hover:border-emerald-400 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-600"
    >
      <RankBadge nivel={nodo.nivel} />
      <p className="mt-1 font-semibold">{nodo.nombre}</p>
      {nodo.nombreComun && <p className="text-sm text-zinc-500 dark:text-zinc-400">{nodo.nombreComun}</p>}
      {nodo.resumenCorto && <p className="mt-1 text-sm line-clamp-3 text-zinc-600 dark:text-zinc-300">{nodo.resumenCorto}</p>}
    </Link>
  );
}
