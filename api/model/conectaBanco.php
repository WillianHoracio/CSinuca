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

        die("Erro de conexão: " . $e->getMessage());
    }
}
?>
