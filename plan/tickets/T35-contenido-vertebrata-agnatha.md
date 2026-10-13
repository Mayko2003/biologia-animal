# T35 — Contenido: Vertebrata, Agnatha, Cephalaspidomorphi y Myxini

**Épica**: E3 Contenido · **Depende de**: T34 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`chordata.md`, líneas **335–607** (ignorar encabezados 382–387, 448–449, 510–511, 568–569 y "Cátedra…").

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| vertebrata | 335–380 | Historia (544 millones de años), caracteres de cordado, columna vertebral (vértebras, discos, arcos neural y hemal) y cráneo (`sistemas.esqueleto`), encéfalo, nombre Craniata. |
| agnatha | 389–405 | Peces sin mandíbulas: notocordio permanente, sin osificación, escamas ni aletas pares, una abertura nasal, ojo pineal, aberturas branquiales en poros, cuerpo anguiliforme; Ostracodermos fósiles; grupo artificial (→ `notas` `aclaracion`). |
| cephalaspidomorphi | 407–574 | Lampreas: 7 pares de branquias, cavidad nasal, embudo bucal, anatomía completa (digestivo, respiratorio, circulatorio, excretor, nervioso, sentidos), reproducción y larva ammocete, bioecología (parasitismo, pesca, plagas). Ej.: *Petromyzon*. |
| myxini | 575–607 | Mixines: cuerpo, glándulas mucosas, tentáculos, dientes, branquias, corazones accesorios, riñón, digestivo sin estómago, sistema nervioso, alimentación carroñera, hermafroditas funcionalmente dioicos, desarrollo directo. Ej.: *Myxine*, *Bdellostoma*. |

## Criterios de aceptación

- [ ] `agnatha` tiene la nota de grupo artificial (399–401).
- [ ] `cephalaspidomorphi` y `myxini` con al menos 7 sistemas con datos cada uno.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=vertebrata,agnatha,cephalaspidomorphi,myxini pnpm cobertura
```
