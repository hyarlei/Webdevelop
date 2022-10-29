function criarPessoa(nome, sobrenome, idade, Cidade){
    return{
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade,
        Cidade: Cidade
    };
}

const pessoa1 = criarPessoa("Hyarlei", "Silva", 18, "Itapiúna");
const pessoa2 = criarPessoa("Caio", "Yuri", 20, "Baturité");
const pessoa3 = criarPessoa("Thiago", "Viana", 20, "Fortaleza");

console.log(pessoa1.nome, pessoa1.sobrenome, "tem"+ " "+pessoa1.idade, "anos"+" "+"e é de"+" "+pessoa1.Cidade+".");
console.log(pessoa2.nome, pessoa2.sobrenome, "tem"+ " "+pessoa2.idade, "anos"+" "+"e é de"+" "+pessoa2.Cidade+".");
console.log(pessoa3.nome, pessoa3.sobrenome, "tem"+ " "+pessoa3.idade, "anos"+" "+"e é de"+" "+pessoa3.Cidade+".");
