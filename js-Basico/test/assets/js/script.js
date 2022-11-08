const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNome = e.target.querySelector(".Nome");
    const inputSobrenome = e.target.querySelector(".Sobrenome");
    const inputIdade = e.target.querySelector(".Idade");
    const inputEndereco = e.target.querySelector(".Endereco");
    const inputBairro = e.target.querySelector(".Bairro");
    const inputTelefone = e.target.querySelector(".Telefone");
    
    const Nome = Number(inputNome.value);
    const Sobrenome = Number(inputSobrenome.value);
    const Idade = Number(inputIdade.value);
    const Endereco = Number(inputEndereco.value);
    const Bairro = Number(inputBairro.value);
    const Telefone = Number(inputTelefone.value);

    if (!Nome) {
        setResultado("Nome inválido", false);
        return;
    }

    if (!Sobrenome) {
        setResultado("Sobrenome inválido", false);
        return;
    }

    if (!Idade) {
        setResultado("Idade inválido", false);
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

    const msg = `Suas informações são: ${Nome} ${Sobrenome} ${Idade} ${Endereco} ${Bairro} ${Telefone}}.`;

    setResultado(msg, true);
});

function criap() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = "";

    const p = criap();

    if (isValid) {
        p.classList.add('parágrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}