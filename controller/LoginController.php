<?php 
require_once(dirname(__DIR__)."/controller/core.php"); // Initialize core
$user = new User($db_link);

if (!empty($_POST['login']) && !empty($_POST['password'])) {
    
    $user_login = $_POST['login'];
    $user_password = $_POST['password'];
    $res = $user->login($user_login, $user_password);

    if ($res) {

        echo "Произошли следующие ошибки:<br><br>";
        foreach ($res as $error) {

            echo "$error<br>";

        }
        echo "<br><a href='/'>На главную!</a>";

    } else {

        header("Location: /");

    }

}

?>