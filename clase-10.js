// ¿Que devuelven estos códigos?
// En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
// consola.
// 1. let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// Respuesta: retorna undefined porque no hay nada en numbers[5]

// 2. let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
// "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
// Respuesta: "Spiderman"

// 3. let str = "un string cualquiera";
// let grupoDeAmigos = [
//   [45, 89, 0],
//   ["Digital", "House", true],
//   ["string", "123", "false", 54, true, str],
// ];
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
// Respuesta: devuelve "un string cualquiera"

// Colecciones de peliculas
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

function convertirMayuscula(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
}

convertirMayuscula(peliculas);
console.log(peliculas);

let peliculasAnimadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

convertirMayuscula(peliculasAnimadas);
console.log(peliculasAnimadas);

let videojuego = peliculasAnimadas.pop();
console.log(videojuego);

function mergeArray(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
}

mergeArray(peliculas, peliculasAnimadas);
console.log(peliculas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScore(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (asiaScores[i] === euroScores[i]) {
      console.log(
        `The score of ${peliculas[i]} are the same in Asia and Europe.`
      );
    } else {
      console.log(
        `The score of ${peliculas[i]} are different in Asia and Europe.`
      );
    }
  }
}

compareScore(asiaScores, euroScores);

//
