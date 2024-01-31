<?php 
    include_once("db.php");

    class buscar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function buscar($nombre){
            $parametros = array(":nombre"=>$nombre);
            $pdo = $this -> db_handler -> prepare("SELECT * FROM tareas WHERE nombre LIKE :nombre%");
            $pdo->execute($parametros);
            $row = $pdo->fetchAll(PDO::FETCH_ASSOC);
            return $row;
        }
    }

    $tarea = new buscar_tarea();
    //print_r($tarea->buscar("tarea2"));
    echo json_encode($tarea->buscar("tarea"));
?>