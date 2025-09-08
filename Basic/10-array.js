/*
Arrays
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Steph", "Espai", "Espaidev", 37, true]
myArray2 = new Array("Steph", "Espai", "Espaidev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Steph"
// myArray2[0] = "Espai"
myArray2[1] = "Espaidev"
myArray2[4] = "Espaidev"

console.log(myArray2)

myArray = []
myArray[2] = "Steph"
// myArray[0] = "Espai"
myArray[1] = "Espaidev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Steph")
myArray.push("Espai")
myArray.push("Espaidev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Steph", "Espaidev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Steph", "Espai", "Espaidev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Steph", "Espai", "Espaidev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)