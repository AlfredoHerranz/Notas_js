<?php 
    include_once("db.php");

    class select_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function mostrarDatos($id){
            $parametros = array(":id"=>$id);
            $pdo = $this -> db_handler -> prepare("SELECT * FROM tareas WHERE id = :id");
            $pdo -> execute($parametros);
            $devolver = $pdo->fetch(PDO::FETCH_ASSOC);
            return $devolver;
        }
    }

    $tarea = new select_tarea();
    echo json_encode($tarea->mostrarDatos($_POST["id"]));
?>