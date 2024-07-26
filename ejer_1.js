// Ejercicio 1: Manipulación de Arrays 
// Crea un array llamado numeros que contenga los números del 1 al 10. 
// Utiliza un bucle for para imprimir cada número del array en la consola. 
// Crea una función llamada sumaArray que reciba un array de números y 
// devuelva la suma de todos los elementos del array. 
// Llama a la función sumaArray pasando el array numeros y muestra el resultado 
// en la consola. 

console.log("-------------------------------------------------");
console.log("----------------- Suma de todos -----------------");
console.log("-------------------------------------------------");

let numeros = [];
for (let i=1; i<=10; i++) {
    numeros.push(i); // Agrega numeros al array
    console.log("Posicion "+(i-1)+": "+numeros[i - 1]); // Imprime cada número del array (el -1 idica la posicion )
}
console.log("-------------------------------------------------");
console.log("Array de los números(1-10): "+numeros);

function sumaArray(array) {
    let suma = 0;
    for (let i=0; i<array.length; i++) { // recorre el numero de valores que existe en el array
        suma += array[i];
    }
    return suma;
}
console.log("-------------------------------------------------");
console.log("Suma de los números del array: "+sumaArray(numeros));
console.log("-------------------------------------------------");