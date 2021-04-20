function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} Horas.`
      
    if (hora >= 0 && hora < 12 ){
        img.src = "IMAGES/dia.png"
       document.body.style.background = "#EFC499"

    } else if (hora >= 12 && hora <= 18 ){
        //BOA TARDE
        img.src = "IMAGES/tarde.png"
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE
        img.src = "IMAGES/noite.png"
        document.body.style.background = '#515154'
    }
}