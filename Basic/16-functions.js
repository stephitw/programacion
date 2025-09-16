/*
Funciones
*/

// Funciones
// Una función es un bloque de código que realiza una tarea específica y que podemos invocar (llamar).

// Ventaja principal: escribir código limpio, modular y reutilizable.

// Sintaxis básica:

// function myFunction() {
//   console.log("Hola función");
// }
// myFunction(); // se invoca

// Podemos repetir llamadas manualmente o dentro de bucles
// Parámetros: permiten que la función reciba datos externos.

// function saluda(name) {
//   console.log("Hola", name);
// }
// saluda("Steph");


// Funciones anónimas: no tienen nombre, se asignan a variables/constantes.
// Arrow functions: sintaxis más corta, introducidas en ES6. Útiles para funciones simples, especialmente en una sola línea.
// Valores por defecto en parámetros evitan errores si no pasamos argumentos.
// Return: en vez de imprimir, devuelve un valor para reutilizarlo.
// Funciones anidadas: funciones dentro de otras (importante el scope).
// Funciones de orden superior: reciben otras funciones como parámetros (ej. map, forEach).
// forEach: método de arrays que recorre cada elemento ejecutando una función.

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Steph")
myFuncWithParams("EspaiDev")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Steph Espai")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Steph Espai")
myFunc4("Steph Espai")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Steph", "Espai", "Espaidev", 37, true, "StephEspai@Espaidev.com"])

const myMap = new Map([
    ["name", "Steph"],
    ["email", "StephEspai@Espaidev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))