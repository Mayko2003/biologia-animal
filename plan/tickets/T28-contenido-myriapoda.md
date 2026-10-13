# T28 — Contenido: Myriapoda y sus clases

**Épica**: E3 Contenido · **Depende de**: T27 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`quilicerados y miriapodos.md`, líneas **460–642** (ignorar encabezados de página y "Cátedra…").

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| myriapoda | 460–524 | Cuatro clases (~10.500 especies), cabeza + tronco con muchos segmentos con patas, por qué se abandonó la clase Myriapoda (→ `notas`, tipo `aclaracion`), hábitat, antenas, ocelos, piezas bucales y lo general que siga hasta 524. |
| chilopoda | 525–576 | Ciempiés: morfología, forcípulas venenosas, un par de patas por segmento, anatomía, reproducción, bioecología. |
| diplopoda | 577–642 | Milpiés: diplosegmentos (dos pares de patas), glándulas repugnatorias, anatomía, reproducción, bioecología. |
| pauropoda | 462–463 | Solo la mención de la clase. Un dato de `resumen`. |
| symphyla | 462–463 | Solo la mención de la clase ("Simphyla"). Un dato de `resumen`. |

## Criterios de aceptación

- [ ] `myriapoda` tiene la nota de aclaración sobre el abandono de la clase Myriapoda (469–472).
- [ ] `chilopoda` y `diplopoda` con resumen, morfología y los sistemas descritos.
- [ ] `pauropoda` y `symphyla` con 1 dato de apunte cada uno.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=myriapoda,chilopoda,diplopoda,pauropoda,symphyla pnpm cobertura
```
