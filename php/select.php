<?php 
    include_once("db.php");

    class modificar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function mostrarDatos(){
            $pdo = $this -> db_handler -> prepare("SELECT * FROM tareas");
            $pdo -> execute();
            $devolver = $pdo->fetchAll(PDO::FETCH_ASSOC);
            return $devolver;
        }
    }

    $tarea = new modificar_tarea();
    echo json_encode($tarea->mostrarDatos("tarea"));
?>