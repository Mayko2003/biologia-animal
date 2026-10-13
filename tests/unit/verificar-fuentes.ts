import { readFileSync } from 'node:fs';
import path from 'node:path';
import { dominioPermitido, type ArchivoApunte } from '@/lib/apuntes';
import { normalizarEspacios } from '@/lib/texto';
import type { Fuente, FuenteApunte } from '@/lib/types';

const cacheLineas = new Map<ArchivoApunte, string[]>();
function lineasDe(archivo: ArchivoApunte): string[] {
  let l = cacheLineas.get(archivo);
  if (!l) {
    l = readFileSync(path.join(process.cwd(), 'animal-data', archivo), 'utf8').split('\n');
    cacheLineas.set(archivo, l);
  }
  return l;
}

export function verificarCita(f: FuenteApunte): boolean {
  const lineas = lineasDe(f.archivo);
  const [ini, fin] = f.lineas;
  if (ini < 1 || fin > lineas.length || ini > fin) return false;
  const trecho = normalizarEspacios(lineas.slice(ini - 1, fin).join(' '));
  return trecho.includes(normalizarEspacios(f.cita));
}

export function erroresDeFuente(f: Fuente): string[] {
  const errores: string[] = [];
  if (f.tipo === 'apunte') {
    const lineas = lineasDe(f.archivo);
    const [ini, fin] = f.lineas;
    if (!(ini >= 1 && ini <= fin && fin <= lineas.length && fin - ini <= 120)) {
      errores.push(`rango inválido ${f.archivo} L${ini}–${fin}`);
    }
    const palabras = f.cita.trim().split(/\s+/).length;
    if (palabras < 3 || palabras > 25) {
      errores.push(`cita de ${palabras} palabras (requiere 3–25)`);
    }
    if (!verificarCita(f)) {
      errores.push(`cita ausente en ${f.archivo} L${ini}–${fin}: "${f.cita}"`);
    }
    return errores;
  }
  if (!f.url.startsWith('https://')) errores.push(`url sin https: ${f.url}`);
  if (!dominioPermitido(f.url)) errores.push(`dominio no permitido: ${f.url}`);
  if (f.titulo.length === 0 || f.sitio.length === 0) errores.push('metadatos web incompletos');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(f.consultado)) {
    errores.push(`consultado inválido: ${f.consultado}`);
  }
  return errores;
}
