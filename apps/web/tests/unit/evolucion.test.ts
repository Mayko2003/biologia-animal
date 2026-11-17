import { describe, expect, it } from 'vitest';
import { ETAPAS_EVOLUCION, INNOVACIONES } from '@/data/evolucion';
import { getTaxon } from '@/lib/taxa';

describe('línea de tiempo evolutiva', () => {
  it('las etapas son grupos existentes y no se repiten', () => {
    const slugs = ETAPAS_EVOLUCION.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(getTaxon(s), s).toBeDefined();
  });

  it('cada sistema cubre todas las etapas y cada innovación tiene datos con fuente', () => {
    for (const porGrupo of Object.values(INNOVACIONES)) {
      expect(Object.keys(porGrupo!).sort()).toEqual(ETAPAS_EVOLUCION.map((e) => e.slug).sort());
      for (const inn of Object.values(porGrupo!)) {
        if (!inn) continue;
        expect(inn.datos.length).toBeGreaterThan(0);
        for (const d of inn.datos) expect(d.fuentes.length).toBeGreaterThan(0);
      }
    }
  });
});
