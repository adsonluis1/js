function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('fim')
    var tela = document.getElementById('tela')

    var i = inicio.value
    var f = fim.value
    var p = passos.value

    if(i <= 0 || f <= 0 || p<=0){
        alert('[ERRO] coloque um numero valido')
    }
    else{
    for(var a = i; a <= f; a++){
        tela.innerText= a
    }
    }
}