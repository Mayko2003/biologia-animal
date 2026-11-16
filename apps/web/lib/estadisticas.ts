import { tieneApunte } from './apuntes';
import { recorrerItems } from './recorrer';
import type { Taxon } from './types';

export type Estadisticas = {
  phyla: number;
  clases: number;
  datosApunte: number;
  datosExternos: number;
};

export function calcularEstadisticas(taxa: readonly Taxon[]): Estadisticas {
  let datosApunte = 0;
  let datosExternos = 0;
  for (const t of taxa) {
    for (const i of recorrerItems(t)) {
      if (tieneApunte(i.fuentes)) datosApunte++;
      else datosExternos++;
    }
  }
  return {
    phyla: taxa.filter((t) => t.nivel === 'phylum').length,
    clases: taxa.filter((t) => t.nivel === 'clase' || t.nivel === 'subclase').length,
    datosApunte,
    datosExternos,
  };
}
