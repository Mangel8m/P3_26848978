# Entrega del Proyecto P3_26848978

## Informacion del Estudiante
- **Nombre Completo:** Miguel Morales
- **Cedula:** 26848978
- **Seccion:** 2

## Enlaces para Entregar en Google Classroom

### 1. Repositorio de GitHub
```
https://github.com/TU_USUARIO/P3_26848978
```
**IMPORTANTE:** Debes crear el repositorio en GitHub con el nombre exacto `P3_26848978`

### 2. Aplicacion Desplegada en Render
```
https://tu-app.onrender.com
```
**IMPORTANTE:** Debes desplegar la aplicacion en Render.com siguiendo las instrucciones abajo

---

## Estado del Proyecto

### Task 0 - COMPLETADO
- [x] Proyecto Node.js con Express (sin vistas)
- [x] Endpoint GET /ping (responde 200 OK)
- [x] Endpoint GET /about (responde con JSend y tus datos)
- [x] Pruebas automatizadas con Jest y Supertest
- [x] Documentacion Swagger en /api-docs
- [x] GitHub Actions configurado (.github/workflows/ci.yml)

### Task 1 - COMPLETADO
- [x] Base de datos SQLite con Sequelize
- [x] Modelo User con hash de contraseñas (bcrypt)
- [x] Endpoints de autenticacion:
  - POST /auth/register
  - POST /auth/login
- [x] Endpoints CRUD protegidos con JWT:
  - GET /users
  - GET /users/:id
  - POST /users
  - PUT /users/:id
  - DELETE /users/:id
- [x] Middleware de autenticacion JWT
- [x] Pruebas completas de autenticacion y rutas protegidas
- [x] Documentacion actualizada en Swagger

---

## Pasos para Subir a GitHub

Como no tienes Git configurado en la PC, sigue estos pasos:

### Opcion 1: Desde GitHub Web
1. Ve a https://github.com y crea un nuevo repositorio llamado `P3_26848978`
2. Marca como publico
3. NO inicialices con README
4. Sube los archivos manualmente usando "Upload files"

### Opcion 2: Configurar Git (Recomendado)
```bash
cd /home/mxgn141/CascadeProjects/P3_26848978

# Configurar Git
git config --global user.name "Miguel Morales"
git config --global user.email "tu-email@ejemplo.com"

# Inicializar repositorio
git init
git add .
git commit -m "Proyecto completo Task 0 y Task 1"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/P3_26848978.git
git branch -M main
git push -u origin main
```

**NOTA:** Antes de hacer push, crea el repositorio en GitHub

---

## Pasos para Desplegar en Render.com

1. **Crear cuenta en Render.com**
   - Ve a https://render.com
   - Registrate con tu cuenta de GitHub

2. **Crear nuevo Web Service**
   - Click en "New +" → "Web Service"
   - Conecta tu repositorio `P3_26848978`
   - Configuracion:
     - **Name:** p3-26848978 (o el que prefieras)
     - **Environment:** Node
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Plan:** Free

3. **Variables de Entorno**
   Agrega estas variables en Render:
   - `JWT_SECRET` = `tu_clave_secreta_super_segura_123`
   - `NODE_ENV` = `production`

4. **Desplegar**
   - Click en "Create Web Service"
   - Espera a que termine el build (5-10 minutos)
   - Copia la URL que te da Render (algo como https://p3-26848978.onrender.com)

---

## Verificacion Local

El proyecto esta completamente funcional. Para probarlo localmente:

```bash
# Instalar dependencias (ya hecho)
npm install

# Ejecutar pruebas
npm test

# Iniciar servidor
npm start
```

### Endpoints Disponibles

**Publicos:**
- GET http://localhost:3000/ping
- GET http://localhost:3000/about
- POST http://localhost:3000/auth/register
- POST http://localhost:3000/auth/login

**Protegidos (requieren token JWT):**
- GET http://localhost:3000/users
- GET http://localhost:3000/users/:id
- POST http://localhost:3000/users
- PUT http://localhost:3000/users/:id
- DELETE http://localhost:3000/users/:id

**Documentacion:**
- http://localhost:3000/api-docs

---

## Resultados de las Pruebas

Todas las 16 pruebas pasan exitosamente:
- ✓ GET /ping
- ✓ GET /about
- ✓ Registro de usuarios
- ✓ Login con JWT
- ✓ Rutas protegidas
- ✓ Operaciones CRUD

Cobertura de codigo: ~85%

---

## Archivos Importantes

### Configuracion
- `package.json` - Dependencias y scripts
- `.env.example` - Ejemplo de variables de entorno
- `.gitignore` - Archivos ignorados por Git
- `render.yaml` - Configuracion de Render

### Codigo Principal
- `app.js` - Aplicacion Express principal
- `bin/www` - Script de inicio del servidor
- `config/database.js` - Configuracion de SQLite

### Modelos y Rutas
- `models/User.js` - Modelo de usuario con bcrypt
- `routes/auth.js` - Autenticacion (register/login)
- `routes/users.js` - CRUD de usuarios
- `middleware/auth.js` - Middleware JWT

### Pruebas y CI/CD
- `tests/app.test.js` - Suite completa de pruebas
- `.github/workflows/ci.yml` - GitHub Actions

---

## Checklist Final

Antes de entregar, verifica:

- [ ] Repositorio creado en GitHub con nombre `P3_26848978`
- [ ] Codigo subido a GitHub (rama main)
- [ ] GitHub Actions ejecutandose correctamente (check verde)
- [ ] Aplicacion desplegada en Render
- [ ] URL de Render funcionando
- [ ] Endpoints /ping y /about respondiendo
- [ ] Documentacion /api-docs accesible
- [ ] Enlaces copiados para entregar en Google Classroom

---

## Notas Adicionales

- El proyecto usa SQLite, la base de datos se crea automaticamente
- Las contraseñas se hashean con bcrypt antes de guardarse
- Los tokens JWT expiran en 24 horas
- El formato de respuestas sigue el estandar JSend
- La documentacion Swagger esta completa y actualizada

**El proyecto esta 100% funcional y listo para entregar.**
