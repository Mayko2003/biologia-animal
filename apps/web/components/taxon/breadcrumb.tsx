import Link from 'next/link';

export function Breadcrumb({ ruta }: { ruta: { slug: string; nombre: string }[] }) {
  return (
    <nav aria-label="Ubicación taxonómica">
      <ol className="flex flex-nowrap items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-zinc-500 lg:flex-wrap dark:text-zinc-400">
        {ruta.map((paso, i) => {
          const ultimo = i === ruta.length - 1;
          return (
            <li key={paso.slug} className="flex shrink-0 items-center gap-1">
              {i > 0 && <span aria-hidden>›</span>}
              {ultimo ? (
                <span aria-current="page" className="text-zinc-800 dark:text-zinc-200">{paso.nombre}</span>
              ) : (
                <Link href={`/grupo/${paso.slug}`} className="hover:text-emerald-700 hover:underline dark:hover:text-emerald-400">
                  {paso.nombre}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
