import './Menu.css';
import { CiUser } from "react-icons/ci";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';

const Menu = ({ changeMenu }) => {
 

    const {isLoggedIn, logout} = useContext(AuthContext)


    const clickMenuItem = (item) => () => {
        changeMenu(item);
    }

   
    return (
        <div className='menuBar'>
            

            {isLoggedIn ? (
                <>
                    <div className='menuBar_item' onClick={clickMenuItem('classificacao')}>
                        <label>Classificação</label>
                    </div>
                    <div className='menuBar_item' onClick={clickMenuItem('edicao')}>
                        <label> Edição </label>
                    </div>

                    <div className='menuBar_item' onClick={clickMenuItem('jogar')}>
                        <label> Jogar </label>
                    </div>
                    <div className='menuBar_item' onClick={clickMenuItem('novo jogador')}>
                        <label> Novo Jogador </label>
                    </div>
                    <div className='menuBar_item' onClick={() => {logout()}}>
                        <label>Logout</label>
                        <CiUser size={40}/>
                    </div>
                </>
                
            ) : (
                <>
                    <div className='menuBar_item' onClick={clickMenuItem('classificacao')}>
                        <label>Classificação</label>
                    </div>
                    <div className='menuBar_item' onClick={clickMenuItem('login')}>
                        <label>Login</label>
                        <CiUser size={40}/>
                    </div>
                </>
            )}

            
        </div>
    );
}

export default Menu;
