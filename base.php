<?php
$host = "localhost"; //camabiar si el servidor es direfente 
$db = "SaldiErick";
$user = "tu_usuario"; // cambiar por tu usuario de MSQL
$pass ="tu_contraseña"; //cambiar por tu contraseña 

// creacion de la conexion
$conn= new mysqli($host, $user, $pass, $db);

// ver si la conexin esa correctamente conectada 
if ($conn->connet_error){
    die("conexion fallida:".$conn->connect_errr);

}
echo "Conexion Exitosa";
?>