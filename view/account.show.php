<?php require_once(HOME."/view/header.show.php"); ?>

    <main class="profile">
        <div class="container">
            <div class="card">
                <h5 class="card-header">Приветствую!</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            <img src="http://placehold.it/380x500" alt="photo" class="img-rounded w-100">
                        </div>
                        <div class="col-4">
                            <h5 class="card-title">Личные данные</h5>
                            <p class="card-text"><?= $user['login']?></p>
                            <p class="card-text"><?= $user['mail']?></p>
                            <p class="card-text">ID в системе: <?= $user['id']?></p>                     
                        </div>
                        <div class="col-6">
                        <table class="u-full-width">
                            <p>История покупок</p>
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach($items as $item): ?>
                                    <tr>
                                        <td><?= $item['name'];?></td>
                                        <td><?= $item['price'];?> руб</td>
                                    </tr>
                                <?php endforeach ?>
                            </tbody>
                        </table>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
   
<?php require_once(HOME."/view/footer.show.php"); ?>