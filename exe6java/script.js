var ipNumero1 = document.querySelector ("#ipNumero1")
var ipNumero2 = document.querySelector ("#ipNumero2")
var ipNumero3 = document.querySelector ("#ipNumero3")
var ipNumero4 = document.querySelector ("#ipNumero4")
var btMenor = document.querySelector ("#btMenor")
var h1menor =  document.querySelector ("#h1menor")


function encontrarmaior(){

    var menor = Number(ipNumero1.value)
    if(menor > Number(ipNumero2.value)){
        menor = Number(ipNumero2.value)
    }

    if(menor > Number(ipNumero3.value)){
        menor = Number(ipNumero3.value)
    }

    if(menor > Number(ipNumero4.value)){
        menor = Number(ipNumero4.value)
    }

    h1menor.textContent= menor


    }

btMenor.onclick = function (){
    acharmaior();
}