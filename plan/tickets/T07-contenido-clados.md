# T07 — Contenido: clados superiores

**Épica**: E1 Piloto · **Depende de**: T06 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Objetivo

Completar los 9 grupos superiores con lo que dicen los apuntes. Estos grupos **no tienen sistemas**: solo
`resumen`, `embriologia` y, si corresponde, `notas`.

## Slugs y líneas

| slug | Archivo | Líneas | Qué extraer |
|---|---|---|---|
| animalia | `porifera y cnidarios.md` | 7–12 | Definición del Reino Animalia (pluricelulares, móviles, heterótrofos, blástula), diversidad, 29 phyla, solo Cordados no invertebrados. |
| parazoa | `porifera y cnidarios.md` | 14–23, 28–32 | Organización a nivel celular, sin tejidos ni órganos verdaderos; incluye a Porifera (y Archaeocyatha, extinto). |
| eumetazoa | `porifera y cnidarios.md` | 291–298 | Con tejidos verdaderos; formas diploblásticas y tripoblásticas. |
| radiata | `porifera y cnidarios.md` | 300–308 | Simetría radial (octómera, hexámera, tetrámera, dímera), eje oral-aboral; Superphylum Coelenterata (cavidad gastrovascular, etc.). |
| bilateria | `platelmintos.md` + `porifera y cnidarios.md` | platelmintos 10–12; porifera 333–335 | Animales de simetría bilateral, que se dividen en protostomados y deuterostomados; el mesodermo secundario aparece recién en los bilaterios. |
| protostomia | `platelmintos.md` | 10–21 | Boca del adulto deriva del blastoporo; desarrollo determinado en mosaico; segmentación en T, radial o espiral según el grupo; célula D. |
| deuterostomia | `platelmintos.md` + `chordata.md` | platelmintos 13–15; chordata 14–16 | En los deuterostomados la boca es de neoformación. Chordata es el mayor phylum de deuteróstomos. |
| lophotrochozoa | `platelmintos.md` | 23–35 | Protostomados con desarrollo en espiral; Trochozoa (larva trocófora) y Lophophorata (lofóforo); inclusión de platelmintos, gastrotricos y mesozoos; postura de Platyzoa. |
| ecdysozoa | `nematodos.md` | 11–14 | Pueden ser celomados o pseudocelomados; incluyen artrópodos y nematodos; muda (ecdisis) de la cutícula. |

## Embriología a completar (solo estos registros)

| slug | criterio | valor | Fuente sugerida |
|---|---|---|---|
| parazoa | capas | `sin-tejidos` | porifera 16–18 |
| radiata | simetria | `radial` | porifera 300 |
| bilateria | simetria | `bilateral` | platelmintos 11–12 |
| bilateria | capas | `triblastico` | porifera 334–335 (cita: "El mesodermo secundario se encontrará recién en los bilaterios") |
| protostomia | blastoporo | `boca` | platelmintos 12–13 |
| deuterostomia | blastoporo | `ano` | platelmintos 13–14, con `nota: 'El apunte indica que en los deuterostomados la boca es de neoformación (no deriva del blastoporo).'` |
| lophotrochozoa | segmentacion | `espiral` | platelmintos 23–24 |

## Notas a agregar

- `lophotrochozoa` → `aclaracion`: muchos autores separan a los platelmintos en Platyzoa (platelmintos 30–35).
- `protostomia` → `aclaracion`: el destino del blastoporo es más complejo y variable de lo que indica la definición clásica (platelmintos 14–15).
- `radiata` → `aclaracion`: el apunte menciona el Superphylum Coelenterata dentro de Radiata (porifera 303–308).

## Pasos

Seguir el §8 de la guía. Cada slug debe terminar con **al menos 2 datos en `resumen`**.

## Criterios de aceptación

- [ ] Los 9 slugs tienen `resumen` con citas válidas.
- [ ] Los 7 registros de embriología de la tabla existen con valor correcto.
- [ ] Las 3 notas existen.
- [ ] Ningún clado tiene `sistemas`, `ejemplos` ni `morfologiaExterna`.
- [ ] `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=animalia,parazoa,eumetazoa,radiata,bilateria,protostomia,deuterostomia,lophotrochozoa,ecdysozoa pnpm cobertura
```

## Fuera de alcance

- Datos de phyla.
