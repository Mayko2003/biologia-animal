# Documentación

Describe el proyecto **tal como está hoy**. Si el código y estos documentos no coinciden, el error es del documento:
se corrige en el mismo cambio que lo provocó.

## Por dónde empezar

| Querés… | Leé |
|---|---|
| Saber qué hace la app y qué tiene cargado | [estado.md](estado.md) |
| Entender cómo está armado el código | [arquitectura.md](arquitectura.md) |
| Saber qué verifica cada test antes de tocar algo | [calidad.md](calidad.md) |
| Respetar la identidad visual y las animaciones | [diseno.md](diseno.md) |
| Ver qué cambió y cuándo | [registro.md](registro.md) |

## Guías de trabajo

| Tarea | Guía |
|---|---|
| Cargar contenido de un grupo desde los apuntes | [guias/contenido-apuntes.md](guias/contenido-apuntes.md) |
| Completar huecos con fuentes externas | [guias/fuentes-web.md](guias/fuentes-web.md) |
| Sumar un apunte nuevo o un grupo nuevo | [guias/agregar-apunte.md](guias/agregar-apunte.md) |
| Regenerar o crear un modelo 3D | [guias/modelos-3d.md](guias/modelos-3d.md) |

## Mantener esta carpeta al día

Cada cambio que se commitea revisa esta tabla:

| Si el cambio… | Actualizá |
|---|---|
| Agrega, quita o cambia una funcionalidad, ruta o recurso | `estado.md` |
| Cambia carpetas, módulos, el modelo de datos o el estado en la URL | `arquitectura.md` |
| Agrega o cambia tests, invariantes o comandos de verificación | `calidad.md` |
| Toca colores, tipografía, logo, animaciones o patrones móviles | `diseno.md` |
| Cambia cómo se hace una tarea de las guías | la guía correspondiente |
| **Siempre** | una entrada en `registro.md` (fecha, qué cambió y por qué) |

## Historial

[historial/](historial/plan-original.md) guarda el plan por tickets (T01–T63) con el que se construyó la app. Está
archivado: sirve para entender por qué se decidió algo, no como referencia del estado actual.
