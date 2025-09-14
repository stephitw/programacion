/*
Ejercicios: Bucles — Soluciones y ejemplos comentados
*/

// 1) Imprime los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2) Suma del 1 al 100 y muestra el resultado
let i = 1;
let suma = 0;
while (i <= 100) {
  suma += i;
  i++;
}
console.log("Suma 1..100 =", suma);

// 3) Números pares entre 1 y 50
for (let n = 2; n <= 50; n += 2) {
  console.log(n);
}

// 4) Dado un array de nombres, imprime cada nombre
const nombres = ["Steph", "Marc", "Nuria", "Alex"];
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
for (const nombre of nombres) { //Recorre directamente los valores del array sin usar índices.
  console.log(nombre);
}



// 5) Cuenta las vocales en una cadena
const texto = "Introducción a los bucles en JavaScript";
let vocales = 0;
const VOWELS = "aeiouáéíóúü";
for (let i = 0; i < texto.length; i++) {
    const char = texto[i].toLowerCase();    // cogemos la letra actual
    if (VOWELS.includes(char)) {           // comprobamos si está en VOWELS
        vocales++;
    }
}
// for (const ch of texto.toLowerCase()) {
//   if (VOWELS.includes(ch)) vocales++;
// }
// console.log("Vocales =", vocales);



// 6) Multiplica todos los números de un array y muestra el producto
const numeros = [2, 3, 4, 5];
let producto = 1;            // neutro de la multiplicación
for (const n of numeros) {
  producto *= n;
}
console.log("Producto =", producto);

// 7) Tabla de multiplicar del 5
for (let k = 1; k <= 10; k++) {
  console.log(`5 x ${k} = ${5 * k}`);
}

// 8) Invierte una cadena de texto
const cadena = "JavaScript";
let invertida = "";
for (let idx = cadena.length - 1; idx >= 0; idx--) {
  invertida += cadena[idx];
}
console.log("Invertida =", invertida);
// Explicación línea por línea
// const cadena = "JavaScript";
// Aquí guardamos el texto que queremos invertir.

// "JavaScript" tiene 10 caracteres, con índices del 0 al 9.

// let invertida = "";
// Creamos una variable vacía para ir acumulando los caracteres en orden inverso.

// El bucle for
// for (let idx = cadena.length - 1; idx >= 0; idx--)
// cadena.length - 1 → empezamos desde el último índice (9 en este caso).
// idx >= 0 → seguimos hasta llegar al índice 0.
// idx-- → en cada vuelta reducimos en 1, recorriendo la cadena de atrás hacia adelante.

// Dentro del bucle

// invertida += cadena[idx];


// En cada vuelta tomamos el carácter en la posición idx y lo concatenamos a la variable invertida.

// Ejemplo del proceso:
// idx = 9 → "t" → invertida = "t"
// idx = 8 → "p" → invertida = "tp"
// idx = 7 → "i" → invertida = "tpi"
// ... y así hasta el índice 0 → "J".

// Resultado final
// Cuando termina el bucle, invertida contiene: "tpircSavaJ".
// console.log("Invertida =", invertida);

// Resumen lógico
// Recorremos el string de derecha a izquierda.
// Vamos acumulando cada letra en un nuevo string.
// Al final obtenemos la cadena original invertida.

// 9) Primeros 10 números de Fibonacci
// ¿Qué es la secuencia de Fibonacci?
// Es una sucesión de números en la que cada número (a partir del tercero) se obtiene sumando los dos anteriores:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Empieza con 0 y 1.

// Después:
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// … y así sucesivamente.
const fib = [0, 1];  
// Creamos un array con los dos primeros números de Fibonacci
// fib[0] = 0, fib[1] = 1

for (let p = 2; p < 10; p++) {
  // Empezamos desde la posición 2 (tercer elemento)
  // hasta llegar a 9 (porque queremos 10 números en total)
  
  fib[p] = fib[p - 1] + fib[p - 2];
  // Cada nuevo número es la suma de los dos anteriores
  // Ej: fib[2] = fib[1] + fib[0] = 1 + 0 = 1
  //     fib[3] = fib[2] + fib[1] = 1 + 1 = 2
  //     fib[4] = fib[3] + fib[2] = 2 + 1 = 3
}

console.log("Fibonacci(10) =", fib);
// Resultado: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// 10) Nuevo array con números > 10
const lista = [5, 12, 8, 130, 44, 3];
const mayoresA10 = [];
for (const n of lista) {
  if (n > 10) mayoresA10.push(n);
}
console.log("Mayores a 10 =", mayoresA10);
