# T18 — Contenido: Cnidaria y sus clases

**Épica**: E3 Contenido · **Depende de**: T17 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`porifera y cnidarios.md`, líneas **310–595** (encabezados de página a ignorar: 341–344, 393–396, 460–463, 513–516, 571–574).

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| cnidaria | 310–340, 355–413 (solo lo general), 363–377 | Diagnosis, nº de especies, celenterón/cavidad gastrovascular, tentáculos, pared del cuerpo (epidermis, mesoglea, gastrodermis), debate diblásticos/triblásticos, formas pólipo y medusa. Los **cnidocitos/nematocistos** (363–377) van como `estructurasEspeciales` → "Cnidocitos". Alimentación carnívora (407–409), intercambio gaseoso y excreción por difusión (411–413). |
| hydrozoa | 346–444, 469–492, 518–541 | *Hydra* (organismo tipo: forma, tipos celulares de epidermis y gastrodermis, movimientos, reproducción asexual/sexual), pólipos coloniales (*Obelia*, *Plumularia*, *Millepora*: hidrorriza, hidrocaulo, perisarco, hidroteca, polimorfismo), hidromedusas (estructura tetrámera, sistema nervioso, estatocistos, ciclo con larva plánula y actínula). |
| anthozoa | 445–467, 493–511 | *Metridium* (anémona: disco pedal, sifonoglifo, septos, reproducción, larva plánula), corales (*Tubipora*, *Gorgonia*, *Corallium*…: sin fase medusa, esqueleto de CaCO3, cáliz, gemación). |
| scyphozoa | 543–556, 560–575, 580–595 | Mesoglea gruesa, medusa dominante, tamaño, coloración, ropalios, brazos orales, alimentación (*Aurelia*), gónadas, ciclo: plánula → escifistoma → estrobilación → éfira. |
| cubozoa | 556–562, 576–578, 585–587 | 15 especies tropicales, peligrosas ("avispas de mar"), campana cuadrada sin velario, 4 tentáculos o grupos de tentáculos, dioicos con gónadas en la cavidad gastrovascular. |

## Reglas específicas

- Lo que el apunte dice de *Hydra* va en `hydrozoa` con el prefijo "En Hydra, …". Lo que vale para todos los cnidarios
  (ej. "los Cnidarios son carnívoros", cnidocitos) va en `cnidaria`.
- Datos compartidos por Scyphozoa y Cubozoa (líneas 556–562, 585–587) se cargan **en ambos**, cada uno con su fuente.

## Embriología

| slug | criterio | valor | Fuente |
|---|---|---|---|
| cnidaria | capas | `diblastico` | 330–335, con `nota`: 'Para algunos autores los Anthozoos presentarían un mesodermo primario (triblásticos).' |
| scyphozoa | capas | `triblastico` | 543, con `nota`: 'Según el apunte, por su mesoglea gruesa con células ameboidales.' |

## Ejemplos esperados

hydrozoa: *Hydra*, *Obelia*, *Plumularia*, *Millepora*, *Tubularia*. anthozoa: *Metridium*, *Gorgonia*, *Corallium*, *Tubipora*, *Renilla*, *Fungia*.
scyphozoa: *Aurelia*.

## Criterios de aceptación

- [ ] Los 5 slugs tienen `resumen`; `hydrozoa` y `anthozoa` tienen al menos 4 sistemas con datos.
- [ ] `cnidaria` tiene la estructura especial "Cnidocitos".
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=cnidaria,hydrozoa,anthozoa,scyphozoa,cubozoa pnpm cobertura
```
