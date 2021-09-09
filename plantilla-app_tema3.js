const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Andrea Lin";
const tema = "TEMA 3";

const profesionales = [
  {
    id: 0,
    estaHabilitado: false,
    honorarioConsulta: 2007.68,
    edad: 29,
    nombre: "Huber Wilkins",
    email: "huberwilkins@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 0,
    puntaje: 8,
  },
  {
    id: 1,
    estaHabilitado: true,
    honorarioConsulta: 2325.56,
    edad: 21,
    nombre: "Goldie Haley",
    email: "goldiehaley@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 7,
  },
  {
    id: 2,
    estaHabilitado: false,
    honorarioConsulta: 2208.17,
    edad: 36,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 0,
    puntaje: 7,
  },
  {
    id: 3,
    estaHabilitado: false,
    honorarioConsulta: 3266.71,
    edad: 20,
    nombre: "Leanne Burch",
    email: "leanneburch@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 1,
    puntaje: 5,
  },
  {
    id: 4,
    estaHabilitado: false,
    honorarioConsulta: 2674.09,
    edad: 31,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 4,
  },
  {
    id: 5,
    estaHabilitado: true,
    honorarioConsulta: 1851.37,
    edad: 27,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 6,
    estaHabilitado: true,
    honorarioConsulta: 2568.94,
    edad: 34,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 4,
    puntaje: 10,
  },
  {
    id: 7,
    estaHabilitado: true,
    honorarioConsulta: 2601.76,
    edad: 36,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 0,
  },
  {
    id: 8,
    estaHabilitado: true,
    honorarioConsulta: 1949.92,
    edad: 40,
    nombre: "Guerra Bright",
    email: "guerrabright@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 8,
    puntaje: 0,
  },
  {
    id: 9,
    estaHabilitado: true,
    honorarioConsulta: 3898.11,
    edad: 20,
    nombre: "Dina Navarro",
    email: "dinanavarro#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 6,
    puntaje: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    honorarioConsulta: 2745.73,
    edad: 27,
    nombre: "Stafford Watts",
    email: "staffordwatts#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 11,
    estaHabilitado: false,
    honorarioConsulta: 2808.98,
    edad: 39,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
    puntaje: 9,
  },
  {
    id: 12,
    estaHabilitado: true,
    honorarioConsulta: 1941.13,
    edad: 21,
    nombre: "Mayra Tran",
    email: "mayratran#speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 8,
    puntaje: 3,
  },
  {
    id: 13,
    estaHabilitado: false,
    honorarioConsulta: 3930.0344999999998,
    edad: 23,
    nombre: "Ward Dale",
    email: "warddale#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 1,
    puntaje: 3,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A

const appProfesionales = {
  profesionales: profesionales,

  // B
  listarProfesionales: function () {
    for (i = 0; i < this.profesionales.length; i++) {
      let verificarHabilitado = this.profesionales[i].estaHabilitado
        ? "ok"
        : "inactivo";
      console.log(
        `id ${this.profesionales[i].id} ${verificarHabilitado}, ${this.profesionales[i].especialidad}, ${this.profesionales[i].nombre}, $${this.profesionales[i].honorarioConsulta}, ${this.profesionales[i].email}`
      );
    }
  },

  // C Agregar un método filtrarHabilitados que permita filtrar profesionales que estén habilitados, es decir, con la propiedad estaHabilitado en true.
  // Este método deberá retornar un array de profesionales habilitados
  filtrarHabilitados: function () {
    let profesionalesHabilitados = [];
    for (i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado) {
        profesionalesHabilitados.push(this.profesionales[i]);
      }
    }
    return profesionalesHabilitados;
  },

  // D Agregar un método buscarPorID que permita buscar dentro de la propiedad de nuestro objeto profesionales un profesional por la propiedad id, la misma deberá ser igual a un id que se envía como argumento al momento de invocarlo.
  // Este método deberá retornar un profesional.
  buscarPorID: function (id) {
    for (i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].id === id) {
        return this.profesionales[i];
      }
    }
    return `No se pudo encontrar profesional con id ${id}.`;
  },

  // E Metodo incrementarHonorarios
  incrementarHonorarios: function (id, porcentaje) {
    let profesional = this.buscarPorID(id);
    profesional.honorarioConsulta =
      profesional.honorarioConsulta * (1 + porcentaje / 100);
    return profesional;
  },

  // F metodo corregirEmails @speedbolt.com
  corregirEmails: function () {
    let emailCorregidos = this.profesionales;
    for (i = 0; i < emailCorregidos.length; i++) {
      let index = emailCorregidos[i].email.indexOf("speedbolt.com") - 1;
      let slice = emailCorregidos[i].email.slice(0, index);
      emailCorregidos[i].email = slice + "@speedbolt.com";
    }
    return emailCorregidos;
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
console.log(appProfesionales.listarProfesionales());

console.log(v, oo + "   C. filtrarHabilitados");
// Ejecución aquí
console.log(appProfesionales.filtrarHabilitados());

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.buscarPorID(6));

console.log(v, oo + "  E. incrementarHonorarios");
// Ejecución aquí
console.log(appProfesionales.incrementarHonorarios(0, 10));

console.log(v, oo + " F. corregirEmails");
// Ejecución aquí
console.log(appProfesionales.corregirEmails());
