import React, { useState, useEffect, createContext, useContext } from 'react';
import EditScreen from './components/editScreen/EditScreen.js'
import RoundScreen from './components/roundScreen/RoundScreen.js'
import Classificacao from './components/classificacao/Classificacao.js';
import LoginScreen from './components/loginScreen/LoginScreen.js'
import CadForm from './components/cadForm/CadForm.js'
import Menu from './components/menu/Menu.js'
import { AuthProvider } from './AuthContext';



import './App.css';

function App() {

 

  const [menuSelected, setMenuSelected] = useState('classificacao')

  const changeMenu = (newItem) => {
    setMenuSelected(newItem)
  }

  return (
    <div className="App">
      <AuthProvider>
        <section className='menu'>
          <Menu changeMenu={changeMenu} />
        </section>
        
        <section className='corpo'>
          {menuSelected === 'edicao' ? <EditScreen /> : null}
          {menuSelected === 'classificacao' ? <Classificacao escolherJogador="" jogadores={null} /> : null}
          {menuSelected === 'jogar' ? <RoundScreen /> : null}
          {menuSelected === 'novo jogador' ? <CadForm/> : null}
          {menuSelected === 'login' ? <LoginScreen/> : null}
        </section>
      </AuthProvider>
      
      
        
    </div>
  );
}

export default App;
