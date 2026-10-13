import { APUNTES, etiquetaFuente } from '@/lib/apuntes';
import type { Fuente } from '@/lib/types';

const BASE_SUMMARY =
  'text-[11px] rounded-full px-2 py-0.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden';

export function FuenteBadge({ fuente }: { fuente: Fuente }) {
  if (fuente.tipo === 'apunte') {
    const info = APUNTES[fuente.archivo];
    return (
      <details className="relative inline-block align-middle">
        <summary className={`${BASE_SUMMARY} bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200`}>
          Apunte · {etiquetaFuente(fuente)}
        </summary>
        <div className="absolute z-20 mt-1 w-72 rounded-md border border-zinc-200 bg-white p-3 text-xs shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <p className="font-medium">TP{info.tp} — {info.titulo}</p>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">Archivo: {fuente.archivo}</p>
          <p className="text-zinc-500 dark:text-zinc-400">Líneas {fuente.lineas[0]}–{fuente.lineas[1]}</p>
          <p className="mt-1 italic">&ldquo;{fuente.cita}&rdquo;</p>
        </div>
      </details>
    );
  }
  return (
    <details className="relative inline-block align-middle">
      <summary className={`${BASE_SUMMARY} bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200`}>
        Externo · {fuente.sitio}
      </summary>
      <div className="absolute z-20 mt-1 w-72 rounded-md border border-zinc-200 bg-white p-3 text-xs shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <p className="font-medium">{fuente.titulo}</p>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">{fuente.sitio}</p>
        <a
          href={fuente.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-emerald-700 underline dark:text-emerald-400"
        >
          Abrir fuente
        </a>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Consultado: {fuente.consultado}</p>
      </div>
    </details>
  );
}
