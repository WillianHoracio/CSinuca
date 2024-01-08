<?php
    require_once __DIR__ . '/../vendor/autoload.php';
    use Firebase\JWT\JWT;

    require __DIR__ . '/../model/Usuario.php';

    $listaMetodos = [
        'POST' => 'verificarUsuarios',
    ];

    $metodo = $_SERVER['REQUEST_METHOD'];

    if (array_key_exists($metodo, $listaMetodos)) {
        call_user_func($listaMetodos[$metodo]);
    } else {
        http_response_code(400);
        echo json_encode(['erro' => 'Requisição inválida']);
    }

    function verificarUsuarios() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $resultado = Usuario::verificaUsuario($dados['login'], $dados['senha']);

        if ($resultado == 'logado') {
            $issuedAt = time();
            $expirationTime = $issuedAt + 3600; 
            $payload = array(
                'usuario' => $dados['login'],
                'iat' => $issuedAt,
                'exp' => $expirationTime
            );

            $jwt = JWT::encode($payload, 'chave', 'HS256');
            echo json_encode(['token' => $jwt]);
        } else {
            echo json_encode(false);
        }
    }
?>
