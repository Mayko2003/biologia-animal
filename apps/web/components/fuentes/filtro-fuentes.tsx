'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { PILL_ACTIVO, PILL_BASE, PILL_INACTIVO_SUAVE } from '@/components/ui/clases';

export type ModoFiltro = 'todas' | 'apuntes';

const CLAVE = 'ba:filtro-fuentes';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CLAVE, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CLAVE, callback);
  };
}

function getSnapshot(): ModoFiltro {
  return localStorage.getItem(CLAVE) === 'apuntes' ? 'apuntes' : 'todas';
}

function getServerSnapshot(): ModoFiltro {
  return 'todas';
}

export function useFiltroFuentes(): { modo: ModoFiltro; setModo: (m: ModoFiltro) => void } {
  const modo = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setModo = useCallback((m: ModoFiltro) => {
    localStorage.setItem(CLAVE, m);
    window.dispatchEvent(new Event(CLAVE));
  }, []);
  return { modo, setModo };
}

export function FiltroFuentesProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function FiltroFuentesToggle() {
  const { modo, setModo } = useFiltroFuentes();
  const opciones: { valor: ModoFiltro; label: string }[] = [
    { valor: 'todas', label: 'Todas las fuentes' },
    { valor: 'apuntes', label: 'Solo apuntes' },
  ];
  return (
    <div className="inline-flex rounded-md border border-zinc-300 p-0.5 text-sm dark:border-zinc-700" role="group" aria-label="Filtro de fuentes">
      {opciones.map((o) => (
        <button
          key={o.valor}
          type="button"
          aria-pressed={modo === o.valor}
          onClick={() => setModo(o.valor)}
          className={`${PILL_BASE} ${modo === o.valor ? PILL_ACTIVO : PILL_INACTIVO_SUAVE}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
