import type { ReactNode } from 'react';

type Props = { className?: string };

function Base({ className = 'h-5 w-5', children }: Props & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconoInicio({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </Base>
  );
}

export function IconoMapa({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </Base>
  );
}

export function IconoArbol({ className }: Props) {
  return (
    <Base className={className}>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="5" cy="19.5" r="2" />
      <circle cx="19" cy="19.5" r="2" />
      <path d="M12 6.5V11" />
      <path d="M12 11c0 3-7 2.5-7 6.5" />
      <path d="M12 11c0 3 7 2.5 7 6.5" />
    </Base>
  );
}

export function IconoComparar({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M7 4 3 8l4 4" />
      <path d="M3 8h13" />
      <path d="m17 12 4 4-4 4" />
      <path d="M21 16H8" />
    </Base>
  );
}

export function IconoBuscar({ className }: Props) {
  return (
    <Base className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.5-4.5" />
    </Base>
  );
}

export function IconoCerrar({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Base>
  );
}

export function IconoMenu({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Base>
  );
}
