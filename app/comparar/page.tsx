import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Comparador } from '@/components/comparar/comparador';
import type { GrupoOpciones } from '@/components/comparar/selector-taxon';
import { esGrupoSuperior } from '@/lib/arbol';
import { getHijos, todos } from '@/lib/taxa';
import type { Taxon } from '@/lib/types';

export const metadata: Metadata = { title: 'Comparar grupos' };

function etiqueta(t: Taxon, profundidad: number) {
  return '— '.repeat(profundidad) + t.nombre + (t.nombreComun ? ` (${t.nombreComun})` : '');
}

function construirOpciones(): GrupoOpciones[] {
  const opciones: GrupoOpciones[] = [];
  const superiores = todos.filter((t) => esGrupoSuperior(t.nivel));
  if (superiores.length > 0) {
    opciones.push({
      grupo: 'Grupos superiores',
      items: superiores.map((t) => ({ slug: t.slug, etiqueta: etiqueta(t, 0) })),
    });
  }
  const phyla = todos.filter((t) => t.nivel === 'phylum');
  for (const p of phyla) {
    const items: GrupoOpciones['items'] = [{ slug: p.slug, etiqueta: etiqueta(p, 0) }];
    const apilar = (t: Taxon, prof: number) => {
      for (const h of getHijos(t.slug)) {
        items.push({ slug: h.slug, etiqueta: etiqueta(h, prof) });
        apilar(h, prof + 1);
      }
    };
    apilar(p, 1);
    opciones.push({ grupo: p.nombre, items });
  }
  return opciones;
}

export default function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Comparar grupos</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Elegí dos grupos o clases para ver un cuadro comparativo.
        </p>
      </header>
      <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-900" />}>
        <Comparador taxa={todos} opciones={construirOpciones()} />
      </Suspense>
    </div>
  );
}
