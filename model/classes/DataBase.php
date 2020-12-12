<?php 

class DataBase {

    private $db_host;
    private $db_login;
    private $db_password;
    private $db_name;

    public function __construct() {

        $this->setSettings($host, $login, $password, $name);

    }

    private function setSettings($host, $login, $password, $name) {

        $this->db_host = $host;
        $this->db_login = $login;
        $this->db_password = $password;
        $this->db_name = $name;

    }

}




?>