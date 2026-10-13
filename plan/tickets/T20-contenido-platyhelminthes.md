# T20 — Contenido: Platyhelminthes y sus clases

**Épica**: E3 Contenido · **Depende de**: T19 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`platelmintos.md`, líneas **37–391**. Encabezados a ignorar: cada bloque `APUNTES-Trabajo Práctico N°5` /
`PROTOSTOMOS LOFOTROCOZOOS I` (aprox. 57–58, 121–122, 184–185, 246–247, 306–307, 365–366) y las líneas "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| platyhelminthes | 37–51 | Grado Acoelomata (parénquima), diagnosis: aplanados, con o sin tubo digestivo, sin sistema respiratorio ni circulatorio (`ausente: true`), excretor con células flamígeras, sistema nervioso ganglionar, locomoción, hermafroditas, ciclos complejos. |
| turbellaria | 60–148 | Vida libre, ~3000 especies; Orden Tricladida (*Planaria*, *Dugesia*): morfología externa, epidermis, digestivo, excretor, nervioso, ocelos, reproducción y regeneración. |
| trematoda | 149–248 | Parásitos; Orden Digenea; *Fasciola hepatica* (morfología, anatomía, ciclo biológico con hospedadores), otros ejemplos del rango. |
| cestoda | 249–391 | Subclase Eucestoda (escólex, proglótidos); *Taenia solium* y *Taenia saginata* (morfología, ciclo, importancia sanitaria); otros ejemplos del rango. |

## Reglas específicas

- Los ciclos de vida van en `reproduccion` (uno o más datos por etapa importante).
- La importancia sanitaria (enfermedades, contagio, prevención) va en `bioecologia`.
- La Subclase Eucestoda y los órdenes **no** son taxones de la app: mencionarlos dentro del texto de `cestoda`/`turbellaria`/`trematoda`.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| platyhelminthes | cavidad | `acelomado` | 37–41 |
| platyhelminthes | segmentacion | `espiral` | platelmintos 18–19 ("o  en  espiral  (Platyhelminthes, …") |

## Ejemplos esperados

turbellaria: *Dugesia*, *Planaria*. trematoda: *Fasciola hepatica* (+ los que aparezcan). cestoda: *Taenia solium*, *Taenia saginata* (+ los que aparezcan).

## Criterios de aceptación

- [ ] `platyhelminthes` tiene `respiratorio` y `circulatorio` con `ausente: true`.
- [ ] Cada clase tiene `resumen`, `reproduccion` (ciclo) y al menos 3 sistemas.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=platyhelminthes,turbellaria,trematoda,cestoda pnpm cobertura
```
