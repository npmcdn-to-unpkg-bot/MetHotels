<?php
include "User.inc";

class Database
{
    const SQL_CREATE = "CREATE TABLE Users (
                        username VARCHAR(30) NOT NULL PRIMARY KEY,
                        email VARCHAR(30) NOT NULL,
                        password VARCHAR(30) NOT NULL
                        )";

    const SQL_INSERT = "INSERT INTO Users (username, email, password)
                        VALUES ('%s', '%s', '%s')";

    const SQL_UPDATE = "UPDATE Users
                        SET email='%s', password='%s'
                        WHERE username='%s'";

    const SQL_DELETE = "DELETE FROM Users
                        WHERE username='%s'";

    const SQL_SELECT = "SELECT * from Users";

    const SQL_SELECT_QUERY = "SELECT * from Users
                              WHERE %s='%s'
                              LIMIT 1";

    var $conn;

    function Database($username = "root", $password = "", $servername = "localhost") {
        $this->conn = mysqli_connect($servername, $username, $password, "MetHotels");
        if (!$this->conn) {
            throw new mysqli_sql_exception(mysqli_connect_error());
        }
        mysqli_query($this->conn, self::SQL_CREATE);
    }

    function add($user) {
        $sql = sprintf(self::SQL_INSERT, $user->username, $user->email, $user->password);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function delete($user) {
        $sql = sprintf(self::SQL_DELETE, $user->username);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function update($user) {
        $sql = sprintf(self::SQL_UPDATE, $user->email, $user->password, $user->username);
        if (!mysqli_query($this->conn, $sql)) {
            throw new mysqli_sql_exception(mysqli_error($this->conn));
        }
    }

    function select() {
        $users = array();
        $result = $this->conn->query(self::SQL_SELECT);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $users[] = new User($row['username'], $row['email'], $row['password']);
            }
        }
        return $users;
    }

    function find($field, $value) {
        $sql = sprintf(self::SQL_SELECT_QUERY, $field, $value);
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return new User($row['username'], $row['email'], $row['password']);
        }
        return NULL;
    }

    function find_username($username) {
        return $this->find('username', $username);
    }

    function find_email($email) {
        return $this->find('email', $email);
    }

    function exists($username, $email) {
        return $this->find_username($username) || $this->find_email($email);
    }
}