//const saludo = "Hola, bienvenidos a la clase 5 de TalentoTech";
//Importación declarada
import { mostrarTurnos, confirmarTurno } from "./turnos.js";

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
console.log(pc.blue("Este es un mensaje en azul"));