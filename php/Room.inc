<?php
class Room
{
    const SQL_CREATE = "CREATE TABLE Rooms (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(30),
                        beds INT NOT NULL,
                        size INT NOT NULL
                        )";

    const SQL_INSERT = "INSERT INTO Rooms (name, beds, size)
                        VALUES ('%s', '%s', '%s')";

    const SQL_UPDATE = "UPDATE Rooms
                        SET name='%s', beds='%s', size='%s'
                        WHERE id='%s'";

    const SQL_DELETE = "DELETE FROM Rooms
                        WHERE id='%s'";

    const SQL_SELECT = "SELECT * from Rooms";

    var $id;
    var $name;
    var $beds;
    var $size;

    function Room($name, $beds, $size, $id = 0) {
        $this->name = $name;
        $this->beds = $beds;
        $this->size = $size;
        $this->id = $id;
    }

    public function __toString()
    {
        return sprintf("[%03d] %s (%s, %s m2)", $this->id, $this->name, $this->beds, $this->size);
    }
}