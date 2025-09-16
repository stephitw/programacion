/*Ejercicio 1: Lista de compras
Imagina que vas al supermercado con un presupuesto limitado.
Crea un array con los precios de al menos 5 productos.
Calcula la suma total de los productos usando un bucle.
Crea una variable presupuesto con un número (por ejemplo, 50).
Usa un condicional para mostrar por consola:
"Compra dentro del presupuesto" si el total no supera el presupuesto.
"Has superado el presupuesto" si el total es mayor.
*/



/*Ejercicio 2: Notas de un estudiante
Un estudiante tiene varias notas y queremos saber si aprueba o no.
Crea un array con al menos 5 notas (valores numéricos).
Crea una función que calcule el promedio de esas notas.
Si el promedio es mayor o igual a 6, muestra: "El estudiante aprueba con promedio: X".
Si es menor de 6, muestra: "El estudiante suspende con promedio: X".
*/



/*Ejercicio 3: Control de acceso a un cine
Un cine quiere comprobar si una persona puede entrar a ver una película.
Define tres variables:
edad (por ejemplo, 16),
dinero (por ejemplo, 12),
precioEntrada (por ejemplo, 10).
Crea una función que reciba la edad y el dinero como parámetros.

La función debe comprobar:
Si la persona tiene 18 años o más y dinero suficiente → puede entrar.
Si la persona es menor de 18 → no puede entrar por ser menor.

Si tiene edad suficiente pero no dinero → no puede entrar por falta de dinero.

*/


/********************************************************************************
 * SOLUCIONES 
 * 
 */
// Ejercicio 1: Lista de compras
// Contexto real: Quieres sumar el costo de tu lista de compras y ver si superas tu presupuesto.

// Paso 1: Creamos un array con los precios de los productos
const precios = [12, 5, 20, 8, 15];
const presupuesto = 50;

// Paso 2: Usamos un bucle para sumar
let total = 0;
for (let precio of precios) {
  total += precio; // sumamos cada producto
}

// Paso 3: Condicional para comparar con presupuesto
if (total <= presupuesto) {
  console.log("Compra dentro del presupuesto. Total =", total);
} else {
  console.log("Has superado el presupuesto. Total =", total);
}


/*Repasa:

Variables (total, presupuesto)
Array (precios)
Bucle (for...of)
Condicional (if/else)
Operadores (+=, <=)
*/


// Ejercicio 2: Notas de un estudiante
// Contexto real: Calcular la nota promedio y decidir si el estudiante aprueba.

// Paso 1: Array de notas
const notas = [7, 5, 9, 6, 8];

// Paso 2: Función para calcular promedio
function calcularPromedio(arr) {
  let suma = 0;
  for (let nota of arr) {
    suma += nota;
  }
  return suma / arr.length;
}

// Paso 3: Condicional para ver si aprueba
const promedio = calcularPromedio(notas);

if (promedio >= 6) {
  console.log("El estudiante aprueba con promedio:", promedio);
} else {
  console.log("El estudiante suspende con promedio:", promedio);
}


/*Repasa:

Variables (notas, promedio)
Función (calcularPromedio)
Bucle (for...of)
Condicional (if/else)
*/


// Ejercicio 3: Control de acceso a un cine
// Contexto real: Comprobar si una persona puede entrar al cine según su edad y si tiene dinero suficiente.

// Paso 1: Variables de una persona
const edad = 16;
const dinero = 12;
const precioEntrada = 10;

// Paso 2: Función que comprueba condiciones
function puedeEntrar(edad, dinero) {
  if (edad >= 18 && dinero >= precioEntrada) {
    return "Puedes entrar al cine";
  } else if (edad < 18) {
    return "No puedes entrar: eres menor de edad";
  } else {
    return "No tienes suficiente dinero";
  }
}

// Paso 3: Llamada a la función
console.log(puedeEntrar(edad, dinero));


/*Repasa:

Variables simples
Condicionales múltiples (if, else if, else)
Operadores lógicos (&&)
Función con parámetros y return
*/