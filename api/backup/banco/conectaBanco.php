<?php

function conectaBanco(){
    $host = 'localhost';
    $dbname = 'sinuca';
    $username = 'root';
    $password = '';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        // Em caso de erro, exibe a mensagem de erro
        die("Erro de conexão: " . $e->getMessage());
    }
}
?>
