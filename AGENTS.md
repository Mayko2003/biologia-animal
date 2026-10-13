<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Proyecto

App de estudio de biología animal (español). Contenido en `data/taxa/<slug>.ts`, un archivo por grupo.

### Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm cobertura
```

### Reglas clave

- **Todo dato lleva fuente.** Los apuntes se citan con `archivo`, `lineas` y `cita` literal; un test de integridad verifica que la cita exista en esas líneas. Fuentes web: `tipo: 'web'` con URL. Si la web contradice al apunte, se agrega una `nota` de discrepancia — nunca se pisa el dato de la cátedra.
- **Client Components no importan `data/` ni `lib/taxa.ts`** (los datos viajan por props desde Server Components).
- **Cache Components**: nada de `dynamic`/`dynamicParams`; `useSearchParams` y `usePathname` van dentro de `<Suspense>`.
- **`animal-data/` no se edita** (son los apuntes originales).
- Vitest solo corre `tests/unit/**`; los E2E de Playwright viven en `tests/e2e/`.

### Guías

- `plan/guia-contenido.md` — cómo extraer datos de los apuntes.
- `plan/guia-fuentes-web.md` — cómo agregar fuentes externas y notas de discrepancia.
- `plan/README.md` — reglas generales del proyecto y orden de tickets.
