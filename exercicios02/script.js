function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }
    else {
        // BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}