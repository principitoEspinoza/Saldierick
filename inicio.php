<?php
session_start(); // Inicia la sesión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_usuario = $_POST['username'];
    $contrasena = $_POST['password'];

    // Buscar el usuario en la base de datos
    $stmt = $conn->prepare("SELECT contrasena FROM usuarios WHERE nombre_usuario = ?");
    $stmt->bind_param("s", $nombre_usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        // Verificar la contraseña
        if (password_verify($contrasena, $hashed_password)) {
            $_SESSION['usuario'] = $nombre_usuario; // Almacenar usuario en la sesión
            header("Location: chat.html"); // Redirigir a la página del chat
            exit;
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }
}
?>
