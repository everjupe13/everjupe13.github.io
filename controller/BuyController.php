<?php 

require_once(dirname(__DIR__)."/controller/core.php"); // Initialize core

if (isset($_GET['item_id']) && $_SESSION['is_auth']) {
    
    $team_id = $_GET['item_id'];
    $user_id = $_SESSION['uid'];

    $order = new Order($db_link);
    $order_buy = $order->buyItem($team_id, $user_id);

    header("Location: /");

} else {

    header("Location: /");

}

?>