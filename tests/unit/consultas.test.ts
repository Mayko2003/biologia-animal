import { describe, expect, it } from 'vitest';
import { crearConsultas } from '@/lib/consultas';
import { getAncestros, getHijos, getPhylumDe, getPhylaIncluidos, ancestroComun } from '@/lib/taxa';
import { taxonFalso } from './fixtures';

const fuenteFalsa = { tipo: 'apunte' as const, archivo: 'annelidos.md' as const, lineas: [1, 2] as [number, number], cita: 'x y z' };

// raiz → a → a1, a2 ; raiz → b → b1
const fixture = [
  taxonFalso({ slug: 'raiz', nivel: 'reino', padre: null }),
  taxonFalso({ slug: 'a', nivel: 'clado', padre: 'raiz', orden: 2 }),
  taxonFalso({ slug: 'b', nivel: 'clado', padre: 'raiz', orden: 1 }),
  taxonFalso({ slug: 'a1', nivel: 'phylum', padre: 'a', orden: 1 }),
  taxonFalso({ slug: 'a2', nivel: 'phylum', padre: 'a', orden: 2 }),
  taxonFalso({ slug: 'b1', nivel: 'phylum', padre: 'b', orden: 1 }),
];
const q = crearConsultas(fixture);

describe('consultas (fixture)', () => {
  it('getHijos respeta orden', () => {
    expect(q.getHijos('raiz').map((t) => t.slug)).toEqual(['b', 'a']);
    expect(q.getHijos('a').map((t) => t.slug)).toEqual(['a1', 'a2']);
    expect(q.getHijos('inexistente')).toEqual([]);
  });

  it('getAncestros, getRuta, getDescendientes', () => {
    expect(q.getAncestros('a1').map((t) => t.slug)).toEqual(['raiz', 'a']);
    expect(q.getRuta('a1').map((t) => t.slug)).toEqual(['raiz', 'a', 'a1']);
    expect(q.getDescendientes('raiz').map((t) => t.slug)).toEqual(['b', 'b1', 'a', 'a1', 'a2']);
  });

  it('getEmbriologiaEfectiva hereda del ancestro', () => {
    const datos = crearConsultas([
      taxonFalso({
        slug: 'p', nivel: 'phylum', padre: null,
        embriologia: { capas: { valor: 'triblastico', fuentes: [fuenteFalsa] }, cavidad: { valor: 'acelomado', fuentes: [fuenteFalsa] } },
      }),
      taxonFalso({
        slug: 'h', nivel: 'clase', padre: 'p',
        embriologia: { capas: { valor: 'diblastico', fuentes: [fuenteFalsa] } },
      }),
    ]);
    const e = datos.getEmbriologiaEfectiva('h');
    expect(e.capas?.valor).toBe('diblastico');
    expect(e.capas?.heredadoDe).toBeUndefined();
    expect(e.cavidad?.valor).toBe('acelomado');
    expect(e.cavidad?.heredadoDe).toBe('p');
    expect(e.simetria).toBeUndefined();
  });

  it('ancestroComun', () => {
    expect(q.ancestroComun('a1', 'b1').slug).toBe('raiz');
    expect(q.ancestroComun('a1', 'a2').slug).toBe('a');
    expect(q.ancestroComun('a1', 'a1').slug).toBe('a1');
  });

  it('requireTaxon lanza con slug inexistente', () => {
    expect(() => q.requireTaxon('x')).toThrow('Taxón inexistente: x');
  });

  it('getArbol construye la jerarquía y trunca resumenCorto', () => {
    const datos = crearConsultas([
      taxonFalso({ slug: 'r', nivel: 'reino', padre: null, resumen: [{ texto: 'x'.repeat(300), fuentes: [fuenteFalsa] }] }),
      taxonFalso({ slug: 'h', nivel: 'phylum', padre: 'r' }),
    ]);
    const arbol = datos.getArbol();
    expect(arbol.slug).toBe('r');
    expect(arbol.resumenCorto!.length).toBeLessThanOrEqual(181);
    expect(arbol.resumenCorto!.endsWith('…')).toBe(true);
    expect(arbol.hijos.map((n) => n.slug)).toEqual(['h']);
    expect(arbol.hijos[0].resumenCorto).toBeUndefined();
    expect('nombreComun' in arbol.hijos[0]).toBe(false);
  });
});

describe('consultas (datos reales)', () => {
  it('hijos de arthropoda', () => {
    expect(getHijos('arthropoda').map((t) => t.slug)).toEqual(['chelicerata', 'myriapoda', 'crustacea', 'hexapoda']);
  });

  it('ancestros de insecta', () => {
    expect(getAncestros('insecta').map((t) => t.slug)).toEqual([
      'animalia', 'eumetazoa', 'bilateria', 'protostomia', 'ecdysozoa', 'arthropoda', 'hexapoda',
    ]);
  });

  it('ancestro común de annelida y arthropoda', () => {
    expect(ancestroComun('annelida', 'arthropoda').slug).toBe('protostomia');
  });

  it('phyla de deuterostomia', () => {
    expect(getPhylaIncluidos('deuterostomia').map((t) => t.slug)).toEqual(['echinodermata', 'hemichordata', 'chordata']);
  });

  it('phylum de copepoda', () => {
    expect(getPhylumDe('copepoda')?.slug).toBe('arthropoda');
  });
});
