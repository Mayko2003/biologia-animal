import { describe, expect, it } from 'vitest';
import { tieneApunte } from '@/lib/apuntes';
import type { Fuente } from '@/lib/types';

const apunte: Fuente = { tipo: 'apunte', archivo: 'annelidos.md', lineas: [36, 38], cita: 'El sistema circulatorio es cerrado' };
const web: Fuente = { tipo: 'web', url: 'https://animaldiversity.org/x', titulo: 'T', sitio: 'ADW', consultado: '2025-01-01' };

describe('tieneApunte', () => {
  it('true con solo apunte', () => {
    expect(tieneApunte([apunte])).toBe(true);
  });
  it('false con solo web', () => {
    expect(tieneApunte([web])).toBe(false);
  });
  it('true con mixto', () => {
    expect(tieneApunte([web, apunte])).toBe(true);
  });
});
