<?php require_once(HOME."/view/header.show.php"); ?>

<main class="">
    <section class="slider">
        <div class="container">
        
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/img/slider/yez3.jpg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img/slider/yez4.jpg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img/slider/yez5.jpg" class="d-block w-100" alt="">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    </section>

    <section class="showcase">
        <div class="container">
            <div class="row">
                
            <?php foreach ($items as $item): ?>
                <div class="col-3 mx-2 my-2">
                    <div class="card" style="width: 18rem;">
                        <img src="assets/img/showcase/<?= $item['img'] ?>" class="card-img-top w-100 px-5" alt="">
                        <div class="card-body">
                            <h5 class="card-title"><?= $item['name']?></h5>
                            <p class="card-text"><?= $item['price']?></p>
                            <a href="item.php?item_id=<?= $item['id']?>" class="btn btn-primary">Купить</a>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
                
            </div>
        </div>
    </section>

</main>


<?php 
require_once($_SERVER['DOCUMENT_ROOT']."/view/footer.show.php");
?>