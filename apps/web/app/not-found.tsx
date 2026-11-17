import Link from 'next/link';
import { MarcoSitio } from '@/components/layout/marco-sitio';

export default function NotFound() {
  return (
    <MarcoSitio>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">No encontramos esa página</h1>
        <p className="text-zinc-600">El grupo o la página que buscás no existe o cambió de dirección.</p>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/" className="text-emerald-700 hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/buscar" className="text-emerald-700 hover:underline">
              Explorar los grupos
            </Link>
          </li>
        </ul>
      </div>
    </MarcoSitio>
  );
}
