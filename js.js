function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var num = window.document.getElementById('number')
    var num2 = Number(num.value)
    var data = new Date()
    //var hora = data.getHours()
    
    msg.innerHTML = "Agora são " + num2 + " horas."
    if (num2 >= 0 && num2 < 12 ){
       
        img.src = 'MANHA2.png'
        msg2.innerHTML = "Bom dia!!!"
    } else if (num2 >= 12 && num2 < 18){
        img.src ='TARDE.png'
        msg2.innerHTML = "Boa tarde!!!"
    } else {
        img.src = 'nOITE.png'
        msg2.innerHTML = "Boa noite!!!"
    }
}