import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LineaEvolutiva, type Parada } from '@/components/evolucion/linea-evolutiva';
import { ETAPAS_EVOLUCION, INNOVACIONES } from '@/data/evolucion';
import { IMAGENES_GRUPOS } from '@/data/imagenes-grupos';
import { NIVEL_LABEL } from '@/lib/etiquetas';
import { getTaxon } from '@/lib/taxa';

export const metadata: Metadata = { title: 'Evolución por sistema' };

export default function Page() {
  const lineas: Record<string, Parada[]> = Object.fromEntries(
    Object.entries(INNOVACIONES).map(([sistema, porGrupo]) => [
      sistema,
      ETAPAS_EVOLUCION.map((e) => {
        const t = getTaxon(e.slug)!;
        return {
          slug: t.slug,
          nombre: t.nombre,
          nombreComun: t.nombreComun,
          nivel: NIVEL_LABEL[t.nivel],
          bloque: e.bloque,
          subbloque: e.subbloque,
          imagen: IMAGENES_GRUPOS[t.slug]?.src,
          innovacion: porGrupo?.[t.slug] ?? null,
        };
      }),
    ]),
  );
  return (
    <Suspense fallback={<div className="explorar-fondo fixed inset-0" />}>
      <LineaEvolutiva lineas={lineas} />
    </Suspense>
  );
}
