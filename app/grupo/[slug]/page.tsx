import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { FiltroFuentesToggle } from '@/components/fuentes/filtro-fuentes';
import { Breadcrumb } from '@/components/taxon/breadcrumb';
import { DatoList } from '@/components/taxon/dato-list';
import { EjemploList } from '@/components/taxon/ejemplo-list';
import { EmbriologiaTabla } from '@/components/taxon/embriologia-tabla';
import { IndiceSecciones } from '@/components/taxon/indice-secciones';
import { NotaList } from '@/components/taxon/nota-list';
import { RankBadge } from '@/components/taxon/rank-badge';
import { SistemasTabs } from '@/components/taxon/sistemas-tabs';
import { Subgrupos, tituloSubgrupos } from '@/components/taxon/subgrupos';
import { Seccion } from '@/components/ui/seccion';
import { esGrupoSuperior } from '@/lib/arbol';
import {
  getAncestros,
  getArbol,
  getEmbriologiaEfectiva,
  getPhylumDe,
  getTaxon,
  todos,
} from '@/lib/taxa';

export function generateStaticParams() {
  return todos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<'/grupo/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const t = getTaxon(slug);
  return t ? { title: t.nombre, description: t.resumen[0]?.texto } : {};
}

const BOTON =
  'rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:border-emerald-400 hover:text-emerald-700 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400';

export default function Page({ params }: PageProps<'/grupo/[slug]'>) {
  return (
    <Suspense fallback={<div className="h-[60vh] animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-900" />}>
      <Ficha params={params} />
    </Suspense>
  );
}

async function Ficha({ params }: { params: PageProps<'/grupo/[slug]'>['params'] }) {
  const { slug } = await params;
  const taxon = getTaxon(slug);
  if (!taxon) notFound();

  const ancestros = getAncestros(slug);
  const ruta = [...ancestros, taxon].map((t) => ({ slug: t.slug, nombre: t.nombre }));
  const arbol = getArbol(slug);
  const embriologia = getEmbriologiaEfectiva(slug);
  const nombres = Object.fromEntries(todos.map((t) => [t.slug, t.nombre]));
  const superior = esGrupoSuperior(taxon.nivel);
  const phylum = getPhylumDe(slug);
  const selMapa = superior || taxon.nivel === 'phylum' ? slug : phylum!.slug;

  const tieneSubgrupos = arbol.hijos.length > 0;
  const tieneEmbriologia = Object.keys(embriologia).length > 0;

  const secciones: { id: string; titulo: string; contenido: React.ReactNode }[] = [];
  if (tieneSubgrupos) {
    secciones.push({
      id: 'seccion-subgrupos',
      titulo: tituloSubgrupos(taxon.nivel, arbol),
      contenido: <Subgrupos nivel={taxon.nivel} arbol={arbol} />,
    });
  }
  if (!superior || taxon.resumen.length > 0) {
    secciones.push({ id: 'seccion-resumen', titulo: 'Resumen', contenido: <DatoList datos={taxon.resumen} /> });
  }
  if (!superior || tieneEmbriologia) {
    secciones.push({
      id: 'seccion-embriologia',
      titulo: 'Desarrollo embrionario',
      contenido: <EmbriologiaTabla embriologia={embriologia} nombres={nombres} />,
    });
  }
  if (!superior) {
    secciones.push(
      { id: 'seccion-morfologia', titulo: 'Morfología externa', contenido: <DatoList datos={taxon.morfologiaExterna} /> },
      {
        id: 'seccion-sistemas',
        titulo: 'Sistemas',
        contenido: <SistemasTabs sistemas={taxon.sistemas} especiales={taxon.estructurasEspeciales} />,
      },
      { id: 'seccion-reproduccion', titulo: 'Reproducción y desarrollo', contenido: <DatoList datos={taxon.reproduccion} /> },
      { id: 'seccion-bioecologia', titulo: 'Bioecología', contenido: <DatoList datos={taxon.bioecologia} /> },
      { id: 'seccion-ejemplos', titulo: 'Ejemplos', contenido: <EjemploList ejemplos={taxon.ejemplos} /> },
    );
  }
  if (taxon.notas.length > 0) {
    secciones.push({ id: 'seccion-notas', titulo: 'Notas', contenido: <NotaList notas={taxon.notas} /> });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
      <div className="space-y-8">
        <header className="space-y-3">
          <Breadcrumb ruta={ruta} />
          <div className="flex flex-wrap items-center gap-2">
            <RankBadge nivel={taxon.nivel} />
            <h1 className="text-3xl font-bold">{taxon.nombre}</h1>
            {taxon.externo && (
              <span className="rounded px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                Grupo no incluido en los apuntes
              </span>
            )}
          </div>
          {taxon.nombreComun && <p className="text-lg text-zinc-500 dark:text-zinc-400">{taxon.nombreComun}</p>}
          {taxon.sinonimos && taxon.sinonimos.length > 0 && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">También: {taxon.sinonimos.join(', ')}</p>
          )}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link href={`/arbol?sel=${slug}`} className={BOTON}>Ver en el árbol</Link>
            <Link href={`/mapa?sel=${selMapa}`} className={BOTON}>Ver en el mapa</Link>
            <Link href={`/comparar?a=${slug}`} className={BOTON}>Comparar con…</Link>
            <span className="ml-auto"><FiltroFuentesToggle /></span>
          </div>
        </header>

        {secciones.map((s) => (
          <Seccion key={s.id} id={s.id} titulo={s.titulo}>
            {s.contenido}
          </Seccion>
        ))}
      </div>

      <IndiceSecciones secciones={secciones.map((s) => ({ id: s.id, titulo: s.titulo }))} />
    </div>
  );
}
