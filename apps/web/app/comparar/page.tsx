import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Comparador } from '@/components/comparar/comparador';
import { IMAGENES_GRUPOS } from '@/data/imagenes-grupos';
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
    <Suspense fallback={<div className="explorar-fondo fixed inset-0" />}>
      <Comparador taxa={todos} opciones={construirOpciones()} imagenes={IMAGENES_GRUPOS} />
    </Suspense>
  );
}
