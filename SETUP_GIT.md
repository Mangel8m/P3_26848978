# Como Configurar Git y Subir a GitHub

Guia paso a paso para configurar Git y subir el proyecto a GitHub.

## Requisitos

- Tener Git instalado
- Tener una cuenta en GitHub

## Pasos

### 1. Configurar Git (si no lo has hecho antes)

```bash
git config --global user.name "Miguel Morales"
git config --global user.email "tu-email@example.com"
```

### 2. Crear Repositorio en GitHub

1. Ve a https://github.com
2. Click en el boton "+" y selecciona "New repository"
3. Nombre del repositorio: `P3_26848978`
4. Descripcion: "API RESTful con Node.js, Express, JWT y SQLite"
5. Selecciona "Public"
6. NO marques "Initialize this repository with a README"
7. Click "Create repository"

### 3. Inicializar Git en el Proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
cd /home/mxgn141/CascadeProjects/P3_26848978

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Task 0 y Task 1 completos"
```

### 4. Conectar con GitHub y Subir

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU-USUARIO/P3_26848978.git

# Cambiar el nombre de la rama a main (si es necesario)
git branch -M main

# Subir el codigo a GitHub
git push -u origin main
```

### 5. Verificar en GitHub

Ve a `https://github.com/TU-USUARIO/P3_26848978` y verifica que todos los archivos esten ahi.

## Crear Rama para Task 0 (Backup)

Segun los requisitos, debes respaldar Task 0 en una rama:

```bash
# Crear rama setup desde el commit actual
git branch setup

# Subir la rama setup a GitHub
git push origin setup
```

## Trabajar con Git

### Hacer cambios y subirlos

```bash
# Ver el estado de los archivos
git status

# Agregar archivos modificados
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Descripcion de los cambios"

# Subir a GitHub
git push origin main
```

### Ver historial de commits

```bash
git log --oneline
```

### Cambiar entre ramas

```bash
# Ver ramas disponibles
git branch

# Cambiar a la rama setup
git checkout setup

# Volver a la rama main
git checkout main
```

## Autenticacion en GitHub

GitHub ya no permite autenticacion con contraseña por HTTPS. Tienes dos opciones:

### Opcion 1: Personal Access Token (Recomendado para principiantes)

1. Ve a GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Click "Generate new token (classic)"
3. Selecciona los permisos: `repo` (todos)
4. Copia el token generado
5. Cuando Git te pida contraseña, usa este token

### Opcion 2: SSH Keys (Mas seguro)

```bash
# Generar una llave SSH
ssh-keygen -t ed25519 -C "tu-email@example.com"

# Copiar la llave publica
cat ~/.ssh/id_ed25519.pub

# Agregar la llave a GitHub:
# Settings > SSH and GPG keys > New SSH key
# Pega el contenido de la llave publica

# Cambiar la URL del repositorio a SSH
git remote set-url origin git@github.com:TU-USUARIO/P3_26848978.git
```

## Comandos Utiles

```bash
# Ver repositorios remotos
git remote -v

# Descargar cambios de GitHub
git pull origin main

# Ver diferencias antes de hacer commit
git diff

# Deshacer cambios en un archivo
git checkout -- nombre-archivo

# Ver el estado del repositorio
git status
```

## Estructura del Proyecto para GitHub

Asegurate de que estos archivos esten incluidos:

```
P3_26848978/
├── .github/
│   └── workflows/
│       └── ci.yml           ✓ GitHub Actions
├── bin/
│   └── www                  ✓ Inicio del servidor
├── config/
│   └── database.js          ✓ Config de BD
├── middleware/
│   └── auth.js              ✓ Autenticacion
├── models/
│   └── User.js              ✓ Modelo de usuario
├── public/
│   └── index.html           ✓ Pagina de inicio
├── routes/
│   ├── index.js             ✓ Rutas principales
│   ├── auth.js              ✓ Rutas de auth
│   └── users.js             ✓ CRUD usuarios
├── tests/
│   └── app.test.js          ✓ Tests
├── .env.example             ✓ Ejemplo de variables
├── .gitignore               ✓ Archivos ignorados
├── app.js                   ✓ App principal
├── package.json             ✓ Dependencias
├── README.md                ✓ Documentacion
├── DEPLOYMENT.md            ✓ Guia de despliegue
└── API_TESTING.md           ✓ Guia de pruebas
```

## Proximos Pasos Despues de Subir a GitHub

1. Verifica que GitHub Actions se ejecute automaticamente
2. Configura el despliegue en Render.com
3. Prueba la aplicacion en produccion
4. Entrega los enlaces en Google Classroom:
   - Repositorio: `https://github.com/TU-USUARIO/P3_26848978`
   - Aplicacion: `https://tu-app.onrender.com`

## Solucionar Problemas

### "Permission denied" al hacer push

Necesitas configurar autenticacion (ver seccion de Autenticacion).

### "Updates were rejected because the remote contains work"

```bash
git pull origin main --rebase
git push origin main
```

### Olvide agregar un archivo al .gitignore

```bash
# Remover del tracking de Git pero mantener local
git rm --cached nombre-archivo
git commit -m "Remove file from tracking"
```

### Quiero deshacer el ultimo commit (sin perder cambios)

```bash
git reset --soft HEAD~1
```
