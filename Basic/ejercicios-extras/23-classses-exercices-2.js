// Crea (mediante class) UNA ÚNICA CLASE llamada Planeta que contenga la siguiente información (asegúrate de usar propiedades convencionales [del objeto] o estáticas [de la clase] según corresponda): 
// • Nombre del planeta (1). 
// • Velocidad de la luz. 
// • Masa del planeta (1). 
// • Masa total de los planetas creados (2). 
// • Número de lunas del planeta (1). 
// • Radio del planeta (1). 
// • Número total de planetas creados (2). 
// (1) Estos valores deben de poder indicarse al crear el objeto (en su constructor). 
// (2) Estos números deben de actualizarse correctamente al crear un objeto de la clase Planeta. Después crea algunos objetos de prueba de dicha clase y comprueba que los valores de “número total de planetas creados” y “masa total de los planetas creados” sea correcto.

/*Paso a paso 

Creamos la clase Planeta.
Propiedades estáticas (de la clase):
velocidadLuz: es la misma para todos → estática.
numeroTotalCreados y masaTotalCreados: contadores globales → estáticas.
Propiedades de cada objeto (instancia):
nombre, masa, lunas, radio → se pasan al constructor.
Actualizamos contadores estáticos en el constructor cada vez que se crea un nuevo planeta.
Creamos varios planetas de prueba y comprobamos en consola el total de planetas y la masa total.*/

// -------------------------------------------
// Ejercicio: Clase única Planeta (principiante)
// Guarda este archivo como planetas.js y ejecútalo con Node
// o pégalo en la consola del navegador.
// -------------------------------------------

class Planeta {
  // ---- Propiedades estáticas (de la clase) ----
  // Misma para todos los planetas -> estática
  static velocidadLuz = 299_792_458; // metros por segundo (m/s)

  // Acumuladores globales
  static numeroTotalCreados = 0;
  static masaTotalCreados = 0; // en kilogramos (kg)

  // ---- Constructor: propiedades de cada planeta (instancia) ----
  // (1) Estos valores se indican al crear el objeto
  constructor(nombre, masaKg, numeroLunas, radioMetros) {
    this.nombre = nombre;           // string
    this.masa = masaKg;             // number (kg)
    this.lunas = numeroLunas;       // number
    this.radio = radioMetros;       // number (m)

    // (2) Actualizamos contadores globales al crear un planeta
    Planeta.numeroTotalCreados += 1;
    Planeta.masaTotalCreados += masaKg;
  }
}

// ---- PRUEBAS ----
// Creamos algunos planetas de ejemplo
const tierra  = new Planeta("Tierra",   5.972e24,  1, 6_371_000);
const marte   = new Planeta("Marte",    6.417e23,  2, 3_389_500);
const jupiter = new Planeta("Júpiter",  1.898e27, 95, 69_911_000);

// Mostramos info de cada planeta (opcional)
console.log("=== Planetas creados ===");
console.log(tierra);
console.log(marte);
console.log(jupiter);

// Comprobaciones solicitadas
console.log("\n=== Comprobaciones globales (estáticas) ===");
console.log("Velocidad de la luz (m/s):", Planeta.velocidadLuz);
console.log("Número total de planetas creados:", Planeta.numeroTotalCreados);

// Usamos notación científica para que se vea claro el tamaño del número
console.log(
  "Masa total de los planetas creados (kg):",
  Planeta.masaTotalCreados.toExponential(4)
);

// (Opcional) Pequeña verificación manual:
if (Planeta.numeroTotalCreados === 3) {
  console.log(" El 'número total de planetas creados' es correcto (3).");
} else {
  console.log("Revisa el conteo de planetas.");
}

// Nota: La masa total debería ser aproximadamente ~1.9046e+27 kg
