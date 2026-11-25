# Confetti · Cumpleaños del equipo

Sitio estático responsive, sin dependencias de compilación. Vista de hoy, próximos cumpleaños, búsqueda, filtro por mes, calendario, borradores de correo y Microsoft Teams, importación local de CSV y eventos anuales ICS con recordatorios.

## Desarrollo

`npm run dev` inicia http://localhost:4173. `npm test` comprueba fechas, CSV y eventos. Requiere Node 18+ y Python 3 para el servidor local.

## Datos y acceso

La demo contiene identidades ficticias con correos example.com. Los CSV se guardan exclusivamente en localStorage del navegador donde se importan y no se suben al repositorio ni al hosting. No sincronizan entre dispositivos. Cada importación reemplaza la lista local y los recordatorios. No incluir respuestas reales ni credenciales en Git.

La hoja facilitada en el chat requiere autenticación y aún no está conectada. Para sincronización multiusuario se necesita un backend autenticado que consulte Google Sheets con permisos de lectura limitados a esa hoja. Conectar Google Drive en el chat permite inspeccionar la hoja; no otorga por sí solo acceso al sitio publicado. No publicar una hoja con correos personales ni almacenar credenciales en JavaScript del cliente.

Las notificaciones del navegador requieren permiso y la página abierta; el recordatorio debe estar seleccionado para esa persona. Los archivos ICS deben importarse y guardarse en un calendario; verificar allí los avisos (la hora y soporte dependen del calendario). Eliminar un recordatorio de la web no elimina el evento importado. El 29 de febrero se celebra el 28 en años no bisiestos. Los saludos abren borradores: no envían mensajes automáticamente.

## Publicación con GitHub Pages

GitHub Pages publica la rama `gh-pages` desde la raíz. El código está en `main` y el contenido web publicado corresponde al árbol `dist/`. URL: `https://alvaroguzmandg.github.io/cumpleArredo/`. La página estática es pública; los datos de la hoja requieren ingreso con Google y permiso sobre la hoja.

## Conexión privada de Google desde la página

La conexión está implementada con Google Identity Services y Sheets API. La autorización del chat no se reutiliza en la página. Para activarla:

1. Crear o seleccionar un proyecto de Google Cloud y habilitar Google Sheets API.
2. Configurar Google Auth Platform (audiencia interna si corresponde al Workspace del equipo; en testing agregar usuarios de prueba).
3. Crear un cliente OAuth tipo **Aplicación web** con estos orígenes JavaScript autorizados:
   - `https://alvaroguzmandg.github.io`
   - `https://cumples-equipo-ag-2026.alvaroguzmandg.chatgpt.site`
   - `http://localhost:4173` para desarrollo.
4. Copiar el **Client ID** (termina en `.apps.googleusercontent.com`) en `GOOGLE_CLIENT_ID` de `dist/google.js`, o ingresarlo desde el botón de datos → Conectar Google Sheets. No ingresar un client secret; no se usa.
5. Cada visitante ingresa con una cuenta que tenga acceso de lectura a la hoja privada. El alcance de Google `spreadsheets.readonly` solicita lectura de las hojas accesibles al usuario; el código consulta únicamente la hoja configurada. El administrador puede requerir aprobación del cliente OAuth.

La página lee hasta 4999 respuestas desde A:D de “Respuestas de formulario 1”, usa las columnas existentes y descarta el año de nacimiento. “Actualizar datos” consulta nuevas respuestas. Los tokens y respuestas de Google permanecen en memoria y no se guardan en localStorage. Al vencer la sesión hay que volver a ingresar. Solo el client ID público se recuerda localmente. Los registros CSV importados sí se guardan localmente. La integración aún requiere el client ID y no pudo verificarse con login en producción.

Documentación: https://developers.google.com/identity/oauth2/web/guides/use-token-model y https://developers.google.com/workspace/sheets/api/scopes
