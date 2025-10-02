/****************************************************
 * SEMINARIO INTRODUCTORIO A JSON (Principiantes)
 * Archivo: seminario_json.js
 * Autor: [Tu nombre]
 ****************************************************/

/*
-----------------------------------------------------
1. ¿Qué es JSON?
-----------------------------------------------------
- JSON significa JavaScript Object Notation.
- Es un formato de texto ligero para almacenar y transmitir datos.
- Aunque nació en el mundo de JavaScript, lo usan todos los lenguajes.
- Se parece mucho a un objeto de JavaScript, pero tiene reglas más estrictas.

Principales usos:
✅ Guardar datos en archivos (.json)
✅ Intercambiar información entre cliente-servidor (APIs, AJAX)
✅ Configuración de aplicaciones
✅ Bases de datos NoSQL (ej: MongoDB)
*/

/*
-----------------------------------------------------
2. Ejemplo básico de JSON
-----------------------------------------------------
Un JSON contiene pares "clave": valor, dentro de objetos { } o arrays [ ].
*/

const persona = {
  "nombre": "Ana",
  "edad": 25,
  "estudiante": true,
  "cursos": ["HTML", "CSS", "JavaScript"],
  "direccion": {
    "ciudad": "Barcelona",
    "pais": "España"
  }
};

console.log("Ejemplo de persona:", persona);

/*
-----------------------------------------------------
3. Reglas importantes
-----------------------------------------------------
- Las claves SIEMPRE llevan comillas dobles (" ").
- No se permiten comentarios dentro de un archivo JSON.
- Valores permitidos: string, número, boolean, null, array, objeto.
*/

/*
-----------------------------------------------------
4. Cómo crear un archivo JSON
-----------------------------------------------------
1. Abre un editor de texto.
2. Escribe el contenido con la sintaxis correcta.
3. Guarda con extensión .json (ej: datos.json).
Ejemplo: productos.json
[
  {
    "id": 1,
    "nombre": "Camiseta",
    "precio": 19.99,
    "stock": true
  },
  {
    "id": 2,
    "nombre": "Pantalón",
    "precio": 39.99,
    "stock": false
  }
]
*/

/*
-----------------------------------------------------
5. Usos principales de JSON
-----------------------------------------------------
1. Comunicación con APIs (datos desde un servidor).
2. Configuración de aplicaciones.
3. Guardar colecciones de datos.
4. AJAX (ejercicio visto en el Tema 10 del curso).
*/

/*
-----------------------------------------------------
6. Ejemplo práctico con fetch (JavaScript en navegador)
-----------------------------------------------------
Este código carga un archivo JSON llamado productos.json
y lo muestra en consola.
*/

// Nota: Este fragmento funciona en un navegador web con un archivo productos.json
/*
fetch("productos.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log("Contenido del archivo productos.json:", datos);
  });
*/

/*
-----------------------------------------------------
7. Ejercicio para el alumno
-----------------------------------------------------
📌 Crear un archivo llamado miPerfil.json con esta estructura:

{
  "nombre": "Tu nombre",
  "edad": 20,
  "hobbies": ["leer", "dibujar", "viajar"],
  "direccion": {
    "ciudad": "Barcelona",
    "pais": "España"
  }
}

Luego:
1. Validar el archivo en https://jsonlint.com
2. Intentar cargarlo desde JavaScript con fetch y mostrarlo en consola.
*/

/*
-----------------------------------------------------
8. ¿Qué es fetch()?
-----------------------------------------------------
- `fetch()` es una función nativa de JavaScript que sirve para
  hacer peticiones HTTP (GET, POST, etc.) a un servidor.

- La usamos mucho para cargar archivos JSON o conectarnos a APIs.

- fetch devuelve una PROMESA:
  1. Primero trae la respuesta del servidor.
  2. Luego debemos convertir esa respuesta en datos utilizables
     (ej: JSON, texto, etc.).

Sintaxis básica:
fetch("url-del-recurso")
  .then(respuesta => respuesta.json())
  .then(datos => {
    // Aquí trabajamos con los datos
  })
  .catch(error => {
    console.error("Hubo un error:", error);
  });
*/

/*
-----------------------------------------------------
9. Ejemplo práctico con un archivo local JSON
-----------------------------------------------------
Supongamos que tenemos un archivo productos.json con este contenido:

[
  { "id": 1, "nombre": "Camiseta", "precio": 19.99 },
  { "id": 2, "nombre": "Pantalón", "precio": 39.99 }
]

Podemos cargarlo así:
*/

fetch("productos.json")
  .then(respuesta => {
    console.log("Respuesta del servidor:", respuesta);
    return respuesta.json(); // Convertimos la respuesta en JSON
  })
  .then(datos => {
    console.log("Contenido del JSON:", datos); // Array de productos
    // Ejemplo: recorrer los productos
    datos.forEach(producto => {
      console.log("Producto:", producto.nombre, "- Precio:", producto.precio);
    });
  })
  .catch(error => {
    console.error("Error al cargar el JSON:", error);
  });

/*
-----------------------------------------------------
10. Ejemplo práctico con una API pública
-----------------------------------------------------
También podemos usar fetch para obtener datos de Internet.

Ejemplo: API de usuarios de JSONPlaceholder (falsa API para pruebas)
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())
  .then(usuarios => {
    console.log("Usuarios recibidos de la API:");
    usuarios.forEach(u => {
      console.log(u.name, "-", u.email);
    });
  })
  .catch(error => console.error("Error en la API:", error));

/*
-----------------------------------------------------
11. ¿Qué pasa si hay errores?
-----------------------------------------------------
- Si el archivo no existe o la API falla, fetch sigue funcionando,
  pero la promesa entra en `catch`.
- Siempre conviene usar .catch para manejar errores.

Ejemplo:
fetch("archivo-que-no-existe.json")
  .then(r => r.json())
  .then(d => console.log(d))
  .catch(e => console.error("El archivo no se encontró:", e));
*/
// Resumen:

// fetch(url) → pide datos.
// .then(res => res.json()) → convierte la respuesta a JSON.
// .then(datos => {...}) → usamos los datos.
// .catch(error => {...}) → atrapamos errores.