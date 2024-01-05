import axios from 'axios';
const url = 'http://localhost:8080/api/';

export async function loginUsuario(login, senha) {
    try {
        const response = await axios.post(url + 'usuario', {
            login: login,
            senha: senha
        });
        if (response.data && response.data.token) {
            const token = response.data.token;
            // Verificação básica do formato do JWT
            if (token.split('.').length === 3) {
                return token
            } else {
               return false
            }
        } else {
            return false
        }

    } catch (error) {
        
        console.error('Erro ao logar:', error);
        
        throw error;
    }
}
