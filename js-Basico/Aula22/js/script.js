function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const Nome = form.querySelector('.Nome');
        const Sobrenome = form.querySelector('.Sobrenome');
        const Peso = form.querySelector('.Peso');
        const Altura = form.querySelector('.Altura');

        pessoas.push({
            Nome: Nome.value, Sobrenome: Sobrenome.value, Peso: Peso.value, Altura: Altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome:${Nome.value} ${Sobrenome.value}<br> Peso:${Peso.value} <br>Altura:${Altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);  
}
meuEscopo();