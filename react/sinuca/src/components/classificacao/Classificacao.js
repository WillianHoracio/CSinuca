import './Classificacao.css';
import React, { useState, useEffect } from 'react';
import { buscaJogador } from '../../api/apiJogador';



const Classificacao = ({ escolherJogador , jogadores }) => {

    
    const [listaJogadores, setListaJogadores] = useState([{}])
    
    
   
    useEffect(() => {

        if (!jogadores) {
            const fetchJogadores = async () => {
                try {
                    const jogadoresData = await buscaJogador();
                    setListaJogadores(jogadoresData);
                } catch (error) {
                    console.error("Erro ao buscar jogadores:", error);
                }
            };

            fetchJogadores();

        } else {
            setListaJogadores(jogadores)
        }
    }, []);
    

    const showSelectedPlayer = (jogador) => {
        if (typeof escolherJogador === 'function') {
            escolherJogador(jogador)
        }
    }
      
  

    return (
    <div className='classificacao'>
        <div className="classificacao_cabecalho">
            <div className="classificacao_cabecalho_valor"><label>º</label></div>
                <div className="classificacao_cabecalho_nome"><label>Jogador</label></div>
                <div className="classificacao_cabecalho_valor"><label>%</label></div>
                    <div className="classificacao_cabecalho_valor"><label>V</label></div>
                    <div className="classificacao_cabecalho_valor"><label>D</label></div>
            </div>
            
        <div className="classificacao_tabela">
            
                {
                    Array.isArray(listaJogadores) ? listaJogadores.map((jogador, index) => (
                <div className="classificacao_linha" key={index}>
                    <div className="classificacao_colunaValor"> <label>{index+1}°</label> </div>
                    <div className="classificacao_colunaNome" onClick={() => { showSelectedPlayer(jogador) }}><label>{jogador.NOME}</label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.TAXA_VITORIA}%</label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.VITORIAS}</label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.DERROTAS}</label></div>
                </div>
            )):null}
            
        </div>
    </div>
    );
}

export default Classificacao;

