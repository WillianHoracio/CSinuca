import './CadForm.css';
import React, { useState } from 'react';
import { insereJogador } from '../../api/apiJogador.js'

const CadForm = () => {

    const [cadastro, setCadastro] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        insereJogador(cadastro);
        setCadastro('')
    }
    
    const onTextChange = (event) => {
        setCadastro(event.target.value);
    }

    return (
        <div className="cadForm">
            <form onSubmit={formSubmit}> {/* Corrigido para passar apenas a referência da função */}
                <div className='cadForm_title'>
                    <label>Novo Jogador</label>
                </div>
                <input type="text" placeholder="Nome" onChange={onTextChange} value={cadastro}/>
                <button type="submit">Cadastrar</button> {/* Adicionei type="submit" aqui */}
            </form>
        </div>
    );
}

export default CadForm;
