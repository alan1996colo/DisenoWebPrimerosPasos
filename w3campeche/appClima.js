const $root = document.getElementById('root');
const $form = document.querySelector('form');
let tarjetas = [];

//  C-rud operacion CREAR
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name_city = $form.querySelector('input').value;
    const url = `http://api.weatherapi.com/v1/current.json?key=390c422fa5404a659f603035231911&q=${name_city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //aca actualizo el arreglo UPDATE de crUd
            tarjetas.push(data);
            leerTarjetas();
        })
        .catch(err => console.log(err));
});
//Read cRud operacion de leer
function leerTarjetas() {
    $root.innerHTML = "";
    for (var i = 0; i < tarjetas.length; i++) {
        // Crear un elemento div para la card de clima
        const card = document.createElement('div');
        card.classList.add('card');

        // Contenido de la card
        card.innerHTML = `
            <img src="${tarjetas[i].current.condition.icon}" alt="${tarjetas[i].current.condition.text}">
            <h1>${tarjetas[i].location.name}</h1>
            <h2>${tarjetas[i].current.temp_c}"C</h2>
            <p>${tarjetas[i].current.condition.text}</p>
        `;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        // Utilizar una función anónima para encapsular el valor de i
        botonEliminar.onclick = (function (indice) {
            return function () {
                eliminarTarjeta(indice);
            };
        })(i);
        card.appendChild(botonEliminar);
        // Agregar la card al contenedor root
        $root.appendChild(card);
    }
}
//Delete (Eliminar) de cruD

function eliminarTarjeta(indice) {
    tarjetas.splice(indice, 1);
    // Actualizar la lista de tareas en la interfaz (Read)
    leerTarjetas();
}
