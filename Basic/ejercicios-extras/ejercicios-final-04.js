/************************************************************
EJERCICIOS CON OBJETOS (Nivel: Principiante)
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO 1 — PERFIL DE ESTUDIANTE
Enunciado:
- Crea un objeto "estudiante" con propiedades: nombre, edad, grupo,
  notas (array de números) y activo (boolean).
- Muestra: nombre y grupo.
- Actualiza: suma 1 a la edad y añade una nueva nota al array.
- Calcula la media de las notas con un bucle.
- Añade una propiedad nueva "curso" y elimina la propiedad "activo".
- Muestra las claves (Object.keys) y los valores (Object.values) del objeto.


/* ==========================================================
EJERCICIO 2 — PRODUCTO DE TIENDA
Enunciado:
- Crea un objeto "producto" con: id, nombre, precio (número),
  stock (número), categorias (array), ubicacion (objeto con pasillo y estante).
- Si el stock es mayor o igual a 20, aplica un descuento del 10% al precio.
- Aumenta el stock en 5 unidades.
- Muestra el nombre del producto, el precio final y el stock actualizado.
- Añade una propiedad "disponible" (true si stock > 0, false si no).


/* ==========================================================
EJERCICIO 3 — BIBLIOTECA SIMPLE
Enunciado:
- Crea un objeto "libro" con: titulo, autor, año, prestado (boolean),
  etiquetas (array).
- Muestra el título y autor.
- Cambia el estado de prestado a true.
- Añade una nueva etiqueta al array.
- Recorre todas las propiedades del objeto con un bucle for...in
  y muestra clave y valor en consola.


/************************************************************
EJERCICIOS CON OBJETOS (Nivel: Principiante)
Formato: Enunciado + Solución paso a paso (listo para pegar en .js)
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO 1 — PERFIL DE ESTUDIANTE
--------------------------------------------------------------
Solución paso a paso:
1) Definir el objeto literal con las propiedades indicadas.
2) Mostrar nombre y grupo.
3) Actualizar edad y añadir una nota al array (push).
4) Recorrer "notas" con un for para calcular la media.
5) Añadir "curso" y eliminar "activo".
6) Usar Object.keys y Object.values para listar estructura del objeto.
========================================================== */
console.log("== EJERCICIO 1 ==");
let estudiante = {                      // Paso 1
  nombre: "Ana López",
  edad: 18,
  grupo: "1B",
  notas: [7.5, 8, 6.3],
  activo: true
};

// Paso 2
console.log("Nombre:", estudiante.nombre);
console.log("Grupo:", estudiante.grupo);

// Paso 3
estudiante.edad = estudiante.edad + 1;
estudiante.notas.push(9.0);

// Paso 4
let sumaNotas = 0;
for (let i = 0; i < estudiante.notas.length; i++) {
  sumaNotas += estudiante.notas[i];
}
let mediaNotas = sumaNotas / estudiante.notas.length;
console.log("Media de notas:", mediaNotas.toFixed(2));

// Paso 5
estudiante.curso = "JavaScript Básico";
delete estudiante.activo;

// Paso 6
console.log("Claves:", Object.keys(estudiante));
console.log("Valores:", Object.values(estudiante));
console.log("Objeto final:", estudiante);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — PRODUCTO DE TIENDA
--------------------------------------------------------------
Solución paso a paso:
1) Crear objeto con propiedades indicadas.
2) Comprobar si stock >= 20, aplicar descuento al precio.
3) Aumentar el stock en 5.
4) Mostrar nombre, precio final y stock actualizado.
5) Añadir propiedad "disponible" según el stock.
========================================================== */
console.log("== EJERCICIO 2 ==");
let producto = {                  // Paso 1
  id: "P-101",
  nombre: "Auriculares",
  precio: 50,
  stock: 22,
  categorias: ["Electrónica", "Audio"],
  ubicacion: {
    pasillo: 3,
    estante: "B"
  }
};

// Paso 2
if (producto.stock >= 20) {
  producto.precio = producto.precio * 0.9;
}

// Paso 3
producto.stock += 5;

// Paso 4
console.log("Producto:", producto.nombre);
console.log("Precio final:", producto.precio.toFixed(2), "€");
console.log("Stock actualizado:", producto.stock);

// Paso 5
producto.disponible = producto.stock > 0;
console.log("Disponible:", producto.disponible);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — BIBLIOTECA SIMPLE
--------------------------------------------------------------
Solución paso a paso:
1) Crear el objeto libro con propiedades.
2) Mostrar título y autor.
3) Cambiar prestado a true.
4) Añadir etiqueta al array etiquetas (push).
5) Recorrer con for...in todas las propiedades y mostrarlas.
========================================================== */
console.log("== EJERCICIO 3 ==");
let libro = {                  // Paso 1
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  año: 1943,
  prestado: false,
  etiquetas: ["clásico", "infantil"]
};

// Paso 2
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

// Paso 3
libro.prestado = true;

// Paso 4
libro.etiquetas.push("filosófico");

// Paso 5
for (let propiedad in libro) {
  console.log(propiedad + ":", libro[propiedad]);
}
