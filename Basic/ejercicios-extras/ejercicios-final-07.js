/************************************************************
OBJETOS → CLASES (Nivel: Principiante–Intermedio)
Dos ejercicios basados en objetos a un enfoque con clases.
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO A — CLASE Estudiante (a partir de “Perfil de estudiante”)
Enunciado:
- Crea una clase Estudiante con: nombre, edad, grupo, notas (array), activo (boolean).
- Métodos:
  1) cumplirAnios(): suma 1 a la edad.
  2) anadirNota(valor): añade una nueva nota al array.
  3) media(): devuelve la media de las notas con 2 decimales (number).
  4) asignarCurso(nombreCurso): añade la propiedad curso al objeto.
  5) desactivar(): elimina la propiedad activo (simulando el ejercicio original).
- Crea una instancia, muestra nombre y grupo, cumple años, añade una nota,
  muestra la media, asigna curso, elimina “activo” y finalmente muestra claves y valores.



/* ==========================================================
EJERCICIO B — CLASE Producto (a partir de “Producto de tienda”)
Enunciado:
- Crea una clase Producto con: id, nombre, precio (número), stock (número),
  categorias (array), ubicacion (objeto { pasillo, estante }).
- Métodos:
  1) aplicarDescuentoPorStock(umbral, porcentaje): si stock >= umbral, aplica descuento (porcentaje 0–1).
  2) reponer(unidades): suma unidades al stock.
  3) get disponible(): getter que devuelve true si stock > 0.
  4) info(): devuelve una cadena con nombre, precio y stock formateados.
- Crea una instancia, aplica descuento si corresponde, repón stock, muestra info y “disponible”.

/************************************************************
OBJETOS → CLASES (Nivel: Principiante–Intermedio)
Convierte dos ejercicios basados en objetos a un enfoque con clases.
Formato: Enunciado + Solución paso a paso (listo para pegar en .js)
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO A — CLASE Estudiante (a partir de “Perfil de estudiante”)
--------------------------------------------------------------
Solución paso a paso:
1) Define la clase con constructor para inicializar las propiedades.
2) Implementa los métodos pedidos.
3) Crea una instancia con datos de ejemplo.
4) Invoca los métodos en orden y muestra resultados con console.log.
5) Lista claves y valores con Object.keys / Object.values.
========================================================== */
console.log("== EJERCICIO A ==");
class Estudiante {
  // Paso 1: constructor
  constructor(nombre, edad, grupo, notas = [], activo = true) {
    this.nombre = nombre;
    this.edad = edad;
    this.grupo = grupo;
    this.notas = Array.isArray(notas) ? notas : [];
    this.activo = activo;
  }

  // Paso 2: métodos
  cumplirAnios() {
    this.edad = this.edad + 1;
  }

  anadirNota(valor) {
    this.notas.push(valor);
  }

  media() {
    let suma = 0;
    for (const n of this.notas) suma += n;
    const m = suma / this.notas.length;
    return Number(m.toFixed(2));
  }

  asignarCurso(nombreCurso) {
    this.curso = nombreCurso;
  }

  desactivar() {
    // Eliminamos la propiedad, igual que en el ejercicio con objetos
    delete this.activo;
  }
}

// Paso 3: crear instancia
const est1 = new Estudiante("Ana López", 18, "1B", [7.5, 8, 6.3], true);

// Paso 4: usar los métodos y mostrar resultados
console.log("Nombre:", est1.nombre);
console.log("Grupo:", est1.grupo);

est1.cumplirAnios();
console.log("Edad tras cumpleaños:", est1.edad);

est1.anadirNota(9.0);
console.log("Notas actuales:", est1.notas);

console.log("Media de notas:", est1.media());

est1.asignarCurso("JavaScript Básico");
console.log("Curso:", est1.curso);

est1.desactivar();
console.log("¿Propiedad 'activo' existe?", "activo" in est1);

// Paso 5: claves y valores
console.log("Claves:", Object.keys(est1));
console.log("Valores:", Object.values(est1));
console.log("Objeto final:", est1);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO B — CLASE Producto (a partir de “Producto de tienda”)
--------------------------------------------------------------
Solución paso a paso:
1) Define la clase con constructor y propiedades.
2) Implementa los métodos (incluye un getter para disponible).
3) Crea una instancia de ejemplo.
4) Aplica descuento si stock >= umbral y repón unidades.
5) Muestra la información final del producto.
========================================================== */
console.log("== EJERCICIO B ==");
class Producto {
  // Paso 1: constructor
  constructor(id, nombre, precio, stock, categorias = [], ubicacion = { pasillo: 0, estante: "A" }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categorias = Array.isArray(categorias) ? categorias : [];
    this.ubicacion = ubicacion;
  }

  // Paso 2: métodos
  aplicarDescuentoPorStock(umbral, porcentaje) {
    // porcentaje en formato decimal (ej: 0.10 para 10%)
    if (this.stock >= umbral) {
      this.precio = this.precio * (1 - porcentaje);
    }
  }

  reponer(unidades) {
    this.stock += unidades;
  }

  get disponible() {
    return this.stock > 0;
  }

  info() {
    return `Producto: ${this.nombre} | Precio: ${this.precio.toFixed(2)}€ | Stock: ${this.stock}`;
  }
}

// Paso 3: crear instancia de ejemplo
const prod1 = new Producto(
  "P-101",
  "Auriculares",
  50,
  22,
  ["Electrónica", "Audio"],
  { pasillo: 3, estante: "B" }
);

// Paso 4: aplicar descuento por stock y reponer
prod1.aplicarDescuentoPorStock(20, 0.10); // si stock >= 20, -10%
prod1.reponer(5); // +5 unidades de stock

// Paso 5: mostrar información
console.log(prod1.info());
console.log("Disponible:", prod1.disponible);
console.log("Ubicación:", `Pasillo ${prod1.ubicacion.pasillo}, Estante ${prod1.ubicacion.estante}`);
console.log("Categorías:", prod1.categorias);
