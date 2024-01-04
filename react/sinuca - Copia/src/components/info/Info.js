import './Info.css';
import React, { useState, useEffect } from 'react';

const Classificacao = ({ jogador, atualizaJogador, buscaJogador }) => {
    
    const [contVitoria, setContVitoria] = useState(0);
    const [contDerrota, setContDerrota] = useState(0);
    
    
    const updateJogador = (id, vitoria, derrota) => {
        atualizaJogador(id, vitoria, derrota)
    }

    const enviaUpdate = (e) => {
        e.preventDefault();

        const novasVitorias = parseInt(jogador['VITORIAS']) + parseInt(contVitoria);
        const novasDerrotas = parseInt(jogador['DERROTAS']) + parseInt(contDerrota);

        updateJogador(jogador['ID_JOGADOR'], novasVitorias, novasDerrotas)
        
        buscaJogador();
        setContDerrota(0);
        setContVitoria(0);
    }

    const aoClicar = (e) => {
        
        if (e.shiftKey) {
            if (e.target.className === 'info_vitoria') {
                setContVitoria(contVitoria - 1)
            } else
                if (e.target.className === 'info_derrota') {
                setContDerrota(contDerrota - 1)
            }
        }
        else
        {
            if (e.target.className === 'info_vitoria') {
                setContVitoria(contVitoria + 1)
            } else
                if (e.target.className === 'info_derrota') {
                setContDerrota(contDerrota + 1)
            }

        }
            
    }

    useEffect(() => {
        setContVitoria(0)
        setContDerrota(0)
    },[jogador])

    return (
        <div className="info modulo">
            <div className="painel">
                <div className='info_nomeJogador'>
                    <label>{jogador['NOME']}</label>
                </div>
                <div className="info_taxaVitoriaJogador">
                    <label>{jogador['TAXA_VITORIA']}%</label>
                </div>

                <form className="info_form" onSubmit={enviaUpdate}>
                    <div className="info_form_up">
                        <div className="info_vitoria" onClick={aoClicar}><label>{contVitoria}</label></div>
                        <div className="info_derrota" onClick={aoClicar}><label>{contDerrota}</label></div>
                    </div>
                    <div className="info_form_down">
                        <button className="info_enviar"> ENVIAR</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Classificacao;
