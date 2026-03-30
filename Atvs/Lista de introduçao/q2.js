function calcular() {
let media = document.getElementById("media_parcial").value;

if (media < 60) {
    //media_final(60)= media_parcial + nota_final/2
    nota_f = 120 - media
    document.getElementById("situação").innerHTML = 
    "É prciso tirar " + nota_f + " na av final"; 
} else {
    document.getElementById("situação").innerHTML = "aprovado"
}
}