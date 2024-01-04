<?php

require __DIR__ . './conectaBanco.php';

class dbJogador {


    
    public function salvarJogador($jogador) {
        try {
            $con = conectaBanco();

            $nome = $jogador->nome;
            $vitorias = $jogador->vitorias;
            $derrotas = $jogador->derrotas;
            $taxa_vitoria = $jogador->taxa_vitoria;

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
