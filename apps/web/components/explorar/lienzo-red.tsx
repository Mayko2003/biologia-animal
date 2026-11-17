'use client';

import type ForceGraph from 'force-graph';
import { useEffect, useRef } from 'react';
import { NIVEL_ORDEN } from '@/lib/etiquetas';
import { colorNodo, type ColorPor, type Disposicion, type NodoRed, type Punto, type Red } from '@/lib/red';
import type { Nivel } from '@/lib/types';

type Nodo = NodoRed & { x?: number; y?: number; fx?: number; fy?: number; alfa: number };
type Grafo = ForceGraph<Nodo>;

const RADIO: Record<Nivel, number> = {
  reino: 13,
  subreino: 10.5,
  rama: 10,
  clado: 9.5,
  phylum: 8.5,
  subphylum: 6.5,
  superclase: 6,
  clase: 5.2,
  subclase: 4.4,
};
const RADIO_RASGO = 7.5;
const ANCHO_PANEL = 352;
const DURACION = 650;
const TINTA = '22, 42, 56';

const radio = (n: Nodo) => (n.tipo === 'rasgo' ? RADIO_RASGO : RADIO[n.nivel!]);
const suavizar = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

function rgba(hex: string, a: number) {
  const v = parseInt(hex.slice(1), 16);
  return `rgba(${(v >> 16) & 255}, ${(v >> 8) & 255}, ${v & 255}, ${a})`;
}

export type EstadoLienzo = {
  colorPor: ColorPor;
  disposicion: Disposicion;
  seleccion: string | null;
  vecinos: Set<string>;
};

function crearPintor(g: Grafo, inicial: EstadoLienzo, base: Disposicion, fuente: string, reducido: boolean) {
  let estado = inicial;
  let hover: string | null = null;
  let animacion = 0;
  let alfaTitulos = 1;
  const ms = (v: number) => (reducido ? 0 : v);
  const escritorio = () => window.matchMedia('(min-width: 1024px)').matches;
  const nodos = () => g.graphData().nodes;
  const porId = () => new Map(nodos().map((n) => [n.id, n]));

  function atenuado(id: string) {
    const { seleccion, vecinos } = estado;
    return seleccion !== null && id !== seleccion && !vecinos.has(id);
  }

  function repintar() {
    g.nodeCanvasObject(dibujarNodo);
  }

  function colocar(d: Disposicion, animar: boolean) {
    cancelAnimationFrame(animacion);
    const lista = nodos();
    const desde = lista.map((n) => ({ x: n.x!, y: n.y!, a: n.alfa }));
    const hacia = lista.map((n, i) => {
      const p = d.pos.get(n.id);
      return p ? { x: p.x, y: p.y, a: 1 } : { ...desde[i], a: 0 };
    });
    const fijar = (t: number) => {
      const k = suavizar(t);
      lista.forEach((n, i) => {
        n.x = n.fx = desde[i].x + (hacia[i].x - desde[i].x) * k;
        n.y = n.fy = desde[i].y + (hacia[i].y - desde[i].y) * k;
        n.alfa = desde[i].a + (hacia[i].a - desde[i].a) * k;
      });
      alfaTitulos = k;
    };
    if (!animar || reducido) {
      fijar(1);
      repintar();
      return;
    }
    const inicio = performance.now();
    g.autoPauseRedraw(false);
    const paso = (ahora: number) => {
      const t = Math.min(1, (ahora - inicio) / DURACION);
      fijar(t);
      if (t < 1) animacion = requestAnimationFrame(paso);
      else {
        g.autoPauseRedraw(true);
        repintar();
      }
    };
    animacion = requestAnimationFrame(paso);
  }

  function encuadrar(d: Disposicion, duracion: number) {
    const puntos = [...d.pos.values()];
    if (puntos.length === 0) return;
    const xs = puntos.map((p) => p.x);
    const ys = puntos.map((p) => p.y);
    const margen = 120;
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const k = Math.min(g.width() / (x1 - x0 + margen), g.height() / (y1 - y0 + margen), 2.5);
    g.centerAt((x0 + x1) / 2, (y0 + y1) / 2, ms(duracion));
    g.zoom(Math.max(k, escritorio() ? 0.3 : 0.45), ms(duracion));
  }

  function enfocar(id: string) {
    const p = estado.disposicion.pos.get(id);
    if (!p) return;
    const k = Math.max(g.zoom(), 2.2);
    const [dx, dy] = escritorio() ? [ANCHO_PANEL / 2 / k, 0] : [0, (window.innerHeight * 0.27) / k];
    g.centerAt(p.x + dx, p.y + dy, ms(700));
    g.zoom(k, ms(700));
  }

  function dibujarEnlaces(ctx: CanvasRenderingContext2D) {
    const mapa = porId();
    const { seleccion, disposicion } = estado;
    for (const [hijo, padre] of disposicion.padre) {
      const a = mapa.get(hijo);
      const b = mapa.get(padre);
      const c = disposicion.centro.get(hijo);
      if (!a || !b || !c) continue;
      const alfa = Math.min(a.alfa, b.alfa);
      if (alfa < 0.02) continue;
      const resaltado = seleccion !== null && (hijo === seleccion || padre === seleccion);
      const fuera = atenuado(hijo) || atenuado(padre);
      const rasgo = b.tipo === 'rasgo';
      ctx.strokeStyle = rasgo
        ? rgba(colorNodo(b, estado.colorPor), (resaltado ? 0.85 : fuera ? 0.06 : 0.45) * alfa)
        : `rgba(${TINTA}, ${(resaltado ? 0.75 : fuera ? 0.06 : 0.28) * alfa})`;
      ctx.lineWidth = resaltado ? 1.8 : 1;
      ctx.setLineDash(rasgo ? [3, 3] : []);
      const ra = Math.hypot(a.x! - c.x, a.y! - c.y);
      const rb = Math.hypot(b.x! - c.x, b.y! - c.y);
      const medio = (ra + rb) / 2;
      const angA = Math.atan2(a.y! - c.y, a.x! - c.x);
      const angB = Math.atan2(b.y! - c.y, b.x! - c.x);
      const cp = (ang: number): Punto => ({ x: c.x + medio * Math.cos(ang), y: c.y + medio * Math.sin(ang) });
      const [c1, c2] = rb < 1 ? [{ x: b.x!, y: b.y! }, cp(angA)] : [cp(angB), cp(angA)];
      ctx.beginPath();
      ctx.moveTo(b.x!, b.y!);
      ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, a.x!, a.y!);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  function dibujarTitulos(ctx: CanvasRenderingContext2D, escala: number) {
    for (const grupo of estado.disposicion.grupos) {
      if (!grupo.titulo) continue;
      const tam = Math.max(18, 14 / escala);
      ctx.font = `600 ${tam}px ${fuente}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = `rgba(${TINTA}, ${0.85 * alfaTitulos})`;
      ctx.fillText(grupo.titulo, grupo.x, grupo.y - grupo.r - 8);
    }
  }

  function dibujarNodo(n: Nodo, ctx: CanvasRenderingContext2D, escala: number) {
    if (n.alfa < 0.02) return;
    const { colorPor, seleccion } = estado;
    const x = n.x!;
    const y = n.y!;
    const r = radio(n);
    const color = colorNodo(n, colorPor);
    const a = (atenuado(n.id) ? 0.15 : 1) * n.alfa;
    const elegido = n.id === seleccion;

    if (n.tipo === 'rasgo') {
      ctx.setLineDash([2.4, 1.8]);
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = rgba(color, a);
      ctx.fillStyle = rgba(color, 0.14 * a);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = rgba(color, 0.85 * a);
      for (const [dx, dy] of [
        [-2.4, -1.6],
        [2.6, -1],
        [0, 2.8],
      ]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, 1.2, 0, 2 * Math.PI);
        ctx.fill();
      }
    } else {
      ctx.fillStyle = rgba(color, 0.1 * a);
      ctx.beginPath();
      ctx.arc(x, y, r * 1.9, 0, 2 * Math.PI);
      ctx.fill();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = rgba(color, 0.35 * a);
      ctx.beginPath();
      ctx.arc(x, y, r * 1.38, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = rgba(color, a);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * a})`;
      ctx.beginPath();
      ctx.arc(x - r * 0.28, y - r * 0.26, r * 0.36, 0, 2 * Math.PI);
      ctx.fill();
    }

    if (elegido) {
      ctx.lineWidth = 1.6 / escala;
      ctx.strokeStyle = `rgba(${TINTA}, 0.9)`;
      ctx.beginPath();
      ctx.arc(x, y, r * 2.2, 0, 2 * Math.PI);
      ctx.stroke();
    }

    const orden = n.tipo === 'rasgo' ? 0 : NIVEL_ORDEN[n.nivel!];
    const umbral = orden < NIVEL_ORDEN.phylum ? 0.4 : orden === NIVEL_ORDEN.phylum ? 0.6 : 1.5;
    const enGrupo = estado.disposicion.grupos.length > 0;
    const mostrar =
      elegido ||
      n.id === hover ||
      (a > 0.5 && (escala > umbral || seleccion !== null || (enGrupo && escala > umbral * 0.6)));
    if (!mostrar) return;
    const importante = orden <= NIVEL_ORDEN.phylum;
    const tam = (elegido ? 13 : 11) / escala;
    ctx.font = `${elegido || importante ? 600 : 500} ${tam}px ${fuente}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const ty = y + r * 1.45 + 2 / escala;
    ctx.lineWidth = 3 / escala;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * a})`;
    ctx.strokeText(n.nombre, x, ty);
    ctx.fillStyle = `rgba(${TINTA}, ${a})`;
    ctx.fillText(n.nombre, x, ty);
  }

  for (const n of nodos()) {
    const p = inicial.disposicion.pos.get(n.id) ?? base.pos.get(n.id) ?? { x: 0, y: 0 };
    n.x = n.fx = p.x;
    n.y = n.fy = p.y;
    n.alfa = inicial.disposicion.pos.has(n.id) ? 1 : 0;
  }
  g.onRenderFramePre((ctx) => dibujarEnlaces(ctx))
    .onRenderFramePost((ctx, escala) => dibujarTitulos(ctx, escala))
    .nodePointerAreaPaint((n, color, ctx) => {
      if (n.alfa < 0.5) return;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(n.x!, n.y!, radio(n) * 1.8, 0, 2 * Math.PI);
      ctx.fill();
    });
  repintar();

  return {
    iniciar() {
      if (estado.seleccion) enfocar(estado.seleccion);
      else encuadrar(estado.disposicion, 0);
    },
    actualizar(nuevo: EstadoLienzo) {
      const previo = estado;
      estado = nuevo;
      if (previo.disposicion !== nuevo.disposicion) {
        colocar(nuevo.disposicion, true);
        if (!nuevo.seleccion || !nuevo.disposicion.pos.has(nuevo.seleccion)) encuadrar(nuevo.disposicion, DURACION);
      } else repintar();
      if (nuevo.seleccion && previo.seleccion !== nuevo.seleccion) enfocar(nuevo.seleccion);
    },
    hover(id: string | null) {
      hover = id;
      repintar();
    },
    detener() {
      cancelAnimationFrame(animacion);
    },
  };
}

export function LienzoRed({
  red,
  base,
  estado,
  onSeleccionar,
}: {
  red: Red;
  base: Disposicion;
  estado: EstadoLienzo;
  onSeleccionar: (id: string | null) => void;
}) {
  const contenedor = useRef<HTMLDivElement>(null);
  const pintor = useRef<ReturnType<typeof crearPintor> | null>(null);
  const ultimoEstado = useRef(estado);
  const alSeleccionar = useRef(onSeleccionar);

  useEffect(() => {
    alSeleccionar.current = onSeleccionar;
  }, [onSeleccionar]);

  useEffect(() => {
    ultimoEstado.current = estado;
    pintor.current?.actualizar(estado);
  }, [estado]);

  useEffect(() => {
    const el = contenedor.current;
    if (!el) return;
    let cancelado = false;
    let observador: ResizeObserver | undefined;
    let grafo: Grafo | undefined;
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fuente =
      getComputedStyle(document.documentElement).getPropertyValue('--font-bricolage').trim() || 'system-ui, sans-serif';

    import('force-graph').then(({ default: Clase }) => {
      if (cancelado) return;
      const g = new Clase<Nodo>(el)
        .width(el.clientWidth)
        .height(el.clientHeight)
        .nodeId('id')
        .warmupTicks(0)
        .cooldownTicks(0)
        .enableNodeDrag(false)
        .minZoom(0.15)
        .maxZoom(8)
        .linkVisibility(false)
        .onNodeClick((n) => alSeleccionar.current(n.id))
        .onBackgroundClick(() => alSeleccionar.current(null))
        .onNodeHover((n) => {
          el.style.cursor = n ? 'pointer' : 'grab';
          pintor.current?.hover(n?.id ?? null);
        });
      g.d3Force('charge', null).d3Force('link', null).d3Force('center', null);
      g.graphData({ nodes: red.nodos.map((n) => ({ ...n, alfa: 0 })), links: [] });
      pintor.current = crearPintor(g, ultimoEstado.current, base, fuente, reducido);
      pintor.current.iniciar();
      grafo = g;
      observador = new ResizeObserver(() => g.width(el.clientWidth).height(el.clientHeight));
      observador.observe(el);
    });

    return () => {
      cancelado = true;
      observador?.disconnect();
      pintor.current?.detener();
      grafo?._destructor();
      pintor.current = null;
    };
  }, [red, base]);

  return (
    <div
      ref={contenedor}
      role="img"
      aria-label="Red de los grupos animales: cada nodo es un grupo o un rasgo embrionario"
      className="absolute inset-0 cursor-grab"
    />
  );
}
