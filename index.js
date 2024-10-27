document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validación básica
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    if (username && phone && password) {
        // Redirigir a chat.html si el formulario es válido
        window.location.href = 'Chatsbox.html';
    } else {
        alert('Por favor, completa todos los campos.'); // Mensaje de error si hay campos vacíos
    }
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos de inicio de sesión
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación básica (puedes agregar más validaciones según lo que necesites)
    if (username && password) {
        // Simular un inicio de sesión exitoso y redirigir a chat.html
        window.location.href = 'Chatsbox.html';
    } else {
        alert('Por favor, ingresa tu nombre de usuario y contraseña.');
    }
});

