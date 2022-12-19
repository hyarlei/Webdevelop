// IIFE -> immediately invoked function expression

(function (idade, peso, altura){
    const sobrenome = "Silva";
    function CriaNome(nome){
        return "Nome: "+ nome + " " + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome("Hyarlei"));
    }

    falaNome();
    console.log(
    "Idade: "+idade, 
    "Peso: " + peso, 
    "Altura: " + altura
    );

})(18, 76, 1.74);