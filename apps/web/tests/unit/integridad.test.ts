import { describe, expect, it } from 'vitest';
import { TAXA } from '@/data/taxa';
import { NIVEL_ORDEN } from '@/lib/etiquetas';
import { recorrerItems } from '@/lib/recorrer';
import { VALORES_CRITERIO, type CriterioId, type FuenteApunte, type Taxon } from '@/lib/types';
import { erroresDeFuente, verificarCita } from './verificar-fuentes';

function id(t: Taxon, seccion: string, texto: string) {
  return `${t.slug} · ${seccion} · "${texto.slice(0, 60)}"`;
}

const items = TAXA.flatMap((t) => recorrerItems(t).map((i) => ({ t, i })));

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

  it('todas las fuentes son válidas', () => {
    for (const { t, i } of items) {
      for (const f of i.fuentes) {
        expect(erroresDeFuente(f), id(t, i.seccion, i.texto)).toEqual([]);
      }
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
