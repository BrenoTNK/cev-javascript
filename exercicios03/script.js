function verificar()
{
    var data = new Date()                           // Pega a data atual
    var ano = data.getFullYear()                    // Pega só o ano da data atual
    var fano = document.getElementById('txtano')    // Pega o ano digitado no site
    var res = document.getElementById('res')        // Pega a div #res do site

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        // Se não haver nada no input ou se o ano ainda não existir, da o erro;
        alert('[ERRO!] Verifique os dados e tente novamente!')
    }
    else {
        // Se os dados forem digitado corretamente
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''

            // Criação de nova tag no HTML em JavaScript
        var img = document.createElement('img')     // Cria uma nova tag HTML ('img');
        img.setAttribute('id', 'foto')              // Coloca o 'id' de nome 'foto' na tag determinada;

        if (fsex[0].checked) {
            // Se for Homem
            genero = 'Homem'

            if (idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/crianca_homem.jpg')
            }
            else if (idade < 22) {
                // JOVEM
                img.setAttribute('src', 'img/jovem_homem.jpg')
            }
            else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'img/adulto_homem.jpg')
            }
            else {
                // IDOSO
                img.setAttribute('src', 'img/idoso_homem.jpg')
            }
        }
        else if (fsex[1].checked) {
            // Se for mulher
            genero = 'Mulher'

            if (idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/crianca_mulher.jpg')
            }
            else if (idade < 22) {
                // JOVEM
                img.setAttribute('src', 'img/jovem_mulher.jpg')
            }
            else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'img/adulto_mulher.jpg')
            }
            else {
                // IDOSA
                img.setAttribute('src', 'img/idosa_mulher.jpg')
            }
        }
        else {
            alert('[ERRO!] Algo de errado não está certo.')
        }

            // Como vai ser o resultado
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)    // Coloca a tag criada no JS no HTML;
    }
}