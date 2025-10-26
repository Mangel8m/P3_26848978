# Instrucciones Paso a Paso para Despliegue

## Parte 1: Subir a GitHub

### Opcion A: Configurar Git en tu PC (Recomendado)

1. **Abrir terminal en la carpeta del proyecto:**
```bash
cd /home/mxgn141/CascadeProjects/P3_26848978
```

2. **Configurar Git con tus datos:**
```bash
git config --global user.name "Miguel Morales"
git config --global user.email "tu-email@gmail.com"
```

3. **Crear repositorio en GitHub:**
   - Ve a https://github.com
   - Click en el boton "+" arriba a la derecha
   - Selecciona "New repository"
   - Nombre: `P3_26848978`
   - Descripcion: "API RESTful con Node.js y Express"
   - Marca como **Public**
   - NO marques "Initialize with README"
   - Click en "Create repository"

4. **Subir el codigo:**
```bash
# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Proyecto completo Task 0 y Task 1"

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/P3_26848978.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

**NOTA:** GitHub te pedira usuario y password. Si tienes autenticacion de dos factores, necesitas crear un Personal Access Token:
- Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → Marca "repo" → Generate
- Usa ese token como password

### Opcion B: Subir manualmente desde GitHub Web

1. **Crear repositorio en GitHub:**
   - Ve a https://github.com
   - Click en "+" → "New repository"
   - Nombre: `P3_26848978`
   - Public
   - Create repository

2. **Subir archivos:**
   - En la pagina del repositorio, click en "uploading an existing file"
   - Arrastra todos los archivos del proyecto EXCEPTO:
     - node_modules/
     - database.sqlite
     - .env
     - coverage/
   - Commit changes

---

## Parte 2: Desplegar en Render.com

### Paso 1: Crear cuenta en Render

1. Ve a https://render.com
2. Click en "Get Started"
3. Registrate con tu cuenta de GitHub (recomendado)
4. Autoriza a Render para acceder a tus repositorios

### Paso 2: Crear Web Service

1. En el dashboard de Render, click en "New +"
2. Selecciona "Web Service"
3. Conecta tu repositorio:
   - Si no aparece, click en "Configure account" y da acceso
   - Busca `P3_26848978`
   - Click en "Connect"

### Paso 3: Configurar el servicio

Llena el formulario con estos datos:

**Name:** `p3-26848978` (o el que prefieras, sera parte de la URL)

**Region:** Oregon (US West) - o el mas cercano

**Branch:** `main`

**Root Directory:** (dejar vacio)

**Environment:** `Node`

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Plan:** `Free`

### Paso 4: Variables de Entorno

Antes de crear el servicio, scroll hacia abajo hasta "Environment Variables":

Click en "Add Environment Variable" y agrega:

1. **Primera variable:**
   - Key: `JWT_SECRET`
   - Value: `mi_clave_secreta_super_segura_2024`

2. **Segunda variable:**
   - Key: `NODE_ENV`
   - Value: `production`

### Paso 5: Crear y Desplegar

1. Click en "Create Web Service"
2. Render comenzara a:
   - Clonar tu repositorio
   - Instalar dependencias (npm install)
   - Iniciar el servidor (npm start)
3. Espera 5-10 minutos (la primera vez tarda mas)
4. Cuando veas "Live" en verde, tu app esta desplegada

### Paso 6: Obtener la URL

1. En la parte superior veras la URL de tu app:
   ```
   https://p3-26848978.onrender.com
   ```
2. Copia esta URL
3. Pruebala en el navegador:
   - https://tu-app.onrender.com/ping
   - https://tu-app.onrender.com/about
   - https://tu-app.onrender.com/api-docs

---

## Parte 3: Verificar que Todo Funciona

### En GitHub:

1. Ve a tu repositorio: `https://github.com/TU_USUARIO/P3_26848978`
2. Click en la pestaña "Actions"
3. Debes ver un workflow ejecutandose o completado
4. Si hay un check verde ✓, todo esta bien
5. Si hay una X roja, click en ella para ver el error

### En Render:

1. Ve a tu dashboard en Render
2. Click en tu servicio `p3-26848978`
3. En la pestaña "Logs" puedes ver la salida del servidor
4. Debe decir "Database connection established successfully"

### Probar los Endpoints:

Abre tu navegador o usa curl:

```bash
# Ping
curl https://tu-app.onrender.com/ping

# About
curl https://tu-app.onrender.com/about

# Documentacion
# Abre en el navegador:
https://tu-app.onrender.com/api-docs
```

---

## Parte 4: Entregar en Google Classroom

Copia estos dos enlaces:

1. **Repositorio GitHub:**
```
https://github.com/TU_USUARIO/P3_26848978
```

2. **Aplicacion en Render:**
```
https://tu-app.onrender.com
```

Pegalos en la tarea de Google Classroom.

---

## Solucionar Problemas Comunes

### Error: "Port already in use" en Render
- No deberia pasar en Render, solo localmente
- Render asigna el puerto automaticamente

### Error: "Module not found" en Render
- Verifica que package.json este en el repositorio
- Verifica que el Build Command sea `npm install`

### GitHub Actions falla
- Ve a la pestaña Actions en GitHub
- Click en el workflow que fallo
- Lee el error
- Usualmente es porque falta algun archivo

### Render no encuentra el repositorio
- Ve a Render → Account Settings
- Click en "Configure account" en GitHub
- Da acceso al repositorio P3_26848978

### La app en Render dice "Service Unavailable"
- Espera unos minutos mas
- Ve a los Logs en Render
- Busca errores en rojo

---

## Notas Importantes

1. **Render Free Tier:**
   - La app se duerme despues de 15 minutos sin uso
   - La primera peticion despues de dormir tarda 30-60 segundos
   - Esto es normal en el plan gratuito

2. **Base de Datos:**
   - SQLite funciona bien en Render
   - Los datos se pierden cuando la app se redeploya
   - Para produccion real usarias PostgreSQL

3. **GitHub Actions:**
   - Se ejecuta automaticamente en cada push
   - Debe pasar antes de que Render despliegue
   - Si falla, arregla el error y haz otro push

4. **Actualizaciones:**
   - Cada vez que hagas push a GitHub
   - Render detectara el cambio
   - Y redespliegara automaticamente

---

## Comandos Utiles

### Para actualizar el codigo:

```bash
# Hacer cambios en el codigo
# Luego:

git add .
git commit -m "Descripcion de los cambios"
git push
```

### Para ver logs en Render:

1. Ve a tu servicio en Render
2. Click en "Logs"
3. Puedes ver en tiempo real

### Para probar localmente antes de subir:

```bash
npm test
npm start
```

---

**Si tienes problemas, revisa los logs en Render y los errores en GitHub Actions.**
