<?php 

class Item {

    private $db;

    public function __construct(QueryBuilder $db_link) {

        $this->db = $db_link;

    }

    public function getOneItem($id) {

        $db_req = $this->db->getOneItem("yez-items", $id);
        $data = $db_req->fetch_assoc();

        return $data;

    }

}

?>