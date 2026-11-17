import type { Dato, Taxon } from '@/lib/types';

function datosDe(t: Taxon): Dato[] {
  return [
    ...t.resumen,
    ...t.morfologiaExterna,
    ...Object.values(t.sistemas).flatMap((d) => d ?? []),
    ...t.estructurasEspeciales.flatMap((e) => e.datos),
    ...t.reproduccion,
    ...t.bioecologia,
  ];
}

/** Devuelve el dato (ya citado) de un grupo que contiene el fragmento; falla al cargar si no existe. */
export function dato(t: Taxon, fragmento: string): Dato {
  const d = datosDe(t).find((x) => x.texto.includes(fragmento));
  if (!d) throw new Error(`${t.slug}: no hay un dato que contenga «${fragmento}»`);
  return d;
}
