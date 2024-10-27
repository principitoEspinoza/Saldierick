const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


function getResponse(question) {
    question = question.trim().toLowerCase();

    switch (question) {
        case '¿qué es html?':
            return 'HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para crear la estructura de las páginas web.';
        case '¿qué es javascript?':
            return 'JavaScript es un lenguaje de programación utilizado para crear contenido interactivo en sitios web.';
        case '¿qué es css?':
            return 'CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación de documentos HTML.';
        case '¿qué servicios ofrecen?':
            return 'Ofrecemos servicios de consulta médica, farmacia y asesoría nutricional.';
        case '¿cuáles son los horarios de atención?':
            return 'Nuestros horarios de atención son de 9:00 AM a 6:00 PM de lunes a viernes.';
        default:
            return 'Lo siento, no tengo una respuesta para esa consulta. Por favor, intenta otra pregunta.';
    }
}

app.post('/preguntar', (req, res) => {
    const { pregunta } = req.body;

    if (!pregunta) {
        return res.status(400).json({ error: 'Por favor, proporciona una pregunta.' });
    }

    const respuesta = getResponse(pregunta);
    res.json({ pregunta, respuesta });
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
