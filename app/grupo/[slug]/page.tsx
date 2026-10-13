import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { FiltroFuentesToggle } from '@/components/fuentes/filtro-fuentes';
import { Breadcrumb } from '@/components/taxon/breadcrumb';
import { DatoList } from '@/components/taxon/dato-list';
import { EjemploList } from '@/components/taxon/ejemplo-list';
import { EmbriologiaSpecs } from '@/components/taxon/embriologia-specs';
import { FichaHero } from '@/components/taxon/ficha-hero';
import { IndiceSecciones, IndiceSeccionesMovil } from '@/components/taxon/indice-secciones';
import { NotaList } from '@/components/taxon/nota-list';
import { SistemasTabs } from '@/components/taxon/sistemas-tabs';
import { Subgrupos, tituloSubgrupos } from '@/components/taxon/subgrupos';
import { Reveal } from '@/components/ui/reveal';
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
import { SISTEMAS } from '@/lib/types';

export function generateStaticParams() {
  return todos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<'/grupo/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const t = getTaxon(slug);
  return t ? { title: t.nombre, description: t.resumen[0]?.texto } : {};
}

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

  const stats = {
    datos:
      taxon.resumen.length +
      taxon.morfologiaExterna.length +
      taxon.reproduccion.length +
      taxon.bioecologia.length +
      taxon.estructurasEspeciales.reduce((n, e) => n + e.datos.length, 0) +
      Object.values(taxon.sistemas).reduce((n, d) => n + (d?.length ?? 0), 0),
    sistemasConDatos: SISTEMAS.filter((s) => (taxon.sistemas[s]?.length ?? 0) > 0).length,
    sistemasTotal: SISTEMAS.length,
    ejemplos: taxon.ejemplos.length,
  };

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
      contenido: <EmbriologiaSpecs embriologia={embriologia} nombres={nombres} />,
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
      <div className="min-w-0 space-y-8">
        <div className="space-y-3">
          <Breadcrumb ruta={ruta} />
          <FichaHero
            nivel={taxon.nivel}
            nombre={taxon.nombre}
            nombreComun={taxon.nombreComun}
            sinonimos={taxon.sinonimos}
            externo={taxon.externo}
            slug={slug}
            selMapa={selMapa}
            stats={stats}
            acciones={<FiltroFuentesToggle />}
          />
        </div>

        <IndiceSeccionesMovil secciones={secciones.map((s) => ({ id: s.id, titulo: s.titulo }))} />

        {secciones.map((s) => (
          <Reveal key={s.id}>
            <Seccion id={s.id} titulo={s.titulo}>
              {s.contenido}
            </Seccion>
          </Reveal>
        ))}
      </div>

      <IndiceSecciones secciones={secciones.map((s) => ({ id: s.id, titulo: s.titulo }))} />
    </div>
  );
}
