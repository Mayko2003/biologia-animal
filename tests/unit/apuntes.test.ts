import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { APUNTES, dominioPermitido, etiquetaFuente, type ArchivoApunte } from '@/lib/apuntes';

describe('apuntes', () => {
  it('dominioPermitido acepta dominios de la lista y subdominios', () => {
    expect(dominioPermitido('https://animaldiversity.org/x')).toBe(true);
    expect(dominioPermitido('https://es.wikipedia.org/wiki/X')).toBe(true);
    expect(dominioPermitido('https://evil-animaldiversity.org')).toBe(false);
    expect(dominioPermitido('https://example.com')).toBe(false);
    expect(dominioPermitido('no es una url')).toBe(false);
  });

  it('etiquetaFuente formatea apuntes y web', () => {
    expect(
      etiquetaFuente({ tipo: 'apunte', archivo: 'annelidos.md', lineas: [36, 38], cita: 'x y z' }),
    ).toBe('TP6 · L36–38');
    expect(
      etiquetaFuente({ tipo: 'web', url: 'https://animaldiversity.org', titulo: 'X', sitio: 'ADW', consultado: '2026-10-13' }),
    ).toBe('ADW');
  });

  it('cada clave de APUNTES existe como archivo', () => {
    for (const archivo of Object.keys(APUNTES) as ArchivoApunte[]) {
      expect(existsSync(path.join(process.cwd(), 'animal-data', archivo)), archivo).toBe(true);
    }
  });
});
