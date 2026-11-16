'use client';

import { useEffect, useRef } from 'react';

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('animate-fade-up');
      return;
    }

    el.classList.add('opacity-0');
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.classList.remove('opacity-0');
        el.classList.add('animate-fade-up');
        obs.disconnect();
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`motion-reduce:animate-none ${className ?? ''}`}>
      {children}
    </div>
  );
}
