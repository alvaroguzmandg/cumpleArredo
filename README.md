# Confetti · Cumpleaños del equipo

Calendario responsive con cumpleaños de hoy, próximos, búsqueda y filtro por mes. Sin Google Cloud, OAuth ni servicios pagos nuevos. Usa archivos estáticos, actualizaciones desde el chat y saludos editables.

## Datos y actualizaciones

La página muestra exclusivamente la lista publicada en `dist/birthdays.json`: identificador neutro, nombre completo, día y mes. No incluye correos ni año de nacimiento. La carga inicial de 9 cumpleaños corresponde a la hoja facilitada, al 25/11/2026. Es una actualización manual, no una sincronización con Google.

Las altas, correcciones y actualizaciones se solicitan en el chat. La página no ofrece formularios de carga, edición, importación ni exportación de cumpleaños. No utiliza registros locales creados con versiones anteriores; muestra la misma lista publicada para todo el equipo. Solo hay dos vistas: Cumpleaños y Calendario. La página no incluye recordatorios ni notificaciones.

Para actualizar desde el chat se puede pedir leer nuevamente la hoja conectada de Google o entregar los nombres y cumpleaños. Antes de publicar, transformar cada registro a `id`, `name`, `day`, `month`; excluir emails, marca temporal y año de nacimiento. Verificar fechas y duplicados, ejecutar `npm test`, publicar el alojamiento y guardar el código en el repositorio privado. Las credenciales y respuestas originales nunca deben guardarse en Git.

Los saludos permiten copiar texto, abrir Teams para buscar a la persona o abrir un correo sin destinatario para completarlo manualmente.

## Publicación

Repositorio privado: https://github.com/alvaroguzmandg/cumpleArredo

Web: https://cumples-equipo-ag-2026.alvaroguzmandg.chatgpt.site

El plan actual de GitHub no permite Pages desde repositorios privados. Por eso el código se conserva en GitHub privado y el sitio se publica por Sites. La antigua URL de GitHub Pages deja de estar disponible. Los nombres y cumpleaños de la web son visibles a quienes puedan abrir la página; la privacidad del repositorio no oculta el contenido publicado.

## Desarrollo y verificación

`npm run dev`: servidor en http://localhost:4173. `npm test`: fechas, cambio de año, CSV, ICS, combinación de datos locales y exclusión de campos privados. Node 18+ y Python 3 para el servidor local. Sin instalación de dependencias ni compilación.

Los saludos se eligen al azar entre cinco mensajes y se personalizan con el nombre. Al abrir de nuevo un saludo o pulsar “Otro saludo”, se elige una variante distinta de la anterior para esa persona durante la sesión. El texto se puede editar antes de copiarlo o abrir el correo. Los botones abren borradores: vos revisás y enviás.
