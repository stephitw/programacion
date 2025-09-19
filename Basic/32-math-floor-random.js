/*1. Math.random()

Devuelve un número decimal aleatorio entre 0 (incluido) y 1 (excluido).

Ejemplo:
console.log(Math.random()); // 0.235, 0.875, 0.004... (cada vez cambia)
*/

/*2. Math.floor()

Redondea un número decimal hacia abajo al entero más cercano.
Ejemplo:

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
*/


/*3. Dado de 1 a 6
let dado1 = Math.floor(Math.random() * 6) + 1;


Math.random() * 6 → genera un número entre 0 y 5.999...

Math.floor(...) → lo convierte en un número entero entre 0 y 5

+ 1 → desplaza el rango a 1–6, como un dado real.

=======> Sin el +1, nunca saldría el 6.
*/

/*4. Pasos entre 20 y 100
let pasosEnMinuto = Math.floor(Math.random() * (100 - 20 + 1)) + 20;


(100 - 20 + 1) → 81 → el total de valores posibles (de 20 a 100, ambos incluidos).

Math.random() * 81 → número entre 0 y 80.999...

Math.floor(...) → número entre 0 y 80.

+ 20 → desplaza el rango a 20–100.

 =======> Sin el +20, los valores serían de 0 a 80, que no es lo que queremos.
 */


 /*
 ========================================
 ============MAS VISUAL==================

Ejemplo: Dado con Math.floor(Math.random() * 6) + 1

Genera un decimal aleatorio

1- Math.random() → 0.0 ........... 0.5 ........... 0.9999


2- Multiplica por 6

0.0 ........... 2.9 ........... 5.999


3- Redondea hacia abajo (Math.floor)

0   1   2   3   4   5


4- Ajusta sumando 1

1   2   3   4   5   6


=======> Ahora tienes un rango de 1 a 6, como un dado real.


Ejemplo: Pasos entre 20 y 100

Math.floor(Math.random() * (100 - 20 + 1)) + 20

1- Math.random()

0.0 .......... 0.5 .......... 0.999


2- Multiplica por (100 - 20 + 1) = 81

0 .......... 40.5 .......... 80.999


3- Math.floor()

0 .......... 40 .......... 80


4- Sumas 20

20 .......... 60 .......... 100


=======> Ahora tienes un rango de 20 a 100.