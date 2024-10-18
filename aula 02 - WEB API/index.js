// WEB API SÃO UMA FORMA DE CONECTARMOS NOSSA APLICAÇÃO COM SITE DE TERCEIROS E REALIZAR AÇÕES COMO REQUISITAR UM DADO, ETC.

// VAMOS ESTUDAR A API DE ARQUIOS (file api) TEM ACESSO A ARQUIVOS E CONTEÚDOS DO USUÁRIO QUANDO QUISER ABRIR UM ARQUIVO DE  UM CADASTRO FEITO ANTERIORMENTE 
// OU SALVAR O CADASTRO ATUAL NA MÁQUINA DELE.

// OS DADOS DE CADASTROS SERÃO SALVOS EM FORMATO DE JSON


// CRIANDO FUNCAO QUE MOSTRA O ARQUIVO, EXIBE AS CONFIG DO ARQUIVO E MOSTRA PRO USUÁRIO
function mostrarArquivo(arquivo){
    // seleciiona um arquivo, o primeiro
    let arquivoInserido = arquivo.files[0];
    
    // lendo os dados do arquivo - file Reader(leitor de arquivo) e blob(representa os aquivos)
    // leitor de arquivo
    let leitor = new FileReader()

    // quando o fileReader ler o arquivo, o onLoad é chamada quando ele conseguir carregar o arquivo, recebe uma funcao que recebe os dados dentro do arquivo que vem em String
    leitor.onload = function(dados){
        // devemos converter de texto para JSON, o alvo dele é pegar o conteudo deles
        let dadosArquivo = JSON.parse(dados.target.result)

        // os dadosArquivo já terá os dados Jaascript que são os valores do JSON
        // agora temos que pegar os dados do arquivo que foi inserido e colocar cada um de acordo com cada campo dos inputs

        // estamos pegando o input do nome e estamos modificando o valor dele, para receber o dado do campo nome da variável que contém o JSON
        document.getElementById("nome").value = dadosArquivo.nome
        document.getElementById("cidade").value = dadosArquivo.cidade
        document.getElementById("estado").value = dadosArquivo.estado
    }

    // realizar a leitura dos arquivos. chamamos o leitor e usamos uma função que lê o arquivo passando a variável que recebe o arquivo.
    leitor.readAsText(arquivoInserido);
}

// criacao da funcionalidade para salvar o arquivo dos dados que o usuário inseriu
function salvarArquivo(){

    // variavel que cria um link para download
    let linkTemporario = document.createElement("a")

    // criando o objeto JSON para guardar os dados
    let dadoSalvar = {

        // o JSON vai receber os dados inseridos nos inputs do HTML
        "nome": document.getElementById("nome").value,
        "cidade":document.getElementById("cidade").value,
        "estado":document.getElementById("estado").value
    }

    // criar um arquivo com esses dados - BLOB (representação de um arquivo que é um objeto que pode ser baixado. Ele é um objeto que poderá ser baixado)
    // criando o BLOB
    // estamos transformando um objeto e transformando em uma String, e depois dizemos que será do tipo texto
    let arquivoBlob = new Blob([JSON.stringify(dadoSalvar)], {type:"text/plain"})

    // usuario precisa baixar o arquivo
    // estamos modificando o href do link para que ele aponte para a URL que é o próprio arquivo, permitindo que ele seja salvo
    linkTemporario.setAttribute("href",URL.createObjectURL(arquivoBlob))

    //setando no atributo download do elemento a, para que o nome do arquivo dele esteja setado
    linkTemporario.setAttribute("download","dados.json")

    // permitir que o link seja clicavel para que seja realizado a ação do download
    linkTemporario.click()
}