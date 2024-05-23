var numero1 = document.getElementById('numero1');
var botao = document.getElementById('botao');
var impar = document.getElementById('impar');

botao.onclick = function(){
 if (Number (numero1.value) % 2 === 1){
    alert('o numero e impar')

    } else { alert('o numero e par')

}
}

