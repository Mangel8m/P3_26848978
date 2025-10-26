# Guia de Pruebas de API

Ejemplos de como probar cada endpoint de la API usando curl o herramientas similares.

## URL Base

- Local: `http://localhost:3000`
- Produccion: `https://tu-app.onrender.com`

## Endpoints Publicos

### 1. Verificar Estado - GET /ping

```bash
curl -X GET http://localhost:3000/ping
```

Respuesta esperada: Status 200 OK (sin contenido)

### 2. Informacion del Desarrollador - GET /about

```bash
curl -X GET http://localhost:3000/about
```

Respuesta esperada:
```json
{
  "status": "success",
  "data": {
    "nombreCompleto": "Miguel Morales",
    "cedula": "26848978",
    "seccion": "2"
  }
}
```

### 3. Registrar Usuario - POST /auth/register

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

Respuesta esperada (201):
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Test User",
      "email": "test@example.com"
    }
  }
}
```

### 4. Iniciar Sesion - POST /auth/login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Respuesta esperada (200):
```json
{
  "status": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "nombreCompleto": "Test User",
      "email": "test@example.com"
    }
  }
}
```

**Importante:** Guarda el token para usarlo en los siguientes endpoints.

## Endpoints Protegidos

Para los siguientes endpoints necesitas incluir el token JWT en el header Authorization.

### 5. Listar Usuarios - GET /users

```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

Respuesta esperada (200):
```json
{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "nombreCompleto": "Test User",
        "email": "test@example.com"
      }
    ]
  }
}
```

### 6. Obtener Usuario por ID - GET /users/:id

```bash
curl -X GET http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

Respuesta esperada (200):
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Test User",
      "email": "test@example.com"
    }
  }
}
```

### 7. Crear Usuario - POST /users

```bash
curl -X POST http://localhost:3000/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Nuevo Usuario",
    "email": "nuevo@example.com",
    "password": "password456"
  }'
```

Respuesta esperada (201):
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 2,
      "nombreCompleto": "Nuevo Usuario",
      "email": "nuevo@example.com"
    }
  }
}
```

### 8. Actualizar Usuario - PUT /users/:id

```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Usuario Actualizado"
  }'
```

Respuesta esperada (200):
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Usuario Actualizado",
      "email": "test@example.com"
    }
  }
}
```

### 9. Eliminar Usuario - DELETE /users/:id

```bash
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

Respuesta esperada (200):
```json
{
  "status": "success",
  "data": {
    "message": "Usuario eliminado correctamente"
  }
}
```

## Respuestas de Error

### Sin Token (401)

```json
{
  "status": "fail",
  "data": {
    "message": "Token no proporcionado"
  }
}
```

### Token Invalido (401)

```json
{
  "status": "fail",
  "data": {
    "message": "Token invalido o expirado"
  }
}
```

### Usuario No Encontrado (404)

```json
{
  "status": "fail",
  "data": {
    "message": "Usuario no encontrado"
  }
}
```

### Email Duplicado (400)

```json
{
  "status": "fail",
  "data": {
    "message": "El email ya esta registrado"
  }
}
```

### Error del Servidor (500)

```json
{
  "status": "error",
  "message": "Mensaje de error especifico"
}
```

## Probar con Postman

1. Importa la coleccion de endpoints
2. Crea una variable de entorno `baseUrl` con el valor `http://localhost:3000`
3. Crea una variable `token` que actualizaras despues del login
4. En la pestaña Authorization de cada endpoint protegido:
   - Type: Bearer Token
   - Token: `{{token}}`

## Probar con Thunder Client (VS Code)

1. Instala la extension Thunder Client
2. Crea una nueva coleccion "P3_26848978"
3. Agrega cada endpoint
4. Usa variables de entorno para la URL base y el token

## Swagger UI

La forma mas facil de probar todos los endpoints es usando Swagger UI:

1. Abre http://localhost:3000/api-docs
2. Expande cada endpoint para ver detalles
3. Click en "Try it out"
4. Para endpoints protegidos:
   - Click en el boton "Authorize"
   - Ingresa: `Bearer TU_TOKEN_AQUI`
   - Click "Authorize"
5. Completa los parametros y click "Execute"

## Flujo de Prueba Completo

```bash
# 1. Verificar que la API esta funcionando
curl http://localhost:3000/ping

# 2. Registrar un usuario
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"nombreCompleto":"Test","email":"test@test.com","password":"test123"}'

# 3. Hacer login y guardar el token
TOKEN=$(curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}' \
  | jq -r '.data.token')

# 4. Usar el token para listar usuarios
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN"
```

## Consejos

- Los tokens JWT expiran en 24 horas
- Las contraseñas nunca se retornan en las respuestas
- Todas las respuestas siguen el formato JSend
- La base de datos SQLite se crea automaticamente al iniciar
