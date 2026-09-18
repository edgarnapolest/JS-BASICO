# Calculadora

Calculadora funcional construida con HTML, CSS y JavaScript puro (sin frameworks ni librerías externas). Proyecto hecho para practicar manipulación del DOM, manejo de eventos y programación orientada a objetos después de completar un curso de JavaScript básico.

## Demo

*(Agregar aquí el link de GitHub Pages o una captura de pantalla cuando esté publicada)*

## Funcionalidades

- Operaciones básicas: suma, resta, multiplicación, división y porcentaje.
- Entrada por clic en los botones **o** por teclado físico (números, operadores, `Enter` para calcular, `Backspace` para borrar).
- Botón `DEL` para borrar el último carácter ingresado.
- Botón `CLEAR` para reiniciar la pantalla.
- Validaciones para evitar errores comunes (por ejemplo, más de un punto decimal en el mismo número).
- Manejo de excepciones personalizadas con `class ErrorOperacion extends Error`.

## Tecnologías

- HTML5 semántico
- CSS Grid (con `grid-template-areas` para el layout de botones) y variables CSS (`:root`) para la paleta de colores
- JavaScript (ES6+): clases, manejo de eventos (`click`, `keydown`), delegación de eventos y manejo de errores con `try/catch`

## Aprendizajes clave de este proyecto

- Cómo estructurar la lógica de una calculadora usando una clase (`Calculadora`) que encapsula el estado (primer valor, operador, segundo valor) y las operaciones matemáticas.
- Diferencias entre los eventos `keydown`, `keyup` e `input`, y cuándo usar cada uno.
- Uso de `grid-template-areas` para armar layouts irregulares sin depender de `grid-column`/`grid-row` calculados a mano.

## Cómo correrlo localmente

1. Cloná el repositorio o descargar esta carpeta.
2. Abrir `index.html` en tu navegador (no requiere servidor ni instalación de dependencias).

## Posibles mejoras futuras

- Historial de operaciones realizadas.
- Soporte para paréntesis y orden de operaciones.
- Modo claro/oscuro.