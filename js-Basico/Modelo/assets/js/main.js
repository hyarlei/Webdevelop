function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function RecebeInformaçõesForm(evento){
        evento.preventDefault();

        const Nome = form.querySelector('.Nome');
        const Sobrenome = form.querySelector('.Sobrenome');
        const CPF = form.querySelector('.CPF');
        const Endereco = form.querySelector('.Endereco');
        const Bairro = form.querySelector('.Bairro');
        const Telefone = form.querySelector('.Telefone');

        pessoas.push({
            Nome: Nome.value,
            Sobrenome: Sobrenome.value,
            CPF: CPF.value,
            Endereco: Endereco.value,
            Bairro: Bairro.value,
            Telefone: Telefone.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${Nome.value} ${Sobrenome.value} <br> CPF: ${CPF.value} <br> Endereco: ${Endereco.value} <br> Bairro: ${Bairro.value} <br> Telefone: ${Telefone.value}</p>`;
    }

    form.addEventListener('submit', RecebeInformaçõesForm); 
}
meuEscopo();