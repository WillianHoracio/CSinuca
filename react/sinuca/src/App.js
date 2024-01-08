import React, { useState, useEffect, useContext } from 'react';
import EditScreen from './components/editScreen/EditScreen.js'
import RoundScreen from './components/roundScreen/RoundScreen.js'
import Classificacao from './components/classificacao/Classificacao.js';
import LoginScreen from './components/loginScreen/LoginScreen.js'
import CadForm from './components/cadForm/CadForm.js'
import Menu from './components/menu/Menu.js'
import { AuthProvider, AuthContext } from './AuthContext'



import './App.css';

function App() {

  const { isLoggedIn } = useContext(AuthContext)
  

  const [menuSelected, setMenuSelected] = useState('login')

  useEffect(() => {
    if (isLoggedIn === false) {
      setMenuSelected('login')  
    } else {
      setMenuSelected('classificacao')
    }
    
  },[isLoggedIn])

  const changeMenu = (newItem) => {
    setMenuSelected(newItem)
  }

  return (
    <div className="App">
      
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
     
        
    </div>
  );
}

export default App;
