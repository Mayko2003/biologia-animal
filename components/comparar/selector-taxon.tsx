'use client';

export type OpcionTaxon = { slug: string; etiqueta: string };
export type GrupoOpciones = { grupo: string; items: OpcionTaxon[] };

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
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <select
        id={id}
        value={valor ?? ''}
        onChange={(e) => onCambiar(e.target.value || null)}
        className="w-full rounded-md border border-zinc-300 bg-white px-2.5 py-2 text-sm focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950"
      >
        <option value="">Elegí un grupo…</option>
        {opciones.map((g) => (
          <optgroup key={g.grupo} label={g.grupo}>
            {g.items.map((it) => (
              <option key={it.slug} value={it.slug}>
                {it.etiqueta}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
