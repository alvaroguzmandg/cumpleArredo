# Confetti · Cumpleaños del equipo

Página responsive con cumpleaños de hoy, próximos, búsqueda, calendario, borradores de mail y Teams, importación CSV local y recordatorios ICS.

Desarrollo: `npm run dev`. Pruebas: `npm test`. El sitio usa archivos estáticos en `dist/`, sin dependencias de compilación.

GitHub Pages publica la rama `gh-pages` desde su raíz. Para actualizar después de editar dist, crear un commit del árbol dist y subirlo a gh-pages.

Los datos de ejemplo son ficticios. Los CSV importados se guardan en este navegador y no sincronizan entre dispositivos. La hoja de Google requiere autenticación y aún no está conectada. Conectar Drive en el chat permite inspeccionarla, pero el sitio necesita su propia integración privada con Google. No subir respuestas reales ni secretos a este repositorio público.

Los saludos abren borradores y no envían mensajes automáticamente. Los avisos del navegador requieren la página abierta y permiso. Los eventos ICS deben abrirse y guardarse en el calendario; verificar ahí los avisos. Quitar un recordatorio de la web no elimina eventos importados.
