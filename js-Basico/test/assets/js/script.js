const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNome = e.target.querySelector(".Nome");
    const inputSobrenome = e.target.querySelector(".Sobrenome");
    const inputEndereco = e.target.querySelector(".Endereco");
    const inputBairro = e.target.querySelector(".Bairro");
    const inputTelefone = e.target.querySelector(".Telefone");

    const Nome = String(inputNome.value);
    const Sobrenome = String(inputSobrenome.value);
    const Endereco = String(inputEndereco.value);
    const Bairro = String(inputBairro.value);
    const Telefone = String(inputTelefone.value);

    if (!Nome) {
        setResultado("Nome inválido", false);
        return;
    }

    if (!Sobrenome) {
        setResultado("Sobrenome inválido", false);
        return;
    }


    if (!Endereco) {
        setResultado("Endereco inválido", false);
        return;
    }

    if (!Bairro) {
        setResultado("Bairro inválido", false);
        return;
    }

    if (!Telefone) {
        setResultado("Telefone inválido", false);
        return;
    }

    const msg = `Suas informações são: <br>Nome: ${Nome} ${Sobrenome}<br> Endereco: ${Endereco}<br> Bairro: ${Bairro}<br> Telefone: ${Telefone}.`;  
    const msg2 = `informaçoes enviadas com sucesso!`; 

    setResultado(msg,msg2, true);
});

function criap() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg,msg2, isValid) {
    const resultado = document.querySelector('.resultado');
    const resultado2 = document.querySelector('.ok');
    resultado.innerHTML = "";
    resultado2.innerHTML ="";

    const p = criap();
    const p2 = criap();

    if (isValid) {
        p.classList.add('parágrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    p2.innerHTML= msg2;
    resultado2.appendChild(p2)
    resultado.appendChild(p);
}