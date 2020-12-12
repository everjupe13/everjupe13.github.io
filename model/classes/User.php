<?php 

class User {

    private $db;

    public function __construct(QueryBuilder $db_link) {

        $this->db = $db_link;

    }

    public function registr($user_login, $user_mail, $user_password) {

        $err = array();

        $user_login = trim($user_login);
        $user_mail = trim($user_mail);
        $user_password = trim($user_password);

        if (!$this->checkEmpty($user_login)) {

            $err[] = "Поле логин пусто";

        } else {

            if (strlen($user_login) < 5) {

                $err[] = "Логин должен содержать 5 и более символов";

            }

        }

        if (!$this->checkEmpty($user_mail)) {

            $err[] = "Поле email адрес пусто";

        } else {

            if (strlen($user_mail) < 5) {

                $err[] = "Email адрес должен содержать 5 и более символов";

            }

        }

        if (!$this->checkEmpty($user_password)) {

            $err[] = "Поле пароль пусто";

        } else {

            if (strlen($user_password) < 5) {

                $err[] = "Пароль должен содержать 5 и более символов";

            }

        }

        if ($err) {

            return $err;

        }

        if (!$this->checkUniq($this->db, "user_login", $user_login)) {
         
            $err[] = "Логин уже занят";
            
        }

        if (!$this->checkUniq($this->db, "user_mail", $user_mail)) {
         
            $err[] = "Почта уже занята";

        }

        if ($err) {

            return $err;

        }

        $user_password = md5($user_password);
        $req = $this->db->insertUserData("yez-users",$user_login, $user_mail, $user_password);
        if ($req) {

            $req = $this->db->getUserPassword($user_login, $user_password);

            if ($req->num_rows != 0) {
    
                $rows = $req->fetch_assoc();
                $_SESSION['uid'] = $rows['id'];
                $_SESSION['ulogin'] = $rows['user_login'];
                $_SESSION['is_auth'] = true;
                return;
    
            } else {
    
                $err[] = "Неправильные данные";
                return $err;
    
            }

        } else {

            $err[] = "Что-то пошло не так";
            return $err;

        }

    }

    public function login($user_login, $user_password) {

        $err = array();

        $user_login = trim($user_login);
        $user_password = trim($user_password);

        if (!$this->checkEmpty($user_login)) {

            $err[] = "Поле логин пусто";

        } else {

            if (strlen($user_login) < 5) {

                $err[] = "Логин должен содержать 5 и более символов";

            }

        }

        if (!$this->checkEmpty($user_password)) {

            $err[] = "Поле пароль пусто";

        } else {

            if (strlen($user_password) < 5) {

                $err[] = "Пароль должен содержать 5 и более символов";

            }

        }

        if ($err) {

            return $err;

        }

        $user_password = md5($user_password);
        $req = $this->db->getUserPassword($user_login, $user_password);

        if ($req->num_rows != 0) {

            $rows = $req->fetch_assoc();
            $_SESSION['uid'] = $rows['id'];
            $_SESSION['ulogin'] = $rows['user_login'];
            $_SESSION['is_auth'] = true;
            return;

        } else {

            $err[] = "Неправильные данные";
            return $err;

        }

    }

    public function getUserData($user_login, $var) {

        $req = $this->db->getAll("yez-users", "user_login", $user_login);
        $res = $req->fetch_assoc();
        return $res[$var];

    }

    private function checkEmpty($variable) {

        if ($variable || !empty($variable)) {

            return true;

        } else {

            return false;

        }

    }

    private function checkUniq($db, $col, $var) {

        if ($db->getAll("yez-users", $col, $var)->num_rows != 0) {

            return false;

        }

        return true;

    }

}


?>