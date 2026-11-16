import { CRITERIO_LABEL, SISTEMA_LABEL, VALOR_LABEL } from './etiquetas';
import { SISTEMAS, type Fuente, type Taxon } from './types';

export type ItemConFuentes = {
  seccion: string;
  etiqueta: string;
  texto: string;
  fuentes: Fuente[];
  ausente?: boolean;
};

export function recorrerItems(t: Taxon): ItemConFuentes[] {
  const out: ItemConFuentes[] = [];
  for (const d of t.resumen) out.push({ seccion: 'resumen', etiqueta: 'Resumen', texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
  for (const d of t.morfologiaExterna) out.push({ seccion: 'morfologiaExterna', etiqueta: 'Morfología externa', texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
  for (const [c, reg] of Object.entries(t.embriologia)) {
    if (!reg) continue;
    const criterio = c as keyof typeof CRITERIO_LABEL;
    out.push({
      seccion: `embriologia:${c}`,
      etiqueta: CRITERIO_LABEL[criterio],
      texto: VALOR_LABEL[reg.valor] + (reg.nota ? `. ${reg.nota}` : ''),
      fuentes: reg.fuentes,
    });
  }
  for (const s of SISTEMAS) {
    for (const d of t.sistemas[s] ?? []) {
      out.push({ seccion: `sistema:${s}`, etiqueta: SISTEMA_LABEL[s], texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
    }
  }
  t.estructurasEspeciales.forEach((e, k) => {
    for (const d of e.datos) {
      out.push({ seccion: `especial:${k}`, etiqueta: e.titulo, texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
    }
  });
  for (const d of t.reproduccion) out.push({ seccion: 'reproduccion', etiqueta: 'Reproducción y desarrollo', texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
  for (const d of t.bioecologia) out.push({ seccion: 'bioecologia', etiqueta: 'Bioecología', texto: d.texto, fuentes: d.fuentes, ausente: d.ausente });
  for (const e of t.ejemplos) {
    out.push({
      seccion: 'ejemplos',
      etiqueta: 'Ejemplos',
      texto: e.nombre + (e.descripcion ? `: ${e.descripcion}` : ''),
      fuentes: e.fuentes,
    });
  }
  for (const n of t.notas) out.push({ seccion: 'notas', etiqueta: 'Notas', texto: n.texto, fuentes: n.fuentes });
  return out;
}
