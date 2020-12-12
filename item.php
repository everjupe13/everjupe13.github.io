<?php 
require_once(__DIR__."/controller/core.php"); // Initialize core

if (isset($_SESSION['is_auth'])) {

    $is_auth = true;
    $user['id'] = $_SESSION['uid'];
    $user['login'] = $_SESSION['ulogin'];

} else {

    $is_auth = false;

}

if (isset($_GET['item_id'])) {

    $item_id = $_GET['item_id'];

} else {

    header("Location: /");

}

$doc_info = [
    "name"=>"Купить",
];

$item = new Item($db_link);
$item_data = $item->getOneItem($item_id);

require_once(HOME."/view/item.show.php");

?>
