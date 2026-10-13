# T06 — Tests de integridad de datos y reporte de cobertura

**Épica**: E0 Base · **Depende de**: T05

## Objetivo

Validar automáticamente que los datos sean consistentes y que **cada cita de apunte exista realmente** en las
líneas indicadas (evita datos inventados). Además, un reporte de cobertura que muestra qué secciones tiene cada taxón.

## Archivos

- Crear: `tests/unit/integridad.test.ts`, `tests/reportes/cobertura.test.ts`, `lib/cobertura.ts`
- Borrar: `tests/reportes/.gitkeep`

## Pasos

### 1. `tests/unit/integridad.test.ts`

Usar `TAXA` (`@/data/taxa`), `recorrerItems` (`@/lib/recorrer`), `NIVEL_ORDEN`, `VALORES_CRITERIO`, `APUNTES`,
`dominioPermitido`, `normalizarEspacios`. Leer cada archivo de apunte **una sola vez** con
`readFileSync(path.join(process.cwd(), 'animal-data', archivo), 'utf8').split('\n')` y cachearlo en un `Map`.

Tests (un `describe('integridad de datos')` con un `it` por regla; los mensajes de error deben indicar
**slug + sección + texto (primeros 60 caracteres)** para que sea fácil encontrar el problema):

1. **Slugs**: únicos y con formato `/^[a-z0-9-]+$/`.
2. **Raíz**: existe exactamente un taxón con `padre === null` y es `animalia`.
3. **Padres**: todo `padre` no nulo existe en `TAXA`.
4. **Sin ciclos**: subiendo por `padre` desde cualquier taxón se llega a `animalia` en menos de 15 pasos.
5. **Niveles**: `NIVEL_ORDEN[hijo.nivel] > NIVEL_ORDEN[padre.nivel]`, excepto si ambos son `'clado'`.
6. **Orden**: entre hermanos, los valores de `orden` no se repiten.
7. **Fuentes presentes**: cada item de `recorrerItems(t)` tiene `texto` no vacío, `texto.length <= 600`
   y `fuentes.length >= 1`.
8. **Embriología válida**: cada `valor` de `t.embriologia[c]` pertenece a `VALORES_CRITERIO[c]`.
9. **Fuentes de apunte**: para cada fuente `tipo: 'apunte'`:
   - `archivo` es clave de `APUNTES`;
   - `1 <= ini <= fin <= cantidad de líneas del archivo` y `fin - ini <= 120`;
   - `cita` tiene entre 3 y 25 palabras;
   - `normalizarEspacios(lineas.slice(ini - 1, fin).join(' '))` **contiene** `normalizarEspacios(cita)`.
10. **Fuentes web**: `url` empieza con `https://`, `dominioPermitido(url)` es true, `titulo` y `sitio` no vacíos,
    `consultado` cumple `/^\d{4}-\d{2}-\d{2}$/`.
11. **Taxones externos**: si `t.externo !== true` y el taxón tiene al menos un item, al menos una fuente del
    taxón es de tipo `apunte`. Si `t.externo === true`, ninguna fuente es de tipo `apunte`.
12. **Ejemplos**: `nombre` no empieza con "Ej" y no termina en punto.

Agregar además un test **negativo** de la regla 9: una función auxiliar `verificarCita(fuente)` (definida en el
mismo archivo de test) devuelve `false` para una cita que no está en el rango y `true` para una que sí
(usar `annelidos.md` [36, 38] con la cita `'El sistema circulatorio es cerrado'` como caso positivo).

### 2. `lib/cobertura.ts` (puro)

```ts
export type CeldaCobertura = '-' | 'A' | 'W' | 'AW';   // sin datos | solo apunte | solo web | ambos
export type FilaCobertura = {
  slug: string;
  nivel: Nivel;
  resumen: CeldaCobertura;
  morfo: CeldaCobertura;
  emb: string;              // criterios propios definidos, ej. "3/5"
  sistemas: Record<SistemaId, CeldaCobertura>;
  especiales: number;
  repro: CeldaCobertura;
  bioeco: CeldaCobertura;
  ejemplos: number;
  notas: number;
};
export function calcularCobertura(t: Taxon): FilaCobertura
```

La celda se calcula mirando las fuentes de todos los datos de esa sección.

### 3. `tests/reportes/cobertura.test.ts`

Un único `it('reporte de cobertura')` que arma las filas para todos los `TAXA` y las imprime con `console.table`,
aplanando `sistemas` en columnas con nombres cortos (`teg, esq, mus, dig, res, cir, exc, ner, sen, rep`).
Al final imprime totales: cantidad de taxones con resumen, y cantidad de celdas de sistemas `'-'`.
El test siempre pasa (`expect(true).toBe(true)`).

Debe poder filtrarse por slug con una variable de entorno: `SLUGS=annelida,polychaeta pnpm cobertura`
→ solo esas filas.

## Criterios de aceptación

- [ ] Con los datos esqueleto (todo vacío) todos los tests pasan.
- [ ] Si se agrega a mano una cita falsa en cualquier taxón, `pnpm test` falla con un mensaje que indica slug y sección
      (probalo localmente y **revertilo** antes del commit).
- [ ] `pnpm cobertura` imprime la tabla de 89 filas; con `SLUGS=` imprime solo las pedidas.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm cobertura
SLUGS=annelida,porifera pnpm cobertura
```

## Fuera de alcance

- Contenido de los taxones.
