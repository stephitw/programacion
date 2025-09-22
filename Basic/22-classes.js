/*
Clases = una plantilla que define propiedades (datos) y métodos (comportamientos).

Una clase es una plantilla para crear objetos (instancias).

Introducidas en ES6 → sintaxis más clara que funciones constructoras.

Definen propiedades (en el constructor) y métodos.

Diferencias con objetos:

El objeto es único y cerrado. pero La clase permite crear múltiples instancias con la misma estructura.

Se pueden añadir valores por defecto, métodos, y propiedades privadas (con #).

Uso de this para referirse a la instancia.

Getters y setters: permiten controlar el acceso/modificación de propiedades.

Métodos estáticos: se llaman desde la clase, sin necesidad de instanciar (Math.max es un ejemplo).
*/

// Clases

class Person {

    //constructor es una función especial que nos permite definir cual la estructura inicial de las propiedades de la Persona
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Steph", 37, "EspaiDev")
let person2 = new Person("Steph", 37, "EspaiDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Steph", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "EspaiDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Steph", 37, "EspaiDev")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Steph", 37, "EspaiDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Steph", 37, "EspaiDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

/*
Clase 38 - Herencia de clases
*/

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("EspaiDog")
myDog.run()
myDog.sound()

let myFish = new Fish("EspaiFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))
