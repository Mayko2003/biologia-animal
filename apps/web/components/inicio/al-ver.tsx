'use client';

import { useEffect, useRef } from 'react';

export function AlVer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.visto = '';
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.dataset.visto = '';
        obs.disconnect();
      },
      { rootMargin: '100000px 0px -15% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} data-al-ver="" className={className}>
      {children}
    </div>
  );
}
