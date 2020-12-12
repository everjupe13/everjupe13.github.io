<?php 

class DbConnection {

    public static function make($db_host, $db_login, $db_password, $db_name) {

        return new mysqli($db_host, $db_login, $db_password, $db_name);

    }

}


?>