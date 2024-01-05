//Desafio com condicional e variaveis
let heroi = "Bill"
let resultado = rankeadas(590, 5)
let nivel = ""

function rankeadas(numV, numD){
	let diferenca = numV - numD
    return diferenca
}

if(resultado <= 10){
    nivel = "Ferro"
}
else if(resultado <= 20) {
	nivel = "Bronze"
}
else if(resultado <= 50){
    nivel = "Prata"
}
else if(resultado <= 80){
    nivel = "Ouro"
}
else if(resultado <= 90){
    nivel = "Diamente"
}
else if(resultado <= 100){
    nivel = "Lendário"
}
else if(resultado > 100){
    nivel = "Imortal"
}
console.log("O herói de nome " + heroi + " tem " + resultado + " vitórias e ele está no nível: " + nivel)