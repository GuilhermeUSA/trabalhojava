var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');
var botao  = document.getElementById('botao');
var resultado = document.getElementById('resultado');

botao.onclick = function(){
    var val1 = Number(valor1.value);
    var val2 = Number(valor2.value);
    var maiorvalor;

    if (val1 > val2){
        maiorvalor = val1;
    }
    else{
        if (val2 > val1){
            maiorvalor = val2;
        }
        else{
            maiorvalor = 'Os valores sao iguais';
        }
    }
    resultado.innerHTML = maiorvalor;
    
}

