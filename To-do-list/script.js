let tareas = []

let inputNuevaTarea = document.querySelector(".sidebar__list-input")
let inputNuevaTareaTitulo = document.querySelector(".main__list-title-input")
let inputNuevaTareaDescripcion = document.querySelector(".main__list-description-textarea")
let botonAgregarNuevaTarea = document.querySelector('[data-valor="agregar"]')
let botonBorrarTarea = document.querySelector('[data-valor = "borrar"]')

//clases
class Tareas{
    constructor(id,titulo,descripcion,completada){
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.completada =  completada
    }
}

//funciones de la sidebar

function pintarLista() {
    let listaSidebar = document.querySelector(".sidebar__list-items")
    listaSidebar.innerHTML = ""
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        listaSidebar.innerHTML += `<li data-id="${tarea.id}">${tarea.titulo}</li>`
    }
}

botonAgregarNuevaTarea.addEventListener("click", function (evento) {
    evento.preventDefault()
    
    let tareaNueva = new Tareas(Date.now(),inputNuevaTareaTitulo.value,inputNuevaTareaDescripcion.value,false) 
    tareas.push(tareaNueva)
    pintarLista()
    inputNuevaTarea.value = ""   
    inputNuevaTareaDescripcion.value = ""   
    inputNuevaTareaTitulo.value = ""   
})

// botonBorrarTarea.addEventListener("click",function(){
//     evento.preventDefault()
//     let borradoDeTarea = {

//     }
// })

