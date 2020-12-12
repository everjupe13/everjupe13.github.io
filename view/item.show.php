<?php require_once(HOME."/view/header.show.php"); ?>

    <section class="showcase">
        <div class="container">
            <div class="row">
                <div class="card col" style="width: 18rem;">
                    <div class="row">
                        <div class="col-4">
                            <img src="assets/img/showcase/<?= $item_data['img'] ?>" class="card-img-top w-100 px-5" alt="">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title"><?= $item_data['name']?></h5>
                                <p class="card-text"><?= $item_data['info']?></p>
                                <p class="card-text"><?= $item_data['price']?></p>
                                <a href="controller/BuyController.php?item_id=<?= $item_data['id']?>" class="btn btn-primary">Купить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>


<?php 
require_once($_SERVER['DOCUMENT_ROOT']."/view/footer.show.php");
?>