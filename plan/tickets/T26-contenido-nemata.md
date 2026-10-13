# T26 — Contenido: Nemata y Nematomorpha

**Épica**: E3 Contenido · **Depende de**: T25 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`nematodos.md`, líneas **4–252**. Encabezados a ignorar: bloques `APUNTES-Trabajo Práctico N°8` / `PROTOSTOMOS ECDISOZOOS`
(aprox. 64–65, 123–124, 172–173, 239–240) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| nemata | 4–188 | 6–9 contenidos del TP (no se cargan); 16–20 diagnosis (cilíndricos, no segmentados, cutícula, tubo digestivo completo, vida libre/parásitos, dimorfismo); 22–115 *Ascaris lumbricoides* como organismo tipo (morfología, cutícula, músculos, pseudoceloma, digestivo, excretor, nervioso, reproductor, ciclo); 116–135 *Ascaris suum* (ciclo en el cerdo); 136–174 *Trichinella spiralis* (ciclo); 175–188 *Meloidogyne* (fitoparásito formador de agallas). |
| nematomorpha | 189–252 | Todo lo descrito (morfología, cutícula, pseudocele, parasitismo de las larvas, reproducción, bioecología). |

## Reglas específicas

- Los datos de *Ascaris lumbricoides* van en `nemata` con el prefijo "En Ascaris lumbricoides, …".
- Los ciclos biológicos van en `reproduccion` (y la importancia sanitaria/agrícola en `bioecologia`).

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| nemata | segmentacion | `en-T` | `platelmintos.md` 18 ("segmentación del huevo en T (como en Nematoda y Rotifera)") |
| nemata | cavidad | `pseudocelomado` | solo si `nematodos.md` lo afirma para Nemata en el rango (buscá "pseudocele"/"pseudoceloma"); si no, dejar vacío |
| nematomorpha | cavidad | `pseudocelomado` | 227 ("la cavidad es un pseudocele"), con `nota` si el apunte lo restringe a una etapa |

## Ejemplos esperados

nemata: *Ascaris lumbricoides*, *Ascaris suum*, *Trichinella spiralis*, *Meloidogyne*.

## Criterios de aceptación

- [ ] `nemata` con al menos 7 sistemas con datos y los 4 ejemplos.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=nemata,nematomorpha pnpm cobertura
```
