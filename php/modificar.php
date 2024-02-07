<?php 
    include_once("db.php");

    class modificar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function modificar($id, $nombre, $descripcion){
            $parametros = array(":id"=>$id, ":nombre"=>$nombre, ":descripcion"=>$descripcion);
            $pdo = $this -> db_handler -> prepare("UPDATE tareas SET nombre=:nombre, descripcion=:descripcion WHERE id = :id");
            $pdo -> execute($parametros);
        }
    }

    $tarea = new modificar_tarea();
    //print_r($tarea->mostrarDatos("2"));
    echo $tarea->modificar($_POST["id"], $_POST["nombre"], $_POST["descripcion"]);
?>