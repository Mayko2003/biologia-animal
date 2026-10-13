import { describe, expect, it } from 'vitest';
import { recorrerItems } from '@/lib/recorrer';
import { taxonFalso } from './fixtures';

const f = { tipo: 'apunte' as const, archivo: 'annelidos.md' as const, lineas: [1, 2] as [number, number], cita: 'x y z' };

const t = taxonFalso({
  slug: 'x', nivel: 'phylum', padre: null,
  resumen: [{ texto: 'res', fuentes: [f] }],
  morfologiaExterna: [{ texto: 'morfo', fuentes: [f] }],
  embriologia: { capas: { valor: 'triblastico', fuentes: [f], nota: 'nota capas' } },
  sistemas: { digestivo: [{ texto: 'dig', fuentes: [f] }], tegumento: [{ texto: 'teg', fuentes: [f] }] },
  estructurasEspeciales: [{ titulo: 'Estructura X', datos: [{ texto: 'esp', fuentes: [f] }] }],
  reproduccion: [{ texto: 'rep', fuentes: [f] }],
  bioecologia: [{ texto: 'bio', fuentes: [f] }],
  ejemplos: [{ nombre: 'Lombriz', descripcion: 'desc', fuentes: [f] }],
  notas: [{ tipo: 'aclaracion', texto: 'nota', fuentes: [f] }],
});

describe('recorrer', () => {
  it('produce todas las secciones con etiquetas y orden correctos', () => {
    const items = recorrerItems(t);
    expect(items.map((i) => i.seccion)).toEqual([
      'resumen', 'morfologiaExterna', 'embriologia:capas', 'sistema:tegumento', 'sistema:digestivo',
      'especial:0', 'reproduccion', 'bioecologia', 'ejemplos', 'notas',
    ]);
    const porSeccion = Object.fromEntries(items.map((i) => [i.seccion, i]));
    expect(porSeccion['resumen'].etiqueta).toBe('Resumen');
    expect(porSeccion['embriologia:capas'].texto).toBe('Triblástico. nota capas');
    expect(porSeccion['embriologia:capas'].etiqueta).toBe('Capas germinativas');
    expect(porSeccion['sistema:tegumento'].etiqueta).toBe('Tegumento y pared del cuerpo');
    expect(porSeccion['especial:0'].etiqueta).toBe('Estructura X');
    expect(porSeccion['ejemplos'].texto).toBe('Lombriz: desc');
    expect(porSeccion['notas'].etiqueta).toBe('Notas');
    for (const i of items) expect(i.fuentes.length).toBe(1);
  });
});
