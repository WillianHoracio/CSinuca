<?php

require __DIR__ . './conectaBanco.php';

class Jogador {

    public $nome;
    public $vitorias;
    public $derrotas;
    public $taxa_vitoria;

    public function __construct($nome, $vitorias, $derrotas, $taxa_vitoria) {
        $this->nome = $nome;
        $this->vitorias = (int)$vitorias;
        $this->derrotas = (int)$derrotas;
        $this->taxa_vitoria = $taxa_vitoria;
    }
    
    //CADASTRAR NOVO JOGADOR

    public function salvarJogador() {
        try {
            $con = conectaBanco();

            $nome = $this->nome;
            $vitorias = $this->vitorias;
            $derrotas = $this->derrotas;
            $taxa_vitoria = $this->taxa_vitoria;

            $stmt = $con->prepare("INSERT INTO jogador (nome, vitorias, derrotas, taxa_vitoria) 
                                   VALUES (:nome, :vitorias, :derrotas, :taxa_vitoria)");

            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':vitorias', $vitorias);
            $stmt->bindParam(':derrotas', $derrotas);
            $stmt->bindParam(':taxa_vitoria', $taxa_vitoria);
            $stmt->execute();
            $con = null;
            return "Jogador inserido com sucesso!";

        } catch (PDOException $e) {
            return "Erro ao salvar jogador: " . $e->getMessage();
        }
    }

    //BUSCAR TODOS OS JOGADORES

    public static function buscarJogador() {

        try {

            $con = conectaBanco();
    
            $stmt = $con->prepare("SELECT * FROM jogador ORDER BY TAXA_VITORIA DESC");
            $stmt->execute();
    
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            if ($result) {
                return $result;
            } else {
                return "Nenhum jogador encontrado.";
            }
    
        } catch (PDOException $e) {
            return "Erro ao buscar jogador: " . $e->getMessage();
        } finally {
            if ($con) {
                $con = null;
            }
        }

    }

    //DELETAR UM JOGADOR ESPECÍFICO

    public static function deletarJogador($id) {

        try {

            $con = conectaBanco();
    
            $stmt = $con->prepare("DELETE FROM jogador WHERE `jogador`.`id_jogador` = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
    
           
        } catch (PDOException $e) {
            return "Erro ao excluir jogador: " . $e->getMessage();
        } finally {
            if ($con) {
                $con = null;
            }
        }

    }

    //ATUALIZA QUANTIA DE VITÓRIAS / DERROTAS

    public static function updateJogador($id, $vitorias, $derrotas, $taxa) {
        
        try {
            $con = conectaBanco();
    
            $stmt = $con->prepare("UPDATE `jogador` SET `VITORIAS` = :vitorias, `DERROTAS` = :derrotas, `TAXA_VITORIA` = :taxa_vitoria WHERE `jogador`.`ID_JOGADOR` = :id");
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':vitorias', $vitorias);
            $stmt->bindParam(':derrotas', $derrotas);
            $stmt->bindParam(':taxa_vitoria', $taxa);
            $stmt->execute();
    

        } catch (PDOException $e) {
            return "Erro ao atualizar jogador: " . $e->getMessage();
        } finally {
            if ($con) {
                $con = null;
            }
        }
    }





}


?>
