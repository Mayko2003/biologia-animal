import Link from 'next/link';
import type { Nivel } from '@/lib/types';
import { BOTON } from '@/components/ui/clases';
import { IconoGrilla, IconoLista, IconoTag } from '@/components/ui/iconos-sistemas';
import { RankBadge } from './rank-badge';

export type FichaStats = {
  datos: number;
  sistemasConDatos: number;
  sistemasTotal: number;
  ejemplos: number;
};

function Stat({ icono, valor, texto }: { icono: React.ReactNode; valor: string; texto: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
      <span className="text-emerald-600 dark:text-emerald-400">{icono}</span>
      <strong className="font-semibold text-zinc-800 dark:text-zinc-100">{valor}</strong>
      {texto}
    </span>
  );
}

function Motivo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className="motion-safe:animate-breathe pointer-events-none absolute -right-8 -top-10 h-48 w-48 text-emerald-500/30 dark:text-emerald-400/20"
    >
      <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="156" cy="60" r="10" fill="currentColor" />
      <circle cx="52" cy="132" r="6" fill="currentColor" />
    </svg>
  );
}

export function FichaHero({
  nivel,
  nombre,
  nombreComun,
  sinonimos,
  externo,
  slug,
  selMapa,
  stats,
  acciones,
}: {
  nivel: Nivel;
  nombre: string;
  nombreComun?: string;
  sinonimos?: string[];
  externo?: boolean;
  slug: string;
  selMapa: string;
  stats: FichaStats;
  acciones?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-transparent p-5 sm:p-6 dark:border-emerald-900/50 dark:from-emerald-950/40 dark:via-zinc-950 dark:to-transparent">
      <Motivo />
      <div className="relative space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <RankBadge nivel={nivel} />
          <h1 className="text-2xl font-bold sm:text-3xl">{nombre}</h1>
          {externo && (
            <span className="rounded px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
              Grupo no incluido en los apuntes
            </span>
          )}
        </div>
        {nombreComun && <p className="text-lg text-zinc-500 dark:text-zinc-400">{nombreComun}</p>}
        {sinonimos && sinonimos.length > 0 && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">También: {sinonimos.join(', ')}</p>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          <Stat icono={<IconoLista className="h-3.5 w-3.5" />} valor={String(stats.datos)} texto={stats.datos === 1 ? 'dato' : 'datos'} />
          <Stat
            icono={<IconoGrilla className="h-3.5 w-3.5" />}
            valor={`${stats.sistemasConDatos}/${stats.sistemasTotal}`}
            texto="sistemas"
          />
          <Stat icono={<IconoTag className="h-3.5 w-3.5" />} valor={String(stats.ejemplos)} texto="ejemplos" />
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Link href={`/arbol?sel=${slug}`} className={BOTON}>
            Ver en el árbol
          </Link>
          <Link href={`/mapa?sel=${selMapa}`} className={BOTON}>
            Ver en el mapa
          </Link>
          <Link href={`/comparar?a=${slug}`} className={BOTON}>
            Comparar con…
          </Link>
          <span className="w-full sm:w-auto sm:ml-auto">{acciones}</span>
        </div>
      </div>
    </header>
  );
}
