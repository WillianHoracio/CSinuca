import './CadForm.css';
import React, { useState, useEffect } from 'react';
import { CiSquarePlus } from "react-icons/ci";

const CadForm = ({valor, onTextChange, cadastrar}) => {

    const onFieldChange = (event) => {
        onTextChange(event.target.value);
    }

    const registrar = (event) => {
        event.preventDefault();
        cadastrar(
            {
                nome: valor,
                vitorias: 0
            }
        )

        
    }

    return (
        <div className="cadForm modulo">
            
            <form onSubmit={registrar}>
                
                <input type="text" onChange={onFieldChange} onClick={(event)=>{event.target.value = ''}}placeholder="Nome do novo jogador"/>
                <button><CiSquarePlus size={40}/></button>
            </form>
        </div>
    );
}

export default CadForm;