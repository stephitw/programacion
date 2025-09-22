// Enunciado

// Crea una clase llamada Producto que tenga las siguientes propiedades:
// nombre (string)
// precio (number)
// cantidad (number)

// La clase debe tener dos métodos:
// calcularTotal() → multiplica precio * cantidad y devuelve el total.
// mostrarInfo() → imprime por consola un texto con el formato:

// Producto: Pan | Precio: 1.50€ | Cantidad: 3 | Total: 4.50€

// -----------------------------------------------------
// Ejercicio: Clase básica sin static y sin herencia
// Tema: Productos en una tienda
// -----------------------------------------------------
// Objetivo: Aprender a crear clases, propiedades y métodos básicos.
// -----------------------------------------------------


// =====================================================
// PASO 1: Crear una clase vacía llamada Producto
// =====================================================
// Ejercicio: escribe la palabra clave "class" seguida del nombre "Producto".
// (De momento, la clase estará vacía.)
class Producto {
  // aquí dentro irán el constructor y los métodos
}


// =====================================================
// PASO 2: Añadir un constructor
// =====================================================
// El constructor recibirá 3 parámetros: nombre, precio y cantidad.
// Guardamos esos valores dentro del objeto usando "this".
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}


// =====================================================
// PASO 3: Añadir un método que calcule el total
// =====================================================
// Creamos un método llamado calcularTotal() que multiplica
// el precio por la cantidad y devuelve el resultado.
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }
}


// =====================================================
// PASO 4: Añadir un método para mostrar la información
// =====================================================
// Creamos un método llamado mostrarInfo() que imprima en consola
// el nombre, precio, cantidad y total del producto en un solo texto.
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }

  mostrarInfo() {
    const total = this.calcularTotal();
    console.log(
      `Producto: ${this.nombre} | Precio: ${this.precio}€ | Cantidad: ${this.cantidad} | Total: ${total.toFixed(2)}€`
    );
  }
}


// =====================================================
// PASO 5: Crear objetos (instancias) de la clase
// =====================================================
// Ahora vamos a crear varios productos usando "new Producto()"
// y después llamaremos a su método mostrarInfo().
const pan = new Producto("Pan", 1.5, 3);
const leche = new Producto("Leche", 0.95, 6);
const huevos = new Producto("Huevos", 2.8, 2);


// =====================================================
// PASO 6: Probar los métodos en consola
// =====================================================
// Al ejecutar este archivo deberías ver en consola la información
// de cada producto con el total calculado automáticamente.
pan.mostrarInfo();     // Producto: Pan | Precio: 1.5€ | Cantidad: 3 | Total: 4.50€
leche.mostrarInfo();   // Producto: Leche | Precio: 0.95€ | Cantidad: 6 | Total: 5.70€
huevos.mostrarInfo();  // Producto: Huevos | Precio: 2.8€ | Cantidad: 2 | Total: 5.60€




