//Exercício completo de classe e métodos
class Heroi {

	constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    ataque = "";
    
    atacar() {

		if (this.tipo === "mago") {
    		this.ataque = "magia";
        
		} else if (this.tipo === "guerreiro") {
    		this.ataque = "espada";

		} else if (this.tipo === "monge") {
    		this.ataque = "artes marciais";

		} else if (this.tipo === "ninja") {
    		this.ataque = "shuriken";
		}
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let novoHeroi = new Heroi("Wirley", 53, "ninja")
novoHeroi.atacar();