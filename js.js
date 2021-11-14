function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22;
    msg.innerHTML = "Agora são " + hora + " Horas."
    if (hora >= 0 && hora < 12 ){
       
        img.src = 'MANHA2.png'
        msg2.innerHTML = "Bom dia!!!"
    } else if (hora >= 12 && hora < 18){
        img.src ='TARDE.png'
        msg2.innerHTML = "Boa tarde!!!"
    } else {
        img.src = 'nOITE.png'
        msg2.innerHTML = "Boa noite!!!"
    }
}