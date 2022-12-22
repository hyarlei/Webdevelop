//Função construtora -> Objetos
//Função fábrica -> Objetos
//Contrutora -> Pessoa (New)
class Pessoa {
    constructor(Nome, Sobrenome) {
        this.nome = Nome;
        this.Sobrenome = Sobrenome;

        this.metodo = function () {
            console.log(this.nome + " " + this.Sobrenome + " " + ": sou um método");
        };
    }
}

const p1 = new Pessoa("Hyarlei", "Silva");
const p2 = new Pessoa("Fulano", "deTal");
p1.metodo();
p2.metodo();
