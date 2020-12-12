<?php require_once(HOME."/view/header.show.php"); ?>

    <main class="auth-form">
        <div class="cotainer">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Регистрация</div>
                        <div class="card-body">
                            <form action="controller/RegistrController.php" method="POST">
                                <div class="form-group mt-3 row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Aдрес</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="email-address" required autofocus>
                                    </div>
                                </div>

                                <div class="form-group mt-3 row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Логин</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="login" required autofocus>
                                    </div>
                                </div>

                                <div class="form-group mt-3 row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Пароль</label>
                                    <div class="col-md-6">
                                        <input type="password" id="password" class="form-control" name="password" required>
                                    </div>
                                </div>

                                <div class="col-md-6 mt-3 offset-md-4">
                                    <button type="submit" class="btn btn-primary ms-2 px-3">
                                        Регистрация
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

<?php require_once(HOME."/view/footer.show.php"); ?>