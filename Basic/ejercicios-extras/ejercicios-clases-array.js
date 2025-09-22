// -----------------------------------------------------
// Ejercicio progresivo: Arrays dentro de clases
// -----------------------------------------------------
// Versión 1: cada objeto tiene su propio array
// Versión 2: todos los objetos comparten un array global (static)
// -----------------------------------------------------


// =====================================================
// VERSIÓN 1 — Array individual (cada objeto tiene el suyo)
// =====================================================

// PASO 1: Crear una clase básica
class ProductoIndividual {
  constructor(nombre) {
    this.nombre = nombre;
    this.etiquetas = []; // cada producto tendrá su propio array
  }

  // PASO 2: Método para añadir elementos al array del objeto
  anadirEtiqueta(etiqueta) {
    this.etiquetas.push(etiqueta);
  }

  // PASO 3: Método para mostrar el array del objeto
  mostrarEtiquetas() {
    console.log(`Etiquetas de ${this.nombre}:`, this.etiquetas);
  }
}

// PASO 4: Crear productos
const pan = new ProductoIndividual("Pan");
const leche = new ProductoIndividual("Leche");

// PASO 5: Añadir etiquetas a cada producto
pan.anadirEtiqueta("Fresco");
pan.anadirEtiqueta("Integral");

leche.anadirEtiqueta("Desnatada");
leche.anadirEtiqueta("Bio");

// PASO 6: Mostrar resultados (cada uno tiene su propio array)
pan.mostrarEtiquetas();   // ["Fresco", "Integral"]
leche.mostrarEtiquetas(); // ["Desnatada", "Bio"]


// -----------------------------------------------------
// Versión 2 - Continuación del ejercicio Producto con array
// -----------------------------------------------------

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

// Creamos varios productos
const pan = new Producto("Pan", 1.5, 3);
const leche = new Producto("Leche", 0.95, 6);
const huevos = new Producto("Huevos", 2.8, 2);

// Creamos un array con todos los productos
const listaProductos = [pan, leche, huevos];

// Recorremos el array y mostramos la info de cada producto
console.log("=== Lista de productos ===");
listaProductos.forEach((producto) => {
  producto.mostrarInfo();
});

// También podemos calcular el total general
let totalGeneral = 0;
listaProductos.forEach((producto) => {
  totalGeneral += producto.calcularTotal();
});

console.log(`\nTotal de la compra: ${totalGeneral.toFixed(2)}€`);

// =====================================================
// VERSIÓN 3 — Array compartido entre todos los objetos
// (usando static -> más avanzado)
// =====================================================

class ProductoCompartido {
  // Array global que pertenece a la clase
  static lista = [];

  constructor(nombre) {
    this.nombre = nombre;
    // Cada vez que se crea un producto, se guarda en la lista común
    ProductoCompartido.lista.push(this);
  }

  // Método normal de instancia
  mostrarNombre() {
    console.log(`Producto: ${this.nombre}`);
  }

  // Método estático para mostrar todos los productos
  static mostrarTodos() {
    console.log("=== Lista compartida de productos ===");
    ProductoCompartido.lista.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nombre}`);
    });
  }
}

// Crear productos (se guardan solos en la lista compartida)
new ProductoCompartido("Huevos");
new ProductoCompartido("Mantequilla");
new ProductoCompartido("Queso");

// Mostrar todos los productos de la lista global
ProductoCompartido.mostrarTodos();