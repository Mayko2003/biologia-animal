# T41 — Fuentes externas: clados superiores, Parazoa y Radiata

**Épica**: E5 Web · **Depende de**: T40 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

## Alcance (slugs)

`animalia, parazoa, eumetazoa, radiata, bilateria, protostomia, deuterostomia, lophotrochozoa, ecdysozoa,
porifera, cnidaria, hydrozoa, scyphozoa, cubozoa, anthozoa, ctenophora`

## Qué completar

### Embriología de los phyla (los 5 criterios, si faltan)

| slug | Criterios a revisar |
|---|---|
| porifera | capas (se hereda de Parazoa: no repetir), simetria (ya), cavidad (`no-aplica`), blastoporo (`no-aplica`), segmentacion (ya) |
| cnidaria | simetria (`radial`, se hereda de Radiata: no repetir), cavidad (`no-aplica`, con `nota` "Tienen cavidad gastrovascular, no cavidad corporal"), blastoporo, segmentacion |
| ctenophora | cavidad, blastoporo, segmentacion |

Para los clados: `eumetazoa` no necesita criterios; `ecdysozoa` y `deuterostomia` pueden quedar como están.
Si encontrás una fuente clara sobre segmentación radial en Deuterostomia, agregala a `deuterostomia.embriologia.segmentacion`.

### Sistemas vacíos

- `porifera`, `cnidaria`, `ctenophora`: completar los sistemas vacíos (recordá `ausente: true` para los sistemas que no existen,
  ej. circulatorio en Cnidaria).
- Clases de Cnidaria: completar `resumen` (si tiene un solo dato), `sistemas` vacíos más relevantes (digestivo, nervioso,
  sentidos, reproductor), `reproduccion` y `ejemplos` (≥ 2 por clase).

## Notas de discrepancia a agregar

1. `ctenophora`: el apunte los llama tripoblásticos; la literatura actual los considera mayormente diblásticos (con
   debate), y varios estudios filogenómicos los ubican como grupo hermano del resto de los animales.
2. `cnidaria` (si no está ya cubierto por la nota embrionaria): debate diblásticos vs mesodermo en Anthozoa (el apunte ya lo menciona: citá apunte + web).
3. `porifera` / `parazoa`: si hay una fuente sobre la posición de Porifera vs Ctenophora como linaje más temprano, mencionarlo.

## Criterios de aceptación

- [ ] Los 3 phyla tienen los 5 criterios embrionarios resueltos (propios o heredados).
- [ ] Ningún sistema vacío en `porifera`, `cnidaria`, `ctenophora` (o justificado en el commit).
- [ ] Las clases de Cnidaria tienen ≥ 2 ejemplos.
- [ ] Notas de discrepancia agregadas. Checklist de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=porifera,cnidaria,ctenophora,hydrozoa,scyphozoa,cubozoa,anthozoa pnpm cobertura
```
