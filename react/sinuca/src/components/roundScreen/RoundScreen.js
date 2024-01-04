import React, { useState, useEffect } from 'react';
import Classificacao from '../classificacao/Classificacao.js';
import Partida from '../partida/Partida.js';
import { buscaJogador, editaJogador, excluiJogador } from '../../api/apiJogador.js';
import './RoundScreen.css';

function RoundScreen() {
  const [jogadores, setJogadores] = useState([{}]);
  const [jogadorSelecionado, setJogadorSelecionado] = useState({});
  const [atualizaListaStatus, setAtualizaListaStatus] = useState(false);
  const [carregandoDados, setCarregandoDados] = useState(true);

  const atualizaListaJogadores = async () => {
    setCarregandoDados(true);
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
    setJogadorSelecionado({});
    setCarregandoDados(false);
  };

  useEffect(() => {
    if (atualizaListaStatus) {
      atualizaListaJogadores();
      setAtualizaListaStatus(false);
    }
  }, [atualizaListaStatus]);

  useEffect(() => {
    atualizaListaJogadores();
  }, []);

  const deletaJogador = (id) => {
    excluiJogador(id);
    setAtualizaListaStatus(true);
  }

  const atualizaJogador = (id, vitoria, derrota) => {
    editaJogador(id, vitoria, derrota);
    setAtualizaListaStatus(true);
  }

  const escolherJogador = (jogador) => {
    setJogadorSelecionado(jogador);
  }

  return (
    <div className="roundScreen">
      <section className="roundScreen_tabela">
        {!carregandoDados && (
          <Classificacao
            escolherJogador={escolherJogador}
            jogadores={jogadores}
          />
        )}
      </section>

      <section className='roundScreen_form'>
        <Partida jogadorSelecionado={jogadorSelecionado ? jogadorSelecionado : null}/>
        
        {carregandoDados && <div>Carregando dados...</div>}
      </section>
    </div>
  );
}

export default RoundScreen;
