let tareas = []

let inputNuevaTarea = document.querySelector(".sidebar__list-input")
let inputNuevaTareaTitulo = document.querySelector(".main__list-title-input")
let inputNuevaTareaDescripcion = document.querySelector(".main__list-description-textarea")
let botonAgregarNuevaTarea = document.querySelector('[data-valor="agregar"]')
let botonBorrarTarea = document.querySelector('[data-valor = "borrar"]')
let listaSidebar = document.querySelector(".sidebar__list-items")


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
        listaSidebar.innerHTML += `
            <li class = "sidebar__li" data-id="${tarea.id}">
                <span class="tarea-titulo">${tarea.titulo}</span>
                <span class="btn-borrar" data-id="${tarea.id}">✕</span>
            </li>
        `
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

listaSidebar.addEventListener("click", function (evento) {
    let idClickeado = evento.target.dataset.id

    if(evento.target.classList.contains("btn-borrar")){
        /*Si el boton clickeado es la X entonces sera ignorado */
        tareas = tareas.filter(function(tarea){
            /*tarea ahora tendra todo menos el boton eliminado*/
            return tarea.id != idClickeado
        })
        pintarLista()
        return
    }

    let tareaSeleccionada = tareas.find(function(tarea){
        return tarea.id == idClickeado
    })
    
    if (tareaSeleccionada) {
        inputNuevaTareaTitulo.value = tareaSeleccionada.titulo
        inputNuevaTareaDescripcion.value = tareaSeleccionada.descripcion
    }

})
