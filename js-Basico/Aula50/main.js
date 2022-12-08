// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa("Hyarlei", "Silva");
// const p2 = {
//     nome: "Joao",
//     sobrenome: "Oliveira",
// };

// console.log(p1);
// console.log(p2);

// function duplica(n){
//     return n * 2;
// }

// function triplica(n){
//     return n * 3;
// }

// function quadriplica(n){
//     return n * 4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

function criaMultiplicador(Multiplicador){
    //Multiplicador
    return function multiplicador(n){
        return n * Multiplicador;
    };
}   

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(2));