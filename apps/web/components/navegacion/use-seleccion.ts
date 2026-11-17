'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useParametro(nombre: string): [string | null, (valor: string | null) => void] {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const valor = searchParams.get(nombre);

  const setValor = useCallback(
    (v: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (v === null) params.delete(nombre);
      else params.set(nombre, v);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [nombre, pathname, router, searchParams],
  );

  return [valor, setValor];
}

export function useActualizarParametros(): (cambios: Record<string, string | null>) => void {
  const pathname = usePathname();

  return useCallback(
    (cambios: Record<string, string | null>) => {
      const params = new URLSearchParams(window.location.search);
      for (const [nombre, v] of Object.entries(cambios)) {
        if (v === null) params.delete(nombre);
        else params.set(nombre, v);
      }
      const qs = params.toString();
      window.history.replaceState(null, '', qs ? `${pathname}?${qs}` : pathname);
    },
    [pathname],
  );
}
