// Ejemplo de código JavaScript
console.log("¡Hola, mundo!");

function tabla(numero) {
    const $tabla = document.querySelector('.tabla');
    for (let i = 1; i <= 10; i++) {
        $tabla.innerHTML += `<p>${numero}x${i} = ${numero * i}</p>`;
    }
}

const h1=document.querySelector('h1');
h1.textContent='hola mundo'