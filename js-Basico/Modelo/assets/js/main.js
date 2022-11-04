const form = document.querySelector('.formulário');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector(".Peso");
    const inputAltura = e.target.querySelector(".Altura");

    const Peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    if (!Peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!Altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const IMC = getIMC(Peso, Altura);
    const nivelImc = getNivelImc(IMC);

    const msg = `Seu IMC é ${IMC} (${nivelImc})}.`;

    setResultado(msg, true);
});


function getNivelImc(IMC) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (IMC >= 39.9) return nivel[5];
    if (IMC >= 34.9) return nivel[4];
    if (IMC >= 29.9) return nivel[3];
    if (IMC >= 24.9) return nivel[2];
    if (IMC >= 18.5) return nivel[1];
    if (IMC < 18.5) return nivel[0];

}

function getIMC(Peso, Altura) {
    const IMC = Peso / Altura ** 2;
    return IMC.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
        p.classList.add('parágrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}