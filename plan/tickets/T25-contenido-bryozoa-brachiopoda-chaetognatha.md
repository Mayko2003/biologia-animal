# T25 — Contenido: Bryozoa, Brachiopoda (y clases) y Chaetognatha

**Épica**: E3 Contenido · **Depende de**: T24 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuentes

- `mollusca, briozoos, brachiopoda, chaetognatha.md`, líneas **358–448** (encabezado a ignorar: 389–392).
- `equidodermos.md`, líneas **590–617** (segunda descripción de Chaetognatha, en el TP12).

## Slugs y líneas

| slug | Archivo · líneas | Qué extraer |
|---|---|---|
| bryozoa | mollusca 358–387 | Colonias, zooecio/zooide, tubo digestivo en U, lofóforo (→ `estructurasEspeciales` "Lofóforo"), aviculario, introverto, monoicos, larva trocófora. |
| brachiopoda | mollusca 393–416 | Concha bivalva dorsal/ventral, pedúnculo, manto, lofóforo en W (→ "Lofóforo"), sexos separados, larva nadadora; "Se reconocen dos Clases". |
| articulata | mollusca 416–419 | Valvas calcáreas diferentes, charnela, pico, asa, sin ano. |
| inarticulata | mollusca 421–423 | Valvas iguales quitinoides con espículas, sin charnela, pico ni asa; con ano. |
| chaetognatha | mollusca 425–448 **y** equidodermos 590–617 | Gusanos flecha: planctónicos, cutícula, aletas, garfios/espinas, cabeza-tronco-cola, ojos, sin respiratorio/circulatorio/excretor (`ausente: true`), hermafroditas, fecundación interna, desarrollo directo. |

## Reglas específicas

- Chaetognatha aparece en **dos** apuntes con información parecida. No dupliques datos: si un hecho aparece en los dos,
  hacé **un** dato con **dos fuentes** (una de cada archivo).
- Agregar en `chaetognatha` una `Nota` `aclaracion`: "La cátedra describe este phylum en el TP7 (Lofotrocozoos III) y también en el TP12 (junto a equinodermos y hemicordados)", citando ambos archivos.
- En `articulata`/`inarticulata` el contenido es poco; con 1–3 datos de `resumen`/`morfologiaExterna` alcanza.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| bryozoa | segmentacion | `radial` | `platelmintos.md` 18 ("o radial (como en Ectoprocta)") |

## Criterios de aceptación

- [ ] Los 5 slugs con contenido y citas válidas.
- [ ] `chaetognatha` con datos de ambos archivos, sin duplicados, y la nota de aclaración.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=bryozoa,brachiopoda,articulata,inarticulata,chaetognatha pnpm cobertura
```
