/*Hyarlei Silva tem 18 anos, sua data de nascimento é 17 de Abril de 2004, pesa 70 KG
tem 1.8 metros de altura e seu IMC é de 21.604938271604937.*/

const nome = 'Hyarlei Silva';
const sobrenome = 'Freitas';
const idade = 18;
const peso = 70;
const altura = 1.80;
let IMC;//Indice de massa corporal. 
let anoNascimento;

//ano de nascimento.
//anoAtual - idade.

//peso / (altura * altura).
const resultado = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome +' tem ' + idade + ' anos, seu ano de nascimento é ' + anoNascimento +', pesa '+ peso +'KG');
console.log('tem '+ altura + ' metros de altura e seu IMC é de '+ resultado +'.');