function carregar(){
    var titulo = document.getElementById('titulo')
    var img = document.getElementById('foto')
    var horaatual = new Date()
    var hora = horaatual.getHours()
    
    if(hora >= 6 && hora <=11){
        titulo.innerText=`são ${hora}, está de manhã`
       
    }
    else if(hora >= 12 && hora <=18){
        titulo.innerText=`são ${hora}, está de tarde`
    }
    else if(hora >= 19 && hora <=23){
        titulo.innerText=`são ${hora}, está de noite`
    }
    else{
        titulo.innerText=`são ${hora}, está de madrugada`
    }
}

