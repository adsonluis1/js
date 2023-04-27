function carregar(){
    var titulo = document.getElementById('titulo')
    var img = document.getElementById('foto')
    var horaatual = new Date()
    var hora = horaatual.getHours()

    

    
    
    if(hora >= 6 && hora <=11){
        titulo.innerText=`são ${hora} horas, está de manhã`
        img.src= 'manha-img.jpg'
        document.body.style.background = '#f49e12'
    }
    else if(hora >= 12 && hora <=18){
        titulo.innerText=`são ${hora} horas, está de tarde`
        img.src= 'tarde-img.jpg'
        document.body.style.background= '#f4a16e'
    }
    else if(hora >= 19 && hora <=23){
        titulo.innerText=`são ${hora} horas, está de noite`
        img.src= 'noite-img.jpeg'
        document.body.style.background= '#191970'
    }
    else{
        titulo.innerText=`são ${hora} horas, está de madrugada`
        img.src= 'noite-img.jpeg'
        document.body.style.background= '#191970'
    }
}

