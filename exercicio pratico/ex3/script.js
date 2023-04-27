function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var tela = document.getElementById('tela')

    

    if(passos <=0){
        tela.innerHTML= 'valor do fim invalido'
    }else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        
        if(p <= 0){
            alert('[ERRO]coloque um numero exato pfvr')
        }

        if(i < f){
            for(var a= i; a <= f; a+= p){
                tela.innerHTML+=`${a } 👉`
            }

        }else if(i > f){
            for(var a = i; a > f; a-= p){
                tela.innerHTML+=`${a } 👉`
            }

        }
        tela.innerHTML+=('🚀')
    }


}
