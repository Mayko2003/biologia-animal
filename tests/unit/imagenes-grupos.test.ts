import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { IMAGENES_GRUPOS } from '@/data/imagenes-grupos';
import { TAXA } from '@/data/taxa';

const PUBLIC = path.join(process.cwd(), 'public');

function firmaValida(archivo: string) {
  const b = readFileSync(archivo);
  return (
    (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) ||
    b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) ||
    b.subarray(0, 4).toString('ascii') === 'GIF8' ||
    (b.subarray(0, 4).toString('ascii') === 'RIFF' && b.subarray(8, 12).toString('ascii') === 'WEBP')
  );
}

describe('imágenes de grupos', () => {
  it('cada grupo tiene una imagen', () => {
    const sinImagen = TAXA.filter((t) => !IMAGENES_GRUPOS[t.slug]).map((t) => t.slug);
    expect(sinImagen).toEqual([]);
  });

  it('no hay imágenes de grupos inexistentes', () => {
    const slugs = new Set(TAXA.map((t) => t.slug));
    const sobrantes = Object.keys(IMAGENES_GRUPOS).filter((slug) => !slugs.has(slug));
    expect(sobrantes).toEqual([]);
  });

  it('las imágenes existen en public y son archivos válidos', () => {
    for (const [slug, imagen] of Object.entries(IMAGENES_GRUPOS)) {
      expect(imagen.src, slug).toMatch(/^\/grupos\/[a-z0-9-]+\.(jpg|png|webp|gif)$/);
      const archivo = path.join(PUBLIC, imagen.src);
      expect(firmaValida(archivo), `imagen inválida: ${slug}`).toBe(true);
    }
  });

  it('cada imagen tiene texto alternativo y fuente', () => {
    for (const [slug, imagen] of Object.entries(IMAGENES_GRUPOS)) {
      expect(imagen.alt.trim().length, slug).toBeGreaterThan(0);
      expect(imagen.fuente, slug).toMatch(/^https:\/\//);
    }
  });
});
