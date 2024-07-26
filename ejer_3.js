// Ejercicio 3: Bucle y Condicionales 
// Crea una función llamada contarVocales que reciba una cadena de texto y 
// devuelva el número de vocales que contiene. 
// Utiliza un bucle for para iterar sobre cada carácter de la cadena y un 
// condicional para verificar si el carácter es una vocal (a, e, i, o, u). 
// Prueba la función contarVocales con la cadena "JavaScript es divertido" y 
// muestra el resultado en la consola.

function contarVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i].toLowerCase();

        if (vocales.includes(caracter)) {
            contador++;
        }
    }

    return contador;
}