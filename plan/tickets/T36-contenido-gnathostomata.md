# T36 — Contenido: Gnathostomata (peces)

**Épica**: E3 Contenido · **Depende de**: T35 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`gnatostomatha.md`, líneas **9–372** (ignorar las líneas 1–8 del encabezado del documento, los bloques
`Trabajo Práctico N°14` / `APUNTES- Osteichthyes y Condrichthyes` de cada página y la bibliografía desde 373).

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| gnathostomata | 9–15 | Solo la ubicación (Phylum Chordata › Subphylum Vertebrata › Superclase Gnatostomatha, "peces"). Un dato de `resumen`. |
| chondrichthyes | 16–51 | Peces cartilaginosos: dos grupos (elasmobranquios y quimeras), caracteres generales, dos subclases (50). |
| selachii | 52–70, 81–231 | Diagnosis (espiráculos, 5–7 pares de branquias sin opérculo, dientes…); Orden Squali (tiburones) y Orden Raji (rayas) como texto; **organización de Squalus/Mustelus** (81–231) como organismo tipo: morfología, piel/escamas placoideas, esqueleto, músculos, digestivo (válvula espiral), respiración, circulación, excreción, sistema nervioso, sentidos, reproducción. |
| holocephali | 71–79 | Quimeras: opérculo, sin cloaca ni espiráculos, placas dentarias, sin escamas, órganos copuladores, hábitat profundo, dieta. Ej.: *Callorhynchus*. |
| osteichthyes | 232–332 | Grupo parafilético (→ `notas` `aclaracion`, 234–236); **morfología de una perca** (238–…) como organismo tipo: cuerpo, aletas, escamas, línea lateral, esqueleto, celoma, digestivo, vejiga natatoria, branquias, circulación, riñones, sistema nervioso, sentidos (321–328), reproducción (330–331). |
| actinopterygii | 333–346 | Aletas con radios óseos, cráneo, opérculo, escamas ganoideas/cicloideas/ctenoideas, ejemplos (truchas, salmones, sardinas…). |
| sarcopterygii | 348–371 | Aletas lobuladas, dipnoos y celacantos, relación con los tetrápodos, esqueleto óseo, escamas con cosmina, aleta caudal dificerca, corazón y circulación doble, pulmones, sistema nervioso. |

## Reglas específicas

- Los datos de *Squalus*/*Mustelus* van en `selachii` con el prefijo "En Squalus, …"; los de la perca en `osteichthyes` con "En la perca, …".
- `actinopterygii` y `sarcopterygii` son `subclase` en la app; agregar en cada una una `Nota` `aclaracion`:
  "El apunte los menciona como clases que reemplazan a Osteichthyes" (235–236 / 348).

## Criterios de aceptación

- [ ] `selachii` y `osteichthyes` con al menos 8 sistemas con datos cada uno.
- [ ] `osteichthyes` con la nota de grupo parafilético.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=gnathostomata,chondrichthyes,selachii,holocephali,osteichthyes,actinopterygii,sarcopterygii pnpm cobertura
```
