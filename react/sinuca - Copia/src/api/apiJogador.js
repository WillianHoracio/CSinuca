import axios from 'axios';
const url = 'http://localhost:8080/api/'


export async function recebeToken(name) {
    await axios.get(url + 'autenticacao.php')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
     
}



//ENVIA REQUISIÇÃO PARA INSERIR JOGADOR

export async function insereJogador(name) {
    await axios.post(url + 'routes.php', {
      nome: name
    },
    { headers: { 'rota':'jogador'}}
    )
    .then(function (response) {
        
    })
    .catch(function (error) {
        console.log(error);
    });
     
}

//ENVIA REQUISIÇÃO PARA EXCLUIR JOGADOR PELO ID

export  async function excluiJogador(id) {
    await axios.delete(url + 'routes.php', {
            data: {
                id: id
            },
            headers: {
                'rota': 'jogador'
            }
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
    try {
      const response = await axios.get(url + 'routes.php', {
        headers: { 'rota': 'jogador' }
      });
  
      return response.data; 
  
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }
  
//ENVIA REQUISIÇÃO PARA ATUALIZAR AS VITÓRIAS E DERROTAS DO JOGADOR

export async function editaJogador(id, vitoria, derrota) {
    await axios.put(url + 'routes.php',
        {
            id: id,
            vitoria: vitoria,
            derrota: derrota
        },
        {
            headers: {
                'rota': 'jogador'
            }
        }
    )
    .then(function (response) {
        console.log(response.data);
        
    })
    .catch(function (error) {
        console.log(error);
    });
}