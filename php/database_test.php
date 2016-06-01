<?php
include "Database.inc";

function write($users) {
    echo "DATABASE: <br>";
    foreach ($users as $user) {
        echo $user . '<br>';
    }
    echo "<p>";
}

$db = new Database();
write($db->select());

$velja = new User("velja", "velja@metropolitan.ac.rs", "veljaaa");
$db->add($velja);
$vuk = new User("vuk", "vuk@metropolitan.ac.rs", "vuuuk");
$db->add($vuk);
$filip = new User("filip", "filip@metropolitan.ac.rs", "filiiip");
$db->add($filip);
$nebojsa = new User("nebojsa", "nebojsa@metropolitan.ac.rs", "nebojsaaa");
$db->add($nebojsa);
write($db->select());

$velja->email = "velja2@metropolitan.ac.rs";
$db->update($velja);
$db->delete($vuk);
write($db->select());

echo $db->find_email("filip@metropolitan.ac.rs") . '<br>';
echo $db->find_username("nebojsa") . '<br>';
echo $db->find_username("vuk") . '<br>';

echo ($db->exists("velja", "12323") ? 'true' : 'false') . '<br>';
echo ($db->exists("velja", "velja2@metropolitan.ac.rs") ? 'true' : 'false') . '<br>';
echo ($db->exists("21323", "velja2@metropolitan.ac.rs") ? 'true' : 'false') . '<br>';
echo ($db->exists("tdfgdf", "12dfgdf323") ? 'true' : 'false') . '<br>';
