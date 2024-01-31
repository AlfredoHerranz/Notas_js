<?php
    define("DB_HOST", "localhost");
    define("DB_NAME", "tareas");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");

    class db{
        private $host;
        private $dbName;
        private $user;
        private $password;
        
        private $db_handler;

        private function __construct() {}

        public static function conectar(){
            $host = DB_HOST;
            $dbName = DB_NAME;
            $user = DB_USER;
            $password = DB_PASSWORD;

            $db_handler = null;
            try{
                $dns = "mysql:dbname=$dbName;host=$host";
                $db_handler = new PDO($dns, $user, $password);
                $db_handler -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $db_handler -> exec("set names utf8");
                // echo "Conexión realizada con éxito";
            } catch(Exception $e){
                die ("Error en la conexión ".$e -> getMessage());
                echo "Número de línea del error: ".$e -> getLine();
            }
            return $db_handler;
        }
    }

    // db::conectar();
?>