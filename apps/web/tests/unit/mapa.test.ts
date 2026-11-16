import { describe, expect, it } from 'vitest';
import { MAPA_EMBRIONARIO } from '@/data/mapa-embrionario';
import { TAXA } from '@/data/taxa';
import type { NodoMapa } from '@/lib/types';
import { erroresDeFuente } from './verificar-fuentes';

function nodos(n: NodoMapa): NodoMapa[] {
  return [n, ...n.hijos.flatMap(nodos)];
}

const todos = nodos(MAPA_EMBRIONARIO);
const hojas = todos.filter((n) => n.hijos.length === 0);
const porSlug = new Map(TAXA.map((t) => [t.slug, t]));

describe('mapa embrionario', () => {
  it('ids únicos', () => {
    const ids = todos.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('todo taxon existe en TAXA', () => {
    for (const n of todos) {
      if (n.taxon) expect(porSlug.has(n.taxon), `taxon inexistente: ${n.taxon}`).toBe(true);
    }
  });

  it('las hojas son exactamente los 17 phyla', () => {
    const phyla = TAXA.filter((t) => t.nivel === 'phylum').map((t) => t.slug);
    const slugsHojas = hojas.map((n) => n.taxon);
    expect(slugsHojas.sort()).toEqual(phyla.sort());
  });

  it('titulo/subtitulo de hojas coinciden con el taxón', () => {
    for (const n of hojas) {
      const t = porSlug.get(n.taxon!);
      expect(n.titulo, `hoja ${n.id}`).toBe(t?.nombre);
      expect(n.subtitulo, `hoja ${n.id}`).toBe(t?.nombreComun);
    }
  });

  it('nodos con hijos tienen descripcion con fuentes válidas', () => {
    for (const n of todos) {
      if (n.hijos.length === 0) continue;
      expect(n.descripcion, `nodo ${n.id} sin descripcion`).toBeDefined();
      for (const f of n.descripcion!.fuentes) {
        expect(erroresDeFuente(f), `nodo ${n.id}`).toEqual([]);
      }
    }
  });

  it('criterios de hasta 60 caracteres', () => {
    for (const n of todos) {
      if (n.criterio) {
        expect(n.criterio.length <= 60, `${n.id}: "${n.criterio}"`).toBe(true);
      }
    }
  });
});
