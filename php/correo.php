<?php
$destinatario = 'heartring13@gmail.com';
//correo que se enviara 
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];

$header = "Enviado desde la pagina de la empresa GALYSAN SAC";
$mensajeCompleto = $mensaje. "\nAtentamente: " . $nombre;
mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script> alert('correo enviado exitosamente') </script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";

 

?>