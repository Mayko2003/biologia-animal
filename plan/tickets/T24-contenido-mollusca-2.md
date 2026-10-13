# T24 — Contenido: Mollusca (II) — Bivalvia, Scaphopoda y Cephalopoda

**Épica**: E3 Contenido · **Depende de**: T23 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`mollusca, briozoos, brachiopoda, chaetognatha.md`, líneas **188–357**. Encabezados a ignorar:
(218–219, 276–277, 339–340) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| bivalvia | 188–258 | Valvas, charnela, ligamento, músculos aductores, branquias (alimentación por filtración, estilo cristalino), pie, anatomía, reproducción. |
| scaphopoda | 259–287 | Concha tubular, captáculos, hábitat, anatomía. |
| cephalopoda | 288–357 | Concha (externa/interna/ausente), brazos y tentáculos, sifón, cromatóforos, tinta, sistema nervioso y ojos, circulación, reproducción (hectocótilo), bioecología. |

## Reglas específicas

- Igual que T23 para concha/manto/rádula.
- Si el apunte compara con otras clases, cargá el dato en la clase de la que habla la oración.

## Criterios de aceptación

- [ ] Los 3 slugs con resumen, morfología y sistemas descritos; `cephalopoda` con `nervioso` y `sentidos`.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=bivalvia,scaphopoda,cephalopoda pnpm cobertura
```
