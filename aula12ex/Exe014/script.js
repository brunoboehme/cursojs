
function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        //cfdfec
        img.src = 'manha.png'
        document.body.style.background = "#cfdfec"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        //f1a81f
        img.src = 'tarde.png'
        document.body.style.background = "#f1a81f"
    } else {
        //boa noite
        //1b2f36
        img.src = 'noite.png'
        document.body.style.background = "#1b2f36"
    }
        
}
