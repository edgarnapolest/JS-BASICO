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
let botonDEL = document.querySelector('[data-valor="DEL"]')
let botonPCT = document.querySelector('[data-valor="%"]')
let botonPunto = document.querySelector('[data-valor="."]')

//Operaciones matematicas
class Calculadora {
    constructor() {
        this.primerValor = ""
        this.operador = ""
        this.segundoValor = ""
    }

    ingresarNumero(numero) {
        this.primerValor = numero
        // ¿qué debería pasar acá?
    }
    
    elegirOperador(operador) {
        this.operador = operador
        limpiarPantalla()
        // ¿qué debería guardar acá?
    }
    
    calcular() {
        let resultadoFinal = 0
        if(botonIgual.addEventListener("click")){
            this.segundoValor = patalla.value
            if(this.operador == "suma"){
                resultadoFinal = suma(this.primerValor,this.segundoValor)
            }
            else if(this.operador == "resta"){
                resultadoFinal = resta(this.primerValor,this.segundoValor)
            }
            else if(this.operador == "multiplicacion"){
                resultadoFinal = multiplicacion(this.primerValor,this.segundoValor)
            }
            else if(this.operador == "division"){
                resultadoFinal = division(this.primerValor,this.segundoValor)
            }
            else if(this.operador == "porcentaje"){
                resultadoFinal = porcentaje(this.primerValor,this.segundoValor)
            }
        }
        limpiarPantalla()
        pantalla.value = resultadoFinal
    }
    
    limpiar() {
        this.primerValor = ""
        this.operador = ""
        this.segundoValor = ""
    }
        suma(a,b){
        return a+ b
    }
    resta(a,b){
        return a-b
    }
    multiplicacion(a,b){
        return a*b
    }
    division(a,b){
        return a/b
    }
    porcentaje(a,b){
        return a/b*100
    }
}

let calculadora = new Calculadora()

//Funciones de la logica de la calculadora

function agregarValor(valor) {
    pantalla.value += valor
}

function limpiarPantalla() {
    pantalla.value = ""
}

botonCLR.addEventListener("click", function () {
    limpiarPantalla()
})

botonIgual.addEventListener("click", function () {
    let resultado = calculadora.calcular()
    pantalla.value = resultado
})

//Botones de valores 

botonCero.addEventListener("click", function () {
    pantalla.value += 0
})

botonUno.addEventListener("click", function () {
    pantalla.value += 1
})

botonDos.addEventListener("click", function () {
    pantalla.value += 2
})

botonTres.addEventListener("click", function () {
    pantalla.value += 3
})

botonCuatro.addEventListener("click", function () {
    pantalla.value += 4
})

botonCinco.addEventListener("click", function () {
    pantalla.value += 5
})

botonSeis.addEventListener("click", function () {
    pantalla.value += 6
})

botonSiete.addEventListener("click", function () {
    pantalla.value += 7
})

botonOcho.addEventListener("click", function () {
    pantalla.value += 8
})

botonNueve.addEventListener("click", function () {
    pantalla.value += 9
})

botonPunto.addEventListener("click", function () {
    pantalla.value = parseFloat(pantalla.value)
    pantalla.value += 0.0
})