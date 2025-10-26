# Inicio Rapido - P3_26848978

Lee esto primero para empezar rapidamente.

## ¿Que se ha creado?

Una API RESTful completa con:
- ✅ Autenticacion JWT
- ✅ Base de datos SQLite
- ✅ CRUD de usuarios
- ✅ 24 tests automatizados pasando
- ✅ Documentacion Swagger
- ✅ GitHub Actions CI/CD
- ✅ Listo para desplegar en Render

## Probar Localmente (3 comandos)

```bash
cd /home/mxgn141/CascadeProjects/P3_26848978

# 1. Instalar (ya hecho, pero por si acaso)
npm install

# 2. Probar que todo funciona
npm test

# 3. Iniciar servidor
npm start
```

Abre http://localhost:3000/api-docs para ver la documentacion interactiva.

## Endpoints para Probar

Una vez el servidor este corriendo:

### 1. Verificar que funciona
http://localhost:3000/ping

### 2. Ver tu informacion
http://localhost:3000/about

### 3. Ver documentacion completa
http://localhost:3000/api-docs

## Proximo Paso: Subir a GitHub

Como NO tienes Git configurado todavia, aqui esta lo que necesitas:

### Opcion A: Configurar Git Ahora

```bash
# Configurar tu identidad en Git
git config --global user.name "Miguel Morales"
git config --global user.email "tu-email@ejemplo.com"

# Inicializar repositorio
cd /home/mxgn141/CascadeProjects/P3_26848978
git init
git add .
git commit -m "Initial commit: Task 0 y Task 1 completos"
```

Luego necesitas:
1. Crear repositorio en GitHub llamado `P3_26848978`
2. Conectarlo y hacer push (ver `SETUP_GIT.md` para detalles completos)

### Opcion B: Usar GitHub Desktop o IDE

Si prefieres una interfaz grafica, puedes:
1. Descargar GitHub Desktop
2. Abrir la carpeta del proyecto
3. Crear el repositorio desde ahi

## Archivos Importantes

| Archivo | Para que sirve |
|---------|----------------|
| `PROYECTO_COMPLETO.md` | Resumen completo de todo |
| `SETUP_GIT.md` | Como subir a GitHub paso a paso |
| `DEPLOYMENT.md` | Como desplegar en Render |
| `API_TESTING.md` | Como probar los endpoints |
| `README.md` | Documentacion principal |

## Estructura de Carpetas

```
P3_26848978/
├── app.js              ← App principal de Express
├── bin/www             ← Inicia el servidor
├── routes/             ← Todos los endpoints
│   ├── auth.js         ← Login y registro
│   ├── users.js        ← CRUD protegido
│   └── index.js        ← Ruta raiz
├── models/User.js      ← Modelo con bcrypt
├── middleware/auth.js  ← Valida JWT tokens
├── config/database.js  ← Config de SQLite
├── tests/app.test.js   ← 24 tests
└── .github/workflows/  ← CI/CD automatico
```

## Que Hace Cada Endpoint

### Sin Autenticacion Necesaria

- **GET /ping** - Solo verifica que la API funciona
- **GET /about** - Muestra tus datos (Miguel Morales, 26848978, Seccion 2)
- **POST /auth/register** - Crear cuenta nueva
- **POST /auth/login** - Obtener token JWT

### Requiere Token JWT

- **GET /users** - Lista todos los usuarios
- **GET /users/:id** - Ver un usuario especifico
- **POST /users** - Crear usuario
- **PUT /users/:id** - Actualizar usuario
- **DELETE /users/:id** - Eliminar usuario

## Como Funciona la Autenticacion

1. Registras un usuario con `/auth/register`
2. Haces login con `/auth/login` → recibes un token
3. Usas ese token en el header para acceder a rutas protegidas:
   ```
   Authorization: Bearer tu_token_aqui
   ```

## Ver las Pruebas

```bash
npm test
```

Resultado esperado:
```
Test Suites: 3 passed, 3 total
Tests:       24 passed, 24 total
```

## Tecnologias Usadas

- **Node.js** - Plataforma
- **Express** - Framework web
- **SQLite + Sequelize** - Base de datos
- **JWT** - Autenticacion
- **bcrypt** - Hash de contraseñas
- **Jest + Supertest** - Pruebas
- **Swagger** - Documentacion

## Seguridad

- ✅ Contraseñas hasheadas (nunca en texto plano)
- ✅ Contraseñas NUNCA se retornan en respuestas
- ✅ JWT tokens con expiracion (24h)
- ✅ Rutas protegidas con middleware
- ✅ Validacion de email unico
- ✅ Variables sensibles en .env (no en Git)

## Flujo de Trabajo Completo

```
1. Desarrollo Local
   ├── Codigo funcional ✓
   ├── Tests pasando ✓
   └── Documentacion ✓

2. Subir a GitHub
   ├── Crear repo P3_26848978
   ├── Push del codigo
   └── Crear rama 'setup' (backup)

3. GitHub Actions
   ├── Se ejecuta automaticamente
   ├── Corre npm install
   └── Corre npm test

4. Desplegar en Render
   ├── Conectar repo GitHub
   ├── Configurar variables de entorno
   └── Deploy automatico

5. Entregar
   ├── Link de GitHub
   └── Link de Render
```

## Comandos Mas Usados

```bash
# Desarrollo
npm start          # Iniciar servidor
npm test           # Ejecutar tests
npm run dev        # Modo desarrollo (auto-reload)

# Git (despues de configurar)
git status         # Ver cambios
git add .          # Agregar archivos
git commit -m "mensaje"  # Guardar cambios
git push           # Subir a GitHub
```

## ¿Algo No Funciona?

### El servidor no inicia
- Puerto 3000 ocupado? Cambia `PORT=3001` en `.env`
- Falta instalar? `npm install`

### Los tests fallan
- Elimina `database.sqlite` y vuelve a correr `npm test`

### No puedo hacer push a GitHub
- Necesitas configurar autenticacion (token o SSH)
- Lee `SETUP_GIT.md` seccion de autenticacion

## Que Entregar

En Google Classroom necesitas DOS enlaces:

1. **GitHub:** `https://github.com/TU-USUARIO/P3_26848978`
   - Debe ser publico
   - Debe tener el codigo completo
   - Debe tener rama 'setup' como backup

2. **Render:** `https://tu-app.onrender.com`
   - Debe estar funcionando
   - Endpoints deben responder correctamente

## Siguiente Accion

**Si aun no tienes Git configurado:**
→ Lee `SETUP_GIT.md` primero

**Si ya tienes Git:**
→ Sube el proyecto y lee `DEPLOYMENT.md`

**Para entender todo en detalle:**
→ Lee `PROYECTO_COMPLETO.md`

---

¡Todo esta listo! Solo falta subir a GitHub y desplegar en Render.
