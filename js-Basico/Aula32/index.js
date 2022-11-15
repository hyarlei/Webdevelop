const pessoa={
    nome: 'Hyarlei',
    sobrenome: 'Silva',
    idade: 18,
    endereco: {
        rua: 'Joaquim Clementino',
        numero: 17
    }
};

//Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa;
console.log(r, nome, resto);