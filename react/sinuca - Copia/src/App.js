import React, { useState, useEffect } from 'react';
import CadForm from './components/cadForm/CadForm.js'
import Classificacao from './components/classificacao/Classificacao.js'
import Menu from './components/menu/Menu.js'
import Info from './components/info/Info.js'
import { insereJogador, buscaJogador, editaJogador, excluiJogador, recebeToken } from './api/apiJogador.js';
import './App.css';

function App() {


  ////////////////////////     LISTA DE ESTADOS DE VARIAVEIS     /////////////////////////////////////
  
  //NOME DIGITADO NO CAMPO CADASTRO
  const [name, setName] = useState(''); 
  
  //DADOS SETADOS PARA O CADASTRO
  const [cadastro, setCadastro] = useState([]);

  //LISTA DE JOGADORES
  const [jogadores, setJogadores] = useState([{}]); 

  //JOGADOR CLICADO NA CLASSIFICAÇÃO
  const [jogadorSelecionado, setJogadorSelecionado] = useState({});

  //STATUS PARA RECARREGAR A LISTA DE JOGADORES APÓS ALTERAÇÕES NA MESMA
  const [atualizaListaStatus, setAtualizaListaStatus] = useState(false); 

  //TOKEN
  const [token, setToken] = useState()

///////////////////////////////////////////////////////////////////////////////////////////////////////

  
  
  
  
/////////////////////        MONITORAMENTO DE MUDANÇA DE ESTADOS      ////////////////////////////////
  
  
  
  //REALIZA REQUISIÇÃO PARA ATUALIZAR A LISTA DE JOGADORES SEMPRE QUE AtualizaListaStatus MUDAR PARA TRUE
  useEffect(() => {
    if (atualizaListaStatus) {
      atualizaListaJogadores();
      setAtualizaListaStatus(false);
    }
  }, [atualizaListaStatus]);



  //REALIZA REQUISIÇÃO PARA CADASTRO DE JOGADORES SEMPRE QUE UM NOVO CADASTRO FOR IDENTIFICADO
  useEffect(() => {
    if (cadastro.length) { 
      insereJogador(name);
      setAtualizaListaStatus(true);
    }
  }, [cadastro]);


  
  //AO MONTAR O COMPONENTE, FAZ UMA REQUISIÇÃO PARA BUSCAR A LISTA DE JOGADORES CADASTRADOS
  useEffect(() => {
    atualizaListaJogadores();
    setToken(recebeToken());
  }, []);


  //ATUALIZA A TELA SEMPRE QUE A LITA DE JOGADORES FOR ALTERADA
  useEffect(() => { }, [jogadores]);

///////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////    FUNÇÕES DA PÁGINA    ///////////////////////////////////////////////////
  
  
  
  // FUNÇÃO PARA REALIZAR NOVAS BUSCAS ATUALIZANDO A LISTA DE JOGADORES
  const atualizaListaJogadores = async () => {
    
    
    try {
      const jogadoresData = await buscaJogador();

      if (Array.isArray(jogadoresData)) {
        setJogadores(jogadoresData);
        
      } else {
        console.error('Os dados não são um array:', jogadoresData);
      }

    } catch (error) {
      console.error('Erro ao buscar jogadores:', error);
    }
    setJogadorSelecionado({})
  };



  //FUNÇÃO DELETA JOGADOR
  const deletaJogador = (id) => {
    excluiJogador(id);
    setAtualizaListaStatus(true);
  }


  //FUNÇÃO DELETA JOGADOR
  const atualizaJogador = (id, vitoria, derrota) => {
    editaJogador(id, vitoria, derrota);
    setAtualizaListaStatus(true);
  }


  //FUNÇÃO PARA ATUALIZAR O JOGADOR ATUAL SELECIONADO
  const escolherJogador = (jogador) => {
    setJogadorSelecionado(jogador);
  }


  //SETA UM NOVO CADASTRO PARA INICIAR A REQUISIÇÃO POST
  const cadastrar = (data) => {
    setCadastro(prevCadastro => [...prevCadastro, data]);

  }
  

  //ATUALIZA O ESTADO DA VARIAVEL NOME SEMPRE QUE DIGITADA
  const onTextChange = (value) => {
    setName(value);
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////    MONTAGEM DO COMPONENTE    ////////////////////////////////////////////////////////////////
  
  
  return (
    <div className="corpo">
      <div className='App'>
        <section className='menu'>
          <Menu></Menu>
        </section>
      <section className="cadastro">
        <CadForm
          valor={name}
          onTextChange={onTextChange}
          cadastrar={cadastrar}
        />
      </section>
        
      <section className="tabela">
        <Classificacao jogadores={jogadores} deletaJogador={deletaJogador} escolherJogador={escolherJogador}/> 
      </section>
        
     
        
      <section className='dados'>
        <Info jogador={jogadorSelecionado} atualizaJogador={atualizaJogador} buscaJogador={buscaJogador}></Info>
      </section>
       
      </div>
    </div>
    
   
    
  );
}

export default App;
