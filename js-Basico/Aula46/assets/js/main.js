function criaHoraDosSegundos() {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
}

const Relogio = document.querySelector(".Relogio");
const Iniciar = document.querySelector(".Iniciar");
const Pausar = document.querySelector(".Pausar");
const Zerar = document.querySelector(".Zerar");
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        Relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

Iniciar.addEventListener("click", function () {
    Relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();
});

Pausar.addEventListener("click", function () {
    clearInterval(timer);
    Relogio.classList.add("pausado");
});

Zerar.addEventListener("click", function () {
    clearInterval(timer);
    Relogio.innerHTML = "00:00:00";
    segundos = 0;
});