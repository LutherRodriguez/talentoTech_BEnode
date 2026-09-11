//Exportación declarada
export function mostrarTurnos(turno) {
return `El turno del paciente ${turno.paciente} es a las ${turno.hora} en la especialidad de ${turno.especialidad} y su estado es ${turno.estado}`;
}

function confirmarTurno(turno) {
    return {
        ...turno,
        estado: "Confirmado",
    };

}

export { confirmarTurno };  