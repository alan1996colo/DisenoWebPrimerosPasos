
    // Array para almacenar las tareas
    let tareas = [];

    // Función para agregar una nueva tarea (Create)
    function agregarTarea() {
        const nuevaTareaInput = document.getElementById("nuevaTarea");
        const nuevaTarea = nuevaTareaInput.value.trim();

        if (nuevaTarea !== "") {
            // Crear un objeto que representa la tarea
            const tarea = {
                descripcion: nuevaTarea,
                completada: false
            };

            // Agregar la tarea al arreglo
            tareas.push(tarea);

            // Limpiar el input
            nuevaTareaInput.value = "";

            // Actualizar la lista de tareas en la interfaz (Read)
            actualizarListaTareas();
        }
    }

    // Función para actualizar la lista de tareas en la interfaz (Read)
    function actualizarListaTareas() {
        const listaTareas = document.getElementById("listaTareas");

        // Limpiar la lista antes de actualizar
        listaTareas.innerHTML = "";

        // Iterar sobre las tareas y agregarlas a la lista
        tareas.forEach((tarea, indice) => {
            const li = document.createElement("li");

            // Crear un checkbox para marcar/desmarcar como completada
            const checkboxCompletada = document.createElement("input");
            checkboxCompletada.type = "checkbox";
            checkboxCompletada.checked = tarea.completada;
            checkboxCompletada.onchange = () => marcarDesmarcarTarea(indice);

            // Mostrar la descripción de la tarea con estilo según el estado de completitud
            const spanDescripcion = document.createElement("span");
            spanDescripcion.textContent = tarea.descripcion;
            if (tarea.completada) {
                spanDescripcion.classList.add("tachado");
            }

            // Botón para editar la descripción (Update)
            const botonEditar = document.createElement("button");
            botonEditar.textContent = "Editar";
            botonEditar.onclick = () => editarTarea(indice);

            // Botón para eliminar la tarea (Delete)
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.onclick = () => eliminarTarea(indice);

            li.appendChild(checkboxCompletada);
            li.appendChild(spanDescripcion);
            li.appendChild(botonEditar);
            li.appendChild(botonEliminar);

            listaTareas.appendChild(li);
        });
    }

    // Función para marcar/desmarcar una tarea como completada (Update)
    function marcarDesmarcarTarea(indice) {
        // Cambiar el estado de completada
        tareas[indice].completada = !tareas[indice].completada;

        // Actualizar la lista de tareas en la interfaz
        actualizarListaTareas();
    }

    // Función para editar la descripción de una tarea (Update)
    function editarTarea(indice) {
        // Pedir al usuario una nueva descripción
        const nuevaDescripcion = prompt("Editar tarea:", tareas[indice].descripcion);

        // Actualizar la descripción solo si el usuario ingresó algo y no hizo clic en "Cancelar"
        if (nuevaDescripcion !== null) {
            tareas[indice].descripcion = nuevaDescripcion.trim();
            // Actualizar la lista de tareas en la interfaz (Read)
            actualizarListaTareas();
        }
    }

    // Función para eliminar una tarea (Delete)
    function eliminarTarea(indice) {
        // Eliminar la tarea del arreglo
        tareas.splice(indice, 1);

        // Actualizar la lista de tareas en la interfaz (Read)
        actualizarListaTareas();
    }