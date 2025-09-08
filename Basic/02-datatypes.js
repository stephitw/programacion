/*
- Tipos de datos
) ¿Qué es un “tipo de dato”?

Es la clase de valor que una variable puede guardar.

Los primitivos son los más básicos: inmutables y representan un solo valor (no son objetos ni tienen métodos propios).

JS ejecuta el código secuencialmente; para “recordar” datos usamos variables con distintos tipos.

1-String (texto)
Formas: "dobles", 'simples', backticks `template`

2- Number (número: enteros y decimales)
3- buleanos
4- Undefined (declarada sin valor asignado)
5- Null (ausencia de valor intencional)
6- Symbol (identificadores únicos; útil como clave de propiedades)
7- BigInt (enteros muy grandes, fuera del rango seguro de Number)
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Steph Espai"
let alias = 'EspaiDev'
let email = `StephEspai@Espaidev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)