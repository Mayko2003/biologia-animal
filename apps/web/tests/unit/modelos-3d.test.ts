import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { MODELOS_3D } from '@/data/modelos-3d';
import { getTaxon } from '@/lib/taxa';
import { SISTEMAS } from '@/lib/types';

describe('modelos 3D', () => {
  it('cada modelo es de un grupo existente y su archivo está en public', () => {
    for (const [slug, m] of Object.entries(MODELOS_3D)) {
      expect(getTaxon(slug), slug).toBeDefined();
      expect(existsSync(path.join(process.cwd(), 'public', m.src)), m.src).toBe(true);
    }
  });

  it('cada punto tiene ids únicos, grupo válido y datos con fuente', () => {
    for (const m of Object.values(MODELOS_3D)) {
      const ids = m.puntos.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const p of m.puntos) {
        expect([...SISTEMAS, 'agua']).toContain(p.grupo);
        expect(p.datos.length, p.id).toBeGreaterThan(0);
        for (const d of p.datos) expect(d.fuentes.length, p.id).toBeGreaterThan(0);
      }
    }
  });
});
