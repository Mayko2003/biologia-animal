import { describe, expect, it } from 'vitest';
import { normalizar, normalizarEspacios, truncar } from '@/lib/texto';

describe('texto', () => {
  it('normalizar quita tildes, mayúsculas y espacios extra', () => {
    expect(normalizar('  Árbol   Filogenético ')).toBe('arbol filogenetico');
    expect(normalizar('Célula')).toBe('celula');
  });

  it('normalizarEspacios conserva tildes', () => {
    expect(normalizarEspacios('Los  Cnidarios\n son')).toBe('los cnidarios son');
    expect(normalizarEspacios('Átomo')).toBe('átomo');
  });

  it('truncar deja cortos intactos y corta largos en espacio', () => {
    expect(truncar('hola', 10)).toBe('hola');
    const largo = 'una frase bastante larga para truncar';
    const r = truncar(largo, 20);
    expect(r.endsWith('…')).toBe(true);
    expect(r.length).toBeLessThanOrEqual(21);
  });
});
