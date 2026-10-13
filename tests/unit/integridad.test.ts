import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { TAXA } from '@/data/taxa';
import { dominioPermitido, type ArchivoApunte } from '@/lib/apuntes';
import { NIVEL_ORDEN } from '@/lib/etiquetas';
import { recorrerItems } from '@/lib/recorrer';
import { normalizarEspacios } from '@/lib/texto';
import { VALORES_CRITERIO, type CriterioId, type FuenteApunte, type Taxon } from '@/lib/types';

const cacheLineas = new Map<ArchivoApunte, string[]>();
function lineasDe(archivo: ArchivoApunte): string[] {
  let l = cacheLineas.get(archivo);
  if (!l) {
    l = readFileSync(path.join(process.cwd(), 'animal-data', archivo), 'utf8').split('\n');
    cacheLineas.set(archivo, l);
  }
  return l;
}

function verificarCita(f: FuenteApunte): boolean {
  const lineas = lineasDe(f.archivo);
  const [ini, fin] = f.lineas;
  if (ini < 1 || fin > lineas.length || ini > fin) return false;
  const trecho = normalizarEspacios(lineas.slice(ini - 1, fin).join(' '));
  return trecho.includes(normalizarEspacios(f.cita));
}

function id(t: Taxon, seccion: string, texto: string) {
  return `${t.slug} · ${seccion} · "${texto.slice(0, 60)}"`;
}

const items = TAXA.flatMap((t) => recorrerItems(t).map((i) => ({ t, i })));
const fuentesApunte = items.flatMap(({ t, i }) =>
  i.fuentes.filter((f) => f.tipo === 'apunte').map((f) => ({ t, i, f: f as FuenteApunte })),
);
const fuentesWeb = items.flatMap(({ t, i }) =>
  i.fuentes.filter((f) => f.tipo === 'web').map((f) => ({ t, i, f })),
);

describe('integridad de datos', () => {
  it('slugs únicos con formato válido', () => {
    const vistos = new Set<string>();
    for (const t of TAXA) {
      expect(t.slug).toMatch(/^[a-z0-9-]+$/);
      expect(vistos.has(t.slug), `slug duplicado: ${t.slug}`).toBe(false);
      vistos.add(t.slug);
    }
  });

  it('existe una sola raíz y es animalia', () => {
    const raices = TAXA.filter((t) => t.padre === null);
    expect(raices.map((t) => t.slug)).toEqual(['animalia']);
  });

  it('todo padre existe', () => {
    const slugs = new Set(TAXA.map((t) => t.slug));
    for (const t of TAXA) {
      if (t.padre !== null) expect(slugs.has(t.padre), `${t.slug}: padre ${t.padre}`).toBe(true);
    }
  });

  it('sin ciclos: todo taxón llega a animalia', () => {
    const porSlug = new Map(TAXA.map((t) => [t.slug, t]));
    for (const t of TAXA) {
      let actual: Taxon | undefined = t;
      let pasos = 0;
      while (actual && actual.padre !== null && pasos < 15) {
        actual = porSlug.get(actual.padre);
        pasos++;
      }
      expect(actual?.slug, `${t.slug} no llega a animalia`).toBe('animalia');
    }
  });

  it('niveles: el hijo es más específico que el padre', () => {
    const porSlug = new Map(TAXA.map((t) => [t.slug, t]));
    for (const t of TAXA) {
      if (t.padre === null) continue;
      const p = porSlug.get(t.padre)!;
      const ok = NIVEL_ORDEN[t.nivel] > NIVEL_ORDEN[p.nivel] || (t.nivel === 'clado' && p.nivel === 'clado');
      expect(ok, `${t.slug} (${t.nivel}) bajo ${p.slug} (${p.nivel})`).toBe(true);
    }
  });

  it('orden no repetido entre hermanos', () => {
    for (const t of TAXA) {
      if (t.padre === null) continue;
      const hermanos = TAXA.filter((h) => h.padre === t.padre && h.slug !== t.slug);
      for (const h of hermanos) {
        expect(h.orden !== t.orden, `orden repetido: ${t.slug} y ${h.slug}`).toBe(true);
      }
    }
  });

  it('todo item tiene texto <= 600 y al menos una fuente', () => {
    for (const { t, i } of items) {
      expect(i.texto.length > 0 && i.texto.length <= 600, id(t, i.seccion, i.texto)).toBe(true);
      expect(i.fuentes.length, id(t, i.seccion, i.texto)).toBeGreaterThanOrEqual(1);
    }
  });

  it('valores de embriología válidos', () => {
    for (const t of TAXA) {
      for (const [c, reg] of Object.entries(t.embriologia)) {
        if (!reg) continue;
        const valores = VALORES_CRITERIO[c as CriterioId] as readonly string[];
        expect(valores.includes(reg.valor), `${t.slug} · embriologia:${c} · ${reg.valor}`).toBe(true);
      }
    }
  });

  it('fuentes de apunte: rango válido y cita presente', () => {
    for (const { t, i, f } of fuentesApunte) {
      const lineas = lineasDe(f.archivo);
      const [ini, fin] = f.lineas;
      expect(ini >= 1 && ini <= fin && fin <= lineas.length && fin - ini <= 120, id(t, i.seccion, i.texto)).toBe(true);
      const palabras = f.cita.trim().split(/\s+/).length;
      expect(palabras >= 3 && palabras <= 25, `${id(t, i.seccion, i.texto)} — cita de ${palabras} palabras`).toBe(true);
      expect(verificarCita(f), `${id(t, i.seccion, i.texto)} — cita ausente en ${f.archivo} L${ini}–${fin}: "${f.cita}"`).toBe(true);
    }
  });

  it('fuentes web: https, dominio permitido, metadatos completos', () => {
    for (const { t, i, f } of fuentesWeb) {
      expect(f.url.startsWith('https://'), id(t, i.seccion, i.texto)).toBe(true);
      expect(dominioPermitido(f.url), `${id(t, i.seccion, i.texto)} — ${f.url}`).toBe(true);
      expect(f.titulo.length > 0 && f.sitio.length > 0, id(t, i.seccion, i.texto)).toBe(true);
      expect(f.consultado, id(t, i.seccion, i.texto)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('taxones no externos tienen al menos una fuente de apunte; externos ninguna', () => {
    for (const t of TAXA) {
      const fuentes = recorrerItems(t).flatMap((i) => i.fuentes);
      if (t.externo === true) {
        expect(fuentes.every((f) => f.tipo !== 'apunte'), t.slug).toBe(true);
      } else if (fuentes.length > 0) {
        expect(fuentes.some((f) => f.tipo === 'apunte'), `${t.slug} sin fuente de apunte`).toBe(true);
      }
    }
  });

  it('ejemplos: nombre limpio', () => {
    for (const t of TAXA) {
      for (const e of t.ejemplos) {
        expect(e.nombre.startsWith('Ej'), `${t.slug} · ${e.nombre}`).toBe(false);
        expect(e.nombre.endsWith('.'), `${t.slug} · ${e.nombre}`).toBe(false);
      }
    }
  });

  it('verificarCita detecta citas falsas (negativo)', () => {
    const buena: FuenteApunte = {
      tipo: 'apunte', archivo: 'annelidos.md', lineas: [36, 38],
      cita: 'El sistema circulatorio es cerrado',
    };
    const mala: FuenteApunte = { ...buena, cita: 'El sistema nervioso es dorsal' };
    expect(verificarCita(buena)).toBe(true);
    expect(verificarCita(mala)).toBe(false);
  });
});
