import { truncar } from './texto';
import { CRITERIOS, type EmbriologiaEfectiva, type NodoArbol, type RegistroEmbrionario, type Taxon } from './types';

export function crearConsultas(taxa: readonly Taxon[]) {
  const porSlug = new Map<string, Taxon>();
  const hijosPorPadre = new Map<string, Taxon[]>();
  for (const t of taxa) {
    porSlug.set(t.slug, t);
    if (t.padre !== null) {
      const lista = hijosPorPadre.get(t.padre) ?? [];
      lista.push(t);
      hijosPorPadre.set(t.padre, lista);
    }
  }
  for (const lista of hijosPorPadre.values()) lista.sort((a, b) => a.orden - b.orden);

  const todos = taxa;

  function getTaxon(slug: string): Taxon | undefined {
    return porSlug.get(slug);
  }

  function requireTaxon(slug: string): Taxon {
    const t = porSlug.get(slug);
    if (!t) throw new Error(`Taxón inexistente: ${slug}`);
    return t;
  }

  function getHijos(slug: string): Taxon[] {
    return hijosPorPadre.get(slug) ?? [];
  }

  function getAncestros(slug: string): Taxon[] {
    const out: Taxon[] = [];
    let actual = porSlug.get(slug)?.padre ?? null;
    while (actual !== null) {
      const padre = requireTaxon(actual);
      out.unshift(padre);
      actual = padre.padre;
    }
    return out;
  }

  function getRuta(slug: string): Taxon[] {
    return [...getAncestros(slug), requireTaxon(slug)];
  }

  function getDescendientes(slug: string): Taxon[] {
    const out: Taxon[] = [];
    const apilar = (s: string) => {
      for (const h of getHijos(s)) {
        out.push(h);
        apilar(h.slug);
      }
    };
    apilar(slug);
    return out;
  }

  function getPhylumDe(slug: string): Taxon | undefined {
    return getRuta(slug).find((t) => t.nivel === 'phylum');
  }

  function getPhylaIncluidos(slug: string): Taxon[] {
    return getDescendientes(slug).filter((t) => t.nivel === 'phylum');
  }

  function getEmbriologiaEfectiva(slug: string): EmbriologiaEfectiva {
    const cadena = getRuta(slug).reverse();
    const out: EmbriologiaEfectiva = {};
    const mutable = out as Record<(typeof CRITERIOS)[number], RegistroEmbrionario & { heredadoDe?: string }>;
    for (const c of CRITERIOS) {
      for (const t of cadena) {
        const reg = t.embriologia[c];
        if (reg) {
          mutable[c] = t.slug === slug ? reg : { ...reg, heredadoDe: t.slug };
          break;
        }
      }
    }
    return out;
  }

  function ancestroComun(a: string, b: string): Taxon {
    const ra = getRuta(a);
    const rb = getRuta(b);
    let comun: Taxon | undefined;
    for (let i = 0; i < Math.min(ra.length, rb.length); i++) {
      if (ra[i].slug !== rb[i].slug) break;
      comun = ra[i];
    }
    if (!comun) throw new Error(`Sin ancestro común: ${a}, ${b}`);
    return comun;
  }

  function getArbol(raiz?: string): NodoArbol {
    const r = raiz ? requireTaxon(raiz) : taxa.find((t) => t.padre === null);
    if (!r) throw new Error('No hay taxón raíz');
    const nodo = (t: Taxon): NodoArbol => {
      const n: NodoArbol = {
        slug: t.slug,
        nombre: t.nombre,
        nivel: t.nivel,
        hijos: getHijos(t.slug).map(nodo),
      };
      if (t.nombreComun !== undefined) n.nombreComun = t.nombreComun;
      if (t.resumen[0]) n.resumenCorto = truncar(t.resumen[0].texto, 180);
      return n;
    };
    return nodo(r);
  }

  return {
    todos,
    getTaxon,
    requireTaxon,
    getHijos,
    getAncestros,
    getRuta,
    getDescendientes,
    getPhylumDe,
    getPhylaIncluidos,
    getEmbriologiaEfectiva,
    ancestroComun,
    getArbol,
  };
}

export type Consultas = ReturnType<typeof crearConsultas>;
