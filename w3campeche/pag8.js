
        // Array de nombres de mujer
        const nombresMujer = ["Ana Rodriguez", "María Baez", "Laura Gamboa", "Sofía Lopez", "Elena Lopez", "Elena Murfi", "Isabel Herrera", "Lucía Diaz", "Carmen Farias", "Marta Farias", "Carmen Diaz", "Marta Perez", "Luisa Britos"];

        // Función para obtener un nombre aleatorio
        function nombreAleatorio() {
            const indice = Math.floor(Math.random() * nombresMujer.length);
            return nombresMujer[indice];
        }

        // Función para actualizar el contenido de todos los elementos <p> con la clase "nombre"
        function actualizarNombres() {
            const elementosNombre = document.querySelectorAll(".nombre");
            elementosNombre.forEach(function (elemento) {
                const nombre = nombreAleatorio();
                elemento.textContent = nombre;
                // También actualiza el contenido de <p class="card-name">
                const card = elemento.closest(".card");
                const cardNameElement = card.querySelector(".card-name");
                cardNameElement.textContent = nombre;
            });
        }
        function bienvenida(){
            var elemName=document.getElementById("fname").value;
            var elemApell=document.getElementById("lname").value;
            var mensaje = "Bienvenido, " + elemName + " " + elemApell + "!";
            alert(mensaje);
            var mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    document.getElementById("logger").style.display = "none";

}

        // Ejecutar la función al cargar la página
        window.onload = actualizarNombres;