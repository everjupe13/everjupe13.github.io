<?php 

class Order {

    private $db;

    public function __construct(QueryBuilder $db_link) {

        $this->db = $db_link;

    }

    public function getRandomItems($number) {

        $db_req = $this->db->getItems("yez-items");

        for ($i = 0; $i < ($number); $i++) {

            $rows = $db_req->fetch_assoc();
            $data[] = $rows; 

        }

        return $data;

    }

    public function buyItem($id, $user_id) {

        $this->db->insertData('yez-orders', $id, $user_id);

    }

}

?>