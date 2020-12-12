<?php 
require_once(dirname(__DIR__)."/controller/core.php"); // Initialize core
$user = new User($db_link);

if (!empty($_POST['login']) && !empty($_POST['password']) && !empty($_POST['email-address'])) {
    
    $user_login = $_POST['login'];
    $user_mail = $_POST['email-address'];
    $user_password = $_POST['password'];
    $res = $user->registr($user_login, $user_mail, $user_password);

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