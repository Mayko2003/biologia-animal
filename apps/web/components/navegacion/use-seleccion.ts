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

export function useSeleccion(): [string | null, (slug: string | null) => void] {
  return useParametro('sel');
}
