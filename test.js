function dividir(num1, num2) {
  console.log("num1", num1);
  console.log("num2", num2);
  if (num2 === 0) {
    return "No se puede dividir por 0";
  } else {
    return num1 / num2;
  }
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));
