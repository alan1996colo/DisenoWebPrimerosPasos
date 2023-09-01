/***
 * Si es multiplo de 3 devuelve fizz, si es multiplo de 5 devuelve buzz,
 * si es multiplo de ambos devuelve FizzBuzz
 *  sino es ninguno devuelve la misma entrada.
 * **/
function buzzfizz(numero) {
    if (!numero) { return numero };
    var ret = "";
    if (numero % 3 == 0) {
        ret = "Fizz";
    }
    if (numero % 5 == 0) {
        ret = ret + "Buzz";
        return ret;
    }

    return ret || numero;// evaluar dos valores y devolver el primer valor verdadero que encuentra

}

//solucion del profe
const multiplos = { 3: 'fizz', 5: 'buzz' }

function fizzbuzz(num) {
    let palabra = '';
    Object.entries(multiplos).forEach(([indice, valor]) => {
        if (!(num % indice)) palabra += valor;
    })
    return palabra || num;
}
const argumento = process.argv[2];// input del usuario
const numero = parseInt(argumento);// no se si es necesario, porque es javaScript xd
//imprimir por pantalla