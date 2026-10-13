import { TAXA } from '@/data/taxa';
import { crearConsultas } from './consultas';

export const consultas = crearConsultas(TAXA);
export const {
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
} = consultas;
