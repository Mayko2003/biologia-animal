'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useActualizarParametros, useParametro } from '@/components/navegacion/use-seleccion';
import { useEsEscritorio } from '@/components/ui/use-media';
import type { DocBusqueda } from '@/lib/busqueda';
import {
  agrupar,
  alternarFiltro,
  colorPorDesdeParam,
  cumpleFiltros,
  disponerArbol,
  disponerGrupos,
  filtrosAParam,
  filtrosDesdeParam,
  hayFiltros,
  LINAJES,
  type ColorPor,
  type NodoRed,
  type Red,
} from '@/lib/red';
import { CRITERIOS, VALORES_CRITERIO, type CriterioId, type Nivel } from '@/lib/types';
import { NIVEL_ORDEN } from '@/lib/etiquetas';
import { LienzoRed, type EstadoLienzo } from './lienzo-red';
import { MenuLateral, type OpcionesFiltro } from './menu-lateral';
import { PanelNodo } from './panel-nodo';
import { useBusqueda } from './use-busqueda';

export function Explorador({ red, docs }: { red: Red; docs: DocBusqueda[] }) {
  const [q] = useParametro('q');
  const [sel] = useParametro('sel');
  const [f] = useParametro('f');
  const [color] = useParametro('color');
  const actualizar = useActualizarParametros();
  const escritorio = useEsEscritorio();

  const [texto, setTexto] = useState(q ?? '');
  const [qPrevio, setQPrevio] = useState(q);
  const [abierto, setAbierto] = useState<boolean | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  if (q !== qPrevio) {
    setQPrevio(q);
    setTexto(q ?? '');
  }

  const porId = useMemo(() => new Map(red.nodos.map((n) => [n.id, n])), [red]);
  const taxones = useMemo(() => red.nodos.filter((n) => n.tipo === 'taxon'), [red]);
  const filtros = useMemo(() => filtrosDesdeParam(f), [f]);
  const colorPor = colorPorDesdeParam(color);
  const resultados = useBusqueda(docs, q);
  const nodoSel = sel ? porId.get(sel) : undefined;

  const base = useMemo(() => disponerArbol(red), [red]);
  const conFiltros = hayFiltros(filtros);
  const restringir = useMemo(
    () => (resultados.length > 1 ? new Set(resultados.map((r) => r.slug)) : null),
    [resultados],
  );
  const disposicion = useMemo(
    () => (conFiltros || restringir ? disponerGrupos(red, agrupar(red, filtros, restringir)) : base),
    [red, filtros, conFiltros, restringir, base],
  );
  const cumplen = useMemo(
    () => (conFiltros ? taxones.filter((n) => cumpleFiltros(n, filtros)).length : null),
    [conFiltros, taxones, filtros],
  );
  const relaciones = useMemo(() => {
    const padre = new Map<string, string>();
    const hijos = new Map<string, string[]>();
    const rasgos = new Map<string, string[]>();
    const agregar = (m: Map<string, string[]>, k: string, v: string) => m.set(k, [...(m.get(k) ?? []), v]);
    for (const e of red.enlaces) {
      if (e.tipo === 'taxonomia') {
        padre.set(e.target, e.source);
        agregar(hijos, e.source, e.target);
      } else {
        agregar(hijos, e.source, e.target);
        agregar(rasgos, e.target, e.source);
      }
    }
    return { padre, hijos, rasgos };
  }, [red]);

  const vecinos = useMemo(() => {
    if (!sel) return new Set<string>();
    const p = relaciones.padre.get(sel);
    return new Set([...(p ? [p] : []), ...(relaciones.hijos.get(sel) ?? []), ...(relaciones.rasgos.get(sel) ?? [])]);
  }, [sel, relaciones]);

  const estado = useMemo<EstadoLienzo>(
    () => ({ colorPor, disposicion, seleccion: nodoSel ? nodoSel.id : null, vecinos }),
    [colorPor, disposicion, nodoSel, vecinos],
  );

  const opciones = useMemo<OpcionesFiltro>(() => {
    const contar = (pred: (n: NodoRed) => boolean) => taxones.filter(pred).length;
    const niveles = [...new Set(taxones.map((n) => n.nivel!))]
      .sort((a, b) => NIVEL_ORDEN[a] - NIVEL_ORDEN[b])
      .map((valor: Nivel) => ({ valor, n: contar((n) => n.nivel === valor) }));
    const linajes = Object.fromEntries(LINAJES.map((l) => [l, contar((n) => n.linaje === l)]));
    const rasgos = Object.fromEntries(
      CRITERIOS.map((c) => [
        c,
        VALORES_CRITERIO[c].map((valor) => ({ valor, n: contar((n) => n.rasgos[c] === valor) })).filter((o) => o.n > 0),
      ]),
    ) as OpcionesFiltro['rasgos'];
    return { niveles, linajes, rasgos };
  }, [taxones]);

  const seleccionar = useCallback(
    (id: string | null) => {
      const rasgo = id ? porId.get(id)?.rasgo : undefined;
      if (rasgo && !filtros.rasgos[rasgo.criterio]?.includes(rasgo.valor)) {
        actualizar({ sel: id, f: filtrosAParam(alternarFiltro(filtros, rasgo.criterio, rasgo.valor)) });
      } else actualizar({ sel: id });
      if (id && !escritorio) setAbierto(false);
    },
    [actualizar, escritorio, porId, filtros],
  );

  const ultimaQ = useRef<string | null>(null);
  useEffect(() => {
    if (q === ultimaQ.current) return;
    ultimaQ.current = q;
    if (resultados.length === 1 && sel !== resultados[0].slug) actualizar({ sel: resultados[0].slug });
    else if (resultados.length > 1 && sel && !resultados.some((r) => r.slug === sel)) actualizar({ sel: null });
  }, [q, resultados, sel, actualizar]);

  useEffect(() => {
    const alPresionar = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sel) actualizar({ sel: null });
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  }, [sel, actualizar]);

  function buscarAhora(valor: string) {
    if (timer.current) clearTimeout(timer.current);
    setTexto(valor);
    actualizar({ q: valor.trim() || null });
  }

  function escribir(valor: string) {
    setTexto(valor);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => actualizar({ q: valor.trim() || null }), 300);
  }

  const hijos = nodoSel ? (relaciones.hijos.get(nodoSel.id) ?? []).map((id) => porId.get(id)!) : [];
  const padre = nodoSel ? porId.get(relaciones.padre.get(nodoSel.id) ?? '') : undefined;
  const rasgos = nodoSel ? (relaciones.rasgos.get(nodoSel.id) ?? []).map((id) => porId.get(id)!) : [];
  const menuAbierto = abierto ?? (escritorio || (!!q && !sel));

  return (
    <div className="explorar-fondo fixed inset-0 flex overflow-hidden">
      <MenuLateral
        abierto={menuAbierto}
        onAlternar={setAbierto}
        texto={texto}
        onTexto={escribir}
        onBuscar={buscarAhora}
        q={q}
        resultados={resultados}
        onUbicar={seleccionar}
        filtros={filtros}
        opciones={opciones}
        onFiltro={(clave: 'linaje' | 'nivel' | CriterioId, valor: string) =>
          actualizar({ f: filtrosAParam(alternarFiltro(filtros, clave, valor)) })
        }
        onLimpiar={() => actualizar({ f: null })}
        cumplen={cumplen}
        total={taxones.length}
        colorPor={colorPor}
        onColorPor={(c: ColorPor) => actualizar({ color: c === 'linaje' ? null : c })}
      />
      <div className="relative min-w-0 flex-1">
        <LienzoRed red={red} base={base} estado={estado} onSeleccionar={seleccionar} />
        {nodoSel && (
          <PanelNodo
            key={nodoSel.id}
            nodo={nodoSel}
            padre={padre}
            hijos={hijos}
            rasgos={rasgos}
            onSeleccionar={seleccionar}
            onCerrar={() => seleccionar(null)}
          />
        )}
      </div>
    </div>
  );
}
