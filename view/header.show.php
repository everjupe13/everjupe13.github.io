<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $doc_info['name'];?> - YeezyShop</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
</head>
<body>
    
    <header class="sticky-top bg-dark">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark text-light">
                <div class="container-fluid">
                    <a class="navbar-brand fs-4" href="/">YeezyShop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ps-4 me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link<?php if ($doc_info['name'] == "Главная страница") {echo ' active" aria-current="page"';} else {echo '"';}?> href="/">Главная</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link<?php if ($doc_info['name'] == "Витрина") {echo ' active" aria-current="page"';} else {echo '"';}?> href="shop.php">Витрина</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">О нас</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Контакты</a>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <?php if ($is_auth): ?>
                                <a class="fw-bold nav-link me-2 text-light" href="account.php">Личный кабинет</a>
                                <a class="fw-bold nav-link text-light" href="controller/LogoutController.php">Выйти</a>
                            <?php else: ?>
                                <a class="fw-bold nav-link me-2 text-light" href="login.php">Авторизация</a>
                                <a class="fw-bold nav-link text-light" href="registr.php">Регистрация</a>
                            <?php endif ?>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    
    
    </header>