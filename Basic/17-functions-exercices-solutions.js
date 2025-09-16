/*
Ejercicios: Funciones
*/

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
  return a + b; // sumamos los dos parámetros
}
console.log("1) Suma:", suma(3, 5));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorNumero(arr) {
  let mayor = arr[0]; // asumimos que el primero es el mayor
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i]; // si encontramos un número más grande, lo guardamos
    }
  }
  return mayor;
}

console.log("Mayor número:", mayorNumero([4, 9, 2, 15, 7]));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
  const VOWELS = "aeiouáéíóúü";
  let contador = 0;
  for (const ch of texto.toLowerCase()) {
    if (VOWELS.includes(ch)) contador++;
  }
  return contador;
}
console.log("3) Nº de vocales:", contarVocales("Introducción a JavaScript"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function aMayusculas(arr) {
  return arr.map(str => str.toUpperCase()); // .map recorre y convierte
}
console.log("4) Mayúsculas:", aMayusculas(["hola", "adiós", "javascript"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // si tiene divisor no es primo
  }
  return true;
}
console.log("5) ¿Primo?:", esPrimo(7), esPrimo(10));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array con los elementos comunes entre ambos
function elementosComunes(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item)); // devuelve coincidencias
}
console.log("6) Comunes:", elementosComunes([1,2,3,4], [3,4,5,6]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(arr) {
  let suma = 0;
  for (const num of arr) {
    if (num % 2 === 0) suma += num; // sumamos solo pares
  }
  return suma;
}
console.log("7) Suma pares:", sumaPares([1,2,3,4,5,6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function alCuadrado(arr) {
  return arr.map(num => num ** 2); // ** es potencia
}
console.log("8) Cuadrados:", alCuadrado([2,3,4]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
  return texto.split(" ").reverse().join(" ");
  // split separa por espacios → reverse invierte → join une otra vez
}
console.log("9) Invertir palabras:", invertirPalabras("Aprender JavaScript es divertido"));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i; // multiplicamos desde 1 hasta n
  }
  return resultado;
}
console.log("10) Factorial:", factorial(5)); // 5*4*3*2*1 = 120


//Ejercicio 2 con  operador spred
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorNumero(arr) {
  return Math.max(...arr); // usamos Math.max y spread (...)
}
console.log("2) Mayor número:", mayorNumero([4, 9, 2, 15, 7]));
// ¿Qué es el spread operator (...)?

// El operador spread (...) en JavaScript se usa para “expandir” o descomponer los elementos de un array (o de un objeto en otros casos).
// En este ejemplo:

// Math.max(...arr);
// arr = [4, 9, 2, 15, 7]
// ...arr = 4, 9, 2, 15, 7 (expande el array a valores sueltos).
// Math.max(4, 9, 2, 15, 7) devuelve 15, que es el mayor número.
// Sin ..., el método fallaría porque Math.max no acepta arrays directamente, sino números individuales