/*
Variables
3 tipos de variables

1. ¿Qué es una variable?
Una variable es un espacio en memoria donde podemos guardar valores o referencias para usarlos después.

Sin variables, solo podríamos mostrar mensajes fijos en consola, lo cual no sería útil para programas más complejos.

Existen tres palabras reservadas:

🔸 var

Fue la forma original de crear variables.

Tiene problemas porque funciona en el ámbito de función y permite cosas confusas como el hoisting (las variables se “elevan” al principio del archivo aunque no estén declaradas todavía).

Hoy en día se desaconseja usar var, salvo en casos muy específicos.

🔸 let

Introducido en ES6 (2015).

Se usa para variables cuyo valor puede cambiar (re-asignarse).

Su ámbito es de bloque (solo existe dentro de { ... }).
Evita problemas de hoisting.

🔸 const

También introducido en ES6 (2015).

Se usa para valores constantes (no se pueden re-asignar).

También tiene ámbito de bloque.

Ojo: si se usa con objetos o arrays, la referencia es constante, pero el contenido puede cambiar.


*/

// var

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)