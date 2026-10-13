# T23 — Contenido: Mollusca (I) — phylum, Polyplacophora y Gastropoda

**Épica**: E3 Contenido · **Depende de**: T22 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`mollusca, briozoos, brachiopoda, chaetognatha.md`, líneas **11–187**. Encabezados a ignorar: bloques
`APUNTES-Trabajo Práctico N°7` / `PROTOSTOMOS LOFOTROCOZOOS III` (52–53, 108–109, 161–162) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| mollusca | 11–89 | Hábitat, nº de especies, plan corporal (cabeza, pie, masa visceral, manto, cavidad paleal, concha, rádula), sistemas generales, reproducción y larvas (trocófora, véliger) descritas en el rango. |
| polyplacophora | 90–124 | Quitones: 8 placas, cinturón, pie, branquias, anatomía y hábitat. |
| gastropoda | 125–187 | Torsión, concha (ápice, espira, columela, abertura…), anatomía, respiración (branquias/pulmón), reproducción, ejemplos. |

## Reglas específicas

- La concha va en `sistemas.esqueleto`; el manto en `sistemas.tegumento`; la rádula en `sistemas.digestivo`.
- La "torsión" de los gasterópodos va en `estructurasEspeciales` → "Torsión" (y lo que corresponda en `reproduccion` si habla del desarrollo).
- Las referencias a figuras ("se grafica en las figuras correspondientes") se omiten.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| mollusca | segmentacion | `espiral` | `platelmintos.md` 18–19 ("espiral  (Platyhelminthes,  Annelida,  Nemertea,  Mollusca)") |

## Criterios de aceptación

- [ ] `mollusca` con resumen, morfología y los sistemas generales descritos.
- [ ] `polyplacophora` y `gastropoda` con resumen, morfología y sistemas descritos.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=mollusca,polyplacophora,gastropoda pnpm cobertura
```
