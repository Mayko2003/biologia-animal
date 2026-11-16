import Link from 'next/link';
import { Suspense } from 'react';
import { CajaBusqueda } from '@/components/busqueda/caja-busqueda';
import { NavLinks, NavLinksEstaticos } from '@/components/layout/nav-links';
import { IconoBuscar } from '@/components/ui/iconos';

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold shrink-0">
          Biología Animal
        </Link>
        <Suspense fallback={<NavLinksEstaticos />}>
          <NavLinks />
        </Suspense>
        <CajaBusqueda />
        <Link
          href="/buscar"
          aria-label="Buscar"
          className="ml-auto lg:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <IconoBuscar />
        </Link>
      </div>
    </header>
  );
}
