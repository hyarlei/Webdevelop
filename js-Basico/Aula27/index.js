function zeroAEsquerda(num){
 return num >= 10 ? num : `0${num}`;
}
function formatData(data){

    const Dia = zeroAEsquerda(data.getDate());
    const Mes = zeroAEsquerda(data.get());
    const Ano = zeroAEsquerda(data.getMonth() + 1); //Mês começa do zero
    const Hora = zeroAEsquerda(data.getFullYear());
    const Minutos = zeroAEsquerda(data.getHours());
    const Segundos = zeroAEsquerda(data.getMinutes());
     
    return `${Dia}/ ${Mes}/ ${Ano} ${Hora}: ${Minutos}: ${Segundos}`;
}

const data = new Date();
const DataBrasil = formatData(data);
console.log(DataBrasil);

// console.log("ms: ", data.getMilliseconds());
// console.log("Dia da semana: ", data.getDay());// 0 - Domingo, 6 - Sábado
// console.log(data.toString());
// // console.log(Date.now());