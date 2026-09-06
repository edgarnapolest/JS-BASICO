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
        this.resultadoReciente = false 
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
        this.resultadoReciente = true
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

function revisarCeros(){
    if(calculadora.resultadoReciente){
        pantalla.value = ""
        calculadora.resultadoReciente = false
    }
}

function limpiarPantalla() {
    pantalla.value = ""
}



//Botones de valores 

botonDEL.addEventListener("click",function(){
    pantalla.value = pantalla.value.slice(0,-1)
})

botonCLR.addEventListener("click", function () {
    limpiarPantalla()
})

botonIgual.addEventListener("click", function () {
    let resultado = calculadora.calcular()
    pantalla.value = resultado
})

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
    revisarCeros()
    pantalla.value += 0
})

botonUno.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 1
})

botonDos.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 2
})

botonTres.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 3
})

botonCuatro.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 4
})

botonCinco.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 5
})

botonSeis.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 6
})

botonSiete.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 7
})

botonOcho.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 8
})

botonNueve.addEventListener("click", function () {
    revisarCeros()
    pantalla.value += 9
})

botonPunto.addEventListener("click", function () {
    try {
        validarPunto()
        pantalla.value += "."
    } catch (error) {
        console.log("Error:", error.message)
    }
})

//validaciones de errores
class ErrorOperacion extends Error {
    constructor(message) {
        super(message);
        this.name = "errorOperacion";
    }
}

function validarPunto() {
    if (pantalla.value.includes(".")) {
        throw new ErrorOperacion("Ya hay un punto en la operación")
    }
    if (pantalla.value === "") {
        throw new ErrorOperacion("No se puede poner un punto al principio")
    }
}

pantalla.addEventListener("keydown",function(evento){
    let teclasPermitidas = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","%","Backspace","Enter"]
    if(!teclasPermitidas.includes(evento.key)){
        evento.preventDefault()
    }
    if (["+","-","*","/","%"].includes(evento.key)) {
        evento.preventDefault()   // evita que el símbolo se escriba dos veces
        calculadora.elegirOperador(evento.key)
    }
    else if (evento.key === "Enter") {
        evento.preventDefault()
        calculadora.calcular()
    }else if(teclasPermitidas.slice(0,10).includes(evento.key)){
        revisarCeros()
    }

})