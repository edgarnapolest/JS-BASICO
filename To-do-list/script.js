let tareas = []   // el array-estado, arranca vacío
let descripcion = []
let titulo = []

function pintarLista() {
    let listaSidebar = document.querySelector(".sidebar__list-items")
    listaSidebar.innerHTML = ""
    
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        listaSidebar.innerHTML += `<li data-id="${tarea.id}">${tarea.texto}</li>`
    }
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        listaSidebar.innerHTML += `<li data-id="${tarea.id}">${tarea.texto}</li>`
    }
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        listaSidebar.innerHTML += `<li data-id="${tarea.id}">${tarea.texto}</li>`
    }
}

let formulario = document.querySelector(".sidebar__list-form")
let inputNuevaTarea = document.querySelector(".sidebar__list-input")
let inputNuevaTareaTitulo = document.querySelector(".main__list-title-input")
let inputNuevaTareaDescripcion = document.querySelector(".main__list-description-textarea")

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault()

    let nuevaTarea = {
        id: Date.now(),              
        texto: inputNuevaTarea.value,
        descripcion: inputNuevaTareaDescripcion.value,
        titulo: inputNuevaTareaTitulo.value,
        completada: false
    }
    tareas.push(nuevaTarea)
    pintarLista()
    inputNuevaTarea.value = ""   
    inputNuevaTareaDescripcion.value = ""   
    inputNuevaTareaTitulo.value = ""   
    
})

