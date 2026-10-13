# T22 — Contenido: Annelida y sus clases

**Épica**: E3 Contenido · **Depende de**: T21 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`annelidos.md`, líneas **12–297**. Encabezados a ignorar: bloques `APUNTES-Trabajo Práctico N°6` / `PROTOSTOMOS LOFOTROCOZOOS II`
(63–64, 125–126, 161–162, 223–224, 283–284) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| annelida | 12–53 | ~12000 especies, segmentación verdadera (metámeros, septos), quetas, pared del cuerpo, tubo digestivo completo, circulatorio cerrado (vasos dorsal y ventral, hemoglobina), respiración cutánea o branquial, nefridios, sistema nervioso (ganglios cerebrales, cordón ventral), sentidos, monoicos/dioicos, larva trocófora, gemación. |
| oligochaeta | 55–163 | Lombrices: ~3100 especies, hábitat, morfología (segmentos, prostomio, clitelo, quetas), anatomía interna y reproducción descritas en el rango. |
| polychaeta | 164–260 | Poliquetos: parápodos, cabeza, errantes vs sedentarios/tubícolas, anatomía, reproducción (trocófora). |
| hirudinea | 261–297 | Sanguijuelas: ventosas, segmentación, hematofagia, anatomía y reproducción descritas. |

## Embriología

Solo lo que digan estos rangos explícitamente (ej. desarrollo directo vs trocófora va en `reproduccion`, no en `embriologia`). Además:

| slug | criterio | valor | Fuente |
|---|---|---|---|
| annelida | segmentacion | `espiral` | `platelmintos.md` 18–19 ("espiral  (Platyhelminthes,  Annelida, …") |

## Criterios de aceptación

- [ ] `annelida` con al menos 7 sistemas con datos (son todos generales en 34–53).
- [ ] Cada clase con `resumen`, `morfologiaExterna` y los sistemas que el apunte describe.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=annelida,oligochaeta,polychaeta,hirudinea pnpm cobertura
```
