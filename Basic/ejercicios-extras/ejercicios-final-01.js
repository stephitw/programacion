/************************************************************
EJERCICIOS PARA REPASAR CONDICIONALES Y BUCLES
Nivel: Principiante
Formato: Enunciado + Solución paso a paso
************************************************************/


/* ==========================================================
EJERCICIO 1 — SEMÁFORO
Enunciado:
- Crea una variable con un color del semáforo ("rojo", "amarillo" o "verde").
- Según el color, muestra en consola:
    rojo     -> "Detente"
    amarillo -> "Precaución"
    verde    -> "Sigue"
- Si el color no es válido, muestra "Color no válido".


/* ==========================================================
EJERCICIO 2 — CONTAR HASTA 10
Enunciado:
- Muestra los números del 1 al 10 en consola.
- Si el número es par, añade " (par)" al mensaje.
- Si el número es impar, añade " (impar)".


/* ==========================================================
EJERCICIO 3 — AHORRO SEMANAL
Enunciado:
- Una persona ahorra 5€ cada semana.
- Simula con un bucle while cuánto dinero tiene tras 10 semanas.
- Muestra el ahorro acumulado semana a semana. */



/* ==========================================================
EJERCICIO 4 — LISTA DE NÚMEROS
Enunciado:
- Tienes un array con varios números.
- Recorre el array y cuenta cuántos son mayores o iguales a 50
  y cuántos son menores de 50.
- Al final, muestra ambos resultados.
*/



/************************************************************
SOLUCIONES
************************************************************/


/* ==========================================================
EJERCICIO 1 — SEMÁFORO
--------------------------------------------------------------
Solución paso a paso:
1) Definir una variable con un color.
2) Usar condicionales if / else if / else.
3) Mostrar el mensaje según corresponda.
========================================================== */
console.log("== EJERCICIO 1 ==");
let color = "verde"; // Paso 1

// Paso 2 y 3
if (color === "rojo") {
  console.log("Detente");
} else if (color === "amarillo") {
  console.log("Precaución");
} else if (color === "verde") {
  console.log("Sigue");
} else {
  console.log("Color no válido");
}

console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — CONTAR HASTA 10
--------------------------------------------------------------
Solución paso a paso:
1) Crear un bucle for del 1 al 10.
2) Usar condicional con % 2 para saber si es par o impar.
3) Mostrar el número con su etiqueta correspondiente.
========================================================== */
console.log("== EJERCICIO 2 ==");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " (par)");
  } else {
    console.log(i + " (impar)");
  }
}

console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — AHORRO SEMANAL
--------------------------------------------------------------
Solución paso a paso:
1) Definir variables: ahorro = 0, semana = 1.
2) Mientras semana <= 10:
    - Sumar 5 al ahorro.
    - Mostrar el número de semana y el total acumulado.
    - Aumentar la semana.
========================================================== */
console.log("== EJERCICIO 3 ==");
let ahorro = 0;   // Paso 1
let semana = 1;   // Paso 1

while (semana <= 10) {
  ahorro += 5; // sumamos 5€
  console.log("Semana " + semana + ": " + ahorro + "€");
  semana++; // siguiente semana
}

console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 4 — LISTA DE NÚMEROS
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array de números.
2) Definir contadores: mayores = 0, menores = 0.
3) Recorrer el array con for...of.
4) Usar condicional if / else para clasificar cada número.
5) Mostrar el resultado final.
========================================================== */
console.log("== EJERCICIO 4 ==");
let numeros = [10, 75, 23, 50, 99, 42, 8]; // Paso 1
let mayores = 0;  // Paso 2
let menores = 0;  // Paso 2

for (let n of numeros) { // Paso 3
  if (n >= 50) {        // Paso 4
    mayores++;
  } else {
    menores++;
  }
}

console.log("Números >= 50:", mayores);
console.log("Números < 50:", menores);
