// const pessoa = {
//     nome: "Hyarlei", 
//     sobrenome: "Silva"
// };

// for(let chave in pessoa){
//     console.log(chave, pessoa[chave]);
// }

//for clássico  - geralmente com interáveis (array ou strings)
//for in - retorna o indice ou chave (strings, array ou objetos)
//for of - retorna o valor em si (interáveis, arrays ou strings)


const nomes = ["Hyarlei", "Silva", "Freitas"];

// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// console.log("###");

// for(let i in nomes){
//     console.log(nomes[i]);
// }

// console.log("###");

for(let valor of nomes){
    console.log(valor);
}

// console.log("###");

// nomes.forEach(function(valor, indice, array){
//     console.log(valor, indice, array);
// });//for ultilzado dentro da função