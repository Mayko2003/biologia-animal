'use client';

import { useEffect, useMemo, useState } from 'react';
import { IconoCerrar } from '@/components/ui/iconos';
import { normalizar } from '@/lib/texto';

export type OpcionTaxon = { slug: string; etiqueta: string };
export type GrupoOpciones = { grupo: string; items: OpcionTaxon[] };

type Opcion = OpcionTaxon & { grupo: string; nombre: string; nivel: number };

export function SelectorTaxon({
  id,
  label,
  valor,
  opciones,
  onCambiar,
}: {
  id: string;
  label: string;
  valor: string | null;
  opciones: GrupoOpciones[];
  onCambiar: (slug: string | null) => void;
}) {
  const lista = useMemo<Opcion[]>(
    () =>
      opciones.flatMap((g) =>
        g.items.map((it) => {
          const sangria = it.etiqueta.match(/^(— )*/)![0];
          return { ...it, grupo: g.grupo, nombre: it.etiqueta.slice(sangria.length), nivel: sangria.length / 2 };
        }),
      ),
    [opciones],
  );
  const elegido = lista.find((o) => o.slug === valor);
  const [texto, setTexto] = useState<string | null>(null);
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState(0);

  const filtrados = useMemo(() => {
    const q = normalizar(texto ?? '');
    return q ? lista.filter((o) => normalizar(o.nombre).includes(q)) : lista;
  }, [lista, texto]);
  const idLista = `${id}-lista`;
  const idOpcion = (i: number) => `${id}-opcion-${i}`;

  useEffect(() => {
    if (abierto) document.getElementById(idOpcion(activo))?.scrollIntoView({ block: 'nearest' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activo, abierto]);

  function abrir() {
    setAbierto(true);
    setActivo(Math.max(0, filtrados.findIndex((o) => o.slug === valor)));
  }

  function elegir(o: Opcion | undefined) {
    if (o) onCambiar(o.slug);
    setTexto(null);
    setAbierto(false);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!abierto) return abrir();
      const paso = e.key === 'ArrowDown' ? 1 : -1;
      setActivo((i) => Math.min(filtrados.length - 1, Math.max(0, i + paso)));
    } else if (e.key === 'Enter' && abierto) {
      e.preventDefault();
      elegir(filtrados[activo]);
    } else if (e.key === 'Escape' && abierto) {
      e.preventDefault();
      e.stopPropagation();
      setTexto(null);
      setAbierto(false);
    }
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          role="combobox"
          autoComplete="off"
          aria-expanded={abierto}
          aria-controls={idLista}
          aria-autocomplete="list"
          aria-activedescendant={abierto && filtrados[activo] ? idOpcion(activo) : undefined}
          placeholder="Elegí o escribí un grupo…"
          value={texto ?? elegido?.nombre ?? ''}
          onChange={(e) => {
            setTexto(e.target.value);
            setAbierto(true);
            setActivo(0);
          }}
          onFocus={(e) => e.target.select()}
          onClick={() => !abierto && abrir()}
          onBlur={() => {
            setTexto(null);
            setAbierto(false);
          }}
          onKeyDown={onKeyDown}
          className="min-h-[44px] w-full rounded-lg border border-zinc-300 bg-white py-2 pl-3 pr-9 text-sm placeholder:text-zinc-400 focus:border-helecho focus:outline-none"
        />
        {elegido && (
          <button
            type="button"
            aria-label={`Quitar ${label}`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onCambiar(null)}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
          >
            <IconoCerrar className="size-3.5" />
          </button>
        )}
      </div>
      {abierto && (
        <ul
          id={idLista}
          role="listbox"
          aria-label={label}
          className="absolute inset-x-0 top-full z-30 mt-1 max-h-72 overflow-y-auto rounded-lg border border-zinc-200 bg-white py-1 text-sm shadow-lg"
        >
          {filtrados.length === 0 && <li className="px-3 py-2 text-zinc-500">Ningún grupo coincide.</li>}
          {filtrados.map((o, i) => (
            <li key={o.slug} role="presentation">
              {(i === 0 || filtrados[i - 1].grupo !== o.grupo) && (
                <p aria-hidden="true" className="px-3 pb-1 pt-2 text-xs font-medium text-zinc-400">
                  {o.grupo}
                </p>
              )}
              <div
                id={idOpcion(i)}
                role="option"
                aria-selected={o.slug === valor}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => elegir(o)}
                onMouseMove={() => i !== activo && setActivo(i)}
                className={`cursor-pointer py-1.5 pr-3 ${i === activo ? 'bg-salvia text-tinta' : 'text-zinc-700'} ${
                  o.slug === valor ? 'font-medium' : ''
                }`}
                style={{ paddingLeft: 12 + o.nivel * 14 }}
              >
                {o.nombre}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
