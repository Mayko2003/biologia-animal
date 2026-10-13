# T08 — Contenido: Porifera (ticket piloto)

**Épica**: E1 Piloto · **Depende de**: T07 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Objetivo

Completar `data/taxa/porifera.ts` con todo lo que dice el apunte. Es el **piloto** del proceso: hacelo con
mucho cuidado porque sirve de modelo para los demás tickets de contenido.

## Fuente

`porifera y cnidarios.md`, líneas **25–284** (ignorar encabezados de página en 51–54, 106–109, 171–174, 243–246).

## Mapa orientativo de las líneas

| Líneas | Tema | Destino sugerido |
|---|---|---|
| 25–50 | Diagnosis, sésiles, sistema de canales, simetría, hábitat, nº de especies, tamaño | `resumen`, `morfologiaExterna`, `bioecologia`, `embriologia.simetria` |
| 55–58 | Formas y colores | `morfologiaExterna` |
| 60–68 | Esponja asconoide: ostíolos, espongocele, ósculo | `estructurasEspeciales` → "Sistema acuífero" |
| 69–82 | Pared del cuerpo: pinacocitos, porocitos, mesohilo | `sistemas.tegumento` |
| 83–104, 116–122 | Esqueleto: espículas, espongina, esclerocitos, espongocitos | `sistemas.esqueleto` |
| 111–115, 123–125 | Arqueocitos, colenocitos, coanocitos | `estructurasEspeciales` → "Tipos celulares" |
| 127–143 | Tipos siconoide y leuconoide | `estructurasEspeciales` → "Sistema acuífero" |
| 145–167 | Fisiología del agua y alimentación filtradora | `sistemas.digestivo` |
| 169–176 | Simbiontes fotosintéticos | `bioecologia` |
| 178–180 | Excreción por difusión hacia la corriente de agua | `sistemas.excretor` |
| 182–184 | Intercambio gaseoso por difusión | `sistemas.respiratorio` |
| 186–188 | Resistencia gracias a las espículas | `sistemas.esqueleto` |
| 190–194 | Carecen de sistema nervioso; coordinación | `sistemas.nervioso` (incluye un dato con `ausente: true`) |
| 196–213 | Metabolitos, depredadores, relaciones con otros animales | `bioecologia` |
| 215–241 | Regeneración, gemación, gémulas | `reproduccion` |
| 248–266 | Hermafroditismo, origen de gametos | `sistemas.reproductor` y `reproduccion` |
| 268–284 | Fecundación, segmentación, larva anfiblástula | `reproduccion` y `embriologia.segmentacion` |

## Embriología a completar

| criterio | valor | Fuente |
|---|---|---|
| simetria | `asimetrico` | líneas 37–38, `nota: 'Algunos presentan simetría radial.'` |
| segmentacion | `radial` | línea 276 ("La segmentación es completa y generalmente radial") |

(`capas` = `sin-tejidos` se hereda de `parazoa`; no lo repitas.)

## Ejemplos esperados

*Leucosolenia* (asconoide), *Grantia* y *Sycon* (siconoides). Agregá otros si aparecen en el rango.

## Notas

- `aclaracion`: posición filogenética aislada, no dan origen a ningún otro grupo (líneas 28–32).

## Criterios de aceptación

- [ ] `resumen` ≥ 3 datos; `sistemas` con al menos tegumento, esqueleto, digestivo, respiratorio, excretor, nervioso y reproductor.
- [ ] `estructurasEspeciales` con "Sistema acuífero" y "Tipos celulares".
- [ ] `reproduccion` cubre gemación, gémulas, reproducción sexual y desarrollo larvario.
- [ ] `pnpm test` pasa (todas las citas verificadas).

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=porifera pnpm cobertura
```

## Fuera de alcance

- Datos de Cnidaria (T18).
