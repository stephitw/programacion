/*1)Calculadora de refrescos

Enunciado:
Un bar vende refrescos a 2€ cada uno. Crea un programa que
Pida al usuario (con prompt) cuántos refrescos quiere.
Calcule el total a pagar.
Si compra más de 5, aplica un 10% de descuento.
Muestra el resultado en consola.
*/

/*2) Simulador de dados

Enunciado:
Haz un programa que:
Lance dos dados (números aleatorios entre 1 y 6).
Muestre los resultados y la suma.
Si la suma es 7 o 11, el jugador gana.
Si la suma es 2, 3 o 12, el jugador pierde.
En otro caso, muestra “Sigue intentando”.
*/

/*3) Pedido de pizza

Enunciado:
Crea un array con 5 sabores de pizza. Haz un bucle que:
Muestre la lista de sabores con su índice.
Pida al usuario un número y devuelva el sabor elegido.
Si el número no es válido, muestra un mensaje de error.
*/

/*4) Contador de pasos

Enunciado:
Simula un contador de pasos para caminar:
Guarda en una variable los pasos iniciales (0).
Usa un bucle para simular 10 minutos caminando, sumando un número aleatorio de 20 a 100 pasos cada minuto.
Al final, muestra el total y si superó o no los 1000 pasos.
*/

/*5) Lista de compras inteligente

Enunciado:
Crea un programa que:
Guarde en un array ["pan", "leche", "huevos", "tomates"].
Pregunte al usuario qué producto quiere buscar.
Usa una función que devuelva si el producto está en la lista o no.
Si está, muéstralo en mayúsculas.
Si no, añade el producto a la lista y muéstrala actualizada.
*/

/*******************************************************
 * SOLUCIONES
 */
// =======================
// 1) Calculadora de refrescos
// =======================
let cantidadRefrescos = 6; // Simulamos que el usuario pide 6 refrescos
let precio = 2;
let total = cantidadRefrescos * precio;

if (cantidadRefrescos > 5) {
  total = total * 0.9; // aplica 10% de descuento
}

console.log("1) Total a pagar por", cantidadRefrescos, "refrescos:", total, "€");

//pasos
// Creamos variables:
// cantidadRefrescos = 6 (simula la cantidad pedida).
// precio = 2 (euros por refresco).
// Calculamos el total sin descuento:
// total = cantidadRefrescos * precio.
// Aplicamos descuento si hay más de 5:
// if (cantidadRefrescos > 5) total = total * 0.9;
// (multiplicar por 0.9 = aplicar 10% de descuento).


// =======================
// 2) Simulador de dados
// =======================
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;
let suma = dado1 + dado2;

console.log("2) Dados:", dado1, "+", dado2, "=", suma);

if (suma === 7 || suma === 11) {
  console.log("¡Ganaste!");
} else if (suma === 2 || suma === 3 || suma === 12) {
  console.log("Perdiste 😢");
} else {
  console.log("Sigue intentando...");
}

//PASOS
// Generamos dos números aleatorios entre 1 y 6:
// Math.random() da un número entre 0 y 1.
// * 6 lo lleva a 0…<6.
// Math.floor(...) + 1 lo convierte en 1…6.
// Guardamos en dado1 y dado2.
// Sumamos: suma = dado1 + dado2.
// Mostramos los dados y la suma con console.log.
// Reglas del juego (condicionales):
// Si suma === 7 || suma === 11 → “¡Ganaste!”
// Si suma === 2 || suma === 3 || suma === 12 → “Perdiste”
// En cualquier otro caso → “Sigue intentando…”

// =======================
// 3) Pedido de pizza
// =======================
const pizzas = ["Margarita", "Pepperoni", "Cuatro Quesos", "Barbacoa", "Vegetal"];
console.log("3) Sabores de pizza disponibles:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(i, "-", pizzas[i]);
}

let eleccion = 2; // Simulamos que el usuario elige la opción 2
if (eleccion >= 0 && eleccion < pizzas.length) {
  console.log("Has elegido la pizza:", pizzas[eleccion]);
} else {
  console.log("Número inválido ❌");
}

// PASOS
// Creamos un array de sabores:
// const pizzas = ["Margarita", "Pepperoni", "Cuatro Quesos", "Barbacoa", "Vegetal"];
// Recorremos el array con un for para mostrar índice y nombre:
// for (let i = 0; i < pizzas.length; i++) { console.log(i, "-", pizzas[i]); }
// Simulamos una elección: let eleccion = 2;
// Validamos la elección con un if:
// Condición válida: eleccion >= 0 && eleccion < pizzas.length
// Si es válida: mostramos pizzas[eleccion].
// Si no: mostramos “Número inválido”.

// =======================
// 4) Contador de pasos
// =======================
let pasos = 0;
for (let minuto = 1; minuto <= 10; minuto++) {
  let pasosEnMinuto = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  pasos += pasosEnMinuto;
  console.log("Minuto", minuto, "→ +", pasosEnMinuto, "pasos");
}

console.log("4) Pasos totales:", pasos);
if (pasos >= 1000) {
  console.log("¡Superaste los 1000 pasos! 🎉");
} else {
  console.log("No llegaste a los 1000, sigue caminando 😉");
}

//PASOS
// Iniciamos el acumulador: let pasos = 0;
// Simulamos 10 minutos con un for (minuto = 1; minuto <= 10; minuto++).
// En cada minuto generamos pasos aleatorios entre 20 y 100:
// Fórmula: Math.floor(Math.random() * (max - min + 1)) + min
// Aquí: max=100, min=20.
// Sumamos al total: pasos += pasosEnMinuto; y lo mostramos.
// Al final del bucle:
// Mostramos los pasos totales.
// Si pasos >= 1000 → “¡Superaste los 1000 pasos!”
// Si no → “Sigue caminando”.

// =======================
// 5) Lista de compras inteligente
// =======================
let lista = ["pan", "leche", "huevos", "tomates"];

function buscarProducto(producto) {
  if (lista.includes(producto)) {
    return producto.toUpperCase(); // si está, lo muestra en mayúsculas
  } else {
    lista.push(producto); // si no está, lo añade
    return "Producto añadido: " + producto;
  }
}

console.log("5) Resultado búsqueda:", buscarProducto("leche")); // ya está
console.log("5) Resultado búsqueda:", buscarProducto("queso")); // no estaba, se añade
console.log("Lista actualizada:", lista);

//PASOS
// Creamos el array base: let lista = ["pan", "leche", "huevos", "tomates"];
// Definimos una función buscarProducto(producto):
// Si ya existe en la lista (lista.includes(producto)):
// devuelve el nombre en mayúsculas (producto.toUpperCase()).
// Si no existe:
// lo agrega al final (lista.push(producto)) y devuelve "Producto añadido: ...".
// Probamos la función:
// buscarProducto("leche") → ya está → devuelve "LECHE".
// buscarProducto("queso") → no está → lo añade → devuelve "Producto añadido: queso".
// Mostramos la lista actualizada para ver el cambio.