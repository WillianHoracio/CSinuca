import { useState } from 'react'
import './LoginScreen.css'
import {loginUsuario} from '../../api/apiUser'


const LoginScreen = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const atualizaValueLogin = (event) => {
        setLogin(event.target.value)
    }

    const atualizaValueSenha = (event) => {
        setSenha(event.target.value)
    }

    const enviarLogin = (event) => {
        event.preventDefault()
        loginUsuario(login,senha)
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={enviarLogin}>
                <div className='login_form_title'>
                    <label>Login</label>
                </div>
                <input type="text" placeholder='Login' onChange={atualizaValueLogin}/>
                <input type="password" placeholder='Senha' onChange={atualizaValueSenha}/>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default LoginScreen