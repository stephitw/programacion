//1. Crea un objeto con 3 propiedades
// Creamos un objeto persona con 3 propiedades
let persona = {
  nombre: "Laura",
  edad: 25,
  ciudad: "Barcelona"
};

console.log("1) Objeto creado:", persona);

//2. Accede y muestra su valor
// Accedemos a cada propiedad con el punto
console.log("2) Nombre:", persona.nombre);
console.log("2) Edad:", persona.edad);
console.log("2) Ciudad:", persona.ciudad);

//3. Agrega una nueva propiedad
// Añadimos una propiedad nueva
persona.profesion = "Diseñadora";
console.log("3) Objeto con nueva propiedad:", persona);

//4. Elimina una de las 3 primeras propiedades
// Eliminamos la propiedad ciudad
delete persona.ciudad;
console.log("4) Objeto tras eliminar ciudad:", persona);

//5. Agrega una función e invócala
// Añadimos una función saludar dentro del objeto
persona.saludar = function() {
  console.log("5) Hola, mi nombre es " + this.nombre);
};

// Llamamos a la función
persona.saludar();

//6. Itera las propiedades del objeto
// Recorremos todas las propiedades con un bucle for...in
console.log("6) Iterando propiedades:");
for (let clave in persona) {
  console.log(clave + ":", persona[clave]);
}

//7. Crea un objeto anidado
// Añadimos un objeto dentro del objeto principal
let personaConDireccion = {
  nombre: "Laura",
  edad: 25,
  direccion: {
    calle: "Gran Via",
    numero: 123,
    ciudad: "Barcelona"
  }
};

console.log("7) Objeto con dirección anidada:", personaConDireccion);

//8. Accede y muestra el valor de las propiedades anidadas
// Accedemos a los datos de direccion
console.log("8) Calle:", personaConDireccion.direccion.calle);
console.log("8) Número:", personaConDireccion.direccion.numero);
console.log("8) Ciudad:", personaConDireccion.direccion.ciudad);

//9. Comprueba si los dos objetos creados son iguales
// Creamos otro objeto igual al primero
let persona2 = {
  nombre: "Laura",
  edad: 25,
  profesion: "Diseñadora"
};

// Comparación directa -> dará false aunque parezcan iguales
console.log("9) ¿persona y persona2 son iguales?:", persona === persona2);

// Para comprobar propiedades específicas:
console.log("9) ¿Tienen el mismo nombre?:", persona.nombre === persona2.nombre);

//10. Comprueba si dos propiedades diferentes son iguales
// Comprobamos si dos propiedades distintas son iguales
console.log("10) ¿Nombre y profesión son iguales?:", persona.nombre === persona.profesion);