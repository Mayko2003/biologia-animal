'use client';

import { useEffect, useRef, useState } from 'react';

type SeccionRef = { id: string; titulo: string };

function useSeccionActiva(secciones: SeccionRef[]): string | null {
  const [activa, setActiva] = useState<string | null>(null);
  const visibles = useRef(new Map<string, boolean>());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visibles.current.set(e.target.id, e.isIntersecting);
        const primera = secciones.find((s) => visibles.current.get(s.id));
        if (primera) setActiva(primera.id);
      },
      { rootMargin: '-15% 0px -75% 0px' },
    );
    for (const s of secciones) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [secciones]);

  return activa;
}

export function IndiceSecciones({ secciones }: { secciones: SeccionRef[] }) {
  const activa = useSeccionActiva(secciones);
  return (
    <nav aria-label="Secciones de la ficha" className="sticky top-20 hidden lg:block">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">En esta ficha</p>
      <ul className="mt-2 space-y-1.5 text-sm">
        {secciones.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={activa === s.id ? 'true' : undefined}
              className={
                activa === s.id
                  ? 'font-medium text-emerald-700 dark:text-emerald-400'
                  : 'text-zinc-600 hover:text-emerald-700 hover:underline dark:text-zinc-300 dark:hover:text-emerald-400'
              }
            >
              {s.titulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function IndiceSeccionesMovil({ secciones }: { secciones: SeccionRef[] }) {
  const activa = useSeccionActiva(secciones);
  const listaRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!activa) return;
    const ul = listaRef.current;
    const chip = ul?.querySelector<HTMLElement>(`a[href="#${activa}"]`);
    if (!ul || !chip) return;
    const ulRect = ul.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    if (chipRect.left < ulRect.left || chipRect.right > ulRect.right) {
      ul.scrollBy({ left: chipRect.left - ulRect.left - (ul.clientWidth - chipRect.width) / 2 });
    }
  }, [activa]);

  return (
    <nav
      aria-label="Secciones de la ficha"
      className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-white/95 px-4 py-1 backdrop-blur lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
    >
      <ul ref={listaRef} className="flex gap-1 overflow-x-auto whitespace-nowrap text-sm">
        {secciones.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              aria-current={activa === s.id ? 'true' : undefined}
              className={`inline-flex min-h-[40px] items-center rounded-md px-3 py-1.5 ${
                activa === s.id
                  ? 'bg-emerald-100 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-emerald-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400'
              }`}
            >
              {s.titulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
