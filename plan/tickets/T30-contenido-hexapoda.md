# T30 — Contenido: Hexapoda, Insecta y clases entognatas

**Épica**: E3 Contenido · **Depende de**: T29 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`insecta.md`, líneas **12–640** (ignorar `Apuntes Trabajo Práctico N°12` y el bloque "Biología Animal / Licenciatura… /
Cátedra… / Universidad Nacional de Jujuy" de cada página). Es el apunte más largo: trabajalo en bloques de ~120 líneas.

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| hexapoda | 12–36 | Subfilo (o superclase) con más especies; cuerpo en cabeza, tórax con 3 pares de patas y abdomen; un par de antenas; generalmente alados; división Entognatha / Ectognatha (→ `notas` `aclaracion`). |
| protura | 28–31, 40 | "Clase Protura" dentro de Entognatha: primitivamente ápteros, aparato bucal escondido en un repliegue cefálico. Un dato de `resumen`. |
| diplura | 28–31, 42 | Igual que Protura. |
| collembola | 28–31, 44 | Igual que Protura. |
| insecta | 55–640 | Ver tabla siguiente. |

### Orientación para `insecta`

| Líneas | Tema | Destino |
|---|---|---|
| 33–36, 38 | Ectognatha (aparato bucal expuesto) | `resumen` |
| 55–121 | Generalidades, nº de especies, importancia | `resumen`, `bioecologia` |
| 122–166 | Morfología externa general, langosta | `morfologiaExterna` |
| 167–187 | Tipos de cabeza según el aparato bucal | `morfologiaExterna` |
| 188–210 | Antena y tipos de antenas | `sistemas.sentidos` y `morfologiaExterna` |
| 211–237 | Pata, estructuras tarsales, tipos de patas | `morfologiaExterna` / `sistemas.muscular` si habla de locomoción |
| 238–285 | Ala, ensamble alar, tipos de alas | `estructurasEspeciales` → "Alas" |
| 286–303 | Sistemas reproductores (genitalia, oviscapto) | `sistemas.reproductor` |
| 304–491 | Aparatos bucales (masticador, lamedor, sifón, esponja, masticador-lamedor) | `estructurasEspeciales` → "Aparatos bucales" (un dato por tipo) y `sistemas.digestivo` si habla de alimentación |
| 492–640 | Estructura interna (digestivo, respiratorio traqueal, circulatorio, excretor, nervioso, etc.) | `sistemas.*`, `reproduccion` (metamorfosis) |

## Reglas específicas

- `protura`, `diplura` y `collembola` comparten la descripción de Entognatha: cargá el mismo texto en los tres, cada uno
  con su fuente (líneas 28–31 + la línea de su clase). Así cumplen el requisito de tener al menos una fuente de apunte.
- Las líneas que solo son títulos de figuras ("A: MASTICADOR", "TIPOS DE ALAS"…) no generan datos por sí solas.

## Criterios de aceptación

- [ ] `insecta` con resumen, morfología, al menos 7 sistemas y las estructuras especiales "Alas" y "Aparatos bucales".
- [ ] `hexapoda`, `protura`, `diplura`, `collembola` con al menos 1 dato de apunte.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=hexapoda,insecta,protura,diplura,collembola pnpm cobertura
```
