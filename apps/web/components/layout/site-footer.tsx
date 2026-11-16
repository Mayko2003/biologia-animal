import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-salvia/60 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/brand/isotipo.svg" alt="" width={40} height={40} />
          <div>
            <p className="font-display font-semibold text-tinta">Biología Animal</p>
            <p className="text-sm text-zinc-600">Material de estudio basado en los apuntes de la cátedra.</p>
          </div>
        </div>
        <p className="text-sm text-zinc-600">
          Creado por{' '}
          <Link
            href="https://github.com/Mayko2003"
            className="font-medium text-helecho underline decoration-helecho/40 underline-offset-4 hover:decoration-helecho"
          >
            Mayko Fernandez
          </Link>
        </p>
      </div>
    </footer>
  );
}
