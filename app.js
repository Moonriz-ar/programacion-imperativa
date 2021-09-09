const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);

/*  =================================================================

Te proveemos la siguiente plantilla que tiene tres partes:
 - Array de objetos que está colapsado aquí debajo.
 - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
 - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados 
================================================================= */
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 42700,
  },
  {
    id: 2,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 29000,
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 3,
    precioAlquiler: 53000,
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 17900,
  },
  {
    id: 5,
    propietarios: "Dueño: Pablo Groming",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 24100,
  },
  {
    id: 6,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 46700,
  },
  {
    id: 7,
    propietarios: "Dueño: Alberto Direck",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 37000,
  },
  {
    id: 8,
    propietarios: "Dueña: Maria Gonzalez",
    ambientes: 4,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 84000,
  },
  {
    id: 9,
    propietarios: "Dueña: Martina García",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 74000,
  },
  {
    id: 10,
    propietarios: "Dueña: Cristina Foldati",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 55800,
  },
  {
    id: 11,
    propietarios: "Dueño: Ramiro Orwel",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 68000,
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Goldstein",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 63000,
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 43200,
  },
  {
    id: 14,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 40000,
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 21500,
  },
  {
    id: 16,
    propietarios: "Dueñas: Olga Fernandez y Victoria Paz",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 28000,
  },
  {
    id: 17,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 23000,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
  // A
  departamentos: departamentos,
  // B. Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola.
  // “id: 2, precio $ 75000, está Disponible, 4 ambientes, máximo 3 personas, acepta mascotas, propietarios: dueña: Laura Gutierrez”
  //   El id.
  // El precioAlquiler.
  // disponible (en caso de ser true mostrar “Disponible” caso contrario “Alquilado”)
  // La cantidad de ambientes
  // La cantidad máxima de personas
  // Si se aceptan o no las mascotas (“acepta mascotas” si es true o “no acepta mascotas” en caso de que sea false),
  // Los propietarios del departamento

  listarDepartamentos: function (arrayDeptos) {
    for (let i = 0; i < arrayDeptos.length; i++) {
      let disponibilidad = arrayDeptos[i].disponible
        ? "Disponible"
        : "Alquilado";
      let mascotas = arrayDeptos[i].aceptaMascotas
        ? "acepta mascotas"
        : "no acepta mascotas";
      console.log(
        `id: ${arrayDeptos[i].id}, precio $ ${arrayDeptos[i].precioAlquiler}, está ${disponibilidad}, ${arrayDeptos[i].ambientes} ambientes, máximo ${arrayDeptos[i].cantidadPersonas} personas, ${mascotas}, propietarios: ${arrayDeptos[i].propietarios}`
      );
    }
  },
  // C. Agregar un método departamentosDisponibles que permita consultar disponibilidad, es decir, que devuelva una lista de los departamentos disponibles.
  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible === true) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },
  // D. Agregar un método buscarPorId que permita buscar el departamento en función de su identificador.
  // Este método debe devolver un departamento en caso de encontrar el identificador.
  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id) {
        return this.departamentos[i];
      }
    }
  },
  // E
  buscarPorPrecio: function (precioMaximo) {
    let departamentos = inmobiliaria.departamentosDisponibles();
    let departamentosFiltradosPorPrecio = [];
    for (let i = 0; i < departamentos.length; i++) {
      if (precioMaximo >= departamentos[i].precioAlquiler) {
        departamentosFiltradosPorPrecio.push(departamentos[i]);
      }
    }
    return departamentosFiltradosPorPrecio;
  },
  // F
  precioConImpuesto: function (porcentaje) {
    let precioConImpuesto = this.departamentos;
    for (i = 0; i < precioConImpuesto.length; i++) {
      precioConImpuesto[i].precioAlquiler = Math.floor(
        precioConImpuesto[i].precioAlquiler * (1 + porcentaje / 100)
      );
    }
    return precioConImpuesto;
  },
  // G
  // en lugar de decir “Dueños: ….”, “Dueña: ….”, etc. diga “Prop.: ….”
  // ejemplo : "Dueños: Martín Gutierrez y José Torres" pasará a ser "Prop.: Martín Gutierrez y José Torres"
  // "Dueño: Luis Perez"

  simplificarPropietarios: function (text) {
    let departamentosSimplificados = this.departamentos;
    for (i = 0; i < departamentosSimplificados.length; i++) {
      let indexOfDoubleColumn =
        departamentosSimplificados[i].propietarios.indexOf(":");
      let slice =
        departamentosSimplificados[i].propietarios.slice(indexOfDoubleColumn);
      departamentosSimplificados[i].propietarios = "Prop." + slice;
    }
    return departamentosSimplificados;
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(departamentos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(9));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(inmobiliaria.buscarPorPrecio(40000));

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.log(inmobiliaria.precioConImpuesto(10));

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(inmobiliaria.simplificarPropietarios());
