
function isPalindromo(palabra) {
    if (palabra.length <= 1) {
      return true;
    }
  
    if (palabra.charAt(0) !== palabra.charAt(palabra.length - 1)) {
      return false;
    }
  
    const resultado = palabra.slice(1, -1);
    return isPalindromo(resultado);
  }
  
  const argumento = process.argv[2];
  console.log(isPalindromo(argumento));
  