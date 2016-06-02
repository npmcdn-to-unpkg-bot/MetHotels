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
    if($db->user_exists($username, $email)) {
        header("Error 401", true, 401);
        echo json_encode("Korisničko ime ili email već postoje.");
    }
    else {
        $user = new User($username, $email, $password);
        $db->add_user($user);
        session_start();
        $_SESSION['username'] = $username;
        echo json_encode($user);
    }
}
else {
    header("Error 400", true, 400);
    echo json_encode("Niste uneli sve podatke.");
}