export function IndiceSecciones({ secciones }: { secciones: { id: string; titulo: string }[] }) {
  return (
    <nav aria-label="Secciones de la ficha" className="sticky top-20 hidden lg:block">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">En esta ficha</p>
      <ul className="mt-2 space-y-1.5 text-sm">
        {secciones.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-zinc-600 hover:text-emerald-700 hover:underline dark:text-zinc-300 dark:hover:text-emerald-400">
              {s.titulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function IndiceSeccionesMovil({ secciones }: { secciones: { id: string; titulo: string }[] }) {
  return (
    <nav
      aria-label="Secciones de la ficha"
      className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-white/95 px-4 py-2 backdrop-blur lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
    >
      <ul className="flex gap-1 overflow-x-auto whitespace-nowrap text-sm">
        {secciones.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              className="inline-flex min-h-[36px] items-center rounded-md px-3 py-1 text-zinc-600 hover:bg-zinc-100 hover:text-emerald-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
            >
              {s.titulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
