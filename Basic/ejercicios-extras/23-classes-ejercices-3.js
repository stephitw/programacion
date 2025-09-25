// -----------------------------------------------------
// Ejercicio 4: POO en JavaScript (versión consola)
// -----------------------------------------------------
//
// Instrucciones:
//
// 1) Crea una clase llamada Persona con las propiedades:
//    - nombre
//    - apellidos
//    - email
//    - fechaNacimiento
//
//    Métodos:
//    - getEdad(): devuelve la edad actual en años.
//    - getResumen(): devuelve un string con el formato:
//      "Pepe Fernandez Martinez, 25 años (pepe@espai.es)"
//
// -----------------------------------------------------
//
// 2) Crea una clase Alumno que herede de Persona.
//    - Propiedad adicional: notas (array vacío al inicio).
//
//    Métodos:
//    - anadirNota(nota): añade una nota al array.
//    - mostrarNotas(): imprime en consola todas las notas
//      y la media final.
//      Ejemplo de salida:
//
//      Notas de Pepe Fernandez Martinez:
//        Nota 1: 8
//        Nota 2: 6.5
//        Nota 3: 9
//        Media: 7.83
//
// -----------------------------------------------------
//
// 3) Crea una clase Profesor que herede de Persona.
//    - Propiedades adicionales:
//        dni  (se indica al crear el objeto)
//        alumnos (array vacío al inicio)
//
//    Métodos:
//    - anadirAlumno(alumno): añade un objeto Alumno al array.
//    - mostrarInfoAlumnos(): recorre todos los alumnos e
//      imprime sus datos y notas con la media.
//      Ejemplo de salida:
//
//      Profesor: Marta Sanchez Ruiz, 40 años (marta@espai.es) — DNI: 12345678A
//      Tiene 2 alumnos:
//
//      Pepe Fernandez Martinez, 25 años (pepe@espai.es)
//      Notas de Pepe Fernandez Martinez:
//        Nota 1: 8
//        Nota 2: 6.5
//        Nota 3: 9
//        Media: 7.83
//
//      Laura García Pérez, 22 años (laura@espai.es)
//      Notas de Laura García Pérez:
//        Nota 1: 7
//        Nota 2: 7.5
//        Nota 3: 6
//        Media: 6.83
//
// -----------------------------------------------------
//
// 4) Tarea final:
//    - Crea 2 alumnos y añádeles varias notas.
//    - Crea 1 profesor y asígnale esos alumnos.
//    - Usa TODOS los métodos que has creado para mostrar
//      la información en consola.
// -----------------------------------------------------


// -----------------------------------------------------
// SOLUCIÓN — Ejercicio 4 (versión consola, sin HTML)
// Programación Orientada a Objetos (POO) en JavaScript
// -----------------------------------------------------
// Objetivo:
// - Crear 3 clases: Persona (base), Alumno (hereda), Profesor (hereda).
// - Usar métodos para calcular edad, mostrar resumen, gestionar notas,
//   asignar alumnos a profesor y mostrar toda la info en consola.
// -----------------------------------------------------


// =====================================================
// PASO 1: Clase base "Persona"
// - Propiedades: nombre, apellidos, email, fechaNacimiento
// - Métodos:
//   * getEdad(): devuelve edad en años
//   * getResumen(): "Nombre Apellidos, X años (email)"
// =====================================================
class Persona {
  constructor(nombre, apellidos, email, fechaNacimiento) {
    // Guardamos todo lo que nos pasan al crear el objeto
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    // Convertimos la fecha a objeto Date para poder calcular la edad
    this.fechaNacimiento = new Date(fechaNacimiento);
  }

  // Calcula la edad actual (en años) de forma sencilla
  getEdad() {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();

    // Ajuste si todavía NO ha cumplido años este año
    const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  // Devuelve un texto con nombre completo, edad y email
  getResumen() {
    const edad = this.getEdad(); // aprovechamos el método de arriba
    return `${this.nombre} ${this.apellidos}, ${edad} años (${this.email})`;
  }
}


// =====================================================
// PASO 2: Clase "Alumno" que hereda de Persona
// - Propiedad adicional: notas (array)
// - Métodos:
//   * anadirNota(nota): mete una nota en el array (validación básica)
//   * mostrarNotas(): imprime todas las notas y la media
// =====================================================
class Alumno extends Persona {
  constructor(nombre, apellidos, email, fechaNacimiento) {
    // Llamamos al constructor de Persona para inicializar las propiedades base
    super(nombre, apellidos, email, fechaNacimiento);
    // Iniciamos el array de notas vacío
    this.notas = [];
  }

  // Añadimos una nota (intentamos convertir a número y validamos)
  anadirNota(nota) {
    const numero = Number(nota);
    if (!Number.isFinite(numero)) {
      console.warn(`[AVISO] La nota debe ser un número. Valor recibido:`, nota);
      return;
    }
    this.notas.push(numero);
  }

  // Mostramos todas las notas y la media por consola
  mostrarNotas() {
    console.log(`Notas de ${this.nombre} ${this.apellidos}:`);

    if (this.notas.length === 0) {
      console.log(`  (sin notas)\n`);
      return;
    }

    // Listamos cada nota
    this.notas.forEach((n, i) => {
      console.log(`  Nota ${i + 1}: ${n}`);
    });

    // Calculamos la media (suma / cantidad)
    const suma = this.notas.reduce((acc, n) => acc + n, 0);
    const media = (suma / this.notas.length).toFixed(2);

    console.log(`  Media: ${media}\n`);
  }
}


// =====================================================
// PASO 3: Clase "Profesor" que hereda de Persona
// - Propiedades adicionales: dni (string) y alumnos (array)
// - Métodos:
//   * anadirAlumno(alumno): añade al array (validando que sea Alumno)
//   * mostrarInfoAlumnos(): imprime datos del profesor y de cada alumno
// =====================================================
class Profesor extends Persona {
  constructor(nombre, apellidos, email, fechaNacimiento, dni) {
    super(nombre, apellidos, email, fechaNacimiento);
    this.dni = dni;
    this.alumnos = []; // empezamos con 0 alumnos
  }

  // Añadir un alumno al profesor (validando el tipo)
  anadirAlumno(alumno) {
    if (!(alumno instanceof Alumno)) {
      console.warn(`[AVISO] Solo se pueden añadir instancias de Alumno.`);
      return;
    }
    this.alumnos.push(alumno);
  }

  // Mostrar toda la info: profesor + cada alumno (resumen + notas)
  mostrarInfoAlumnos() {
    console.log(`Profesor: ${this.getResumen()} — DNI: ${this.dni}`);

    if (this.alumnos.length === 0) {
      console.log(`No tiene alumnos asignados.\n`);
      return;
    }

    console.log(`Tiene ${this.alumnos.length} alumno(s):\n`);

    // Recorremos alumnos y mostramos su resumen y sus notas
    this.alumnos.forEach((alumno) => {
      console.log(alumno.getResumen()); // usamos método heredado
      alumno.mostrarNotas();            // usamos método propio de Alumno
    });
  }
}


// =====================================================
// PASO 4: PRUEBAS / DEMOSTRACIÓN (usar TODOS los métodos)
// - Creamos 2 alumnos y les añadimos varias notas
// - Creamos 1 profesor y le asignamos los alumnos
// - Mostramos toda la info en consola
// =====================================================

// Creamos alumnos (formato de fecha recomendado: "YYYY-MM-DD")
const alumno1 = new Alumno("Pepe", "Fernandez Martinez", "pepe@espai.es", "2000-04-10");
const alumno2 = new Alumno("Laura", "García Pérez", "laura@espai.es", "2002-11-28");

// Usamos anadirNota() varias veces (probamos también un valor no válido)
alumno1.anadirNota(8);
alumno1.anadirNota(6.5);
alumno1.anadirNota(9);
alumno1.anadirNota("oops"); // debería avisar que no es un número

alumno2.anadirNota(7);
alumno2.anadirNota(7.5);
alumno2.anadirNota(6);

// Usamos métodos de Persona directamente en los alumnos
console.log("Resumen alumno1:", alumno1.getResumen());
console.log("Edad alumno1 (directa):", alumno1.getEdad(), "años");
console.log("Resumen alumno2:", alumno2.getResumen());
console.log("Edad alumno2 (directa):", alumno2.getEdad(), "años");
console.log("--------------------------------------------------\n");

// Creamos un profesor
const profesor = new Profesor("Marta", "Sanchez Ruiz", "marta@espai.es", "1985-02-15", "12345678A");

// Asignamos alumnos al profesor (probamos validación pasando algo que no es Alumno)
profesor.anadirAlumno(alumno1);
profesor.anadirAlumno(alumno2);
profesor.anadirAlumno({ nombre: "No soy Alumno" }); // debería avisar

// Mostramos toda la información en consola (profesor + alumnos + notas)
profesor.mostrarInfoAlumnos();


// =====================================================
// FIN — Si ejecutas este archivo con Node o en la consola
// del navegador, verás toda la salida ordenada paso a paso.
// =====================================================


// PASO 1: Crear una clase básica
class ProductoIndividual {
  constructor(nombre) {
    this.nombre = nombre;
    this.etiquetas = []; // cada producto tendrá su propio array
  }

  // PASO 2: Método para añadir elementos al array del objeto
  anadirEtiqueta(etiqueta) {
    this.etiquetas.push(etiqueta);
  }

  // PASO 3: Método para mostrar el array del objeto
  mostrarEtiquetas() {
    console.log(`Etiquetas de ${this.nombre}:`, this.etiquetas);
  }
}

// PASO 4: Crear productos
const pan = new ProductoIndividual("Pan");
const leche = new ProductoIndividual("Leche");

// PASO 5: Añadir etiquetas a cada producto
pan.anadirEtiqueta("Fresco");
pan.anadirEtiqueta("Integral");

leche.anadirEtiqueta("Desnatada");
leche.anadirEtiqueta("Bio");

// PASO 6: Mostrar resultados (cada uno tiene su propio array)
pan.mostrarEtiquetas();   // ["Fresco", "Integral"]
leche.mostrarEtiquetas(); // ["Desnatada", "Bio"]


