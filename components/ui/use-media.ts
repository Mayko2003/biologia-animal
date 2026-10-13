'use client';

import { useSyncExternalStore } from 'react';

export function useMedia(query: string): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    },
    () => window.matchMedia(query).matches,
    () => true,
  );
}

export function useEsEscritorio(): boolean {
  return useMedia('(min-width: 1024px)');
}
