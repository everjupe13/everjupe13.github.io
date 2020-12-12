<?php 
// /**
//  * @author dafglue.dev
//  * 
//  */

// "php.validate.executablePath": "C:/Users/extangeh/Desktop/MainDev/Web-war/local_server/OpenServer/modules/php/PHP_7.4/php.exe",

session_start();

/**
 * Set system settings
 */
ini_set("display_errors","1"); // Show errors
ini_set("display_startup_errors","1");
ini_set('error_reporting', E_ALL);
mb_internal_encoding('UTF-8'); // Encoding by default
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Change warnings on fatal error !FOR DEVELOP

/**
 * Define all system contstants and variables
 */
define('HOME', dirname(__DIR__)); // Server path to site
define('URL', 'http://' . $_SERVER['HTTP_HOST']); // URL path to site
define('dafSHOP_VERSION', '0.0.1'); // Version of core

/**
 * Load all classes (not works)
 */
spl_autoload_register(function ($name) {

    $file = dirname(__DIR__) . '/model/classes/' . $name . '.php';
    if(!file_exists($file)) {
        throw new Exception('Autoload class: File '.$file.' not found');
    }
 
    include($file);

});

/**
 * Initialize MySQL, DB connection
 */
require_once(HOME."/config.php");
$db_link = new QueryBuilder(DbConnection::make($db_host, $db_login, $db_password, $db_name));

/**
 * Include controllers/...Controller.php file
 */
// Route::addController($_SERVER['REQUEST_URI']);
// Route::addView($_SERVER['REQUEST_URI']);


// $user = new User($db_link);
// $statement = $user->registr("admin8", "admin@gmail.com");


?>