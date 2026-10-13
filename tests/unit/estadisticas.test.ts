import { describe, expect, it } from 'vitest';
import { calcularEstadisticas } from '@/lib/estadisticas';
import type { Taxon } from '@/lib/types';

const apunte = { tipo: 'apunte' as const, archivo: 'annelidos.md' as const, lineas: [1, 2] as [number, number], cita: 'x y z' };
const web = { tipo: 'web' as const, url: 'https://animaldiversity.org/x', titulo: 'T', sitio: 'ADW', consultado: '2025-01-01' };

function taxon(slug: string, nivel: Taxon['nivel'], resumen: Taxon['resumen']): Taxon {
  return {
    slug, nombre: slug, nivel, padre: 'animalia', orden: 1,
    resumen, morfologiaExterna: [], embriologia: {}, sistemas: {},
    estructurasEspeciales: [], reproduccion: [], bioecologia: [], ejemplos: [], notas: [],
  };
}

const fixture: Taxon[] = [
  taxon('a', 'phylum', [{ texto: 'd1', fuentes: [apunte] }]),
  taxon('b', 'clase', [{ texto: 'd2', fuentes: [web] }]),
  taxon('c', 'subclase', [{ texto: 'd3', fuentes: [apunte, web] }]),
];

describe('calcularEstadisticas', () => {
  it('cuenta phyla, clases y datos por fuente', () => {
    const e = calcularEstadisticas(fixture);
    expect(e.phyla).toBe(1);
    expect(e.clases).toBe(2);
    expect(e.datosApunte).toBe(2);
    expect(e.datosExternos).toBe(1);
  });
});
