/*
Sets 

*/

// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Steph", "Espai", "Espaidev", 37, true, "StephEspai@Espaidev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://Espai.dev")

console.log(mySet)

mySet.delete("https://Espai.dev")

console.log(mySet)

console.log(mySet.delete("Steph"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Espai"))
console.log(mySet.has("Steph"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("StephEspai@Espaidev.com")
mySet.add("StephEspai@Espaidev.com")
mySet.add("StephEspai@Espaidev.com")
mySet.add("StephEspai@Espaidev.com")
console.log(mySet)