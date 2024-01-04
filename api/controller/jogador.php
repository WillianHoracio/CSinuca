<?php
    
    require __DIR__ . '/../model/Jogador.php';

    $listaMetodos = [
        'POST' => 'cadastraJogadores',
        'GET' => 'buscaJogadores',
        'DELETE' => 'deletaJogadores',
        'PUT' => 'editaJogadores'
    ];

    $metodo = $_SERVER['REQUEST_METHOD'];

    
    if (array_key_exists($metodo, $listaMetodos)) {
        call_user_func($listaMetodos[$metodo]);
    } else {
        http_response_code(400);
        echo json_encode(['erro' => 'Requisição inválida']);
    }


    function cadastraJogadores() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $novoJogador = new Jogador($dados['nome'], 0, 0, 0);
        $novoJogador->salvarJogador();
        echo json_encode($novoJogador);
    }
    
    function buscaJogadores() {
        $resultado = Jogador::buscarJogador();
        echo json_encode($resultado);
    }
    
    function deletaJogadores() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $deletar = Jogador::deletarJogador($dados['id']);
    }
    
    function editaJogadores() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $taxa = ($dados['vitoria'] / ($dados['vitoria'] + $dados['derrota'])*100);
        $atualizar = Jogador::updateJogador($dados['id'], $dados['vitoria'], $dados['derrota'], $taxa);
        echo json_encode($atualizar);
    }

?>
