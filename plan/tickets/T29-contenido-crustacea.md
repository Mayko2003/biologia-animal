# T29 — Contenido: Crustacea y sus clases

**Épica**: E3 Contenido · **Depende de**: T28 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`chrustacea.md`, líneas **11–399** (ignorar los bloques `APUNTES-Trabajo Práctico N°10` / `ARTROPODOS II - Chrustacea` y "Cátedra…").

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| crustacea | 11–89 | Generalidades y diagnosis: ~42.000 especies, hábitats, tagmas, dos pares de antenas, apéndices birrámeos (endopodio/exopodio), sistemas generales, larva nauplius si aparece. |
| malacostraca | 90–297 | Organismo tipo descrito (langostino/cangrejo u otro según el apunte): morfología externa, apéndices, anatomía interna completa; Orden Isopoda (196–297: "bichos bolita") como texto dentro de la clase con prefijo "En los isópodos, …". |
| branchiopoda | 298–317 | Orden Diplostraca (*Daphnia*, pulgas de agua): caparazón, apéndices foliáceos, reproducción (partenogénesis si aparece). |
| maxillopoda | 318–322 | Lo general de la clase que aparezca (si no hay nada propio, un dato de `resumen` con la línea 318–322). |
| copepoda | 319–355 | Copépodos: tamaño, ojo naupliar, antenas, importancia en el plancton, parásitos. |
| cirripedia | 356–399 | Percebes y bellotas de mar: sésiles, placas calcáreas, cirros, hermafroditismo, larvas. |

## Reglas específicas

- Los órdenes (Isopoda, Diplostraca) **no** son taxones de la app: se mencionan dentro del texto de su clase.

## Criterios de aceptación

- [ ] `crustacea` y `malacostraca` con al menos 6 sistemas con datos cada uno.
- [ ] Las 6 entradas con contenido y citas válidas.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=crustacea,malacostraca,branchiopoda,maxillopoda,copepoda,cirripedia pnpm cobertura
```
