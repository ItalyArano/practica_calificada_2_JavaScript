// Ejercicio 2: Métodos y Condicionales 
// Crea una función llamada esPar que reciba un número como argumento y 
// devuelva true si el número es par, y false si es impar. 
// Crea una función llamada filtrarPares que reciba un array de números y 
// devuelva un nuevo array solo con los números pares. 
// Usa la función filtrarPares para filtrar los números pares del array numeros y 
// muestra el nuevo array en la consola.

console.log("-------------------------------------------------");
console.log("---------- Funciones de numeros pares -----------");
console.log("-------- Solo se imprimen numeros pares ---------");
console.log("-------------------------------------------------");

function esPar(numero) {
  return numero % 2 === 0; // compara y devuelve un valor booleano
}

function filtrarPares(numeros) {
    let array = [];
    for (let i = 0; i < numeros.length; i++) { // recorre desde el cero las veces que los valores existen
        if (esPar(numeros[i])) {
            array.push(numeros[i]); // agrega al array los numeros pares
        }
    }
    return array;
//   return numeros.filter(esPar);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Numeros del array: " + numeros);

console.log("-------------------------------------------------");
console.log("Números pares:", filtrarPares(numeros)); // Muestra los números pares en la consola
console.log("-------------------------------------------------");
