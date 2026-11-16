import { describe, expect, it } from 'vitest';
import { TAXA } from '@/data/taxa';
import { calcularCobertura } from '@/lib/cobertura';
import { SISTEMAS, type SistemaId } from '@/lib/types';

const CORTOS: Record<SistemaId, string> = {
  tegumento: 'teg', esqueleto: 'esq', muscular: 'mus', digestivo: 'dig', respiratorio: 'res',
  circulatorio: 'cir', excretor: 'exc', nervioso: 'ner', sentidos: 'sen', reproductor: 'rep',
};

describe('reporte de cobertura', () => {
  it('imprime la tabla', () => {
    const filtro = process.env.SLUGS?.split(',').map((s) => s.trim()).filter(Boolean);
    const taxa = filtro?.length ? TAXA.filter((t) => filtro.includes(t.slug)) : TAXA;

    const filas = taxa.map((t) => {
      const f = calcularCobertura(t);
      return {
        slug: f.slug, nivel: f.nivel, resu: f.resumen, morfo: f.morfo, emb: f.emb,
        ...Object.fromEntries(SISTEMAS.map((s) => [CORTOS[s], f.sistemas[s]])),
        esp: f.especiales, repro: f.repro, bio: f.bioeco, ej: f.ejemplos, notas: f.notas,
      };
    });
    console.table(filas);

    const conResumen = taxa.filter((t) => t.resumen.length > 0).length;
    const celdasVacias = taxa.reduce(
      (acc, t) => acc + SISTEMAS.filter((s) => calcularCobertura(t).sistemas[s] === '-').length, 0,
    );
    console.log(`Taxones con resumen: ${conResumen}/${taxa.length}`);
    console.log(`Celdas de sistemas vacías: ${celdasVacias}`);
    expect(true).toBe(true);
  });
});
