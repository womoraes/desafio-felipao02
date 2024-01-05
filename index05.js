//Exercício de condicionais
let type = "monge"
 		
if (type === "mago") {
    ataque = "magia";
        
} else if (type === "guerreiro") {
    ataque = "espada";

} else if (type === "monge") {
    ataque = "artes marciais";

} else if (type === "ninja") {
    ataque = "shuriken";
}

console.log("O tipo " + type + " possui ataque " + ataque)