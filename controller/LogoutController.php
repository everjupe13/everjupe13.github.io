<?php 
require_once(dirname(__DIR__)."/controller/core.php"); // Initialize core
$user = new User($db_link);

if ($_SESSION['is_auth']) {

    session_destroy();
    header("Location: /");

} else {

    header("Location: /");

}

?>