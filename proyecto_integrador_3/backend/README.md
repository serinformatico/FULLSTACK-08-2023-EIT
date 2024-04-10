# Proyecto Integrador III
*Bootcamp de Programación Full Stack - EducacionIT*

### Requerimientos:
- Node.js v18.17.1
- GIT v2.34.1
- IDE - Visual Studio Code v1.86.2
- Microsoft Windows o Linux
- LocalTunnel / Ngrok

### Configuración de Deploy:
- Configurar el archivo package.json:
    ```json
    "scripts": {
        "prod": "node --trace-warnings ./src/server.js",
        "dev": "node --watch --no-warnings ./src/server.js",
        "stop-linux": "killall -9 node",
        "stop-windows": "taskkill /F /IM node.exe",
        "lint": "eslint ./src"
    },
    ```

### Instrucciones para crear un Tunel HTTP:
1. Instalar LocalTunnel:
   - sudo npm install localtunnel --save-dev
2. Levantar LocalTunnel:
   1. Levantar el servidor de NodeJS en el puerto 3000
   2. Generar URL HTTPS:
      - npx lt --port 3000
   3. Ir a la URL generada por LocalTunnel
   4. Ingresar el Tunnel Password. Se obtiene desde [aquí](https://loca.lt/mytunnelpassword).
   5. Ingresar en el navegador la URI. Por ejemplo: https://plain-coats-make.loca.lt/api/products

### Host Render.com
1. Registrarse en [Render.com](https://render.com)
2. Seleccionar la opción de Web Service
3. Conectar con el repositorio de GitHub
4. Agregar en Render.com las variables de entorno (datos de .env.prod)

### Instrucciones para hacer un Deploy:
Ejecutar los siguientes comandos:
   - git add .
   - git commit -m "Deploy N°003: New version of project"
   - git push


#### Profesor:
*Lic. Sergio Regalado Alessi*
