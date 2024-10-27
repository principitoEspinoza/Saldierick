<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_usuario = $_POST['username'];
    $contrasena = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash de la contraseña

    // Conectar a la base de datos y ejecutar la consulta
    $stmt = $conn->prepare("INSERT INTO usuarios (nombre_usuario, contrasena) VALUES (?, ?)");
    $stmt->bind_param("ss", $nombre_usuario, $contrasena);
    $stmt->execute();
}
?>
