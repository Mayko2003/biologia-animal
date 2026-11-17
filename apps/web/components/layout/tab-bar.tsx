'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconoComparar, IconoInicio, IconoRed } from '@/components/ui/iconos';

const destinos = [
  { href: '/', label: 'Inicio', Icono: IconoInicio },
  { href: '/buscar', label: 'Explorar', Icono: IconoRed },
  { href: '/comparar', label: 'Comparar', Icono: IconoComparar },
];

function Tabs({ activo }: { activo: string | null }) {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur lg:hidden"
    >
      <div className="grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        {destinos.map(({ href, label, Icono }) => {
          const esActual = href === '/' ? activo === '/' : activo?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={esActual ? 'page' : undefined}
              className={`flex flex-col items-center gap-0.5 py-2 text-[11px] ${
                esActual
                  ? 'font-medium text-emerald-600'
                  : 'text-zinc-500 hover:text-zinc-900'
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
