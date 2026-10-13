# T51 — Contenido: Reptilia y sus grupos (TP15)

**Épica**: E7 TP15 Tetrápodos · **Depende de**: T50 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

> Relación con T46: igual que Amphibia (T50), Reptilia ahora tiene apunte propio (TP15),
> así que se agrega como taxón normal con fuentes `apunte` (nada de `externo: true`).

## Objetivo

Crear la clase Reptilia con los grupos que el apunte describe como órdenes/subórdenes,
aplanados a `subclase` (la app no tiene nivel "orden", y los subórdenes de Escamoso
quedan como subclases hermanas dentro de Reptilia).

## Fuente

`anfibios, reptiles.md`, líneas **314–607** (mismas exclusiones de encabezados de página
que en T50; la `BIBLIOGRAFIA` desde la línea 616 no se usa).

## Archivos

- Crear: `data/taxa/reptilia.ts`, `data/taxa/crocodilia.ts`, `data/taxa/chelonia.ts`,
  `data/taxa/sauria.ts`, `data/taxa/amphisbaenia.ts`, `data/taxa/serpentes.ts`,
  `data/taxa/sphenodonta.ts`
- Modificar: `data/taxa/index.ts` (imports al final, después de los de T50)

## Taxones nuevos

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| reptilia | Reptilia | Reptiles | clase | gnathostomata | 4 | |
| crocodilia | Crocodilia | Cocodrilos, caimanes y aligátores | subclase | reptilia | 1 | Cocodrilos |
| chelonia | Chelonia | Quelonios (tortugas) | subclase | reptilia | 2 | Quelonios, Testudines |
| sauria | Sauria | Saurios (lagartos) | subclase | reptilia | 3 | Lacertilia |
| amphisbaenia | Amphisbaenia | Anfisbenios (culebrillas ciegas) | subclase | reptilia | 4 | |
| serpentes | Serpentes | Serpientes (víboras y culebras) | subclase | reptilia | 5 | Ophidia |
| sphenodonta | Sphenodonta | Tuátaras (esfenodontes) | subclase | reptilia | 6 | Rhynchocephalia |

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| reptilia | 314–349 | Diagnosis (lagartos, serpientes, tortugas, cocodrilos/caimanes, tuátara; Mesozoico), primer vertebrado adaptado a lugares secos (piel córnea y escamas), diferencias con anfibios (poiquilotermos igual), tamaños, distribución y hábitos, alimentación; y la clasificación del apunte (Arcosaurios→Cocodrilos, Anapsidos→Quelonios, Lepidosaurios→Escamoso→Saurios/Anfisbenios/Serpientes, Diapsida→Sphenodonta) como dato de `resumen` con las 4 fuentes de los encabezados. |
| crocodilia | 351–435 | Orden Cocodrilos dentro de la subclase Arcosaurios: cuerpo, tegumento (escamas, exoesqueleto de placas dérmicas, glándula del almizcle), esqueleto (dentición tecodonta, paladar secundario, vértebras), muscular, digestivo, circulatorio (ventrículos separados — distintivo), respiratorio, excretor, nervioso, sentidos, reproductor; 3 familias actuales; bioecología del caimán (nido e incubación). |
| chelonia | 444–471 | Orden Quelonios dentro de la subclase Anapsidos: caparazón (espaldar/peto, capas de queratina y hueso, vértebras soldadas), pico córneo sin dientes, patas, branquias cloacales, orina líquida, sentidos, reproducción (ovíparas, entierran huevos; determinación del sexo por temperatura del nido; plastrón cóncavo del macho). |
| sauria | 473–484 | Suborden Saurios del orden Escamoso (Lepidosaurios): lagartos alargados, autotomía de cola, escamas imbricadas, tímpano externo, dientes cortos, orina semisólida, hemipenes. |
| amphisbaenia | 486–500 | Suborden Anfisbenios: culebrillas ciegas hipógeas, cuerpo anillado vermiforme, sin ojos/uídos visibles, locomoción "sobre ambos extremos", distribución. |
| serpentes | 502–561 | Suborden Serpientes: sin apéndices/cinturas/esternón/párpados/vejiga (→ `ausente` para vejiga), escamas ventrales (gastrotegos) y caudales (urostegos), cráneo cinético, dentición y colmillos venenosos, lengua bífida y órganos de Jacobson, fosetas loreales termosensitivas, los 4 métodos de locomoción (→ `sistemas.muscular`), hemipenes, ovíparas/ovovivíparas/vivíparas, almacenamiento de esperma. |
| sphenodonta | 563–607 | Orden Sphenodonta dentro de la subclase Diapsida: tuátaras (Sphenodon), endémicas de Nueva Zelanda, "fósiles vivientes", cráneo diápsido y ojo pineal/parietal, sin hemipenes, tamaño y hábitos, conservación (casi extinción, reintroducción, amenaza del calentamiento global al sexo de las crías). |

## Reglas específicas

- La **clasificación del apunte** (arcosaurios/anapsidos/lepidosaurios/diapsida) se registra
  en `reptilia.resumen` con una fuente por encabezado; en cada subclase el `resumen` aclara
  su ubicación ("Suborden del orden Escamoso, según el apunte", etc.).
- Los cuatro métodos de locomoción de las serpientes (acordeón, ondulado, enrollado lateral,
  rectilíneo) van como datos separados en `serpentes.sistemas.muscular`.
- `embriologia: {}` en todos; nada de `externo`.

## Criterios de aceptación

- [ ] `crocodilia` con resumen, morfología y los 10 sistemas (el apunte los describe todos).
- [ ] `serpentes` con los 4 métodos de locomoción y las fosetas loreales.
- [ ] `reptilia` con el dato de clasificación del apunte citando los 4 encabezados.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=reptilia,crocodilia,chelonia,sauria,amphisbaenia,serpentes,sphenodonta pnpm cobertura
```

## Fuera de alcance

- Aves y Mammalia (T46, opcional). Nota `discrepancia` sobre la parafilia de Reptilia:
  solo si se agrega una fuente web en un ticket posterior (la guía de fuentes web aplica).
