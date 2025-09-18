/*
Ejercicios: Clases — Soluciones paso a paso (nivel principiante)
*/

// ===============================================
// 1) Crea una clase que reciba dos propiedades
//    - Haremos una clase Persona con 'nombre' y 'edad'.
// ===============================================
class Persona {
  // El constructor se ejecuta al crear una nueva Persona
  constructor(nombre, edad) {
    // Guardamos los valores en la instancia (this)
    this.nombre = nombre;
    this.edad = edad;
  }

  // ===============================================
  // 2) Añade un método a la clase que utilice las propiedades
  //    - Método 'presentar' que devuelva un texto usando nombre y edad.
  // ===============================================
  presentar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  // ===============================================
  // 4) Añade un método estático a la primera clase
  //    - Un método estático se llama desde la clase, no desde la instancia.
  //    - 'esMayorDeEdad(edad)': true si edad >= 18.
  // ===============================================
  static esMayorDeEdad(edad) {
    return edad >= 18;
  }
}

// ===============================================
// 3) Muestra los valores de las propiedades e invoca a la función
//    - Creamos una persona y mostramos datos y el método 'presentar'.
// ===============================================
const persona1 = new Persona("Ana", 20);               // Creamos una instancia
console.log("Nombre:", persona1.nombre);               // Accedemos a la propiedad
console.log("Edad:", persona1.edad);                   // Accedemos a la propiedad
console.log("Presentación:", persona1.presentar());    // Invocamos el método

// ===============================================
// 5) Haz uso del método estático
//    - Llamamos a Persona.esMayorDeEdad sin crear una persona nueva.
// ===============================================
console.log("¿20 es mayor de edad?:", Persona.esMayorDeEdad(20)); // true
console.log("¿15 es mayor de edad?:", Persona.esMayorDeEdad(15)); // false


// ===============================================
// 6) Crea una clase que haga uso de herencia
//    - 'Estudiante' hereda de 'Persona' (tiene nombre y edad)
//    - Añadimos la propiedad 'carrera' y un método 'estudiar'.
// ===============================================
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // Llamamos al constructor de Persona para setear nombre y edad
    super(nombre, edad);
    // Añadimos lo propio de Estudiante
    this.carrera = carrera;
  }

  estudiar() {
    return `${this.nombre} está estudiando ${this.carrera}.`;
  }

  // ===============================================
  // 10) Sobrescribe un método de una clase que utilice herencia
  //     - Redefinimos 'presentar' para que incluya la carrera.
  //     - (Opcional) usamos 'super.presentar()' para reutilizar el texto base.
  // ===============================================
  presentar() {
    // Podemos reutilizar el mensaje de Persona y añadir más info
    const base = super.presentar();
    return `${base} Estudio ${this.carrera}.`;
  }
}

// Probamos Estudiante
const est1 = new Estudiante("Luis", 22, "Informática");
console.log(est1.presentar()); // Usa el método sobrescrito
console.log(est1.estudiar());  // Método propio de Estudiante


// ===============================================
// 7) Crea una clase que haga uso de getters y setters
//    - Versión 1 (pública): usaremos una convención '_saldo' y getters/setters.
//    - Los getters/setters son funciones que se usan como propiedades.
// ===============================================
class CuentaBancariaV1 {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this._saldo = saldoInicial; // El guion bajo indica "interno" por convención
  }

  // Getter: leer el saldo como si fuese una propiedad
  get saldo() {
    return this._saldo;
  }

  // Setter: validar antes de cambiar el saldo
  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log("No se puede asignar un saldo negativo.");
      return; // salimos sin cambiarlo
    }
    this._saldo = nuevoSaldo;
  }

  mostrar() {
    return `Titular: ${this.titular} | Saldo: ${this._saldo}€`;
  }
}

// Probamos V1 (get/set)
const cta1 = new CuentaBancariaV1("Marta", 100);
console.log(cta1.mostrar()); // 100
cta1.saldo = 150;            // usa el setter
console.log("Saldo tras setter:", cta1.saldo); // usa el getter → 150
cta1.saldo = -50;            // inválido → mensaje y no cambia
console.log("Saldo final V1:", cta1.saldo);    // 150


// ===============================================
// 8) Modifica la clase con getters y setters para que use propiedades privadas
//    - Versión 2 (privada): usamos campos privados con '#'
//    - Solo se accede a través de getters/setters
// ===============================================
class CuentaBancaria {
  // Declaramos campos privados
  #titular;
  #saldo;

  constructor(titular, saldoInicial) {
    this.#titular = titular;
    this.#saldo = saldoInicial;
  }

  // Getter del titular (solo lectura en este ejemplo)
  get titular() {
    return this.#titular;
  }

  // Getter/Setter del saldo con validación
  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log("No se puede asignar un saldo negativo.");
      return;
    }
    this.#saldo = nuevoSaldo;
  }

  depositar(monto) {
    if (monto <= 0) {
      console.log("El depósito debe ser mayor que 0.");
      return;
    }
    this.#saldo += monto;
  }

  retirar(monto) {
    if (monto <= 0) {
      console.log("La retirada debe ser mayor que 0.");
      return;
    }
    if (monto > this.#saldo) {
      console.log("Fondos insuficientes.");
      return;
    }
    this.#saldo -= monto;
  }

  info() {
    return `Titular: ${this.#titular} | Saldo: ${this.#saldo}€`;
  }
}

// ===============================================
// 9) Utiliza los get y set y muestra sus valores
//    - Creamos una cuenta, usamos depositar/retirar, y get/set de saldo.
// ===============================================
const cta2 = new CuentaBancaria("Carlos", 200);
console.log(cta2.info());           // 200
cta2.depositar(50);                 // +50
console.log("Tras depósito:", cta2.saldo); // 250 (usa getter)
cta2.retirar(70);                   // -70 → 180
console.log("Tras retirada:", cta2.saldo); // 180
cta2.saldo = -10;                   // inválido → no cambia
console.log("Saldo final V2:", cta2.saldo); // 180

// (Demostración extra de set válido)
cta2.saldo = 300;                   // válido
console.log("Saldo tras set válido:", cta2.saldo); // 300
