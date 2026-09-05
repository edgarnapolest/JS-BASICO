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

    elegirOperador(operador) {
        this.primerValor = parseFloat(pantalla.value)
        this.operador = operador
        limpiarPantalla()
    }
    
    calcular() {
        let resultadoFinal = 0
        this.segundoValor = parseFloat(pantalla.value)
        if(this.operador == "+"){
            resultadoFinal = this.suma(this.primerValor,this.segundoValor)
        }
        else if(this.operador == "-"){
            resultadoFinal = this.resta(this.primerValor,this.segundoValor)
        }
        else if(this.operador == "*"){
            resultadoFinal = this.multiplicacion(this.primerValor,this.segundoValor)
        }
        else if(this.operador == "/"){
            resultadoFinal = this.division(this.primerValor,this.segundoValor)
        }
        else if(this.operador == "%"){
            resultadoFinal = this.porcentaje(this.primerValor,this.segundoValor)
        }
        pantalla.value = resultadoFinal
        this.limpiar()
        return resultadoFinal
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

botonSuma.addEventListener("click", function () {
    calculadora.elegirOperador("+")
})

botonResta.addEventListener("click", function () {
    calculadora.elegirOperador("-")
})

botonMultiplicacion.addEventListener("click", function () {
    calculadora.elegirOperador("*")
})

botonDivisor.addEventListener("click", function () {
    calculadora.elegirOperador("/")
})

botonPCT.addEventListener("click", function () {
    calculadora.elegirOperador("%")
})

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
    pantalla.value += "."
})

class errorOperacion extends Error {
    constructor(message) {
        super(message);
        this.name = "errorOperacion";
    }
    validacionDePunto(){
        try{
            if(pantalla.value.includes(".")){
                throw new errorOperacion("Ya hay un punto en la operacion")
            }
            if(pantalla.value == ""){
                throw new errorOperacion("No se puede poner un punto al principio de la operacion")
            }
            if(pantalla.value == "string"){
                throw new errorOperacion("No se puede realizar la operacion con strings")
            }
        }
        catch(error){
            console.log("Ha ocurrido un error.",error.message)
            limpiarPantalla()
        }
    }
}