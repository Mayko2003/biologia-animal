# T49 — Cierre: verificación completa y documentación

**Épica**: E6 Cierre · **Depende de**: T48

## Objetivo

Verificar todo de punta a punta, revisar la calidad del contenido y documentar cómo trabajar con el proyecto.

## Archivos

- Modificar: `README.md`, `AGENTS.md`

## Pasos

1. Ejecutar todo:
   ```bash
   pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm cobertura
   ```
2. **Revisión de cobertura**: con la salida de `pnpm cobertura`, listar en el mensaje del commit los taxones que todavía
   tienen sistemas vacíos (`-`), para que el usuario decida si completarlos.
3. **Muestreo de calidad del contenido**: elegir 5 taxones al azar (uno por linaje) y, por cada uno, verificar a mano
   3 datos de apunte (abrir el archivo en las líneas citadas y confirmar que el texto es fiel). Anotar cualquier problema
   en el commit; si es un error claro, corregirlo.
4. **`README.md`**: reemplazar el contenido del template por:
   - Qué es la app y sus funcionalidades (mapa, árbol, fichas, comparador, buscador, filtro de fuentes).
   - Requisitos (Node 24, pnpm 12) y comandos: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm typecheck`,
     `pnpm test`, `pnpm test:e2e`, `pnpm cobertura`.
   - Estructura de carpetas (copiar y actualizar la de `plan/README.md` §5).
   - Cómo agregar o corregir contenido: editar `data/taxa/<slug>.ts` siguiendo `plan/guia-contenido.md`, y correr `pnpm test`.
5. **`AGENTS.md`**: **sin tocar** el bloque `<!-- BEGIN:nextjs-agent-rules --> … <!-- END:nextjs-agent-rules -->`,
   agregar debajo una sección "Proyecto" con:
   - Comandos de verificación (los de la definición de terminado).
   - Reglas clave: datos con fuente obligatoria y citas verificadas por test; Client Components sin imports de `data/`
     ni `lib/taxa.ts`; nada de `dynamic`/`dynamicParams` (Cache Components); `useSearchParams` dentro de `Suspense`;
     no editar `animal-data/`.
   - Ubicación de las guías (`plan/guia-contenido.md`, `plan/guia-fuentes-web.md`).
6. Commit final: `git commit -m "T49: verificación final y documentación"`.

## Criterios de aceptación

- [ ] Todos los comandos pasan.
- [ ] README y AGENTS.md actualizados; el bloque de Next en AGENTS.md intacto.
- [ ] Lista de huecos de contenido incluida en el mensaje del commit.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e
git log --oneline | head -60
```
