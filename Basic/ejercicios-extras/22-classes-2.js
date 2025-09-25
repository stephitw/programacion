class Compra {
 // propiedad estática (pertenece a la clase, no a los objetos de dicha clase)
 static GASTOS_DE_ENVIO_GRATIS = 50;
 // método estático (pertenece a la clase, no a los objetos de dicha clase)
 static calcularTotalCarrito(compras) {
 // devuelve el total de un array de objetos de la clase Compra
 var total = 0.0;
 compras.forEach(function(compra) {
 total += compra.totalImporte;
 });
 // gastos de envío gratis?
 if (total >= Compra.GASTOS_DE_ENVIO_GRATIS) { // accedemos a la propiedad estática
 console.log("¡Gastos de envío gratis!");
 }
 return total;
 }
 // el constructor inicializa las propiedades de la clase
 constructor(nombre, cantidad, precio) {
 this.nombre = nombre;
 this.cantidad = cantidad;
 this.precio = precio;
 }
 // get convierte este método en una pseudo-propiedad
 get totalImporte() {
 return this.cantidad * this.precio;
 }
 // método convencional de la clase
 mostrar() {
 document.write("<p>" + this.nombre + ": " + this.totalImporte + "€</p>");
 }
}
// carrito de la compra (array de objetos de la clase Compra)
let carrito = [
 new Compra("Producto A", 10, 5.25),
 new Compra("Producto B", 5, 2.75),
 new Compra("Producto C", 2, 19.95)
];
// usamos el método calcularTotalCarrito() de la clase Compra; es un método estático!
var total = Compra.calcularTotalCarrito(carrito);
console.log("Importe del carrito:" + total + "€");

// correcto! Accedemos a la propiedad mediante el nombre de la clase
console.log(Compra.GASTOS_DE_ENVIO_GRATIS);
// incorrecto! No podemos acceder a la propiedad mediante un objeto de dicha clase
var compra1 = new Compra("Producto A", 10, 5.25)
console.log(compra1.GASTOS_DE_ENVIO_GRATIS);