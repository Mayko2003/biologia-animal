# T19 — Contenido: Ctenophora

**Épica**: E3 Contenido · **Depende de**: T18 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`porifera y cnidarios.md`, líneas **597–648** (encabezado a ignorar: 628–631).

## Slug: `ctenophora`

La guía (§7) tiene un ejemplo parcial de este taxón: usalo como punto de partida y completalo.

| Líneas | Destino |
|---|---|
| 597–601 | `resumen` (nombres comunes, ~50 especies, planctónicos) |
| 603–607 | `estructurasEspeciales` "Coloblastos"; `embriologia.simetria` = `birradial` (cita en 605) |
| 609–612 | `muscular`/locomoción por paletas natatorias (`estructurasEspeciales` "Paletas natatorias (peines)"); `excretor`, `respiratorio`, `circulatorio` con `ausente: true`; `digestivo`, `nervioso`, `muscular` presentes |
| 614–616 | Bioluminiscencia → `bioecologia` |
| 618–624 | `morfologiaExterna` |
| 626, 633 | Boca en el polo oral (`digestivo`); órgano sensorial aboral con estatocisto (`sentidos`) |
| 635–637 | Alimentación carnívora → `bioecologia` y `digestivo` |
| 639–642 | `nervioso` y `sentidos` |
| 644–648 | `reproductor` (hermafroditas, gónadas en canales meridianos) y `reproduccion` (fecundación en el agua, desarrollo directo) |

## Embriología

| criterio | valor | Fuente |
|---|---|---|
| capas | `triblastico` | 597, con la nota del ejemplo de la guía |
| simetria | `birradial` | 605–606, `nota`: 'Falsa simetría bilateral; unos pocos presentan simetría bilateral.' |

## Criterios de aceptación

- [ ] Al menos 6 sistemas con datos (incluye los `ausente`).
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=ctenophora pnpm cobertura
```
