## Proyecto

App de estudio de biología animal (español). Monorepo con pnpm workspaces:

```
apps/web/        # app Next.js: app/, components/, lib/, data/, public/, tests/ (ver apps/web/AGENTS.md)
apuntes-data/    # apuntes originales de la cátedra (NO editar)
models/          # fuentes de modelos 3D (Blender) y scripts que exportan a apps/web/public/models/
plan/            # plan de tickets y guías de contenido
```

Las apps nuevas (backend, agente IA) van en `apps/<nombre>/`; el código compartido, en `packages/<nombre>/`.
Contenido en `apps/web/data/taxa/<slug>.ts`, un archivo por grupo.

### Verificación

Desde la raíz (los scripts recorren el workspace o delegan en `apps/web`):

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm cobertura
```

Para correr algo de una sola app: `pnpm --filter @biologia-animal/web <script>`.

### Reglas clave

- **Todo dato lleva fuente.** Los apuntes se citan con `archivo`, `lineas` y `cita` literal; un test de integridad verifica que la cita exista en esas líneas. Fuentes web: `tipo: 'web'` con URL. Si la web contradice al apunte, se agrega una `nota` de discrepancia — nunca se pisa el dato de la cátedra.
- **Client Components no importan `apps/web/data/` ni `apps/web/lib/taxa.ts`** (los datos viajan por props desde Server Components).
- **Cache Components**: nada de `dynamic`/`dynamicParams`; `useSearchParams` y `usePathname` van dentro de `<Suspense>`.
- **`apuntes-data/` no se edita** (son los apuntes originales).
- Vitest solo corre `apps/web/tests/unit/**`; los E2E de Playwright viven en `apps/web/tests/e2e/`.

## Reglas de trabajo con contexto
 
- No leas archivos grandes ni explores el repo en el contexto principal.
  Delegá la lectura/búsqueda a un subagente y trabajé solo con su resumen.
- El subagente devuelve notas estructuradas y punteros (paths, líneas,
  secciones) — nunca el texto completo.
- Excepción: lecturas triviales (un archivo chico, un grep puntual) se
  hacen directo; no spawnear subagente para <~100 líneas.
- Si el texto solo se transforma (no se razona sobre él), escribir un
  script que lo procese en vez de leerlo.

### Guías

- `plan/guia-contenido.md` — cómo extraer datos de los apuntes.
- `plan/guia-fuentes-web.md` — cómo agregar fuentes externas y notas de discrepancia.
- `plan/README.md` — reglas generales del proyecto y orden de tickets.
