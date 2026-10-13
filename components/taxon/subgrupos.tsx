import Link from 'next/link';
import { esGrupoSuperior, phylaDe } from '@/lib/arbol';
import type { Nivel, NodoArbol } from '@/lib/types';
import { TaxonCard } from './taxon-card';

export function Subgrupos({ nivel, arbol }: { nivel: Nivel; arbol: NodoArbol }) {
  if (esGrupoSuperior(nivel)) {
    const phyla = phylaDe(arbol);
    if (phyla.length === 0) return null;
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {phyla.map((p) => (
          <TaxonCard key={p.slug} nodo={p} />
        ))}
      </div>
    );
  }

  if (arbol.hijos.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {arbol.hijos.map((h) => (
        <div key={h.slug}>
          <TaxonCard nodo={h} />
          {h.hijos.length > 0 && (
            <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 pl-2 text-xs">
              {h.hijos.map((n) => (
                <li key={n.slug}>
                  <Link href={`/grupo/${n.slug}`} className="text-zinc-500 hover:text-emerald-700 hover:underline dark:text-zinc-400 dark:hover:text-emerald-400">
                    {n.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function tituloSubgrupos(nivel: Nivel, arbol: NodoArbol): string {
  if (esGrupoSuperior(nivel)) return 'Phyla incluidos';
  return arbol.hijos.every((h) => h.nivel === 'clase') ? 'Clases' : 'Subgrupos';
}
