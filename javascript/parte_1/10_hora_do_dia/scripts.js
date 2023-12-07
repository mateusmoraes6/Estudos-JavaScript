function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img//img_manha.png'
        document.body.style.background = '#F9E79F'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE
        img.src = 'img//img_tarde.png'
        document.body.style.background = '#D35400'
    } else {
        // BOA NOITE
        img.src = 'img//img_noite.png'
        document.body.style.background = '#081929'
    }
}
