// ¿Puede subir?
// En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego.

// Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
// Debe medir más o igual de 1,40m y menos de 2 metros.
// Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
// Si mide menos de 1,20m, no podrá subir ni acompañado.
//  Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

// function puedeSubir(altura, accompanied) {
//   if (altura < 1.2 || altura > 2) {
//     return false;
//   } else if (altura < 1.4) {
//     return accompanied ? true : false;
//   } else {
//     // altura entre 1.40 y 2 metros
//     return false;
//   }
// }

// console.log(puedeSubir(1.2, true));

//CONSIGNA 1: DISCOTECA
let edad = 25; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

function puedePasarDiscoteca(edad) {
  console.log(edad);
  if (edad % 2 !== 0) {
    console.log("¿Sabías que tu edad es impar?");
  }
  if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
  } else if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else {
    console.log(
      "Felicitaciones por ser mayor de edad. Puede pasar al bar y tomar alcohol."
    );
  }
}

let resultado = puedePasarDiscoteca(edad);
console.log(resultado);

// CONSIGNA 2: totalAPagar()
function calcularFactura(litrosConsumidos, monto) {
  if (litrosConsumidos > 0 && litrosConsumidos < 25) {
    return (monto += 50);
  } else {
    return (monto += 25);
  }
}

function totalAPagar(vehiculo, litrosConsumidos) {
  console.log("vehiculo", vehiculo);
  console.log("litros consumidos", litrosConsumidos);
  let factura;

  switch (vehiculo) {
    case "coche":
      factura = 86 * litrosConsumidos;
      console.log(calcularFactura(litrosConsumidos, factura));
      break;
    case "moto":
      factura = 70 * litrosConsumidos;
      console.log(calcularFactura(litrosConsumidos, factura));
      break;
    case "autobus":
      factura = 55 * litrosConsumidos;
      console.log(calcularFactura(litrosConsumidos, factura));
      break;
    default:
  }
}

totalAPagar("autobus", 50);

// CONSIGNA 3: Local de Sandwiches
function pedirSandwich(
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  console.log("base", base);
  console.log("pan", pan);
  let precioSandwich = 0;

  switch (base) {
    case "pollo":
      precioSandwich += 150;
      break;
    case "carne":
      precioSandwich += 200;
      break;
    case "veggie":
      precioSandwich += 100;
      break;
    default:
      return "no se selecciono ningun sandwich";
  }

  switch (pan) {
    case "blanco":
      precioSandwich += 50;
      break;
    case "negro":
      precioSandwich += 60;
      break;
    case "s/gluten":
      precioSandwich += 75;
      break;
    default:
      return "no se selecciono ningun pan";
  }

  queso ? (precioSandwich += 20) : (precioSandwich += 0);
  tomate ? (precioSandwich += 15) : (precioSandwich += 0);
  lechuga ? (precioSandwich += 10) : (precioSandwich += 0);
  cebolla ? (precioSandwich += 15) : (precioSandwich += 0);
  mayonesa ? (precioSandwich += 5) : (precioSandwich += 0);
  mostaza ? (precioSandwich += 5) : (precioSandwich += 0);

  return precioSandwich;
}

console.log(pedirSandwich("pollo", "blanco", true, false, true));

// =========================================================
// CONSIGNAS EXTRAS

// CUAL ES EL NUMERO SECRETO
function adivinarNumeroSecreto(num) {
  let secretNum = Math.ceil(Math.random() * 10);
  if (num === secretNum) {
    return `Felicitaciones, adivinaste el numero secreto ${secretNum}!`;
  } else {
    return `Segui intentando! Ingresaste el numero ${num} pero el numero secreto era ${secretNum}!`;
  }
}

console.log(adivinarNumeroSecreto(6));

// ABRIR PARACAIDAS
function abrirParacaidas(velocidad, altura) {
  if (velocidad < 1000) {
    if (altura >= 2000 && altura < 3000) {
      return "Se abre el paracaida";
    } else {
      return "No se abre el paracaida";
    }
  } else {
    return "No se abre el paracaida";
  }
}

console.log(abrirParacaidas(300, 2000));

// TRADUCTOR CONDICIONAL
function traductorSimple(string) {
  switch (string) {
    case "casa":
      return "house";
      break;
    case "perro":
      return "dog";
      break;
    case "pelota":
      return "ball";
      break;
    case "arbol":
      return "tree";
      break;
    case "genio":
      return "genius";
      break;
    default:
      return "La palabra ingresada es incorrecta";
  }
}

console.log(traductorSimple("pelota"));
