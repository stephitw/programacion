// EJERCICIOS AVANZADOS

/*
1) Simulador de DPS con críticos y buffs
----------------------------------------
Objetivo: Simular 1000 golpes y calcular el DPS promedio considerando probabilidad de crítico, multiplicador de crítico, buff y debuff.

Instrucciones:
- Define las constantes: baseDamage, attackSpeed, critChance, critMultiplier, buffPercent, debuffPercent, numHits.
- Implementa una función hitDamage() que:
  * Aplique buff y debuff al daño base.
  * Determine si un golpe es crítico usando Math.random() y critChance.
  * Devuelva el daño del golpe (crítico o normal).
- Simula numHits golpes, suma el daño total y calcula el DPS = totalDamage / totalTime, donde totalTime = numHits / attackSpeed.

Salida esperada: Imprimir en consola el DPS promedio con 2 decimales.
Validación: El DPS debe aumentar si subes buffPercent o critMultiplier, y disminuir si critChance es 0.
*/

/*
2) Inventario con capacidad y stacking
--------------------------------------
Objetivo: Implementar un sistema de inventario con capacidad por peso y apilado por ítem.

Instrucciones:
- Dispones de una base de datos itemsDB con { id, name, weight, maxStack }.
- El inventario es un array de stacks { id, qty } y una capacity máxima de peso.
- Implementa:
  * totalWeight(inv): devuelve el peso total.
  * addItem(id, qty): añade ítems respetando maxStack y sin superar capacity. 
  * removeItem(id, qty): elimina cantidad en orden de aparición; borra stacks vacíos.
- Prueba con varias altas y bajas de ítems y muestra inventario y peso.

Salida esperada: Logs con el inventario antes y después, y pesos totales.
Validación: No se debe superar capacity; los stacks nunca deben exceder maxStack.
*/

/*
3) Crafteo con dependencias (orden de receta)
---------------------------------------------
Objetivo: Dado un objeto objetivo (ej: "Espada de Hierro"), obtener el orden de crafteo expandiendo recursivamente sus componentes.

Instrucciones:
- Usa un objeto recipes que mapea producto -> [componentes].
- Implementa una función (DFS) que:
  * Si el objetivo no tiene receta, lo trate como materia prima (“Recolectar: X”).
  * Procese primero todos los componentes y, después, añada la acción “Craftear: Objetivo”.
  * Evita duplicar recolecciones cuando una materia prima se repite.

Salida esperada: Imprimir la secuencia de pasos en el orden correcto.
Validación: Todos los componentes aparecen antes que el producto final; las materias primas se listan como “Recolectar”.
*/

/*
4) Ruta en cuadrícula: posición y energía
-----------------------------------------
Objetivo: Procesar una secuencia de movimientos en una cuadrícula con obstáculos y energía limitada, actualizando posición y energía.

Instrucciones:
- Define un conjunto obstacles con celdas bloqueadas ("x,y").
- Parte desde {x:0, y:0} con energy inicial.
- Dada una lista de movimientos (N, E, S, O) y un coste por movimiento:
  * Si no hay energía suficiente, detener la ruta.
  * Si el siguiente paso es obstáculo, no moverse y penalizar energía extra.
  * En caso contrario, mover y consumir energía normal.
- Al final, muestra posición final y energía restante.

Salida esperada: Logs de eventos (choque con obstáculo, sin energía) y estado final.
Validación: La energía nunca debe ser negativa; las colisiones no cambian la posición.
*/

/*
5) Leaderboard: fusionar y normalizar
-------------------------------------
Objetivo: Fusionar rankings de dos servidores, normalizar nombres (para detectar duplicados), sumar puntuaciones y obtener un Top 5.

Instrucciones:
- Tienes dos arrays serverA y serverB con { name, score }.
- Crea una función norm(name) que:
  * Convierta a minúsculas.
  * Elimine espacios y guiones.
- Fusiona ambos arrays en una estructura acumulativa (p. ej., Map) sumando score por nombre normalizado.
- Convierte a array, ordena descendentemente por score y toma los 5 primeros.

Salida esperada: Imprimir el Top 5 fusionado (nombre normalizado y score total).
Validación: Nombres que solo difieren en mayúsculas/espacios/guiones deben unificarse.
*/

/*
6) Selección de misiones (Knapsack 0/1 por tiempo)
--------------------------------------------------
Objetivo: Elegir el subconjunto de misiones que maximiza XP sin superar un límite de tiempo (en minutos), usando programación dinámica.

Instrucciones:
- Dispones de quests = [{ name, min, xp }, ...] y un timeLimit.
- Implementa una tabla DP donde DP[i][t] sea el mejor XP usando las primeras i misiones con tiempo disponible t.
- Rellena la tabla y reconstruye las misiones elegidas.
- Muestra la lista final, tiempo total usado y XP total.

Salida esperada: Nombres de misiones seleccionadas, tiempo acumulado y XP total.
Validación: El tiempo total no debe exceder timeLimit; la combinación debe ser óptima frente a elecciones obvias subóptimas.
*/
