/************************************************************
EJERCICIOS APLICADOS  (sin funciones)
Nivel: Principiante
Usa la consola del navegador para ver resultados.
************************************************************/


/* ==========================================================
EJERCICIO 1 — TIQUET DEL SUPERMERCADO
Enunciado:
- Tienes un array con los precios de una compra en euros.
- Recorre el array para:
  a) Calcular el total a pagar.
  b) Contar cuántos productos cuestan 10€ o más.
  c) Si el total supera 50€, aplica un 10% de descuento.
- Muestra en consola: total sin descuento, número de productos "caros" (>=10),
  y total final (con o sin descuento).



/* ==========================================================
EJERCICIO 2 — NOTAS DE ALUMNOS
Enunciado:
- Dado un array con notas (0 a 10), muestra:
  a) La media con 2 decimales.
  b) Cuántos aprueban (>=5) y cuántos suspenden (<5).
  c) La nota máxima encontrada.
- No uses funciones; haz los cálculos con bucles y condicionales.


/* ==========================================================
EJERCICIO 3 — PRESUPUESTO MENSUAL
Enunciado:
- Tienes un array de gastos fijos mensuales (alquiler, luz, internet, etc.)
  y otro array de ingresos (nómina, trabajos extra).
- Calcula:
  a) Gasto total.
  b) Ingreso total.
  c) Balance (ingresos - gastos) y di si terminas en positivo, en cero o en negativo.
- Muestra todo en consola.


/* ==========================================================
EJERCICIO 4 — CONTROL DE STOCK SIMPLE
Enunciado:
- Tienes dos arrays paralelos: productos y stock. Cada índice corresponde.
- También tienes un array ventas con unidades vendidas en el día en el mismo orden.
- Resta las ventas del stock y:
  a) Si alguna cantidad baja de 0, corrígela a 0 y muestra un aviso.
  b) Muestra qué productos quedan con stock <= 3 para reponer.
- Imprime el stock final de cada producto.


/* ==========================================================
EJERCICIO 5 — TEMPERATURAS SEMANALES
Enunciado:
- Dado un array con las temperaturas máximas de una semana (7 valores):
  a) Calcula la media con 1 decimal.
  b) Encuentra la mínima y la máxima.
  c) Cuenta cuántos días superaron los 30°C.
  d) Si existe alguna temperatura por debajo de 0°C, muestra un aviso.
- Imprime todos los resultados en consola.

========================================================== */


/************************************************************
SOLUCIONES
************************************************************/


/* ==========================================================
EJERCICIO 1 — TIQUET DEL SUPERMERCADO
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array de precios (ejemplo).
2) Preparar variables acumuladoras: total = 0, caros = 0.
3) Recorrer el array con un for...of:
   - Sumar cada precio a total.
   - Si el precio >= 10, aumentar caros.
4) Comprobar si total > 50 para aplicar descuento (10%).
5) Mostrar los resultados.
========================================================== */
console.log("== EJERCICIO 1 ==");
let precios = [3.50, 12.00, 7.25, 19.90, 4.10, 8.99]; // Paso 1

let total = 0;   // Paso 2
let caros = 0;   // Paso 2

// Paso 3
for (let p of precios) {
  total += p;
  if (p >= 10) {
    caros++;
  }
}

// Paso 4
let total_final = total;
let descuento_aplicado = 0;
if (total > 50) {
  descuento_aplicado = total * 0.10;
  total_final = total - descuento_aplicado;
}

// Paso 5
console.log("Total sin descuento:", total.toFixed(2), "€");
console.log("Productos >= 10€:", caros);
console.log("Descuento aplicado:", descuento_aplicado.toFixed(2), "€");
console.log("Total final:", total_final.toFixed(2), "€");
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — NOTAS DE ALUMNOS
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array de notas (ejemplo).
2) Preparar acumuladores: suma = 0, aprueban = 0, suspenden = 0, max = -Infinity.
3) Recorrer el array:
   - Sumar a suma.
   - Si nota >= 5, contar en aprueban; si no, en suspenden.
   - Actualizar max si la nota actual es mayor.
4) Calcular la media = suma / cantidad_notas.
5) Mostrar resultados en consola.
========================================================== */
console.log("== EJERCICIO 2 ==");
let notas = [4, 6.5, 8, 9.2, 3.7, 5, 7.8]; // Paso 1

let suma = 0;            // Paso 2
let aprueban = 0;        // Paso 2
let suspenden = 0;       // Paso 2
let max = -Infinity;     // Paso 2

// Paso 3
for (let n of notas) {
  suma += n;

  if (n >= 5) {
    aprueban++;
  } else {
    suspenden++;
  }

  if (n > max) {
    max = n;
  }
}

// Paso 4
let media = suma / notas.length;

// Paso 5
console.log("Media:", media.toFixed(2));
console.log("Aprueban:", aprueban);
console.log("Suspenden:", suspenden);
console.log("Nota máxima:", max);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — PRESUPUESTO MENSUAL
--------------------------------------------------------------
Solución paso a paso:
1) Crear los arrays de gastos e ingresos.
2) Calcular gasto_total con un bucle (sumando).
3) Calcular ingreso_total con otro bucle (sumando).
4) balance = ingreso_total - gasto_total.
5) Usar condicionales para indicar la situación del mes.
========================================================== */
console.log("== EJERCICIO 3 ==");
let gastos = [800, 65, 30, 120, 50];     // alquiler, luz, internet, comida, transporte
let ingresos = [1200, 250];              // nómina, extra

// Paso 2
let gasto_total = 0;
for (let g of gastos) {
  gasto_total += g;
}

// Paso 3
let ingreso_total = 0;
for (let i of ingresos) {
  ingreso_total += i;
}

// Paso 4
let balance = ingreso_total - gasto_total;

// Paso 5
console.log("Gasto total:", gasto_total, "€");
console.log("Ingreso total:", ingreso_total, "€");
console.log("Balance:", balance, "€");

if (balance > 0) {
  console.log("Resultado: Mes en positivo.");
} else if (balance === 0) {
  console.log("Resultado: Mes equilibrado (0).");
} else {
  console.log("Resultado: Mes en negativo.");
}
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 4 — CONTROL DE STOCK SIMPLE
--------------------------------------------------------------
Solución paso a paso:
1) Crear arrays: productos, stock, ventas.
2) Recorrer con un for (índices):
   - stock[i] = stock[i] - ventas[i]
   - Si stock[i] < 0, poner stock[i] = 0 y avisar.
3) Recorrer de nuevo y listar los que tengan stock <= 3.
4) Mostrar el stock final de todos los productos.
========================================================== */
console.log("== EJERCICIO 4 ==");
let productos = ["pan", "leche", "huevos", "arroz", "pasta"]; // Paso 1
let stock =     [  5,      2,       12,      1,       4   ];  // Paso 1
let ventas =    [  2,      1,        5,      3,       0   ];  // Paso 1

// Paso 2
for (let i = 0; i < productos.length; i++) {
  stock[i] = stock[i] - ventas[i];

  if (stock[i] < 0) {
    console.log("Aviso:", productos[i], "quedó por debajo de 0. Se corrige a 0.");
    stock[i] = 0;
  }
}

// Paso 3
console.log("Productos para reponer (stock <= 3):");
for (let i = 0; i < productos.length; i++) {
  if (stock[i] <= 3) {
    console.log("-", productos[i], "=>", stock[i], "unidades");
  }
}

// Paso 4
console.log("Stock final:");
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i] + ":", stock[i]);
}
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 5 — TEMPERATURAS SEMANALES
--------------------------------------------------------------
Solución paso a paso:
1) Crear el array de temperaturas de 7 días.
2) Preparar acumuladores: suma = 0, min = +Infinity, max = -Infinity, dias_30 = 0, hay_bajo_cero = false.
3) Recorrer el array:
   - sumar a suma
   - actualizar min y max
   - si t > 30, aumentar dias_30
   - si t < 0, hay_bajo_cero = true
4) Calcular media = suma / 7
5) Mostrar resultados y el posible aviso.
========================================================== */
console.log("== EJERCICIO 5 ==");
let temps = [28, 31, 26, 33, 29, -2, 30]; // Paso 1 (ejemplo)

let suma_t = 0;                 // Paso 2
let min_t = Infinity;           // Paso 2
let max_t = -Infinity;          // Paso 2
let dias_30 = 0;                // Paso 2
let hay_bajo_cero = false;      // Paso 2

// Paso 3
for (let t of temps) {
  suma_t += t;

  if (t < min_t) min_t = t;
  if (t > max_t) max_t = t;

  if (t > 30) dias_30++;

  if (t < 0) hay_bajo_cero = true;
}

// Paso 4
let media_t = suma_t / temps.length;

// Paso 5
console.log("Media:", media_t.toFixed(1), "°C");
console.log("Mínima:", min_t, "°C");
console.log("Máxima:", max_t, "°C");
console.log("Días > 30°C:", dias_30);
if (hay_bajo_cero) {
  console.log("Aviso: hubo al menos un día bajo 0°C.");
}
