// NIVEL 1
let sumar = function (num1, num2, num3) {
  return num1 + num2 + num3;
};
console.log(sumar(1, 2, 3));

let restar = function (num1, num2) {
  return num1 - num2;
};
console.log(restar(5, 2));

let multiplicar = function (num1, num2) {
  return num1 * num2;
};
console.log(multiplicar(5, 2));

let dividir = function (num1, num2) {
  return num1 / num2;
};
console.log(dividir(6, 2));

// NIVEL 3
function promedioDeTresNumeros(num1, num2, num3) {
  let suma = sumar(num1, num2, num3);
  let result = dividir(suma, 3);
  return result;
}
console.log(promedioDeTresNumeros(4, 4, 4));

function calcularPorcentaje(total, porcentaje) {
  return multiplicar(dividir(porcentaje, 100), total);
}
console.log(calcularPorcentaje(300, 15));

function generadorDePorcentaje(a, b) {
  return multiplicar(dividir(a, b), 100);
}
console.log(generadorDePorcentaje(2, 200));
