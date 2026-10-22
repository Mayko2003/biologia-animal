# T62 — Contenido: Aves y sus subclases (TP16)

**Épica**: E8 TP16 Aves y Mamíferos · **Depende de**: T51 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

> Relación con T46: el apunte TP16 (`aves, mamiferos.md`, convertido del PDF con `markitdown`)
> trae Aves con apunte propio, así que se agrega como taxón normal con fuentes `apunte`
> (nada de `externo: true`). Mammalia queda para un ticket posterior.

## Objetivo

Registrar el apunte TP16 en el catálogo y crear la clase Aves con las dos subclases que
el apunte reconoce (Sauriuria y Ornituria), con contenido citado del apunte.

## Fuente

`aves, mamiferos.md`, líneas **8–397**. Ignorar los encabezados de página
(`Trabajo Práctico N°16` / `APUNTES- Aves y Mamiferos`), la línea `Cátedra de Biología Animal…`
y los números de página sueltos (saltos en 51–56, 107–112, 160–165, 214–219, 265–270,
321–326, 379–384). La clase Mammalia (desde la línea 406) y la `BIBLIOGRAFIA` no se usan.

## Archivos

- Modificar: `lib/apuntes.ts` (agregar `'aves, mamiferos.md': { tp: 16, titulo: 'Aves y Mamíferos' }`)
- Crear: `data/taxa/aves.ts`, `data/taxa/sauriuria.ts`, `data/taxa/ornituria.ts`
- Modificar: `data/taxa/index.ts` (imports al final, después de los de T51)

## Taxones nuevos

| slug | nombre | nombreComun | nivel | padre | orden |
|---|---|---|---|---|---|
| aves | Aves | Aves | clase | gnathostomata | 5 |
| sauriuria | Sauriuria | Aves primitivas (Archaeopteryx) | subclase | aves | 1 |
| ornituria | Ornituria | Aves modernas | subclase | aves | 2 |

(Los superórdenes Paleognatha y Neognatha de la infraclase Neornithes no tienen nivel propio
en la app: se describen como datos dentro de `ornituria`.)

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| aves | 8–359 | Etimología, diagnosis (plumas exclusivas, homeotermia, anatomía en torno al vuelo), antigüedad y nº de especies, importancia económica. La gallina doméstica funciona como organismo tipo (líneas 48–107, 112–214): morfología externa (cabeza, cuello, alas, patas, cola, pico, ojos y membrana nictitante, cresta), tegumento (piel sin glándulas salvo la uropigea, plumas, pterilios/apterios), esqueleto (huesos neumáticos, quilla), digestivo (buche, proventrículo, molleja, ciegos, cloaca), circulatorio (corazón de 4 cámaras, bolsa de Fabricio), respiratorio (siringe, sacos aéreos, parabronquios, sin diafragma), muscular (pectorales, supracoracoideo, pigostilo), excretor (sin vejiga → `ausente`), nervioso y sentidos, glándulas endocrinas (→ `estructurasEspeciales`), reproductor. Caracteres generales en otras aves (líneas 220–313): estructura de la pluma, tipos de plumas, desarrollo y muda (→ `estructurasEspeciales` "Plumas"), coloración, tipos de pico y de patas. Historia natural (líneas 315–359): distribución, homeotermia y temperaturas, vuelo y migraciones, canto, alimentación, reproducción (altriciales/nidícolas y precoces/nidífugos). |
| sauriuria | 361–369 | Subclase Sauriuria: infraclase Archaeornithes con Archaeopteryx, primera ave fósil (~150 millones de años) con dientes en las mandíbulas. |
| ornituria | 361–362, 386–394 | Subclase Ornituria: infraclase Neornithes (aves modernas) con los superórdenes Paleognatha (corredoras, alas reducidas, vértebras de la cola libres) y Neognatha (esternón en quilla, alas desarrolladas, pigostilo, voladoras) y sus ejemplos. |

## Reglas específicas

- La **clasificación del apunte** (Sauriuria/Ornituria) se registra en `aves.resumen`; en cada
  subclase el `resumen` aclara su ubicación según el apunte.
- Los datos de la gallina empiezan aclarando el organismo tipo ("En la gallina doméstica, …").
- Las **glándulas endocrinas** (líneas 186–190) van en `aves.estructurasEspeciales` con el título
  "Glándulas endocrinas"; la estructura, tipos, desarrollo y muda de las plumas (líneas 210–268)
  van con el título "Plumas"; la bolsa de Fabricio queda en `circulatorio` (así la ubica el apunte).
- El fragmento de las líneas 330–334 viene con las columnas del PDF mezcladas: reconstruir solo
  lo evidente y citar el fragmento legible.
- `embriologia: {}` en todos; nada de `externo`.

## Criterios de aceptación

- [ ] El test `cada clave de APUNTES existe como archivo` pasa con el TP16 registrado.
- [ ] `aves` con resumen, morfología y los 10 sistemas (el apunte los describe todos).
- [ ] `aves.sistemas.excretor` con el dato `ausente` de la vejiga urinaria.
- [ ] `sauriuria` y `ornituria` con resumen y ejemplos citados.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` y `pnpm build` pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
SLUGS=aves,sauriuria,ornituria pnpm cobertura
```

## Fuera de alcance

- Mammalia (líneas 406–794): ver T63.
- Fuentes web y notas de discrepancia: este ticket es solo extracción del apunte.
