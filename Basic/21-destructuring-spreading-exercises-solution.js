/*
Ejercicios: Desestructuración y propagación
*/

// 1) Desestructuración: extraer los dos primeros elementos de un array
const numeros = [10, 20, 30, 40];
const [primero, segundo] = numeros; // toma los 2 primeros por orden
console.log("1) primero:", primero, "segundo:", segundo); // 10 20

// 2) Desestructuración con valor predeterminado
const colores = ["rojo"]; // solo trae 1 elemento
const [c1, c2 = "verde"] = colores; // si no hay segundo, usa "verde"
console.log("2) c1:", c1, "c2:", c2); // "rojo" "verde"

// 3) Desestructurar dos propiedades de un objeto
const persona = { nombre: "Ana", edad: 28, ciudad: "Madrid" };
const { nombre, edad } = persona; // los nombres deben coincidir con las claves
console.log("3) nombre:", nombre, "edad:", edad);

// 4) Desestructurar y renombrar variables
const producto = { id: 123, precio: 19.99, nombre: "Camiseta" };
const { precio: costo, nombre: titulo } = producto; // renombramos al volar
console.log("4) costo:", costo, "titulo:", titulo);

// 5) Desestructurar propiedades de un objeto anidado
const usuario = {
  perfil: {
    username: "laura_dev",
    stats: { seguidores: 120, siguiendo: 80 }
  }
};
// extraemos de niveles internos
const { perfil: { username, stats: { seguidores } } } = usuario;
console.log("5) username:", username, "seguidores:", seguidores);

// 6) Propagación (spread) para combinar arrays
const a1 = [1, 2];
const a2 = [3, 4];
const combinado = [...a1, ...a2]; // une los elementos
console.log("6) combinado:", combinado); // [1,2,3,4]

// 7) Propagación para copiar un array (copia superficial)
const original = ["A", "B", "C"];
const copiaArray = [...original]; // nueva referencia, mismos valores
copiaArray.push("D");
console.log("7) original:", original, "copia:", copiaArray);

// 8) Propagación para combinar objetos (si hay mismas claves, gana el de la derecha)
const base = { rol: "user", activo: true };
const extra = { activo: false, plan: "pro" };
const combinadoObj = { ...base, ...extra };
console.log("8) combinadoObj:", combinadoObj); // activo será false

// 9) Propagación para copiar un objeto (copia superficial)
const cliente = { nombre: "Pablo", puntos: 50 };
const copiaObj = { ...cliente };
copiaObj.puntos = 75;
console.log("9) cliente:", cliente, "copiaObj:", copiaObj);

// 10) Combinar desestructuración y propagación
//    - Desestructura algunas partes
//    - Quédate con "el resto"
//    - Combina arrays/objetos con spread
const settings = {
  tema: "claro",
  idioma: "es",
  accesibilidad: { altoContraste: false, fuenteGrande: true },
  notificaciones: true
};

// Desestructuramos algunas claves y guardamos el "resto" con ...rest
const { tema, accesibilidad, ...restoSettings } = settings;
console.log("10a) tema:", tema);
console.log("10a) accesibilidad:", accesibilidad);
console.log("10a) restoSettings:", restoSettings); // { idioma, notificaciones }

// Desestructuramos un array y rearmamos otro con spread
const lista = [100, 200, 300, 400];
const [p1, p2, ...restoLista] = lista; // toma 2 primeros y el resto
const nuevaLista = [p1 + p2, ...restoLista, 500]; // usamos spread para componer
console.log("10b) nuevaLista:", nuevaLista);

// Combinamos objetos con spread y sobreescribimos una parte anidada de forma simple
const overrides = { idioma: "en", notificaciones: false };
const settingsFinal = { ...settings, ...overrides };
// si quisiéramos cambiar solo una subclave de accesibilidad manteniendo lo demás:
const settingsAcc = {
  ...settings,
  accesibilidad: { ...settings.accesibilidad, altoContraste: true }
};
console.log("10c) settingsFinal:", settingsFinal);
console.log("10c) settingsAcc:", settingsAcc);
