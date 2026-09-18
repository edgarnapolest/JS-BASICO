# To-Do List

Aplicación de lista de tareas construida con HTML, CSS y JavaScript puro (sin frameworks ni librerías externas). Permite crear, editar, buscar, completar y eliminar tareas, con persistencia de datos entre sesiones usando `localStorage`.

## Demo

*(Agregar aquí el link de GitHub Pages o una captura de pantalla cuando esté publicada)*

## Funcionalidades

- **Crear** tareas con título y descripción.
- **Editar** una tarea existente seleccionándola de la lista.
- **Eliminar** tareas individualmente.
- **Marcar como completada** (con indicador visual de texto tachado).
- **Buscar** tareas en tiempo real por título.
- **Persistencia**: las tareas se guardan en el navegador con `localStorage` y se mantienen al recargar la página.
- Atajo de teclado (`Enter`) para guardar una tarea sin necesidad de hacer clic en el botón.
- Mensajes de validación (por ejemplo, al intentar guardar una tarea sin título).

## Tecnologías

- HTML5 semántico
- CSS Grid para el layout general (barra lateral + panel principal)
- JavaScript (ES6+): clases, manipulación dinámica del DOM, delegación de eventos, `localStorage`, `Array.filter()` / `Array.find()`

## Aprendizajes clave de este proyecto

- Delegación de eventos: un solo listener en el contenedor `<ul>` maneja clics en elementos que se crean y destruyen dinámicamente (tareas, botón de borrar, checkbox de completado).
- Patrón "estado → pantalla": el array `tareas` es la única fuente de verdad; la interfaz se regenera completa cada vez que el estado cambia, en lugar de editar el DOM manualmente pieza por pieza.
- Serialización de datos con `JSON.stringify()` / `JSON.parse()` para guardar objetos en `localStorage`.

## Cómo correrlo localmente

1. Clonar el repositorio o descargá esta carpeta.
2. Abrir `index.html` en tu navegador (no requiere servidor ni instalación de dependencias).

## Posibles mejoras futuras

- Categorías o etiquetas por tarea.
- Fechas límite y recordatorios.
- Ordenar tareas (por fecha de creación, alfabético, o completadas al final).
- Confirmación antes de eliminar una tarea.