var numero1 = document.querySelector("#numero1");
var numero2 = document.querySelector("#numero2");
var botaosoma = document.querySelector("#botaosoma");
var resultado = document.querySelector("#resultado");



function soma(){
    resultado.textContent = Number(numero1.value)+ Number (numero2.value);


}
botaosoma.onclick = function(){
    soma();
}