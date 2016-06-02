<?php
include "User.inc";
include "Room.inc";

class Database
{
    var $conn;

    function Database($username = "root", $password = "", $servername = "localhost") {
        $this->conn = mysqli_connect($servername, $username, $password, "MetHotels");
        if (!$this->conn) {
            throw new mysqli_sql_exception(mysqli_connect_error());
        }
        mysqli_query($this->conn, User::SQL_CREATE);
        mysqli_query($this->conn, Room::SQL_CREATE);
    }

    function add_user($user) {
        $sql = sprintf(User::SQL_INSERT, $user->username, $user->email, $user->password);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function delete_user($user) {
        $sql = sprintf(User::SQL_DELETE, $user->username);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function update_user($user) {
        $sql = sprintf(User::SQL_UPDATE, $user->email, $user->password, $user->username);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function select_users() {
        $users = array();
        $result = mysqli_query($this->conn, User::SQL_SELECT);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $users[] = new User($row['username'], $row['email'], $row['password']);
            }
        }
        return $users;
    }

    function find_user($field, $value) {
        $sql = sprintf(User::SQL_SELECT_QUERY, $field, $value);
        $result = mysqli_query($this->conn, $sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return new User($row['username'], $row['email'], $row['password']);
        }
        return NULL;
    }

    function find_username($username) {
        return $this->find_user('username', $username);
    }

    function find_email($email) {
        return $this->find_user('email', $email);
    }

    function user_exists($username, $email) {
        return $this->find_username($username) || $this->find_email($email);
    }

    function add_room($room) {
        $sql = sprintf(Room::SQL_INSERT, $room->name, $room->beds, $room->size);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
        else {
            $room->id = mysqli_insert_id($this->conn);
        }
    }

    function delete_room($room) {
        $sql = sprintf(Room::SQL_DELETE, $room->id);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function update_room($room) {
        $sql = sprintf(Room::SQL_UPDATE, $room->name, $room->beds, $room->size, $room->id);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function select_rooms() {
        $rooms = array();
        $result = mysqli_query($this->conn, Room::SQL_SELECT);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $rooms[] = new Room($row['name'], $row['beds'], $row['size'], $row['id']);
            }
        }
        return $rooms;
    }
}