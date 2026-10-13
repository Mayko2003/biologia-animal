# T46 — (OPCIONAL) Fuentes externas: Tetrápodos

**Épica**: E5 Web · **Depende de**: T45 · **Guía obligatoria**: [guia-fuentes-web.md](../guia-fuentes-web.md)

> **Solo implementar si el usuario lo pide explícitamente.** Los tetrápodos no están en los apuntes de la cátedra.
>
> **Estado**: con la llegada del TP15 (`anfibios, reptiles.md`), Amphibia y Reptilia pasaron a
> tener apunte propio y se implementaron como taxones normales en **T50–T51** (no como externos).
> Este ticket queda vigente solo para **Aves y Mammalia** si el usuario lo pide.

## Objetivo

Agregar las 4 clases de tetrápodos como grupos 100 % externos, marcados con `externo: true`.

## Archivos

- Crear: `data/taxa/amphibia.ts`, `data/taxa/reptilia.ts`, `data/taxa/aves.ts`, `data/taxa/mammalia.ts`
- Modificar: `data/taxa/index.ts` (agregar los imports al final de la lista de cordados)

## Taxones

| slug | nombre | nombreComun | nivel | padre | orden |
|---|---|---|---|---|---|
| amphibia | Amphibia | Anfibios | clase | gnathostomata | 3 |
| reptilia | Reptilia | Reptiles | clase | gnathostomata | 4 |
| aves | Aves | Aves | clase | gnathostomata | 5 |
| mammalia | Mammalia | Mamíferos | clase | gnathostomata | 6 |

Todos con `externo: true`. Ninguna fuente puede ser de tipo `apunte` (lo verifica la regla 11 de integridad).

## Qué completar en cada uno

`resumen` (3–5), `morfologiaExterna` (2–4), los 10 sistemas (1–3 datos cada uno), `reproduccion`, `bioecologia`,
`ejemplos` (≥ 3) y una `Nota` `aclaracion`: "Grupo no incluido en los apuntes de la cátedra; información de fuentes externas."

Opcional, si hay fuente: `discrepancia` en `reptilia` sobre su parafilia respecto de Aves.

## Criterios de aceptación

- [ ] 93 taxones en total; los 4 nuevos con `externo: true`.
- [ ] La ficha muestra la insignia "Grupo no incluido en los apuntes".
- [ ] Con el filtro "Solo apuntes", las fichas de estos grupos muestran el mensaje de datos ocultos.
- [ ] El test de mapa sigue pasando (las clases no aparecen en el mapa, solo en el árbol).
- [ ] `pnpm test` y `pnpm build` pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
SLUGS=amphibia,reptilia,aves,mammalia pnpm cobertura
```
