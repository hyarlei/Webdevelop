//for in -> lê os indices ou chaves do objeto 
// const frutas = ["Maça", "Uva", "Pêra"];

// for(let i = 0; i < frutas.length; i++) {//For normal
//     console.log(frutas[i]);
// }
// for(let indice in frutas){//For in
//     console.log(frutas[indice]);
// }

const pessoa ={
    Nome: "Hyarlei",
    Sobrenome: "Silva",
    Idade: 18
};

for(let chaves in pessoa){
    console.log(chaves, pessoa[chaves]);
}