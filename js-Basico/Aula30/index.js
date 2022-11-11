const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = "Hyarlei"; // Criando
var nome2 = "Hyarlei";

var nome2 = "Silva"; // Redeclaranda
console.log(nome, nome2);

if(verdadeira){
    let nome ="Silva"; // Criando

    if(verdadeira){
        let nome = "Outra coisa";
    }
}