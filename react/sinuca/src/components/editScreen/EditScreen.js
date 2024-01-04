import React, { useState, useEffect } from 'react';
import Classificacao from '../classificacao/Classificacao.js';
import Info from '../info/Info.js';
import { buscaJogador, editaJogador, excluiJogador } from '../../api/apiJogador.js';
import './EditScreen.css';

function EditScreen() {
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
        console.error('Os dados não são um array');
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
    <div className="editScreen">
      <section className="editScreen_tabela">
        {!carregandoDados && (
          <Classificacao
            escolherJogador={escolherJogador}
            jogadores={jogadores}
          />
        )}
      </section>

      <section className='editScreen_form'>
        
          <Info
            jogador={jogadorSelecionado}
            atualizaJogador={atualizaJogador}
            buscaJogador={buscaJogador}
          />
        
        {carregandoDados && <div>Carregando dados...</div>}
      </section>
    </div>
  );
}

export default EditScreen;
