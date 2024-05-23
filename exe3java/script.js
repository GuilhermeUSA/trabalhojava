var saldo = document.getElementById('saldo');
var botao = document.getElementById('button');
var resultado = document.getElementById('resultado');





botao.onclick = function() {
    var reajuste = saldo.value * 0.01;
    resultado.innerHTML = reajuste + Number(saldo.value);
}
