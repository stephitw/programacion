/************************************************************
EJERCICIOS CON FUNCIONES (Nivel: Principiante)
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO 1 — SALUDO PERSONALIZADO
Enunciado:
- Crea una función llamada saludar que reciba un nombre como parámetro.
- La función debe mostrar en consola: "Hola, <nombre>!".
- Llama a la función varias veces con diferentes nombres.



/* ==========================================================
EJERCICIO 2 — SUMA DE DOS NÚMEROS (FUNCIÓN CON RETORNO)
Enunciado:
- Crea una función llamada sumar que reciba dos números.
- La función debe devolver la suma (usar return).
- Llama a la función y guarda el resultado en una variable.
- Muestra el resultado en consola.



/* ==========================================================
EJERCICIO 3 — CALCULAR EL PROMEDIO DE UN ARRAY
Enunciado:
- Crea una función llamada promedio que reciba un array de números.
- La función debe calcular la media y devolverla.
- Prueba la función con un array de notas.



/* ==========================================================
EJERCICIO 4 — VERIFICAR MAYORÍA DE EDAD
Enunciado:
- Crea una función llamada esMayorEdad que reciba una edad.
- Si la edad es mayor o igual a 18, devuelve true, si no, false.
- Usa condicional if/else dentro de la función.
- Prueba con varios valores de edad y muestra los resultados.


/* ==========================================================
EJERCICIO 5 — CONVERTIR CELSIUS A FAHRENHEIT
Enunciado:
- Crea una función llamada celsiusAFahrenheit que reciba una temperatura en grados Celsius.
- La fórmula de conversión es: F = C * 9/5 + 32.
- Devuelve la temperatura en Fahrenheit.
- Prueba la función con varios valores.


/************************************************************
SOLUCIONES
************************************************************/


/* ==========================================================
EJERCICIO 1 — SALUDO PERSONALIZADO
--------------------------------------------------------------
Solución paso a paso:
1) Definir la función saludar con un parámetro.
2) Dentro, usar console.log para imprimir el saludo.
3) Invocar la función con distintos nombres.
========================================================== */
console.log("== EJERCICIO 1 ==");
function saludar(nombre) {         // Paso 1
  console.log("Hola, " + nombre + "!");  // Paso 2
}

// Paso 3
saludar("Ana");
saludar("Pedro");
saludar("Lucía");
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — SUMA DE DOS NÚMEROS (FUNCIÓN CON RETORNO)
--------------------------------------------------------------
Solución paso a paso:
1) Definir la función sumar con dos parámetros.
2) Usar return para devolver la suma.
3) Invocar la función y guardar en una variable.
4) Mostrar el resultado en consola.
========================================================== */
console.log("== EJERCICIO 2 ==");
function sumar(a, b) {       // Paso 1
  return a + b;              // Paso 2
}

// Paso 3
let resultado = sumar(5, 7);

// Paso 4
console.log("La suma es:", resultado);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — CALCULAR EL PROMEDIO DE UN ARRAY
--------------------------------------------------------------
Solución paso a paso:
1) Definir la función promedio con un parámetro (array).
2) Recorrer el array sumando los valores.
3) Dividir la suma entre la longitud del array.
4) Devolver el resultado (return).
5) Probar la función con un array de notas.
========================================================== */
console.log("== EJERCICIO 3 ==");
function promedio(numeros) {     // Paso 1
  let suma = 0;                  // Paso 2
  for (let n of numeros) {
    suma += n;
  }
  let media = suma / numeros.length; // Paso 3
  return media;                  // Paso 4
}

// Paso 5
let notas = [6, 8, 9, 5, 7];
console.log("Notas:", notas);
console.log("Promedio:", promedio(notas).toFixed(2));
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 4 — VERIFICAR MAYORÍA DE EDAD
--------------------------------------------------------------
Solución paso a paso:
1) Definir la función esMayorEdad con parámetro edad.
2) Usar condicional if/else para devolver true o false.
3) Llamar a la función con varios valores y mostrar resultado.
========================================================== */
console.log("== EJERCICIO 4 ==");
function esMayorEdad(edad) {    // Paso 1
  if (edad >= 18) {             // Paso 2
    return true;
  } else {
    return false;
  }
}

// Paso 3
console.log("Edad 15:", esMayorEdad(15));
console.log("Edad 20:", esMayorEdad(20));
console.log("Edad 18:", esMayorEdad(18));
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 5 — CONVERTIR CELSIUS A FAHRENHEIT
--------------------------------------------------------------
Solución paso a paso:
1) Definir la función con parámetro celsius.
2) Aplicar la fórmula de conversión.
3) Devolver el valor convertido.
4) Probar con distintos grados Celsius.
========================================================== */
console.log("== EJERCICIO 5 ==");
function celsiusAFahrenheit(celsius) {  // Paso 1
  let fahrenheit = celsius * 9 / 5 + 32; // Paso 2
  return fahrenheit;                     // Paso 3
}

// Paso 4
console.log("0°C =", celsiusAFahrenheit(0), "°F");
console.log("25°C =", celsiusAFahrenheit(25), "°F");
console.log("100°C =", celsiusAFahrenheit(100), "°F");
