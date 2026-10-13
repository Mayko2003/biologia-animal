# T02 — Scripts de calidad y Vitest

**Épica**: E0 Base · **Depende de**: T01

## Objetivo

Tener `pnpm typecheck`, `pnpm test` y `pnpm cobertura` funcionando, con Vitest configurado y el alias `@/`.

## Archivos

- Modificar: `package.json`
- Crear: `vitest.config.ts`, `vitest.reportes.config.ts`, `tests/unit/humo.test.ts`, `tests/reportes/.gitkeep`

## Pasos

1. Instalar Vitest con versión fija:
   ```bash
   pnpm add -D vitest@5.0.3
   ```
2. En `package.json`, agregar a `scripts` (sin borrar los existentes):
   ```json
   "typecheck": "next typegen && tsc --noEmit",
   "test": "vitest run",
   "test:watch": "vitest",
   "cobertura": "vitest run --config vitest.reportes.config.ts"
   ```
3. `vitest.config.ts`:
   ```ts
   import { fileURLToPath } from 'node:url';
   import { defineConfig } from 'vitest/config';

   export default defineConfig({
     resolve: {
       alias: [{ find: /^@\//, replacement: fileURLToPath(new URL('./', import.meta.url)) }],
     },
     test: {
       environment: 'node',
       include: ['tests/unit/**/*.test.ts'],
     },
   });
   ```
4. `vitest.reportes.config.ts`:
   ```ts
   import { defineConfig, mergeConfig } from 'vitest/config';
   import base from './vitest.config';

   export default mergeConfig(base, defineConfig({ test: { include: ['tests/reportes/**/*.test.ts'] } }));
   ```
   > Nota: `mergeConfig` concatena arrays. Si al correr `pnpm cobertura` también se ejecutan los tests de
   > `tests/unit`, reemplazá `mergeConfig` por una config completa copiando `resolve` de la base.
5. `tests/unit/humo.test.ts`: un test trivial (`expect(1 + 1).toBe(2)`) para que Vitest no falle por "no tests".
   Se borra en T05.
6. Crear `tests/reportes/.gitkeep` (vacío).
7. Ejecutá `pnpm typecheck`. Si `next typegen` genera/actualiza `next-env.d.ts`, está bien (ya está en `.gitignore`).

## Criterios de aceptación

- [ ] `pnpm test` ejecuta 1 test y pasa.
- [ ] `pnpm typecheck` pasa.
- [ ] `pnpm cobertura` corre sin error (puede decir que no hay tests; si Vitest sale con código ≠ 0 por
      "No test files found", agregá `passWithNoTests: true` en `vitest.reportes.config.ts`).
- [ ] `pnpm lint` pasa (incluye los archivos de config).

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm cobertura
```

## Fuera de alcance

- Playwright (T47).
