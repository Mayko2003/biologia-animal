'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconoCerrar, IconoComparar, IconoInicio, IconoMenu, IconoRed } from '@/components/ui/iconos';

const ENLACES = [
  { href: '/', label: 'Inicio', Icono: IconoInicio, id: 'inicio' },
  { href: '/buscar', label: 'Explorar', Icono: IconoRed, id: 'explorar' },
  { href: '/comparar', label: 'Comparar', Icono: IconoComparar, id: 'comparar' },
] as const;

export const BOTON_RIEL =
  'flex size-11 items-center justify-center rounded-full bg-white text-tinta shadow-md ring-1 ring-zinc-200 hover:text-helecho lg:shadow-none lg:ring-0';

export function BarraLateral({
  id,
  abierto,
  onAlternar,
  actual,
  riel,
  children,
}: {
  id: string;
  abierto: boolean;
  onAlternar: (abrir: boolean) => void;
  actual?: (typeof ENLACES)[number]['id'];
  riel?: React.ReactNode;
  children: React.ReactNode;
}) {
  if (!abierto) {
    return (
      <div className="pointer-events-auto absolute left-3 top-3 z-30 flex gap-2 lg:static lg:h-full lg:w-14 lg:shrink-0 lg:flex-col lg:items-center lg:gap-3 lg:border-r lg:border-zinc-200 lg:bg-white/85 lg:py-4 lg:backdrop-blur">
        <button
          type="button"
          onClick={() => onAlternar(true)}
          aria-label="Abrir el menú"
          aria-expanded={false}
          aria-controls={id}
          className={BOTON_RIEL}
        >
          <IconoMenu className="size-5" />
        </button>
        {riel}
        <Link href="/" aria-label="Inicio" className="hidden lg:mt-auto lg:block">
          <Image src="/brand/isotipo.svg" alt="" width={32} height={32} />
        </Link>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        aria-label="Cerrar el menú"
        tabIndex={-1}
        onClick={() => onAlternar(false)}
        className="pointer-events-auto absolute inset-0 z-30 bg-tinta/20 lg:hidden"
      />
      <div
        id={id}
        className="pointer-events-auto absolute inset-y-0 left-0 z-40 flex w-[min(23rem,90vw)] flex-col border-r border-zinc-200 bg-white/95 shadow-xl backdrop-blur lg:static lg:z-auto lg:w-[23rem] lg:shrink-0 lg:shadow-none"
      >
        <header className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-display font-semibold text-tinta">
            <Image src="/brand/isotipo.svg" alt="" width={28} height={28} />
            Biología Animal
          </Link>
          <button
            type="button"
            onClick={() => onAlternar(false)}
            aria-label="Contraer el menú"
            aria-expanded={true}
            aria-controls={id}
            className="ml-auto rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
          >
            <IconoCerrar className="size-4" />
          </button>
        </header>

        <nav aria-label="Principal" className="flex gap-1 border-b border-zinc-100 px-3 py-2 text-sm">
          {ENLACES.map(({ href, label, Icono, id: clave }) =>
            clave === actual ? (
              <span
                key={href}
                aria-current="page"
                className="flex items-center gap-1.5 rounded-md bg-salvia px-2.5 py-2 font-medium text-tinta"
              >
                <Icono className="size-4" /> {label}
              </span>
            ) : (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <Icono className="size-4" /> {label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex-1 overflow-y-auto px-4 py-4">{children}</div>
      </div>
    </>
  );
}
