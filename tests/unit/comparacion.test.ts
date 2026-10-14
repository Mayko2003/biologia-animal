import { describe, expect, it } from 'vitest';
import { comparar } from '@/lib/comparacion';
import { crearConsultas } from '@/lib/consultas';
import { taxonFalso } from './fixtures';

const fuenteFalsa = { tipo: 'apunte' as const, archivo: 'annelidos.md' as const, lineas: [1, 1] as [number, number], cita: 'abc' };

const raiz = taxonFalso({ slug: 'raiz', nivel: 'reino', padre: null });
const p1 = taxonFalso({
  slug: 'p1',
  nivel: 'phylum',
  padre: 'raiz',
  embriologia: { blastoporo: { valor: 'boca', fuentes: [fuenteFalsa] } },
});
const c1 = taxonFalso({
  slug: 'c1',
  nivel: 'clase',
  padre: 'p1',
  estructurasEspeciales: [
    { titulo: 'Parápodos', datos: [{ texto: 'Parápodos con sedas.', fuentes: [fuenteFalsa] }] },
  ],
  sistemas: {
    respiratorio: [{ texto: 'Sin órganos respiratorios.', fuentes: [fuenteFalsa], ausente: true }],
  },
});
const p2 = taxonFalso({
  slug: 'p2',
  nivel: 'phylum',
  padre: 'raiz',
  embriologia: { blastoporo: { valor: 'ano', fuentes: [fuenteFalsa] } },
  sistemas: {
    respiratorio: [{ texto: 'Branquias.', fuentes: [fuenteFalsa] }],
  },
});

const consultas = crearConsultas([raiz, p1, c1, p2]);
const fila = (c: ReturnType<typeof comparar>, id: string) => c.filas.find((f) => f.id === id)!;

describe('comparar', () => {
  const c = comparar('c1', 'p2', consultas);

  it('encuentra el ancestro común y las rutas desde él', () => {
    expect(c.ancestroComun.slug).toBe('raiz');
    expect(c.rutaA.map((t) => t.slug)).toEqual(['p1', 'c1']);
    expect(c.rutaB.map((t) => t.slug)).toEqual(['p2']);
  });

  it('solo compara anatomía y sistemas', () => {
    expect([...new Set(c.filas.map((f) => f.grupo))]).toEqual(['Anatomía', 'Sistemas']);
  });

  it('fila especiales: distinto por conjunto de títulos', () => {
    const f = fila(c, 'especiales');
    expect(f.a.estado).toBe('texto');
    expect(f.b.estado).toBe('vacio');
    expect(f.distinto).toBe(true);
  });

  it('fila sistema-respiratorio: ausente vs datos, distinto', () => {
    const f = fila(c, 'sistema-respiratorio');
    expect(f.a.estado).toBe('ausente');
    expect(f.b.estado).toBe('datos');
    expect(f.distinto).toBe(true);
  });

  it('fila sistema-digestivo: ambas vacías, no distinto', () => {
    const f = fila(c, 'sistema-digestivo');
    expect(f.a.estado).toBe('vacio');
    expect(f.b.estado).toBe('vacio');
    expect(f.distinto).toBe(false);
  });

  it('comparar un taxón consigo mismo no lanza y nada difiere', () => {
    const mismo = comparar('c1', 'c1', consultas);
    for (const f of mismo.filas) expect(f.distinto).toBe(false);
  });

  it('tiene 12 filas (2 de anatomía + 10 sistemas)', () => {
    expect(c.filas.length).toBe(12);
  });
});
