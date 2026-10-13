# T45 — Fuentes externas: Vertebrados (peces)

**Épica**: E5 Web · **Depende de**: T44 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

## Alcance (slugs)

`vertebrata, agnatha, gnathostomata, myxini, cephalaspidomorphi, chondrichthyes, selachii, holocephali, osteichthyes,
actinopterygii, sarcopterygii`

## Qué completar

- `gnathostomata`: `resumen` (mandíbulas, aletas pares…), 2–4 datos.
- `vertebrata`: sistemas generales vacíos (tegumento, nervioso, sentidos, circulatorio…).
- `holocephali`, `actinopterygii`, `sarcopterygii`: sistemas vacíos más relevantes y `ejemplos` (≥ 2).
- `chondrichthyes`, `osteichthyes`: `reproduccion` y `bioecologia` si faltan.
- No hace falta embriología (se hereda de Chordata).

## Notas de discrepancia a agregar

1. `agnatha`: la nota de la cátedra ya dice que es artificial; agregar la postura actual (Cyclostomata como grupo
   monofilético que reúne mixines y lampreas) si hay fuente.
2. `osteichthyes`: el apunte ya dice que es parafilético; la clasificación actual incluye a los tetrápodos dentro de
   Osteichthyes/Sarcopterygii (agregar como `discrepancia` con fuente).

## Criterios de aceptación

- [ ] `gnathostomata` con resumen.
- [ ] Ninguna clase/subclase del alcance sin `ejemplos`.
- [ ] Checklist de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=vertebrata,agnatha,gnathostomata,myxini,cephalaspidomorphi,chondrichthyes,selachii,holocephali,osteichthyes,actinopterygii,sarcopterygii pnpm cobertura
```
