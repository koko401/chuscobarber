function mostrarHorario(dia) {
    let horario;
    switch(dia) {
        case 'lunes':
            horario = "9:00 a. m. - 8:00 p. m.";
            break;
        case 'martes':
            horario = "8:00 a. m. - 6:00 p. m.";
            break;
        case 'miercoles':
            horario = "8:00 a. m. - 8:00 p. m.";
            break;
        case 'jueves':
            horario = "8:00 a. m. - 8:00 p. m.";
            break;
        case 'viernes':
            horario = "8:00 a. m. - 8:00 p. m.";
            break;
        case 'sabado':
            horario = "7:00 a. m. - 8:00 p. m.";
            break;
        case 'domingo':
            horario = "6:00 a. m. - 12:00 p. m.";
            break;
        default:
            horario = "Día no válido";
    }
    document.getElementById("horario").innerText = horario;
}
