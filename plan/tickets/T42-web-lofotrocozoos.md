# T42 — Fuentes externas: Lofotrocozoos

**Épica**: E5 Web · **Depende de**: T41 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

## Alcance (slugs)

`platyhelminthes, turbellaria, trematoda, cestoda, gastrotricha, rotifera, annelida, polychaeta, oligochaeta, hirudinea,
mollusca, polyplacophora, gastropoda, bivalvia, scaphopoda, cephalopoda, bryozoa, brachiopoda, articulata, inarticulata, chaetognatha`

## Qué completar

### Embriología de los 8 phyla

| slug | capas | simetria | cavidad | blastoporo | segmentacion |
|---|---|---|---|---|---|
| platyhelminthes | hereda | hereda | ya (acelomado) | hereda (boca) | ya (espiral) |
| gastrotricha | hereda | hereda | completar | hereda | completar |
| rotifera | hereda | hereda | completar | hereda | ya (en T) |
| annelida | hereda | hereda | completar (`esquizocelomado`) | hereda | ya |
| mollusca | hereda | hereda | completar | hereda | ya |
| bryozoa | hereda | hereda | completar | revisar | ya (radial) |
| brachiopoda | hereda | hereda | completar | revisar | completar |
| chaetognatha | hereda | hereda | completar (`enterocelomado`) | completar (`ano`, con nota) | completar |

"hereda" = no cargar nada (viene de Bilateria/Protostomia/Lophotrochozoa). "revisar" = cargar solo si la fuente muestra
que difiere del valor heredado (ej. en lofoforados el blastoporo puede no originar la boca); en ese caso, agregar el registro
propio con `nota`.

### Sistemas, reproducción, ejemplos

- Completar los sistemas vacíos de los 8 phyla y de las clases (prioridad: phyla primero).
- `articulata`/`inarticulata`: `resumen` y `ejemplos` (ej. *Lingula* para Inarticulata, si la fuente lo confirma).

## Notas de discrepancia a agregar

1. `chaetognatha`: posición (ver el ejemplo completo en la guía, §5): el apunte lo ubica en Lofotrocozoos (TP7) y lo describe
   también con los deuterostomados (TP12); desarrollo de tipo deuterostomado, pero los análisis moleculares lo ubican entre los
   protostomados (Gnathifera).
2. `rotifera` y `gastrotricha`: hoy se agrupan en Gnathifera (Rotifera) y en Rouphozoa (Gastrotricha + Platyhelminthes)
   según la literatura; el apunte los incluye en Lofotrocozoos.
3. `platyhelminthes`: la condición acelomada se considera hoy secundaria por varios autores (si hay fuente).
4. `bryozoa` / `brachiopoda`: lofoforados con rasgos embrionarios de tipo deuterostomado en algunos grupos, ubicados en
   Lophotrochozoa por datos moleculares (si hay fuente).

## Criterios de aceptación

- [ ] Los 8 phyla tienen los 5 criterios embrionarios resueltos (propios o heredados).
- [ ] Ningún phylum del alcance con sistemas vacíos (o justificado).
- [ ] Notas de discrepancia agregadas. Checklist de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=platyhelminthes,gastrotricha,rotifera,annelida,mollusca,bryozoa,brachiopoda,chaetognatha pnpm cobertura
```
