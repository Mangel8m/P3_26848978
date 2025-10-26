# API RESTful - P3_26848978

Proyecto de API RESTful con autenticacion JWT y gestion de usuarios desarrollado con Node.js y Express.

**Desarrollador:** Miguel Morales  
**Cedula:** 26848978  
**Seccion:** 2

## Caracteristicas

- API RESTful siguiendo el estandar JSend
- Autenticacion con JWT (JSON Web Tokens)
- Base de datos SQLite con ORM Sequelize
- Operaciones CRUD completas para usuarios
- Hash de contraseñas con bcrypt
- Pruebas automatizadas con Jest y Supertest
- Documentacion de API con Swagger
- Integracion continua con GitHub Actions
- Despliegue automatico en Render.com

## Requisitos Previos

- Node.js (version 18.x o superior)
- npm

## Instalacion

1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/P3_26848978.git
cd P3_26848978
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear archivo `.env` con:
```
PORT=3000
JWT_SECRET=tu_clave_secreta_aqui
NODE_ENV=development
```

4. Iniciar el servidor:
```bash
npm start
```

Para desarrollo con auto-reload:
```bash
npm run dev
```

## Endpoints

### Publicos

- `GET /ping` - Verifica que la API esta funcionando
- `GET /about` - Informacion del desarrollador
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesion y obtener token JWT

### Protegidos (requieren token JWT)

- `GET /users` - Listar todos los usuarios
- `GET /users/:id` - Obtener usuario por ID
- `POST /users` - Crear nuevo usuario
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

## Autenticacion

Los endpoints protegidos requieren un token JWT en el header:
```
Authorization: Bearer <token>
```

## Documentacion de API

La documentacion completa esta disponible en:
```
http://localhost:3000/api-docs
```

## Pruebas

Ejecutar todas las pruebas:
```bash
npm test
```

Las pruebas cubren:
- Endpoints basicos (/ping, /about)
- Sistema de autenticacion (registro y login)
- Operaciones CRUD protegidas
- Manejo de errores

## Estructura del Proyecto

```
P3_26848978/
├── bin/
│   └── www              # Script de inicio del servidor
├── config/
│   └── database.js      # Configuracion de la base de datos
├── middleware/
│   └── auth.js          # Middleware de autenticacion JWT
├── models/
│   └── User.js          # Modelo de usuario
├── routes/
│   ├── index.js         # Rutas principales
│   ├── auth.js          # Rutas de autenticacion
│   └── users.js         # Rutas CRUD de usuarios
├── tests/
│   └── app.test.js      # Pruebas automatizadas
├── .github/
│   └── workflows/
│       └── ci.yml       # Configuracion de GitHub Actions
├── app.js               # Aplicacion Express principal
├── package.json         # Dependencias y scripts
└── README.md
```

## Tecnologias Utilizadas

- **Node.js** - Entorno de ejecucion
- **Express** - Framework web
- **Sequelize** - ORM para base de datos
- **SQLite** - Base de datos
- **JWT** - Autenticacion basada en tokens
- **bcrypt** - Hash de contraseñas
- **Jest** - Framework de pruebas
- **Supertest** - Pruebas de API HTTP
- **Swagger** - Documentacion de API
- **GitHub Actions** - CI/CD

## Formato de Respuestas JSend

Todas las respuestas siguen el estandar JSend:

**Exito:**
```json
{
  "status": "success",
  "data": { ... }
}
```

**Error del cliente:**
```json
{
  "status": "fail",
  "data": { "message": "..." }
}
```

**Error del servidor:**
```json
{
  "status": "error",
  "message": "..."
}
```

## Despliegue en Render

1. Crear nuevo Web Service en Render.com
2. Conectar repositorio de GitHub
3. Configurar:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Agregar variables de entorno en Render:
   - `JWT_SECRET`
   - `NODE_ENV=production`

## Seguridad

- Las contraseñas se almacenan hasheadas con bcrypt
- Los tokens JWT expiran en 24 horas
- Las credenciales nunca se exponen en las respuestas
- Variables sensibles se gestionan con variables de entorno

## CI/CD

El workflow de GitHub Actions se ejecuta automaticamente en cada push y pull request a la rama main:

1. Configura el entorno Node.js
2. Instala dependencias
3. Ejecuta la suite de pruebas
4. Genera reporte de cobertura

El despliegue a Render ocurre automaticamente cuando las pruebas pasan.
