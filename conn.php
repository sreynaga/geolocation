<?php

    $hostname = "nombre_de_tu_hostname"; //Nombre del Hostname de tu base de datos MySQL
    $user = "nombre_de_usuario"; //Nombre de usuario para conectar a tu base de datos
    $pass = "password"; //Password para conectar a tu base de datos
    $db = "nombre_de_tu_base_de_datos"; //Nombre de la base de datos a utilizar
	mysql_connect($hostname,$user,$pass) or die(mysql_error());
	mysql_select_db($db) or die(mysql_error());

?>