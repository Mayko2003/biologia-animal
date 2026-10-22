# T63 — Contenido: Mammalia y sus subclases (TP16)

**Épica**: E8 TP16 Aves y Mamíferos · **Depende de**: T62 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

> El apunte TP16 (`aves, mamiferos.md`) ya está convertido con `markitdown` y registrado en
> `lib/apuntes.ts` desde T62 (el PDF reenviado es idéntico: mismo md5). Mammalia se agrega como
> taxón normal con fuentes `apunte` (nada de `externo: true`).

## Objetivo

Crear la clase Mammalia con las dos subclases que el apunte reconoce (Prototheria y Theria),
con contenido citado del apunte.

## Fuente

`aves, mamiferos.md`, líneas **406–793**. Ignorar los encabezados de página
(`Trabajo Práctico N°16` / `APUNTES- Aves y Mamiferos`), la línea `Cátedra de Biología Animal…`
y los números de página sueltos (saltos en 399–404, 454–459, 509–514, 565–570, 618–623,
670–675, 726–731, 783–788). La `BIBLIOGRAFIA` (desde 795) no se usa.

## Archivos

- Crear: `data/taxa/mammalia.ts`, `data/taxa/prototheria.ts`, `data/taxa/theria.ts`
- Modificar: `data/taxa/index.ts` (imports al final, después de los de T62)

## Taxones nuevos

| slug | nombre | nombreComun | nivel | padre | orden |
|---|---|---|---|---|---|
| mammalia | Mammalia | Mamíferos | clase | gnathostomata | 6 |
| prototheria | Prototheria | Mamíferos ovíparos (monotremas) | subclase | mammalia | 1 |
| theria | Theria | Marsupiales y placentarios | subclase | mammalia | 2 |

(Las infraclases Monotremata, Metatheria y Eutheria no tienen nivel propio en la app: se
describen como datos dentro de su subclase.)

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| mammalia | 406–770 | Etimología (mamma), nº de especies, diversidad de tamaños, importancia económica e impacto humano, origen en terápsidos, diagnosis (pelo, endotermia, glándulas mamarias, cuidado parental, dientes difiodontos, neopalio) (406–452). Caracteres externos (461–471). Tegumento: piel, pelo, borra y cerdas, muda, vibrisas y espinas (473–522). Cuernos y astas (524–547) y glándulas tegumentarias (548–625) → `estructurasEspeciales`. Esqueleto (629–651), muscular y diafragma (653–656), digestivo con dientes y rumiantes (658–709), circulatorio (711–716), respiratorio (718), excretor (719–721), nervioso y sentidos (723–736), glándulas endocrinas (738–740) → `estructurasEspeciales`, reproductor y placenta (742–754). Historia natural (756–770). |
| prototheria | 772–777 | Subclase Prototheria (mamíferos ovíparos), infraclase Monotremata: ornitorrincos y equidna. |
| theria | 779–793 | Subclase Theria: infraclase Metatheria (marsupio, placenta rara; zarigüeyas, comadrejas, canguros, koalas, lobo de Tasmania) e infraclase Eutheria (placentarios, restantes órdenes). |

## Reglas específicas

- La **clasificación del apunte** (Prototheria/Theria) se registra en `mammalia.resumen`; en
  cada subclase el `resumen` aclara su ubicación según el apunte.
- El apunte describe a los mamíferos en general (sin organismo tipo).
- "Cuernos y astas", "Glándulas tegumentarias" y "Glándulas endocrinas" van en
  `mammalia.estructurasEspeciales`.
- El diafragma se registra en `muscular` (así lo ubica el apunte) y se menciona en `respiratorio`
  solo si hay cita.
- `embriologia: {}` en todos; nada de `externo`.

## Criterios de aceptación

- [ ] `mammalia` con resumen, morfología y los 10 sistemas.
- [ ] `prototheria` y `theria` con resumen y ejemplos citados.
- [ ] Checklist §9 de la guía cumplido. `pnpm test` y `pnpm build` pasan.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
SLUGS=mammalia,prototheria,theria pnpm cobertura
```

## Fuera de alcance

- Fuentes web y notas de discrepancia: este ticket es solo extracción del apunte.
