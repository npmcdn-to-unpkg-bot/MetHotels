<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    return;
}

$id = $_POST['id'];
$name = $_POST['name'];
$beds = $_POST['beds'];
$size = $_POST['size'];

if(!($id && $name && $beds && $size)) {
    header("Error 400", true, 400);
    echo json_encode("Niste uneli sve podatke.");
    return;
}

if($beds <= 0 || $size <= 0) {
    header("Error 400", true, 400);
    echo json_encode("Broj kreveta i veličina sobe ne mogu biti negativni.");
    return;
}

include "Database.inc";
$db = new Database();
$room = new Room($name, $beds, $size, $id);
$db->update_room($room);
echo json_encode($room);