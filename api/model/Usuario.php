<?php

require __DIR__ . './conectaBanco.php';

class Usuario {

    public $login;
    public $senha;

    public function __construct($login, $senha) {
        $this->login = $login;
        $this->senha = $senha;
       
    }
   
    //BUSCAR TODOS OS JOGADORES

    public static function verificaUsuario($login, $senha) {

        try {

            $con = conectaBanco();
    
            $stmt = $con->prepare("SELECT senhaUsuario FROM `usuario` WHERE (loginUsuario = :userLogin)");
            $stmt->bindParam(':userLogin', $login);
            $stmt->execute();
    
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($result)) {
                // Como você espera apenas um registro, você pode diretamente acessar o primeiro elemento.
                $senhaUsuario = $result[0]['senhaUsuario'];

                if (password_verify($senha, $senhaUsuario)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                // Nenhum usuário encontrado com esse login.
                return "Usuário não encontrado";
            }
    
        } catch (PDOException $e) {
            return "Erro ao buscar usuario: " . $e->getMessage();
        } finally {
            if ($con) {
                $con = null;
            }
        }

    }





}


?>