# Checklist de Entrega - P3_26848978

Usa esta lista para verificar que todo este listo antes de entregar.

## ✅ Verificaciones Locales

### Tests
- [ ] Ejecutar `npm test`
- [ ] Verificar que 24 tests pasan
- [ ] Cobertura > 80%

### Servidor
- [ ] Ejecutar `npm start`
- [ ] Abrir http://localhost:3000/ping → debe responder 200 OK
- [ ] Abrir http://localhost:3000/about → debe mostrar tus datos
- [ ] Abrir http://localhost:3000/api-docs → debe cargar Swagger UI

### Endpoints Basicos (Task 0)
- [ ] GET /ping responde 200 OK sin contenido
- [ ] GET /about responde con formato JSend
- [ ] Datos correctos: Miguel Morales, 26848978, Seccion 2

### Autenticacion (Task 1)
Puedes probar desde Swagger UI o con curl:

- [ ] POST /auth/register crea un usuario
- [ ] Email duplicado retorna error 400
- [ ] POST /auth/login retorna un token JWT
- [ ] Login con credenciales incorrectas retorna 401
- [ ] El token tiene estructura JWT valida

### Rutas Protegidas (Task 1)
- [ ] GET /users sin token retorna 401
- [ ] GET /users con token retorna lista de usuarios
- [ ] Las contraseñas NO aparecen en las respuestas
- [ ] POST /users con token crea usuario
- [ ] PUT /users/:id con token actualiza usuario
- [ ] DELETE /users/:id con token elimina usuario

## ✅ Verificaciones de Archivos

### Archivos Requeridos
- [ ] `package.json` con scripts start y test
- [ ] `app.js` con endpoints /ping y /about
- [ ] `routes/auth.js` con register y login
- [ ] `routes/users.js` con CRUD completo
- [ ] `models/User.js` con Sequelize
- [ ] `middleware/auth.js` para JWT
- [ ] `config/database.js` para SQLite
- [ ] `tests/app.test.js` con pruebas
- [ ] `.github/workflows/ci.yml` para CI/CD
- [ ] `bin/www` para iniciar servidor
- [ ] `.gitignore` configurado
- [ ] `.env.example` como template
- [ ] `README.md` con documentacion

### Archivos NO Deben Estar en Git
- [ ] `.env` esta en `.gitignore`
- [ ] `node_modules/` esta en `.gitignore`
- [ ] `database.sqlite` esta en `.gitignore`
- [ ] `coverage/` esta en `.gitignore`

## ✅ GitHub

### Repositorio
- [ ] Repositorio creado con nombre `P3_26848978`
- [ ] Repositorio es publico
- [ ] Codigo subido a rama `main`
- [ ] Rama `setup` creada como backup de Task 0
- [ ] `.env` NO esta en el repositorio
- [ ] README.md se ve correctamente en GitHub

### GitHub Actions
- [ ] Archivo `.github/workflows/ci.yml` existe
- [ ] Workflow aparece en la pestaña "Actions"
- [ ] El ultimo workflow paso exitosamente (check verde)
- [ ] Tests se ejecutan en cada push

### Verificar en GitHub
- [ ] Ve a tu repo en GitHub
- [ ] Check que todos los archivos esten
- [ ] Check que el badge de Actions este verde
- [ ] Check que existan las ramas `main` y `setup`

## ✅ Render.com

### Configuracion
- [ ] Web Service creado en Render
- [ ] Conectado al repositorio de GitHub
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Variables de entorno configuradas:
  - [ ] `NODE_ENV=production`
  - [ ] `JWT_SECRET` (diferente al de desarrollo)

### Despliegue
- [ ] El deploy se completo exitosamente
- [ ] La app esta "Live" (no "Deploy failed")
- [ ] Logs no muestran errores criticos

### Verificar Endpoints en Produccion
Reemplaza `tu-app.onrender.com` con tu URL:

- [ ] GET https://tu-app.onrender.com/ping → 200 OK
- [ ] GET https://tu-app.onrender.com/about → JSON correcto
- [ ] GET https://tu-app.onrender.com/api-docs → Swagger carga
- [ ] POST https://tu-app.onrender.com/auth/register → crea usuario
- [ ] POST https://tu-app.onrender.com/auth/login → retorna token
- [ ] GET https://tu-app.onrender.com/users sin token → 401
- [ ] GET https://tu-app.onrender.com/users con token → lista usuarios

## ✅ Integracion CI/CD

### Flujo Completo
- [ ] Hacer un cambio pequeno en el codigo
- [ ] Hacer commit y push a GitHub
- [ ] GitHub Actions se ejecuta automaticamente
- [ ] Tests pasan en GitHub Actions
- [ ] Render detecta el cambio y redespliega
- [ ] Nueva version funciona en produccion

## ✅ Documentacion

### Swagger
- [ ] /api-docs funciona local y en produccion
- [ ] Endpoint /ping documentado
- [ ] Endpoint /about documentado
- [ ] Endpoints /auth/* documentados
- [ ] Endpoints /users/* documentados
- [ ] Security scheme (JWT) configurado
- [ ] Se puede probar desde Swagger UI

### README
- [ ] Tiene titulo e informacion del desarrollador
- [ ] Lista de caracteristicas
- [ ] Instrucciones de instalacion
- [ ] Instrucciones de uso
- [ ] Lista de endpoints
- [ ] Informacion de autenticacion
- [ ] Como ejecutar tests
- [ ] Tecnologias utilizadas

## ✅ Calidad de Codigo

### Estructura
- [ ] Codigo organizado en carpetas logicas
- [ ] Separacion de responsabilidades (routes, models, middleware)
- [ ] Sin codigo duplicado innecesario
- [ ] Nombres de variables y funciones descriptivos

### Seguridad
- [ ] Contraseñas hasheadas con bcrypt
- [ ] JWT secret en variable de entorno
- [ ] Contraseñas nunca expuestas en respuestas
- [ ] Validacion de email unico
- [ ] Middleware de autorizacion funcionando

### Buenas Practicas
- [ ] Formato JSend en todas las respuestas
- [ ] Manejo de errores apropiado
- [ ] Codigos de estado HTTP correctos
- [ ] Validacion de datos de entrada

## ✅ Criterios de Evaluacion

### Task 0 (Setup Basico)
- [ ] Express sin vistas
- [ ] GET /about con JSend
- [ ] GET /ping con 200 OK
- [ ] Jest y Supertest integrados
- [ ] npm test funciona
- [ ] Swagger en /api-docs
- [ ] GitHub Actions CI configurado
- [ ] Listo para Render

### Task 1 (Autenticacion y BD)
- [ ] SQLite con Sequelize
- [ ] Modelo User completo
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] JWT funcionando
- [ ] CRUD completo /users
- [ ] Rutas protegidas con middleware
- [ ] Contraseñas seguras (bcrypt)
- [ ] Tests de autenticacion
- [ ] Tests de rutas protegidas
- [ ] Documentacion actualizada
- [ ] Rama 'setup' creada

## ✅ Entrega Final

### Informacion a Entregar
- [ ] Link de GitHub: https://github.com/[USUARIO]/P3_26848978
- [ ] Link de Render: https://[APP].onrender.com
- [ ] Ambos links son publicos y accesibles

### Verificacion Final
- [ ] Abrir link de GitHub en modo incognito → debe verse
- [ ] Abrir link de Render en modo incognito → debe funcionar
- [ ] Probar endpoints desde Swagger en produccion
- [ ] GitHub Actions tiene check verde
- [ ] README tiene informacion correcta

### Antes de Entregar
- [ ] Tests locales pasan: `npm test`
- [ ] Tests en GitHub Actions pasan (check verde)
- [ ] App funciona en Render (endpoints responden)
- [ ] Documentacion completa y clara
- [ ] No hay secretos expuestos en GitHub

## 📝 Notas Adicionales

### Si Algo Falla

**Tests locales fallan:**
- Elimina `database.sqlite` y `node_modules`
- `npm install` nuevamente
- `npm test`

**GitHub Actions falla:**
- Revisa los logs en GitHub
- Verifica que `package.json` tenga el script test
- Verifica que las dependencias esten correctas

**Render falla:**
- Revisa logs en Render dashboard
- Verifica Build Command y Start Command
- Verifica variables de entorno
- Verifica que GitHub Actions paso primero

**Endpoint no funciona en produccion:**
- Verifica la URL completa
- Verifica que el despliegue se completo
- Revisa logs de Render
- Prueba con curl o Postman

## ✅ Resultado Esperado

Al final debes tener:

1. **Repositorio GitHub publico** con:
   - Todo el codigo
   - Rama `main` con la version completa
   - Rama `setup` como backup
   - GitHub Actions funcionando
   - README con tu informacion

2. **Aplicacion en Render** con:
   - Todos los endpoints funcionando
   - Swagger UI accesible
   - JWT autenticacion operativa
   - CRUD de usuarios operativo

3. **Tests pasando** en:
   - Local (npm test)
   - GitHub Actions (CI)

## 🎯 ¿Todo Listo?

Si marcaste TODAS las casillas:

✅ Tu proyecto esta completo y listo para entregar

Si falta algo, revisa las guias:
- `INICIO_RAPIDO.md` - Para empezar
- `SETUP_GIT.md` - Para GitHub
- `DEPLOYMENT.md` - Para Render
- `PROYECTO_COMPLETO.md` - Informacion completa

---

**Suerte con tu entrega!** 🚀
