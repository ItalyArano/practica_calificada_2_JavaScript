// Ejercicio 6: Buscar Elemento en Array 
// Crea un array llamado frutas que contenga varias frutas como cadenas de 
// texto. 
// Crea una función llamada buscarFruta que reciba una fruta y un array, y 
// devuelva true si la fruta está en el array, y false en caso contrario. 
// Prueba la función buscarFruta con diferentes frutas y muestra los resultados en 
// la consola.

const frutas = ["manzana", "pera", "naranja", "palta"];

function buscarFruta(fruta, buscarArray) {
    return buscarArray.includes(fruta);
  }

  console.log(buscarFruta("palta", frutas));//true
  console.log(buscarFruta("per", frutas));//false
  console.log(buscarFruta("manzana", frutas));//true