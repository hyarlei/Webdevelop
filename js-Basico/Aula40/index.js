// Faça um Programa, ele deve dentro de uma função receber dois números e retornar o maior deles.
const num1 = 10;
const num2 = 24;
function recebeN(num1, num2) {

    if (num1 >= num2) {
         console.log("o maior numero e: ", num1);
    }

    else {
        console.log("o maior numero e: ", num2);
    }
}
recebeN(num1, num2);

/* const max2 = (x, y) => x > y ? x : y;
console.log("o maior numero e: "+ max2(10, 99)); */

