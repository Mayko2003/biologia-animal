import { describe, expect, it } from 'vitest';
import {
  buscar,
  construirDocumentos,
  crearIndice,
  fragmento,
  resaltar,
} from '@/lib/busqueda';
import { taxonFalso } from './fixtures';

const fuenteFalsa = { tipo: 'apunte' as const, archivo: 'x.md' as const, lineas: [1, 1] as [number, number], cita: 'abc' };

const taxonAnnelida = taxonFalso({
  slug: 'annelida',
  nombre: 'Annelida',
  nombreComun: 'Anélidos',
  nivel: 'phylum',
  padre: null,
  sistemas: {
    excretor: [{ texto: 'Excreción mediante nefridios.', fuentes: [fuenteFalsa] }],
  },
});

const taxonCnidaria = taxonFalso({
  slug: 'cnidaria',
  nombre: 'Cnidaria',
  nombreComun: 'Cnidarios',
  nivel: 'phylum',
  padre: null,
  resumen: [{ texto: 'Animales con celoma ausente.', fuentes: [fuenteFalsa] }],
});

const indice = crearIndice(construirDocumentos([taxonAnnelida, taxonCnidaria]));

describe('buscar', () => {
  it('encuentra un dato por palabra dentro de un sistema, con el ancla correcta', () => {
    const r = buscar(indice, 'nefridio');
    expect(r.length).toBeGreaterThan(0);
    expect(r[0].slug).toBe('annelida');
    const c = r[0].coincidencias[0];
    expect(c.seccionLabel).toBe('Excretor');
    expect(c.ancla).toBe('sistema-excretor');
    expect(c.texto).toContain('nefridios');
  });

  it('no distingue tildes: "anelidos" encuentra "Anélidos"', () => {
    const r = buscar(indice, 'anelidos');
    expect(r[0].slug).toBe('annelida');
  });

  it('encuentra por prefijo ("nefri" → "nefridios")', () => {
    const r = buscar(indice, 'nefri');
    expect(r[0].slug).toBe('annelida');
  });

  it('tolera un error leve ("nefridyos" → "nefridios")', () => {
    const r = buscar(indice, 'nefridyos');
    expect(r[0].slug).toBe('annelida');
  });

  it('AND: "celoma ausente" no devuelve un taxón sin ambos términos', () => {
    const r = buscar(indice, 'celoma ausente');
    for (const g of r) expect(g.slug).toBe('cnidaria');
    // y un taxón sin "ausente" no aparece si no lo tiene
    expect(r.some((g) => g.slug === 'annelida')).toBe(false);
  });

  it('consulta de 1 carácter devuelve []', () => {
    expect(buscar(indice, 'a')).toEqual([]);
    expect(buscar(indice, '  x ')).toEqual([]);
  });

  it('el documento nombre no sale en coincidencias pero sí suma puntaje', () => {
    const r = buscar(indice, 'Annelida');
    expect(r[0].slug).toBe('annelida');
    for (const c of r[0].coincidencias) expect(c.seccionLabel).not.toBe('Nombre');
  });
});

describe('resaltar', () => {
  it('marca las palabras que empiezan por el término', () => {
    expect(resaltar('Los Nefridios excretores', 'nefridio')).toEqual([
      { texto: 'Los ', marcado: false },
      { texto: 'Nefridios', marcado: true },
      { texto: ' excretores', marcado: false },
    ]);
  });

  it('insensible a tildes', () => {
    const segs = resaltar('los anélidos', 'anelidos');
    expect(segs.find((s) => s.marcado)?.texto).toBe('anélidos');
  });
});

describe('fragmento', () => {
  it('recorta textos largos agregando "…"', () => {
    const largo = 'a '.repeat(120) + 'nefridios' + ' b'.repeat(120);
    const f = fragmento(largo, 'nefridios', 100);
    expect(f.length).toBeLessThanOrEqual(102);
    expect(f).toContain('nefridios');
    expect(f.startsWith('…')).toBe(true);
    expect(f.endsWith('…')).toBe(true);
  });

  it('devuelve el texto completo si es corto', () => {
    expect(fragmento('corto', 'nefridios', 100)).toBe('corto');
  });
});
