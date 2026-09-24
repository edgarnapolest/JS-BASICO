#  To-Do List

Aplicación de gestión de tareas desarrollada con **HTML, CSS y JavaScript puro**, sin frameworks ni librerías externas.

El proyecto permite crear y gestionar tareas y utiliza `localStorage` para conservar la información después de cerrar o recargar la página.

##  Demo

**[Abrir To-Do List](https://edgarnapolest.github.io/JS-BASICO/To-do-list/)**

##  Funcionalidades

- Crear tareas con título y descripción.
- Editar tareas existentes.
- Eliminar tareas.
- Marcar tareas como completadas.
- Buscar tareas por título.
- Guardar tareas en `localStorage`.
- Recuperar las tareas al volver a cargar la página.
- Guardar mediante `Enter`.
- Validación de campos antes de guardar.
- Actualización dinámica de la interfaz.

##  Tecnologías

- HTML5
- CSS3
- CSS Grid
- JavaScript ES6+

##  Qué practiqué

- Manipulación dinámica del DOM.
- Eventos y delegación de eventos.
- Clases y objetos.
- Arrays y métodos como `filter()` y `find()`.
- Gestión del estado de la aplicación.
- Patrón **estado → pantalla**.
- Persistencia con `localStorage`.
- `JSON.stringify()` y `JSON.parse()`.
- Validación de datos.

Una de las ideas principales del proyecto es utilizar el array de tareas como fuente de verdad y regenerar la interfaz a partir de ese estado cuando se producen cambios.

##  Ejecución local

No requiere instalación de dependencias.

1. Clona el repositorio.
2. Entra en la carpeta `To-do-list`.
3. Abre `index.html` en el navegador.

##  Posibles mejoras

- Categorías o etiquetas.
- Fechas límite.
- Ordenación de tareas.
- Confirmación antes de eliminar.
