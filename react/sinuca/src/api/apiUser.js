import axios from 'axios';
const url = 'http://localhost:8080/api/';

export async function loginUsuario(login, senha) {
    try {
        const response = await axios.post(url + 'usuario', {
            login: login,
            senha: senha
        });
        console.log(response.data);
       
        
        return response.data;
    } catch (error) {
        
        console.error('Erro ao logar:', error);
        
        throw error;
    }
}
