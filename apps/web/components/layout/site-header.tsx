import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { CajaBusqueda } from '@/components/busqueda/caja-busqueda';
import { NavLinks, NavLinksEstaticos } from '@/components/layout/nav-links';
import { IconoBuscar } from '@/components/ui/iconos';

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display font-semibold text-tinta">
          <Image src="/brand/isotipo.svg" alt="" width={28} height={28} priority />
          Biología Animal
        </Link>
        <Suspense fallback={<NavLinksEstaticos />}>
          <NavLinks />
        </Suspense>
        <CajaBusqueda />
        <Link
          href="/buscar"
          aria-label="Buscar"
          className="ml-auto lg:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900"
        >
          <IconoBuscar />
        </Link>
      </div>
    </header>
  );
}
