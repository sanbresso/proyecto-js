
let continuar = true;

while (continuar) {
    // Prompt al ingresar a la página
    const respuesta = prompt("¿Deseas agendar un turno? \n1. Sí, quiero agendarme YA! \n2. Quiero chusmear los servicios primero 🤩");

    // Verificar la respuesta del usuario y actuar en consecuencia
    if (respuesta === "1" || respuesta.toLowerCase() === "sí, quiero agendarme ya!") {
        alert("¡Excelente! Ingresa a 'Turnos disponibles' para elegir tu fecha y hora deseadas.");
    } else if (respuesta === "2" || respuesta.toLowerCase() === "quiero chusmear los servicios primero 🤩") {
        alert("¡Por supuesto! Puedes explorar nuestros servicios en nuestro sitio web.");
    } else {
        alert("No has seleccionado una opción válida.");
    }

    // Preguntar al usuario si desea continuar
    const decision = prompt("¿Deseas realizar otra acción? (Si/No)").toLowerCase();

    // Si el usuario elige "Si", mostrar mensaje y continuar el ciclo
    if (decision === "si") {
        alert("¡Genial! Te invitamos a conocer nuestro sitio web.");
    } else {
        continuar = false; // Si elige "No", salir del ciclo
    }
}






