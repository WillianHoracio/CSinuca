<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: *");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }
   
    $rota = isset($_SERVER['HTTP_ROTA']) ? $_SERVER['HTTP_ROTA'] : null;
   

    $rotas = [
        'jogador' => './src/jogador.php'
    ];

    include $rotas[$rota];

?>
