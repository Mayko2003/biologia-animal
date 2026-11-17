import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CentroGrupo } from '@/components/ficha/centro';
import { FiguraGrupo } from '@/components/ficha/figura-grupo';
import { PantallaFicha } from '@/components/ficha/pantalla-ficha';
import { Presentacion, type DiapositivaSistema } from '@/components/ficha/presentacion';
import { SeccionLateral } from '@/components/ficha/seccion-lateral';
import { ContenidoFicha, SelectorVista } from '@/components/ficha/vista-3d';
import { MODELOS_3D } from '@/data/modelos-3d';
import { FiltroFuentesToggle } from '@/components/fuentes/filtro-fuentes';
import { Breadcrumb } from '@/components/taxon/breadcrumb';
import { DatoList } from '@/components/taxon/dato-list';
import { EjemploList } from '@/components/taxon/ejemplo-list';
import { EmbriologiaSpecs } from '@/components/taxon/embriologia-specs';
import { NotaList } from '@/components/taxon/nota-list';
import { RankBadge } from '@/components/taxon/rank-badge';
import { Subgrupos, tituloSubgrupos } from '@/components/taxon/subgrupos';
import { IMAGENES_GRUPOS } from '@/data/imagenes-grupos';
import { tieneApunte } from '@/lib/apuntes';
import { esGrupoSuperior, phylaDe } from '@/lib/arbol';
import { NIVEL_LABEL, SISTEMA_LABEL } from '@/lib/etiquetas';
import { getAncestros, getArbol, getEmbriologiaEfectiva, getTaxon, todos } from '@/lib/taxa';
import { SISTEMAS, type Dato } from '@/lib/types';

const BOTON =
  'landing-presion inline-flex min-h-[40px] items-center rounded-full border border-tinta/25 px-4 py-2 text-sm font-medium text-tinta hover:border-helecho hover:text-helecho';

const cantidadDatos = (n: number) => `${n} ${n === 1 ? 'dato' : 'datos'}`;

function resumenFuentes(datos: Dato[]) {
  if (datos.length === 0) return 'Sin datos';
  const apuntes = datos.filter((d) => tieneApunte(d.fuentes)).length;
  const externos = datos.length - apuntes;
  if (externos === 0) return `${cantidadDatos(datos.length)}, todos de los apuntes`;
  if (apuntes === 0) return `${cantidadDatos(datos.length)}, todos de fuentes externas`;
  return `${cantidadDatos(datos.length)}: ${apuntes} de los apuntes y ${externos} de fuentes externas`;
}

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
    <Suspense fallback={<div className="explorar-fondo fixed inset-0" />}>
      <Ficha params={params} />
    </Suspense>
  );
}

async function Ficha({ params }: { params: PageProps<'/grupo/[slug]'>['params'] }) {
  const { slug } = await params;
  const taxon = getTaxon(slug);
  if (!taxon) notFound();

  const ruta = [...getAncestros(slug), taxon].map((t) => ({ slug: t.slug, nombre: t.nombre }));
  const arbol = getArbol(slug);
  const embriologia = getEmbriologiaEfectiva(slug);
  const nombres = Object.fromEntries(todos.map((t) => [t.slug, t.nombre]));
  const superior = esGrupoSuperior(taxon.nivel);
  const imagen = IMAGENES_GRUPOS[slug];
  const tieneEmbriologia = Object.keys(embriologia).length > 0;

  const sistemas: DiapositivaSistema[] = superior
    ? []
    : SISTEMAS.map((s) => {
        const datos = taxon.sistemas[s] ?? [];
        return {
          sistema: s,
          titulo: SISTEMA_LABEL[s],
          detalle:
            datos.length === 0 ? 'Sin datos' : datos.every((d) => d.ausente) ? 'Ausente' : cantidadDatos(datos.length),
          resumen: resumenFuentes(datos),
          vacio: `No hay datos sobre «${SISTEMA_LABEL[s]}» de ${taxon.nombre} en los apuntes ni en las fuentes consultadas.`,
          estado: datos.length === 0 ? 'vacio' : datos.every((d) => d.ausente) ? 'ausente' : 'datos',
          contenido: <DatoList datos={datos} />,
        };
      });
  const enlaces = (superior ? phylaDe(arbol) : []).map((p) => ({
    slug: p.slug,
    nombre: p.nombre,
    nombreComun: p.nombreComun,
  }));

  const principal = (
    <div className="grid gap-8 @3xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] @3xl:gap-10">
      <div className="space-y-6">
        {imagen && <FiguraGrupo imagen={imagen} />}
        {(!superior || tieneEmbriologia) && (
          <section id="seccion-embriologia" aria-labelledby="titulo-embriologia" className="space-y-1">
            <h3 id="titulo-embriologia" className="font-display text-lg font-semibold text-tinta">
              Desarrollo embrionario
            </h3>
            <EmbriologiaSpecs embriologia={embriologia} nombres={nombres} />
          </section>
        )}
      </div>
      {(!superior || taxon.resumen.length > 0) && (
        <section aria-labelledby="titulo-resumen" className="space-y-3">
          <h3 id="titulo-resumen" className="font-display text-lg font-semibold text-tinta">
            Resumen
          </h3>
          <div className="max-w-[68ch]">
            <DatoList datos={taxon.resumen} />
          </div>
        </section>
      )}
    </div>
  );

  const lateral = (
    <div className="space-y-5">
      <div className="space-y-2">
        <Breadcrumb ruta={ruta} />
        <div className="flex flex-wrap items-center gap-2">
          <RankBadge nivel={taxon.nivel} />
          {taxon.externo && (
            <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
              Grupo no incluido en los apuntes
            </span>
          )}
        </div>
        <h1 className="font-display text-3xl font-semibold leading-tight text-tinta">{taxon.nombre}</h1>
        {taxon.nombreComun && <p className="text-zinc-500">{taxon.nombreComun}</p>}
        {taxon.sinonimos && taxon.sinonimos.length > 0 && (
          <p className="text-sm text-zinc-500">También: {taxon.sinonimos.join(', ')}</p>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          <Link href={`/buscar?sel=${slug}`} className={BOTON}>
            Ver en la red
          </Link>
          <Link href={`/comparar?a=${slug}`} className={BOTON}>
            Comparar con…
          </Link>
        </div>
      </div>

      <div>
        {arbol.hijos.length > 0 && (
          <SeccionLateral id="seccion-subgrupos" titulo={tituloSubgrupos(taxon.nivel, arbol)} abierta={superior}>
            <Subgrupos nivel={taxon.nivel} arbol={arbol} />
          </SeccionLateral>
        )}
        {!superior && (
          <>
            <SeccionLateral
              id="seccion-morfologia"
              titulo="Morfología externa"
              cantidad={taxon.morfologiaExterna.length}
              abierta
            >
              <DatoList datos={taxon.morfologiaExterna} />
            </SeccionLateral>
            {taxon.estructurasEspeciales.length > 0 && (
              <SeccionLateral
                id="seccion-especiales"
                titulo="Estructuras especiales"
                cantidad={taxon.estructurasEspeciales.length}
              >
                {taxon.estructurasEspeciales.map((e, i) => (
                  <div key={i} id={`especial-${i}`} className="scroll-mt-4 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-800">{e.titulo}</h3>
                    <DatoList datos={e.datos} />
                  </div>
                ))}
              </SeccionLateral>
            )}
            <SeccionLateral
              id="seccion-reproduccion"
              titulo="Reproducción y desarrollo"
              cantidad={taxon.reproduccion.length}
            >
              <DatoList datos={taxon.reproduccion} />
            </SeccionLateral>
            <SeccionLateral id="seccion-bioecologia" titulo="Bioecología" cantidad={taxon.bioecologia.length}>
              <DatoList datos={taxon.bioecologia} />
            </SeccionLateral>
            <SeccionLateral id="seccion-ejemplos" titulo="Ejemplos" cantidad={taxon.ejemplos.length}>
              <EjemploList ejemplos={taxon.ejemplos} />
            </SeccionLateral>
          </>
        )}
        {taxon.notas.length > 0 && (
          <SeccionLateral id="seccion-notas" titulo="Notas" cantidad={taxon.notas.length}>
            <NotaList notas={taxon.notas} />
          </SeccionLateral>
        )}
      </div>
    </div>
  );

  return (
    <PantallaFicha
      lateral={lateral}
      arriba={
        MODELOS_3D[slug] ? (
          <div className="flex items-center gap-1">
            <SelectorVista />
            <span aria-hidden="true" className="h-4 w-px bg-zinc-200" />
            <FiltroFuentesToggle />
          </div>
        ) : (
          <FiltroFuentesToggle />
        )
      }
    >
      <ContenidoFicha
        modelo={MODELOS_3D[slug]}
        esquema={
          <Presentacion
            centro={{
              etiqueta: `Abrir resumen y desarrollo embrionario de ${taxon.nombre}`,
              contenido: (
                <CentroGrupo
                  nivel={NIVEL_LABEL[taxon.nivel]}
                  nombre={taxon.nombre}
                  nombreComun={taxon.nombreComun}
                  imagen={imagen}
                  invitacion="Resumen y desarrollo embrionario"
                />
              ),
            }}
            principal={{
              antetitulo: NIVEL_LABEL[taxon.nivel],
              titulo: taxon.nombre,
              subtitulo: taxon.nombreComun ?? 'Resumen y desarrollo embrionario',
              contenido: principal,
            }}
            antetituloSistema={taxon.nombre}
            sistemas={sistemas}
            enlaces={enlaces}
          />
        }
      />
    </PantallaFicha>
  );
}
