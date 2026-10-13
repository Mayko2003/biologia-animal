# T21 — Contenido: Gastrotricha y Rotifera

**Épica**: E3 Contenido · **Depende de**: T20 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`platelmintos.md`, líneas **392–504** (ignorar encabezados de página y "Cátedra…").

## Slugs y líneas

| slug | Líneas |
|---|---|
| gastrotricha | 392–447 |
| rotifera | 448–504 |

Extraer todo: diagnosis, morfología externa, sistemas descritos, reproducción (partenogénesis, si aparece), bioecología, ejemplos.

## Embriología

Solo si el apunte lo afirma en estos rangos (ej. pseudoceloma). Además:

| slug | criterio | valor | Fuente |
|---|---|---|---|
| rotifera | segmentacion | `en-T` | platelmintos 18 ("segmentación del huevo en T (como en Nematoda y Rotifera)") |

## Criterios de aceptación

- [ ] Ambos slugs con `resumen`, `morfologiaExterna` y los sistemas que el apunte describe.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=gastrotricha,rotifera pnpm cobertura
```
