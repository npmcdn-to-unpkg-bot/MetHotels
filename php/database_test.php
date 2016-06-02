<?php
function write($list) {
    echo "DATABASE: <br>";
    foreach ($list as $elem) {
        echo $elem . '<br>';
    }
    echo "<p>";
}

include "Database.inc";
$db = new Database();

// USERS
write($db->select_users());

$velja = new User("velja", "velja@metropolitan.ac.rs", "veljaaa");
$db->add_user($velja);
$vuk = new User("vuk", "vuk@metropolitan.ac.rs", "vuuuk");
$db->add_user($vuk);
$filip = new User("filip", "filip@metropolitan.ac.rs", "filiiip");
$db->add_user($filip);
$nebojsa = new User("nebojsa", "nebojsa@metropolitan.ac.rs", "nebojsaaa");
$db->add_user($nebojsa);
write($db->select_users());

$velja->email = "velja2@metropolitan.ac.rs";
$db->update_user($velja);
$db->delete_user($vuk);
write($db->select_users());

echo $db->find_email("filip@metropolitan.ac.rs") . '<br>';
echo $db->find_username("nebojsa") . '<br>';
echo $db->find_username("vuk") . '<br>';

echo ($db->user_exists("velja", "12323") ? 'true' : 'false') . '<br>';
echo ($db->user_exists("velja", "velja2@metropolitan.ac.rs") ? 'true' : 'false') . '<br>';
echo ($db->user_exists("21323", "velja2@metropolitan.ac.rs") ? 'true' : 'false') . '<br>';
echo ($db->user_exists("tdfgdf", "12dfgdf323") ? 'true' : 'false') . '<br>';

// ROOMS
write($db->select_rooms());

$soba1 = new Room("Soba 1", 1, 10);
$db->add_room($soba1);
$soba2 = new Room("Soba 2", 2, 20);
$db->add_room($soba2);
$soba3 = new Room("Soba 3", 3, 30);
$db->add_room($soba3);
write($db->select_rooms());

$soba1->name = "Soba 11";
$db->update_room($soba1);
$db->delete_room($soba2);
write($db->select_rooms());