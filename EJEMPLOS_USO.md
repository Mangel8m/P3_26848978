# Ejemplos de Uso de la API

## Endpoints Publicos

### 1. Verificar que la API funciona

**Request:**
```bash
curl http://localhost:3000/ping
```

**Response:**
```
Status: 200 OK
(sin contenido)
```

---

### 2. Obtener informacion del desarrollador

**Request:**
```bash
curl http://localhost:3000/about
```

**Response:**
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

---

### 3. Registrar un nuevo usuario

**Request:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Juan Perez",
    "email": "juan@ejemplo.com",
    "password": "mipassword123"
  }'
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Juan Perez",
      "email": "juan@ejemplo.com"
    }
  }
}
```

**Nota:** La contraseña NO se devuelve en la respuesta por seguridad.

---

### 4. Iniciar sesion

**Request:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@ejemplo.com",
    "password": "mipassword123"
  }'
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "nombreCompleto": "Juan Perez",
      "email": "juan@ejemplo.com"
    }
  }
}
```

**IMPORTANTE:** Guarda el token, lo necesitas para los endpoints protegidos.

---

## Endpoints Protegidos

Todos estos endpoints requieren el token JWT en el header Authorization.

### 5. Listar todos los usuarios

**Request:**
```bash
curl http://localhost:3000/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "nombreCompleto": "Juan Perez",
        "email": "juan@ejemplo.com",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

---

### 6. Obtener un usuario especifico

**Request:**
```bash
curl http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Juan Perez",
      "email": "juan@ejemplo.com",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

---

### 7. Crear un nuevo usuario

**Request:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Maria Garcia",
    "email": "maria@ejemplo.com",
    "password": "password456"
  }'
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 2,
      "nombreCompleto": "Maria Garcia",
      "email": "maria@ejemplo.com",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

---

### 8. Actualizar un usuario

**Request:**
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Juan Carlos Perez"
  }'
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "nombreCompleto": "Juan Carlos Perez",
      "email": "juan@ejemplo.com",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:10:00.000Z"
    }
  }
}
```

---

### 9. Eliminar un usuario

**Request:**
```bash
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "message": "Usuario eliminado correctamente"
  }
}
```

---

## Ejemplos de Errores

### Error: Sin token de autenticacion

**Request:**
```bash
curl http://localhost:3000/users
```

**Response:**
```json
{
  "status": "fail",
  "data": {
    "message": "Token no proporcionado"
  }
}
```
**Status Code:** 401

---

### Error: Token invalido

**Request:**
```bash
curl http://localhost:3000/users \
  -H "Authorization: Bearer token_invalido"
```

**Response:**
```json
{
  "status": "fail",
  "data": {
    "message": "Token invalido o expirado"
  }
}
```
**Status Code:** 401

---

### Error: Email duplicado

**Request:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Pedro Lopez",
    "email": "juan@ejemplo.com",
    "password": "password789"
  }'
```

**Response:**
```json
{
  "status": "fail",
  "data": {
    "message": "El email ya esta registrado"
  }
}
```
**Status Code:** 400

---

### Error: Credenciales incorrectas

**Request:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@ejemplo.com",
    "password": "password_incorrecto"
  }'
```

**Response:**
```json
{
  "status": "fail",
  "data": {
    "message": "Credenciales invalidas"
  }
}
```
**Status Code:** 401

---

### Error: Usuario no encontrado

**Request:**
```bash
curl http://localhost:3000/users/999 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

**Response:**
```json
{
  "status": "fail",
  "data": {
    "message": "Usuario no encontrado"
  }
}
```
**Status Code:** 404

---

## Usando Postman

1. **Importar coleccion:**
   - Abre Postman
   - File → Import
   - Crea requests para cada endpoint

2. **Configurar autenticacion:**
   - Haz login primero
   - Copia el token de la respuesta
   - En otros requests, ve a Authorization
   - Tipo: Bearer Token
   - Pega el token

3. **Variables de entorno:**
   - Crea una variable `base_url` = `http://localhost:3000`
   - Crea una variable `token` para guardar el JWT
   - Usa `{{base_url}}/users` en las URLs

---

## Usando la Documentacion Swagger

1. Abre en el navegador:
```
http://localhost:3000/api-docs
```

2. Para probar endpoints protegidos:
   - Click en "Authorize" (arriba a la derecha)
   - Ingresa: `Bearer TU_TOKEN_AQUI`
   - Click en "Authorize"
   - Ahora puedes probar todos los endpoints

3. Para cada endpoint:
   - Click en el endpoint
   - Click en "Try it out"
   - Llena los parametros
   - Click en "Execute"
   - Ve la respuesta abajo

---

## Flujo Completo de Ejemplo

```bash
# 1. Verificar que la API funciona
curl http://localhost:3000/ping

# 2. Registrar usuario
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Test User",
    "email": "test@test.com",
    "password": "test123"
  }'

# 3. Hacer login y guardar token
TOKEN=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@test.com",
    "password": "test123"
  }' | jq -r '.data.token')

# 4. Listar usuarios con el token
curl http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN"

# 5. Crear otro usuario
curl -X POST http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Nuevo Usuario",
    "email": "nuevo@test.com",
    "password": "nuevo123"
  }'

# 6. Ver todos los usuarios
curl http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN"
```

---

## Notas de Seguridad

1. **Contraseñas:**
   - Se hashean con bcrypt antes de guardarse
   - Nunca se devuelven en las respuestas
   - Usa contraseñas fuertes en produccion

2. **Tokens JWT:**
   - Expiran en 24 horas
   - Guarda el token de forma segura
   - No lo compartas ni lo subas a GitHub

3. **HTTPS:**
   - En produccion (Render), usa HTTPS
   - Los tokens se envian cifrados
   - Render proporciona HTTPS automaticamente

4. **Variables de Entorno:**
   - JWT_SECRET debe ser secreto
   - Nunca subas .env a GitHub
   - Usa valores diferentes en desarrollo y produccion
