'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const enlaces = [
  { href: '/', label: 'Inicio' },
  { href: '/mapa', label: 'Mapa conceptual' },
  { href: '/arbol', label: 'Árbol' },
  { href: '/comparar', label: 'Comparar' },
  { href: '/buscar', label: 'Buscar' },
];

const BASE =
  'text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100';
const ACTIVO = 'font-medium text-zinc-900 dark:text-zinc-100';

function Links({ activo }: { activo: string | null }) {
  return (
    <nav aria-label="Principal" className="flex gap-5 overflow-x-auto whitespace-nowrap">
      {enlaces.map((e) => {
        const esActual = e.href === '/' ? activo === '/' : activo?.startsWith(e.href);
        return (
          <Link
            key={e.href}
            href={e.href}
            aria-current={esActual ? 'page' : undefined}
            className={esActual ? `text-sm ${ACTIVO}` : BASE}
          >
            {e.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function NavLinksEstaticos() {
  return <Links activo={null} />;
}

export function NavLinks() {
  return <Links activo={usePathname()} />;
}
