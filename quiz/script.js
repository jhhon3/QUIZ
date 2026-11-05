// variables
const entrada_nombre = "   Jonathan Diaz ";
const entrada_correo = "jonathan.diazcruz@cun.edu.co";
const entrada_edad = "23";
const entrada_codigo_promo = "menos_billete";

//Limpieza y Métodos de Cadenas
const nombre_limpio = entrada_nombre.trim().toLowerCase();
const nombre_formateado = nombre_limpio
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// validaciones
const correo_limpio = entrada_correo.trim().toLowerCase();
const correo_valido = correo_limpio.includes("@") && correo_limpio.endsWith(".co");

// codigo
const cupon_valido = entrada_codigo_promo.startsWith("menos");
const partes_cupon = entrada_codigo_promo.split("-");
const ano_cupon_str = partes_cupon[1];

const edad = parseInt(entrada_edad, 10);
const ano_cupon = parseInt(ano_cupon_str, 10);

// 1. Mayoría de edad
const es_mayor_edad = edad >= 18;

// 2. Cálculo de nacimiento aproximado
const ano_nacimiento = 2026 - edad;

// 3. Asignación de puntos promocionales
let puntos_asignados = 0.0;
if (es_mayor_edad && ano_cupon === 2026) {
  puntos_asignados = 10.5;
}

// --------------------------------------------------
// 4. SALIDA ESPERADA EN CONSOLA
// --------------------------------------------------
const separador = "=".repeat(50);

console.log(separador);
console.log("                FICHA DE USUARIO        ");
console.log(separador);
console.log(`Nombre               : ${nombre_formateado}`);
console.log(`Correo Validado      : ${correo_limpio}`);
console.log(`¿Correo Válido?      : ${correo_valido}`);
console.log(`Edad Registrada      : ${edad} (Tipo: ${typeof edad})`);
console.log(`¿Mayor de Edad?      : ${es_mayor_edad}`);
console.log(`Año Estimado Nto.    : ${ano_nacimiento}`);
console.log(`Código Cupón Válido  : ${cupon_valido}`);
console.log(`Puntos Asignados     : ${puntos_asignados}`);
//console.log(separador);