<?php
header("Content-type: application/json");
include "Database.inc";
$db = new Database();
echo json_encode($db->select_rooms());