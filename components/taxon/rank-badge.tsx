import { NIVEL_CLASES, NIVEL_LABEL } from '@/lib/etiquetas';
import type { Nivel } from '@/lib/types';

export function RankBadge({ nivel }: { nivel: Nivel }) {
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium ${NIVEL_CLASES[nivel]}`}>
      {NIVEL_LABEL[nivel]}
    </span>
  );
}
