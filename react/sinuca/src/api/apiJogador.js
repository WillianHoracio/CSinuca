import axios from 'axios';
const url = 'http://localhost:8080/api/'


function getToken() {
    return localStorage.getItem('token');
}





//ENVIA REQUISIÇÃO PARA INSERIR JOGADOR

export async function insereJogador(name) {
    const token = getToken();
    await axios.post(url + 'jogador', {
      nome: name
    }, {
        headers: {Authorization: `Bearer ${token} `}
    }
    )
    .then(function (response) {
        alert('Jogador Cadastrado com Sucesso!')
    })
    .catch(function (error) {
        console.log(error);
    });
     
}

//ENVIA REQUISIÇÃO PARA EXCLUIR JOGADOR PELO ID

export async function excluiJogador(id) {
    const token = getToken();
    await axios.delete(url + 'jogador', {
            data: {
                id: id
            }
    }, {
        headers: {Authorization: `Bearer ${token} `}
    })
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

        
}
  
//ENVIA REQUISIÇÃO PARA BUSCAR A LISTA GERAL DE JOGADORES

export async function buscaJogador() {
    const token = getToken();
    try {
        const response = await axios.get(url + 'jogador', {
          headers: {Authorization: `Bearer ${token}`}
      });
      console.log(response.data)
      return response.data; 
  
    } catch (error) {
        if (error.response) {
            // A requisição foi feita e o servidor respondeu com um código de status
            // que não está no intervalo de 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            // Algum outro erro ocorreu ao fazer a requisição
            console.log('Error', error.message);
        }
    }
  }
  
//ENVIA REQUISIÇÃO PARA ATUALIZAR AS VITÓRIAS E DERROTAS DO JOGADOR

export async function editaJogador(id, vitoria, derrota) {
    const token = getToken();
    await axios.put(url + 'jogador',
        {
            id: id,
            vitoria: vitoria,
            derrota: derrota
        }
        ,{
            headers: {Authorization: `Bearer ${token}`}
        }
    )
    .then(function (response) {
        console.log(response.data);
        
    })
    .catch(function (error) {
        console.log(error);
    });
}