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
  tegumento: <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />,
  esqueleto: (
    <>
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M6.4 6.4 17.6 17.6" />
    </>
  ),
  muscular: (
    <>
      <path d="M3 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
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
  excretor: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
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
      <circle cx="9" cy="12" r="5" />
      <circle cx="17" cy="12" r="3" />
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

export function IconoLista({ className }: Props) {
  return (
    <Base className={className}>
      <path d="M5 4h14v16H5z" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </Base>
  );
}

export function IconoGrilla({ className }: Props) {
  return (
    <Base className={className}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
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
