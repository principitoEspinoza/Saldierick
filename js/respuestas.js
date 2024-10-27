function sendChatboxQuery() {
    const query = document.getElementById('chatboxInput').value.trim().toLowerCase();
    const responseContainer = document.getElementById('chatboxResponses');
    let response;

    // Respuestas automáticas basadas en consultas comunes
    switch (query) {
        case '¿cuáles son los horarios de atención?':
            response = 'Nuestros horarios de atención son de 9:00 AM a 6:00 PM de lunes a viernes.';
            break;
        case '¿qué servicios ofrecemos?':
            response = 'Ofrecemos servicios de consulta médica, farmacia y asesoría nutricional.';
            break;
        case '¿cómo puedo hacer una cita?':
            response = 'Puedes hacer una cita llamando al número 123-456-789 o a través de nuestra página web.';
            break;
        case '¿dónde están ubicados?':
            response = 'Estamos ubicados en la Avenida Principal, No. 123, Ciudad.';
            break;
        case '¿qué es javascript?':
            response = 'JavaScript es un lenguaje de programación utilizado para crear contenido interactivo en sitios web.';
            break;
        case '¿qué es html?':
            response = 'HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para crear la estructura de las páginas web.';
            break;
        default:
            response = 'Lo siento, no tengo una respuesta para esa consulta. Por favor, intenta otra pregunta.';
    }

    // Mostrar consulta y respuesta
    responseContainer.innerHTML += `<p><strong>Usuario:</strong> ${query}</p>`;
    responseContainer.innerHTML += `<p><strong>Respuesta:</strong> ${response}</p>`;
    document.getElementById('chatboxInput').value = ''; // Limpia el input
}
