<?php 

class Route {

    // public static function addController($uri) {

    //     if (strpos($uri, "Controller") === false) {

    //         return;

    //     }

    //     $uri = str_replace('.php', '', str_replace("/", "", $uri)) ."Controller.php";
    //     $file = HOME ."/controller/". $uri;
        
    //     if (file_exists($file)) {

    //         require_once($file);

    //     }

    // }

    public static function getTemplatePath($uri) {

        if ($uri == "/") {

            $uri = "/index.php";

        }

        $uri = str_replace('.php', '', str_replace("/", "", $uri)) .".show.php";
        $file = HOME ."/view/". $uri;
        
        if (file_exists($file)) {

            return $file;

        }

    }

}

?>