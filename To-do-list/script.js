let tareas = []   // el array-estado, arranca vacío

function pintarLista() {
    let listaSidebar = document.querySelector(".sidebar__list-items")
    listaSidebar.innerHTML = ""
    
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        listaSidebar.innerHTML += `<li data-id="${tarea.id}">${tarea.texto}</li>`
    }
}

let formulario = document.querySelector(".sidebar__list-form")
let inputNuevaTarea = document.querySelector(".sidebar__list-input")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()   // evita que el form recargue la página (comportamiento por defecto de submit)
    
    let nuevaTarea = {
        id: Date.now(),               // truco simple para un id "único": la marca de tiempo actual
        texto: inputNuevaTarea.value,
        completada: false
    }
    
    tareas.push(nuevaTarea)
    pintarLista()
    inputNuevaTarea.value = ""        // limpia el input después de agregar
})

