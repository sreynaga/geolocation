<?php

	if (isset($_GET)) {
		include 'conn.php';
		$query = "INSERT INTO location (latitude, longitude, accuracy) VALUES (" . $_GET['latitude'] . ", " . $_GET['longitude'] . ", " . $_GET['accuracy'] . ")";
		mysql_query($query);
	}

?>