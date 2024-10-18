        
        // CAPTURANDO DADO DO INPUT - PEGANDO PELO id - PARA PEGAR O VALOR, DEPOIS DO PARANTESE TEM QUE COLOCAR ".value"
        let nome = document.getElementById("capturaNome")

        function printar(){
            // alert(`Olá, ${nome.value}`)
            document.getElementById('username').innerText = `Nome digitado: ${nome.value}`
        }
