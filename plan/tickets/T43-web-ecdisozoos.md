# T43 — Fuentes externas: Ecdisozoos

**Épica**: E5 Web · **Depende de**: T42 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

## Alcance (slugs)

`nemata, nematomorpha, arthropoda, chelicerata, merostomata, pycnogonida, arachnida, araneida, scorpionida, acari,
myriapoda, chilopoda, diplopoda, pauropoda, symphyla, crustacea, malacostraca, branchiopoda, maxillopoda, copepoda,
cirripedia, hexapoda, insecta, protura, diplura, collembola`

## Qué completar

### Embriología de los 3 phyla

| slug | cavidad | segmentacion | Comentario |
|---|---|---|---|
| nemata | completar si falta (`pseudocelomado`) | ya (en T) | |
| nematomorpha | ya | completar si hay fuente | |
| arthropoda | completar (`esquizocelomado` o el valor que indique la fuente, con `nota` sobre el hemocele) | completar (en artrópodos suele ser superficial/`otra`, con `nota`) | |

Capas, simetría y blastoporo se heredan.

### Clases que el apunte solo nombra (prioridad alta)

`merostomata`, `pycnogonida`, `pauropoda`, `symphyla`, `protura`, `diplura`, `collembola`:
completar `resumen` (2–3 datos), `morfologiaExterna`, los sistemas principales y `ejemplos` (≥ 2; ej. *Limulus* para Merostomata).

### Resto

Sistemas vacíos de los phyla, subphyla y clases; `reproduccion` y `ejemplos` donde falten.

## Notas de discrepancia a agregar

1. `crustacea`: la literatura actual considera que Crustacea es parafilético respecto de Hexapoda (clado Pancrustacea);
   el apunte los trata como subphyla separados.
2. `maxillopoda`: hoy se considera un grupo no natural (si hay fuente).
3. `hexapoda`: el apunte lo llama "subfilo (o superclase)" (insecta.md 14): `aclaracion` si no se agregó en T30.
4. `myriapoda`: la nota de la cátedra ya existe; agregar la postura actual solo si hay fuente clara.

## Criterios de aceptación

- [ ] Los 3 phyla tienen los 5 criterios embrionarios resueltos.
- [ ] Las 7 clases "solo nombradas" tienen resumen, morfología y ejemplos.
- [ ] Notas de discrepancia agregadas. Checklist de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=nemata,nematomorpha,arthropoda,merostomata,pycnogonida,pauropoda,symphyla,protura,diplura,collembola pnpm cobertura
```
