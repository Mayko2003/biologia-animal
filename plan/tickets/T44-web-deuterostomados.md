# T44 — Fuentes externas: Deuterostomados invertebrados y protocordados

**Épica**: E5 Web · **Depende de**: T43 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

## Alcance (slugs)

`echinodermata, asteroidea, ophiuroidea, echinoidea, holothuroidea, crinoidea, hemichordata, enteropneusta, pterobranchia,
chordata, urochordata, ascidiacea, thaliacea, larvacea, cephalochordata`

## Qué completar

### Embriología de los 3 phyla

| slug | capas | simetria | cavidad | segmentacion |
|---|---|---|---|---|
| echinodermata | hereda | ya | ya | completar (`radial`) |
| hemichordata | hereda | ya | completar (`enterocelomado`) | completar |
| chordata | ya | ya | completar (`enterocelomado`, con `nota` si la fuente indica variaciones en vertebrados) | completar |

`blastoporo = ano` se hereda de Deuterostomia.

### Resto

- `thaliacea`, `larvacea`, `enteropneusta`, `pterobranchia`: `resumen`, morfología, sistemas principales y `ejemplos` (≥ 2;
  ej. *Salpa*, *Oikopleura*, *Balanoglossus*, *Rhabdopleura*, si las fuentes los confirman).
- Sistemas vacíos de phyla y clases; `reproduccion` y `ejemplos` donde falten.

## Notas de discrepancia a agregar

1. `urochordata` / `cephalochordata`: la literatura actual ubica a los tunicados como grupo hermano de los vertebrados
   (Olfactores); el apunte no lo trata (agregar como `aclaracion` externa solo si hay fuente).
2. `hemichordata`: relación con Echinodermata (clado Ambulacraria) si hay fuente.

## Criterios de aceptación

- [ ] Los 3 phyla tienen los 5 criterios embrionarios resueltos.
- [ ] Las clases "solo nombradas" tienen resumen, morfología y ejemplos.
- [ ] Checklist de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=echinodermata,hemichordata,chordata,thaliacea,larvacea,enteropneusta,pterobranchia pnpm cobertura
```
