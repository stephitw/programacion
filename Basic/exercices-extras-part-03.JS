/*
Ejercicios de Repaso (Videojuegos)
Repasan: variables, tipos de datos, arrays, condicionales, bucles y funciones
*/

// 1. Inventario de un jugador
// Crea un array que guarde los objetos que un jugador tiene en su inventario.
// Añade 3 objetos iniciales (ej: "espada", "escudo", "poción").
// Usa un bucle para mostrar por consola el inventario con el formato:
// "Objeto 1: espada", "Objeto 2: escudo"...


// 2. Puntos de vida
// Declara una variable que represente los puntos de vida de un personaje (ej: 50).
// Si los puntos de vida son mayores que 0, imprime "El jugador sigue vivo".
// Si son iguales a 0, imprime "Game Over".
// Luego simula que recibe un ataque restando 20 puntos de vida con un operador aritmético y muestra el nuevo valor.


// 3. Subida de nivel
// Crea una función que reciba como parámetro la experiencia de un jugador (un número).
// La función debe devolver el nivel alcanzado según estas reglas:
// - Menos de 100 experiencia: nivel 1
// - Entre 100 y 200 experiencia: nivel 2
// - Más de 200 experiencia: nivel 3
// Imprime el resultado llamando a la función con diferentes valores de experiencia.


// 4. Enemigos derrotados
// Declara un array con los puntos obtenidos por derrotar a varios enemigos: [50, 20, 30, 10].
// Usa un bucle para sumar todos los puntos y mostrar el total.
// Después, escribe un condicional que diga:
// - "Victoria" si el total es mayor o igual a 100
// - "Derrota" si el total es menor a 100.


// 5. Sistema de misiones
// Crea un objeto llamado "misión" con las propiedades: nombre, dificultad y completada.
// Después, añade una función al objeto que al ejecutarse imprima:
// "La misión [nombre] con dificultad [dificultad] está [completada o pendiente]".
// Invoca la función para comprobar el resultado.


/*
Ejercicios de Repaso (Videojuegos)
Resueltos paso a paso
*/

// 1. Inventario de un jugador
const inventario = ["espada", "escudo", "poción"]; // Creamos el array con 3 objetos

for (let i = 0; i < inventario.length; i++) { // Recorremos el array con un bucle for
  console.log("Objeto " + (i + 1) + ": " + inventario[i]); // Mostramos índice+1 y el objeto
}

// 2. Puntos de vida
let vida = 50; // Valor inicial
if (vida > 0) {
  console.log("El jugador sigue vivo");
} else if (vida === 0) {
  console.log("Game Over");
}

vida = vida - 20; // Simulamos que recibe daño
console.log("Nueva vida:", vida); // Mostramos el valor actualizado

// 3. Subida de nivel
function calcularNivel(experiencia) {
  // Condicionales para decidir el nivel
  if (experiencia < 100) {
    return 1;
  } else if (experiencia <= 200) {
    return 2;
  } else {
    return 3;
  }
}

console.log("Nivel con 50 de experiencia:", calcularNivel(50));   // Devuelve 1
console.log("Nivel con 150 de experiencia:", calcularNivel(150)); // Devuelve 2
console.log("Nivel con 300 de experiencia:", calcularNivel(300)); // Devuelve 3

// 4. Enemigos derrotados
const puntos = [50, 20, 30, 10]; // Array con puntos de enemigos
let total = 0; // Acumulador

for (let p of puntos) { // Bucle que recorre cada valor del array
  total += p; // Vamos sumando
}
console.log("Total puntos:", total);

if (total >= 100) {
  console.log("Victoria");
} else {
  console.log("Derrota");
}

// 5. Sistema de misiones
const mision = {
  nombre: "Rescatar al aldeano",
  dificultad: "Media",
  completada: false,
  mostrarEstado: function () { // Método dentro del objeto
    const estado = this.completada ? "completada" : "pendiente";
    console.log(
      "La misión " + this.nombre + " con dificultad " + this.dificultad + " está " + estado
    );
  }
};

mision.mostrarEstado(); // Llamamos a la función → muestra que está pendiente
mision.completada = true; // Marcamos la misión como completada
mision.mostrarEstado(); // Llamamos otra vez → muestra que está completada


/***********************
 * 1) Simulador de DPS con críticos y buffs
 * ----------------------------------------
 * Objetivo: simular 1000 golpes y calcular el DPS promedio.
 * Usa: variables, funciones, condicionales, bucles, Math.random
 ************************/

// Paso 1: definir parámetros base
const baseDamage = 120;          // daño base por golpe
const attackSpeed = 1.6;         // golpes por segundo
const critChance = 0.25;         // 25% de crítico
const critMultiplier = 2.0;      // crítico duplica daño
const buffPercent = 0.15;        // buff +15% daño
const debuffPercent = 0.10;      // debuff -10% daño del enemigo (se lo aplicamos al enemigo => sube nuestro daño neto)
const numHits = 1000;            // golpes a simular

// Paso 2: función que calcula daño de un golpe
function hitDamage() {
  // 2a) aplicar buff/debuff al daño base
  const modifiedBase = baseDamage * (1 + buffPercent + debuffPercent);
  // 2b) decidir si el golpe es crítico
  const isCrit = Math.random() < critChance;
  // 2c) si es crítico, multiplicar
  return isCrit ? modifiedBase * critMultiplier : modifiedBase;
}

// Paso 3: bucle de simulación
let totalDamage = 0;
for (let i = 0; i < numHits; i++) {
  totalDamage += hitDamage();
}

// Paso 4: calcular DPS promedio
const totalTime = numHits / attackSpeed;          // tiempo en segundos
const dps = totalDamage / totalTime;

console.log("1) DPS promedio (~1000 golpes):", dps.toFixed(2));


/*************************************
 * 2) Inventario con capacidad y stacking
 * --------------------------------------
 * Objetivo: implementar addItem, removeItem, totalWeight.
 * Usa: objetos, arrays, find, reduce, condicionales.
 *************************************/

// Paso 1: estructura del item { id, name, weight, maxStack }
const itemsDB = {
  potion:   { id: "potion", name: "Poción",   weight: 0.5, maxStack: 10 },
  arrow:    { id: "arrow",  name: "Flecha",   weight: 0.1, maxStack: 50 },
  ore:      { id: "ore",    name: "Mena Fe",  weight: 2.0, maxStack: 20 },
};

// Paso 2: inventario como array de stacks { id, qty }
const capacity = 30; // peso máximo
let inventory = [];

// Paso 3: helpers de peso
function totalWeight(inv) {
  return inv.reduce((acc, s) => acc + s.qty * itemsDB[s.id].weight, 0);
}

// Paso 4: añadir con stacking y límite de peso
function addItem(id, qty) {
  const spec = itemsDB[id];
  if (!spec) return false;

  // 4a) intentar llenar stacks existentes
  let remaining = qty;
  for (const stack of inventory) {
    if (stack.id !== id) continue;
    const canAdd = Math.min(remaining, spec.maxStack - stack.qty);
    if (canAdd > 0) {
      // probar peso hipotético
      const newWeight = totalWeight(inventory) + canAdd * spec.weight;
      if (newWeight > capacity) return false;
      stack.qty += canAdd;
      remaining -= canAdd;
      if (remaining === 0) return true;
    }
  }

  // 4b) crear stacks nuevos si hace falta
  while (remaining > 0) {
    const put = Math.min(remaining, spec.maxStack);
    const newWeight = totalWeight(inventory) + put * spec.weight;
    if (newWeight > capacity) return false;
    inventory.push({ id, qty: put });
    remaining -= put;
  }
  return true;
}

// Paso 5: eliminar ítems (quita de stacks en orden)
function removeItem(id, qty) {
  let remaining = qty;
  for (const stack of inventory) {
    if (stack.id !== id) continue;
    const take = Math.min(stack.qty, remaining);
    stack.qty -= take;
    remaining -= take;
    if (remaining === 0) break;
  }
  // limpiar stacks vacíos
  inventory = inventory.filter(s => s.qty > 0);
  return remaining === 0;
}

// Paso 6: probar
addItem("potion", 7);   // +7 pociones
addItem("arrow", 60);   // se reparte en stacks (50 + 10)
addItem("ore", 5);      // si entra en peso
console.log("2) Inventario:", JSON.stringify(inventory));
console.log("   Peso total:", totalWeight(inventory));

removeItem("arrow", 12);
console.log("   Inventario tras quitar 12 flechas:", JSON.stringify(inventory));
console.log("   Peso total ahora:", totalWeight(inventory));


/**********************************************
 * 3) Crafteo con dependencias (orden de receta)
 * ---------------------------------------------
 * Objetivo: obtener el orden de crafteo de "Espada de Hierro".
 * Usa: objetos, set/map, DFS (recursión), control de visitados.
 **********************************************/

// Paso 1: recetas (producto -> componentes)
const recipes = {
  "Barra de Hierro":   ["Mena Fe", "Mena Fe"],
  "Empuñadura":        ["Madera", "Cuero"],
  "Espada de Hierro":  ["Barra de Hierro", "Barra de Hierro", "Empuñadura"]
};

// Paso 2: DFS para expandir dependencias en orden
function craftOrder(target, seen = new Set(), order = []) {
  // 2a) si no hay receta, es materia prima => solo se "recolecta"
  if (!recipes[target]) {
    if (!seen.has(target)) {
      seen.add(target);
      order.push(`Recolectar: ${target}`);
    }
    return order;
  }
  // 2b) procesar componentes primero
  for (const comp of recipes[target]) {
    craftOrder(comp, seen, order);
  }
  // 2c) luego craftear el objetivo (una vez)
  order.push(`Craftear: ${target}`);
  return order;
}

// Paso 3: ejecutar
const orderForSword = craftOrder("Espada de Hierro", new Set(), []);
console.log("3) Orden de crafteo para 'Espada de Hierro':");
console.log(orderForSword.join(" -> "));


/********************************************
 * 4) Ruta en cuadrícula: posición y energía
 * -----------------------------------------
 * Objetivo: procesar una secuencia de movimientos en una grid con obstáculos.
 * Usa: objetos, arrays, bucle for...of, condicionales.
 ********************************************/

// Paso 1: definir mapa y estado
const obstacles = new Set(["1,2", "2,2", "3,1"]); // celdas bloqueadas
let pos = { x: 0, y: 0 };
let energy = 20;

// Paso 2: movimientos (N,E,S,O) y coste
const moves = ["N","N","E","E","S","E","N","E","E"];
const costPerMove = 1;

// Paso 3: aplicar movimientos si no hay obstáculo ni energía negativa
function step(p, dir) {
  const next = { x: p.x, y: p.y };
  if (dir === "N") next.y += 1;
  if (dir === "S") next.y -= 1;
  if (dir === "E") next.x += 1;
  if (dir === "O") next.x -= 1;
  return next;
}

for (const m of moves) {
  if (energy < costPerMove) {
    console.log("4) Sin energía, ruta detenida.");
    break;
  }
  const next = step(pos, m);
  const key = `${next.x},${next.y}`;
  if (obstacles.has(key)) {
    // chocamos, perdemos energía extra y no avanzamos
    energy -= 2;
    console.log(`4) Obstáculo en ${key}, -2 energía. Posición queda en ${pos.x},${pos.y}`);
    continue;
  }
  // mover y consumir energía normal
  pos = next;
  energy -= costPerMove;
}

console.log(`4) Posición final: (${pos.x},${pos.y}), Energía restante: ${energy}`);


/**************************************
 * 5) Leaderboard: fusionar y normalizar
 * -------------------------------------
 * Objetivo: fusionar rankings de 2 servidores, normalizar nombres,
 * sumar puntuaciones de duplicados y ordenar Top 5.
 * Usa: strings, Map, reduce/sort.
 **************************************/

// Paso 1: rankings
const serverA = [
  { name: "Player-One", score: 3100 },
  { name: "Aria  ",     score: 2900 },
  { name: "noobMaster", score: 1200 },
  { name: "ARIA",       score: 800 }
];

const serverB = [
  { name: "player one", score: 1500 },
  { name: "ProMax",     score: 2700 },
  { name: "Noobmaster", score: 900  }
];

// Paso 2: función de normalización (minúsculas + quitar espacios/guiones)
const norm = s => s.toLowerCase().replace(/[\s-]+/g, "");

// Paso 3: fusionar en un Map acumulando score
const scores = new Map();
for (const row of [...serverA, ...serverB]) {
  const key = norm(row.name);
  scores.set(key, (scores.get(key) || 0) + row.score);
}

// Paso 4: convertir a array y ordenar
const merged = [...scores.entries()]
  .map(([k, score]) => ({ name: k, score }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

console.log("5) Top 5 fusionado:", merged);


/********************************************************
 * 6) Selección de misiones (Knapsack 0/1 por tiempo)
 * --------------------------------------------------
 * Objetivo: elegir misiones para maximizar XP sin pasar
 * un límite de minutos (tiempo total).
 * Usa: programación dinámica (tabla), bucles, arrays.
 ********************************************************/

// Paso 1: misiones con {min, xp}
const quests = [
  { name: "Goblin Camp",  min: 25, xp: 140 },
  { name: "Escort",       min: 15, xp: 70  },
  { name: "Treasure Run", min: 30, xp: 160 },
  { name: "Rescue",       min: 45, xp: 300 },
  { name: "Bounty",       min: 20, xp: 100 }
];

const timeLimit = 60;

// Paso 2: DP[i][t] = mejor XP usando primeras i misiones con tiempo t
const n = quests.length;
const DP = Array.from({ length: n + 1 }, () => Array(timeLimit + 1).fill(0));

// Paso 3: rellenar tabla
for (let i = 1; i <= n; i++) {
  const { min, xp } = quests[i - 1];
  for (let t = 0; t <= timeLimit; t++) {
    // 3a) opción 1: no tomar la misión i-1
    DP[i][t] = DP[i - 1][t];
    // 3b) opción 2: tomarla (si cabe)
    if (min <= t) {
      DP[i][t] = Math.max(DP[i][t], DP[i - 1][t - min] + xp);
    }
  }
}

// Paso 4: reconstruir solución (qué misiones se eligieron)
let t = timeLimit;
const chosen = [];
for (let i = n; i >= 1; i--) {
  if (DP[i][t] !== DP[i - 1][t]) { // la misión i-1 fue tomada
    chosen.push(quests[i - 1]);
    t -= quests[i - 1].min;
  }
}
chosen.reverse();

// Paso 5: mostrar resultado
const totalMin = chosen.reduce((a, q) => a + q.min, 0);
const totalXP  = chosen.reduce((a, q) => a + q.xp, 0);

console.log("6) Misiones elegidas (<= 60 min):", chosen.map(q => q.name));
console.log("   Tiempo total:", totalMin, "min | XP total:", totalXP);
