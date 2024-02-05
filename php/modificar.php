<?php 
    include_once("db.php");

    class modificar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }
/*
        public function mostrarDatos($id){
            $parametros = array(":id"=>$id);
            $pdo = $this -> db_handler -> prepare("SELECT nombre, descripcion FROM tareas WHERE id = :id");
            $pdo -> execute($parametros);
            $devolver = $pdo->fetch(PDO::FETCH_ASSOC);
            return $devolver;
        }
*/
        public function modificar($id, $nombre, $descripcion){
            $parametros = array(":id"=>$id, ":nombre"=>$nombre, ":descripcion"=>$descripcion);
            $pdo = $this -> db_handler -> prepare("UPDATE tareas SET nombre=:nombre, descripcion=:descripcion WHERE id = :id");
            $pdo -> execute($parametros);
            return $pdo -> rowcount();
        }
    }

    $tarea = new modificar_tarea();
    //print_r($tarea->mostrarDatos("2"));
    echo $tarea->modificar("2", "tarea2", "test2");
?>