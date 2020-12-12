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
    "name"=>"Личный кабинет",
];

$user_id = $user['id'];

$db = mysqli_connect("localhost", "root", "root", "yeezy-drop");
$user_data = $db->query("SELECT item_id FROM `yez-orders` WHERE user_id = '$user_id'");

while ($rows = $user_data->fetch_assoc()) {

    $user_id_order = $rows;
    $items_data = $db->query("SELECT * FROM `yez-items` WHERE id = '".$user_id_order['item_id']."'");

    while ($rows2 = $items_data->fetch_assoc()) {

        $items[] = $rows2;

    }

}




require_once(Route::getTemplatePath($_SERVER['REQUEST_URI']));
?>