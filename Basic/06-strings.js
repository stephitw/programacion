/*
Strings
Un string es una cadena de caracteres (texto).

Es un tipo primitivo e inmutable (cada operación devuelve un string nuevo).
*/

// Strings (cadenas de texto)
// Formas de declararlos
const s1 = "comillas dobles";
const s2 = 'comillas simples';
const s3 = `backticks (template literals)`;

// Concatenación

let myName = "Steph"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice cuando se encuentra en la longitud
console.log(greeting.indexOf("Steph"))
console.log(greeting.indexOf("EspaiDev"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Steph"))
console.log(greeting.includes("EspaiDev"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Steph", "EspaiDev")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "StephEspai@Espaidev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)