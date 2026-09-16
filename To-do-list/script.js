let tareas = []

let inputBusquedaDeTarea = document.querySelector(".sidebar__list-input")
let inputNuevaTareaTitulo = document.querySelector(".main__list-title-input")
let inputNuevaTareaDescripcion = document.querySelector(".main__list-description-textarea")
let botonAgregarNuevaTarea = document.querySelector('[data-valor="agregar"]')
let botonBorrarTarea = document.querySelector('[data-valor = "borrar"]')
let listaSidebar = document.querySelector(".sidebar__list-items")
let tareaEnEdicion = null
let tareaEnBusqueda = null

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
function pintarLista(listaAMostrar) {
    let listaSidebar = document.querySelector(".sidebar__list-items")
    listaSidebar.innerHTML = ""
    for (let i = 0; i < listaAMostrar.length; i++) {
        let tarea = listaAMostrar[i]

        listaSidebar.innerHTML += `
            <li class = "sidebar__li" data-id="${tarea.id}">
                <span class="tarea-titulo ${tarea.completada ? "titulo-completado" : ""}"><input type="checkbox" class="check-completada" data-id="${tarea.id}" ${tarea.completada ? "checked" : ""}>
                ${tarea.titulo}
                </span>
                <span class="btn-borrar" data-id="${tarea.id}">✕</span>
            </li>
        `
    }
}

function buscarTarea(){
    tareaEnBusqueda = inputBusquedaDeTarea.value.toLowerCase()
    tareaEnEdicion = null
    let tareasBuscadas = tareas.filter(function(tarea){
        return tarea.titulo.toLowerCase().includes(tareaEnBusqueda)
    })
    pintarLista(tareasBuscadas)
}

//Botones

botonAgregarNuevaTarea.addEventListener("click", function (evento) {
    evento.preventDefault()
    
    if (tareaEnEdicion != null) {
        let tareaParaEditar = tareas.find(function(tarea){
        return tarea.id == tareaEnEdicion})
        if(tareaParaEditar){
            tareaParaEditar.titulo = inputNuevaTareaTitulo.value
            tareaParaEditar.descripcion = inputNuevaTareaDescripcion.value
        }
    } else {
        let tareaNueva = new Tareas(Date.now(), inputNuevaTareaTitulo.value, inputNuevaTareaDescripcion.value, false)
        tareas.push(tareaNueva)
    }
    
    pintarLista(tareas)
    inputNuevaTareaTitulo.value = ""
    inputNuevaTareaDescripcion.value = ""
    tareaEnEdicion = null   // se resetea después de guardar, para el próximo clic en "+"
})

listaSidebar.addEventListener("click", function (evento) {
    let idClickeado = evento.target.dataset.id

    if(evento.target.classList.contains("btn-borrar")){
        tareas = tareas.filter(function(tarea){
            return tarea.id != idClickeado
        })
        
        pintarLista(tareas)
        if(tareaEnEdicion == idClickeado){
            inputNuevaTareaDescripcion.value = ""
            inputNuevaTareaTitulo.value = ""
            tareaEnEdicion = null
        }
        return
    }
    
    if(evento.target.classList.contains("check-completada")){
        let tareaParaCompletar = tareas.find(function(tarea){
            return tarea.id == idClickeado
        })
        if(tareaParaCompletar){
            tareaParaCompletar.completada = !tareaParaCompletar.completada
            pintarLista(tareas)
        }
        return
    }


    let tareaSeleccionada = tareas.find(function(tarea){
        return tarea.id == idClickeado
    })
    
    if (tareaSeleccionada) {
        inputNuevaTareaTitulo.value = tareaSeleccionada.titulo
        inputNuevaTareaDescripcion.value = tareaSeleccionada.descripcion
        tareaEnEdicion = tareaSeleccionada.id
    }
})

inputBusquedaDeTarea.addEventListener("input", function(evento){
    buscarTarea()
})

inputNuevaTareaTitulo.addEventListener("keydown", function(evento){
    if(evento.key === "Enter"){
        evento.preventDefault()
        botonAgregarNuevaTarea.click()
    }
})