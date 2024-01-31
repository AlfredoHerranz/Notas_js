<?php 
    include_once("db.php");

    class borrar_tarea{
        private $db_handler;

        public function __construct(){
            $this -> db_handler = db::conectar();
        }

        public function borrar($id){
            $parametros = array(":id"=>$id);
            $pdo = $this->db_handler->prepare("DELETE FROM tareas WHERE id = :id");
            $pdo->execute($parametros);
            return $pdo->rowcount();
        }
    }

    $tarea = new borrar_tarea();
    echo $tarea->borrar("1");
?>