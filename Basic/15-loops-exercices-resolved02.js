// 1) Imprime 1..20 (iterando un Set)
//    ¿Por qué Set? No es necesario, pero muestra cómo iterar estructuras sin duplicados.
const s1a20 = new Set(Array.from({ length: 20 }, (_, i) => i + 1));
for (const n of s1a20) console.log(n);

// 2) Suma 1..100 con Set
//    ¿Por qué Set? Tampoco es imprescindible; garantiza unicidad (trivial en el rango) y sirve para practicar for..of.
const s1a100 = new Set(Array.from({ length: 100 }, (_, i) => i + 1));
let suma = 0;
for (const n of s1a100) suma += n;
console.log("Suma 1..100:", suma);

// 3) Pares 1..50 usando Map (n -> esPar)
//    ¿Por qué Map? Añadimos metadatos (par/impar) y filtramos por valor de la clave.
const paridad = new Map(
  Array.from({ length: 50 }, (_, i) => {
    const n = i + 1;
    return [n, n % 2 === 0];
  })
);
for (const [n, esPar] of paridad) if (esPar) console.log("Par:", n);

// 4) Imprimir nombres (eliminando duplicados) con Set
//    ¿Por qué Set? Deduplicación con preservación de orden de inserción.
const nombres = ["Ana", "Luis", "Ana", "Marta", "Luis", "Sofía"];
const nombresUnicos = new Set(nombres);
for (const nombre of nombresUnicos) console.log("Nombre:", nombre);

// 5) Contar vocales con Set para pertenencia O(1)
//    ¿Por qué Set? Pertenencia rápida y código claro.
const frase = "Aprender JavaScript es divertido";
const VOCALES = new Set(["a", "e", "i", "o", "u"]);
let contadorVocales = 0;
for (const ch of frase.toLowerCase()) if (VOCALES.has(ch)) contadorVocales++;
console.log("Vocales:", contadorVocales);

// 6) Producto de un array
//    Versión A (producto respetando duplicados): Map/Set no aporta.
//    Versión B (producto de únicos): Set es útil si la regla de negocio pide ignorar repetidos.
const nums = [2, 3, 3, 4];
// A) Producto clásico
let producto = 1;
for (const n of nums) producto *= n;
console.log("Producto (con duplicados):", producto);
// B) Producto de únicos
let productoUnicos = 1;
for (const n of new Set(nums)) productoUnicos *= n;
console.log("Producto (únicos):", productoUnicos);
// Justificación: Usa Set si quieres eliminar duplicados por definición del problema.
// Si no, mantén el bucle clásico.

// 7) Tabla del 5 con Map (multiplicando 5 x k = v)
//    ¿Por qué Map? Modela pares clave-valor (k -> resultado) y luego recorres entries.
const tabla5 = new Map(
  Array.from({ length: 10 }, (_, i) => {
    const k = i + 1;
    return [k, 5 * k];
  })
);
for (const [k, v] of tabla5) console.log(`5 x ${k} = ${v}`);

// 8) Invertir cadena
//    ¿Por qué NO Map/Set? No aportan valor real: invertir es sobre índices/orden.
//    Mantén la solución directa.
const str = "hola mundo";
let invertida = "";
for (let i = str.length - 1; i >= 0; i--) invertida += str[i];
console.log("Invertida:", invertida);

// 9) Fibonacci (primeros 10) con Map para memoización
//    ¿Por qué Map? Cachea resultados por índice -> valor, útil si se reusa o crece.
const fibMemo = new Map([[0, 0], [1, 1]]);
for (let i = 2; i < 10; i++) fibMemo.set(i, fibMemo.get(i - 1) + fibMemo.get(i - 2));
const primeros10 = Array.from({ length: 10 }, (_, i) => fibMemo.get(i));
console.log("Fibonacci(10):", primeros10.join(", "));

// 10) Filtrar > 10 y deduplicar con Set
//     ¿Por qué Set? Primero quitas repetidos preservando orden, luego filtras.
const entrada = [5, 12, 7, 12, 30, 30, 9, 11, 15];
const setSinDuplicados = new Set(entrada);
const mayores10 = [...setSinDuplicados].filter(n => n > 10);
console.log("Mayores a 10 (únicos):", mayores10);
