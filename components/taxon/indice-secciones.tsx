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
