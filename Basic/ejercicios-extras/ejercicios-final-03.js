/************************************************************
EJERCICIOS DE ARRAYS (nivel un poco más complejo, SIN funciones)
Incluye métodos: splice, slice, concat, indexOf, includes, push,
pop, shift, unshift, reverse, sort (en cadenas)
************************************************************/


/* ==========================================================
EJERCICIO 1 — LISTA DE TAREAS DE UN EQUIPO
Enunciado:
- Partimos de una lista de tareas (cadenas de texto).
- Operaciones a realizar (usa métodos de array):
  1) Añade dos tareas al final (push).
  2) Añade una tarea urgente al principio (unshift).
  3) Reemplaza la tarea "Preparar briefing" por "Revisar briefing"
     usando indexOf + splice.
  4) Elimina la tarea "Enviar presupuesto" (indexOf + splice).
  5) Muestra una vista previa con las 3 primeras tareas (slice).
  6) Invierte el orden temporal de la lista (reverse) y muéstrala.
========================================================== */


/* ==========================================================
EJERCICIO 2 — CONTROL DE PRODUCTOS EN UN ALMACÉN
Enunciado:
- Tenemos dos arrays paralelos: codigos y cantidades (mismo índice).
- Llega un envío nuevo (arrays nuevos) y debemos unirlo (concat).
- Luego:
  1) Comprueba si existe el código "A-102". Si existe, súmale +5 unidades.
  2) Quita por completo el producto con código "B-500" (eliminar código y cantidad con splice en ambos arrays).
  3) Inserta en la posición 1 un nuevo producto "Z-999" con 12 unidades (splice).
  4) Muestra por consola el listado final "CODIGO - CANTIDAD" en orden alfabético por código (sort en cadenas).
     NOTE: reordena AMBOS arrays en paralelo según el orden de codigos.


/* ==========================================================
EJERCICIO 3 — HORARIOS DE CLASES (GESTIÓN CON SLOTS)
Enunciado:
- Tenemos un horario (array de cadenas "HH:MM") para un aula.
- Reglas y cambios (usa métodos de array):
  1) Si ya existe "10:00", no lo dupliques; si no existe, añádelo al final (includes + push).
  2) El slot "13:00" se cancela: elimínalo si existe (indexOf + splice).
  3) Mueve "09:00" a la última posición (quitar con splice y volver a insertar con push).
  4) Inserta "11:30" justo antes de "12:00" (buscar índice de "12:00" e insertar con splice).
  5) Muestra una copia de los slots de la mañana (todo lo anterior a "12:00") usando slice con el índice donde está "12:00".
  6) Ordena los horarios alfabéticamente (sort) y muéstralos.
========================================================== */


/************************************************************
SOLUCIONES
************************************************************/


/* ==========================================================
EJERCICIO 1 — LISTA DE TAREAS DE UN EQUIPO
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array inicial.
2) push para añadir al final.
3) unshift para añadir al principio.
4) indexOf para ubicar "Preparar briefing" y splice para reemplazar.
5) indexOf para ubicar "Enviar presupuesto" y splice para eliminar.
6) slice(0,3) para vista previa.
7) reverse() para invertir.
========================================================== */
console.log("== EJERCICIO 1 ==");
let tareas = ["Reunión kick-off", "Preparar briefing", "Enviar presupuesto"]; // Paso 1

// Paso 2
tareas.push("Diseñar propuesta", "Revisar feedback");

// Paso 3
tareas.unshift("Tarea urgente: confirmar agenda");

// Paso 4
let idxBrief = tareas.indexOf("Preparar briefing");
if (idxBrief !== -1) {
  // Reemplazar (1 elemento) por "Revisar briefing"
  tareas.splice(idxBrief, 1, "Revisar briefing");
}

// Paso 5
let idxPresu = tareas.indexOf("Enviar presupuesto");
if (idxPresu !== -1) {
  tareas.splice(idxPresu, 1); // eliminar 1
}

// Paso 6
let vistaPrevia = tareas.slice(0, 3);

// Paso 7
let invertida = tareas.slice(); // copiamos para no perder la original en este punto
invertida.reverse();

console.log("Tareas (actual):", tareas);
console.log("Vista previa (primeras 3):", vistaPrevia);
console.log("Tareas invertidas:", invertida);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — CONTROL DE PRODUCTOS EN UN ALMACÉN
--------------------------------------------------------------
Solución paso a paso:
1) Crear arrays codigos y cantidades.
2) Crear llegadaCodigos y llegadaCantidades y unir con concat.
3) Buscar "A-102" con indexOf y sumar +5.
4) Buscar "B-500" con indexOf y eliminar en ambos arrays con splice.
5) Usar splice para insertar "Z-999" y 12 en la posición 1.
6) Ordenar por código: obtener copia de índices ordenados y reordenar en paralelo.
========================================================== */
console.log("== EJERCICIO 2 ==");
let codigos =    ["A-100", "B-500", "A-102", "C-210"];   // Paso 1
let cantidades = [     8,      3,       10,      5  ];   // Paso 1

let llegadaCodigos =    ["D-050", "A-120"];              // Paso 2
let llegadaCantidades = [     2,       6   ];            // Paso 2

// Unir con concat (Paso 2)
codigos = codigos.concat(llegadaCodigos);
cantidades = cantidades.concat(llegadaCantidades);

// Paso 3: sumar +5 a A-102 si existe
let idxA102 = codigos.indexOf("A-102");
if (idxA102 !== -1) {
  cantidades[idxA102] += 5;
}

// Paso 4: eliminar B-500 en ambos arrays
let idxB500 = codigos.indexOf("B-500");
if (idxB500 !== -1) {
  codigos.splice(idxB500, 1);
  cantidades.splice(idxB500, 1);
}

// Paso 5: insertar Z-999 en posición 1
codigos.splice(1, 0, "Z-999");
cantidades.splice(1, 0, 12);

// Paso 6: ordenar por código y reordenar cantidades en paralelo
// 6.1) Creamos pares [codigo, cantidad]
let pares = [];
for (let i = 0; i < codigos.length; i++) {
  pares.push([codigos[i], cantidades[i]]);
}
// 6.2) Orden lexicográfico por el primer elemento (cadenas)
// OJO: sort sin función usa orden lexicográfico en cadenas, aquí sirve.
pares.sort(); // ordena por el primer valor del par (el código)
// 6.3) Reconstruimos arrays
codigos = [];
cantidades = [];
for (let i = 0; i < pares.length; i++) {
  codigos.push(pares[i][0]);
  cantidades.push(pares[i][1]);
}

console.log("Listado final (ordenado):");
for (let i = 0; i < codigos.length; i++) {
  console.log(codigos[i] + " - " + cantidades[i]);
}
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — HORARIOS DE CLASES (GESTIÓN CON SLOTS)
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array horario.
2) includes + push para "10:00".
3) indexOf + splice para eliminar "13:00".
4) indexOf + splice/push para mover "09:00" al final.
5) indexOf de "12:00" y splice para insertar "11:30" antes.
6) slice(0, idxDe12) para copia de la mañana.
7) sort() para ordenar y mostrar.
========================================================== */
console.log("== EJERCICIO 3 ==");
let horario = ["08:00", "09:00", "12:00", "13:00", "15:00"]; // Paso 1

// Paso 2: añadir "10:00" si no existe
if (!horario.includes("10:00")) {
  horario.push("10:00");
}

// Paso 3: eliminar "13:00" si existe
let idx1300 = horario.indexOf("13:00");
if (idx1300 !== -1) {
  horario.splice(idx1300, 1);
}

// Paso 4: mover "09:00" al final
let idx0900 = horario.indexOf("09:00");
if (idx0900 !== -1) {
  // extraer "09:00"
  let extraido = horario.splice(idx0900, 1)[0]; // devuelve array; tomamos el elemento 0
  // insertar al final
  horario.push(extraido);
}

// Paso 5: insertar "11:30" antes de "12:00"
let idx1200 = horario.indexOf("12:00");
if (idx1200 !== -1) {
  horario.splice(idx1200, 0, "11:30");
}

// Paso 6: copia de la mañana (antes de "12:00")
idx1200 = horario.indexOf("12:00"); // recalculamos por si cambió
let manana = [];
if (idx1200 !== -1) {
  manana = horario.slice(0, idx1200);
}

// Paso 7: ordenar horarios
// Para "HH:MM" como cadenas, sort() funciona (orden lexicográfico coincide con horario).
let horarioOrdenado = horario.slice();
horarioOrdenado.sort();

console.log("Horario actual:", horario);
console.log("Slots de la mañana (copia):", manana);
console.log("Horario ordenado:", horarioOrdenado);
