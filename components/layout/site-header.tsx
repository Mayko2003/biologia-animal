import Link from 'next/link';
import { CajaBusqueda } from '@/components/busqueda/caja-busqueda';

const enlaces = [
  { href: '/', label: 'Inicio' },
  { href: '/mapa', label: 'Mapa conceptual' },
  { href: '/arbol', label: 'Árbol' },
  { href: '/comparar', label: 'Comparar' },
  { href: '/buscar', label: 'Buscar' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold shrink-0">
          Biología Animal
        </Link>
        <nav aria-label="Principal" className="flex gap-5 overflow-x-auto whitespace-nowrap">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {e.label}
            </Link>
          ))}
        </nav>
        <CajaBusqueda />
      </div>
    </header>
  );
}
