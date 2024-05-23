var ipValor1 = document.getElementById("ipValor1");
var ipValor2 = document.getElementById("ipValor2");
var ipValor3 = document.getElementById("ipValor3");
var btCalcular = document.getElementById("btcalcular");
var h3Resultado = document.getElementById("h3Resultado");

function calcularMedias(){
var valor1 = Number(ipValor1.value);
var valor2 = Number(ipValor2.value);
var valor3 = Number(ipValor3.value);

var mediaAritimetica = (valor1 + valor2 + valor3) / 3;

var somapesos = 3 + 2 + 5;
var somaValorPesos = (valor1 *3) + (valor2 * 2) + (valor3 *5);
var mediaponderada = somaValorPesos / somapesos;
var somaMedias = mediaAritimetica + mediaponderada;
var mediadasmedias = somaMedias / 2; 

h3Resultado.innerHTML = "Media Aritmetica:" +mediaAritimetica+ "<br>"+
                        "Media Ponderada:" +mediaponderada+ "<br>"+
                        "Soma das Medias:"+somaMedias+ "<br>"+
                        "Media das Medias"+mediadasmedias;






}

btCalcular.onclick = function(){
    calcularMedias();
}
