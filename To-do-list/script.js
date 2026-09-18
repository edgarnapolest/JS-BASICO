let tareas = []
let inputBusquedaDeTarea = document.querySelector(".sidebar__list-input")
let inputNuevaTareaTitulo = document.querySelector(".main__list-title-input")
let inputNuevaTareaDescripcion = document.querySelector(".main__list-description-textarea")
let botonAgregarNuevaTarea = document.querySelector('[data-valor="agregar"]')
let botonBorrarTarea = document.querySelector('[data-valor = "borrar"]')
let listaSidebar = document.querySelector(".sidebar__list-items")
let tareaEnEdicion = null
let tareaEnBusqueda = null
let mensajeError = document.querySelector(".mensaje-error")
cargarDeStorage()
pintarLista(tareas)

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

    if (listaAMostrar.length === 0) {
        listaSidebar.innerHTML = `
            <li class="sidebar__empty">
                ${tareaEnBusqueda ? "No se encontraron tareas" : "No hay tareas todavía"}
            </li>
        `
        return
    }

    for (let i = 0; i < listaAMostrar.length; i++) {
        let tarea = listaAMostrar[i]
        listaSidebar.innerHTML += `
    <li class="sidebar__li" data-id="${tarea.id}">
        <input type="checkbox" class="check-completada" data-id="${tarea.id}" ${tarea.completada ? "checked" : ""}>
        <span data-id="${tarea.id}" class="tarea-titulo ${tarea.completada ? "titulo-completado" : ""}">${tarea.titulo}</span>
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

function guardarEnStorage() {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

function cargarDeStorage() {
    let datosGuardados = localStorage.getItem("tareas")
    if (datosGuardados) {
        tareas = JSON.parse(datosGuardados)
    }
}
//Botones

botonAgregarNuevaTarea.addEventListener("click", function (evento) {
    evento.preventDefault()
    
    if(inputNuevaTareaTitulo.value.trim() === ""){
        mensajeError.textContent = "No se puede agregar una tarea vacía"
        mensajeError.style.visibility = "visible"

        setTimeout(function () {
            mensajeError.style.visibility = "hidden"
        }, 2000)

        return
    }

    if (tareaEnEdicion != null) {
        let tareaParaEditar = tareas.find(function(tarea){
        return tarea.id == tareaEnEdicion})
        if(tareaParaEditar){
            tareaParaEditar.titulo = inputNuevaTareaTitulo.value
            tareaParaEditar.descripcion = inputNuevaTareaDescripcion.value
            guardarEnStorage()
        }
        } else {
        let tareaNueva = new Tareas(Date.now(), inputNuevaTareaTitulo.value, inputNuevaTareaDescripcion.value, false)
        tareas.push(tareaNueva)
        guardarEnStorage()
    }
    pintarLista(tareas)
    inputNuevaTareaTitulo.value = ""
    inputNuevaTareaDescripcion.value = ""
    tareaEnEdicion = null 
})

listaSidebar.addEventListener("click", function (evento) {
    let li = evento.target.closest(".sidebar__li")
    if (!li) return

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
        guardarEnStorage()
        return

    }
    
    if(evento.target.classList.contains("check-completada")){
        let tareaParaCompletar = tareas.find(function(tarea){
            return tarea.id == idClickeado
        })
        if(tareaParaCompletar){
            tareaParaCompletar.completada = !tareaParaCompletar.completada
            pintarLista(tareas)
            guardarEnStorage()
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