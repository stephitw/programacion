// -----------------------------------------------------
// Ejercicio: Productos en oferta con array estático
// -----------------------------------------------------
//
// Enunciado:
//
// 1) Crea una clase llamada Producto con las siguientes propiedades:
//    - nombre (string)
//    - precio (number)
//    - cantidad (number)
//    - enOferta (boolean: true o false)
//
// 2) Dentro de la clase, define un array estático llamado "lista".
//    Este array debe guardar automáticamente TODOS los productos creados.
//
// 3) Añade los siguientes métodos a la clase:
//    - calcularTotal(): devuelve el precio * cantidad.
//    - mostrarInfo(): imprime en consola toda la información del producto,
//      incluyendo si está en oferta (true/false).
//    - mostrarOfertas() [estático]: recorre la lista y muestra solo los
//      productos cuyo enOferta sea true.
//
// 4) Crea al menos 4 productos, algunos con oferta true y otros con false.
//
// 5) Muestra primero todos los productos y luego solo los que están en oferta.
//    Ejemplo de salida:
//
//    === Todos los productos ===
//    Pan | Precio: 1.5€ | Cantidad: 3 | Total: 4.50€ | Oferta: true
//    Leche | Precio: 0.95€ | Cantidad: 6 | Total: 5.70€ | Oferta: false
//    Huevos | Precio: 2.8€ | Cantidad: 2 | Total: 5.60€ | Oferta: true
//    Mantequilla | Precio: 3.2€ | Cantidad: 1 | Total: 3.20€ | Oferta: false
//
//    === Productos en OFERTA ===
//    Pan | Precio: 1.5€ | Cantidad: 3 | Total: 4.50€ | Oferta: true
//    Huevos | Precio: 2.8€ | Cantidad: 2 | Total: 5.60€ | Oferta: true
//
// -----------------------------------------------------
//
// Pistas para los alumnos:
// - Usa "static lista = [];" para definir el array compartido por la clase.
// - Dentro del constructor, haz que cada producto nuevo se añada solo:
//     Producto.lista.push(this);
// - Para mostrar solo los productos en oferta, usa:
//     Producto.lista.filter(p => p.enOferta === true);
//
// -----------------------------------------------------


class Producto {
  // Array estático que guardará TODOS los productos
  static lista = [];

  constructor(nombre, precio, cantidad, enOferta) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.enOferta = enOferta; // true o false

    // Cada vez que se crea un producto, se mete en la lista global
    Producto.lista.push(this);
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }

  mostrarInfo() {
    console.log(
      `${this.nombre} | Precio: ${this.precio}€ | Cantidad: ${this.cantidad} | Total: ${this.calcularTotal().toFixed(2)}€ | Oferta: ${this.enOferta}`
    );
  }

  // Método estático para mostrar SOLO productos en oferta
  static mostrarOfertas() {
    const enOferta = Producto.lista.filter(p => p.enOferta === true);
    console.log("=== Productos en OFERTA ===");
    enOferta.forEach(p => p.mostrarInfo());
  }
}

// Creamos productos (se añaden solos al array estático)
new Producto("Pan", 1.5, 3, true);
new Producto("Leche", 0.95, 6, false);
new Producto("Huevos", 2.8, 2, true);
new Producto("Mantequilla", 3.2, 1, false);

// Mostrar todos los productos
console.log("=== Todos los productos ===");
Producto.lista.forEach(p => p.mostrarInfo());

// Mostrar solo los productos en oferta
console.log("");
Producto.mostrarOfertas();
