'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { IconoSistema } from '@/components/ui/iconos-sistemas';
import { useEsEscritorio } from '@/components/ui/use-media';
import type { SistemaId } from '@/lib/types';

export type DiapositivaSistema = {
  sistema: SistemaId;
  titulo: string;
  cantidad: number;
  apuntes: number;
  externos: number;
  estado: 'datos' | 'ausente' | 'vacio';
  contenido: React.ReactNode;
};

export type EnlaceGrupo = { slug: string; nombre: string; nombreComun?: string };

type Circulo = { x: number; y: number; r: number };

const HASH_PRINCIPAL = 'seccion-resumen';
const HASHES_PRINCIPAL = new Set([HASH_PRINCIPAL, 'seccion-embriologia', 'principal']);

function suscribirHash(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

export function irAHash(hash: string) {
  const url = `${window.location.pathname}${window.location.search}${hash ? `#${hash}` : ''}`;
  window.history.replaceState(null, '', url);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

const redondear = (v: number) => Math.round(v * 100) / 100;

function disponer(n: number, vertical: boolean) {
  if (n === 0) {
    const centro = { x: 0, y: 0, r: 240 };
    return { centro, satelites: [] as Circulo[], caja: { x0: -240, x1: 240, y0: -240, y1: 240 } };
  }
  if (vertical) {
    const centro = { x: 0, y: 0, r: 150 };
    const r = 70;
    const satelites = Array.from({ length: n }, (_, i) => ({
      x: i % 2 === 0 ? -92 : 92,
      y: centro.r + 70 + r + Math.floor(i / 2) * (2 * r + 34) + (i % 2) * 40,
      r,
    }));
    const ultimo = satelites.at(-1)!;
    return { centro, satelites, caja: { x0: -170, x1: 170, y0: -centro.r - 70, y1: ultimo.y + r + 40 } };
  }
  const centro = { x: 0, y: 0, r: 230 };
  const r = n > 10 ? 70 : 92;
  const distancia = centro.r + r + 120;
  const satelites = Array.from({ length: n }, (_, i) => {
    const angulo = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: redondear(distancia * Math.cos(angulo)), y: redondear(distancia * Math.sin(angulo) * 0.86), r };
  });
  const ext = distancia + r;
  return { centro, satelites, caja: { x0: -ext, x1: ext, y0: -ext * 0.86 - r * 0.14, y1: ext * 0.86 + r * 0.14 } };
}

function conector(a: Circulo, b: Circulo, i: number) {
  const ang = Math.atan2(b.y - a.y, b.x - a.x);
  const p0 = { x: a.x + a.r * Math.cos(ang), y: a.y + a.r * Math.sin(ang) };
  const p1 = { x: b.x - b.r * Math.cos(ang), y: b.y - b.r * Math.sin(ang) };
  const curva = (i % 2 === 0 ? 1 : -1) * 22;
  const c = { x: (p0.x + p1.x) / 2 - Math.sin(ang) * curva, y: (p0.y + p1.y) / 2 + Math.cos(ang) * curva };
  return [p0, c, p1].map((p, i) => `${['M', ' Q', ' '][i]}${redondear(p.x)},${redondear(p.y)}`).join('');
}

const ESTADO_TEXTO = { datos: '', ausente: 'Ausente', vacio: 'Sin datos' } as const;

function resumenFuentes(s: DiapositivaSistema) {
  if (s.cantidad === 0) return 'Sin datos';
  const total = `${s.cantidad} ${s.cantidad === 1 ? 'dato' : 'datos'}`;
  if (s.externos === 0) return `${total}, todos de los apuntes`;
  if (s.apuntes === 0) return `${total}, todos de fuentes externas`;
  return `${total}: ${s.apuntes} de los apuntes y ${s.externos} de fuentes externas`;
}

function MiniAnillo({
  sistemas,
  actual,
  onIr,
}: {
  sistemas: DiapositivaSistema[];
  actual: string;
  onIr: (id: string) => void;
}) {
  const radio = 26;
  return (
    <div
      className="relative ml-auto hidden size-[72px] shrink-0 sm:block"
      role="group"
      aria-label="Ir a otra diapositiva"
    >
      <span aria-hidden="true" className="absolute inset-[10px] rounded-full border border-zinc-200" />
      <button
        type="button"
        onClick={() => onIr('principal')}
        aria-label="Diapositiva principal"
        aria-current={actual === 'principal' ? 'true' : undefined}
        className={`absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
          actual === 'principal' ? 'border-tinta bg-tinta' : 'border-tinta/40 bg-white hover:border-helecho'
        }`}
      />
      {sistemas.map((s, i) => {
        const angulo = -Math.PI / 2 + (2 * Math.PI * i) / sistemas.length;
        const activo = actual === s.sistema;
        return (
          <button
            key={s.sistema}
            type="button"
            onClick={() => onIr(s.sistema)}
            aria-label={s.titulo}
            aria-current={activo ? 'true' : undefined}
            title={s.titulo}
            className={`absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              activo
                ? 'scale-125 border-tinta bg-tinta'
                : s.estado === 'datos'
                  ? 'border-helecho bg-helecho/70 hover:bg-helecho'
                  : 'border-zinc-300 bg-white hover:border-helecho'
            }`}
            style={{ left: redondear(36 + radio * Math.cos(angulo)), top: redondear(36 + radio * Math.sin(angulo)) }}
          />
        );
      })}
    </div>
  );
}

export function Presentacion({
  nombre,
  nombreComun,
  nivel,
  imagen,
  principal,
  sistemas,
  enlaces,
}: {
  nombre: string;
  nombreComun?: string;
  nivel: string;
  imagen?: { src: string; alt: string };
  principal: React.ReactNode;
  sistemas: DiapositivaSistema[];
  enlaces: EnlaceGrupo[];
}) {
  const lienzo = useRef<HTMLDivElement>(null);
  const [tam, setTam] = useState({ w: 0, h: 0 });
  const escritorio = useEsEscritorio();
  const hash = useSyncExternalStore(
    suscribirHash,
    () => window.location.hash.slice(1),
    () => '',
  );
  const titulo = useRef<HTMLHeadingElement>(null);
  const gesto = useRef<{ x: number; y: number; t: number } | null>(null);

  useLayoutEffect(() => {
    const el = lienzo.current;
    if (!el) return;
    const medir = () => setTam({ w: el.clientWidth, h: el.clientHeight });
    medir();
    const obs = new ResizeObserver(medir);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const orden = ['principal', ...sistemas.map((s) => s.sistema)] as const;
  const actual: string | null = HASHES_PRINCIPAL.has(hash)
    ? 'principal'
    : hash.startsWith('sistema-') && sistemas.some((s) => `sistema-${s.sistema}` === hash)
      ? hash.slice(8)
      : null;
  const indice = actual ? orden.indexOf(actual as (typeof orden)[number]) : -1;

  const ir = (id: string | null) => irAHash(id === null ? '' : id === 'principal' ? HASH_PRINCIPAL : `sistema-${id}`);

  useEffect(() => {
    const alPresionar = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable="true"], details')) return;
      if (e.key === 'Escape' && actual) ir(null);
      else if (e.key === 'ArrowRight') ir(orden[Math.min(indice + 1, orden.length - 1)]);
      else if (e.key === 'ArrowLeft' && indice > 0) ir(orden[indice - 1]);
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  });

  useEffect(() => {
    if (actual) titulo.current?.focus({ preventScroll: true });
  }, [actual]);

  const satelitesTotales = sistemas.length > 0 ? sistemas.length : enlaces.length;
  const vertical = tam.w > 0 && tam.w / tam.h < 0.8;
  const { centro, satelites, caja } = disponer(satelitesTotales, vertical);
  const circuloActual = actual === 'principal' ? centro : actual ? satelites[indice - 1] : null;

  const ancho = caja.x1 - caja.x0;
  const alto = caja.y1 - caja.y0;
  const anchoMax = actual === 'principal' ? 1080 : 800;
  const pagina = escritorio
    ? { w: Math.min(anchoMax, tam.w - 48), h: tam.h - 68 - 84, x: 0, y: 68 }
    : { w: tam.w - 16, h: tam.h - 64 - 80, x: 8, y: 64 };
  if (escritorio) pagina.x = (tam.w - pagina.w) / 2;
  const r0 = (Math.min(pagina.w, pagina.h) / 2) * 0.92;
  const centroPagina = { x: pagina.x + pagina.w / 2, y: pagina.y + pagina.h / 2 };
  const k = circuloActual ? r0 / circuloActual.r : Math.min(tam.w / (ancho + 80), tam.h / (alto + 140)) || 0.0001;
  const foco = circuloActual ?? { x: (caja.x0 + caja.x1) / 2, y: (caja.y0 + caja.y1) / 2 - 20 / k };
  const ancla = circuloActual ? centroPagina : { x: tam.w / 2, y: tam.h / 2 };
  const transformacion = `translate(${ancla.x - k * foco.x}px, ${ancla.y - k * foco.y}px) scale(${k})`;
  const sistemaActual = actual && actual !== 'principal' ? sistemas[indice - 1] : null;

  return (
    <div ref={lienzo} className="explorar-fondo relative h-full overflow-hidden">
      <div
        aria-hidden={actual !== null}
        className={`ficha-mundo absolute left-0 top-0 origin-top-left ${actual ? 'opacity-30' : ''}`}
        style={{ transform: transformacion, visibility: tam.w ? 'visible' : 'hidden' }}
      >
        <svg
          aria-hidden="true"
          className="absolute overflow-visible"
          style={{ left: caja.x0, top: caja.y0, width: ancho, height: alto }}
          viewBox={`${caja.x0} ${caja.y0} ${ancho} ${alto}`}
        >
          {satelites.map((s, i) => (
            <path
              key={i}
              d={conector(vertical && i >= 2 ? satelites[i - 2] : centro, s, i)}
              fill="none"
              strokeWidth={2}
              strokeDasharray={sistemas[i] && sistemas[i].estado !== 'datos' ? '5 6' : undefined}
              className="stroke-helecho/35"
            />
          ))}
        </svg>

        <button
          type="button"
          onClick={() => ir('principal')}
          tabIndex={actual ? -1 : 0}
          aria-label={`Abrir resumen y desarrollo embrionario de ${nombre}`}
          className="group absolute overflow-hidden rounded-full bg-tinta text-left shadow-[0_20px_60px_rgba(22,42,56,0.25)] ring-8 ring-white/80"
          style={{ left: centro.x - centro.r, top: centro.y - centro.r, width: centro.r * 2, height: centro.r * 2 }}
        >
          {imagen && (
            <Image
              src={imagen.src}
              alt=""
              fill
              sizes="480px"
              priority
              className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/30 to-transparent" />
          <span className="absolute inset-x-0 bottom-[16%] block px-[14%] text-center text-white">
            <span className="block text-[14px] font-medium text-white/70">{nivel}</span>
            <span className="block font-display text-[44px] font-semibold leading-none">{nombre}</span>
            {nombreComun && <span className="mt-1 block text-lg text-white/80">{nombreComun}</span>}
            <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[13px] text-white/90">
              Resumen y desarrollo embrionario
            </span>
          </span>
        </button>

        {sistemas.map((s, i) => {
          const c = satelites[i];
          const vacio = s.estado !== 'datos';
          return (
            <button
              key={s.sistema}
              type="button"
              onClick={() => ir(s.sistema)}
              tabIndex={actual ? -1 : 0}
              aria-label={`${s.titulo}: ${s.estado === 'datos' ? `${s.cantidad} ${s.cantidad === 1 ? 'dato' : 'datos'}` : ESTADO_TEXTO[s.estado].toLowerCase()}`}
              className={`absolute flex flex-col items-center justify-center gap-1.5 rounded-full border-2 bg-white px-3 text-center transition-[border-color,box-shadow] duration-200 hover:shadow-[0_10px_30px_rgba(22,42,56,0.18)] ${
                s.estado === 'datos'
                  ? 'border-helecho/60 text-tinta hover:border-helecho'
                  : s.estado === 'ausente'
                    ? 'border-dashed border-oxido/60 text-oxido'
                    : 'border-dashed border-zinc-300 text-zinc-400'
              }`}
              style={{ left: c.x - c.r, top: c.y - c.r, width: c.r * 2, height: c.r * 2 }}
            >
              <IconoSistema id={s.sistema} className={`size-[38%] ${vacio ? '' : 'text-helecho'}`} />
              <span className="font-display text-[15px] font-semibold leading-tight">{s.titulo}</span>
              <span className="text-[12px] text-zinc-500">
                {s.estado === 'datos' ? `${s.cantidad} ${s.cantidad === 1 ? 'dato' : 'datos'}` : ESTADO_TEXTO[s.estado]}
              </span>
            </button>
          );
        })}

        {sistemas.length === 0 &&
          enlaces.map((e, i) => {
            const c = satelites[i];
            return (
              <Link
                key={e.slug}
                href={`/grupo/${e.slug}`}
                tabIndex={actual ? -1 : 0}
                className="absolute flex flex-col items-center justify-center rounded-full border-2 border-helecho/50 bg-white px-2 text-center text-tinta transition-[border-color,box-shadow] duration-200 hover:border-helecho hover:shadow-[0_10px_30px_rgba(22,42,56,0.18)]"
                style={{ left: c.x - c.r, top: c.y - c.r, width: c.r * 2, height: c.r * 2 }}
              >
                <span className="font-display text-[15px] font-semibold leading-tight">{e.nombre}</span>
                {e.nombreComun && (
                  <span className="mt-0.5 text-[11px] leading-tight text-zinc-500">{e.nombreComun}</span>
                )}
              </Link>
            );
          })}
      </div>

      {actual && (
        <section
          key={actual}
          aria-labelledby="diapositiva-titulo"
          className="ficha-pagina absolute z-10 flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(22,42,56,0.2)] ring-1 ring-zinc-200"
          style={
            {
              left: pagina.x,
              top: pagina.y,
              width: pagina.w,
              height: pagina.h,
              '--ix': `${Math.max(0, (pagina.w - 2 * r0) / 2)}px`,
              '--iy': `${Math.max(0, (pagina.h - 2 * r0) / 2)}px`,
              '--r0': `${r0}px`,
            } as React.CSSProperties
          }
          onPointerDown={(e) => {
            if (e.pointerType !== 'mouse') gesto.current = { x: e.clientX, y: e.clientY, t: e.timeStamp };
          }}
          onPointerUp={(e) => {
            const g = gesto.current;
            gesto.current = null;
            if (!g) return;
            const dx = e.clientX - g.x;
            const dy = e.clientY - g.y;
            const rapido = Math.abs(dx) / Math.max(1, e.timeStamp - g.t) > 0.11;
            if (Math.abs(dx) < Math.abs(dy) * 1.5 || (Math.abs(dx) < 70 && !rapido)) return;
            if (dx < 0 && indice < orden.length - 1) ir(orden[indice + 1]);
            if (dx > 0 && indice > 0) ir(orden[indice - 1]);
          }}
        >
          <header className="ficha-pagina-contenido flex items-center gap-4 border-b border-zinc-100 px-5 py-4 sm:px-8 sm:py-5">
            {sistemaActual && (
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-salvia text-helecho">
                <IconoSistema id={sistemaActual.sistema} className="size-6" />
              </span>
            )}
            <div className="min-w-0">
              <p className="text-sm text-zinc-500">{sistemaActual ? nombre : nivel}</p>
              <h2
                id="diapositiva-titulo"
                ref={titulo}
                tabIndex={-1}
                style={{ outline: 'none' }}
                className="font-display text-2xl font-semibold leading-tight text-tinta sm:text-[28px]"
              >
                {sistemaActual ? sistemaActual.titulo : nombre}
              </h2>
              <p className="mt-0.5 text-sm text-zinc-500">
                {sistemaActual ? resumenFuentes(sistemaActual) : (nombreComun ?? 'Resumen y desarrollo embrionario')}
              </p>
            </div>
            {sistemas.length > 0 && <MiniAnillo sistemas={sistemas} actual={actual} onIr={ir} />}
          </header>
          <div className="ficha-pagina-contenido @container flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8">
            {sistemaActual?.estado === 'vacio' ? (
              <div className="mx-auto flex h-full max-w-[52ch] flex-col items-center justify-center gap-4 text-center">
                <IconoSistema id={sistemaActual.sistema} className="size-12 text-zinc-300" />
                <p className="text-[17px] leading-relaxed text-zinc-600">
                  No hay datos sobre «{sistemaActual.titulo}» de {nombre} en los apuntes ni en las fuentes consultadas.
                </p>
                <button
                  type="button"
                  onClick={() => ir(null)}
                  className="text-sm font-medium text-helecho hover:underline"
                >
                  Volver a la vista general
                </button>
              </div>
            ) : (
              <div className={`text-[17px] ${sistemaActual ? 'mx-auto max-w-[68ch]' : ''}`}>
                {sistemaActual ? sistemaActual.contenido : principal}
              </div>
            )}
          </div>
        </section>
      )}

      <nav
        aria-label="Diapositivas"
        className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-2 px-4"
      >
        <button
          type="button"
          onClick={() => ir(indice > 0 ? orden[indice - 1] : null)}
          disabled={indice <= 0}
          aria-label="Diapositiva anterior"
          className="landing-presion flex size-11 items-center justify-center rounded-full bg-white text-tinta shadow-md ring-1 ring-zinc-200 hover:text-helecho disabled:opacity-40"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => ir(actual ? null : 'principal')}
          className="landing-presion min-h-[44px] rounded-full bg-tinta px-5 text-sm font-medium text-white shadow-md hover:bg-helecho"
        >
          {actual ? 'Vista general' : 'Empezar'}
        </button>
        <button
          type="button"
          onClick={() => ir(orden[Math.min(indice + 1, orden.length - 1)])}
          disabled={indice === orden.length - 1}
          aria-label="Diapositiva siguiente"
          className="landing-presion flex size-11 items-center justify-center rounded-full bg-white text-tinta shadow-md ring-1 ring-zinc-200 hover:text-helecho disabled:opacity-40"
        >
          <span aria-hidden="true">→</span>
        </button>
        {actual && (
          <span className="ml-1 rounded-full bg-white/90 px-3 py-1.5 text-xs text-zinc-600 shadow-sm ring-1 ring-zinc-200">
            {indice + 1} / {orden.length}
          </span>
        )}
      </nav>
    </div>
  );
}
