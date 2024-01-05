//Exercício de classe
class formaDeBolo{
	constructor(saborDaMassa, saborDoRecheio){
    	this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
    escrever(){
    	console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
	}
}
let boloFesta = new formaDeBolo("massa de chocolate", "Nutella")

boloFesta.escrever()