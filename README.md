# Confetti · Cumpleaños del equipo

Calendario responsive con cumpleaños de hoy, próximos, búsqueda y filtro por mes. Sin Google Cloud, OAuth ni servicios pagos nuevos. Usa archivos estáticos, carga manual, importación CSV/JSON y recordatorios ICS.

## Datos compartidos y datos locales

`dist/birthdays.json` contiene la lista publicada del equipo: identificador neutro, nombre completo, día y mes. No incluye correos ni año de nacimiento. La carga inicial de 9 cumpleaños corresponde a la hoja facilitada, al 25/11/2026. Es una actualización manual, no una sincronización con Google.

El formulario “Agregar cumpleaños” pide nombre, apellido, correo opcional, día y mes. Los cambios y correos se guardan únicamente en localStorage del navegador, nunca se envían a GitHub ni al alojamiento. Las ediciones locales se combinan con la lista publicada y nuevas altas del equipo. El icono de lápiz permite editar una persona o agregar su correo local para saludarla.

Desde el botón de datos se pueden importar CSV/JSON y **Exportar para publicar**. La exportación incluye todos los nombres y cumpleaños visibles y excluye correos, años de nacimiento y cualquier campo adicional. Compartir ese JSON en el chat permite revisar y publicar una nueva lista para todo el equipo. Sin ese paso, las altas realizadas en el navegador no las ven otras personas ni otros dispositivos. No hay una base de datos compartida que escriba directamente desde la web.

No se publican los correos aunque el repositorio sea privado. Si una persona no tiene correo local, el saludo permite copiar texto, abrir Teams para buscarla o abrir un correo sin destinatario.

## Actualizar desde el chat

Se puede pedir leer nuevamente la hoja conectada de Google o entregar el JSON exportado desde la web. Antes de publicar, transformar cada registro a `id`, `name`, `day`, `month`; excluir emails, marca temporal y año de nacimiento. Verificar fechas y duplicados, ejecutar `npm test`, publicar el alojamiento y guardar el código en el repositorio privado. Las credenciales y respuestas originales nunca deben guardarse en Git.

## Publicación

Repositorio privado: https://github.com/alvaroguzmandg/cumpleArredo

Web: https://cumples-equipo-ag-2026.alvaroguzmandg.chatgpt.site

El plan actual de GitHub no permite Pages desde repositorios privados. Por eso el código se conserva en GitHub privado y el sitio se publica por Sites. La antigua URL de GitHub Pages deja de estar disponible. Los nombres y cumpleaños de la web son visibles a quienes puedan abrir la página; la privacidad del repositorio no oculta el contenido publicado.

## Desarrollo y verificación

`npm run dev`: servidor en http://localhost:4173. `npm test`: fechas, cambio de año, CSV, ICS, combinación de datos locales y exclusión de campos privados. Node 18+ y Python 3 para el servidor local. Sin instalación de dependencias ni compilación.

Los recordatorios web requieren la página abierta y permisos de notificación. Para avisos con la página cerrada, descargar y guardar el evento ICS en un calendario; verificar los avisos allí. Quitar un recordatorio en la web no elimina el evento importado. El 29 de febrero se celebra el 28 en años no bisiestos. Los botones de saludo abren borradores: vos revisás y enviás.
