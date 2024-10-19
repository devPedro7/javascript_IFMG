// o objetivo desta aula é de digitarmos o nosso CEP e os outros campos serão preenchidos automaticamente

// 1 - precisamos de um evento de quando o user clique no campo referente a rua dele, os outros dados devem ser preenchidos de acordo com o CEP inserido
// para isso precisamos do evento: onFocusOut, quando o input do CEP perder o foco (deixar de estar clicado) a funcao buscar endereco deve ser chamada

function buscarEndereco(){
    // devemos pegar o dado que foi inserido nos inputs
    let cep = document.getElementById("cep").value

    // depois de conseguir o dado, devemos fazer a consulta no site do Brasil API passando a variavel CEP como parametro
    // utilizamos a função Fetch que é responsável por fazer requisições em APIS
    fetch(`https://brasilapi.com.br/api/cep/v1/$${cep}`)
    // depois que o fetch faz a busca, temos que ter uma função que trata esses dados retornados
    .then((dados)=>{
    // quando recebemos esses dados, recebemos como JSON, e temos que convertê-los para javascript
    dados.json()
    // depois que criar o json, iremos armazenar os valores em outra variavel que utilizaremos para preencher nos inputs
    .then((endereco)=>{
        // inserindo os dados do endereco em cada input
        // estamos atribuindo ao input da rua, o valor recebido do json armazenado no endereco que acessa o campo street da API
        document.getElementById("rua").value = endereco.street
        document.getElementById("bairro").value = endereco.neighborhood
        document.getElementById("cidade").value = endereco.city
        document.getElementById("estado").value = endereco.state
    })  
    })
}