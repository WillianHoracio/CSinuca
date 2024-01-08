<?php

require_once './vendor/autoload.php'; // Importa o autoloader do Composer
use \Firebase\JWT\JWT; // Importa a classe JWT


    // TRATAMENTO CORS
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: *, AUTHORIZATION");

   


    
    
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
    /* }

    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    
error_log("Auth Header: " . $authHeader); // Adicione esta linha para depuração

    list($jwt) = sscanf($authHeader, 'Bearer %s');

    if (!$jwt) {
        // Token não fornecido
        http_response_code(401);
        echo json_encode(['error' => 'Token não fornecido']);
        exit();
    }

    try {
        // Decodifica o token
        $decoded = JWT::decode($jwt, 'chave', array('HS256'));
    
        // Token válido - continue com a execução
    } catch (Exception $e) {
        // Token inválido
        http_response_code(401);
        echo json_encode(['error' => 'Token inválido']);
        exit();
    }
*/
?>