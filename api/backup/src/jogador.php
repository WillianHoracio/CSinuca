<?php
    
    require __DIR__ . '/../banco/dbJogador.php';

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

        public function gravaJogador($novoJogador) {
           
            $dbJogador = new dbJogador($novoJogador);
            $resposta = $dbJogador->salvarJogador($novoJogador);
            
            header('Content-Type: application/json');
            echo json_encode($resposta);
            
        }
        
    }

///////////////////////////////////////////////////////////////////////////////////////////

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
        $dados = json_decode(file_get_contents("php://input"), true);
        $novojogador = new Jogador($dados['nome'], 0, 0, 0);
        $novojogador->gravaJogador($novojogador);
       
          
    } else 
    
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        $resultado = dbJogador::buscarJogador();
        echo json_encode($resultado);

    }
    
    else 
    
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

        $dados = json_decode(file_get_contents("php://input"), true);
        $deletar = dbJogador::deletarJogador($dados['id']);

    } else





    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

        $dados = json_decode(file_get_contents("php://input"), true);
        $taxa = ($dados['vitoria'] / ($dados['vitoria'] + $dados['derrota'])*100);
        $atualizar = dbJogador::updateJogador($dados['id'], $dados['vitoria'], $dados['derrota'], $taxa);
        echo json_encode($atualizar);

    } else






    {
        //http_response_code(400);
        //echo json_encode(['erro' => 'Requisição inválida']);

    }

?>
