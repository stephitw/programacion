/************************************************************
EJERCICIOS INTEGRADOS (Funciones + Objetos + Bucles)
Nivel: Intermedio
Usa la consola del navegador para ver los resultados.
************************************************************/


/* ==========================================================
EJERCICIO 1 — GESTOR DE ALUMNOS (medias, ranking y aprobados)
Enunciado:
- Tienes un array de objetos "alumnos" con {id, nombre, notas: []}.
- Crea estas funciones:
  a) calcularMedia(alumno): devuelve la media (número con 2 decimales).
  b) aprobaron(alumnos): devuelve un nuevo array con los nombres de quienes tienen media >= 5.
  c) topN(alumnos, n): devuelve los n alumnos con mejor media (array de objetos).
- Muestra: medias de todos, lista de aprobados y el top 3 ordenado por media desc.



/* ==========================================================
EJERCICIO 2 — CARRITO DE COMPRA (añadir, quitar, total con IVA y cupón)
Enunciado:
- Tienes un "catálogo" (array de objetos): {id, nombre, precio}.
- El "carrito" es un array de ítems {idProducto, unidades}.
- Implementa:
  a) addItem(carrito, idProducto, unidades): si ya existe, suma unidades; si no, lo añade.
  b) removeItem(carrito, idProducto): elimina el ítem por id (EXPLICACIÓN DE splice).
  c) totalCarrito(carrito, catalogo, iva, cupon): devuelve el total con IVA (ej. 0.21) y
     aplica cupón de descuento (ej. "SAVE10" => 10%). Si cupón no válido, 0%.
- Muestra el total sin cupón, con cupón "SAVE10", y el carrito final.



/* ==========================================================
EJERCICIO 3 — TABLERO KANBAN (mover tareas y métricas)
Enunciado:
- Un tablero tiene columnas: "pendiente", "en_progreso", "hecho".
- Tareas: objetos {id, titulo, prioridad: "alta"|"media"|"baja", estado}.
- Implementa:
  a) moverTarea(tareas, id, nuevoEstado): cambia el estado si es válido.
  b) contarPorEstado(tareas): devuelve un objeto {pendiente, en_progreso, hecho}.
  c) filtrarPorPrioridad(tareas, prioridad): devuelve array con las que coinciden.
- Muestra: el conteo por estado, mueve 2 tareas y vuelve a contar; lista las de prioridad "alta".



/* ==========================================================
EJERCICIO 4 — ANALIZADOR DE TEXTO (frecuencias de palabras)
Enunciado:
- Dado un texto (string), queremos:
  a) normalizar a minúsculas y quitar puntuación básica (.,;:!?¿¡).
  b) partir en palabras por espacios.
  c) construir un diccionario (objeto) de frecuencias { palabra: conteo }.
  d) topK(diccionario, k) => array con las k palabras más frecuentes
     en formato [{palabra, veces}] ordenadas desc por "veces".
- Muestra el diccionario y el top 5.



/* ==========================================================
EJERCICIO 5 — PROCESAR PEDIDOS CONTRA STOCK (reporte de faltantes)
Enunciado:
- stock: objeto con claves SKU y valores de unidades disponibles, p.ej.
  { "A-1": 5, "B-2": 0, "C-3": 7 }
- pedidos: array con pedidos {id, items: [{sku, unidades}]}.
- Implementa procesarPedidos(stock, pedidos) que:
  a) intente satisfacer cada ítem restando del stock disponible;
  b) si no alcanza, consume lo posible y reporta faltantes por pedido;
  c) devuelve un objeto { stockFinal, reportes }, donde reportes es un array:
     [{idPedido, faltantes: [{sku, pedido, servido, falta}]}].
- Muestra el stock final y los reportes de faltantes.


/************************************************************
SOLUCIONES
************************************************************/


/* ==========================================================
EJERCICIO 1 — GESTOR DE ALUMNOS (medias, ranking y aprobados)
--------------------------------------------------------------
Solución paso a paso:
1) Definir el array de alumnos.
2) Implementar calcularMedia recorriendo alumno.notas y devolviendo la media con Number(...) para 2 decimales.
3) Implementar aprobaron: recorrer alumnos, usar calcularMedia y construir nuevo array solo con nombres aprobados.
4) Implementar topN:
   - construir array de copias { ...alumno, media } (EXPLICACIÓN DEL OPERADOR SPREAD).
   - ordenar por media desc y devolver los n primeros.
5) Imprimir los resultados.
========================================================== */
console.log("== EJERCICIO 1 ==");
const alumnos = [
  { id: 1, nombre: "Ana",   notas: [6, 7.5, 4.5, 8] },
  { id: 2, nombre: "Luis",  notas: [3, 5, 4, 4.5]   },
  { id: 3, nombre: "Sara",  notas: [9, 8.5, 9.2, 10]},
  { id: 4, nombre: "Pablo", notas: [5, 5, 5, 5]     },
  { id: 5, nombre: "Lia",   notas: [7, 6, 7, 7.5]   }
]; // Paso 1

// Paso 2
function calcularMedia(alumno) {
  let suma = 0;
  for (const n of alumno.notas) suma += n;
  const media = suma / alumno.notas.length;
  return Number(media.toFixed(2));
}

// Paso 3
function aprobaron(lista) {
  const aprobados = [];
  for (const a of lista) {
    const m = calcularMedia(a);
    if (m >= 5) aprobados.push(a.nombre);
  }
  return aprobados;
}

// Paso 4
function topN(lista, n) {
  const conMedia = [];
  for (const a of lista) {
    // EXPLICACIÓN:
    // { ...a, media: calcularMedia(a) }
    // - ...a  => OPERADOR SPREAD (propagación): copia TODAS las propiedades del objeto a
    //           sin modificar el original (id, nombre, notas).
    // - media: calcularMedia(a) => añade una propiedad nueva "media" con el resultado de la función.
    // Resultado: una "copia enriquecida" del alumno con su media ya calculada.
    conMedia.push({ ...a, media: calcularMedia(a) });
  }
  conMedia.sort((x, y) => y.media - x.media);
  return conMedia.slice(0, n);
}

// Paso 5
for (const a of alumnos) {
  console.log(a.nombre, "-> media:", calcularMedia(a));
}
console.log("Aprobados:", aprobaron(alumnos));
console.log("Top 3:", topN(alumnos, 3));
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 2 — CARRITO DE COMPRA (añadir, quitar, total con IVA y cupón)
--------------------------------------------------------------
Solución paso a paso:
1) Definir catálogo y carrito inicial.
2) Crear addItem (recorrer carrito, comprobar id, sumar o push).
3) Crear removeItem:
   - buscar índice con bucle,
   - si existe, eliminar con splice (EXPLICACIÓN).
4) Crear totalCarrito: acumular precios, aplicar IVA y cupón.
5) Probar operaciones.
========================================================== */
console.log("== EJERCICIO 2 ==");
const catalogo = [
  { id: "A1", nombre: "Teclado",   precio: 25.0 },
  { id: "B2", nombre: "Ratón",     precio: 15.0 },
  { id: "C3", nombre: "Monitor",   precio: 120.0 },
  { id: "D4", nombre: "USB-C Hub", precio: 35.0 }
]; // Paso 1

let carrito = []; // Paso 1

// Paso 2
function addItem(car, idProducto, unidades) {
  let encontrado = false;
  for (const item of car) {
    if (item.idProducto === idProducto) {
      item.unidades += unidades;
      encontrado = true;
      break;
    }
  }
  if (!encontrado) car.push({ idProducto, unidades });
}

// Paso 3
function removeItem(car, idProducto) {
  let idx = -1;
  for (let i = 0; i < car.length; i++) {
    if (car[i].idProducto === idProducto) { idx = i; break; }
  }
  // EXPLICACIÓN:
  // - indexOf/búsqueda devuelve -1 si NO encuentra; un índice >= 0 si encuentra.
  // - if (idx !== -1) => "si hemos encontrado el elemento…"
  // - car.splice(idx, 1) elimina 1 elemento en la posición idx, modificando el array original.
  if (idx !== -1) car.splice(idx, 1);
}

// Paso 4
function totalCarrito(car, cat, iva, cupon) {
  let subtotal = 0;
  for (const item of car) {
    let precio = 0;
    for (const p of cat) {
      if (p.id === item.idProducto) { precio = p.precio; break; }
    }
    subtotal += precio * item.unidades;
  }
  let conIva = subtotal * (1 + iva);
  let descuento = 0;
  if (cupon === "SAVE10") descuento = conIva * 0.10;
  if (cupon === "SAVE20") descuento = conIva * 0.20;
  const total = conIva - descuento;
  return Number(total.toFixed(2));
}

// Paso 5 (pruebas)
addItem(carrito, "A1", 2);
addItem(carrito, "B2", 1);
addItem(carrito, "C3", 1);
addItem(carrito, "A1", 1); // acumula
console.log("Carrito inicial:", carrito);

console.log("Total sin cupón (IVA 21%):", totalCarrito(carrito, catalogo, 0.21, "").toFixed(2));
console.log("Total con SAVE10:", totalCarrito(carrito, catalogo, 0.21, "SAVE10").toFixed(2));

removeItem(carrito, "B2"); // elimina por id
console.log("Carrito tras quitar B2:", carrito);
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 3 — TABLERO KANBAN (mover tareas y métricas)
--------------------------------------------------------------
Solución paso a paso:
1) Definir array de tareas.
2) Implementar moverTarea: validar estado y actualizar.
3) Implementar contarPorEstado: recorrer y acumular en objeto.
4) Implementar filtrarPorPrioridad: recorrer y recolectar.
5) Probar y mostrar resultados.
========================================================== */
console.log("== EJERCICIO 3 ==");
const tareas = [
  { id: 1, titulo: "Brief cliente",     prioridad: "alta",  estado: "pendiente"   },
  { id: 2, titulo: "Wireframes",        prioridad: "media", estado: "pendiente"   },
  { id: 3, titulo: "Landing MVP",       prioridad: "alta",  estado: "en_progreso" },
  { id: 4, titulo: "Pruebas QA",        prioridad: "baja",  estado: "pendiente"   },
  { id: 5, titulo: "Deploy producción", prioridad: "alta",  estado: "pendiente"   }
]; // Paso 1

// Paso 2
function moverTarea(lista, id, nuevoEstado) {
  const validos = ["pendiente", "en_progreso", "hecho"];
  let ok = false;
  for (const t of lista) {
    if (t.id === id) {
      if (validos.includes(nuevoEstado)) {
        t.estado = nuevoEstado;
        ok = true;
      }
      break;
    }
  }
  return ok;
}

// Paso 3
function contarPorEstado(lista) {
  const contador = { pendiente: 0, en_progreso: 0, hecho: 0 };
  for (const t of lista) {
    if (t.estado in contador) contador[t.estado]++;
  }
  return contador;
}

// Paso 4
function filtrarPorPrioridad(lista, prioridad) {
  const out = [];
  for (const t of lista) if (t.prioridad === prioridad) out.push(t);
  return out;
}

// Paso 5
console.log("Conteo inicial:", contarPorEstado(tareas));
moverTarea(tareas, 2, "en_progreso");
moverTarea(tareas, 3, "hecho");
console.log("Conteo tras mover:", contarPorEstado(tareas));
console.log("Prioridad alta:", filtrarPorPrioridad(tareas, "alta"));
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 4 — ANALIZADOR DE TEXTO (frecuencias de palabras)
--------------------------------------------------------------
Solución paso a paso:
1) Definir el texto.
2) Normalizar:
   - toLowerCase convierte todo a minúsculas.
   - replace(/[.,;:!?¿¡]/g, " ") reemplaza signos por espacio (EXPLICACIÓN REGEX).
3) Dividir en palabras:
   - split(/\s+/) separa por 1 o más espacios (EXPLICACIÓN),
   - filter(w => w.length > 0) elimina vacíos.
4) Construir el diccionario.
5) Implementar topK: pasar a pares, ordenar desc, cortar.
6) Mostrar resultados.
========================================================== */
console.log("== EJERCICIO 4 ==");
const texto = "Hola hola, ¿qué tal? Hola; bien: tal vez bien. Bien bien!"; // Paso 1

// Paso 2: normalizar
let limpio = texto.toLowerCase()
  // EXPLICACIÓN:
  // .replace(/[.,;:!?¿¡]/g, " ")
  // - /[.,;:!?¿¡]/ es una EXPRESIÓN REGULAR que define un conjunto de caracteres
  //   a buscar: punto, coma, punto y coma, dos puntos, admiración/interrogación (incluye ¿¡).
  // - 'g' => bandera "global": reemplaza TODAS las apariciones, no solo la primera.
  // - " " => se reemplaza cada signo por un ESPACIO para separar palabras correctamente.
  .replace(/[.,;:!?¿¡]/g, " ");

// Paso 3: dividir y limpiar
// EXPLICACIÓN:
// - split(/\s+/) => divide por uno o más espacios en blanco (tab, salto de línea, espacios).
// - filter(w => w.length > 0) => elimina entradas vacías (cadenas de longitud 0).
const palabras = limpio.split(/\s+/).filter(w => w.length > 0);

// Paso 4: construir diccionario de frecuencias
const dict = {};
for (const w of palabras) {
  if (!dict[w]) dict[w] = 0;
  dict[w]++;
}

// Paso 5
function topK(dic, k) {
  const pares = [];
  for (const clave in dic) {
    pares.push({ palabra: clave, veces: dic[clave] });
  }
  pares.sort((a, b) => b.veces - a.veces);
  return pares.slice(0, k);
}

// Paso 6
console.log("Diccionario de frecuencias:", dict);
console.log("Top 5:", topK(dict, 5));
console.log(""); // Línea en blanco



/* ==========================================================
EJERCICIO 5 — PROCESAR PEDIDOS CONTRA STOCK (reporte de faltantes)
--------------------------------------------------------------
Solución paso a paso:
1) Definir stock y pedidos.
2) Implementar procesarPedidos:
   - clonar stock en un nuevo objeto para no mutar el original.
   - recorrer pedidos e items:
     * usar "?? 0" para tratar undefined como 0 (EXPLICACIÓN).
     * construir objetos faltantes con literales abreviados (EXPLICACIÓN).
   - devolver { stockFinal, reportes }.
3) Ejecutar y mostrar resultados.
========================================================== */
console.log("== EJERCICIO 5 ==");
const stockInicial = { "A-1": 5, "B-2": 0, "C-3": 7, "D-4": 3 }; // Paso 1
const pedidos = [
  { id: "P001", items: [{ sku: "A-1", unidades: 2 }, { sku: "B-2", unidades: 1 }] },
  { id: "P002", items: [{ sku: "C-3", unidades: 5 }, { sku: "D-4", unidades: 4 }] },
  { id: "P003", items: [{ sku: "A-1", unidades: 4 }] }
]; // Paso 1

// Paso 2
function procesarPedidos(stock, pedidos) {
  const stockFinal = {};
  for (const k in stock) stockFinal[k] = stock[k];

  const reportes = [];

  for (const pedido of pedidos) {
    const faltantes = [];

    for (const it of pedido.items) {
      // EXPLICACIÓN:
      // const disponible = stockFinal[it.sku] ?? 0;
      // - ?? es el OPERADOR DE COALESCENCIA NULA (nullish coalescing).
      // - Toma el valor de la izquierda salvo que sea null o undefined;
      //   si fuera null/undefined, usa 0.
      // - Aquí significa: si no existe ese SKU en stockFinal, tratamos como 0 disponible.
      const disponible = stockFinal[it.sku] ?? 0;

      const pedir = it.unidades;

      let servido = 0;
      if (disponible >= pedir) {
        stockFinal[it.sku] = disponible - pedir;
        servido = pedir;
      } else {
        stockFinal[it.sku] = 0;
        servido = disponible;
        const falta = pedir - servido;

        // EXPLICACIÓN:
        // faltantes.push({ sku: it.sku, pedido: pedir, servido, falta });
        // - Objeto literal con "propiedad: valor". Para "servido" y "falta"
        //   usamos la SINTAXIS ABREVIADA de propiedades (shorthand):
        //   { servido, falta } equivale a { servido: servido, falta: falta }.
        // - Este objeto documenta cuánto se pidió, cuánto se sirvió y qué faltó.
        faltantes.push({ sku: it.sku, pedido: pedir, servido, falta });
      }
    }

    if (faltantes.length > 0) {
      reportes.push({ idPedido: pedido.id, faltantes });
    }
  }

  return { stockFinal, reportes };
}

// Paso 3
const resultado = procesarPedidos(stockInicial, pedidos);
console.log("Stock final:", resultado.stockFinal);
console.log("Reportes de faltantes:", resultado.reportes);
