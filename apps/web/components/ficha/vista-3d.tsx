'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { DatoList } from '@/components/taxon/dato-list';
import { IconoSistema } from '@/components/ui/iconos-sistemas';
import { SISTEMA_LABEL } from '@/lib/etiquetas';
import type { Modelo3D, PuntoAnatomico } from '@/data/modelos-3d';
import { SISTEMAS } from '@/lib/types';

const GRUPOS = ['agua', ...SISTEMAS] as const;

function suscribirVista(cb: () => void) {
  window.addEventListener('popstate', cb);
  window.addEventListener('ba:vista', cb);
  return () => {
    window.removeEventListener('popstate', cb);
    window.removeEventListener('ba:vista', cb);
  };
}

let webgl: boolean | undefined;
function hayWebGL() {
  if (webgl === undefined) {
    try {
      const c = document.createElement('canvas');
      webgl = Boolean(c.getContext('webgl2') ?? c.getContext('webgl'));
    } catch {
      webgl = false;
    }
  }
  return webgl;
}
const sinSuscripcion = () => () => {};

function useVista() {
  return useSyncExternalStore(
    suscribirVista,
    () => new URLSearchParams(window.location.search).get('vista'),
    () => null,
  );
}

function cambiarVista(v: string | null) {
  const params = new URLSearchParams(window.location.search);
  if (v) params.set('vista', v);
  else params.delete('vista');
  const qs = params.toString();
  window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
  window.dispatchEvent(new Event('ba:vista'));
}
const TITULO_GRUPO = (g: PuntoAnatomico['grupo']) => (g === 'agua' ? 'Corriente de agua' : SISTEMA_LABEL[g]);

export function SelectorVista() {
  const vista = useVista();
  return (
    <div className="inline-flex gap-0.5" role="group" aria-label="Vista">
      {[
        { valor: null, label: 'Esquema' },
        { valor: '3d', label: '3D' },
      ].map((o) => (
        <button
          key={o.label}
          type="button"
          aria-pressed={vista === o.valor || (o.valor === null && vista !== '3d')}
          onClick={() => cambiarVista(o.valor)}
          className={`inline-flex min-h-[30px] items-center rounded-full px-2.5 text-xs font-medium transition-colors ${
            (o.valor === '3d') === (vista === '3d') ? 'bg-tinta text-white' : 'text-zinc-600 hover:bg-zinc-100'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ContenidoFicha({ esquema, modelo }: { esquema: React.ReactNode; modelo?: Modelo3D }) {
  const vista = useVista();
  return modelo && vista === '3d' ? <Vista3D modelo={modelo} /> : esquema;
}

function Vista3D({ modelo }: { modelo: Modelo3D }) {
  const visor = useRef<HTMLElement>(null);
  const [elegido, setElegido] = useState<string | null>(null);
  const punto = modelo.puntos.find((p) => p.id === elegido);
  const conWebGL = useSyncExternalStore(sinSuscripcion, hayWebGL, () => true);

  useEffect(() => {
    if (conWebGL) import('@google/model-viewer');
  }, [conWebGL]);

  useEffect(() => {
    const v = visor.current as (HTMLElement & { cameraTarget: string; fieldOfView: string }) | null;
    if (!v) return;
    v.cameraTarget = punto ? punto.posicion.map((n) => `${n}m`).join(' ') : 'auto auto auto';
    v.fieldOfView = punto ? '16deg' : 'auto';
  }, [punto]);

  const grupos = GRUPOS.map((g) => ({ g, puntos: modelo.puntos.filter((p) => p.grupo === g) })).filter(
    (x) => x.puntos.length,
  );

  return (
    <div className="grid h-full grid-rows-[45%_1fr] bg-white lg:grid-cols-2 lg:grid-rows-1">
      <div className="order-2 overflow-y-auto border-t border-zinc-100 px-5 py-6 lg:order-1 lg:border-r lg:border-t-0 lg:px-8 lg:pt-16">
        <h2 className="font-display text-2xl font-semibold text-tinta">Anatomía en 3D</h2>
        <p className="mt-1 text-sm text-zinc-500">
          {modelo.especie}. Tocá una estructura en la lista o en el modelo para leer su descripción.
        </p>
        <div className="mt-6 space-y-6">
          {grupos.map(({ g, puntos }) => (
            <section key={g} aria-label={TITULO_GRUPO(g)}>
              <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                {g !== 'agua' && <IconoSistema id={g} className="size-4 text-helecho" />}
                {TITULO_GRUPO(g)}
              </h3>
              <ul className="mt-2 space-y-1">
                {puntos.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      aria-pressed={p.id === elegido}
                      onClick={() => setElegido(p.id === elegido ? null : p.id)}
                      className={`landing-presion w-full rounded-lg px-3 py-2 text-left text-[15px] font-medium ${
                        p.id === elegido ? 'bg-tinta text-white' : 'text-tinta hover:bg-salvia'
                      }`}
                    >
                      {p.nombre}
                    </button>
                    {p.id === elegido && (
                      <div className="px-3 pb-2 pt-3 text-[16px]">
                        <DatoList datos={p.datos} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-8 text-xs text-zinc-400">{modelo.credito}</p>
      </div>
      <div className="explorar-fondo relative order-1 lg:order-2">
        {!conWebGL ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 overflow-y-auto p-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={modelo.poster} alt={modelo.alt} className="max-h-[55%] rounded-2xl shadow-md" />
            <div className="max-w-md space-y-2 text-sm text-zinc-700">
              <p className="font-medium text-tinta">
                Tu navegador tiene WebGL desactivado, así que el modelo no se puede rotar.
              </p>
              <p>
                En Chrome: Configuración, Sistema, activá «Usar la aceleración de gráficos cuando esté disponible» y
                reiniciá el navegador. Si sigue igual, revisá{' '}
                <code className="rounded bg-zinc-100 px-1">chrome://gpu</code>.
              </p>
              <p className="text-zinc-500">Mientras tanto, la lista de la izquierda funciona igual.</p>
            </div>
          </div>
        ) : (
          <model-viewer
            ref={visor}
            src={modelo.src}
            poster={modelo.poster}
            alt={modelo.alt}
            camera-controls=""
            touch-action="pan-y"
            interaction-prompt="none"
            interpolation-decay="120"
            shadow-intensity="0.6"
            exposure="1.1"
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          >
            {modelo.puntos.map((p) => (
              <button
                key={p.id}
                type="button"
                slot={`hotspot-${p.id}`}
                data-position={p.posicion.map((n) => `${n}m`).join(' ')}
                data-normal={p.normal.join(' ')}
                data-visibility-attribute="visible"
                onClick={() => setElegido(p.id)}
                aria-label={`Ver ${p.nombre}`}
                title={p.nombre}
                style={
                  p.id === elegido
                    ? {
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: '#162a38',
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 10px rgb(22 42 56 / 0.25)',
                      }
                    : {
                        width: 14,
                        height: 14,
                        borderRadius: 999,
                        background: 'white',
                        border: '3px solid #3e684a',
                        boxShadow: '0 1px 6px rgb(22 42 56 / 0.3)',
                      }
                }
              >
                {p.id === elegido ? p.nombre : null}
              </button>
            ))}
          </model-viewer>
        )}
      </div>
    </div>
  );
}
