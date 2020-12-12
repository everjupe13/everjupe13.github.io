<?php 
require_once(__DIR__."/controller/core.php"); // Initialize core

if (isset($_SESSION['is_auth'])) {

    $is_auth = true;
    $user['id'] = $_SESSION['uid'];
    $user['login'] = $_SESSION['ulogin'];

} else {

    $is_auth = false;

}

$doc_info = [
    "name"=>"Вход",
];


require_once(Route::getTemplatePath($_SERVER['REQUEST_URI']));
?>