/***************************************************
 * OBJETIVO DEL ARCHIVO:
 * 1) Al pulsar "Cargar JSON", pedimos productos.json.
 * 2) Pintamos los datos en una tabla HTML.
 * 3) Permitimos filtrar por texto.
 ***************************************************/

/* 0) Tomamos referencias a los elementos del HTML */
const btnCargar = document.getElementById("btnCargar");
const buscador  = document.getElementById("buscador");
const statusEl  = document.getElementById("status");
const tabla     = document.getElementById("tabla");
const thead     = tabla.querySelector("thead");
const tbody     = tabla.querySelector("tbody");

/* Variables para guardar los datos */
let datosOriginales = [];  // aquí guardamos todo lo que llega del JSON
let datosMostrados  = [];  // aquí guardamos lo que se ve (tras filtrar)

/* 1) Cuando el alumno pulsa el botón, cargamos el JSON */
btnCargar.addEventListener("click", cargarJSON);

/* 2) Cuando escribe en el buscador, filtramos lo que se ve */
buscador.addEventListener("input", () => {
  const texto = buscador.value.trim().toLowerCase();
  filtrar(texto);
  pintarTabla(datosMostrados);
});

/* ---------------- FUNCIONES SIMPLES ---------------- */

/* A) Mostrar mensajes en pantalla (estado) */
function setStatus(mensaje, tipo = "info") {
  // tipos: "info" o "error"
  statusEl.style.color = tipo === "error" ? "#b00020" : "#666";
  statusEl.textContent = mensaje || "";
}

/* B) Cargar el archivo productos.json con fetch */
async function cargarJSON() {
  setStatus("Cargando datos...");

  try {
    // Pedimos el archivo. IMPORTANTE: abrir con servidor local (Live Server)
    const res = await fetch("33-productos.json", { cache: "no-store" });

    // Si la respuesta no es correcta (404, 500...), avisamos
    if (!res.ok) {
      throw new Error("No se pudo cargar el archivo (HTTP " + res.status + ")");
    }

    // Convertimos la respuesta a datos JS (array de objetos)
    const datos = await res.json();

    // Comprobamos que sea un array
    if (!Array.isArray(datos)) {
      throw new Error("El JSON debe empezar por [ ... ] (un array).");
    }

    // Guardamos los datos y pintamos la tabla
    datosOriginales = datos;
    datosMostrados  = [...datosOriginales];

    // Pintamos por primera vez (sin filtro)
    pintarTabla(datosMostrados);
    setStatus("Datos cargados correctamente.");
  } catch (err) {
    console.error(err);
    setStatus("Error: " + err.message, "error");
  }
}

/* C) Pintar la tabla: crea cabecera y filas a partir de los datos */
function pintarTabla(datos) {
  // 1. Limpio lo que hubiera antes
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // 2. Si no hay datos, muestro un mensaje sencillo
  if (!datos.length) {
    tbody.innerHTML = `<tr><td colspan="99">No hay datos para mostrar.</td></tr>`;
    return;
  }

  // 3. Creo la CABECERA con las claves del primer objeto
  const claves = Object.keys(datos[0]); // ej: ["id","nombre","precio","stock"]
  const filaCabecera = document.createElement("tr");

  for (const clave of claves) {
    const th = document.createElement("th");
    th.textContent = clave; // nombre de la columna
    filaCabecera.appendChild(th);
  }
  thead.appendChild(filaCabecera);

  // 4. Creo el CUERPO con cada objeto como una fila
  for (const item of datos) {
    const tr = document.createElement("tr");

    for (const clave of claves) {
      const td = document.createElement("td");
      const valor = item[clave];

      // Pequeño formateo para que se vea amigable
      if (typeof valor === "boolean") {
        td.textContent = valor ? "Sí" : "No";
      } else {
        td.textContent = valor;
      }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
}

/* D) Filtrar: nos quedamos con las filas que incluyan el texto */
function filtrar(texto) {
  if (!texto) {
    // si no hay texto, mostramos todo
    datosMostrados = [...datosOriginales];
    setStatus(""); // quitamos mensaje
    return;
  }

  // Pasamos cada fila a string y buscamos si incluye el texto
  datosMostrados = datosOriginales.filter((fila) => {
    // Object.values(fila) devuelve un array con los valores de la fila
    // .some() devuelve true si alguno incluye el texto
    return Object.values(fila)
      .map((v) => String(v).toLowerCase())
      .some((v) => v.includes(texto));
  });

  setStatus(`Filtrado por: "${texto}"`);
}

/* ---------------- FIN DEL CÓDIGO BÁSICO ---------------- */

/* NOTA para el alumno:
   - No intentes abrir index.html haciendo doble clic.
   - Usa un "servidor local":
     * Con VS Code, instala la extensión "Live Server" y abre index.html con ella.
     * O en terminal: `python -m http.server 5500` y luego ve a http://localhost:5500
*/
