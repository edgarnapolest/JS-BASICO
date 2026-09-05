//Declaracion de variables de la calculadora

let botonCero = document.querySelector('[data-valor="0"]')
let botonUno = document.querySelector('[data-valor="1"]')
let botonDos = document.querySelector('[data-valor="2"]')
let botonTres = document.querySelector('[data-valor="3"]')
let botonCuatro = document.querySelector('[data-valor="4"]')
let botonCinco = document.querySelector('[data-valor="5"]')
let botonSeis = document.querySelector('[data-valor="6"]')
let botonSiete = document.querySelector('[data-valor="7"]')
let botonOcho = document.querySelector('[data-valor="8"]')
let botonNueve = document.querySelector('[data-valor="9"]')
let botonDivisor = document.querySelector('[data-valor="/"]')
let botonMultiplicacion = document.querySelector('[data-valor="*"]')
let botonResta = document.querySelector('[data-valor="-"]')
let botonSuma = document.querySelector('[data-valor="+"]')
let botonIgual = document.querySelector('[data-valor="="]')
let pantalla = document.querySelector(".calc__box-result")
let botonCLR = document.querySelector('[data-valor="CLR"]')

//Funciones de la logica de la calculadora
function agregarValor(valor) {
    pantalla.value += valor
}

function limpiarPantalla() {
    pantalla.value = ""
}

botonIgual.addEventListener("click", function () {
    console.log("Se apretó el botón igual")
})

botonIgual.addEventListener("click", function () {
    console.log("El valor actual de la pantalla es:", pantalla.value)

    // acá iría tu lógica para calcular el resultado

})

