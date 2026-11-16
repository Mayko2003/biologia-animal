'use client';

import { useState } from 'react';
import { useEsEscritorio } from './use-media';

export function Seccion({
  id,
  titulo,
  children,
  acciones,
}: {
  id: string;
  titulo: string;
  children: React.ReactNode;
  acciones?: React.ReactNode;
}) {
  const escritorio = useEsEscritorio();
  const [abierto, setAbierto] = useState(true);

  if (escritorio) {
    return (
      <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 space-y-3 lg:scroll-mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id={`${id}-titulo`} className="text-lg font-semibold">{titulo}</h2>
          {acciones}
        </div>
        {children}
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={`${id}-titulo`} className="text-lg font-semibold">
          <button
            type="button"
            aria-expanded={abierto}
            aria-controls={`${id}-cuerpo`}
            onClick={() => setAbierto((a) => !a)}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-left"
          >
            <span
              aria-hidden
              className={`inline-block text-sm transition-transform ${abierto ? '' : '-rotate-90'}`}
            >
              ▾
            </span>
            {titulo}
          </button>
        </h2>
        {acciones}
      </div>
      <div id={`${id}-cuerpo`} hidden={!abierto} className="space-y-3">
        {children}
      </div>
    </section>
  );
}
