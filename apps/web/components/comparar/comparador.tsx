'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CentroComparacion } from '@/components/ficha/centro';
import { FiguraGrupo } from '@/components/ficha/figura-grupo';
import { PantallaFicha } from '@/components/ficha/pantalla-ficha';
import { Presentacion, type DiapositivaSistema } from '@/components/ficha/presentacion';
import { FiltroFuentesToggle } from '@/components/fuentes/filtro-fuentes';
import { useActualizarParametros, useParametro } from '@/components/navegacion/use-seleccion';
import { RankBadge } from '@/components/taxon/rank-badge';
import { comparar, type Celda } from '@/lib/comparacion';
import { crearConsultas } from '@/lib/consultas';
import { COLOR_SIN_DATO, COLOR_VALOR, CRITERIO_LABEL, NIVEL_LABEL, VALOR_LABEL } from '@/lib/etiquetas';
import { CRITERIOS, SISTEMAS, type ImagenGrupo, type SistemaId, type Taxon } from '@/lib/types';
import { COLOR_A, COLOR_B, TablaComparativa } from './celda';
import { SelectorTaxon, type GrupoOpciones } from './selector-taxon';

const cantidadDatos = (n: number) => `${n} ${n === 1 ? 'dato' : 'datos'}`;

function estadoTexto(c: Celda) {
  if (c.estado === 'vacio') return 'sin datos';
  if (c.estado === 'ausente') return 'ausente';
  if (c.estado === 'texto') return c.texto;
  return cantidadDatos(c.datos.length);
}

function detalleSatelite(ca: Celda, cb: Celda, distinto: boolean) {
  if (distinto) return 'Difieren';
  if (ca.estado === 'vacio') return 'Sin datos en ambos';
  if (ca.estado === 'ausente') return 'Ausente en ambos';
  return 'Ambos con datos';
}

export function Comparador({
  taxa,
  opciones,
  imagenes,
}: {
  taxa: readonly Taxon[];
  opciones: GrupoOpciones[];
  imagenes: Record<string, ImagenGrupo>;
}) {
  const [a] = useParametro('a');
  const [b] = useParametro('b');
  const actualizar = useActualizarParametros();
  const [soloDiferencias, setSoloDiferencias] = useState(false);
  const consultas = useMemo(() => crearConsultas(taxa), [taxa]);

  const taxonA = a ? consultas.getTaxon(a) : undefined;
  const taxonB = b ? consultas.getTaxon(b) : undefined;
  const c = useMemo(
    () => (taxonA && taxonB && taxonA.slug !== taxonB.slug ? comparar(taxonA.slug, taxonB.slug, consultas) : null),
    [taxonA, taxonB, consultas],
  );

  let aviso: string | null = null;
  if (!a || !b) aviso = 'Elegí dos grupos o clases para comparar.';
  else if (!taxonA || !taxonB) aviso = 'Uno de los grupos de la dirección no existe.';
  else if (a === b) aviso = 'Elegí dos grupos distintos.';

  const filasSistema = c?.filas.filter((f) => f.grupo === 'Sistemas') ?? [];
  const difieren = filasSistema.filter((f) => f.distinto).length;

  const lateral = (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="font-display text-3xl font-semibold leading-tight text-tinta">Comparar grupos</h1>
        <p className="text-sm text-zinc-500">Elegí dos grupos o clases: cada sistema se compara en dos columnas.</p>
      </div>
      <div className="space-y-3">
        <SelectorTaxon
          id="sel-a"
          label="Grupo A"
          valor={a}
          opciones={opciones}
          onCambiar={(v) => actualizar({ a: v })}
        />
        <button
          type="button"
          aria-label="Intercambiar A y B"
          onClick={() => actualizar({ a: b, b: a })}
          className="landing-presion inline-flex min-h-[40px] items-center gap-2 rounded-full border border-tinta/25 px-4 py-2 text-sm font-medium text-tinta hover:border-helecho hover:text-helecho"
        >
          <span aria-hidden="true">⇅</span> Intercambiar
        </button>
        <SelectorTaxon
          id="sel-b"
          label="Grupo B"
          valor={b}
          opciones={opciones}
          onCambiar={(v) => actualizar({ b: v })}
        />
      </div>
      {aviso && <p className="rounded-lg bg-salvia px-3 py-2 text-sm text-zinc-700">{aviso}</p>}
      {c && (
        <div className="space-y-4 border-t border-zinc-100 pt-4 text-[15px]">
          <p className="text-zinc-700">
            Ancestro común:{' '}
            <Link href={`/grupo/${c.ancestroComun.slug}`} className="font-semibold text-helecho hover:underline">
              {c.ancestroComun.nombre}
            </Link>{' '}
            <span className="text-zinc-500">({NIVEL_LABEL[c.ancestroComun.nivel]})</span>
          </p>
          {[
            [c.a, c.rutaA, COLOR_A],
            [c.b, c.rutaB, COLOR_B],
          ].map(([t, ruta, color]) => (
            <div key={(t as Taxon).slug} className="flex items-start gap-2 text-sm text-zinc-600">
              <span
                aria-hidden="true"
                className="mt-1.5 size-2.5 shrink-0 rounded-full"
                style={{ background: color as string }}
              />
              <span>
                <Link href={`/grupo/${(t as Taxon).slug}`} className="font-medium text-tinta hover:text-helecho">
                  Ficha de {(t as Taxon).nombre}
                </Link>
                <span className="block text-zinc-500">
                  {(ruta as Taxon[]).map((x) => x.nombre).join(' › ') || 'Es el ancestro común'}
                </span>
              </span>
            </div>
          ))}
          <p className="text-zinc-700">
            {difieren === 0
              ? 'Los 10 sistemas tienen el mismo estado en ambos grupos.'
              : `${difieren} de 10 sistemas difieren (uno tiene datos y el otro no, o está ausente).`}
          </p>
          <label className="flex min-h-[40px] items-center gap-2 text-sm text-zinc-700">
            <input
              type="checkbox"
              checked={soloDiferencias}
              onChange={(e) => setSoloDiferencias(e.target.checked)}
              className="size-4 accent-[#3e684a]"
            />
            Mostrar solo los sistemas que difieren
          </label>
        </div>
      )}
    </div>
  );

  if (!c) {
    return (
      <PantallaFicha lateral={lateral} arriba={<FiltroFuentesToggle />} actual="comparar" abrirMenu>
        <div className="explorar-fondo flex h-full items-center justify-center p-6">
          <div className="flex size-[min(26rem,80vw)] flex-col items-center justify-center rounded-full border-2 border-dashed border-helecho/40 bg-white/80 p-10 text-center">
            <p className="font-display text-2xl font-semibold text-tinta">A vs B</p>
            <p className="mt-2 text-zinc-600">{aviso}</p>
          </div>
        </div>
      </PantallaFicha>
    );
  }

  const fila = (id: string) => c.filas.find((f) => f.id === id)!;
  const titulo = `${c.a.nombre} vs ${c.b.nombre}`;
  const embA = consultas.getEmbriologiaEfectiva(c.a.slug);
  const embB = consultas.getEmbriologiaEfectiva(c.b.slug);
  const celdaResumen = (t: Taxon): Celda =>
    t.resumen.length ? { estado: 'datos', datos: t.resumen } : { estado: 'vacio' };

  const principal = (
    <div className="space-y-10">
      <div className="grid gap-6 @2xl:grid-cols-2">
        {[c.a, c.b].map((t, i) => (
          <div key={t.slug} className="space-y-2">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-tinta">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full"
                style={{ background: i ? COLOR_B : COLOR_A }}
              />
              {t.nombre}
              <RankBadge nivel={t.nivel} />
            </p>
            {imagenes[t.slug] && <FiguraGrupo imagen={imagenes[t.slug]} />}
          </div>
        ))}
      </div>

      <section aria-labelledby="titulo-emb" className="space-y-3">
        <h3 id="titulo-emb" className="font-display text-xl font-semibold text-tinta">
          Desarrollo embrionario
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-zinc-200 text-sm text-zinc-500">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Criterio
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  {c.a.nombre}
                </th>
                <th scope="col" className="py-2 font-medium">
                  {c.b.nombre}
                </th>
              </tr>
            </thead>
            <tbody>
              {CRITERIOS.map((cr) => {
                const va = embA[cr]?.valor;
                const vb = embB[cr]?.valor;
                const distinto = va !== vb;
                return (
                  <tr key={cr} className="border-b border-zinc-100">
                    <th scope="row" className="py-2.5 pr-4 font-normal text-zinc-600">
                      <span className="inline-flex items-center gap-2">
                        {CRITERIO_LABEL[cr]}
                        {distinto && (
                          <span className="rounded-full bg-ocre/15 px-2 py-0.5 text-[11px] font-medium text-amber-900">
                            Difiere
                          </span>
                        )}
                      </span>
                    </th>
                    {[va, vb].map((v, i) => (
                      <td key={i} className={`py-2.5 ${i === 0 ? 'pr-4' : ''}`}>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm ${
                            v ? 'bg-salvia font-medium text-tinta' : 'bg-zinc-100 text-zinc-400'
                          }`}
                        >
                          <span
                            aria-hidden
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: v ? COLOR_VALOR[v] : COLOR_SIN_DATO }}
                          />
                          {v ? VALOR_LABEL[v] : 'Sin datos'}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {[
        { id: 'resumen', titulo: 'Resumen', a: celdaResumen(c.a), b: celdaResumen(c.b) },
        { id: 'morfologia', titulo: 'Morfología externa', a: fila('morfologia').a, b: fila('morfologia').b },
        { id: 'especiales', titulo: 'Estructuras especiales', a: fila('especiales').a, b: fila('especiales').b },
      ].map((s) => (
        <section key={s.id} aria-labelledby={`titulo-${s.id}`} className="space-y-4">
          <h3 id={`titulo-${s.id}`} className="font-display text-xl font-semibold text-tinta">
            {s.titulo}
          </h3>
          <TablaComparativa a={{ nombre: c.a.nombre, celda: s.a }} b={{ nombre: c.b.nombre, celda: s.b }} />
        </section>
      ))}
    </div>
  );

  const sistemas: DiapositivaSistema[] = filasSistema
    .filter((f) => !soloDiferencias || f.distinto)
    .map((f): DiapositivaSistema => {
      const sistema = f.id.slice('sistema-'.length) as SistemaId;
      const ambosVacios = f.a.estado === 'vacio' && f.b.estado === 'vacio';
      return {
        sistema,
        titulo: f.etiqueta,
        detalle: detalleSatelite(f.a, f.b, f.distinto),
        resumen: `${c.a.nombre}: ${estadoTexto(f.a)}. ${c.b.nombre}: ${estadoTexto(f.b)}.`,
        estado: ambosVacios ? 'vacio' : f.a.estado === 'ausente' && f.b.estado === 'ausente' ? 'ausente' : 'datos',
        destacado: f.distinto,
        vacio: `Ni los apuntes ni las fuentes consultadas describen «${f.etiqueta}» en ${c.a.nombre} ni en ${c.b.nombre}.`,
        contenido: <TablaComparativa a={{ nombre: c.a.nombre, celda: f.a }} b={{ nombre: c.b.nombre, celda: f.b }} />,
      };
    })
    .sort((x, y) => SISTEMAS.indexOf(x.sistema) - SISTEMAS.indexOf(y.sistema));

  return (
    <PantallaFicha lateral={lateral} arriba={<FiltroFuentesToggle />} actual="comparar">
      <Presentacion
        key={`${c.a.slug}-${c.b.slug}`}
        centro={{
          etiqueta: `Abrir la comparación de ${c.a.nombre} y ${c.b.nombre}`,
          contenido: (
            <CentroComparacion
              a={{ nombre: c.a.nombre, imagen: imagenes[c.a.slug] }}
              b={{ nombre: c.b.nombre, imagen: imagenes[c.b.slug] }}
              ancestro={c.ancestroComun.nombre}
            />
          ),
        }}
        principal={{
          antetitulo: `Ancestro común: ${c.ancestroComun.nombre}`,
          titulo,
          subtitulo: 'Desarrollo embrionario, resumen y anatomía lado a lado',
          contenido: principal,
        }}
        antetituloSistema={titulo}
        sistemas={sistemas}
        enlaces={[]}
        anchoSistemas={1040}
        contenidoAncho
      />
    </PantallaFicha>
  );
}
