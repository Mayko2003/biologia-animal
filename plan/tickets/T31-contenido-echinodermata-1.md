# T31 — Contenido: Echinodermata y Asteroidea

**Épica**: E3 Contenido · **Depende de**: T30 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`equidodermos.md`, líneas **4–262**. Encabezados a ignorar: bloques `APUNTES- Trabajo Práctico N°12` /
`Phylum Equinodermata y Hemicordados` (66–67, 142–143, 213–214) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| echinodermata | 4–68 | ~7000 especies actuales y 20000 fósiles, deuterostomados enterocelomados, nombres comunes, marinos, larvas planctónicas y adultos bentónicos, simetría (larva bilateral → adulto pentámera), relación con los cordados (37–39), esqueleto, celoma, sistemas generales. |
| asteroidea | 69–262 | Estrellas de mar: estructura externa (89–119), pared del cuerpo (120–160: pedicelarios, pápulas, osículos), **sistema ambulacral** (161–…: placa madrepórica, canal pétreo, canal anular, canales radiales, ampollas, pies ambulacrales → `estructurasEspeciales` "Sistema ambulacral"), digestivo, nervioso, reproducción con larva bipinnaria/braquiolaria (251–257), regeneración. |

## Reglas específicas

- El sistema ambulacral se describe dentro de Asteroidea: cargalo en `asteroidea` como estructura especial. Si en 4–68
  hay una descripción general del sistema ambulacral, cargala también en `echinodermata` (con su propia fuente).
- La relación con los cordados (37–39) va en `echinodermata.notas` como `aclaracion`.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| echinodermata | cavidad | `enterocelomado` | 8–9 |
| echinodermata | simetria | `pentarradial` | 32–33, `nota`: 'Las larvas tienen simetría bilateral; los adultos, radial pentámera.' |

(`blastoporo = ano` se hereda de Deuterostomia.)

## Criterios de aceptación

- [ ] `echinodermata` con resumen, embriología (2 registros) y los sistemas generales descritos.
- [ ] `asteroidea` con morfología, tegumento, esqueleto, estructura especial "Sistema ambulacral", digestivo, nervioso y reproducción.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=echinodermata,asteroidea pnpm cobertura
```
