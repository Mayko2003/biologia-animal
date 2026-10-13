# T34 — Contenido: Chordata, Urochordata (y clases) y Cephalochordata

**Épica**: E3 Contenido · **Depende de**: T33 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`chordata.md`, líneas **14–334**. Encabezados a ignorar: bloques `APUNTES-Trabajo Práctico N°13` / `Phylum Chordata`
(58–60, 130–131, 192–193, 251–252, 318–319), "Cátedra…" y números de página. **Atención**: las líneas 64–72 tienen
columnas mezcladas; reconstruí "La cola es primariamente una extensión del aparato locomotor de los cordados, la
musculatura segmentaria y la notocorda" solo si estás seguro, si no omitila.

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| chordata | 14–84 | Mayor phylum de deuteróstomos; simetría bilateral, tres capas germinales, cuerpo segmentado, tubo digestivo completo, celoma; **cinco caracteres diagnósticos**: cordón nervioso dorsal tubular, notocordio, hendiduras branquiales faríngeas, endostilo, cola postanal. Cada carácter va como `estructurasEspeciales` con su título ("Notocordio", "Cordón nervioso dorsal", "Hendiduras branquiales", "Endostilo", "Cola postanal"). |
| urochordata | 85–99 | Tunicados: túnica, adultos sésiles que pierden notocorda y cordón nervioso, larvas tipo renacuajo, tres clases, 1250 especies. |
| ascidiacea | 100–232 | Ascidias: hábitat, colonias, forma, sifones bucal y atrial, túnica, faringe/endostilo, circulación, larva de ascidia (144) y metamorfosis (155), reproducción. |
| thaliacea | 96–98, 230–238 | Solo lo que dice (forma de casco, sifones en extremos opuestos…, planctónicos). |
| larvacea | 96–98, 230–238 | Solo lo que dice (planctónicos). |
| cephalochordata | 239–334 | Anfioxos: morfología, notocorda persistente, faringe y atrio, atrioporo, endostilo, circulación, nefridios, sistema nervioso, reproducción (fecundación externa, larva ciliada), hábitat. |

## Reglas específicas

- Los cinco caracteres diagnósticos también se mencionan brevemente en `chordata.resumen` (un dato que los enumere).
- Si un dato de Ascidiacea habla en general de los urocordados, va en `urochordata`.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| chordata | simetria | `bilateral` | 17 |
| chordata | capas | `triblastico` | 17 ("tres capas germinales") |

## Criterios de aceptación

- [ ] `chordata` con las 5 estructuras especiales.
- [ ] `ascidiacea` y `cephalochordata` con al menos 5 sistemas con datos cada uno.
- [ ] `thaliacea` y `larvacea` con al menos 1 dato de apunte.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=chordata,urochordata,ascidiacea,thaliacea,larvacea,cephalochordata pnpm cobertura
```
