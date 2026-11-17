# T53 — Panel de selección como bottom sheet en móvil

**Épica**: E8 Móvil · **Depende de**: T52

## Objetivo

Que seleccionar un grupo en el mapa o el árbol tenga **feedback inmediato** en móvil: hoy el `PanelSeleccion`
se renderiza al final de la página (~1600 px debajo del canvas del mapa) y el toque no produce respuesta
visible. En `<lg` el panel pasa a ser un **bottom sheet** fijo; en `lg+` se mantiene el `aside` sticky actual.

## Archivos

- Modificar: `components/navegacion/panel-seleccion.tsx`, `components/navegacion/use-seleccion.ts` (si la firma
  del setter no admite `null`), `components/ui/iconos.tsx` (si falta `IconoCerrar`).

## Pasos

1. Extraer el contenido actual del panel a un componente interno `ContenidoPanel` (mismo archivo) para reusarlo
   en ambas variantes.
2. **Sin selección** (slug nulo o inexistente): comportamiento actual — bloque inline con el texto de ayuda,
   igual en móvil y escritorio.
3. **Con selección en `<lg`**: renderizar
   - Backdrop: `<div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={cerrar}>` (cerrar =
     `onSeleccionar(null)`; si la prop es `(slug: string) => void`, cambiarla a `string | null` — el hook
     `useParametro` ya acepta `null`).
   - Sheet: `<div role="dialog" aria-modal="true" aria-label="Grupo seleccionado" className="fixed inset-x-0
     bottom-0 z-50 max-h-[75dvh] overflow-auto rounded-t-2xl border-t border-zinc-200 bg-white p-4
     dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">` con:
     - Handle visual: barra `mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700`.
     - Botón cerrar arriba a la derecha: `IconoCerrar`, `aria-label="Cerrar panel"`, target ≥40 px.
     - `ContenidoPanel` con resumen, "Ver ficha completa" y la lista de clases/subgrupos (sin cambios de lógica).
   - La tab bar del T52 (`z-40`) queda debajo del sheet (`z-50`): ok, el sheet la tapa.
4. **Cierre**: click en backdrop, botón ✕ y tecla `Escape` (`onKeyDown` en el sheet o listener en `useEffect`
   con cleanup). Al cerrar no hacer scroll.
5. **Foco**: al abrir, mover el foco al contenedor (`tabIndex={-1}` + `ref.current?.focus()` en un `useEffect`
   que corre cuando aparece el sheet — no es `setState`, es efecto DOM permitido). No robar foco en escritorio.
6. En `lg+`: `aside` con `lg:sticky lg:top-20` exactamente como ahora.

## Criterios de aceptación

- [ ] En 390 px: tocar "Protostomados" en el mapa abre el sheet con resumen, clases y "Ver ficha completa" sin
      tener que scrollear.
- [ ] Backdrop, ✕ y `Escape` cierran el sheet y limpian `?sel` de la URL.
- [ ] En 1280 px el panel es el `aside` sticky de siempre.
- [ ] `pnpm test:e2e` pasa; si algún spec de móvil esperaba el panel en flujo, ajustarlo a buscar dentro del
      `role="dialog"`.

## Verificación

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

## Fuera de alcance

- Gesto de arrastre para cerrar (swipe-to-dismiss): el ✕ y el backdrop alcanzan.
- Vista lista del mapa (T54) y targets del árbol (T55).
