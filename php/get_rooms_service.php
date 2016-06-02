<?php
include "Database.inc";
$db = new Database();
header("Content-type: application/json");
echo json_encode($db->select_rooms());