<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    return;
}

$username = $_POST['username'];
$password = $_POST['password'];
if($username && $password) {
    include "Database.inc";
    $db = new Database();
    $user = $db->find_username($username);
    if($user) {
        if($password == $user->password) {
            session_start();
            $_SESSION['username'] = $username;
            echo "Ulogovali ste se kao: " . $user . "<br>Bićete vraćeni na glavnu stranicu.";
            header("refresh:5; url=../index.php");
        }
        else {
            echo "Pogrešna šifra.<br>Bićete vraćeni na stranicu za logovanje.";
            header("refresh:5; url=../login.php");
        }
    }
    else {
        echo "Korisnik sa tim imenom ne postoji.<br>Bićete vraćeni na stranicu za logovanje.";
        header("refresh:5; url=../login.php");
    }
}
else {
    echo "Niste uneli sve podatke.<br>Bićete vraćeni na stranicu za logovanje.";
    header("refresh:5; url=../login.php");
}