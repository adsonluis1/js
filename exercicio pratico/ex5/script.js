let numero = document.getElementById('numero')
let tela = document.getElementById('tela')
let tela2 = document.getElementById('tela2')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 || Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function islist(n , l){

}



function adicionar(){
    if(isnumero(numero.value) && islist(numero.value , valores)){
    
    }else{alert('hihi')}
}