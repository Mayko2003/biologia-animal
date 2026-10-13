# T33 — Contenido: Hemichordata y sus clases

**Épica**: E3 Contenido · **Depende de**: T32 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`equidodermos.md`, líneas **618–708** (ignorar encabezados 624–629, 684–685 y "Cátedra…").

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| hemichordata | 618–688 | Deuteróstomos vermiformes relacionados con los cordados; estomocorda (no notocorda); simetría bilateral (644); cuerpo en probóscide, collar y tronco; celoma dividido en proceloma, mesoceloma y metaceloma (656); hendiduras faríngeas; sistema cardiovascular abierto (676); sistemas descritos; reproducción. |
| enteropneusta | 689–698 | Gusanos bellota: lo que describe el apunte. |
| pterobranchia | 699–708 | Lo que describe el apunte. |

## Reglas específicas

- La estomocorda va en `estructurasEspeciales` → "Estomocorda"; agregá una `Nota` `aclaracion` en `hemichordata`:
  "No presentan una auténtica notocorda sino una estomocorda (expansión del tubo digestivo)" (620–622).

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| hemichordata | simetria | `bilateral` | 644 |

## Criterios de aceptación

- [ ] `hemichordata` con resumen, morfología, la estructura especial y los sistemas descritos.
- [ ] Las dos clases con al menos `resumen`.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=hemichordata,enteropneusta,pterobranchia pnpm cobertura
```
