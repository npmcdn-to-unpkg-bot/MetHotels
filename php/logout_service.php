<?php
session_start();
if(isset($_SESSION['username'])) {
    session_destroy();
    echo "Izlogovani ste.<br>";
}
echo "Bićete vraćeni na glavnu stranicu.";
header("refresh:5; url=../index.php");