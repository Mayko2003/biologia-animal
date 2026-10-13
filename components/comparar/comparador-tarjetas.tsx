import type { Comparacion, FilaComparacion } from '@/lib/comparacion';
import { CeldaView } from './celda';

export function ComparadorTarjetas({
  c,
  gruposOrdenados,
  filasVisibles,
}: {
  c: Comparacion;
  gruposOrdenados: string[];
  filasVisibles: (grupo: string) => FilaComparacion[];
}) {
  return (
    <div className="space-y-5">
      {gruposOrdenados.map((g) => {
        const filas = filasVisibles(g);
        if (filas.length === 0) return null;
        return (
          <section key={g}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {g}
            </h3>
            <div className="mt-2 space-y-3">
              {filas.map((f) => (
                <div
                  key={f.id}
                  className={`overflow-hidden rounded-lg border ${
                    f.distinto
                      ? 'border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30'
                      : 'border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <p className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2 text-sm font-medium dark:border-zinc-800/60">
                    {f.distinto && (
                      <span className="h-2 w-2 rounded-full bg-amber-500" aria-label="Difiere" role="img" />
                    )}
                    {f.etiqueta}
                  </p>
                  <div className="border-l-2 border-emerald-500 px-3 py-2">
                    <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      A: {c.a.nombre}
                    </p>
                    <CeldaView celda={f.a} />
                  </div>
                  <div className="border-l-2 border-sky-500 px-3 py-2">
                    <p className="text-xs font-medium text-sky-700 dark:text-sky-400">B: {c.b.nombre}</p>
                    <CeldaView celda={f.b} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
