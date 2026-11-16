import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">No encontramos esa página</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        El grupo o la página que buscás no existe o cambió de dirección.
      </p>
      <ul className="flex gap-4 text-sm">
        <li>
          <Link href="/" className="text-emerald-700 hover:underline dark:text-emerald-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/arbol" className="text-emerald-700 hover:underline dark:text-emerald-400">
            Árbol
          </Link>
        </li>
        <li>
          <Link href="/buscar" className="text-emerald-700 hover:underline dark:text-emerald-400">
            Buscar
          </Link>
        </li>
      </ul>
    </div>
  );
}
