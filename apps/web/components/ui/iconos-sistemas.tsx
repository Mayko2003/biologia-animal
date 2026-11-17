import type { ReactNode } from 'react';
import type { CriterioId, SistemaId } from '@/lib/types';

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

const TRAZOS_SISTEMA: Record<SistemaId, ReactNode> = {
  tegumento: (
    <>
      <path d="M3 10c3-2 6 2 9 0s6-2 9 0" />
      <path d="M3 15h18" />
      <path d="M3 20h18" />
      <path d="M8 9V4M16 9V4" />
    </>
  ),
  esqueleto: (
    <>
      <circle cx="6" cy="4.6" r="2" />
      <circle cx="4.6" cy="6" r="2" />
      <circle cx="18" cy="19.4" r="2" />
      <circle cx="19.4" cy="18" r="2" />
      <path d="M6.8 6.8 17.2 17.2" />
    </>
  ),
  muscular: (
    <>
      <path d="M3 12c3-6.5 15-6.5 18 0-3 6.5-15 6.5-18 0z" />
      <path d="M8 9.2v5.6M12 8.2v7.6M16 9.2v5.6" />
    </>
  ),
  digestivo: <path d="M4 7h10a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h12" />,
  respiratorio: (
    <>
      <path d="M12 3v5" />
      <path d="M10 8C7.5 8 5 10 5 14v6h3.5A1.5 1.5 0 0 0 10 18.5z" />
      <path d="M14 8c2.5 0 5 2 5 6v6h-3.5a1.5 1.5 0 0 1-1.5-1.5z" />
    </>
  ),
  circulatorio: <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.3a5 5 0 1 1 7.5 6.3z" />,
  excretor: (
    <>
      <path d="M15.5 3.5c-4 0-7.5 3.5-7.5 8.5s3.5 8.5 7.5 8.5c2.8 0 4.2-2.6 2.8-5-.9-1.6-2.6-2-2.6-3.5s1.7-1.9 2.6-3.5c1.4-2.4 0-5-2.8-5z" />
      <path d="M11 12H7.5A2.5 2.5 0 0 0 5 14.5V21" />
    </>
  ),
  nervioso: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="4" cy="5" r="1.8" />
      <circle cx="20" cy="5" r="1.8" />
      <circle cx="4" cy="19" r="1.8" />
      <circle cx="20" cy="19" r="1.8" />
      <path d="M10.5 10.5 5.5 6.5M13.5 10.5l5-4M10.5 13.5l-5 4M13.5 13.5l5 4" />
    </>
  ),
  sentidos: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  reproductor: (
    <>
      <ellipse cx="9" cy="13" rx="5.5" ry="6.5" />
      <circle cx="9" cy="13" r="1.6" />
      <circle cx="17.5" cy="6.5" r="2" />
      <path d="M18.9 8c1.4 1.6-.4 3 1 4.6s.4 3.2-.7 4.4" />
    </>
  ),
};

export function IconoSistema({ id, className = 'h-4 w-4' }: { id: SistemaId } & Props) {
  return <Base className={className}>{TRAZOS_SISTEMA[id]}</Base>;
}

const TRAZOS_CRITERIO: Record<CriterioId, ReactNode> = {
  capas: (
    <>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </>
  ),
  simetria: (
    <>
      <path d="M12 3v18" />
      <path d="M10 6 4 12l6 6" />
      <path d="M14 6l6 6-6 6" />
    </>
  ),
  cavidad: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  blastoporo: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="17" r="2" />
    </>
  ),
  segmentacion: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16" />
      <path d="M4 12h16" />
    </>
  ),
};

export function IconoCriterio({ id, className = 'h-4 w-4' }: { id: CriterioId } & Props) {
  return <Base className={className}>{TRAZOS_CRITERIO[id]}</Base>;
}

export function IconoEspecial({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M12 4l1.8 4.7 4.7 1.8-4.7 1.8L12 17l-1.8-4.7-4.7-1.8 4.7-1.8z" />
    </Base>
  );
}

export function IconoAlerta({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M12 4 2.5 20h19L12 4z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </Base>
  );
}

export function IconoInfo({ className }: Props) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </Base>
  );
}

export function IconoTag({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h13" />
    </Base>
  );
}
