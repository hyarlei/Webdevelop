function API() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const Relatorios = [];

    function RecebeInformaçõesForm(evento) {
        evento.preventDefault();

        const Nome = form.querySelector(".Nome");
        const Sobrenome = form.querySelector(".Sobrenome");
        const Idade = form.querySelector(".Idade");
        const Endereco = form.querySelector(".Endereco");
        const Bairro = form.querySelector(".Bairro");
        const Telefone = form.querySelector(".Telefone");

        Relatorios.push({
            Nome: Nome.value, Sobrenome: Sobrenome.value, Idade: Idade.value, Endereco: Endereco.value, Bairro: Bairro.value, Telefone: Telefone.value
        });

        console.log(Relatorios);

        resultado.InnerHTML += `<p> Nome: ${Nome} <br> Sobrenome: ${Sobrenome} <br> Idade: ${Idade} <br> Endereco${Endereco} <br> Bairro: ${Bairro} <br> Telefone: ${Telefone}</p>`;
    }

    form.addEventListener('submit', RecebeInformaçõesForm);
}
API();