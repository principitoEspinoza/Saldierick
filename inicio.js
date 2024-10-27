document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos de inicio de sesión
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación básica (puedes agregar más lógica de autenticación aquí)
    if (username && password) {
        // Mensaje de éxito
        alert('Inicio de sesión exitoso. Redirigiendo a la aplicación...');

        // Redirigir a chat.html si el formulario es válido
        window.location.href = 'chatsbox.html';
    } else {
        alert('Por favor, ingresa tu nombre de usuario y contraseña.'); // Mensaje de error si hay campos vacíos
    }
});
