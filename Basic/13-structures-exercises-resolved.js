/*
Ejercicios: Estructuras
*/

// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Crea un set que almacene cinco libros

// 5. Añade dos más. Uno de ellos repetido

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


/*
Ejercicios: Estructuras
*/

// 1. Crea un array que almacene cinco animales
let animals = ["perro", "gato", "elefante", "tigre", "loro"];
console.log("1:", animals);

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("conejo"); // al principio
animals.push("oso");       // al final
console.log("2:", animals);

// 3. Elimina el que se encuentra en tercera posición
// OJO: los arrays empiezan en índice 0 → la tercera posición es índice 2
animals.splice(2, 1);
console.log("3:", animals);

// 4. Crea un set que almacene cinco libros
let books = new Set(["Don Quijote", "Cien Años de Soledad", "La Odisea", "El Principito", "Hamlet"]);
console.log("4:", books);

// 5. Añade dos más. Uno de ellos repetido
books.add("1984");
books.add("Don Quijote"); // este ya existe, no se añadirá porque Set no permite duplicados
console.log("5:", books);

// 6. Elimina uno concreto a tu elección
books.delete("Hamlet");
console.log("6:", books);

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);
console.log("7:", months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (months.has(5)) {
  console.log("8: El mes 5 es", months.get(5));
} else {
  console.log("8: El mes 5 no existe");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["Junio", "Julio", "Agosto"]);
console.log("9:", months.get("verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numbersArray = [1, 2, 2, 3, 4];
let numbersSet = new Set(numbersArray);  // elimina duplicados
let numbersMap = new Map([["números", numbersSet]]);
console.log("10:", numbersMap);
