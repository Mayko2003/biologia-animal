# T27 — Contenido: Arthropoda, Chelicerata y sus clases

**Épica**: E3 Contenido · **Depende de**: T26 · **Guía obligatoria**: [guia-contenido.md](../guia-contenido.md)

## Fuente

`quilicerados y miriapodos.md`, líneas **12–458**. Encabezados a ignorar: bloques `APUNTES-Trabajo Práctico N°9` /
`ARTROPODOS I - Quelicerados y Miriápodos` (ej. 452–453 y los equivalentes en cada página) y "Cátedra…".

## Slugs y líneas

| slug | Líneas | Qué extraer |
|---|---|---|
| arthropoda | 12–145 | Generalidades y diagnosis: origen anelidiano, exoesqueleto quitinoso, hábitats, socialidad, segmentación/tagmas, apéndices articulados, muda, sistemas generales, coloración (141–144). Este rango es largo: leelo completo y distribuí en todas las secciones. |
| chelicerata | 146–155 | Cefalotórax y abdomen, sin antenas, quelíceros, pedipalpos, 4 pares de patas; tres clases (Merostomata, Pycnogonida, Arachnida). |
| merostomata | 153–155 | Solo lo que dice: "cangrejos cacerola, marinos". Un dato de `resumen`. |
| pycnogonida | 153–155 | Solo lo que dice: "arañas de mar". Un dato de `resumen`. |
| arachnida | 157–162 | La clase más importante de quelicerados; órdenes que incluye (escorpiones, arañas, ácaros, etc.). |
| araneida | 164–298 | Arañas: morfología, quelíceros y glándulas de veneno, hileras y seda, respiración (filotráqueas/tráqueas), circulación, excreción, sentidos, reproducción (pedipalpos del macho), bioecología. |
| scorpionida | 299–366 | Escorpiones: morfología (pre y postabdomen, telson, peines), anatomía, reproducción (viviparidad), importancia sanitaria. |
| acari | 367–458 | Ácaros y garrapatas: morfología, alimentación, importancia, ciclo (larva hexápoda, protoninfa, deutoninfa, tritoninfa). |

## Reglas específicas

- Merostomata y Pycnogonida **solo** reciben el dato de las líneas 153–155 (los huecos se llenan en T43).
- Los órdenes de Arachnida mencionados en 159–162 van como texto en `arachnida.resumen` (no como ejemplos).

## Criterios de aceptación

- [ ] `arthropoda` con al menos 7 sistemas con datos.
- [ ] `araneida`, `scorpionida` y `acari` con resumen, morfología, reproducción y los sistemas descritos.
- [ ] `merostomata` y `pycnogonida` con al menos 1 dato con fuente de apunte (requisito del test de integridad).
- [ ] Checklist §9 de la guía cumplido. `pnpm test` pasa.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test
SLUGS=arthropoda,chelicerata,merostomata,pycnogonida,arachnida,araneida,scorpionida,acari pnpm cobertura
```
