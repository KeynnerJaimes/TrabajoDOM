document.addEventListener("DOMContentLoaded", function () {
    const formularioTarea = document.getElementById("formulario-tarea");
    const entradaTarea = document.getElementById("entrada-tarea");
    const listaTareas = document.getElementById("lista-tareas");

    formularioTarea.addEventListener("submit", function (event) {
        event.preventDefault();
        const textoTarea = entradaTarea.value.trim();

        if (textoTarea !== "") {
            agregarTarea(textoTarea);
            entradaTarea.value = "";
        }
    });

    function agregarTarea(textoTarea) {
        const elementoTarea = document.createElement("li");
        elementoTarea.classList.add("elemento-tarea");

        const contenidoTarea = document.createElement("span");
        contenidoTarea.textContent = textoTarea;

        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completado";
        botonCompletar.classList.add("boton-completar");

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("boton-eliminar");

        botonCompletar.addEventListener("click", function () {
            elementoTarea.classList.toggle("completada");
        });

        botonEliminar.addEventListener("click", function () {
            listaTareas.removeChild(elementoTarea);
        });

        elementoTarea.appendChild(contenidoTarea);
        elementoTarea.appendChild(botonCompletar);
        elementoTarea.appendChild(botonEliminar);

        listaTareas.appendChild(elementoTarea);
    }
});
