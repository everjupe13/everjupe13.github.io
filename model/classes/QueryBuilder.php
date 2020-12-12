<?php 

class QueryBuilder {

    private $db;

    public function __construct(mysqli $db_link) {

        $this->db = $db_link;

    }

    public function getItems($table) {

        $sql_req = "SELECT * FROM `$table`";
        $sql_res = $this->db->query($sql_req);

        return $sql_res;
        
    }

    public function getOneItem($table, $id) {

        $sql_req = "SELECT * FROM `$table` WHERE id = '$id'";
        $sql_res = $this->db->query($sql_req);

        return $sql_res;

    }

    public function getAll($table, $col, $var) {

        $sql_req = "SELECT * FROM `$table` WHERE $col = '$var'";
        $sql_res = $this->db->query($sql_req);

        return $sql_res;

    }

    public function getUserPassword($login, $password) {

        $sql_req = "SELECT * FROM `yez-users` WHERE (user_login = '$login') AND (user_password = '$password')";
        $sql_res = $this->db->query($sql_req);

        return $sql_res;

    }

    public function insertUserData($table, $user_login, $user_mail, $user_password) {

        $sql_req = "INSERT INTO `$table` (user_login, user_password, user_mail) VALUES ('$user_login', '$user_password', '$user_mail')";
        $sql_res = $this->db->query($sql_req);

        return $sql_res;

    }

    public function insertData($table, $item_id, $user_id) {

        $sql_req = "INSERT INTO `$table` (item_id, user_id) VALUES ($item_id, $user_id)";
        $sql_res = $this->db->query($sql_req);

        return $sql_req;

    }

}

?>