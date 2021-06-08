function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById("txtano")
    var resultado = document.querySelector('div#resultado')

    if (formAno.value.length == 0 || Number(formAno.value) > anoAtual) {
        alert('Verifique os dados e tente novamente')
    }
    else {
            var formSexo = document.getElementsByName('radioSexo')
            var idade = anoAtual - Number(formAno.value)
            var genero = ''
            var imagem = document.createElement('img')
            imagem.setAttribute('id', 'foto')

            if (formSexo[0].checked) {
                genero = 'Homem'
                
                if (idade >= 0 && idade < 12){
                    // criança
                    imagem.setAttribute('src', 'imagens/menino.png')
                }
                else if (idade < 21) {
                    //Jovem
                    imagem.setAttribute('src', 'imagens/rapaz.png')
                }
                else if (idade < 50){
                    // Adulto
                    imagem.setAttribute('src', 'imagens/homem.png')
                }
                else {
                    // Idoso
                    imagem.setAttribute('src', 'imagens/idoso.png')
                }
            }
            else {
                genero = "Mulher"

                if (idade >= 0 && idade < 12){
                    // criança
                    imagem.setAttribute('src', 'imagens/menina.png')
                }
                else if (idade < 21) {
                    //Jovem
                    imagem.setAttribute('src', 'imagens/moca.png')
                }
                else if (idade < 50){
                    // Adulto
                    imagem.setAttribute('src', 'imagens/mulher.png')
                }
                else {
                    // Idoso
                    imagem.setAttribute('src', 'imagens/idosa.png')
                }
            }
            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            resultado.appendChild(imagem)    
    }

}