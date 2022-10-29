/*
primitivos (imutáveis) - String, number, boolean, undefined, 
nuul (bigint, Symbol) - Valores, copiados

Referencia (mutável) -array, object, function - passados por referencia
*/

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push("Hyarlei");
// console.log(a, c);

const a = {
    nome: "Hyarlei",
    sobrenome: "Silva"
};

const b = a;

b.nome = "fulano";
console.log(a);
console.log(b);