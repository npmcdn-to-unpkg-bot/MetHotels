<?php
class User
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

    var $username;
    var $email;
    var $password;

    function User($username, $email, $password) {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }

    public function __toString()
    {
        return sprintf("%s (%s) - %s", $this->username, $this->email, str_repeat('*', strlen($this->password)));
    }
}