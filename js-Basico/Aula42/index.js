/* Escreva uma função que recebe um número e retorne o seguinte: 
Numero é divível por 3 = Fizz
Numero é divísivel por 5 = Buzz 
Numero é divísil por 3 e 5 = FizzBuzz
Número é divísivel por 3 e 5 = retorna o próprio número 
Checar se o número é realmente de 0 a 100*/ 

function FizzBuzz(numero){
    if(typeof numero !== "number") return numero;
    if(numero % 3 === 0) return "Fizz";
    if(numero % 5 === 0) return "Buzz";
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    return numero;
}

for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}


