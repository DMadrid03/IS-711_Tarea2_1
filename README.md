# IS-711_Tarea2_1
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js** (versión recomendada: >= 14.x)
- **npm** 

 Verificar si tienes Node.js y npm instalados ejecutando estos comandos:
        node -v
        npm -v

Instalación:
1. Clonar el repositorio
2. Navega al directorio del repositorio
    ```bash
    cd IS-711_Tarea2_1
3. Instala las dependencias
    ```bash
    npm install express
    npm install zod
4. Ejecución del proyecto
    ```bash
    npm run dev


El servidor se iniciará y estará disponible en:
    *http://localhost:2000/tareas

**Ejemplos de cuerpo de las peticiones put, post**
{
    "titulo": "segunda tarea de la lista",
    "descripcion": "Descripción de la tarea 2",
    "completada": true,
    "fecha_creacion": "2025-10-10"
}

{
    "titulo": "Desarrollar productos nuevos"
    ,"descripcion": "Descripción de la tarea"
    ,"completada": true
    ,"fecha_creacion": "2024-08-19"
}