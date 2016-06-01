<?php
class User
{
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