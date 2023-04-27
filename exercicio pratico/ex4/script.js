function calcular(){
    var numero = document.getElementById('numero')
    var tela = document.getElementById('tela')
    var num = Number(numero.value)

    var n1= num * 1
    var n2= num * 2
    var n3= num * 3
    var n4= num * 4
    var n5= num * 5
    var n6= num * 6
    var n7= num * 7
    var n8= num * 8
    var n9= num * 9
    var n10= num * 10

    tela.innerHTML= ` 
    <p>${num} x 1 = ${n1}</p> 
    <p>${num} x 2 = ${n2}</p> 
    <p>${num} x 3 = ${n3}</p> 
    <p>${num} x 4 = ${n4}</p> 
    <p>${num} x 5 = ${n5}</p> 
    <p>${num} x 6 = ${n6}</p> 
    <p>${num} x 7 = ${n7}</p> 
    <p>${num} x 8 = ${n8}</p> 
    <p>${num} x 9 = ${n9}</p> 
    <p>${num} x 10 = ${n10}</p> 
    ` 

}