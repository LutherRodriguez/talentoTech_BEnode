//const saludo = "Hola, bienvenidos a la clase 5 de TalentoTech";
//Importación declarada
/*import { mostrarTurnos, confirmarTurno } from "./turnos.js";

const turno = {
    paciente: "Juan",
    hora: "10:00",
    especialidad: "Cardiología",
    estado: "Pendiente"
}
const mensaje = mostrarTurnos(turno);
console.log(mensaje);

const turnoConfirmado = confirmarTurno(turno);
const mensajeConfirmado = mostrarTurnos(turnoConfirmado);
console.log(mensajeConfirmado); 

import pc from "picocolors";
console.log(pc.red("Este es un mensaje en rojo"));
console.log(pc.green("Este es un mensaje en verde"));
console.log(pc.blue("Este es un mensaje en azul"));*/

// Ejercicios:
// 2. leer los argumentos de la terminal con process.argv, que es lo que se explicó justo antes del ejercicio. El primer argumento útil (el "comando": GET, POST, PUT, DELETE) va a estar en la posición 2 del array, y los datos adicionales (data o id) en la posición 3.

const args = process.argv. slice(2);
// Ignora los 2 primeros elementos del slice
const comando = args[0];
const datos = args[1];

if (comando === "GET") {
    console.log("Toma un dato");
} else if (comando === "POST") {
    console.log(`Recibimos ${datos} correctamente`);
} else if (comando === "PUT") {
    console.log(`Actualizamos con el id ${datos} correctamente`);
} else if (comando === "DELETE") {
    console.log(`Eliminamos el item con el id ${datos} correctamente`);
}else {
    console.log("Comando no reconocido. Usa GET, POST, PUT o DELETE");
}
