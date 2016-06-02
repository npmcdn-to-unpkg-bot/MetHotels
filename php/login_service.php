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
            echo json_encode($user);
        }
        else {
            header("Error 401", true, 401);
            echo json_encode("Pogrešna šifra.");
        }
    }
    else {
        header("Error 401", true, 401);
        echo json_encode("Korisnik sa tim imenom ne postoji.");
    }
}
else {
    header("Error 400", true, 400);
    echo json_encode("Niste uneli sve podatke.");
}