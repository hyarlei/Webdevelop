let varA = 'A';// B
let varB = 'B';// C
let varC = 'C';// A

const vartemp = varA;
varA = varB;
varB = varC;
varC = vartemp;

console.log(varA, varB, varC);