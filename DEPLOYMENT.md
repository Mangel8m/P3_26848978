# Guia de Despliegue en Render.com

## Requisitos Previos

- Cuenta en GitHub
- Cuenta en Render.com (puedes usar tu cuenta de GitHub para registrarte)
- Repositorio P3_26848978 subido a GitHub

## Pasos para Desplegar

### 1. Preparar el Repositorio

Asegurate de que tu repositorio en GitHub tiene todos los archivos necesarios:
- `package.json` con los scripts de start y test
- `.github/workflows/ci.yml` para CI/CD
- Archivo `.gitignore` configurado
- Todos los archivos del proyecto

### 2. Crear Web Service en Render

1. Ve a https://render.com y inicia sesion
2. Click en "New +" y selecciona "Web Service"
3. Conecta tu cuenta de GitHub si aun no lo has hecho
4. Busca y selecciona el repositorio `P3_26848978`
5. Configura el servicio:

   **Configuracion Basica:**
   - Name: `p3-26848978` (o el nombre que prefieras)
   - Region: Oregon (o la mas cercana)
   - Branch: `main`
   - Runtime: `Node`

   **Build & Deploy:**
   - Build Command: `npm install`
   - Start Command: `npm start`

   **Plan:**
   - Selecciona el plan gratuito (Free)

### 3. Configurar Variables de Entorno

En la seccion "Environment Variables" agrega:

- `NODE_ENV` = `production`
- `JWT_SECRET` = (genera una clave secreta segura, por ejemplo: `mi_clave_super_secreta_produccion_26848978`)

**IMPORTANTE:** No uses la misma clave que tienes en desarrollo.

### 4. Desplegar

1. Click en "Create Web Service"
2. Render automaticamente:
   - Clonara tu repositorio
   - Instalara las dependencias
   - Iniciara la aplicacion

3. Espera a que el despliegue termine (puede tomar unos minutos)

### 5. Verificar el Despliegue

Una vez desplegado, obtendras una URL como:
`https://p3-26848978.onrender.com`

Prueba los siguientes endpoints:

- GET https://tu-app.onrender.com/ping
- GET https://tu-app.onrender.com/about
- GET https://tu-app.onrender.com/api-docs

### 6. Configurar Despliegue Automatico

Render ya esta configurado para redesplegar automaticamente cuando:
- Haces push a la rama `main`
- Las pruebas de GitHub Actions pasan exitosamente

## Integracion con GitHub Actions

El workflow de CI/CD ya esta configurado en `.github/workflows/ci.yml`

Cada vez que hagas push:
1. GitHub Actions ejecutara las pruebas
2. Si las pruebas pasan, el codigo se desplegara automaticamente en Render

## Endpoints Disponibles

Una vez desplegado, tu API tendra:

**Publicos:**
- GET /ping
- GET /about
- GET /api-docs
- POST /auth/register
- POST /auth/login

**Protegidos (requieren JWT):**
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

## Solucionar Problemas Comunes

### El servicio no inicia

Revisa los logs en el dashboard de Render para ver el error especifico.

### Error de base de datos

Render usa un sistema de archivos efimero. La base de datos SQLite se creara automaticamente al iniciar.
**Nota:** Los datos se perderan con cada redespliegue. Para produccion real, considera usar PostgreSQL.

### Variables de entorno no funcionan

Asegurate de haber agregado `JWT_SECRET` en la configuracion de variables de entorno en Render.

### Las pruebas fallan en GitHub Actions

Revisa la salida de GitHub Actions para ver que prueba fallo y por que.

## Monitoreo

En el dashboard de Render puedes:
- Ver logs en tiempo real
- Monitorear el uso de recursos
- Ver el estado de los despliegues
- Configurar alertas

## Base de Datos en Produccion

Para un entorno de produccion real, se recomienda:

1. Cambiar de SQLite a PostgreSQL
2. Usar un servicio de base de datos gestionado (Render ofrece PostgreSQL)
3. Configurar backups automaticos

## Seguridad

- Nunca subas el archivo `.env` a GitHub
- Usa variables de entorno para datos sensibles
- Genera una clave JWT fuerte para produccion
- Considera implementar rate limiting para la API

## Proximos Pasos

1. Probar todos los endpoints en produccion
2. Documentar la URL de produccion
3. Compartir los enlaces en Google Classroom:
   - Repositorio: https://github.com/tu-usuario/P3_26848978
   - Aplicacion: https://tu-app.onrender.com
