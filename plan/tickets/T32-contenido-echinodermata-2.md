# T32 — Contenido: Ophiuroidea, Holothuroidea, Echinoidea y Crinoidea

**Épica**: E3 Contenido · **Depende de**: T31 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`equidodermos.md`, líneas **263–589** (ignorar encabezados en 284–285, 356–357, 423–424, 496–497, 570–571 y "Cátedra…").

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| ophiuroidea | 263–326 | Ofiuros: disco central y brazos articulados, vértebras, bursas, sin ano si lo indica, reproducción (larva pluteus, 311). |
| holothuroidea | 327–405 | Pepinos de mar: cuerpo alargado, simetría bilateral secundaria (341), tentáculos, tubo digestivo y cloaca, árboles respiratorios (372–374), túbulos de Cuvier si aparecen, reproducción (larva auricularia, 396). |
| echinoidea | 406–522 | Erizos y dólares de arena: caparazón (testa), simetría (415–417), linterna de Aristóteles, espinas, pedicelarios, reproducción (larva pluteus, 470). |
| crinoidea | 523–589 | Lirios de mar: cáliz, brazos, pínnulas, pedúnculo, alimentación, reproducción (larva vitelaria, pentacrinoide), regeneración. |

## Reglas específicas

- Las particularidades de simetría de cada clase van en `morfologiaExterna` (no en `embriologia`, salvo
  `holothuroidea`, ver abajo).
- "Árboles respiratorios" → `sistemas.respiratorio` de `holothuroidea`; "linterna de Aristóteles" → `estructurasEspeciales` de `echinoidea`.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| holothuroidea | simetria | `bilateral` | 341, `nota`: 'Simetría bilateral secundaria sobre un plan pentarradial.' |

## Criterios de aceptación

- [ ] Las 4 clases con resumen, morfología, al menos 3 sistemas y `reproduccion` con su larva.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=ophiuroidea,holothuroidea,echinoidea,crinoidea pnpm cobertura
```
