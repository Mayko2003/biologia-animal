import { SISTEMAS, type Fuente, type Nivel, type SistemaId, type Taxon } from './types';

export type CeldaCobertura = '-' | 'A' | 'W' | 'AW';
export type FilaCobertura = {
  slug: string;
  nivel: Nivel;
  resumen: CeldaCobertura;
  morfo: CeldaCobertura;
  emb: string;
  sistemas: Record<SistemaId, CeldaCobertura>;
  especiales: number;
  repro: CeldaCobertura;
  bioeco: CeldaCobertura;
  ejemplos: number;
  notas: number;
};

function celda(fuentes: Fuente[]): CeldaCobertura {
  if (fuentes.length === 0) return '-';
  const a = fuentes.some((f) => f.tipo === 'apunte');
  const w = fuentes.some((f) => f.tipo === 'web');
  return a && w ? 'AW' : a ? 'A' : 'W';
}

export function calcularCobertura(t: Taxon): FilaCobertura {
  const fuentesDe = (datos: { fuentes: Fuente[] }[]) => datos.flatMap((d) => d.fuentes);
  return {
    slug: t.slug,
    nivel: t.nivel,
    resumen: celda(fuentesDe(t.resumen)),
    morfo: celda(fuentesDe(t.morfologiaExterna)),
    emb: `${Object.values(t.embriologia).filter(Boolean).length}/5`,
    sistemas: Object.fromEntries(
      SISTEMAS.map((s) => [s, celda(fuentesDe(t.sistemas[s] ?? []))]),
    ) as Record<SistemaId, CeldaCobertura>,
    especiales: t.estructurasEspeciales.length,
    repro: celda(fuentesDe(t.reproduccion)),
    bioeco: celda(fuentesDe(t.bioecologia)),
    ejemplos: t.ejemplos.length,
    notas: t.notas.length,
  };
}
