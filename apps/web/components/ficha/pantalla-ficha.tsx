'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { BarraLateral } from '@/components/layout/barra-lateral';
import { useEsEscritorio } from '@/components/ui/use-media';

function suscribirHash(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

const PRESENTACION = /^(sistema-|seccion-resumen$|seccion-embriologia$|principal$)/;

export function PantallaFicha({
  lateral,
  arriba,
  actual,
  abrirMenu = false,
  children,
}: {
  lateral: React.ReactNode;
  arriba: React.ReactNode;
  actual?: 'comparar' | 'evolucion';
  abrirMenu?: boolean;
  children: React.ReactNode;
}) {
  const escritorio = useEsEscritorio();
  const [abierto, setAbierto] = useState<boolean | null>(null);
  const hash = useSyncExternalStore(
    suscribirHash,
    () => window.location.hash.slice(1),
    () => '',
  );
  const enLateral = hash !== '' && !PRESENTACION.test(hash);
  const menuAbierto = abierto ?? (escritorio || enLateral || abrirMenu);

  useEffect(() => {
    if (!enLateral || !menuAbierto) return;
    const el = document.getElementById(hash);
    const detalle = el?.closest('details');
    if (detalle) detalle.open = true;
    if (el instanceof HTMLDetailsElement) el.open = true;
    el?.scrollIntoView({ block: 'start' });
  }, [hash, enLateral, menuAbierto]);

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-white">
      <BarraLateral id="menu-ficha" abierto={menuAbierto} onAlternar={setAbierto} actual={actual}>
        {lateral}
      </BarraLateral>
      <div className="relative min-w-0 flex-1">
        {children}
        <div className="pointer-events-none absolute right-3 top-3 z-20 flex justify-end">
          <div className="pointer-events-auto rounded-full bg-white/90 p-0.5 shadow-sm ring-1 ring-zinc-200 backdrop-blur">
            {arriba}
          </div>
        </div>
      </div>
    </div>
  );
}
