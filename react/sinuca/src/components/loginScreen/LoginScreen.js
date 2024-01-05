import { useContext, useState } from 'react'
import './LoginScreen.css'
import { loginUsuario } from '../../api/apiUser.js'
import { AuthContext } from '../../AuthContext';




const LoginScreen = () => {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [resposta, setResposta] = useState()

    const {login, isLoggedIn} = useContext(AuthContext)


    const atualizaValueLogin = (event) => {
        setUsuario(event.target.value)
    }

    const atualizaValueSenha = (event) => {
        setSenha(event.target.value)
    }

    const enviarLogin = async (event) => {
        event.preventDefault();
        try {
            const respostaLogin = await loginUsuario(usuario, senha);
            if (respostaLogin) {
                login(respostaLogin); 
            } else {
                console.log("Login falhou ou token não recebido.");
                
            }
            setResposta(respostaLogin); // Ainda pode manter isso se quiser usar a resposta para outra coisa
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            // Trate o erro conforme necessário
        }
    };

    return (
        <div className='login'>
            <form className='login_form' onSubmit={enviarLogin}>
                {isLoggedIn ? ( <label> BEM VINDO </label>
                    
                ) : (
                <>
                
                    <div className='login_form_title'>
                        <label>Login</label>
                    </div>
                    <input type="text" placeholder='Login' onChange={atualizaValueLogin}/>
                    <input type="password" placeholder='Senha' onChange={atualizaValueSenha}/>
                    <button>Entrar</button>
                </>
                )}
                
            </form>
        </div>
    )
}

export default LoginScreen