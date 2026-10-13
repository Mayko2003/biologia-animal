export function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizarEspacios(s: string): string {
  return s.toLowerCase().replace(/\s+/g, ' ').trim();
}

export function truncar(s: string, max: number): string {
  if (s.length <= max) return s;
  const corte = s.lastIndexOf(' ', max);
  return s.slice(0, corte > 0 ? corte : max) + '…';
}
