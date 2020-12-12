<?php 
require_once(__DIR__."/controller/core.php"); // Initialize core

if (isset($_SESSION['is_auth'])) {

    $is_auth = true;
    $user['id'] = $_SESSION['uid'];
    $user['login'] = $_SESSION['ulogin'];

    $user_data = new User($db_link);

    $user['mail'] = $user_data->getUserData($user['login'], "user_mail");

} else {

    $is_auth = false;
    header("Location: /");

}

$doc_info = [
    "name"=>"Витрина",
];


require_once(Route::getTemplatePath($_SERVER['REQUEST_URI']));
?>