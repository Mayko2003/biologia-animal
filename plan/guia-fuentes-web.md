# Guía: cómo completar huecos con fuentes de internet

Obligatoria para los tickets **T41–T46**. Requiere acceso a búsqueda web y a lectura de páginas.

## 1. Principios

1. **Los datos de los apuntes no se tocan.** No se editan, no se borran, no se reordenan.
   Los datos externos se **agregan** al final de cada array.
2. Cada dato externo lleva una `FuenteWeb` verificable. **Nunca** cites una página que no abriste y leíste.
3. Si internet contradice al apunte, **no corrijas el apunte**: agregá una `Nota` con `tipo: 'discrepancia'`
   que explique las dos posturas, citando el apunte y la fuente web.
4. La clasificación visible sigue siendo **la de la cátedra** (no muevas `padre` ni `nivel`).
5. Escribí en español, con tus palabras, sin copiar párrafos enteros. Máximo 300 caracteres por dato.

## 2. Formato de la fuente web

```ts
{
  tipo: 'web',
  url: 'https://animaldiversity.org/accounts/Annelida/',
  titulo: 'Annelida - Animal Diversity Web',
  sitio: 'Animal Diversity Web',
  consultado: '2026-10-20', // fecha del día en que leíste la página, formato YYYY-MM-DD
}
```

- `url` con `https://` y de un dominio permitido (lista en `DOMINIOS_PERMITIDOS`, `lib/apuntes.ts`).
  El test de integridad rechaza otros dominios.
- Preferencia de fuentes (de mayor a menor):
  1. Artículos científicos revisados por pares (`nature.com`, `cell.com`, `academic.oup.com`, `link.springer.com`,
     `royalsocietypublishing.org`, `sciencedirect.com`, `ncbi.nlm.nih.gov`, `pnas.org`, `onlinelibrary.wiley.com`, `biologists.com`).
  2. Recursos académicos: `animaldiversity.org`, `tolweb.org`, `ucmp.berkeley.edu`, `biodiversitylibrary.org`, `britannica.com`.
  3. `es.wikipedia.org` / `en.wikipedia.org`, solo si las anteriores no cubren el dato.
- Si necesitás otro dominio académico, agregalo a `DOMINIOS_PERMITIDOS` en el mismo commit y mencionalo en el mensaje.

## 3. Qué completar (en este orden de prioridad)

Usá `pnpm cobertura` para ver los huecos de cada taxón del ticket.

1. **Embriología de cada phylum** (los 5 criterios: `capas`, `simetria`, `cavidad`, `blastoporo`, `segmentacion`).
   Para los clados superiores, solo los criterios que los definen (lo indica cada ticket).
   No completes embriología en clases (se hereda), salvo que la clase difiera del phylum.
2. **Sistemas vacíos** de cada phylum y de cada clase: entre 1 y 3 datos por sistema.
   Si el grupo carece de ese sistema, un dato con `ausente: true`.
3. `resumen` vacío o con un solo dato (sobre todo en clases que el apunte solo nombra: Protura, Diplura, Collembola,
   Merostomata, Pycnogonida, Pauropoda, Symphyla, Thaliacea, Larvacea).
4. `reproduccion` y `bioecologia` vacíos.
5. `ejemplos`: al menos 2 por clase si no hay ninguno.
6. **Notas de discrepancia** indicadas en el ticket.

No hace falta llenar todo si no hay fuentes buenas. Es preferible dejar un hueco antes que un dato dudoso.

## 4. Procedimiento

1. `pnpm cobertura` → anotá los huecos de los slugs del ticket.
2. Para cada hueco: buscá en la web → abrí la página → confirmá que la afirmación está ahí → escribí el `Dato`.
3. Agregá las notas de discrepancia pedidas.
4. `pnpm test && pnpm lint && pnpm typecheck`.
5. `pnpm cobertura` de nuevo para confirmar la mejora.
6. Commit: `git commit -m "T<NN>: fuentes externas <grupo>"`.

## 5. Ejemplo de nota de discrepancia

```ts
notas: [
  {
    tipo: 'discrepancia',
    texto: 'El apunte (TP7) ubica a Chaetognatha entre los Lofotrocozoos, y el TP12 lo trata junto a los deuterostomados. Su desarrollo es de tipo deuterostomado (enterocelia, boca de neoformación), pero los análisis moleculares lo ubican entre los protostomados, dentro de Gnathifera.',
    fuentes: [
      { tipo: 'apunte', archivo: 'mollusca, briozoos, brachiopoda, chaetognatha.md', lineas: [425, 431], cita: 'También  conocidos  como  gusanos  flecha' },
      { tipo: 'web', url: 'https://www.nature.com/articles/s41586-025-09403-2', titulo: 'The genomic origin of the unique chaetognath body plan', sitio: 'Nature', consultado: '2026-10-20' },
    ],
  },
],
```

## 6. Checklist

- [ ] Ningún dato de apunte fue modificado (`git diff` solo muestra líneas agregadas en los arrays, más las notas).
- [ ] Cada dato externo tiene una URL que abriste y que contiene la información.
- [ ] Los 5 criterios embrionarios de cada phylum del ticket están completos (o justificado por qué no).
- [ ] Las discrepancias pedidas están como `Nota`.
