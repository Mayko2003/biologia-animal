import type { Fuente } from './types';

/** `presentacion`: diapositivas de la cátedra pasadas a texto (apuntes-data/presentaciones). */
export type InfoApunte = { tp: number; titulo: string; presentacion?: true };

export const APUNTES = {
  'porifera y cnidarios.md': { tp: 4, titulo: 'Poríferos y Cnidarios' },
  'platelmintos.md': { tp: 5, titulo: 'Protostomos Lofotrocozoos I' },
  'annelidos.md': { tp: 6, titulo: 'Protostomos Lofotrocozoos II' },
  'mollusca, briozoos, brachiopoda, chaetognatha.md': { tp: 7, titulo: 'Protostomos Lofotrocozoos III' },
  'nematodos.md': { tp: 8, titulo: 'Protostomos Ecdisozoos' },
  'quilicerados y miriapodos.md': { tp: 9, titulo: 'Artrópodos I: Quelicerados y Miriápodos' },
  'chrustacea.md': { tp: 10, titulo: 'Artrópodos II: Crustacea' },
  'insecta.md': { tp: 12, titulo: 'Hexapoda: Insecta' },
  'equidodermos.md': { tp: 12, titulo: 'Equinodermos y Hemicordados' },
  'chordata.md': { tp: 13, titulo: 'Phylum Chordata' },
  'gnatostomatha.md': { tp: 14, titulo: 'Osteichthyes y Chondrichthyes' },
  'anfibios, reptiles.md': { tp: 15, titulo: 'Anfibios y Reptiles' },
  'aves, mamiferos.md': { tp: 16, titulo: 'Aves y Mamíferos' },
  'presentaciones/tp04-poriferos-y-celenterados.md': { tp: 4, titulo: 'Poríferos y Celenterados', presentacion: true },
  'presentaciones/tp05-lofotrocozoos-1.md': { tp: 5, titulo: 'Protostomos Lofotrocozoos I', presentacion: true },
  'presentaciones/tp06-anelidos.md': { tp: 6, titulo: 'Protostomos Lofotrocozoos II: Anélidos', presentacion: true },
  'presentaciones/tp07-lofotrocozoos-3.md': { tp: 7, titulo: 'Protostomos Lofotrocozoos III', presentacion: true },
  'presentaciones/tp08-nemata.md': { tp: 8, titulo: 'Nemata', presentacion: true },
  'presentaciones/artropodos.md': { tp: 9, titulo: 'Phylum Arthropoda', presentacion: true },
  'presentaciones/tp09-reproduccion-artropodos.md': { tp: 9, titulo: 'Reproducción en artrópodos', presentacion: true },
  'presentaciones/tp12-equinodermos.md': { tp: 12, titulo: 'Equinodermos', presentacion: true },
  'presentaciones/tp13-chordata.md': { tp: 13, titulo: 'Chordata', presentacion: true },
  'presentaciones/tp14-peces.md': { tp: 14, titulo: 'Peces óseos y cartilaginosos', presentacion: true },
  'presentaciones/tp15-aves.md': { tp: 15, titulo: 'Aves', presentacion: true },
  'presentaciones/tp16-mamiferos.md': { tp: 16, titulo: 'Mamíferos', presentacion: true },
  'presentaciones/tp17-anfibios.md': { tp: 17, titulo: 'Anfibios', presentacion: true },
  'presentaciones/tp18-reptiles.md': { tp: 18, titulo: 'Reptiles', presentacion: true },
} as const satisfies Record<string, InfoApunte>;

export type ArchivoApunte = keyof typeof APUNTES;

export const DOMINIOS_PERMITIDOS = [
  'nature.com', 'cell.com', 'academic.oup.com', 'link.springer.com', 'royalsocietypublishing.org',
  'sciencedirect.com', 'ncbi.nlm.nih.gov', 'pnas.org', 'onlinelibrary.wiley.com', 'biologists.com',
  'animaldiversity.org', 'tolweb.org', 'ucmp.berkeley.edu', 'biodiversitylibrary.org', 'britannica.com',
  'es.wikipedia.org', 'en.wikipedia.org',
] as const;

export function dominioPermitido(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return DOMINIOS_PERMITIDOS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
}

export function etiquetaFuente(f: Fuente): string {
  if (f.tipo === 'apunte') {
    return `TP${APUNTES[f.archivo].tp} · L${f.lineas[0]}–${f.lineas[1]}`;
  }
  return f.sitio;
}

export function tieneApunte(fuentes: Fuente[]): boolean {
  return fuentes.some((f) => f.tipo === 'apunte');
}
