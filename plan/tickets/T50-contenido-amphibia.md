# T50 — Contenido: Amphibia y sus órdenes (TP15)

**Épica**: E7 TP15 Tetrápodos · **Depende de**: T49 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

> Relación con T46: el apunte TP15 (`anfibios, reptiles.md`) llegó después de escrito el plan.
> Amphibia ya **tiene apunte**, así que se agrega como taxón normal con fuentes `apunte`
> (nada de `externo: true`). T46 queda solo para Aves y Mammalia.

## Objetivo

Registrar el apunte TP15 en el catálogo y crear la clase Amphibia con sus tres órdenes,
como taxones con contenido citado del apunte.

## Fuente

`anfibios, reptiles.md`, líneas **4–305** (ignorar los bloques `Trabajo Práctico N°15` /
`APUNTES- Anfibios y Reptiles`, la línea `Cátedra de Biología Animal…` y los números de
página sueltos de cada página).

## Archivos

- Modificar: `lib/apuntes.ts` (agregar `'anfibios, reptiles.md': { tp: 15, titulo: 'Anfibios y Reptiles' }`)
- Crear: `data/taxa/amphibia.ts`, `data/taxa/anura.ts`, `data/taxa/caudata.ts`, `data/taxa/gymnophiona.ts`
- Modificar: `data/taxa/index.ts` (imports al final, después de `sarcopterygii`)

## Taxones nuevos

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| amphibia | Amphibia | Anfibios | clase | gnathostomata | 3 | |
| anura | Anura | Ranas, sapos y escuerzos | subclase | amphibia | 1 | Salientia |
| caudata | Caudata | Salamandras y tritones | subclase | amphibia | 2 | Urodela |
| gymnophiona | Gymnophiona | Cecilias | subclase | amphibia | 3 | Apoda |

(El apunte los llama "órdenes"; la app los representa como `subclase`, nivel más fino
disponible — mismo criterio que `araneida`, `copepoda`, etc.)

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| amphibia | 4–86 | Ubicación (Chordata › Vertebrata › Gnatostomatha), etimología, diagnosis (intermedios entre peces y reptiles), tetrápodos, las 6 modificaciones de la transición agua→tierra, formas corporales y extremidades, piel y coloración, fosas nasales/ojos/tímpano, respiración, fecundación y larvas, hábitat/poiquilotermia/invernación, alimentación, Lisamphibia y sus 3 órdenes. |
| anura | 88–249 | Orden Anura (ranas, sapos, escuerzos). La rana funciona como organismo tipo: piel y glándulas, cabeza/ojos/membrana nictitante, patas, esqueleto (9 vértebras, sin costillas), digestivo, circulatorio (corazón tricamerado) y linfático, respiratorio, excretor, glándulas endocrinas (→ `estructurasEspeciales`), nervioso + simpático, sentidos, reproductor, amplexo y metamorfosis del renacuajo, incubación en piel, alimentación, discos de Hylidae, depredadores. |
| caudata | 251–290 | Orden Caudados (Urodela): anfibios con cola, distribución, extremidades, tamaño, esqueleto (muchas vértebras), dientes, músculos segmentarios, branquias externas y pulmones, neotenia en ambistómidas. |
| gymnophiona | 292–305 | Orden Gymnophiona (Apoda, cecilias): ~160 especies vermiformes tropicales, hipógeas, escamas, vértebras, sin extremidades ni cinturas, tentáculos sensoriales, fecundación interna con órgano copulador eyectable, larvas y viviparidad. |

## Reglas específicas

- Lo **general de la clase** va en `amphibia`; lo propio de cada orden en su archivo.
- El bloque de **glándulas endocrinas** (líneas 169–181) va en `anura.estructurasEspeciales`
  con el título "Glándulas endocrinas" (no hay campo de sistema endocrino).
- Atención: el texto de las líneas 225–235 (incubación en piel) viene con las columnas
  del PDF mezcladas; reconstruir solo lo evidente y citar el fragmento legible.
- `embriologia: {}` en todos: la embriología se hereda de los ancestros.
- Nada de `externo`: todos tienen fuentes `apunte`.

## Criterios de aceptación

- [ ] El test `cada clave de APUNTES existe como archivo` pasa con el TP15 registrado.
- [ ] `anura` con resumen, morfología y al menos 8 sistemas con datos.
- [ ] `amphibia` con resumen (incluye la ubicación y las 3 órdenes) y los datos generales de la clase.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=amphibia,anura,caudata,gymnophiona pnpm cobertura
```

## Fuera de alcance

- Reptilia y sus grupos (T51). Aves y Mammalia (siguen en T46, opcional).
- Fuentes web: este ticket es solo extracción del apunte.
