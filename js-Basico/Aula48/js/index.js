//Declaração de uma função (Function hoisting)
falaoi();
function falaoi(){
    console.log("oie");
}

//First-class objects (objetos de primeira  classe)
//Function expression
const souUmDado = function(){
    console.log("Sou um dado.");
};
souUmDado();

//Arrow function
const functionArrow = () => {
    console.log("Sou uma função Arrow");
};
functionArrow();