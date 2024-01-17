<?php

require_once './vendor/autoload.php'; // Importa o autoloader do Composer
use \Firebase\JWT\JWT; // Importa a classe JWT
use Firebase\JWT\Key;


    // TRATAMENTO CORS
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: *, Authorization");
    header("Access-Control-Allow-Credentials: true");

    


    
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    list($token) = sscanf($authHeader, 'Bearer %s');
    
    $chaveToken = 'chave';

    try {
        $decoded = JWT::decode($token, new Key($chaveToken, 'HS256'));
        // Restante do seu código aqui...
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(['error' => 'Token inválido: ' . $e->getMessage()]);
        exit();
    }
    
    
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }
   

    // Obtém o caminho da URL
    $path = $_SERVER['REQUEST_URI'];
    $pathParts = explode('/', trim($path, '/'));

    // O primeiro segmento da URL será a rota (ex: 'jogador')
    $rota = $pathParts[1] ?? null;
  
    
    switch ($rota) {
        case 'jogador':
            include 'controller/jogador.php';
            break;
            
        case 'usuario':
            include 'controller/usuario.php';
            break;
        default:
           
            http_response_code(404);
            echo json_encode(['error' => 'Rota não encontrada']);
            break;
    }
?>