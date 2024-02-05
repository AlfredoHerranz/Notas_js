<?php 
    include_once("db.php");

    class insertar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function insertar($nombre, $descripcion){
            $parametros = array(":nombre"=>$nombre,":descripcion"=>$descripcion);
            $pdo = $this -> db_handler -> prepare("INSERT INTO tareas (nombre, descripcion) VALUES (:nombre, :descripcion)");
            $pdo -> execute($parametros);
            return $pdo -> rowcount();
        }
    }

    $tarea = new insertar_tarea();
    echo $tarea->insertar($_POST["nombre"], $_POST["descripcion"]);
?>