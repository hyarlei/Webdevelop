const h1 = document.querySelector(".container h1");
const data = new Date();
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }
}

// function getDiaSemanaTexto(diaSemana){
//     const diasSemana = ["domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
//     return diasSemana[diaSemana];
// }

function getMesesTexto(Mes) {
    let MesTexto;

    switch (Mes) {
        case 0:
            MesTexto = "Janeiro";
            return MesTexto;;
        case 1:
            MesTexto = "Fevereiro";
            return MesTexto;;
        case 2:
            MesTexto = "Março";
            return MesTexto;;
        case 3:
            MesTexto = "Abril";
            return MesTexto;;
        case 4:
            MesTexto = "Maio";
            return MesTexto;;
        case 5:
            MesTexto = "Junho";
            return MesTexto;
        case 6:
            MesTexto = "Julho";
            return MesTexto;
        case 7:
            MesTexto = "Agosto";
            return MesTexto;
        case 8: 
            MesTexto = "Setembro";
            return MesTexto;
        case 9:
            MesTexto = "Outubro";
            return MesTexto;
        case 10:
            MesTexto = "Novembro";
            return MesTexto;
        case 11:
            MesTexto = "Dezembro";
            return MesTexto;
        default:
            MesTexto = "";
            return MesTexto;
    }
}

// function getMesesTexto(numeroMes){
//     const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//     return meses[numeroMes];
// }

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const Mes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesesTexto(Mes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}<br>` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full", timeStyle: "short" });