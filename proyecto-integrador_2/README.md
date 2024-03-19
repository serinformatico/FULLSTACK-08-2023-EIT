# Proyecto Integrador II
*Bootcamp de Programación Full Stack - EducacionIT*

### Requerimientos:
- Node.js v18.17.1
- GIT v2.34.1
- IDE - Visual Studio Code v1.86.2
- Microsoft Windows o Linux

### Configuración de Deploy:
- Instalar la CLI de Netlify
  - npm install netlify-cli --save-dev
- Configurar el archivo package.json:
    ```json
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "netlify": "netlify"
    },
    ```
- Inicializar Netlify
  - npm run netlify init
- Ignorar la carpeta **.netlify** dentro del archivo .gitignore

### Instrucciones para hacer un Deploy:
1. Ejecutar los siguientes comandos:
   - npm run build
   - git add .
   - git commit -m "Deploy N°002: New version of project"
   - git push
2. Comando que abre la configuración del proyecto en netlify:
   - npm run netlify open
3. Comando que muestra información sobre el último deploy:
   - npm run netlify watch

#### Profesor:
*Lic. Sergio Regalado Alessi*
