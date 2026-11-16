'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconoArbol,
  IconoBuscar,
  IconoComparar,
  IconoInicio,
  IconoMapa,
} from '@/components/ui/iconos';

const destinos = [
  { href: '/', label: 'Inicio', Icono: IconoInicio },
  { href: '/mapa', label: 'Mapa', Icono: IconoMapa },
  { href: '/arbol', label: 'Árbol', Icono: IconoArbol },
  { href: '/comparar', label: 'Comparar', Icono: IconoComparar },
  { href: '/buscar', label: 'Buscar', Icono: IconoBuscar },
];

function Tabs({ activo }: { activo: string | null }) {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
    >
      <div className="grid grid-cols-5 pb-[env(safe-area-inset-bottom)]">
        {destinos.map(({ href, label, Icono }) => {
          const esActual = href === '/' ? activo === '/' : activo?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={esActual ? 'page' : undefined}
              className={`flex flex-col items-center gap-0.5 py-2 text-[11px] ${
                esActual
                  ? 'font-medium text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              <Icono />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function TabBarEstatica() {
  return <Tabs activo={null} />;
}

export function TabBar() {
  return <Tabs activo={usePathname()} />;
}
