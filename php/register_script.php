<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    return;
}

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
if($username && $password && $email) {
    include "Database.inc";
    $db = new Database();
    if($db->exists($username, $email)) {
        echo "Korisničko ime ili email već postoje.<br>Bićete vraćeni na stranicu za registraciju.";
        header("refresh:5; url=../register.php");
    }
    else {
        $user = new User($username, $email, $password);
        $db->add($user);
        session_start();
        $_SESSION['username'] = $username;
        echo "Napravljen nalog: " . $user . "<br>Bićete vraćeni na glavnu stranicu.";
        header("refresh:5; url=../index.php");
    }
}
else {
    echo "Niste uneli sve podatke.<br>Bićete vraćeni na stranicu za registraciju.";
    header("refresh:5; url=../register.php");
}