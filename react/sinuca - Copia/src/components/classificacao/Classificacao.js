import './Classificacao.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../App.css';
import { SlTrash } from "react-icons/sl";


const Classificacao = ({ jogadores, deletaJogador, escolherJogador }) => {

    const onClickDelete = (id) => {
        deletaJogador(id)
    }


    const escolheJogador = (jogadorEscolhido) => {
        escolherJogador(jogadorEscolhido)
    }


    if (!Array.isArray(jogadores)) {
        console.error('jogadores não é uma array.');
        return (
            <div className='modulo'>
                <div className="classificacao_cabecalho">
                    <div className="classificacao_cabecalho_nome"><label>Jogador</label></div>
                    <div className="classificacao_cabecalho_valor"><label>%</label></div>
                            <div className="classificacao_cabecalho_valor"><label>V</label></div>
                            <div className="classificacao_cabecalho_valor"><label>D</label></div>
                </div>
            </div>    
            );
    }

    return (
    <div className='modulo'>
        <div className="classificacao_cabecalho">
                <div className="classificacao_cabecalho_nome"><label>Jogador</label></div>
                <div className="classificacao_cabecalho_valor"><label>%</label></div>
                    <div className="classificacao_cabecalho_valor"><label>V</label></div>
                    <div className="classificacao_cabecalho_valor"><label>D</label></div>
        </div>
        <div className="classificacao modulo">
            
            {jogadores.map((jogador, index) => (
                <div className="classificacao_linha" key={index}>
                    <div className="classificacao_posicao"><label>{index+1}°</label></div>
                    <div className="classificacao_colunaNome" onClick={() => { escolheJogador(jogador) }}><label>{jogador.NOME}<div><SlTrash size={20} onClick={() => { onClickDelete(jogador.ID_JOGADOR) }} /></div></label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.TAXA_VITORIA}%</label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.VITORIAS}</label></div>
                    <div className="classificacao_colunaValor"><label>{jogador.DERROTAS}</label></div>
                </div>
            ))}
            
            </div>
        </div>
    );
}

export default Classificacao;

