//Desafio do Felipão
let heroi = "Bill";
let xp = 15000
let nivel = ""

if(xp <= 1000){
    nivel = "Ferro"
}
else if(xp <= 2000){
    nivel = "Bronze"
}
else if(xp <= 3000){
    nivel = "Prata"
}
else if(xp <= 4000){
    nivel = "Ouro"
}
else if(xp <= 5000){
    nivel = "Platina"
}
else if(xp <= 6000){
    nivel = "Diamente"
}
else if(xp <= 7000){
    nivel = "Ascendente"
}
else if(xp <= 8000){
    nivel = "Imortal"
}
else if(xp > 8000){
    nivel = "Radiante"
}

console.log("O herói de nome: " + heroi + " está no nível: " + nivel)
