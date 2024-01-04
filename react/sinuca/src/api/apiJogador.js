import axios from 'axios';
const url = 'http://localhost:8080/api/'



//ENVIA REQUISIÇÃO PARA INSERIR JOGADOR

export async function insereJogador(name) {
    await axios.post(url + 'jogador', {
      nome: name
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

export  async function excluiJogador(id) {
    await axios.delete(url + 'jogador', {
            data: {
                id: id
            }
    })
    .then(function (response) {
        //console.log(response.data)
    })
    .catch(function (error) {
        //console.log(error);
    });

        
}
  
//ENVIA REQUISIÇÃO PARA BUSCAR A LISTA GERAL DE JOGADORES

export async function buscaJogador() {
    try {
      const response = await axios.get(url + 'jogador');
    
      return response.data; 
  
    } catch (error) {
      //console.error('Erro na requisição:', error);
      throw error;
    }
  }
  
//ENVIA REQUISIÇÃO PARA ATUALIZAR AS VITÓRIAS E DERROTAS DO JOGADOR

export async function editaJogador(id, vitoria, derrota) {
    await axios.put(url + 'jogador',
        {
            id: id,
            vitoria: vitoria,
            derrota: derrota
        }
    )
    .then(function (response) {
       // console.log(response.data);
        
    })
    .catch(function (error) {
        //console.log(error);
    });
}