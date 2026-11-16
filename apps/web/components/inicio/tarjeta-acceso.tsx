import Link from 'next/link';

export function TarjetaAcceso({
  href,
  titulo,
  descripcion,
  children,
}: {
  href: string;
  titulo: string;
  descripcion: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-zinc-200 p-5 transition hover:border-emerald-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-emerald-600"
    >
      <h2 className="text-lg font-semibold">{titulo}</h2>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{descripcion}</p>
      {children && <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{children}</div>}
    </Link>
  );
}
