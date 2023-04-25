var idade = 64

if(idade <= 15){
    console.log('vc nn tem idade para votar')
}
else if(idade >=16 && idade < 17) {
    console.log( 'voto opcional')
}
else if(idade > 18 && idade <= 64){
    console.log('voto obrigatorio')
}
else{
    console.log('vota por opção')
}