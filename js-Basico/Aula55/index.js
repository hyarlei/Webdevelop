//Factory function (Função fábrica)
//Contructor function (Function construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            console.log(valor);
        },

        fala: function (assunto) {
            assunto = ("Seu imc está calculado: ");
            return `Seu nome é: ${this.nome}, ${assunto}`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Hyarlei", "Silva", 1.74, 76);
// console.log("Seu nome é: " + p1.nomeCompleto + " " + "e seu imc é: " + p1.imc);
// // console.log(p1.imc());
// const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);
// console.log("Seu nome é: " + p2.nomeCompleto + " " + "e seu imc é: " + p2.imc);
p1.nomeCompleto = "Maria Oliveira Silva";   
console.log(p1.nomeCompleto);
console.log(p1.fala() + p1.imc);
