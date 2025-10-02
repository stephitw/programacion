/****************************************************
 * DEMO: Cargar JSON y mostrarlo en una tabla
 * con filtro por texto y orden por columnas
 * Paso a paso explicado en comentarios
 ****************************************************/
// [
//   { "id": 1, "nombre": "Camiseta", "precio": 19.99, "stock": true,  "categoria": "Ropa" },
//   { "id": 2, "nombre": "Pantalón", "precio": 39.99, "stock": false, "categoria": "Ropa" },
//   { "id": 3, "nombre": "Zapatillas", "precio": 59.5, "stock": true,  "categoria": "Calzado" },
//   { "id": 4, "nombre": "Gorra", "precio": 12.0, "stock": true,      "categoria": "Accesorios" }
// ]
// ----------------------------------------------------
// 0) PREPARACIÓN
// ----------------------------------------------------
// - Asegúrate de tener tres archivos en la misma carpeta:
//   1) index.html   → la estructura de la página
//   2) productos.json → los datos en formato JSON
//   3) app.js       → este código
// - Ejecuta con un servidor local (Live Server, XAMPP, Python http.server...)
//   porque fetch no funciona si abres el archivo directamente desde disco.

// ----------------------------------------------------
// 1) SELECCIONAR ELEMENTOS DEL DOM Y DEFINIR ESTADO
// ----------------------------------------------------
const $ = (sel) => document.querySelector(sel);
const tabla = $("#tabla");
const thead = tabla.querySelector("thead");
const tbody = tabla.querySelector("tbody");
const btnCargar = $("#btnCargar");
const buscador = $("#buscador");
const statusEl = $("#status");
const contadorEl = $("#contador");

let datosOriginales = [];        // Copia intacta de lo que trae el JSON
let datosFiltrados = [];         // Lo que se muestra tras aplicar filtros
let orden = { clave: null, dir: 1 }; // Estado de ordenación (columna y dirección)

// ----------------------------------------------------
// 2) FUNCIONES DE UTILIDAD
// ----------------------------------------------------

// Mostrar mensajes de estado (ej: "Cargando...", "Error", etc.)
function setStatus(msg, { loading = false, error = false } = {}) {
  const spin = loading ? ` <span class="spinner"></span>` : "";
  statusEl.style.color = error ? "#b00020" : "#555";
  statusEl.innerHTML = msg ? msg + spin : "";
}

// ----------------------------------------------------
// 3) FUNCIÓN PRINCIPAL: Cargar el JSON con fetch()
// ----------------------------------------------------
async function cargarJSON(ruta = "33-productos.json") {
  setStatus("Cargando datos…", { loading: true }); // Mensaje con spinner
  btnCargar.disabled = true; // Desactivar botón mientras se carga

  try {
    // 3.1) Petición con fetch
    const res = await fetch(ruta, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    // 3.2) Convertir respuesta a objeto JS
    const datos = await res.json();
    if (!Array.isArray(datos)) throw new Error("El JSON raíz debe ser un array.");

    // 3.3) Guardar datos en variables globales
    datosOriginales = datos;
    datosFiltrados = [...datosOriginales];

    // 3.4) Pintar la tabla con los datos cargados
    construirTabla(datosFiltrados);
    actualizarContador();
    setStatus("Datos cargados correctamente.");
  } catch (e) {
    console.error(e);
    setStatus("Error al cargar el JSON: " + e.message, { error: true });
  } finally {
    btnCargar.disabled = false; // Reactivar botón
  }
}

// ----------------------------------------------------
// 4) CONSTRUIR LA TABLA HTML DINÁMICAMENTE
// ----------------------------------------------------
function construirTabla(datos) {
  // Limpiar cabecera y cuerpo de tabla
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // 4.1) Si no hay datos, mostramos un mensaje
  if (!datos.length) {
    tbody.innerHTML = `<tr><td class="muted" colspan="99">Sin resultados</td></tr>`;
    return;
  }

  // 4.2) Crear cabecera (thead) con las claves del primer objeto
  const keys = Object.keys(datos[0]);
  const trHead = document.createElement("tr");

  keys.forEach((k) => {
    const th = document.createElement("th");
    th.textContent = k; // Nombre de la columna
    th.title = "Click para ordenar por " + k;

    // Al hacer click en la cabecera, ordenamos por esa clave
    th.addEventListener("click", () => ordenarPor(k));

    // Flecha de orden (▲ o ▼)
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "";
    th.appendChild(arrow);

    trHead.appendChild(th);
  });

  thead.appendChild(trHead);

  // 4.3) Crear cuerpo (tbody) con cada fila de datos
  datos.forEach((item) => {
    const tr = document.createElement("tr");

    keys.forEach((k) => {
      const td = document.createElement("td");
      const val = item[k];

      // Formateo sencillo según tipo
      if (typeof val === "boolean") {
        td.textContent = val ? "Sí" : "No";
      } else if (typeof val === "number") {
        td.textContent = Number.isInteger(val) ? String(val) : val.toLocaleString("es-ES");
      } else {
        td.textContent = val;
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  // 4.4) Actualizar flechas de orden
  actualizarIndicadoresOrden(keys);
}

// ----------------------------------------------------
// 5) ORDENAR POR COLUMNA
// ----------------------------------------------------
function ordenarPor(clave) {
  if (orden.clave === clave) {
    // Si vuelvo a hacer click en la misma columna → alterna dirección
    orden.dir *= -1;
  } else {
    // Si es columna nueva → empieza en ascendente
    orden.clave = clave;
    orden.dir = 1;
  }

  // Ordenar datos filtrados in-place
  datosFiltrados.sort((a, b) => comparar(a[clave], b[clave]) * orden.dir);

  // Reconstruir tabla y contador
  construirTabla(datosFiltrados);
  actualizarContador();
}

// Comparador genérico para números, booleanos y textos
function comparar(a, b) {
  if (a == null && b != null) return -1;
  if (a != null && b == null) return 1;
  if (a == null && b == null) return 0;

  const tipoA = typeof a;
  const tipoB = typeof b;

  if (tipoA === "number" && tipoB === "number") return a - b;
  if (tipoA === "boolean" && tipoB === "boolean") return (a === b) ? 0 : a ? 1 : -1;

  return String(a).localeCompare(String(b), "es", { sensitivity: "base", numeric: true });
}

// ----------------------------------------------------
// 6) ACTUALIZAR FLECHAS EN CABECERA
// ----------------------------------------------------
function actualizarIndicadoresOrden(keys) {
  const ths = thead.querySelectorAll("th");
  ths.forEach((th, i) => {
    const k = keys[i];
    const arrow = th.querySelector(".arrow");
    if (orden.clave === k) {
      arrow.textContent = orden.dir === 1 ? "▲" : "▼";
    } else {
      arrow.textContent = "";
    }
  });
}

// ----------------------------------------------------
// 7) FILTRAR POR TEXTO
// ----------------------------------------------------
function aplicarFiltro(texto) {
  const q = texto.trim().toLowerCase();

  if (!q) {
    datosFiltrados = [...datosOriginales];
  } else {
    datosFiltrados = datosOriginales.filter((row) =>
      Object.values(row).some((v) => String(v).toLowerCase().includes(q))
    );
  }

  // Mantener orden actual si existía
  if (orden.clave) {
    datosFiltrados.sort((a, b) => comparar(a[orden.clave], b[orden.clave]) * orden.dir);
  }

  construirTabla(datosFiltrados);
  actualizarContador();
  setStatus(q ? `Filtrado por "${q}"` : "");
}

// ----------------------------------------------------
// 8) ACTUALIZAR CONTADOR
// ----------------------------------------------------
function actualizarContador() {
  const total = datosOriginales.length;
  const vis = datosFiltrados.length;
  contadorEl.textContent = total
    ? `Mostrando ${vis} de ${total} registro(s)`
    : "";
}

// ----------------------------------------------------
// 9) EVENTOS DE UI
// ----------------------------------------------------
btnCargar.addEventListener("click", () => cargarJSON());

let t;
buscador.addEventListener("input", (e) => {
  clearTimeout(t);
  t = setTimeout(() => aplicarFiltro(e.target.value), 150);
});

// Opcional: cargar automáticamente al abrir la página
// document.addEventListener("DOMContentLoaded", () => {
//   cargarJSON();
// });
